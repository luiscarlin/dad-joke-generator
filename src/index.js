import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Main from './app.js'
import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import * as colors from './styles/colors'

function App() {
  return (
    <ThemeProvider theme={colors.dark}>
      <>
        <GlobalStyle />
        <Main />
      </>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
