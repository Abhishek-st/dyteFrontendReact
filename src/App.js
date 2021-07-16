import React, { useState, useEffect } from 'react'
import Code from './component/Code'
import MyLocalStorage from './hooks/MyLocalStorage'

function App() {
  const [html, setHtml] = MyLocalStorage('html', '')
  const [css, setCss] = MyLocalStorage('css', '')
  const [js, setJs] = MyLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <div className="pane top-pane">
        <Code
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Code
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Code
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;


