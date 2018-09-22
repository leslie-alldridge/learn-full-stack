import React from "react";

class Redux extends React.Component {
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
        <h1>Redux</h1>
        <h4>Alright, let's learn about Redux</h4>
        <p>
          Redux is very helpful. Think of it as a bank of state (knowledge) that
          you can easily connect to any React Component. This saves lots of time
          and code, since we don't have to pass information through components
          multiple times.
        </p>
        <p>The main things we need to know for Full Stack are:</p>
        <p>Note: these are linked and go to Gists with example code!</p>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://gist.github.com/leslie-alldridge/83b7c9c135ad1353aec73d501afa12dc"
            >
              Actions
            </a>
          </li>
          <li>Reducers</li>
          <li>Combined Reducers</li>
          <li>Map props to state</li>
          <li>
            <a
              target="_blank"
              href="https://gist.github.com/leslie-alldridge/f3fc20e27b383446cf3207a7ea960e55"
            >
              Map dispatch to props
            </a>
          </li>
        </ul>

        <p>Actions: This is how we communicate with Redux.</p>
        <img src="/3.png" />
        <p>
          Reducers: Sets a state for Redux. (Redux and React states differ!)
        </p>
        <p>Combined reducers: A summarized state from all of your reducers</p>
        <p>
          Map props to state - allows you to access Redux state in Reacts props
          (by going this.props). Remeber props in React is outside data coming
          in. In this case it's the outside data from Redux, coming in.
        </p>
        <p>
          Map dispatch to props: Allows us to send commands to redux by going
          this.props.functionName
        </p>
      </div>
    );
  }
}
export default Redux;
