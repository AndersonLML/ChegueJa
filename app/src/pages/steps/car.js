import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';

import {
  Container,
  Title,
  SubTitle,
  Button,
  ButtonText,
  Input,
  Spacer,
} from '../../styles';

const Car = () => {

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const keyboarDidShowListener = Keyboard.addListener('keyboardDidShow', () => setVisible(false),
    );

    const keyboarDidHideListener = Keyboard.addListener('keyboarDidHideListener', () => setVisible(true)
    );

    return () => {
      keyboarDidShowListener.remove();
      keyboarDidHideListener.remove();
    };
  }, []);
  
  return (
    <Container padding={30} justify="flex-start">
      <Container align="flex-start">
        <Title>Cadastre seu veículo</Title>
        <SubTitle>Preencha os campos abaixo.</SubTitle>
      </Container>

      <Container justify="flex-start">
        <Spacer height={1}/>
        <Input placeholder = "Placa do veículo"/>
        <Spacer/>
        <Input placeholder = "Marca do veículo"/>
        <Spacer/>
        <Input placeholder = "Modelo do veículo"/>
        <Spacer/>
        <Input placeholder = "Cor do veículo"/>
      </Container>
        {visible || (
      <Container>
        <Button>
          <ButtonText>Começar a usar</ButtonText>
        </Button>
      </Container>
        )}
    </Container>
  );
};

export default Car;