import React, { useState } from 'react'
import { api } from '../services/mocks/output'

function Filters({ setListProducts }) {
    const [count, setCount] = useState({})

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

    return (

        <div className='div-content-filter'>
            <section className='filter'>
                <h2>Categorias de produtos</h2>
            </section>

            <section className='filters'>
                {categories(api.data.nodes).map((product) => (
                    <article>

                        {/* <button
                    onClick={handleFilterByCategory}>
                    id={product} 
                            {product}
                    </button> */}

                        <label className='checkbox' htmlFor={product} >
                            <input onClick={handleFilterByCategory} type="checkbox" name="" id={product} />
                            <span className='checkbox-name'> {product} </span> <span>({count[product]})</span>
                        </label>
                    </article>

                ))}
            </section>

        </div>
    )
}

export default Filters