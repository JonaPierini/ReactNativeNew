import React, {useRef, useState} from 'react';

enum Operator {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');

  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operator>();

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }
      if (numberString === '0' && !number.includes('.')) {
        return;
      }

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const deleteOperation = () => {
    const str = number.substring(0, number.length - 1);
    if (str.length === 0) {
      setNumber('0');
    }
    if (str.length !== 0) {
      setNumber(str);
    }
    if (number.includes('-') && str.length === 1) {
      //reemplaza => el primer valor por el segundo
      setNumber(str.replace('-', '0'));
    }
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  //Para que si se pone 0. y se apreta la suma se borre ese punto y para que cuando ya tenga el numero establecido tmb se borre y vuelva a 0
  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateResult = () => {
    const num1 = Number(number); //NaN
    const num2 = Number(prevNumber); //NaN

    //lastOperation.current son nuestras 4 opciones
    switch (lastOperation.current) {
      case Operator.add:
        setNumber(`${num1 + num2}`);
        break;

      case Operator.subtract:
        setNumber(`${num2 - num1}`);
        break;

      case Operator.multiply:
        setNumber(`${num1 * num2}`);
        break;

      case Operator.divide:
        setNumber(`${num2 / num1}`);
        break;

      default:
        throw new Error('Operation not implemented');
    }

    setPrevNumber('0');
  };

  return {
    //Propiedades
    number,
    prevNumber,
    //Metodos
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    divideOperation,
    subtractOperation,
    multiplyOperation,
    addOperation,
    calculateResult,
  };
};
