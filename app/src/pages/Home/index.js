import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Container, Title, Spacer, Input, Map, Avatar, SubTitle, Button, ButtonText, VerticalSeparator, Bullet, PulseCircle} from '../../styles';

const Home = () => {

    const tipo = 'M';
    const status = 'C'; // S - SEM CORRIDA, I - INFORMACOES, P - PESQUISA, C - CORRIDA 

    return (
        <Container>
            <Map
                initialRegion={{
                    latitude: -30.011364,
                    longitude: -51.1637373,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                disabled={status == 'P'}
            />
        <Container
            position="absolute"
            justify="space-between"
            align="flex-start"
            padding={20}
            zIndex={999}
            pointerEvents="box-none"
            style={{ height: '100%'}}>

        {/* PARTE SUPERIOR */} 
        <Container 
        height={100} 
        justify="flex-start" 
        align="flex-start" 
        >
        {/* AVATAR */}
        {tipo == 'M' && (status == 'S' || 'C') && (
        <TouchableOpacity>
            <Avatar
                source={{
                    uri: 
                    'https://previews.123rf.com/images/zdenkam/zdenkam1602/zdenkam160200072/52267908-young-excited-casual-black-man-giving-thumbs-up-on-white-background.jpg'
            }}
            />
        </TouchableOpacity>
           )}
        {status != 'S' && tipo == 'P' &&
        <Container 
        elevation={50}
        justify="flex-end"
        color="light">
            <Container left={20}>
                <Container justify="flex-start" row>
                    <Bullet/>
                    <SubTitle>Endereço de embarque completo</SubTitle>
                </Container>
                <Spacer/>
                <Container justify="flex-start" row>
                    <Bullet destination/>
                    <SubTitle>Endereço de destino completo</SubTitle>
                </Container>
            </Container>
            <Button type="dark">
                <ButtonText color="light">Toque para editar</ButtonText>
            </Button>

        </Container>
        }
        
        </Container>

        {status == 'P' && tipo == 'P' &&
        <Container 
        padding={20}
        zIndex={-1} >
            <PulseCircle
                numPulses={3}
                diameter={400}
                speed={20}
                duration={2000}
                />
        </Container>
        }
            {/* PASSAGEIRO SEM CORRIDA */}
            {tipo == "P" && status == "S" && 
                <Container justify="flex-start" padding={20} align="flex-start" elevation={50} height={150} color="light">
                <SubTitle>Olá, Anderson Leonardo</SubTitle>
                <Title>Pra onde você quer ir?</Title>
                <Spacer />
                <Input placeholder="Procure um destino... " />
            </Container>}
            {/* PASSAGEIRO INFORMAÇÕES DA CORRIDA */}
            {tipo == "P" &&  (status == 'P' || status == 'I') &&
            <Container justify="flex-end" align="flex-start" elevation={50} height={150} color="light">
                 <Container padding={20}>
                    <SubTitle>DriverX Convencional</SubTitle>
                    <Spacer/>
                    <Container row>
                        <Container>
                            <Title>R$ 13,90</Title>
                        </Container>
                        <VerticalSeparator/>
                        <Container>
                            <Title>5 mins</Title>
                        </Container>
                    </Container>

                 </Container>
                 <Button type={status == 'P' ? 'muted' : 'primary'}>
                    <ButtonText>{status == 'P' ? 'Cancelar DriverX' : 'Chamar DriverX'}</ButtonText>
                 </Button>
            </Container>}

            {/* PASSAGEIRO EM CORRIDA */}
            {tipo == 'P' && status == 'C' &&
            <Container  height={125} border="primary" justify="flex-end" align="flex-start">
                <Container  color='light' row>
                    <Container   align="flex-start" row>
                        <Avatar small 
                                source={{
                                    uri:'https://thumbs.dreamstime.com/b/business-man-thumbs-up-good-looking-african-modern-office-59103736.jpg'
                                }
                                }/>
                                <Spacer width="10px"/>
                    <Container padding={2} align="flex-start">
                        <SubTitle bold>Arlindo Henrique</SubTitle>
                        <SubTitle>ABC-123, BMW X6, Preta</SubTitle>
                    </Container>
                    </Container>
                    <VerticalSeparator/>
                    <Container width={120}>
                        <Title>R$ 12,90</Title>
                        <SubTitle bold color='primary'> 
                            Aprox, 5 mins</SubTitle>
                        
                    </Container>
                </Container>
                <Button type="muted">
                    <ButtonText>Cancelar corrida</ButtonText>
                </Button>
            </Container>
            }
            {/* MOTORISTA SEM CORRIDA */}
            {tipo == "M" && status != 'C' &&
            <Container  elevation={50} height={150} color="light">
            <SubTitle>Olá, Arlindo H</SubTitle>
            <Title>Nenhuma corrida encontrada.</Title>
            </Container>}

            {/* MOTORISTA ESTA EM CORRIDA */}
            {tipo == 'M' && status == 'C' &&
                <Container  height={155} border="primary" justify="flex-end" align="flex-start">
                <Container  color='light' row>
                    <Container   align="flex-start" row>
                        <Avatar small 
                                source={{
                                    uri:'https://thumbs.dreamstime.com/b/business-man-thumbs-up-good-looking-african-modern-office-59103736.jpg'
                                }
                                }/>
                                <Spacer width="10px"/>
                    <Container align="flex-start">
                        <SubTitle bold>Anderson Leonardo, 2(km)</SubTitle>
                        <Container >
                <Container justify="flex-start" height={20} row>
                    <Bullet/>
                    <SubTitle small numberOfLines={1}>
                        {' '}
                        Endereço de embarque completo</SubTitle>
                </Container>
                <Spacer/>
                <Container justify="flex-start" height={20} row>
                    <Bullet destination/>
                    <SubTitle small numberOfLines={1}>
                        {' '}
                        Endereço de destino completo</SubTitle>
                </Container>
            </Container>
                    </Container>
                    <Spacer width="10px"/>
                    </Container>
                    <VerticalSeparator/>
                    <Container width={120}>
                        <Title>R$ 12,90</Title>
                        <SubTitle bold color='primary'> 
                            Aprox, 5 mins</SubTitle>
                        
                    </Container>
                </Container>
                <Button type="muted">
                    <ButtonText>Aceitar corrida</ButtonText>
                </Button>
            </Container>

            }
        </Container>
            
        </Container>
    );
};

export default Home;