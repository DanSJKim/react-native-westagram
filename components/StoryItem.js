import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

class StoryItem extends Component {
    render() {
        return (
            <View style={styles.item}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source ={{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Into_the_Spider-Verse_Cover.jpg/220px-Into_the_Spider-Verse_Cover.jpg'}}/>
                </View>
                <View style={styles.textWrapper}>
                    <Text>seungjune</Text>
                </View>
            </View>
        )
    }
}

export default StoryItem

const styles = StyleSheet.create({
    item: {
        height: '100%',
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7
    },
    imageWrapper: {
        width: 65,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: '90%',
        width: '90%',
        borderRadius: 50
    },
    textWrapper: {
        justifyContent: 'center',
        textAlignVertical: 'center',
        maxWidth: 70,
        height: 20
    }
})