import { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import {UserAPI} from '../api/user';
import { setStorage, getStorage } from '../helper/storage';


import GlobalStyle from '../GlobalStyle';

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMsg: ''
    };
  }

  login = async() => {
    console.log("email",this.state.email);
    const userApi = new UserAPI;
    console.log("user api: ", userApi);
    
    let [res, err] = await userApi.login( 
      this.state.email, 
      this.state.password,
    );

    if (res) {
      console.log('data: ', res);
      setStorage('user', res)
      this.props.navigation.navigate("Home");
      const user = await getStorage('user')
      console.log("user from storage", user);
      this.setState({
        email: "",
        password: "",
      })
    }

    if (err) {
      console.log('error: ', err);
      console.log("error");
    }
  }



  render() {
    return(
      
      <View style={GlobalStyle.container}>
        <Image
          source={require('../techtalk.png')} 
          style={GlobalStyle.loginImg} />
        <Text style={GlobalStyle.screenHeader}>Welcome Back!</Text>

        {this.state.errorMsg ? 
          <View style={GlobalStyle.errorContainer}>
            <Text style={GlobalStyle.errorText}>{this.state.errorMsg}</Text>
          </View>
        : null}
        
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

        <TouchableOpacity onPress={() => this.login() }>
          <View style={GlobalStyle.button}>
            <Text style={GlobalStyle.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>

        <View style={GlobalStyle.line}></View> 

        
        <View style={GlobalStyle.footer}>
          <Text style={GlobalStyle.footerText}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {this.props.navigation.navigate('Register');}}>
               <Text style={GlobalStyle.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}