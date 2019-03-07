import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: props.loggedInUser };
  }
  render() {
    if (this.state.loggedInUser.admin) {
      return (
        <div>
          <div>
            <h1>
              Welcome {this.state.loggedInUser.username} to WyNot VIP Page
            </h1>
            <h2> <Link to='/adminHome'>Go to the admin Home</Link></h2>
            <div>
              {" "}
              <Link to="/packs">Packs</Link>
            </div>
            <div>
              <Link to="/lab">Lab</Link>
            </div>
            <div>
              <a
                href="https://wynotwatches.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Advanced
              </a>
            </div>
            <div>
              <Link to="/eventos">Eventos</Link>
            </div>
          </div>
        </div>
      );
    }

      if (this.state.loggedInUser) {
      return (
        <div>
          <div>
            <h1>
              Welcome {this.state.loggedInUser.username} to WyNot VIP Page
            </h1>
            <div>
              {" "}
              <Link to="/packs">Packs</Link>
            </div>
            <div>
              <Link to="/lab">Lab</Link>
            </div>
            <div>
              <a
                href="https://wynotwatches.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Advanced
              </a>
            </div>
            <div>
              <Link to="/eventos">Eventos</Link>
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Home;
