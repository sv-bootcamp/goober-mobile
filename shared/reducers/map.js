import * as types from '../actions/actionTypes';
import update from 'react-addons-update';

const initialState = {
  tabview_index: 0,
  tabview_routes: [
    {key: '1', title: 'All'},
    {key: '2', title: 'Events'},
    {key: '3', title: 'Facilities'},
    {key: '4', title: 'Warning'}
  ],
  currentLocation: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  },
  items: [
    {category: 'A', description: 'up', latlng: {latitude: 37.7925, longitude: -122.4324}},
    {category: 'B', description: 'mid', latlng: {latitude: 37.7825, longitude: -122.4324}},
    {category: 'C', description: 'down', latlng: {latitude: 37.7725, longitude: -122.4324}}
  ],
  categoryFilter: 'SHOW_ALL',
  navigator: '',
  route: '',
  sceneIndex: 0
};

const map = (state = initialState, action = {}) => {
  switch (action.type) {
  case types.onLocationChange:
    return update(state, {
      currentLocation: { $set: action.region }
    });
  case types.getMapItems:
    return state;
  case types.categorizeItems:
    return update(state, {
      categoryFilter: { $set: action.category}
    });
  case types.setLocation:
    return update(state, {
      currentLocation: { $set: action.location}
    });
  case types.setTabViewIndex:
    return update(state, {
      tabview_index: { $set: action.index }
    });
  case types.setNavigator:
    return update(state, {
      navigator: { $set: action.navigator }
    });
  case types.setRoute:
    return update(state, {
      route: { $set: action.route }
    });
  case types.onForward:
    if(action.index > 0) {
      console.log("popped");
      action.navigator.pop();
    }
    else {
      action.navigator.push({
        index: 1
      });
    }
    return state;
  case types.setSceneIndex:
    return update(state, {
      sceneIndex: { $set: action.sceneIndex }
    });
  default:
    return state;
  }
};

export default map;