import React, { useState } from 'react'
import Results from '../components/Results'
import IconGlass from '../icons/glass.svg'
import { api } from '../services/mocks/output'
import Header from '../components/Header'
import '../styles/style.css'

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
      <Header />
      <form
      className='container-home'
        onSubmit={handleSearch}>
        <input
        className='search-input'
          onChange={handleFilter}
          type="text" placeholder='BUSQUE AQUI' />

        <button
        className='search-button'
          type='submit'
        >
          <img className='search-icon' src={IconGlass} alt="" />
        </button>
      </form>

      <div className='home'>
      <Filters setListProducts={setListProducts} />
      
      <Results listProducts={listProducts} />
      </div>
    </div>
  )
}

export default Home