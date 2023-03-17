import { React } from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Routes from './src/routes'
import { Provider } from 'react-redux';
import store from './src/store';

const App = () => (
    <Provider store={store}>
    <Routes />
</Provider>
);

AppRegistry.registerComponent(appName, () => App); 
   
