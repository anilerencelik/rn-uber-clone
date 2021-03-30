import React from "react";
import { View, Text, Pressable, StyleSheet} from "react-native";
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { Auth } from 'aws-amplify';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props} >

      <View style={styles.container} >
        <View style={styles.userRowContainer}>
          <View style={styles.userRowPhoto} />
          <View style={styles.userRowDetails} >
            <Text style={styles.userRowNameText}>Vadim Salvin</Text>
            <Text style={styles.userRowPointsText}>5.00 *</Text>
          </View>
        </View>

        <View style={styles.messagesContainer}>
          <Pressable onPress={() => console.warn('clicked messages')}>
            <Text style={styles.buttonAccountText}>Messages</Text>
          </Pressable>  
        </View>

        <Pressable onPress={() => console.warn('clicked account')}>
          <Text style={styles.buttonAccountText}>Do more with your account</Text>
        </Pressable>

        <Pressable onPress={() => console.warn('clicked make money')}>
          <Text style={styles.buttonMoneyText}>Make money driving</Text>
        </Pressable>
        
      </View>
      <DrawerItemList  {...props}/>
      
      <Pressable onPress={() => {Auth.signOut()}}>
          <Text style={styles.buttonSignOutText}>SignOut</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#212121',
    padding: 15,
  },
  userRowContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  userRowPhoto:{
    backgroundColor: '#cacaca',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15
  },
  userRowNameText:{
    color:'white',
    fontSize: 22
  },
  userRowPointsText:{
    color:'lightgrey'
  },
  messagesContainer:{
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#919191',
    paddingVertical: 5,
    marginVertical: 10,
  },
  buttonAccountText:{
    color:'#ddd',
    paddingVertical: 5
  },
  buttonMoneyText:{
    color:'white',
    paddingVertical: 5
  },
  buttonSignOutText:{
    color:'red',
    paddingVertical : 5,
    marginHorizontal : 20
  }
});


export default CustomDrawer;