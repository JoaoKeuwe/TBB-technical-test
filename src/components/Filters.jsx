import React, { useState } from 'react'
import { api } from '../services/mocks/output'
import IconGlass from '../icons/glass.svg'

function Filters({ setListProducts }) {
    const [count, setCount] = useState({})
    const [searchBar, setSearchBar] = useState()
    // const [listProducts, setListProducts] = useState(api.data.nodes)
    const [productsBackup, setProductsBackup] = useState(api.data.nodes)


    const handleFilterByCategory = (event) => {
        const products = api.data.nodes
        const filterProducts = products.filter((product, i) => product.category.name === event.target.id);
        setListProducts(filterProducts)
        console.log('sss',)
    }

    const categories = (arrProducts) => {

        const arrayNames = arrProducts.map((product) => product.category.name);
        arrayNames.forEach((nameProduct) => {
            if (count[nameProduct]) {
                count[nameProduct] += 1
            } else {
                count[nameProduct] = 1
            }
        })
        return arrayNames.filter((name, i) => arrayNames.indexOf(name) === i);

    }

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

            {categories(api.data.nodes).map((product) => (
                <section>
                    <label htmlFor={product} >
                        <input onClick={handleFilterByCategory} type="checkbox" name="" id={product} />
                        {product} <span>({count[product]})</span>
                    </label>
                </section>

            ))}

        </div>
    )
}

export default Filters