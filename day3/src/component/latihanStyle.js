import React ,{ Component} from 'react';
import{StyleSheet,View,Image,Text,ImageBackground,TextInput,Button,TouchableOpacity
} from 'react-native';
import {style} from './latihanStylecss'

export default class latihanStyle extends Component {
    render(){
        return(
            <View style = {style.container}>
                <ImageBackground style = {style.bgImage} source={require('../assets/background.png')}>
                    <View style = {style.cardImageContainer}>
                        <Image style ={style.cardImage} source={require('../assets/google.png')} />
                    </View>
                    <Text style ={style.loginText}>Login Apps</Text>
                    <Text style ={style.userPass}>Username</Text>
                    <TextInput style = {style.textInput} placeholder="Username" />
                    <Text style ={style.userPass}>Password Apps</Text>
                    <TextInput style = {style.textInput} placeholder="Password" />                    
                    <View style ={style.buttonContainer}>
                        <Button style ={style.button} color='black' title="Login" />
                    </View>
                        <View style = {{flex:1, flexDirection:'row'}}>
                            <TouchableOpacity style ={style.smolImageContainer}>
                                <Image style ={style.smolImage} source={require('../assets/facebook.png')} />
                            </TouchableOpacity>  
                            <TouchableOpacity style ={style.smolImageContainer}>
                                <Image style ={style.smolImage} source={require('../assets/snapchat.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style ={style.smolImageContainer}>
                                <Image style ={style.smolImage} source={require('../assets/twitter.png')} />
                            </TouchableOpacity>
                          
                        </View>
                       
                   
                   
                </ImageBackground>
            </View>
        );
    }
}