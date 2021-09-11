import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Pages
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import CoursePage from "./components/CoursePage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={HomePage} exact></Route>
      <Route path="/signin" component={SignIn} exact></Route>
      <Route path="/signup" component={SignUp} exact></Route>
      <Route path="/course/:id" component={CoursePage} exact></Route>
    </BrowserRouter>
  );
}

export default App;