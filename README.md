## Paste
A simple markdown editing app that enables users to share, view and collaborate on Pastes they're working on.

## Getting Started

1. **Install Meteor**
  If you haven't a version of Meteor globally, open up a terminal and run this command
  ```sh
  $ curl https://install.meteor.com/ | sh
  ```
2. **Clone this repository**
  ```sh
  $ git clone https://github.com/jmdelcarmen/paste.git
  ```
3. **Install dependencies**
  ```sh
  $ cd paste
  $ npm install
  ```
4. **Run the Meteor server**
  ```sh
  $ meteor
  ```
5. **The app should be running on [localhost:3000](http://localhost:3000).**


### What is Markdown?
Markdown is a text-to-HTML conversion tool for web browsers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid HTML elements.

## CodeRGV (boot)
This project is the last of 4 main projects assigned in the bootcamp.
There was no particular theme for the project. It simply needed to showcase the knowledge and skills that I, as a software developer, have acquired through out the whole bootcamp.

## Meteor & React
Thiqs project was built with [Meteor](https://www.meteor.com/) on the back-end, an open source platform for web, mobile, and desktop. And Facebook's front-end JavaScript library, [React](https://facebook.github.io/react/), a component based, flexible framework in which your view adapts and re-renders whenever new data is passed on to the client.

## Packages Used
**NPM**
* react-router - for routing the views and creating and simulating a single page app (SPA)
* markdown - for converting the markdown syntax into HTML elements
* react-codemirror - for the editor

**Atmosphere**
* react-meteor-data - for containing the data received from Meteor
* materialize - for the UI and templating
* accounts-password - for local authentication which integrates bcrypt
* themeteorchef:bert - for informative client side alerting
