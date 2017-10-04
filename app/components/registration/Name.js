import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {setCurrentUser} from '../../actions/registration';
import {Actions} from 'react-native-router-flux';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setCurrentUser,
  }, dispatch);
}

class Name extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.currentUser.name
    }
  }

  handlePress = () => {
    this.props.setCurrentUser({
      name: this.state.name
    });
    Actions.account();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text>{this.props.title}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TextInput
            style={{borderWidth: 1, width: '80%', padding: 5}}
            value={this.state.name}
            onChangeText={(name) => {this.setState({name})}}
           />
          <Button title="下一步" color="blue" onPress={this.handlePress} />
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Name);