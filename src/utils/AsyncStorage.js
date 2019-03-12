import { AsyncStorage } from 'react-native'

const { stringify, parse } = JSON

export const setStorage = async (key, value) => {
    const type = typeof value
    await AsyncStorage.setItem(key, type === 'string' ? value : stringify(value))
}

export const getStorage = async (key) => {
    const value = await AsyncStorage.getItem(key)

    return parse(value)
}