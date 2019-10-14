import React from 'react';
import{
    View,
    Text
}from 'react-native'; 
import ProEx from "./PropEx" //import component of PropEx in line 6 and 42
import PropsRuang from "./PropsRuang"
class App extends React.Component{
    render(){ 
       console.log("Hallo World")
       return(
           <View>  
               <ProEx nama="Lucy" alamat="Bandung" telp="082197" email="lucy@mail.com"/>
               <ProEx nama="Kezia" alamat="BSD" telp="082193" email="kezy@mail.com"/>
               <ProEx nama="Nico" alamat="Jakarta" telp="082194" email="nico@mail.com"/>
               <ProEx nama="Anes" alamat="Tangerang" telp="082195" email="anes@mail.com"/>
               <ProEx nama="Acha" alamat="Bogor" telp="082196" email="acha@mail.com"/>
                <PropsRuang nama="Persegi" luas="Panjang x Lebar" keliling="4 x sisi" />
                <PropsRuang nama="Persegi Panjang" luas="Panjang x Lebar" keliling="2 x (panjang + lebar)" />
                <PropsRuang nama="Segitiga" luas="(Alas x Tinggi)/2" keliling="Jumlah semua sisi" />
                <PropsRuang nama="Lingkaran" luas="r x r x phi" keliling="2 x phi x r" />
                <PropsRuang nama="Belah Ketupat" luas="1/2 x d1 x d2" keliling="4 x sisi" />
              
           </View>
       );
    }
}

export default App;