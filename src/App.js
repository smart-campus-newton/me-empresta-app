import React from 'react'
import { Root } from 'native-base'
import { Provider } from 'react-redux'
import Routes from './routes'
import store from './store'

const App = () => {
    return(
        <Provider store={store}>
            <Root>
                <Routes />
            </Root>
        </Provider>
    )
}

export default App