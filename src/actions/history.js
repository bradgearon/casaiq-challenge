export const HistoryTypes = {
  ADD_HISTORY: 'ADD_HISTORY',
};

let nextHistoryId = 0;
export const addHistory = state => ({
  type: HistoryTypes.ADD_HISTORY,
  id: nextHistoryId++,
  timestamp: Date.now(),
  state,
});
