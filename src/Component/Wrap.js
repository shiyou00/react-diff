import React,{ Component } from 'react';

class Wrap extends Component{

  componentDidMount() {
    console.log("Wrap componentDidMount");
  }

  componentWillUnmount() {
    console.log("Wrap componentWillUnmount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Wrap componentDidUpdate");
  }

  render() {
    return(
      <div>
        Wrap
        {this.props.children}
      </div>
    )
  }
}

export default Wrap;
