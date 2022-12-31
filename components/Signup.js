import React from 'react';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {View,Text,StyleSheet,TextInput,Pressable, Touchable, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Signup =(props) => {
  const iconName = props.isChecked ?
        "checkbox-marked" : "checkbox-blank-outline";
  
    return (
      <View style={{flex: 1}}>
      <ProgressSteps {...progressStepsStyles}  >
          <ProgressStep label="personal details" nextBtnTextStyle={buttonTextStyle} >
              <View>
              <Text style={styles.label}>First Name</Text>
              <TextInput placeholder='What should we call you?' style={styles.input} />
              <Text style={styles.label}>Last Name</Text>
              <TextInput placeholder='Enter your last Name' style={styles.input} />
              <Text style={styles.label}>Age</Text>
              <TextInput placeholder='What is your age?' style={styles.input} />
              <Text style={styles.label}>Gender</Text>
              <TextInput placeholder='How would you describe your gender?' style={styles.input} />
              <Text style={styles.label}>Contact Number</Text>
              <TextInput placeholder='+91-00000000' style={styles.input} />
              <Text style={styles.label}>Email Address</Text>
              <TextInput placeholder='you@your-domain.com' style={styles.input} />
              <Text style={styles.label}>Password</Text>
              <TextInput placeholder='Shhh!This is super secret' style={styles.input} />
              <Text style={styles.label}>Confirm password</Text>
              <TextInput placeholder='This should match your password' style={styles.input} />
              </View>
          </ProgressStep>
          <ProgressStep label="Medical details" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.label1}>Check the conditions that apply to you:</Text>
                <Pressable onPress={props.onPress}>
                <MaterialCommunityIcons 
                    name={iconName} size={24} color="#000" />
            </Pressable>
            <Text style={styles.title}>{props.title}</Text>
              </View>
          </ProgressStep>
          <ProgressStep label="Upload reports" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
              <View style={{ alignItems: 'center' }}>
                  <Text>This is the content within step 3!</Text>
              </View>
          </ProgressStep>
      </ProgressSteps>
  </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',

      
    },
    input: {
      height: 57,
      padding: 8,
      margin: 8,
      borderRadius:7,
      width:340,
      backgroundColor:'rgba(255,255,255,0.4)',
      marginLeft:28,
      borderLeftColor:'black',
      borderWidth:0.7
      
    },
    label:{
      margin:5,
      fontSize:17,
      color:'#50535A',

      marginLeft:32,
      
    },
    label1:{
      fontSize:17,
      color:'#50535A',
      
    },

  });
  const buttonTextStyle = {
    color: '#008080'
};

const progressStepsStyles ={
  activeStepIconBorderColor:'#008080',
  activeLabelColor:'#008080',
  completedStepIconColor:'#008080',
  completedProgressBarColor:'#008080',
  activeStepIconColor:'rgb(0,128,128)',
  activeStepNumColor:'white'
}

  export default Signup;