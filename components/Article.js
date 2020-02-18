import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Ionicons, FontAwesome, MaterialCommunityIcons, EvilIcons, SimpleLineIcons, Octicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

class Article extends Component {
    render() {
        return (
            <View>
                {/* feed header */}
                <View style={styles.feedHeader}>
                    <View style={styles.profileImageTextWrapper}>
                        <View style={styles.profileImageWrapper}>
                            <Image style={styles.profileImage} source ={{uri: 'https://res.cloudinary.com/teepublic/image/private/s--mCxJgSH2--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1570706449/production/designs/6275831_0.jpg'}}/>
                        </View>
                        <Text style={{marginLeft: 10, fontWeight: '500'}}>Seungjune</Text>
                    </View>
                    <MaterialCommunityIcons name="dots-horizontal" size={20} onPress={() => deleteItem(item.id)}/>
                </View>
                <View>
                    <Image style={styles.feedImage} source={{uri: 'https://i.pinimg.com/originals/82/d0/b0/82d0b0027f788473abbe7f9ed2e2880b.jpg'}}></Image>
                </View>

                {/* feed like, comment, share, bookmark buttons */}
                <View style={styles.feedBottomWrapper}>
                    <View style={styles.feedMiddleWrapper}>
                        <View style={styles.feedButtonsWrapper}>
                            <FontAwesome name="heart-o" size={30} style={{margin: 0, padding:0}} />
                            <EvilIcons name="comment" size={40} style={{marginLeft: 10}}  />
                            <SimpleLineIcons name="paper-plane" size={27} style={{marginLeft: 10, marginTop: 2}} />
                        </View>
                        <FontAwesome name='bookmark-o' size={30} />
                    </View>
                </View>
                


                <View>
                    
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
        height: 60
    },
    feedMiddleWrapper: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 0
    },
    feedButtonsWrapper: {
        flexDirection: 'row',
    }

  });
  