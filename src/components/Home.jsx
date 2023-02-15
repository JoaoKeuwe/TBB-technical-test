import React from 'react'
import Results from '../components/Results'
import { api } from '../services/mocks/output'
import Filters from '../components/Filters'

function Home() {
  return (
    <div>
      <header>
        <h1> O QUE VOCÊ <span>ESTÁ PROCURANDO?</span></h1>
        <input type="text" placeholder='BUSQUE AQUI' />
      </header>

      <section>
        <h2>filtros</h2>
        <h2>{api.data.nodes.length} <span>Resultados</span></h2>
      </section>

        <Filters />
        <Results />
  
    </div>
  )
}

export default Home