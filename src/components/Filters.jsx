import React, { useState } from 'react'
import { api } from '../services/mocks/output'

function Filters() {
const [count, setCount] =useState({})

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
        <div>
            {categories(api.data.nodes).map((product) => (
                <section>
                    <label htmlFor={product}>
                        <input type="checkbox" name="" id={product} />
                        {product} <span>({count[product]})</span>
                    </label>
                </section>

            ))}

        </div>
    )
}

export default Filters