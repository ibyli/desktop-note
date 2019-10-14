import { queryCurrent, query as queryUsers } from '@/services/user';

const EditModel = {
  namespace: 'edit',
  state: {
    currentNote: '',
  },
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },

    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { ...state, currentUser: action.payload || {} };
    },

    changeCurrentNote(state, { payload }) {
      return { ...state, currentNote: payload };
    },
  },
};
export default EditModel;
