import React from 'react'
import ReactDOM from 'react-dom'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'

import AppView from './App'

import './styles.css'

function App() {
  return (
    <div className="App">
      <Fabric>
        <AppView />
      </Fabric>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
