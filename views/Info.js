import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native'

import firebase from '../firebase/firebase';

const Info = (props)=> {
  const [producto, setProducto] = useState({
    Codigo: props.route.params.codigo,
    Nombre: '',
    Precio: ''
  })

  const [lista, setLista] = useState([])
  
  useEffect(() => {
      firebase.db.collection("Productos").onSnapshot((querySnapshot) => {
        const productos = [];
	querySnapshot.docs.forEach((doc) => {
	  const { Codigo, Nombre, Precio } = doc.data();
	  productos.push({
	    id: doc.id,
	    Codigo,
	    Nombre,
	    Precio,
	  });
	});
	setLista(productos)
      });
    }, []);

  
console.log(producto) 

  return(
    <View style={styles.container}>
      <View>
	<Text>Informacion del Producto</Text>
      </View>
      <View>
	<Text>Codigo</Text>
	<TextInput>{producto.Codigo}</TextInput>
      </View>
      <View>
	<Text>Nombre</Text>
	<TextInput>{producto.Nombre}</TextInput>
      </View>
      <View>
	<Text>Precio</Text>
	<TextInput>{producto.Precio}</TextInput>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    padding: 10
  }
})

export default Info; 
