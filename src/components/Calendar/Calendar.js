import Day from "./Day/Day";
import Line from "./Line/Line";
import moment from "moment";
import PropTypes from "prop-types";
import "./Calendar.css";
import React from "react";
import TitleLine from "./Line/TitleLine";
import Navigation from "./Navigation/Navigation";
import { DAY_FORMAT } from "../../shared/constants";

const propTypes = {
  value: PropTypes.instanceOf(moment).isRequired,
  onChange: PropTypes.func,
  onClickDate: PropTypes.func,
  onClickReminder: PropTypes.func,
  onClickShowMoreReminders: PropTypes.func,
  reminders: PropTypes.array,
};

const datesByWeek = (arr) => {
  const res = [];
  while (arr.length > 0) {
    const chunk = arr.splice(0, 7);
    res.push(chunk);
  }
  return res;
};

const daysToShow = (dateReference) => {
  var dates = [];
  const startOfMonth = moment(dateReference.format(DAY_FORMAT)).startOf(
    "month"
  );
  const endOfMonth = moment(dateReference.format(DAY_FORMAT)).endOf("month");
  const startDayOfWeek = startOfMonth.weekday();
  const startOfCalendar = startOfMonth.subtract(startDayOfWeek, "days");
  const endDayOfWeek = endOfMonth.weekday();
  const endOfCalendar = endOfMonth.add(6 - endDayOfWeek, "days");
  const dayToAdd = startOfCalendar.clone();
  do {
    dates.push(dayToAdd.clone());
  } while (dayToAdd.add(1, "days").diff(endOfCalendar) < 0);
  return dates;
};

function Calendar(props) {
  const {
    value,
    reminders,
    onClickReminder,
    onClickDate,
    onClickShowMoreReminders,
    onChange,
  } = props;
  const dates = daysToShow(value);
  const weeks = datesByWeek(dates);

  const renderWeek = (dates, index) => {
    return (
      <Line key={`week${index}`}>
        {dates.map((day) => {
          const remindersDay = reminders.filter(
            (r) => r.date.format(DAY_FORMAT) === day.format(DAY_FORMAT)
          );
          return (
            <Day
              key={day.toString()}
              value={day.month() === value.month() ? day : null}
              reminders={remindersDay}
              onClickDate={onClickDate}
              onClickReminder={onClickReminder}
              onClickShowMoreReminders={onClickShowMoreReminders}
            />
          );
        })}
      </Line>
    );
  };
  const linesOfCalendar = weeks.map((week, index) => renderWeek(week, index));

  return (
    <div>
      <Navigation date={value} onChangeDate={onChange} />
      <TitleLine />
      {linesOfCalendar}
    </div>
  );
}

Calendar.propTypes = propTypes;
export default Calendar;
