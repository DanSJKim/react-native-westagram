import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, ListView } from 'react-native'
import FeedCommentItem from '../components/FeedCommentItem'
import {SwipeableFlatList} from 'react-native-swipeable-flat-list';
import { SimpleLineIcons, Feather } from '@expo/vector-icons';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';


/* 피드 댓글 화면 */


export default class FeedComment extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        basic: true,
        comments: this.props.route.params.comments
    }

    deleteComment = () => {
        console.log('delete')
    }

    deleteRow(itemKey) {
        console.log('itemKey: ', itemKey)
        this.props.route.params.delComment(itemKey);
        this.setState({
            comments: [...this.state.comments.filter(comment => comment.id !== itemKey)]
        });

    }


    render() {
        console.log('render::: ',this.state.comments)
        return (
            <View style={styles.container}>

                <SwipeListView
                data={this.state.comments}
                renderItem={(rowData, rowMap) => (
                    <SwipeRow
                        disableLeftSwipe={ parseInt(rowData.item.key) % 2 === 0}
                        leftOpenValue={20 + Math.random() * 150}
                        rightOpenValue={-150}>

                        <View style={styles.rowBack}>
                        <Text>Left</Text>
                        <View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
                            {/* <Text style={styles.backTextWhite}>Right</Text> */}
                            <Feather name='corner-up-left' size={30} color="white" />
                        </View>
                        <TouchableOpacity
                            style={[styles.backRightBtn2, styles.backRightBtnRight]}
                            onPress={_ => this.deleteRow(rowData.item.id, rowMap)}>
                            <SimpleLineIcons name='trash' size={25} color="white" />
                            {/* <Text style={{color: 'green'}}>Delete</Text> */}
                        </TouchableOpacity>
                        </View>

                        <TouchableHighlight
                        onPress={_ => console.log('You touched me')}
                        style={styles.rowFront}
                        underlayColor={'#ffffff'}>
                        {/* <View>
                            <Text>I am {rowData.item.key} in a SwipeListView</Text>
                        </View> */}
                            <FeedCommentItem comment={rowData}/>
                        </TouchableHighlight>

                    </SwipeRow>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#ffffff'
    },
    backTextWhite: {
      color: '#FFFaaa',
    },
    rowFront: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      height: 70,
    },
    rowBack: {
      alignItems: 'center',
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 15,
    },
    backRightBtn: {
      alignItems: 'center',
      bottom: 0,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: 65,
    },
    backRightBtnLeft: {
      backgroundColor: 'gray',
      right: 65,
    },
    backRightBtnRight: {
      backgroundColor: 'red',
      alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        top: 0,
        width: 65,
        height: '100%'
    },
    controls: {
      alignItems: 'center',
      marginBottom: 30,
    },
    switchContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 5,
    },
    switch: {
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'black',
      paddingVertical: 10,
      width: 100,
    },

})