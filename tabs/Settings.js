import { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import GlobalStyle from '../GlobalStyle';

export default class Settings extends Component {
  render() {
    return (
      <View>
        <Text style={GlobalStyle.screenHeader}>Settings Tab</Text>

        <TouchableOpacity style={[GlobalStyle.button, GlobalStyle.buttonDanger]} onPress={() => { this.props.navigation.navigate('Login'); }}>
          <Text style={GlobalStyle.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}