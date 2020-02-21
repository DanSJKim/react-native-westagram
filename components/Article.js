import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons, EvilIcons, SimpleLineIcons, Octicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { TextInput, TouchableOpacity, TouchableHighlight, TouchEvent } from 'react-native-gesture-handler';
import CommentItem from './CommentItem';
import uuid from 'uuid';

class Article extends Component {

    state = {
        comment: '',
        comments: []
    };
    
    onChangeText = (text) => {
        this.setState({ 
            comment: text
        });
       
    }

    addComment = () => {
        
        let newComment ={
          id: uuid.v4(),
          name: 'kim',
          body: this.state.comment
        }
  
        this.setState({
             comments: [...this.state.comments, newComment],
             comment: ''
            });
        
      }

    
    deleteFeedComment = (itemKey) => {
        this.setState({
            comments: [...this.state.comments.filter(comment => comment.id !== itemKey)]
        });
    }

    render() {
        console.log('data!!!: ', this.props.data)
        return (
            <View>
                {/* feed header */}
                <View style={styles.feedHeader}>
                    <View style={styles.profileImageTextWrapper}>
                        {/* profile image */}
                        <View style={styles.profileImageWrapper}>
                            <Image style={styles.profileImage} source ={{uri: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/05/deadpool-animated-header.jpg'}}/>
                        </View>

                        {/* profile id */}
                        <Text style={{marginLeft: 10, fontWeight: '500'}}>Seungjune</Text>
                    </View>
                    <MaterialCommunityIcons name="dots-horizontal" size={20} />
                </View>

                {/* feed image */}
                <View>
                    <Image style={styles.feedImage} source={{uri: 'https://i.pinimg.com/originals/82/d0/b0/82d0b0027f788473abbe7f9ed2e2880b.jpg'}}></Image>
                </View>

                {/* feed bottom */}
                <View style={styles.feedBottomWrapper}>

                    {/* feed like, comment, share, bookmark buttons */}
                    <View style={styles.feedMiddleWrapper}>
                        <View style={styles.feedButtonsWrapper}>
                            {/* like */}
                            <FontAwesome name="heart-o" size={30} style={{margin: 0, padding:0}} />
                            {/* comment */}
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('FeedComment', {comments: this.state.comments, delComment: this.deleteFeedComment})}}>
                                <EvilIcons name="comment" size={40} style={{marginLeft: 10}}  />
                            </TouchableOpacity>
                            {/* share */}
                            <SimpleLineIcons name="paper-plane" size={27} style={{marginLeft: 10, marginTop: 2}} />
                        </View>
                        {/* bookmark */}
                        <FontAwesome name='bookmark-o' size={30} />
                    </View>

                    {/* feed comment list */}
                    <View style={styles.commentsWrapper}>
                        {this.state.comments.map((comment) => (
                            <CommentItem key={comment.id} comment={comment} />
                        ))}
                    </View>

                    {/* submit form */}
                    <View style={styles.submitWrapper}>
                        {/* comment profile image */}
                        <View style={styles.commentImageWrapper}>
                                <Image style={styles.profileImage} source ={{uri: 'https://res.cloudinary.com/teepublic/image/private/s--mCxJgSH2--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1570706449/production/designs/6275831_0.jpg'}}/>
                        </View>
                        {/* comment input */}
                        <TextInput onChangeText={(text) => this.onChangeText(text)} style={{marginLeft: 8, width:'80%'}} placeholder='댓글 달기...' value={this.state.comment}></TextInput>
                        {/* submit comment */}
                        <TouchableOpacity onPress={this.addComment} style={styles.submitButton}>
                            <Text style={{color: '#4b97ef'}}>게시</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                
            </View>
        )
    }
}

export default Article

const styles = StyleSheet.create({
    feedHeader: {
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    profileImageTextWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileImageWrapper: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        height: '100%',
        width: '100%',
        borderRadius: 50
    },
    feedImage: {
        width: '100%',
        height: 350
    },
    feedBottomWrapper: {
        padding: 10,
    },
    feedMiddleWrapper: {
        width: '100%',
        height: 32,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 10,
    },
    feedButtonsWrapper: {
        flexDirection: 'row',
    },
    commentsWrapper: {
    },
    submitWrapper: {
        flexDirection: 'row',
    },
    commentImageWrapper: {
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButton: {
        width: 65,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });
  