import Modal from "../../components/UI/Modal";
import Card from "../../components/UI/Card";
import PropTypes from "prop-types";
import "./Reminder.css";
import { CirclePicker } from "react-color";
import { useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const propTypes = {
  onSaveReminder: PropTypes.func,
  onRemoveReminder: PropTypes.func,
  onHideReminderModal: PropTypes.func,
  reminder: PropTypes.object,
};

const Reminder = (props) => {
  const [description, setDescription] = useState(props.reminder.description);
  const [dateTime, setDateTime] = useState(props.reminder.date.toDate());
  const [color, setColor] = useState(props.reminder.color || "#00bcd4");

  const saveReminder = () => {
    //TODO form validations
    const newDateTime = moment(dateTime);
    const reminder = {
      ...props.reminder,
      description,
      color,
      date: newDateTime,
    };
    props.onSaveReminder(reminder);
  };
  return (
    <Modal onClose={props.onHideReminderModal}>
      <div className="title">
        <span>{props.reminder.date.format("YYYY")}</span>
        <span>{props.reminder.date.format("dddd, MMM D")}</span>
        {!props.reminder.id && <span className="tag-new">New</span>}
        {props.reminder.id && <span className="tag-edit">Edit</span>}
      </div>
      <Card>
        <div className="control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={description}
            maxLength={30}
            id="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="control">
          <label htmlFor="time">Time</label>
          <DatePicker
            selected={dateTime}
            onChange={(date) => setDateTime(date)}
            timeInputLabel="Time:"
            dateFormat="yyyy-MM-dd h:mm aa"
            showTimeInput
          />
        </div>
        <div className="control">
          <label htmlFor="color">Color</label>
          <CirclePicker
            id="color"
            width="100%"
            color={color}
            onChangeComplete={(color) => setColor(color.hex)}
          />
        </div>
      </Card>
      <div className="actions">
        <button className="btn button--alt" onClick={props.onHideReminderModal}>
          Close
        </button>
        {props.reminder.id && <button className="button--del" onClick={() => props.onRemoveReminder(props.reminder.id)}>
          Delete
        </button>}
        {
          <button className="btn button" onClick={saveReminder}>
            Save
          </button>
        }
      </div>
    </Modal>
  );
};

Reminder.propTypes = propTypes;
export default Reminder;
