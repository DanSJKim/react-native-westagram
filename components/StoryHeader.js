import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import StoryItem from './StoryItem'

class StoryHeader extends Component {
    render() {
        return (
            <View style={styles.header}>
                    <StoryItem />
                    <StoryItem />
                    <StoryItem />
                    <StoryItem />
                    <StoryItem />
            </View>
        )
    }
}

export default StoryHeader

const styles = StyleSheet.create({
    header: {
      height: 100,
      width: '100%',
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      borderBottomWidth: 0.2,
      borderColor: '#afafaf',
    }
})