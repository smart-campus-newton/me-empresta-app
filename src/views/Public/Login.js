import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { Form } from '../../components/Login'

class Login extends PureComponent {
    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
                <Form />
            </View>
        )
    }
}

export default Login