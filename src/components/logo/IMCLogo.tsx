import React from 'react'
import { Image, View } from 'react-native'


export function IMCLogo () {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', width: '90%', height: 40, elevation: 100, shadowColor: '#000'}} >
            <Image 
                source={require('../../assets/images/imc-logo.png')}
                resizeMode='contain'
                style={{width: '80%', height: 50, borderRadius: 50}}
            />
        </View>
    )
}