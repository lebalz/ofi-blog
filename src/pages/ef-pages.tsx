import React from 'react';
import Grid from '../components/IFrame/Grid';
import Solution from '../components/Solution';


const EFShowcase = () => {

  return (
    <div style={{margin: '16px', padding: '16px'}}>
      <h1>EF Webseiten 2024</h1>
      <Solution webKey="0ba77b9b-e0c6-4b78-9a59-fa030b216c1b" title="Websites" open>
        <Grid urls={[
          'https://GabrielMariethoz.github.io/EF-Informatik',
          'https://Valayar.github.io/EF_Informatik',
          'https://TheTahm.github.io/EF-Informatik',
          'https://timonj0.github.io/EF_Informatik',
          'https://jodokfehlmann.github.io/EF-Informatik',
          'https://GraficPixelTDSM.github.io/EF-Informatik',
          'https://Grashaum.github.io/EF-Informatik',
          'https://Liloubrandi.github.io/EF_Informatik',
          'https://arraky.github.io/EF-Info',
          'https://No0ne155.github.io/ef_info',
          'https://luiscarlosgarzacisneros.github.io/EFInformatik',
          'https://Gerhard-69.github.io/EF-Informatik',
          'https://mcdelarosa.github.io/EF-Informatik',
          'https://marioschoch.github.io/EF-Info',
          'https://gaeschpu.github.io/Ef-Info/docs/about-me',
          'https://Malouu3.github.io/EF-Informatik'
        ]} full />

      </Solution>
    </div>
  )
}

export default EFShowcase;
