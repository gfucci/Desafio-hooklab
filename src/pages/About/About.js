//CSS
import styles from './About.module.css'

//Router
import { Link } from 'react-router-dom'
//import { useNavigate } from 'react-router'

const About = () => {

  return (
    <div>
      <h1>Este projeto é um desafio da HookLab</h1>
      <p>O projeto consiste em um gerenciador de produtos</p>
      <Link 
        to="/products" 
        className='btn'
      >
        Cadastrar Produto
      </Link>
      <p>Código do Projeto</p>
      <a 
        href="https://github.com/gfucci/react-blog" 
        target="_blank" 
        rel="noopener noreferrer" 
        className='btn'
      >
        GitHub
      </a>
    </div>
  )
}

export default About