import React, { useState } from 'react'
import Results from '../components/Results'
import IconGlass from '../icons/glass.svg'
import { api } from '../services/mocks/output'

import Filters from '../components/Filters'
function Home() {
  const [searchBar, setSearchBar] = useState()
  const [listProducts, setListProducts] = useState(api.data.nodes)
  const [productsBackup, setProductsBackup] = useState(api.data.nodes)


  const handleFilter = (event) => {
    setSearchBar(event.target.value);
  }

  const handleSearch = (event) => {
    event.preventDefault()
    const filterProducts = productsBackup.filter((product, i) => product.category.name.toLowerCase().includes(searchBar.toLowerCase()));
    setListProducts(filterProducts)
  }

  return (
    <div>
      <header>
        <h1> O QUE VOCÊ <span>ESTÁ PROCURANDO?</span></h1>
      </header>
      <form 
      onSubmit={handleSearch}>

        <input
          onChange={handleFilter}
          type="text" placeholder='BUSQUE AQUI' />

        <button
        type='submit'
          
        >
          <img width={10} src={IconGlass} alt="" />
        </button>

      </form>

      <section>
        <h2>filtros</h2>
      </section>

      <Filters setListProducts={setListProducts} />

      <Results listProducts={listProducts} />
    </div>
  )
}

export default Home