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
  AddressList, 
  AddressItem,
} from '../../styles';

const Ride = () => {

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
    <>
    <Container row height={50} justify="flex-start">
      <Container align="flex-start" padding={15}>
        <SubTitle>Voltar</SubTitle>
      </Container>
      <Container>
        <Title>Corrida</Title>
      </Container>
      <Container align="flex-end" padding={15}></Container>
      </Container>

      <Container padding={30} justify="flex-start">
        <Container height={90} justify="flex-start">
          <Input placeholder="Embarque" />
          <Input placeholder="Destino" />
        </Container>
          <Container>
            <AddressList
              data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}
              renderItem={({item, index}) => (
                <AddressItem>
                  <SubTitle bold>Menlo Parl</SubTitle>
                  <SubTitle small>Palo Alto, CA</SubTitle>
                </AddressItem>
              )}
            />
        </Container>
      </Container >
      
      <Container height={70} padding={5} justify="flex-end">
        <Button>
          <ButtonText>Atualizar no mapa</ButtonText>
        </Button>
      </Container>
        
    </>
  );
};

export default Ride;