import React from 'react';
import {Image} from 'react-native';

import car from '../../assets/car.png';
import hand from '../../assets/hand.png';

import {
  Container,
  Title,
  SubTitle,
  PickerButton,
  Button,
  ButtonText,
} from '../../styles';

const Type = () => {
  
  return (
    <Container padding={30} justify="flex-start">
      <Container align="flex-start">
        <Title>Passageiro ou motorista?</Title>
        <SubTitle>Selecione qual será a sua função no Drivex</SubTitle>
      </Container>

      <Container>
        <PickerButton>
          <Image source = {car} />
          <Title>Motorista</Title>
        </PickerButton>

        <PickerButton>
          <Image source = {hand}/>
          <Title>Passageiro</Title>
        </PickerButton>
      </Container>

      <Container>
        <Button>
          <ButtonText>Próximo Passo</ButtonText>
        </Button>
      </Container>
    </Container>
  );
};

export default Type;