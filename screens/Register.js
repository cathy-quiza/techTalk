import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';


import GlobalStyle from '../GlobalStyle';

import {UserAPI} from '../api/user';

export default class Register extends Component {

  constructor() {
    super();

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      
    }
  }

  register = async() => {
    console.log("inside register");
    console.log("email",this.state.email);
    const userApi = new UserAPI;
    console.log("user api: ", userApi);
    
    let [res, err] = await userApi.register(
      this.state.firstname, 
      this.state.lastname, 
      this.state.email, 
      this.state.password,
    );

    if (res) {
      console.log('data: ', res);
      console.log("Success");
      this.props.navigation.navigate("Login");
    }

    if (err) {
      console.log('error: ', err);
      console.log("error");
    }
  }

  render() {
    return(
      <View style={GlobalStyle.Container}>
        
          <Image
            source={require('../svg.png')} 
            style={GlobalStyle.regImg} />
          <Text style={GlobalStyle.screenHeader}>Create Account</Text>
        
        

        <View>
          <TextInput 
            value={this.state.firstname}
            onChangeText={text => {this.setState({ firstname: text })
            console.log(text)}}
            style={GlobalStyle.input} 
            placeholder="First Name" />

          <TextInput 
            value={this.state.lastname}
            onChangeText={text => this.setState({ lastname: text })} 
            style={GlobalStyle.input} 
            placeholder="Last Name" />

          

          <TextInput 
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })} 
            style={GlobalStyle.input} 
            placeholder="Email" />

          <TextInput 
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })} 
            style={GlobalStyle.input} 
            placeholder="Password" 
            secureTextEntry={true}/>

          <TouchableOpacity style={GlobalStyle.button} onPress={this.register}>
            <Text style={GlobalStyle.buttonText}>Register</Text>
          </TouchableOpacity>

          <View style={GlobalStyle.line}></View> 

          <View style={GlobalStyle.footer}>
            <Text style={GlobalStyle.footerText}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => {this.props.navigation.navigate('Login');}}>
                <Text style={GlobalStyle.registerText}>Login</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}
