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

class Password extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password: this.props.currentUser.password
    }
  }

  handlePress = () => {
    this.props.setCurrentUser({
      password: this.state.password
    });
    Actions.mainGroup({type: 'reset'});
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
            value={this.state.password}
            onChangeText={(password) => {this.setState({password})}}
           />
          <Button title="完成註冊" color="blue" onPress={this.handlePress} />
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Password);