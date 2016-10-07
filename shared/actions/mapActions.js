import * as types from './actionTypes';

const API_GET_MARKERS = 'http://goober.herokuapp.com/api/items';

export const onLocationChange = (region) => {
  return {
    type: types.onLocationChange,
    region: region
  };
};

export const receiveMarkers = (json) => {
  return {
    type: types.getMapMarkers,
    markers: json.items
  };
};

export const getMapMarkers = () => {
  return (dispatch) => {
    return fetch(API_GET_MARKERS)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveMarkers(json))
    );
  };
};

export const update_markers_A = () => {
  return {
    type: types.update_markers_A
  };
};

export const update_markers_B = () => {
  return {
    type: types.update_markers_B
  };
};

export const update_markers_C = () => {
  return {
    type: types.update_markers_C
  };
};
