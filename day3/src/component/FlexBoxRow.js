import React,{Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';

export default class FlexBoxRow extends Component{
    render(){
        return(
            <View style={{flex:1, flexDirection:'row'}} >
                <View style={{width:100, height:50,backgroundColor:'powderblue'}} >
                    <Text>Flexbox Row</Text>
                </View>
                <View style={{width:200, height:50,backgroundColor:'skyblue'}} />
                <View style={{width:300, height:50,backgroundColor:'steelblue'}} >
                    <Text>Width 300 height 50</Text>
                </View>
            </View>
        )
    }
};
