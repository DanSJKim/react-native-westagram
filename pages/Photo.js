import React, { Component } from 'react';
import { Text, View, Modal, TouchableHighlight, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class Photo extends Component {
  state = {
    image: null,
  };



  render() {
      console.log('this.props.screenProps: ', this.props);
      let { image } = this.state;

      this.props.navigation.setOptions({
        headerRight: () => (
          <Button onPress={() => this.props.navigation.navigate('NewFeed', {image: this.state.image})} title="다음" />
          // <Button
          //   onPress={() => navigation.navigate('NewFeed', {image: image})}
          //     title="다음"
          //     color="#4b97ef"
          //   />
        ),
      });
      

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Pick an image from camera roll"
            onPress={this._pickImage}
          />
          {image &&
            <Image source={{ uri: image }} style={{ width: 200, height: 200, resizeMode: 'contain'}} />}
        </View>
      );
}

componentDidMount() {
  this.getPermissionAsync();
  console.log('hi');
}

getPermissionAsync = async () => {
  if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  }
}

_pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1
  });

  console.log(result);

  if (!result.cancelled) {
    this.setState({ image: result.uri });
    console.log('result image: ', this.state.image);
    //console.log('this.props.setimage: ', this.props.route.params);
    this.props.route.params.setImage(this.state.image);
  }
};
}