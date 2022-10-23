import React from 'react'
import { Counter } from './features/counter/Counter'
import './App.css'
import Map from './features/Components/Map'

function App() {
  // App bir parent component. Map.jsx deki Map componenti Child olarak çağrılıyor.
  return (
    <div className="App">
      <div>
        <Map
          // Map.jsx deki Map componentine props olarak verilen değerler.
          // Bu değerler, Map.jsx deki Map componentindeki props olarak kullanılıyor.
          // Örneğin, <Map mapZoom={mapZoom} /> şeklinde kullanılıyor.
          mapZoomProp={12}
        />
      </div>
      <div>
        <Counter />
      </div>
    </div>
  )
}

export default App
