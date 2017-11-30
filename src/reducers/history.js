import { HistoryTypes } from '../actions/history';

const history = (state = [], action) => {
  switch (action.type) {
    case HistoryTypes.ADD_HISTORY:
      return [
        ...state,
        {
          id: action.id,
          text: action.state,
          timestamp: action.timestamp,
        },
      ];
    default:
      return state;
  }
};

export default history;
