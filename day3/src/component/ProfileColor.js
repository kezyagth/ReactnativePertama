{import React ,{ Component} from 'react';
import{StyleSheet,View,Image,Text,ImageBackground} from 'react-native';}
import {style} from './styleProfile' // model .css

export default class ProfileColor extends Component {
    render(){
        return(
            <View style={style.container}>
                <ImageBackground style={style.bgImage} source={require('../assets/background.png')} >
                <View style = {style.cardContainer}>
                    <View style = {style.cardImageContainer}>
                        <Image style={style.cardImage} source={require('../assets/user2.png')} />
                    </View>
                    <Text style={style.cardName}>John Doe</Text>
                    <View style ={style.cardOccupationContainer}>
                        <Text style ={style.cardOccupation}>React Native Developer</Text>
                    </View>
                    <View>
                        <Text style ={style.cardDescription}>john is a really great Javascript Developer. 
                        He loves using JS to build React Native applicatons for IOS and Android</Text>
                    </View>
                    
                </View>  
                </ImageBackground>
            </View>
        );
    }
}
