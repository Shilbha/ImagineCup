import React, {useState} from 'react';
import {View,Text,StyleSheet,FlatList,Alert,TouchableOpacity} from 'react-native';
import LoginScreen from './components/Login';
import SignupScreen from './components/Signup';
import { AntDesign } from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// export default function App() {
  
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity>
//       <Text style={{fontSize:20,marginTop:50,marginLeft:20}}><AntDesign name="left" size={22} color="black" />Login</Text>
//       </TouchableOpacity>
//       <Login></Login>
//       <Signup></Signup>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();
        
const MyStack = () => {

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen 
        name="Signup" 
        component={SignupScreen} 
        options={{title: 'Signup'}}/>
      </Stack.Navigator>
    </NavigationContainer>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});

export default MyStack;