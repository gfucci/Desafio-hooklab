//CSS
import styles from './Home.module.css'

//router
import { Link } from 'react-router-dom'

import img from '../../img/businessplanning_7516387.png'

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Bem-Vindo ao seu gerenciador de produtos</h1>
      <img src={img} alt="logo" />
      <Link to="/newproduct" className='btn'>Cadastrar Produto</Link>
    </div>
  )
}

export default Home