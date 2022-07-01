import styles from './EditProduct.module.css'

//hooks
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const EditProduct = () => {

    //controlled inputs
    const [uid, setUid] = useState("")
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState("")
    const [formError, setFormError] = useState()
    const [formSuccess, setFormSuccess] = useState()

    const { id } = useParams()
    const { document: product } = useFetchDocument("products", id)

    console.log(product)

    function handleSubmit() {

    }

    return (
        <div>
          <h2 className={styles.title}>Editando o produto: {product.name}</h2>
          <form onSubmit={handleSubmit} className={styles.form_control}>
            <label>
              <span>Código:</span>
              <input 
                type="number" 
                name="id" 
                placeholder='Digite o id do produto'
                value={uid} 
                onChange={(e) => setUid(e.target.value)} 
              />
            </label>
            <label>
              <span>Nome:</span>
              <input 
                type="text" 
                name="name" 
                placeholder='Digite o nome do produto' 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </label>
            <label>
              <span>Marca:</span>
              <input 
                type="text" 
                name="brand" 
                placeholder='Digite a marca do produto' 
                value={brand} 
                onChange={(e) => setBrand(e.target.value)} 
              />
            </label>
            <label>
              <span>Preço R$:</span>
              <input 
                type="number" 
                name="price" 
                placeholder='Digite o preço do produto'
                min="0.00"
                step="0.01"
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
              />
            </label>
            {/*{!response.loading && <button type="submit" className='btn'>Cadastrar</button>}
            {response.loading && <button type="submit" className='btn' disabled>Cadastrando...</button>}
            {(response.error || formError) && (<p className='error'>{response.error || formError}</p>)}
            {formSuccess && (<p className='success'>{formSuccess}</p>)}*/}
          </form>
        </div>
      )
}

export default EditProduct