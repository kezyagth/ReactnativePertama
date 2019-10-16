import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
const style = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

export default class Style extends Component{
    render(){
        return(
            <View>
                <Text style={style.red}>just red</Text>
                <Text style={style.bigBlue}>just bigBlue</Text>
                <Text style={[style.bigBlue, style.red]}>BigBlue, then red</Text>
                <Text style={[style.red, style.bigBlue]}>red, then bigBlue</Text>
            </View>
        );
        
    }
}