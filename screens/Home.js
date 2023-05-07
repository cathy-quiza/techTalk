import { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { PostApi } from '../api/post';
import { setStorage, getStorage } from '../helper/storage';
import {UserAPI} from '../api/user';
import Ionicons from 'react-native-vector-icons/Ionicons';

import GlobalStyle from '../GlobalStyle';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: '',
      postText: '',
    };
  }

  async componentDidMount() {
    this.getAllPost();
  }

  getAllPost = async()=>{
    const postApi = new PostApi;
        const [res, error]= await postApi.posts()
        
        if (error){
            console.log(error)
        }
        if (res) {
          console.log(res)
          this.setState({posts: res})
        }
        
  }
  createPost = async()=>{
    //If empty string return
    if (this.state.postText === ""){
      return
    }
    const postApi = new PostApi();
    
    const [res, error] = await postApi.createPost({post: this.state.postText})
    if (res){
        console.log('postText: ', this.state.postText)
        this.setState({postText: ''})
        console.log("response",res);
        let userData = await getStorage('user')
        const postContainer = this.state.posts
        const allPost = [
            {
              "id": res.id,
              "user_id": res.user_id,
              "post": res.post,
              "created_at": res.created_at,
              "updated_at": res.updated_at,
              "user": {
                  "id": userData.id,
                  "firstname": userData.firstname,
                  "lastname": userData.lastname,
                  "email": userData.email,
              }
          },
          ...postContainer

        ]
        this.setState({posts: allPost});
    }
    else{
        console.log(error)
  }
        
  }
  formatTime = (time) => {
    const date = new Date(time)
    time = date.toDateString();
    
    return time;
  }

  logout = async() => {
    const userApi = new UserAPI;
    
    let [res, err] = await userApi.logout();

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
      
      <View>
        <Text>Home</Text>
        <Text>Home</Text>
        <Text>Home</Text>
        <View>


          <TextInput 
              value={this.state.postText}
              onChangeText={text => {this.setState({ postText: text })
              console.log(text)}}
              style={GlobalStyle.regInput} 
              placeholder="Enter your Post" />

          <TouchableOpacity onPress={() => this.createPost() }>
            <View style={GlobalStyle.button}>
              <Text style={GlobalStyle.buttonText}>Create Post</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.logout() }>
              <View style={GlobalStyle.button}>
                <Text style={GlobalStyle.buttonText}>Logout</Text>
              </View>
          </TouchableOpacity>
        </View>
        <ScrollView>

          {
            
            this.state.posts.map((post)=>{
              
            

              return(
                  <View key= {post.id}>
                    <Text>Name: {post.user.firstname} {post.user.lastname}</Text>
                    <Text>{post.post}</Text>
                    <Text>{this.formatTime(post.created_at)}</Text>
                  </View>
              )
            })
          }
        </ScrollView>
        <View>

          
          
        </View>
        <Text>Home</Text>
        <Text>Home</Text>
        <Text>Home</Text>
      </View>
      
    )
  }
}