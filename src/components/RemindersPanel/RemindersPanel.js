import React from "react";
import ExpandedDay from "./ExpandedDay/ExpandedDay";
import moment from "moment";
import PropTypes from "prop-types";
import Modal from "../UI/Modal";

const propTypes = {
  value: PropTypes.instanceOf(moment).isRequired,
  onClickReminder: PropTypes.func,
  onHideMoreReminders: PropTypes.func,
  reminders: PropTypes.array,
};

function RemindersPanel(props) {
  const { value, reminders, onClickReminder, onHideMoreReminders } = props;
  return (
    <Modal onClose={props.onHideMoreReminders}>
      <ExpandedDay
        key={`modal${value.toString()}`}
        value={value}
        reminders={reminders}
        onClickReminder={onClickReminder}
        onHideMoreReminders={onHideMoreReminders}
      />
    </Modal>
  );
}

RemindersPanel.propTypes = propTypes;
export default RemindersPanel;
