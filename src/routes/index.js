import { createStackNavigator, createAppContainer } from 'react-navigation'

import Login from '../views/Public/Login'

const AppNavigator = createStackNavigator({
    Login
})

export default createAppContainer(AppNavigator)