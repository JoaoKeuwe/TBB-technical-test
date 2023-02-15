import React from 'react'
import { api } from '../services/mocks/output'

function Results() {
    return (
        <div>
            {api.data.nodes.map((product) => (
                <section>
                    <img src={product.images[0].asset.url} alt="#" />
                    <h2>{product.name}</h2>
                    <p>{product.shortDescription}</p>
                </section>
            ))}
        </div>
    )
}

export default Results