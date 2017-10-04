import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const {name, account, password} = this.props.currentUser;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>註冊資料</Text>
        <Text>大名: {name}</Text>
        <Text>帳號: {account}</Text>
        <Text>密碼: {password}</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);