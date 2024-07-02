import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox} />

      <View style={styles.purpleBox} />

      <View style={styles.orangeBox} />
    </View>
  );
};

//POSITION RELATIVE => SIEMPRE es relativo respecto al padre. Cuando se crea un componente el valor por DEFECTO ES RELATIVO. Ejemplo creamos una caja, se pone en la pantalla. Ponemos top y esa caja baja. Ponemos Right y se corre para la derecha.

//POSITION ABOLUTE => Bottom en 0 la caja va abajo de todo.  PERO ES RELATIVO AL PADRE y no a la pantalla entera

const styles = StyleSheet.create({
  //Flex en 1 abarca toda la pantalla del padre y el padre (que seria el APP.TSX tiene un flex en 1)
  container: {
    flex: 1,
    // height: 150,
    // width: 300,
    backgroundColor: '#28C4D9',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    //Position Absolute
    position: 'absolute',
    bottom: 0,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    //Position absolute
    position: 'absolute',
    right: 0,
  },

  greenBox: {
    // flex: 1,
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // top: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
