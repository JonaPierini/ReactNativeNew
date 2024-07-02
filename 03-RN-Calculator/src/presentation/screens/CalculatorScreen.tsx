import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    prevNumber,
    buildNumber,
    toggleSign,
    deleteOperation,
    clean,
    divideOperation,
    subtractOperation,
    multiplyOperation,
    addOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text
          style={globalStyles.mainResult} //Se ajusta el tamaño
          adjustsFontSizeToFit
          //Solo una linea
          numberOfLines={1}>
          {number}
        </Text>
        <Text
          style={globalStyles.subResult} //Se ajusta el tamaño
          adjustsFontSizeToFit
          //Solo una linea
          numberOfLines={1}>
          {prevNumber === '0' ? '' : prevNumber}
        </Text>
      </View>

      {/* Primer Parte C +/- del / */}

      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <CalculatorButton
          onPress={() => clean()}
          label="C"
          backgroundColor={colors.lightGray}
          blackText={true}
        />
        <CalculatorButton
          onPress={() => toggleSign()}
          label="+/-"
          backgroundColor={colors.lightGray}
          blackText={true}
        />
        <CalculatorButton
          onPress={() => deleteOperation()}
          label="del"
          backgroundColor={colors.lightGray}
          blackText={true}
        />
        <CalculatorButton
          onPress={() => divideOperation()}
          label="÷"
          backgroundColor={colors.orange}
        />
      </View>

      {/* Segunda Parte 7 8 9 / */}

      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <CalculatorButton onPress={() => buildNumber('7')} label="7" />
        <CalculatorButton onPress={() => buildNumber('8')} label="8" />
        <CalculatorButton onPress={() => buildNumber('9')} label="9" />
        <CalculatorButton
          onPress={() => multiplyOperation()}
          label="x"
          backgroundColor={colors.orange}
        />
      </View>

      {/* Tercer Parte 4 5 6 - */}

      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <CalculatorButton onPress={() => buildNumber('4')} label="4" />
        <CalculatorButton onPress={() => buildNumber('5')} label="5" />
        <CalculatorButton onPress={() => buildNumber('6')} label="6" />
        <CalculatorButton
          onPress={() => subtractOperation()}
          label="-"
          backgroundColor={colors.orange}
        />
      </View>

      {/* Cuarta parte 1 2 3 + */}

      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <CalculatorButton onPress={() => buildNumber('1')} label="1" />
        <CalculatorButton onPress={() => buildNumber('2')} label="2" />
        <CalculatorButton onPress={() => buildNumber('3')} label="3" />
        <CalculatorButton
          onPress={() => addOperation()}
          label="+"
          backgroundColor={colors.orange}
        />
      </View>

      {/* Quinta parte 0 . = */}

      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <CalculatorButton
          onPress={() => buildNumber('0')}
          label="0"
          size={true}
        />
        <CalculatorButton onPress={() => buildNumber('.')} label="." />
        <CalculatorButton
          onPress={() => calculateResult()}
          label="="
          backgroundColor={colors.orange}
        />
      </View>
    </View>
  );
};
