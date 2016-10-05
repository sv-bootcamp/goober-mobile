import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	TextInput
} from 'react-native';

// import Card from './Card.js';
import EventList from './EventList.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  }
});

class ListWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      card: {
        title: 'Title',
        description: 'desc'
		  }
	  };
  }

  handleTextChange(event) {
	  console.log(event.nativeEvent.text);
	  this.setState({zip: event.nativeEvent.text});
  }

  render() {
    // const card = <Card
    //     title={this.state.card.title}
    //     description={this.state.card.description} />;

    // const imgBack = <Image source={require('../../static/images/flowers.png')}
    //      resizeMode='cover' style={styles.backdrop}>
    //     <Text style={styles.welcome}>
    //       Welcome to React Native!!! {this.state.zip}
    //     </Text>
    //   </Image>;

    return (
    	<View style={styles.container}>
        <EventList />
      	<TextInput
      		style={styles.input}
      		returnKeyType='go'
      		onSubmitEditing={(event) => this.handleTextChange(event)} />
    	</View>
    );
	}
}

export default ListWrapper;