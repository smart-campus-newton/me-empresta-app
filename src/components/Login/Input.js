import React, { PureComponent } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

class Input extends PureComponent {
    render(){
        const { placeholder, secure } = this.props
        
        return(
            <View style={styles.Input}>
                <TextInput 
                    style={styles.TextField}
                    placeholder={placeholder}
                    secureTextEntry={secure}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Input: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '#fff',
        shadowColor: "#666",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        marginTop: 15
    },
    TextField: {
        marginLeft: 20
    }
})

Input.propTypes = {
    placeholder: PropTypes.string,
    secure: PropTypes.bool
}

export { Input }