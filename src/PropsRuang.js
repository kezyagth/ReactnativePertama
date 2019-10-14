import React from 'react';
import{
    View,
    Text
}from 'react-native';

class PropsRuang extends React.Component{
    render(){
        return(
            <View>
                <Text>Nama : {this.props.nama}</Text>
                <Text>Rumus Luas : {this.props.luas}</Text>
                <Text>Rumus Keliling : {this.props.keliling}</Text>
            </View>
        );
    }
}

export default PropsRuang;