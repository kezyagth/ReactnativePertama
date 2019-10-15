import React from 'react';
import{
    View,
    Text,
    Button,
    StyleSheet,TextInput
} from 'react-native';

class Persegi extends React.Component{
    //#1 inisialisasi state
    state = {panjang :0,lebar:null,luas:null};
    //#2 Method untuk merubah state luas
    hitungLuas = ()=>{
        let panjang = this.state.panjang; //tampung nilai state akhir pada variabel panjang
        let lebar = this.state.lebar; //tampung nilai state akhir pada variabel lebar
        let luas = parseInt(panjang) * parseInt(lebar); //menghitung luas persegi variabel panjang dan luas harus di konvensikan ke int karena hasilnya string
        this.setState({luas : luas }) //setState luas
    }
    render(){
        //#3 read component state
        let currentValue = this.state.value
        return(
            <View>
                <Text>Hitung Luas Persegi Panjang</Text>
            <TextInput
            style={{height: 40}}
            placeholder="Masukan Panjang"
            onChangeText={(InputPanjang) => this.setState(
            {panjang: InputPanjang})}
            value={this.state.panjang} />

            <TextInput
            style={{height: 40}}
            placeholder="Masukan lebar"
            onChangeText= {(InputLebar) => this.setState(
                {lebar:InputLebar})}
                value ={this.state.lebar}/>

            <Button
            title="Hitung Luas"
            onPress={() => {
                this.hitungLuas()
            }} />

            <Text>{this.state.luas}</Text>
            </View>
            
            
        )
    }
}
export default Persegi;