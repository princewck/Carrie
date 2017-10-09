import { query } from '../services/subjects';

export default {
  namespace: 'subjects',
  state: {
    list: [],
    total: null,
    loading: false,
    current: null,
    currentItem: {},
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({
        type: 'query',
      });
    },
  },
  reducers: {
    showLoading(state) {
      return { ...state, loading: true };
    },
    querySuccess(state, action) {
      return { ...state, ...action.payload, loading: false };
    },
  },
  effects: {
    query: [
      function* ({ payload }, { call, put }) {
        yield put({ type: 'showLoading' });
        const { data } = yield call(query);
        if (data) {
          yield put({
            type: 'querySuccess',
            payload: {
              list: data,
              total: data.length,
              current: 1,
            },
          });
        }
      },
      {
        type: 'takeLatest',
      },
    ],
  },
};
