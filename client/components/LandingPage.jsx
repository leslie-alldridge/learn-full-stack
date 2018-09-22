import React from "react";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      destination: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleDescChange(e) {
    this.setState({
      description: e.target.value,
      destination: this.state.destination
    });
  }

  handleChange(e) {
    this.setState({
      description: this.state.description,
      destination: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Full Stack!</h1>
        <h4>
          The goal of this website is to help explain the various parts of a
          full stack application
        </h4>
        <h4>We will focus on Express, React, Redux, API and Knex databases</h4>
        <div id="landing" className="container">
          <h5>Let's start on the front end.</h5>
          <p>
            The front end in react can be stateless (just plain text renders) or
            stateful (having a memory). We often use stateful components as they
            are more interactive compared to plain text.
          </p>
          <p>An example of using state is below.</p>
          <img src="/1.png" />
          <button onClick={this.props.buttonToggle}>
            Click me to toggle state
          </button>
          <blockquote class="blockquote">
            Note: You can check the React Dev Tools. Click on 'App' and view the
            current state. buttonToggle will be true/false depending on whether
            you've pressed the button or not. It's currently set to toggle.
            Remeber, this is Reacts internal state.
          </blockquote>
          <img src="/2.png" />
          <p>
            Want the code?{" "}
            <a
              target="_blank"
              href="https://gist.github.com/leslie-alldridge/8028caba2e9e49149f4443767c28bd3a"
            >
              It's here
            </a>
          </p>
          <p>
            Now that you understand state in React, let's see how we can pass
            this information into Redux.
          </p>
          <button onClick={this.props.redux}>OK, I'm ready</button>
        </div>
      </div>
    );
  }
}
export default LandingPage;
