import React from 'react'

function Header() {
  return (
    <section className='header'>
      <img className='image-logo' width={120} src="https://thebrooklynbrothers.com/assets/images/logo@2x.png" alt="Imagem do logo da empresa" />
      <ul className='informations'>
        <a href="#home"> <li className='options' >Inicio</li></a>
        <a href="#contacts"> <li className='options' >Contatos</li></a>
      </ul>
    </section>
  )
}

export default Header