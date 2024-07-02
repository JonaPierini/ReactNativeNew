import {Text, View} from 'react-native';
import {Span} from '../../components/Span';
import {useRoute} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/Navigation';
import {useHookMovie} from '../../hooks/useHookMovie';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = (props: any) => {
  //VARIAS FORMAS DE ADQUIRIR LA DATA => SI LE PONGO LAS PROPOS => DetailsScreen = (props)
  // console.log(props.route.params.description.description);
  // UTILIZANDO EL HOOK UseRoute().paramos
  // const {movieId} = useRoute().params;
  console.log(props.route.params);

  return (
    <View>
      <Span>{props.route.params.description.description}</Span>
    </View>
  );
};
