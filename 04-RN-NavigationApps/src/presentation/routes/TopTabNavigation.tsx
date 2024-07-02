import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {AboutScreen} from '../screens/about/AboutScreen';

import {MenuHamburger} from '../components/MenuHamburger';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigation = () => {
  //Para hacer que la tab  tenga el menu hamburguesa. Lo mejor es hacer un componente => es el MenuHamburger

  return (
    <>
      <MenuHamburger />
      <Tab.Navigator>
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
};
