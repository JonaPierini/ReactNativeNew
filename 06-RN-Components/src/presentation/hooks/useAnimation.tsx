import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  //ACA el valor es en 1 para que aparezca
  const fadeIn = ({duration = 300, toValue = 1, callback = () => {}}) => {
    // Animated.timing( animatedTop, {
    //   toValue: 0,
    //   duration: 700,
    //   useNativeDriver: true,
    //   easing: Easing.bounce, //Easing.elastic(2)
    // }).start( () => console.log('Animation ended') );

    //PARA que suceda en determinado tiempo
    //.start para que la animación comience
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  };

  //ACA el valor es 0 para que desaparezca
  const fadeOut = ({duration = 300, toValue = 0, callback = () => {}}) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);

    //() => animatedTop.resetAnimation()
  };

  const startMovingTopPosition = ({
    initialPosition = 0,
    toValue = 0,
    duration = 300,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialPosition);
    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
      easing: easing,
    }).start(callback);
  };

  return {
    // Properties
    animatedOpacity,
    animatedTop,

    // Methods
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};
