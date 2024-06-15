import React, {useState} from 'react'
import { getItem, setItem } from '../services/LocalStorageFuncs'

export const Register = (props) => {
  const user = getItem('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('') 
  const [pass, setPass] = useState('')
  const [img, setImg ] = useState('')
  const [cpf, setCpf] = useState('')
  const [saldo, setSaldo] = useState('')

  const cond = (
    name.length > 3 && (email.includes ('@') && email.length > 8 ) 
    && pass.length > 8 && img.length > 4 && cpf.length === 12
    && saldo.length > 2
  )

  const saveChanges =() => {
    setItem('usuario',{name, email, pass, img, cpf, saldo})
    const { history: { push }} = props
    push('/profile')
  }
  return (
    <div>
      <h1>FAÇA SEU REGISTRO</h1>

      <br /><br /> <br />

      <p>Name</p>
      <input
      type="text"
      value={name}
      onChange={({target: {value}}) => setName(value)} 
      />

      <p>Email</p>
      <input
      type="email"
      value={email}
      onChange={({target: {value}}) => setEmail(value)} 
      />

      <p>Password</p>
      <input
      type="password"
      value={pass}
      onChange={({target: {value}}) => setPass(value)} 
      />

      <p>Image Url</p>
      <input
      type="text"
      value={img}
      onChange={({target: {value}}) => setImg(value)} 
      />

      <p>CPF</p>
      <input
      type="number"
      value={cpf}
      onChange={({target: {value}}) => setCpf(value)} 
      />

      <p>Saldo</p>
      <input
      type="number"
      value={saldo}
      onChange={({target: {value}}) => setSaldo(value)} 
      />

      <br /><br /> <br />
      <button
        disabled={!cond}
        onClick={saveChanges}
      >
        Save Changes
      </button>

    </div>
  )
}

