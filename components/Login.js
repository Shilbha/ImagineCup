import React, {useState} from 'react';
import {View,Text,StyleSheet,TextInput,Pressable, Touchable, TouchableOpacity} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

import { GoogleSocialButton } from "react-native-social-buttons";

const Login =({navigation}) =>{
    const [chosenOption, setChosenOption] = useState(' ');
    const options = [
        { label: 'Remember me', value: 'remember me' },
      ];
      const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
    
    <Text style={styles.label}>Username</Text>
    <TextInput placeholder='username' style={styles.input} />
    <Text style={styles.label}>Password</Text>
    <TextInput placeholder='Enter your password' name="password" secureTextEntry 
                        value={password} 
                        enablesReturnKeyAutomatically
                        onChangeText={text => setPassword(text)} style={styles.input} />
      <RadioForm
        radio_props={options}
        initial={0} 
        onPress={(value) => {
          setChosenOption(value);
        }}
        style={{marginTop:20, marginLeft:25,
            marginRight:30,}}
        />
       <Text style={{marginTop:-30,marginLeft:220}}>Forgot Password?</Text>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <Text style={{fontSize:15,marginLeft:190,marginTop:20}}>Or</Text>
        <GoogleSocialButton onPress={() => {}} buttonViewStyle={{width:330,height:50,borderRadius:4, margin:30}} />
        <Text style={styles.label1}>Don't have an account?</Text>
        <TouchableOpacity  onPress={() =>
            navigation.navigate('Signup')}><Text style={styles.underline}>Sign up</Text></TouchableOpacity>
   </View>
  );
};


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        margin: 8,
        borderRadius:80,
        width:320,
        backgroundColor:'#FAF9F6',
        marginLeft:30,
        marginRight:30,
      },
      label:{
        margin:5,
        marginLeft:13,
        fontSize:17,
        color:'#50535A',
        marginTop:20,
        marginLeft:30,
        marginRight:30,
      },
      label1:{
        margin:5,
        marginLeft:13,
        fontSize:17,
        color:'#50535A',
        marginTop:10,
        marginLeft:60,
        marginRight:30,
      },
    
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginTop:35,
        marginLeft:30,
        marginRight:30,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      container:{
        marginTop:40,
        height:790,
        backgroundColor: '#DAEDEE',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        },
        underline:{
       
        marginLeft:270,
        marginTop:-33,
        fontSize:17,
        color:'#50535A',
        textDecorationLine:'underline'
        }
});


export default Login;