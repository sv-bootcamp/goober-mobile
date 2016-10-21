import {View, StyleSheet, Platform} from 'react-native';
import React, {Component} from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';
import HeaderLayout from './headerLayout';
import SceneListLayout from './sceneListLayout';
import SceneMapLayout from './SceneMapLayout';
import FormLayout from './formLayout';
import CameraLayout from './cameraLayout';

const scenes = Actions.create(
  <Scene key="root" hideNavBar={true}>
    <Scene key="map" hideNavBar={true} component={
      SceneMapLayout
    }/>
    <Scene key="list" hideNavBar={true} component={
      SceneListLayout
    }/>
    <Scene key="createForm" hideNavBar={true} component={
      FormLayout
    }/>
    <Scene key="cameraView" hideNavBar={true} component={
      CameraLayout
    }/>
  </Scene>
);

const styles = StyleSheet.create({
  iosMargin: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginTop: 19
      }
    })
  }
});

export default class AllLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.iosMargin}>
          <HeaderLayout/>
        <View style={{flex: 4}}>
          <Router
            scenes={scenes}
          />
        </View>
      </View>
    );
  }
}