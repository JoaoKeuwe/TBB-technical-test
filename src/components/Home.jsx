import React from 'react'
import Results from '../components/Results'
import { api } from '../services/mocks/output'

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
      <section>
        {/* map  */}
      </section>
      <section>
        <Results />
      </section>

    </div>
  )
}

export default Home