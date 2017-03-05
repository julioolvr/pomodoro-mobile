import { STORE_SCHEDULED_NOTIFICATION, CANCEL_CURRENT_NOTIFICATION } from '../actions/actionTypes';

const initialState = { notificationId: null };

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
  case STORE_SCHEDULED_NOTIFICATION:
    return { ...state, notificationId: action.payload };
  case CANCEL_CURRENT_NOTIFICATION:
    return { ...state, notificationId: null };
  }

  return state;
}
