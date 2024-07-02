import {SafeAreaView} from 'react-native';
import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
import {CounterScreen} from './src/presentation/screens/CounterScreen';
//REACT NATIVE PAPER ES UNA LIBRERIA DE COMANDOS
import {PaperProvider} from 'react-native-paper';
import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {BoxObjectModelScreen} from './src/presentation/screens/BoxObjetModelScreen';
import {DimensionScreen} from './src/presentation/screens/DimensionScreen';
import {FlexDirectionScreen} from './src/presentation/screens/FlexDirectionScreen';
import {FlexScreen} from './src/presentation/screens/FlexScreen';
import {PositionScreen} from './src/presentation/screens/PositionScreen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      {/* Es un componente propio de REACTNATIVE que hace un cierto marco en en IOS */}
      {/* Le ponemos el flex uno para que abarque toda la pantalla */}
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name='Fernando Herrera' /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen/> */}
        {/* <DimensionScreen /> */}
        <FlexDirectionScreen />
        {/* <FlexScreen /> */}
        {/* <PositionScreen /> */}
      </SafeAreaView>
    </PaperProvider>
  );
};
