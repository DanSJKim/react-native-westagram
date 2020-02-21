import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class CommentItem extends Component {
    

    render() {

        console.log('comment: ', this.props.comment)
        return (
            <View style={styles.commentItem}>
                <Text style={{fontWeight: '600'}}> {this.props.comment.name} </Text>
                <Text> {this.props.comment.body} </Text>
            </View>
        )
    }
}

export default CommentItem

const styles = StyleSheet.create({
    commentItem: {
        marginBottom: 5,
        flexDirection: 'row'
    }
})
