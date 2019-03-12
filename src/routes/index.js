import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from '../views/Public/Home'

const AppNavigator = createStackNavigator({
    Home
})

export default createAppContainer(AppNavigator)