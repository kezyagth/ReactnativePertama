import {StyleSheet} from 'react-native';

const profileCardColor = 'dodgerblue';

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    bgImage:{
        marginTop:50,
        alignItems: 'center',
        width:300,
        height:400
    },
    cardContainer: {
        borderColor: 'black',
        borderWidth:3,
        borderStyle: 'solid',
        borderRadius: 20,
         //backgroundColor: profileCardColor,
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
        marginTop :30,
        paddingTop:15
        
    },
    cardImage: {
        width: 80,
        height: 80,
      
    },
    cardName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 30,
        textShadowColor: 'black',
        textShadowOffset: {
            height:2,
            width:2
        },
        textShadowRadius:3
    },
    cardOccupationContainer: {
        borderColor:'yellow',
        borderBottomWidth:3
    },
    cardOccupation: {
        fontWeight: 'bold',
        marginTop:10,
        marginBottom:10
    },
    cardDescription:{
        fontStyle:'italic',
        marginTop: 10,
        marginRight: 40,
        marginLeft:40,
        marginBottom: 10
    }

});

export {style}; //diexport variabel styles supaya bisa diakses di kelas / komponenlain
