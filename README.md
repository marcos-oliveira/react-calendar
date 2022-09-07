## Instructions
``npm install``

``npm start``


### Component
`Calendar` is the component for this Demo.

#### Use:

```
<Calendar
    value="2022-12-12"
    onChange={() => {}}
    onClickDate={onClickDate}
    onClickReminder={onClickReminder}
    onClickShowMoreReminders={onClickShowMoreReminders}
    reminders={reminders}
/>
```

#### Props:

| Prop     |                                                                                             |
|---------------------------|----------------------------------------------------------------------------|
|value                      | Date reference to select the month of the calendar                         |
|onChange                   | Function to change the value (date of reference)                           |
|onClickDate                | Function to handle click on a day of the calendar                          |
|onClickReminder            | Function to handle click on a Reminder of the calendar                     |
|onClickShowMoreReminders   | Function to handle click on button show more Reminders when list is hidden |
|reminders                  | Reminders of a calendar                                                    |


`CalendarPage` is the container I used to render the `Calender` component as well as control its behavior using a redux store.


### Could be improved:
#### For users

1. The obvious improvement from a user's point of view would be drag and drop functionality to change data within the month.
2. Improve Navigation by providing means to select a month or year.
3. CSS improvements: adding icons, implementing responsive layout.
4. Implement form validation and flash messages.
5. Include tooltip to display all text when hovering over Reminder.

#### For developers

1. Implement tests for all components with high coverage.
2. Use libs like lodash for common functions like get a property value in a object chain.
