import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Keycloak from "keycloak-js";
import Logout from "./components/Logout";
import UserInfo from "./UserInfo";

function redirecting() {
  window.location.replace("http://localhost:5500/");
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keycloak: null,
      authenticated: false // not authenticated by default
    };
  }

  // As soon as the component renders, keycloak is initialized
  componentDidMount() {
    const keycloak = Keycloak("/keycloak.json"); // get the keycloak info
    keycloak.init({ onLoad: "login-required" }).then(authenticated => {
      this.setState({ keycloak: keycloak, authenticated: authenticated });
    });
  }
  render() {
    if (this.state.keycloak) {
      if (this.state.authenticated) {
        return (
          <div>
            <h1>the app goes here</h1>
            <UserInfo keycloak={this.state.keycloak} />
            {/* <BrowserRouter> */}
            <Logout keycloak={this.state.keycloak} />
            {/* </BrowserRouter> */}
            <button onClick={() => redirecting()}>Redirect</button>
          </div>
        );
      } else return <div>Unable to authenticate!</div>;
    }
    return <div>Initializing Keycloak...</div>;
  }
}
export default App;
