import React from 'react';
import{
    View,
    Text,
    Button,
    Picker,
    StyleSheet,TextInput
} from 'react-native';

class Persegi extends React.Component{
    //#1 inisialisasi state
    state = {panjang :0,lebar:null,luas:null, rumus:null,keliling:null,hasil:null};
    //#2 Method untuk merubah state luas
    hitungLuas = ()=>{
        let panjang = this.state.panjang; //tampung nilai state akhir pada variabel panjang
        let lebar = this.state.lebar; //tampung nilai state akhir pada variabel lebar
        let luas = parseInt(panjang) * parseInt(lebar); //menghitung luas persegi variabel panjang dan luas harus di konvensikan ke int karena hasilnya string
        let keliling = (parseInt(panjang) + parseInt(lebar)) * 2;
        if(this.state.rumus == "luas"){
             this.setState({hasil : luas }) //setState luas
        }else if( this.state.rumus == "keliling"){
            this.setState({hasil : keliling })
        }else{
            this.setState({hasil : null})
        }
        console.log(this.state)
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

            <Picker
            selectedValue = {this.state.rumus}
            styles={{height: 100, width:300}}
            onValueChange={(itemValue, itemIndex) =>this.setState({rumus: itemValue}) }>
            <Picker.item label="Pilih tipe" value="" />
            <Picker.item label ="luas" value="luas" />
            <Picker.item label="keliling" value="keliling" />
            </Picker>

            <Button
            title="Hitung Luas"
            onPress={() => {
                this.hitungLuas()
            }} />

            <Text>{this.state.hasil}</Text>
            </View>
            
            
        )
    }
}
export default Persegi;