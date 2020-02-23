import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../Main';
import Photo from '../pages/Photo';
import NewFeed from '../pages/NewFeed';
import { NavigationContainer } from '@react-navigation/native';
import HeaderButton from '../components/HeaderButton';
import uuid from 'uuid';
import { useIsFocused } from '@react-navigation/native';



export default class RootStack extends Component {

    nextPage = () => {
        
    }

    state = {
        modalVisible: false,
    }

    render() {
        const Stack = createStackNavigator();
        
        //console.log('articles? ', this.state.articles)
        return (
            <NavigationContainer
            onStateChange={state => console.log('New state is', state)}
            >
                <Stack.Navigator 
                    
                    mode="modal" 
                    val={{setImage: this.setImage}}>

                        {/* Main */}
                        <Stack.Screen
                        name="Main"
                        component={Main}
                        options={{ headerShown: false }}
                        />

                        {/* Photo */}
                        <Stack.Screen
                        title="포토"
                        name="Photo" 
                        component={Photo}
                        />

                        {/* NewFeed */}
                        <Stack.Screen
                        name="NewFeed"
                        title="새 게시물"
                        component={NewFeed}
                        initialParams={{ addArticle: this.addArticle }}
                        />
                </Stack.Navigator>
            </NavigationContainer>
           
        )
    }
}
