//CSS
import styles from './NewProduct.module.css'

//hooks
import { useState } from 'react'

const NewProduct = () => {

  //controlled inputs
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [brand, setBrand] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [error, setError] = useState("")

  //Submit form
  const handleSubmit = (e) => {
    setError("")

    e.preventDefault()

    const products = {
      id,
      name,
      brand,
      price
    }

    if (error) {
      setError("Por favor colocar um preço maior que 0")
    }

    //clean inputs
    setId("")
    setName("")
    setBrand("")
    setPrice("")

    console.log(products)
  }

  return (
    <div>
      <h2 className={styles.title}>Cadastre um produto</h2>
      <form onSubmit={handleSubmit} className={styles.form_control}>
        <label>
          <span>Código:</span>
          <input 
            type="text" 
            name="id" 
            placeholder='Digite o id do produto' 
            required 
            value={id} 
            onChange={(e) => setId(e.target.value)} 
          />
        </label>
        <label>
          <span>Nome:</span>
          <input 
            type="text" 
            name="name" 
            placeholder='Digite o nome do produto' 
            required 
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
            required 
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
            required 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input 
            type="text" 
            name="image" 
            placeholder='Coloque a URL da imagem do produto'
            required 
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
          />
        </label>
        <button type="submit" className='btn'>Cadastrar</button>
      </form>
    </div>
  )
}

export default NewProduct