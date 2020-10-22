import React from 'react';
import TarjetaFruta from './components/TarjetaFruta'

const App = () => (
    <div>
      <TarjetaFruta name='Sandia' price={3.00}/>
      <TarjetaFruta name='Banano'price={1.00}/>
      <TarjetaFruta name='Kiwi' price={2.00}/>
    </div>
  )

  export default App