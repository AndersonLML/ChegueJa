import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { CreditCardInput } from "react-native-credit-card-input";

import {
  Container,
  Container1,
  Title,
  SubTitle,
  Button,
  ButtonText,
  Spacer,
} from '../../styles';

const Payment = () => {

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
      <Container top={10} align="flex-start">
        <Title>Escolha como pagar</Title>
        <SubTitle>Preencha os dados do cartão de crédito.</SubTitle>
        <Spacer/>
      <CreditCardInput requiresName/>
      </Container>
      {visible ||(
      <Container  justify="flex-end">
        <Button>
          <ButtonText>Comece a usar</ButtonText>
        </Button>
      </Container>
      )}
    </Container>
  );
};

export default Payment;