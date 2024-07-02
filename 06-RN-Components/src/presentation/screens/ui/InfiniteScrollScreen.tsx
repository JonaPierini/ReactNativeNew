import {useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {FlatList} from 'react-native-gesture-handler';
import {colors} from '../../../config/theme/theme';
import {FadeInImage} from '../../components/ui/FadeInImage';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    //funcion que carga mas
    const newArray = Array.from({length: 5}, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <View style={{backgroundColor: 'black'}}>
      {/* NOS permite cargar elementos en forma perezosa, es decir si cargarlo de entrada.Es decir bajo demanda*/}
      <FlatList
        data={numbers}
        //Detecta cuando llegamos al final
        onEndReached={loadMore}
        //Empieza a carga antes que lleguemos al final. Toma, en este caso, el 60% y carga nuevos elementos
        onEndReachedThreshold={0.6}
        //Es el key (identificador)
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <ListItem number={item} />}
        //Es el componente en el footer
        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: 'center'}}>
            {/* EL activityIndicator es COMO UN SCROLL */}
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

interface ListItemProps {
  number: number;
}

const ListItem = ({number}: ListItemProps) => {
  return (
    //ESTO es para hacer una mejora al componente para que las images se muestre mejor
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        height: 400,
        width: '100%',
      }}

      //SCROLL CON IMAGENES INFINITAS
    />
    // <Image
    //   source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
    // style={{
    //   height: 400,
    //   width: '100%'
    // }}

    // />
  );
};
