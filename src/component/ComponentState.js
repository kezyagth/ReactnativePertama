import React from 'react';
import{
    View,
    Text,
    TouchableOpacity
} from 'react-native';

class ComponentState extends React.Component{
    constructor(){
        super()
        this.state ={ name : "Rico"} //inialisasi state
    }
    componentWillMount(){
        this.setState({name : 'Denis'});
    }
    render(){
        //#3 read component stats menggunakan this.state.<nama state>
        return(
            <View>
                <TouchableOpacity>
                      <Text>{this.state.name}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default ComponentState;