import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Article from './Article'
import { ScrollView } from 'react-native-gesture-handler'


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

class Feeds extends Component {

 
    
    render() {
        return (
            <View style={styles.feeds}>
              <FlatList
                data={DATA}
                renderItem={({ item }) => <Article navigation={this.props.navigation} title={item.title} />}
                keyExtractor={item => item.id}
              />
            </View>
        )
    }
}

export default Feeds

const styles = StyleSheet.create({
    feeds: {
      flex: 1,
      width: '100%',
      backgroundColor: '#ffffff'
    }
});