import prompt from 'react-native-prompt-android';

interface Options {
  title: string;
  subTitle?: string;
  buttons: PromptButton[];
  promptType?: 'plain-text' | 'secure-text';
  placeholder?: string;
  defaulValue?: string;
}

interface PromptButton {
  text: string;
  onPress: (value?: any) => void;
  style?: 'cancel' | 'default' | 'destructive';
}

//Aca esta creada la función del showPront
export const showPrompt = ({
  title,
  subTitle,
  buttons,
  promptType = 'plain-text',
  placeholder,
  defaulValue,
}: Options) => {
  //Este promp viene de la libreria
  prompt(title, subTitle, buttons, {
    type: promptType,
    cancelable: false,
    defaultValue: defaulValue,
    placeholder: placeholder,
  });
};
