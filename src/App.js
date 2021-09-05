import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, PostsPage, PostPage, ErrorPage } from "./pages";
import Navbar from "./components/Navbar";
import "./styles/index.css";

function App() {
  const message = "Hello from component:";
  return (
    <Router>
      <Navbar message={message} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/posts">
          <PostsPage message={message} />
        </Route>
        <Route
          exact
          path="/post/:id"
          children={() => <PostPage message={message} />}
        ></Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
