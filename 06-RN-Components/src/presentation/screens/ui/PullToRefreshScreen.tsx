import {Title} from '../../components/ui/Title';
import {CustomView} from '../../components/ui/CustomView';
import {ScrollView} from 'react-native-gesture-handler';
import {RefreshControl} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useState} from 'react';
import {colors, globalStyles} from '../../../config/theme/theme';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const {top} = useSafeAreaInsets();

  const onRefresh = () => {
    setIsRefreshing(true);

    //ACA IRIA una funcion asyncrona que traiga data

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  //Es para hacer para abajo y que cargue un loader

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          //ESTOY HACE QUE SEA VEA BIEN EN IOS
          progressViewOffset={top}
          colors={[colors.primary, 'red', 'orange', 'green']}
          onRefresh={onRefresh}
        />
      }
      style={[globalStyles.mainContainer, globalStyles.globalMargin]}>
      <Title text="Pull to refresh" safe />
    </ScrollView>
  );
};
