import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Pages
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import CoursePage from "./components/CoursePage";
import Assignments from "./components/Assignments";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact></Route>
      <Route path="/signin" component={SignIn} exact></Route>
      <Route path="/signup" component={SignUp} exact></Route>
      <Route path="/course/:id" component={CoursePage} exact></Route>
      <Route path="/assignments/:id" component={Assignments} exact></Route>
      <Route path="/admin/login" component={AdminLogin} exact></Route>
      <Route path="/admin/access" component={AdminDashboard} exact></Route>
    </BrowserRouter>
  );
}

export default App;
