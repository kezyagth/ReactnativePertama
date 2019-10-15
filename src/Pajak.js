import React from 'react';
import{
    View,
    Text,
    Button,
    TextInput
} from 'react-native';

class Pajak extends React.Component{
    state = { gajiBulanan:0,gajiTahunan:null,bayarPajak:null,persenan:null};
    hitungPajak =() =>{
        let gajiBulanan = this.state.gajiBulanan;
        let gajiTahunan = parseInt(gajiBulanan) * 12;
        let persenan = 0;
        let bayarPajak = parseInt(bayarPajak);
        if(gajiTahunan >= 250000000){
             bayarPajak = gajiTahunan * 0.15;
             persenan = 15;
        }else if(gajiTahunan >= 50000000 && gajiTahunan <= 240000000){
             bayarPajak = gajiTahunan * 0.05;
             persenan = 5;
        }else{
             bayarPajak = "nihil";
        }
        this.setState({gajiTahunan:gajiTahunan})
        this.setState({bayarPajak : bayarPajak})
        this.setState({persenan : persenan})
    }
    render(){
        return(
            <View>
                <Text>Perhitungan Pajak</Text>
            <TextInput
            style={{height: 40}}
            placeholder="Masukan Gaji Bulanan"
            onChangeText={(InputGaji) => this.setState(
                {gajiBulanan: InputGaji})}
                value={this.state.gajiBulanan} />

            <Button
            title="Hitung Pajak"
            onPress={() => {
                this.hitungPajak()
            }} />

            <Text>{this.state.gajiTahunan}</Text>
            <Text>{this.state.persenan}%</Text>
            <Text>{this.state.bayarPajak}</Text>
            
            </View>
        )
    }
}
export default Pajak;