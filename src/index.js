import React from 'react';
import { render } from 'react-dom';
import { Home, Mine, Search, Tech, Contact } from './Screens';

const Index = ({ pathname }) => {
  switch(pathname) {
    case "/":
      return <Home />;
    case "/Search":
      return <Search />;
    case "/Mine":
      return <Mine />;
    case "/Tech":
      return <Tech />;
    case "/Contact":
      return <Contact />;
    default:
      return <Home />;
  }
};

let pathname = window.location.pathname;

render(<Index pathname={pathname} />, document.getElementById("root"));

 window.addEventListener("popstate", () => {
  pathname = window.location.pathname;
});


