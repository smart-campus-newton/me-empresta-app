import React, { PureComponent } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Input } from './'

class Form extends PureComponent {
    render(){
        return(
            <View style={styles.Form}>
                <Input 
                    placeholder="Email"
                />
                
                <Input 
                    placeholder="Senha"
                    secure
                />

                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.TextButton}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Form: {
        paddingLeft: 25,
        paddingRight: 25
    },
    Button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#018AF7',
        borderRadius: 50,
        height: 50,
        marginTop: 30
    },
    TextButton: {
        color: '#fff'
    }
})

export { Form }