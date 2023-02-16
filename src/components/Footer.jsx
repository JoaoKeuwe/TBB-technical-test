import React from 'react'

function Footer() {
  return (
    <div className='footer' id='contacts'>
      <div className='container-location'><p className='location'></p></div>
      <section>

        <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14142.662750407999!2d-48.491403757914206!3d-27.603892531442302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273ea848636a4d%3A0x6f700ac19098c89d!2sLagoa%20da%20Concei%C3%A7%C3%A3o%2C%20Florian%C3%B3polis%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1676529058926!5m2!1spt-BR!2sbr"
          title='keuwe'

          style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </section>


      <section className='container-information'>
        <p className='informations'>
          <span class="material-symbols-outlined Icon">
            location_on
          </span> Rua: Av. Brasil Sc </p>

        <p className='informations'>
          <span class="material-symbols-outlined Icon">
            call
          </span>Telefone: 99999-9999</p>

        <p className='informations'>
          <span class="material-symbols-outlined Icon">
            mail
          </span> E-email: joaov.ojo@gmail.com</p>

        <p className='informations'>
          <span class="material-symbols-outlined Icon">
            schedule
          </span> Horário de atendimento: Seg - Sex das 08:00 as 18:00</p>

      </section>

      <section className='logo'>
        <img className='logo-footer' src="https://thebrooklynbrothers.com/assets/images/logo@2x.png" alt="Imagem do logo da empresa" />
      </section>
    </div>
  )
}

export default Footer