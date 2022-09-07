import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./store/reducers/calendar";
import reminderReducer from "./store/reducers/reminder";

import CalendarPage from "./containers/CalendarPage/CalendarPage";

const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    reminder: reminderReducer
  },
});

function App() {
  return (
    <Provider store={store}>
      <CalendarPage />
    </Provider>
  );
}

export default App;
