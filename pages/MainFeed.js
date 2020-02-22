import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import StoryHeader from '../components/StoryHeader';
import Feeds from '../components/Feeds';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import uuid from 'uuid';

export class MainFeed extends Component {

    state = {
        articles:[]
    }

    addArticle = () => {
        console.log('add!!!!');
        let newComment ={
            id: uuid.v4(),
            name: 'kim',
            image: this.props.route.params.image,
            body: this.props.route.params.body,
          }
    
          this.setState({
               articles: [...this.state.articles, newComment],
          });
          
          this.props.route.params.image = undefined;
          this.props.route.params.body = undefined;
      } 

      componentDidUpdate = () => {
          if(this.props.route.params.image !== undefined && this.props.route.params.body !== undefined){
            this.addArticle();
          } 
      }

    render() {

        console.log('MainFeeds Articles: ', this.state.articles);
        return (
            <View style = {styles.container}>
                
                <ScrollView>
                    <StoryHeader />
                    <Feeds navigation={this.props.navigation} articles={this.state.articles}/>
                </ScrollView>

            </View>
        )
    }
}

export default MainFeed

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#b0b0b0'
    }
})