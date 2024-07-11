import React from "react";
import { SvgUri } from 'react-native-svg';
import { StyleSheet,View, Text, Image, Pressable } from "react-native";

function LandingPage({navigation}) {
    const handleStudent=()=>{
        navigation.navigate('LandingPage')
    }
  return (
    <View style={styles.container}>
   
      <Image source={require('../assets/AvidAssets/ImagePeg.jpg')} />
    
    
      <Image source={require('../assets/AvidAssets/LandingPage.jpg')} style={{width:270, height:250}} />


      <View style={btnSection}>
        <Pressable onPress={handleStudent} style={{backgroundColor:"#C8A800",padding:8, borderRadius:15, width:70}}><Text style={{color:"#fff", textAlign:"center"}}>Student</Text></Pressable>

        <Pressable style={{backgroundColor:"#C8A800",padding:8, borderRadius:15, width:70}}><Text style={{color:"#fff", textAlign:"center"}}>Tutor</Text></Pressable>
        
      </View>

    </View>


  );
}
export default LandingPage;


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection:"column",
      marginTop:'35%',
      gap:45
    },


  });
  

const avid btnSection = StyleSheet.create({
    flexDirection:"row",
    gap:25
})