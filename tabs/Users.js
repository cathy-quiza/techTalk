import { Component } from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import axios from 'react-native-axios';
// import axios from 'axios';

import GlobalStyle from '../GlobalStyle';

import { UserAPI } from '../api/user';

export default class Users extends Component {

  constructor(props) {
    super(props);
    this.UserAPI= new UserAPI;

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.users();
  }

  async users() {
    const [res,err] = await this.UserAPI.users();
    if(res) {
      this.setState({users:res})
    } 
    
  }

  render() {
    return (
      <View>
        <Image
            source={require('../svg.png')} 
            style={GlobalStyle.regImg} />
        <Text style={GlobalStyle.screenHeader}>List of Users</Text>

        
        <ScrollView>
          {this.state.users.map((user,key)=>{
            return(
              <View>
                <Text style={GlobalStyle.usersText}>{user.firstname} {user.lastname} </Text>
                
              </View>
            )
          })}
        </ScrollView>
        
      </View>
    );
  }
}