import React from 'react'
import OrnazApp from './ALL-Theme/ORNAZ/ORNAZ_App'
import SmilingRocksApp from './ALL-Theme/SMININGROCKS/SMININGROCKS_App'
import GORJANA_App from './ALL-Theme/GORJANA/GORJANA_App'

export default function ThemeRoutes() {


  return (
    <div>
      <div>
        {false && <OrnazApp />}
      </div>
      <div>
        {true && <SmilingRocksApp />}
      </div>
      <div>
        {false && <GORJANA_App />}
      </div>
    </div>
  )
}
