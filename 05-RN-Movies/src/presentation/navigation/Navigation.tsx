import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {DetailsScreen} from '../screens/details/DetailsScreen';
import {SplashScreen} from '../screens/splash/SplashScreen';
import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Span} from '../components/Span';

export type RootStackParams = {
  SplashScreen: undefined;
  Home: undefined;
  Details: {movieId: number};
};

//Este es el StackNavigator

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'tomato',
        }}>
        <Span style={{color: 'white'}}> SPLASH </Span>
      </View>
    );
  }

  return (
    //Para oculatar los header (titulos de arriba)
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
      <Stack.Screen
        options={{
          title: 'Pepe',
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
