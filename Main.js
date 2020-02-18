import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, 
    SimpleLineIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainFeed from './pages/MainFeed';
import Search from './pages/Search';
import Camera from './pages/Camera';
import Activities from './pages/Activities';
import MyPage from './pages/MyPage';

const Tab = createBottomTabNavigator();

export class Main extends Component {
    
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator

                screenOptions={({ route }) => ({

                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
                      if (route.name === 'MainFeed') {
                        iconName = focused
                          ? 'md-home'
                          : 'home';
                      } else if (route.name === 'Search') {
                        iconName = focused ? 'md-search' : 'ios-search';
                      } else if (route.name === 'Camera') {
                        iconName = focused ? 'plussquare' : 'plussquareo';
                      } else if (route.name === 'Activities') {
                        iconName = focused ? 'ios-heart' : 'ios-heart-empty';
                      } else if (route.name === 'MyPage') {
                        iconName = focused ? 'md-person' : 'person-outline';
                      }
                      

                      // You can return any component that you like here!
                      if (iconName === 'home'){
                        return <SimpleLineIcons name={iconName} size={18} color={color}  />
                      } else if (iconName === 'person-outline'){
                        return <MaterialIcons name={iconName} size={29} color={color} />;
                      } else if (iconName === 'plussquareo' || iconName === 'plussquare'){
                        return <AntDesign name={iconName} size={size} color={color} />;
                      } else{
                        return <Ionicons name={iconName} size={size} color={color} />;
                      }
                    },
                  })}
                  tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'black',
                    showLabel: false,
                  }}


  
                >
                    <Tab.Screen name="MainFeed" component={MainFeed}/>
                    <Tab.Screen name="Search" component={Search} />
                    <Tab.Screen name="Camera" component={Camera} />
                    <Tab.Screen name="Activities" component={Activities} />
                    <Tab.Screen name="MyPage" component={MyPage} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default Main
