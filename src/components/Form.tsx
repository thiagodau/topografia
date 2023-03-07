import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

import './Form.css'

export function Form() {
  const [projectName, setProjectName] = useState('')
  const [owner, setOwner] = useState('')
  const [cpf, setCpf] = useState('')
  const [matricula, setMatricula] = useState('')
  const [address, setAddress] = useState('')

  const createdReport = () => {
    setDataLocalStorage()
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      console.log('You must have pressed Enter ')
      setDataLocalStorage()
    }
  }

  const setDataLocalStorage = () => {
    localStorage.setItem('@projectName', projectName)
    localStorage.setItem('@owner', owner)
    localStorage.setItem('@cpf', cpf)
    localStorage.setItem('@matricula', matricula)
    localStorage.setItem('@address', address)
  }

  return (
    <div className='Form' onKeyDown={handleKeyPress}>
      <div className='Form-container'>
        <div className='container color'>
          <div>
            <img src={logo} alt="Logomarca" width={'120px'} />
          </div>
          <div>
            <h1>Relatório Fotográfico</h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div>
            <p style={{ fontSize: '10px', color: 'gray' }}>Desenvolido por <a href="https://api.whatsapp.com/send?phone=5567992817962&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20projeto%20Topografia%20Relatorio." target='_blank' style={{ color: 'gray' }}><strong>Thiago↗</strong></a> .</p>
          </div>
        </div>
        <div className='container'>
          <div>
            <h3>Informações</h3>
            <p>
              <span>Nome do Projeto</span>
              <input type="text" placeholder="Informe o nome do Projeto"
                onChange={(e) => { setProjectName(e.target.value) }} />
            </p>
            <p>
              <span>Proprietário/Requerente</span>
              <input type="text" placeholder="Informe o Proprietário/Requerente"
                onChange={(e) => { setOwner(e.target.value) }} />
            </p>
            <p>
              <span>CPF</span>
              <input type="text" placeholder="Informe o CPF"
                onChange={(e) => { setCpf(e.target.value) }} />
            </p>
            <p>
              <span>Matrícula</span>
              <input type="text" placeholder="Informe a Matricula"
                onChange={(e) => { setMatricula(e.target.value) }} />
            </p>
            <p>
              <span>Endereço</span>
              <input type="text" placeholder="Informe o Endereço"
                onChange={(e) => { setAddress(e.target.value) }} />
            </p>
            <p>
              <Link to={'/report'}>
                <button onClick={() => { createdReport() }}>Gerar Relatório Fotográfico</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}