import React from "react";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { Page } from "./components/elements/page/page";
import { Header } from "./components/header";
import { Home } from "./containers/home";
import { Footer } from "./components/footer";

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}>
        <Page>
          <Header />
          <Home />
          <Footer />
        </Page>
      </Router>
    </div>
  );
}

export default App;
