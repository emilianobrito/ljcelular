import React, { useState } from 'react'
import {getItem, setItem } from './services/LocalStorageFuncs'

export const Login = (props) => {
  const user = getItem('usuario')

  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [passIncorret, setPassIncorret] = useState(false)

  const cond = (name.length > 3 && pass.length > 5)

  // const saveUser = (name, pass) => {
  //   setItem('usuario',{name,pass})
  //   const {history: {push}} = props;
  //   push('/store')
  // }

  const saveUser = (name, pass) => {
    const {history: {push}} = props
    if(name === user.name && pass === user.pass){
      push('/')
      return
    }else if(name === user.name && pass !== user.pass){
      setPassIncorret(true)
      return (console.log('senha invalida'))
    }
    setItem('usuario',{name,pass})
    push('/')
  }
  return (
    <div>
      <p>Name</p>
      <input
      type="text"
      onChange={({target:{value}}) => setName(value)}
      value={name}
      />

      <p>Password</p>
      <input
      type="password"
      onChange={({target: {value}}) => setPass(value)}
      value={pass}
      />
      <br /> <br />

      {passIncorret && <p>Passoword Incorrect</p>}

      <button
        type='button'
        disabled={!cond}
        onClick={() => saveUser(name,pass)}
      >
        Sing In
      </button>
    </div>
  )
}