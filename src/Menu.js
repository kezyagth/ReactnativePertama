import React from 'react';
import{
    View,
    Text,
    Button,
    TextInput
} from 'react-native';

import HitungLuas from "./Persegi"
import Pajak from "./Pajak"

class Menu extends React.Component{
    state = {tipe : null}
    dataRuang =() => {
        this.setState({tipe:<HitungLuas/>})
    }
    dataPajak =() => {
        this.setState({tipe:<Pajak/>})
    }
    render(){
        return(
            <View>
                 <Button
            title="Data Ruang"
            onPress={() => {
                this.dataRuang()
            }} />

            <Button
            title="Data Pajak"
            onPress={() => {
                this.dataPajak()
            }} />
            {this.state.tipe}
            </View>         
        )
    }

}
export default Menu;

