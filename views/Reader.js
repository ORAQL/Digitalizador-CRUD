import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native"
import { BarCodeScanner } from 'expo-barcode-scanner'

const Reader = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    props.navigation.navigate('Information', data)
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
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


