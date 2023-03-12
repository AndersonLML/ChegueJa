import { React } from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
import store from './src/store';

import Login from './src/pages/Login';
import Type from './src/pages/steps/type';
import Car from './src/pages/steps/car'
import Payment from './src/pages/steps/payment';
import Ride from './src/pages/Ride';
import Home from './src/pages/Home';

const App = () => (
    <Provider store={store}>
    <Home />
</Provider>
);

AppRegistry.registerComponent(appName, () => App); 
   
