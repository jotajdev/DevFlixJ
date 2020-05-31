import React from 'react';
import Cursos from './pages/cursos';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const AppStack = createStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions = {{headerShown: false}}>
                <AppStack.Screen name = 'cursos' component={Cursos}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}