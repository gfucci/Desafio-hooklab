import styles from './EditProduct.module.css'

//hooks
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'

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
    const { updateDocument, response } = useUpdateDocument("products")

    const handleSubmit = (e) => {
        setFormError("")
    
        e.preventDefault()

        const data = {
            uid,
            name,
            brand,
            price
        }
    
        //form messages
        function errorMessage(msg) {
          setFormError(msg)
        }
    
        function successMessage(msg) {
          setFormSuccess(msg)
        }
    
        setTimeout(errorMessage, 3000)
        setTimeout(successMessage, 3000)
    
        //validate form
        if (!uid || !name || !brand || !price) {
          errorMessage("Por favor, preencha todos os campos")
        } else if (price === 0) {
          errorMessage("Não aceitamos produto de graça!")
        } else if (uid === 0) {
          errorMessage("O código do produto tem que ser maior que 0")
        } else {
          successMessage("Produto atualizado com sucesso")
    
          updateDocument(id, data)
    
          //clean inputs
          setUid("")
          setName("")
          setBrand("")
          setPrice("")
        }
      }

    useEffect(() => {
        
        if (product) {
            setUid(product.uid)
            setName(product.name)
            setBrand(product.brand)
            setPrice(product.price)
        }

    }, [product])

    return (
        <div>
          <h2 className={styles.title}>Edite seu produto</h2>
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
            {!response.loading && <button type="submit" className='btn'>Atualizar</button>}
            {response.loading && <button type="submit" className='btn' disabled>Atualizando...</button>}
            {(response.error || formError) && (<p className='error'>{response.error || formError}</p>)}
            {formSuccess && (<p className='success'>{formSuccess}</p>)}
          </form>
        </div>
      )
}

export default EditProduct