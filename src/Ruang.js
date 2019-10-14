import React from 'react';
import{
    View,
    Text
}from 'react-native'; 
import PropsRuang from "./PropsRuang"

class Ruang extends React.Component{
    render(){
        console.log("Hai")
        return(
            <View>
                <PropsRuang nama="Persegi" luas="Panjang x Lebar" keliling="4 x sisi" />
                <PropsRuang nama="Persegi Panjang" luas="Panjang x Lebar" keliling="2 x (panjang + lebar)" />
                <PropsRuang nama="Segitiga" luas="(Alas x Tinggi)/2" keliling="Jumlah semua sisi" />
                <PropsRuang nama="Lingkaran" luas="r x r x phi" keliling="2 x phi x r" />
                <PropsRuang nama="Belah Ketupat" luas="1/2 x d1 x d2" keliling="4 x sisi" />
            </View>
        );
    }
}

export default Ruang;