import React from 'react'
import { api } from '../services/mocks/output'

function Results({ listProducts }) {
  return (
    <div>
      <h3 className='results'>{listProducts.length <= 0 ? 'Nenhum resultado encontrado' : `${listProducts.length} Resultados`} </h3>
      <div className='container' id='home'>
        {listProducts.map((product) => (
          <section className='card-products'>

            <img className='image-card' src={product.images[0].asset.url} alt="#" />
            <h2 className='h2'>{product.name}</h2>
            <p className='description'>{product.shortDescription}</p>

          </section>
        ))}
      </div>
    </div>
  )
}

export default Results