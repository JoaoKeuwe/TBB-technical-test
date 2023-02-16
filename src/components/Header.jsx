import React from 'react'

function Header() {
  return (
    <section className='header'>
      <img className='image-logo' width={120} src="https://thebrooklynbrothers.com/assets/images/logo@2x.png" alt="Imagem do logo da empresa" />
      <ul className='informations'>
        <li className='options' >Inicio</li>
        <li className='options' >Contatos</li>
      </ul>
    </section>
  )
}

export default Header