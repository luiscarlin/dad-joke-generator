import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Main from './app.js'
import GlobalStyle from './styles/GlobalStyle'
import { ThemeState } from './ThemeContext'

function App() {
  return (
    <ThemeState>
      <>
        <GlobalStyle />
        <Main />
      </>
    </ThemeState>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
