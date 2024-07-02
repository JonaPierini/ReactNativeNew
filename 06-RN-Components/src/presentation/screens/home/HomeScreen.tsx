import {View} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {ScrollView} from 'react-native-gesture-handler';
import {Title} from '../../components/ui/Title';
import {MenuItem} from '../../components/ui/MenuItem';

const animationMenuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

export const menuItems = [
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];
const uiMenuItems = [
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
];

//SI TENEMOS MUCHOS elementos es mejor usar un FLATLIST y NO un SCROLLVIEW ya que el SCROLLVIEW carga todos los elemntos de una. EL FLATLIST lo renderiza bajo demanda

export const HomeScreen = () => {
  return (
    <View style={[globalStyles.mainContainer]}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title text="Opciones del menú" safe />

          {/* animationMenuItems
          menuItems
          uiMenuItems */}

          {/* PRIMER mapeo */}
          {animationMenuItems.map((item, index) => (
            <MenuItem
              key={item.component}
              //LE pasamos directamente todas las propiedades {...item} en vez de pasarle, el name, icon y componente
              {...item}
              //ACA hago si es el primero y despues si es el último. Es para manejar los estilos
              isFirst={index === 0}
              isLast={index === animationMenuItems.length - 1}
            />
          ))}

          <View style={{marginTop: 30}} />

          {/* SEGUNDO mapeo */}
          {uiMenuItems.map((item, index) => (
            <MenuItem
              key={item.component}
              {...item}
              isFirst={index === 0}
              isLast={index === uiMenuItems.length - 1}
            />
          ))}

          <View style={{marginTop: 30}} />

          {/* TERCER mapeo */}
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.component}
              {...item}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
            />
          ))}

          <View style={{marginTop: 30}} />
        </ScrollView>
      </View>
    </View>
  );
};
