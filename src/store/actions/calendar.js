export const CHANGE_DATE = 'CHANGE_DATE';

export const changeDate = newdate => {
    return { type: CHANGE_DATE, date: newdate };
};