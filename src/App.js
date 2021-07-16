import React from 'react'
import Code from './component/Code'

function App() {
  return (
    <div>
      <div className="pane top-pane"> 
          <Code />
          <Code />
          <Code />
      </div>
      <div className="pane">
        <iframe
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
        />
      </div>
    </div>
  )
}

export default App


