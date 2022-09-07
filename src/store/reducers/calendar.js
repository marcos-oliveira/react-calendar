import moment from 'moment';
import { DAY_FORMAT } from '../../shared/constants';
import { CHANGE_DATE } from '../actions/calendar';

const initialState = {
  date: moment().format(DAY_FORMAT)
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DATE:
      return {
        ...state,
        date: action.date
      };
    default:
      return state;
  }
};

export default calendarReducer;
