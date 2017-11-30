let nextHistoryId = 0;
export const addHistory = state => {
  return {
    type: 'ADD_HISTORY',
    id: nextHistoryId++,
    timestamp: Date.now(),
    state
  }
};
