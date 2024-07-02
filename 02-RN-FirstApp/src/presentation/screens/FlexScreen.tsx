import {StyleSheet, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  //Flex en 1 abarca toda la pantalla del padre y el padre (que seria el APP.TSX tiene un flex en 1)
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  box1: {
    backgroundColor: '#5856D6',
    //Necesitaria seis veces de ese componente para llenar la pantalla
    flex: 1, // 1  + 2  + 3 = 6       1/6

    // flex: 2  // 2 + 3 + 5 = 10    2/10
  },
  box2: {
    backgroundColor: '#4240a2',
    //Necesitaria tres veces de ese componente para llenar la pantalla
    flex: 2, //   2/6  =  1/3

    // flex: 3                      3/10
  },
  box3: {
    backgroundColor: '#2e2d71',
    //Necesitaria dos veces de ese componente para llenar la pantalla
    flex: 3, // 3/6    = 1/2

    // flex: 5                     5/10
  },
});
