# CalendarApp

This app is based on repository [App Ideas - Calendar App.](https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calendar-App.md)

# Preview
![image](https://user-images.githubusercontent.com/53958251/156905459-bc860991-c0cf-447d-ac13-585792142cd6.png)

![SecondGif](https://user-images.githubusercontent.com/53958251/156906081-34af1f55-65b3-4ee5-b069-d3b59f42789e.gif)

# Features

### Custom hook: useLocalStorage

With this hook, we can create a custom state that is saved in the local storage everytime it changes.
That feature helps a lot with the event management.

### Context API

With the context API from ReactJS, we can manage our events and our current selected date from diferent components.
That allow us to show the events in the day from the calendar and in the list of event from the selected day and more.

### Styled components 💅🏾

Styled components is a JS library that allow us to create React Components with custom styles, that styles could be based in their received props, what allow us to do dynamic stylization.

## Features from the original repository

### User Stories

- [X] User can create event
- [X] User can edit event
- [X] User can delete event

### Bonus features

- [ ] User can drag events between dates
- [ ] User can set reminder for a event
- [ ] Change theme (light/dark) (play with css), play with css 😄
- [X] Store data locally so that events does not get deleted when server is restarted

# Commands
This project was made with Vite.

Run `yarn dev`: to run the server locally, use `--host` to open it to others dispositives;

Run `yarn build`: to run the build;

Run `yarn preview`: to use `vite preview`.
