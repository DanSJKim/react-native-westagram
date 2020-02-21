import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

class Login extends Component {

  state = {
    id: '',
    password: '',
    toggle: false
  };

  setId = (text) => { 
    this.setState({
     id : text
    });
   }

   setPassword = (text) => { 
    this.setState({
     password : text
    });
   }

   loginButton = () => {
      console.log('login');
    
      const data = { 
        email: this.state.id,
        password: this.state.password 
      };

      // fetch('http://10.58.3.127/user/login', {
      //   method: 'POST',
      //   body: JSON.stringify(data),
      // })
      // .then((response) =>
      // response.json()
      // )
      // .then((response) => {
      // console.log('Success:', response.token);
      // if (response.token) {
    this.props.navigation.navigate('Main')
      // }else {
      //   alert('아이디 혹은 비밀번호가 틀렸습니다.');
      // }
      // })
      // .catch((error) => {
      //   console.error('Error: ', error);
      // });


   }

  render() {
    const buttonBg = (this.state.id.length > 0 && this.state.password.length > 0)?"dodgerblue":"#bddffb";
    
    return (
      <View style={styles.container}>
  
        {/* header */}
        <View style={styles.header}>
          <Image style={styles.logo} source = {require('../images/logo_text.png')}/>
        </View>
  
        {/* content */}
        <View style={styles.content}>

          {/* input id, password */}
          <TextInput onChangeText={(text) => this.setId(text)} style={styles.input} placeholder="전화번호, 사용자 이름 또는 이메일"/>
          <TextInput onChangeText={(text) => this.setPassword(text)} style={styles.input} placeholder="비밀번호" />

          {/* find password */}
          <View style={{ width: '90%', marginTop: 20, marginBottom: 5, alignItems: 'flex-end' }}>
            <TouchableOpacity>
              <Text style={{color: '#4b97ef'}}>비밀번호를 잊으셨나요?</Text>
            </TouchableOpacity>
          </View>

          {/* login button */}
          <TouchableOpacity
                onPress={this.loginButton}
                style={{  marginTop: 30,
                          width: '90%',
                          height: 40,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 5,
                          backgroundColor: buttonBg,
                          disabled:true}} >
              <Text style={{color: '#ffffff'}}>로그인</Text>
          </TouchableOpacity>

          {/* facebook login */}
          <TouchableOpacity style={styles.facebookButton}>
              <Image style={styles.facebookLogo} source = {require('../images/facebook.png')} />
              <Text style={{color: '#4b97ef'}}>  김승준(으)로 계속</Text>
          </TouchableOpacity>

          {/* --- 또는---  */}
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '90%'}}>
              <Text style={styles.line}></Text>
              <Text style={{color: 'gray',marginTop: 30, height:40}}>     또는     </Text>
              <Text style={styles.line}></Text>
          </View>

          {/* sign up */}
          <TouchableOpacity style={styles.signUpButton}>
              <Text style={{color: '#afafaf'}}>계정이 없으신가요?</Text><Text style={{color: '#4b97ef'}}> 가입하기.</Text>
          </TouchableOpacity>
        </View>
  
        {/* footer */}
        <View style={styles.footer}>
          <Text style={{color: '#afafaf'}}>Instagram from Facebook</Text>
        </View>
        
      </View>
    );
  }
}

export default Login

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    
  },
  content: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
  },
  footer: {
    height: '10%',
    width: '100%',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#dbdbdb',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  logo: {
    marginTop: 200,
    marginBottom: 20,
    width: '50%',
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 5,
    marginTop: 13,
    padding: 10,
    backgroundColor: '#fafafa'
  },
  findPassword: {
    flexBasis: 0,
    flexGrow: 1,
    flexShrink:1,
    backgroundColor: 'black'
  },
  loginButton: {
    marginTop: 30,
    width: '90%',
    height: 40,
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  facebookButton: {
    marginTop: 30,
    height: 40,
    color: '#4b97ef',
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpButton: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center'
  },
  facebookLogo: {
    width: 18,
    height: 18
  },
  line: {
    marginTop: 5,
    height: 1,
    width: '41%',
    backgroundColor: '#dbdbdb'
  },
});
