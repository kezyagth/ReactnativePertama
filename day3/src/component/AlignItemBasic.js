import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class AlignItemBasic extends Component{
    render(){
        return(
            //Try setting 'alignItems' to 'flex-start','flex-end','center'
            <View style={styles.container}>
                <Text styles={styles.headerStyle}>align-item: 'flex-center'</Text>
                <View styles={[{flexDirection: 'column',alignItems: 'center'},styles.elementsContainer]}>
                    <View  style ={ styles.red} />
                    <View style = {styles.yellow}  />
                    <View  style = {styles.green} />
                </View>
            </View>
        );
    }
}

const styles = {
    green : {
        backgroundColor: '#32b76c',
        height: 50,
        width: 60
    },
    yellow : {
        backgroundColor: '#faa030',
        height: 50,
        width: 100
    },
    red : {
        backgroundColor: '#ee2c3b',
        height: 50,
        width:80
    },
    container: {
        marginTop: 40,
        flex:1
    },
    headerStyle: {
        fontSize:24,
        textAlign : 'center',
        fontWeight: '300',
        marginBottom: 24
    },
    elementsContainer: {
        flex:1,
        backgroundColor: '#ecf5fd',
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 24
    }
}