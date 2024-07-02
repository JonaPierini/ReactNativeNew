import {StatusBar, View} from 'react-native';
import {CalculatorScreen} from './presentation/screens/CalculatorScreen';
import {globalStyles} from './config/theme/app-theme';

function App() {
  return (
    <View style={globalStyles.background}>
      {/* StatusBar la parte de arriba del telefono */}
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'tomato'}></StatusBar>
      <CalculatorScreen></CalculatorScreen>
    </View>
  );
}

export default App;
