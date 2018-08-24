import React from 'react'
import { Provider } from 'react-redux'

import Root from './src/components/Root'

import store from './src/redux/store'

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
)

export default App
