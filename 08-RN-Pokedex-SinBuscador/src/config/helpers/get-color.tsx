import ImageColors from 'react-native-image-colors';
//ACA ES PARA HACER ESO DE LOS COLORES DE LA IMAGNES

export const getColorFromImage = async (image: string) => {
  const fallbackColor = 'grey';

  const colors = await ImageColors.getColors(image, {
    fallback: fallbackColor,
  });

  switch (colors.platform) {
    case 'android':
      return colors.dominant ?? fallbackColor;

    case 'ios':
      return colors.background ?? fallbackColor;

    default:
      return fallbackColor;
  }
};
