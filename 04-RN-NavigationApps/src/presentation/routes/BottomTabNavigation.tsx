import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tabs1Screen} from '../screens/tabs/Tab1Screen';
import {Tabs2Screen} from '../screens/tabs/Tab2Screen';
import {Tabs3Screen} from '../screens/tabs/Tab3Screen';
import {Text} from 'react-native';
import {TopTabNavigation} from './TopTabNavigation';
import {StackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'tomato',
      }}
      screenOptions={{
        //Oculta el titulo. Si esta en true no lo oculata
        headerShown: true,
        tabBarLabelStyle: {
          //Estilo de los tab de abajo
          marginBottom: 5,
          backgroundColor: 'black',
        },
        //Hace desaparecer la linea de abaja del titulo
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'tranasparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      {/* TabBarIcon tiene props y una de esas props es que muestre un color cuando esta activo */}
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'T1',
          tabBarIcon: props => <Text style={{color: props.color}}>Tab1s</Text>,
        }}
        component={Tabs1Screen}
      />

      {/* Aca en vez de mostrar el componente Tab2Screen muestro el TopTabsNavigator */}
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'T2',
          tabBarIcon: props => <Text style={{color: props.color}}>Tab2s</Text>,
        }}
        component={TopTabNavigation}
      />

      {/* Aca en vez de mostrar el componente Tab3Screen muestro el StackNavigaor */}
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'T3',
          tabBarIcon: props => <Text style={{color: props.color}}>Tab3s</Text>,
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
