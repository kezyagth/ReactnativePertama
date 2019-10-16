import React ,{ Component} from 'react';
import{StyleSheet,View,Image} from 'react-native';


export default class ProfileColor extends Component {
    render(){
        return(
            <View style={style.container}>
                <View style = {style.cardContainer}>
                    <View style = {StyleSheet.cardImageContainer}>
                        <Image style={StyleSheet.cardImage} source={require('../assets/user.png')} />
                    </View>
                </View>  
            </View>
        );
    }
}

const profileCardColor = 'dodgerblue';

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    cardContainer: {
        borderColor: 'black',
        borderWidth:3,
        borderStyle: 'solid',
        borderRadius: 20,
         backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        alignItems: 'center'
       
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop :'30',
        paddingTop:'15'
        
    },
    cardImage: {
        width: 80,
        height: 80,
         alignItems: 'center'
    }

});