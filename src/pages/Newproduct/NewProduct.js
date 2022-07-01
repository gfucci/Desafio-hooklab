//CSS
import styles from './NewProduct.module.css'

//hooks
import { useState } from 'react'
import { useInsertDocument } from '../../hooks/useInsertDocument'

const NewProduct = () => {

  //controlled inputs
  const [uid, setUid] = useState("")
  const [name, setName] = useState("")
  const [brand, setBrand] = useState("")
  const [price, setPrice] = useState("")
  const [formError, setFormError] = useState()
  const [formSuccess, setFormSuccess] = useState()

  const { insertDocument, response } = useInsertDocument("products")

  //Submit form
  const handleSubmit = (e) => {
    setFormError("")

    e.preventDefault()

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
      successMessage("Produto cadastrado com sucesso")

      insertDocument({
        uid,
        name,
        brand,
        price
      })

      //clean inputs
      setUid("")
      setName("")
      setBrand("")
      setPrice("")
    }
  }

  return (
    <div>
      <h2 className={styles.title}>Cadastre um produto</h2>
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
        {!response.loading && <button type="submit" className='btn'>Cadastrar</button>}
        {response.loading && <button type="submit" className='btn' disabled>Cadastrando...</button>}
        {(response.error || formError) && (<p className='error'>{response.error || formError}</p>)}
        {formSuccess && (<p className='success'>{formSuccess}</p>)}
      </form>
    </div>
  )
}

export default NewProduct