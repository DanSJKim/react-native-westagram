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

    setImage = (img) => {
        console.log('RootStack setImage: ',img);
        this.setState(this.state.image=img);
      }
  
    // addArticle = (content, img) => {
    //     console.log('add!!!!');
    //     let newComment ={
    //         id: uuid.v4(),
    //         name: 'kim',
    //         image: img,
    //         body: content,
    //       }
    
    //       this.setState({
    //            articles: [...this.state.articles, newComment],
    //       });
    // }



    render() {
        //console.log('updated');
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
                        initialParams={{ articles: this.state.articles }}
                        />

                        {/* Photo */}
                        <Stack.Screen 
                        // options = {({navigation, screenProps}) => ({
                        // })}
                        title="포토"
                        name="Photo" 
                        component={Photo}
                        initialParams={{ setImage: this.setImage }}
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
