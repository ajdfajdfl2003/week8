import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
} from 'react-native';


const {width} = Dimensions.get('window');
const tabWidth = Math.round(width / 3);

const tabStyle = {
  container: {
    width: tabWidth,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export default class TabIcon extends Component {
  constructor(props) {
    super(props);
  }
  showIcon = () => {
    switch (this.props.name) {
      case "main":
        if (this.props.selected) {
          return (
            <View style={[tabStyle.container, {backgroundColor: "#00000020"}]}>
              <Text style={{color: "#ffffff"}}>首頁</Text>
            </View>
          )
        } else {
          return (
            <View style={[tabStyle.container, {backgroundColor: "#dddddd"}]}>
              <Text style={{color: "#000000"}}>首頁</Text>
            </View>
          )
        }
      case "mapTab":
      if (this.props.selected) {
        return (
          <View style={[tabStyle.container, {backgroundColor: "#00000020"}]}>
            <Text style={{color: "#ffffff"}}>地圖</Text>
          </View>
        )
      } else {
        return (
          <View style={[tabStyle.container, {backgroundColor: "#dddddd"}]}>
            <Text style={{color: "#000000"}}>地圖</Text>
          </View>
        )
      }
      case "cameraTab":
      if (this.props.selected) {
        return (
          <View style={[tabStyle.container, {backgroundColor: "#00000020"}]}>
            <Text style={{color: "#ffffff"}}>相機</Text>
          </View>
        )
      } else {
        return (
          <View style={[tabStyle.container, {backgroundColor: "#dddddd"}]}>
            <Text style={{color: "#000000"}}>相機</Text>
          </View>
        )
      }
    }
  }
  render() {
    // console.log(this.props);
    return (
      <View style={{width: tabWidth, height: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.8)'}}>
        {this.showIcon()}
      </View>
    )
  }

}