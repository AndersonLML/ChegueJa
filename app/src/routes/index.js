import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
    import {navigationRef} from './rootNavigation';

import Login from '../pages/Login';
import Type from '../pages/steps/type';
import Car from '../pages/steps/car'
import Payment from '../pages/steps/payment';
import Ride from '../pages/Ride';
import Home from '../pages/Home';

const Stack = createStackNavigator();

const Routes = () => (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                options={{headerShown: false}}
                name="Login"
                component={Login}
            />
             <Stack.Screen
                options={{headerShown: false}}
                name="Type"
                component={Type}
            />
             <Stack.Screen
                options={{headerShown: false}}
                name="Car"
                component={Car}
            />
             <Stack.Screen
                options={{headerShown: false}}
                name="Payment"
                component={Payment}
            />
             <Stack.Screen
                options={{headerShown: false}}
                name="Ride"
                component={Ride}
            />
             <Stack.Screen
                options={{headerShown: false}}
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;