import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Article from './Article'
import { ScrollView } from 'react-native-gesture-handler'
import uuid from 'uuid';


class Feeds extends Component {

    render() {
        return (
            <View style={styles.feeds}>
              <FlatList
                data={this.props.articles}
                renderItem={({ item }) => <Article navigation={this.props.navigation} title={item.title}/>}
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