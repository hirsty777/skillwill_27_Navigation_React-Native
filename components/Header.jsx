import { LayoutAnimation, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Header = () => {
  const {navigate} = useNavigation()
  const [searchState, setSearchState] = useState(false)

  const moveTo  = (path) => {
    navigate(path)
  }

  const toggleSearch = () => {
    setSearchState((prev) => !prev);
  };

  return (
    <View style={styles.searchArea}>
        <Text style={{color:"white"}}>WhatsApp</Text>
        <View style={styles.Box}>
          <Feather name="camera" size={18} color="white" onPress={() => moveTo("Camera")}/>
          <EvilIcons name="search" size={24} color="white"  onPress={toggleSearch}/>
          <Entypo name="dots-three-vertical" size={18} color="white" onPress={() => moveTo("Settings")}/>
        </View>
        {searchState && <TextInput placeholder='search' style={styles.seatchBar}/>}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  searchArea:{
    padding:5,
    flexDirection:"row",
    justifyContent:"space-between",
    alignContent:"center",
    backgroundColor:"#128C7E",
  },
  Box:{
    minWidth:75,
    flexDirection:"row",
    justifyContent:"space-between",
    alignContent:"center",
    alignItems:"center",
  },
  seatchBar:{
    position:"absolute",
    top:2,
    left:"30%",
    paddingLeft:5,
    width:"40%",
    borderRadius:19,
    backgroundColor:"#FFFFFF",
  },
})