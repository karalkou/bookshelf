import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Dialog } from '@reach/dialog'

import { Logo } from './components/logo'

import '@reach/dialog/styles.css'

function LoginForm({ onSubmit, buttonText }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleUsrChange = e => setUserName(e.target.value)
  const handlePswChange = e => setPassword(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ userName, password })
  }

  return (
    <div>
      <div>
        <input type='text' value={userName} onChange={handleUsrChange} />
      </div>
      <div>
        <input type='text' value={password} onChange={handlePswChange} />
      </div>
      <button onClick={handleSubmit}>{buttonText}</button>
    </div>
  )
}

function App() {
  const [openModal, setOpenModal] = React.useState('none')
  const handleLoginSubmit = (formData) => {
    console.log('login', formData)
  }
  const handleRegisterSubmit = (formData) => {
    console.log('login', formData)
  }

  return (
    <div>
      <Logo width='80' height='80' />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>

      <Dialog aria-label='Login form' isOpen={openModal === 'login'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>
        <h3>Login</h3>
        <LoginForm onSubmit={handleLoginSubmit} buttonText='Login' />
      </Dialog>

      <Dialog aria-label='Registration form' isOpen={openModal === 'register'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>
        <h3>Register</h3>
        <LoginForm onSubmit={handleRegisterSubmit} buttonText='Register' />
      </Dialog>
    </div>
  )
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
