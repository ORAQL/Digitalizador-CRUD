import React, { useEffect, useState } from 'react';
import { TouchableHighlight, View, TextInput, Text, StyleSheet } from 'react-native'

import firebase from '../firebase/firebase';

const Info = (props)=> {
  const codigo = props.route.params.data

  const [lista, setLista] = useState([])
  
  useEffect(() => {
      firebase.db.collection("Productos").where('Codigo', '==', codigo).onSnapshot((querySnapshot) => {
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

  const esProducto = (producto) => {
    return producto.Codigo === codigo;
  }
  
  const consulta = lista.find(esProducto);

  console.log(consulta)
  
  return(
    null
  /*  <View style={styles.container}>
      <View>
	<Text style={styles.field}>Codigo</Text>
	<TextInput style={styles.textbox} value={consulta.Codigo} />
      </View>
      <View>
	<Text style={styles.field}>Nombre</Text>
	<TextInput style={styles.textbox} value={consulta.Nombre} />
      </View>
      <View>
	<Text style={styles.field}>Precio</Text>
	<TextInput style={styles.textbox} value={consulta.Precio} />
      </View>
      <View>
	<View style={styles.buttonblock}>
	  <TouchableHighlight onPress={() => search()}>
	    <View style={styles.button}>
	      <Text style={styles.buttontext}> Agregar </Text>
	    </View>
	  </TouchableHighlight>
	  <TouchableHighlight onPress={() => search()}>
	    <View style={styles.button}>
	      <Text style={styles.buttontext}> Modificar </Text>
	    </View>
	  </TouchableHighlight>
	</View>
      </View> 
      <View style={styles.exportar}>
	<TouchableHighlight onPress={() => search()}>
          <View style={styles.button}>
	    <Text style={styles.buttontext}> Exportar </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>*/
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'space-between',
    padding: 10
  },
  field: {
    fontSize: 26,
    textAlign: 'center'
  },
  textbox: {
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
  buttonblock: {
    alignItems: 'center' ,
    justifyContent: 'space-evenly'
  },
  buttontext: {
    color: 'white',
  },
  exportar: {
    paddingHorizontal: 50,
    paddingTop: 10
  }
})

export default Info; 
