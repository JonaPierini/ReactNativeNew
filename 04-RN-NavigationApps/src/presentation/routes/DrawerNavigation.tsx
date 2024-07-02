import {StackNavigator} from './StackNavigator';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {globalColors} from '../theme/theme';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text, useWindowDimensions, View} from 'react-native';
import {CarScreen} from '../screens/car/CarScreen';
import {BottomTabNavigation} from './BottomTabNavigation';

const Drawer = createDrawerNavigator();

//esto es para que cuando demos vuelta el celu se vea bien
const dimensions = useWindowDimensions();

export const DrawerNavigation = () => {
  return (
    //Esto quita el icono del menu hamburguesa => headerShown
    <Drawer.Navigator
      //Componente personalizado de ese menu hamburguesa (CutomDrawerContent)
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        //para las dimensiones de cuando damos vuelta el celular es fijo. Permanente siempre se muestra el menu
        drawerType: dimensions.width >= 758 ? 'permanent' : 'slide',
        headerShown: false,
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}

      {/* ACA estan las tab */}
      <Drawer.Screen name=" Tabs" component={BottomTabNavigation} />

      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Car" component={CarScreen} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    //El DrawerContenScrollView permite hacer scroll en el Drawer
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />
      {/* Opciones del menu => StackNavigation y Profile */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
