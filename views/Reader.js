import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableHighlight, StyleSheet, TextInput, View, Alert} from "react-native"

const Reader = (props) => {
  const [codigo, setCodigo] = useState({
    codigo: ""
  })
  
  const handleCodigo = (codigo, value) => {
    setCodigo({[codigo]: value})
  }

  const search = () => {
    if(codigo === "") {
      Alert.alert('Alerta','Campo vacio. Ingrese un codigo',[{text: "OK", onPress: () => console.log("OK Pressed")}])
    }else{
      props.navigation.navigate('Information',codigo)
    }
  }

  return(
    <View style={styles.container}>
      <StatusBar/>
      <View style={styles.top}/>
      <View style={styles.middle}>
	<TextInput 
	  style={styles.code} 
	  keyboardType='numeric' 
	  placeholder='Codigo' 
	  textAlign='center'
	  onChangeText={(value) => {handleCodigo('codigo', value)}}
	  />
	    <TouchableHighlight onPress={() => search()}>
	      <View style={styles.button}>
		<Text style={styles.buttontext}> Buscar </Text>
	      </View>
	    </TouchableHighlight>
      </View>
      <View style={styles.bottom}/>	
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    justifyContent: "space-between"
  },
  top: {
    flex: 0.3
  },
  middle: {
    flex: 0.3,
  },
  bottom: {
    flex: 0.3,
  },
  
  code: {
    height: 50,
    marginBottom: 20,
    margin: 16,
    fontSize: 26,
    borderWidth: 1,
    borderRadius: 30
  },
  button: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'blue',
    width: '100%',
    borderRadius: 10,
  },
  buttontext: {
    color: 'white',
  }
})

export default Reader;


