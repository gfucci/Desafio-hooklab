//CSS
import styles from './Products.module.css'

//hooks
import { Link } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Products = () => {

  const { documents: products, loading, error } = useFetchDocuments("products")

  return (
    <div className={styles.products}>
      <h1>Gerencie seus produtos</h1>
      {products && products.length === 0 ? (
        <>
          <p>Voce não tem produtos cadastrados</p>
          <Link to="/newproduct" className='btn'>Cadastrar Produto</Link>
        </>
      ) : (
        <>
          <div className={styles.title_table}>
            <h3>Código</h3>
            <h3>Produto</h3>
            <h3>Marca</h3>
            <h3>Preço</h3>
            <h3>Ações</h3>
          </div>
          {products &&
            products.map((product) => (
              <div className={styles.products_list} key={product.id}>
                <p>{product.id}</p>
                <p>{product.name}</p>
                <p>{product.brand}</p>
                <p>R$ {product.price}</p>
                <div>
                  <button>EDITAR</button>
                  <button>DELETAR</button>
                </div>
              </div>
            ))
          }
        </>
      )}
    </div>
  )
}

export default Products