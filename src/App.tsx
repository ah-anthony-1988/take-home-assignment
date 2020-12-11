import React from "react";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { Page } from "./components/elements/page/page";
import { Header } from "./components/header";
import { Home } from "./containers/home";

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}>
        <Page>
          <Header />
          <Home />
        </Page>
      </Router>
    </div>
  );
}

export default App;
