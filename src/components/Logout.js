import React, { Component } from "react";
import { withRouter } from "react-router-dom";

const values = {
  url: "http://localhost:5500/"
};

class Logout extends Component {
  logout() {
    // this.props.history.push("/");
    // this.props.keycloak.logout({ redirectUri: values.url });
    this.props.keycloak.logout();
  }

  render() {
    return <button onClick={() => this.logout()}>Logout</button>;
  }
}
// export default withRouter(Logout);
export default Logout;
