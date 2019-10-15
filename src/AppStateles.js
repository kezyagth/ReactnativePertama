import React from 'react';
import {
    View,
    Text
} from 'react-native';

const AppStateles = (props) =>(
    <View>
        <Text>Component Stateles</Text>
        <Text>Name  : {props.nama}</Text>
        <Text>Alamat : {props.alamat}</Text>
        <Text>Telp : {props.telp}</Text>
        <Text>Email : {props.email}</Text>
    </View>
)
export default AppStateles;