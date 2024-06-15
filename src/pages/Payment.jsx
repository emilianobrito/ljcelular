import React, { useState } from 'react'
import {getItem} from '../services/LocalStorageFuncs'
import { AiFillCheckCircle } from 'react-icons/ai'
import styled from 'styled-components'
import { Loading } from '../components/Loading';
import { MdCancel } from 'react-icons/md'

const PaymentArea = styled.div`
  span {
    font-size: 80px;
    color: green;
  }
`;  
export const Payment = (props) => {
  const [loading, setLoading] =useState(true)

  setTimeout(() => {
    setLoading(false)
  },2500)
  const { params: { price }} = props.match 
  const user = getItem('usuario')
  return (
    <>
    {
      loading ? <Loading/> : (
        user.saldo < price ? (<div>
          <span><MdCancel style={{fontSize: '45px', color:'red'}} /></span>
          <p>Seu Saldo é insuficiente!!</p>
        </div>): (
        <PaymentArea>
          <h2>Sua compra foi concluida com sucesso!!</h2>
          <span> <AiFillCheckCircle /></span>
          <h4>{`Valor: R$ ${price}`}</h4>
          <h4>{`Comprador: ${user.name}`}</h4>
          <h4>{`Prazo: ${ Math.ceil(Math.random() * 28) + 1} dias`}</h4>
        </PaymentArea>
        )
      )       
    }
    </>
  )
}



