const history = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HISTORY':
      return [
        ...state,
        {
          id: action.id,
          text: action.state,
          timestamp: action.timestamp
        }
      ];
    default:
      return state;
  }
};

export default history;