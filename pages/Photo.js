import React, { Component } from 'react';
import { Text, View, Modal, TouchableHighlight } from 'react-native';
import { Camera } from 'expo-camera';

export default class Photo extends Component {

    setModalVisible = visible => {
        console.log('visible: ', visible);
        this.props.setModalVisible(visible);
      }

    render() {
        console.log('Photo visible ', this.props.modalVisible)
        return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(false);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        )
    }
}
