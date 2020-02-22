import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

class FeedCommentItem extends Component {
    render() {

        console.log('feeditems: ', this.props.comment.item.id)
        return (

            <View style={ styles.commentItem }>
                    <View style={styles.commentWrapper}>
                        <View style={styles.commentImageWrapper}>
                                <Image style={styles.profileImage} source ={{uri: 'https://res.cloudinary.com/teepublic/image/private/s--mCxJgSH2--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1570706449/production/designs/6275831_0.jpg'}}/>
                        </View>
                        <View style={styles.commentTextWrapper}>
                            <View style={styles.commetTopWrapper}>
                                <Text style={{fontWeight: '600'}}> {this.props.comment.item.name} </Text>
                                <Text> {this.props.comment.item.body} </Text>
                            </View>
                            <View style={styles.commentBottomWrapper}>
                                <Text style={styles.bottomFirstCommentText} >7시간</Text>
                                <Text style={styles.bottomCommentText} >좋아요 1개</Text>
                                <Text style={styles.bottomCommentText} >답글 달기</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{justifyContent:'center', marginRight: 10}}>
                        <FontAwesome name="heart-o"></FontAwesome>
                    </View>
                    
            </View>
        )
    }
}

export default FeedCommentItem

const styles = StyleSheet.create({
    commentItem: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70, 
    },
    commentWrapper: {
        flexDirection: 'row'
    },
    commetTopWrapper: {
        flexDirection: 'row',
        marginBottom: 10
    },
    commentBottomWrapper: {
        flexDirection: 'row',
    },
    commentImageWrapper: {
        width: 30,
        height: 30,
        marginRight: 5,
        marginBottom: 5
    },
    profileImage: {
        height: '100%',
        width: '100%',
        borderRadius: 50,
    },
    commentTextWrapper: {

    },
    bottomFirstCommentText: {
        color: 'gray',
        marginLeft: 3
    },
    bottomCommentText: {
        color: 'gray',
        marginLeft: 15
        
    }
})