import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, RefreshControl } from 'react-native'

export default class NewFeed extends Component {

    state = {
        image: this.props.route.params.image,
        body: '',
        width: '',
        height: ''
    };

    setFeedContent = (text) => {
        this.setState({
            body: text
        });
    }
    
    
    render() {

        // 게시물 업로드 버튼
        this.props.navigation.setOptions({
            headerRight: () => (
              <Button onPress={() => { 
                //this.props.navigation.popToTop();
                this.props.navigation.navigate("MainFeed", {image: this.state.image, body: this.state.body});
                //this.props.route.params.addArticle(this.state.body, this.state.image); 
            }} title="공유" />
            ),
        });
        // Image.getSize(this.state.image, (width, height) => {
        //     console.log('height: ', height, 'width: ', width);
        //   });

          
          
        return (
            <View style={styles.container} >
                <View style={{ height: 110, flexDirection: 'row', alignItems: 'center', padding: 20}}>
                    <Image source={{ uri: this.props.route.params.image }} style={{ width: 100 ,height: 100, resizeMode: 'contain', marginRight: 20}} />
                    <View style={{ height: 60, width: '65%'}}>
                        <TextInput onChangeText={(text) => this.setFeedContent(text)} style={{ width: '100%', marginRight: 30 }} placeholder='문구 입력...'/>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      paddingBottom: 20,
      backgroundColor: '#ffffff'
    },
})