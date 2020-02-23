import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, 
    SimpleLineIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MainFeed from './pages/MainFeed';
import FeedComment from './pages/FeedComment';
import MainStackScreen from './common/MainStackScreen';
import Search from './pages/Search';
import Activities from './pages/Activities';
import MyPage from './pages/MyPage';
import Photo from './pages/Photo';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Tab = createBottomTabNavigator();


export class Main extends Component {
    
   state = {
     modalVisible: false,
   }

    setModalVisible = (visible) => {

      this.props.navigation.navigate('Photo');
    }

    
    render() {

        return (
          <React.Fragment>
            {this.state.modalVisible && <Photo setModalVisible={this.setModalVisible}/>}
        
                <Tab.Navigator
                
                headerMode="float"
                screenOptions={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                  }}

                screenOptions={({ route }) => ({

                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
                      if (route.name === 'MainStack') {
                        iconName = focused
                          ? 'md-home'
                          : 'home';
                      } else if (route.name === 'Search') {
                        iconName = focused ? 'md-search' : 'ios-search';
                      } else if (route.name === 'Photo') {
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
                        //  return //<AntDesign name={iconName}  size={size} color={color} />;
                        return 
                       // <TouchableOpacity onPress={() => {this.setModalVisible(true)}}>
                          // <AntDesign name={iconName}  size={size} color={color} />)
                        //</TouchableOpacity>);
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
                    <Tab.Screen name="MainStack" component={MainStackScreen} initialParams={{ articles: this.state.articles }} />
                    <Tab.Screen name="Search" component={Search} />
                    <Tab.Screen name="Photo" component={Search} label="Disabled"/>
                    <Tab.Screen name="Activities" component={Activities} />
                    <Tab.Screen name="MyPage" component={MyPage} />

                </Tab.Navigator>
            
                <View style={styles.photoButton}> 
                  <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                    <AntDesign name='plussquareo' size={25} />
                  </TouchableOpacity>
                </View>
                  
            </React.Fragment>
        );
    }
}

export default Main

const styles = StyleSheet.create({
  photoButton: {
    position: 'absolute',
    bottom: 46,
    left: '47%',
  },
})
