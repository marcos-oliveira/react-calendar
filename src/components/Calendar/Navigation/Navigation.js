import "./Navigation.css";
function Navigation(props) {
  const changeDate = (unit, amount) => {
    if (amount) {
      props.onChangeDate(props.date.add(amount, unit));
    } else {
      props.onChangeDate(props.date.subtract(amount, unit));
    }
  };
  return (
    <div className="Navigation">
      <div className="controls">
        <button onClick={() => changeDate("years", -1)}>{"<<"}</button>
        <button onClick={() => changeDate("months", -1)}>{"<"}</button>
      </div>
      <div className="title">{props.date.format("MMMM YYYY")}</div>
      <div className="controls">
        <button onClick={() => changeDate("months", 1)}>{">"}</button>
        <button onClick={() => changeDate("years", 1)}>{">>"}</button>
      </div>
    </div>
  );
}

export default Navigation;
