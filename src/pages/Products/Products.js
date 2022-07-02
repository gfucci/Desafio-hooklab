//CSS
import styles from './Products.module.css'

//hooks
import { Link, useNavigate } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useDeleteDocument } from '../../hooks/useDeleteDocument'

const Products = () => {

  const { documents: products } = useFetchDocuments("products")
  const { deleteDocument } = useDeleteDocument("products")

  const navigate = useNavigate()

  return (
    <div className={styles.products}>
      <h1>Gerencie seus produtos</h1>
      {products && products.length === 0 ? (
        <div className={styles.noposts}>
          <p>Voce não tem produtos cadastrados</p>
          <Link to="/newproduct" className='btn'>Cadastrar Produto</Link>
        </div>
      ) : (
        <div className={styles.title_table}>
            <span>Código</span>
            <span>Produto</span>
            <span>Marca</span>
            <span>Preço</span>
            <span>Ações</span>
        </div>
      )}

      {products &&
        products.map((product) => (
          <div className={styles.products_list} key={product.id}>
              <p>{product.uid}</p>
              <p>{product.name}</p>
              <p>{product.brand}</p>
              <p>R$ {product.price}</p>
            <div>
              <button className="btn_edit" onClick={() => navigate(`/products/edit/${product.id}`)}>Editar</button>
              <button className='btn_remove' onClick={() => deleteDocument(product.id)}>Excluir</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default Products