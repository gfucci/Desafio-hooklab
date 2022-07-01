//CSS
import styles from './Products.module.css'

//hooks
import { Link } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useDeleteDocument } from '../../hooks/useDeleteDocument'

const Products = () => {

  const { documents: products } = useFetchDocuments("products")
  const { deleteDocument } = useDeleteDocument("products")


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
            <span className={styles.align_span}>Produto</span>
            <span className={styles.align_span}>Marca</span>
            <span className={styles.align_span}>Preço</span>
            <span className={styles.align_span}>Ações</span>
        </div>
      )}

      {products &&
        products.map((product) => (
          <div className={styles.products_list} key={product.id}>
              <p className={styles.align_uid}>{product.uid}</p>
              <p className={styles.align_name}>{product.name}</p>
              <p className={styles.align_brand}>{product.brand}</p>
              <p className={styles.align_price}>R$ {product.price}</p>
            <div>
              <Link to={`/products/edit/${product.id}`} className='btn_edit'>Editar</Link>
              <button className='btn_remove' onClick={() => deleteDocument(product.id)}>Excluir</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default Products