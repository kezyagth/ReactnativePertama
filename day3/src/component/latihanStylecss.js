import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bgImage:{
        marginTop:50,
        alignItems: 'center',
        width:500,
        height:700
    },
    cardContainer: {
        borderColor: 'black',
        borderWidth:3,
        borderStyle: 'solid',
        borderRadius: 20,
        width: 500,
        height: 700,
        alignItems: 'center'
       
    },
    cardImageContainer: {
        alignItems: 'center',             
        width: 90,
        height: 30,        
        marginTop :50,
        paddingTop:20
    },
    cardImage: {
        width: 200,
        height: 60
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 90

    },
    userPass: {
        fontSize: 14,
        color: 'black',
        marginTop: 20
    },
    textInput:{
        borderColor: 'black',
        borderWidth:1,
        borderStyle: 'solid',
        width: 200,
        height: 40,
        backgroundColor:'white'
    },
    button:{
        backgroundColor:'white',
        marginTop:50,
        alignItems:'center',
        width:  70,
        height:20,
    },
    buttonContainer:{
        alignItems: 'center',             
        width: 100,
        height: 20,        
        marginTop :30
       
    },
    smolImageContainer: {
        alignItems: 'center',             
        width: 70,
        height: 70,        
        marginTop :70,
        paddingTop:20
    },
    smolImage:{
        width: 70,
        height: 70
    }



});
export {style};