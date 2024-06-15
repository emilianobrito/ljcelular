import React, { useState } from 'react'
import {getItem, setItem} from '../services/LocalStorageFuncs'; 
import { BsFillCartDashFill } from 'react-icons/bs'
import { ProductsArea } from '../css/style';


export const Cart = (props) => {
  const [data, setData] = useState(getItem('carrinhoyt') || [])

  const removeItem = (obj) => { 
    const arrFilter = data.filter((e) => e.id !== obj.id) 
    setData(arrFilter) 
    setItem('carrinhoyt', arrFilter)
  }
  const handleClick = () => {
    const {history: {push}} = props
    push(`/payment/${SubTotal}`)
    setItem('carrinhoyt', [])
  }

  const SubTotal = data.reduce((acc, cur) => acc + cur.price ,0)
  console.log(SubTotal)
  
  return (
    <div>
      <h3>{`SubTotal: R$ ${SubTotal}`}</h3>
      <ProductsArea>
        {
          data.map((e) => (
            <div key={e.id}>
              <h4>{`R$ ${e.price}`}</h4>
              <img src={e.thumbnail} alt={e.title} />
              <h4>{e.price}</h4>
              <button onClick={() => removeItem(e)}>
                <BsFillCartDashFill />
              </button>
            </div>
          ))
        }
      </ProductsArea>
      <button
        disabled={!SubTotal > 0}
        onClick={handleClick}
      >
        Comprar
      </button>
      <br /> <br />
    </div>
  )
}

