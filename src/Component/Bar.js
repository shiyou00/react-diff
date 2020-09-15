import React,{ Component } from 'react';

class Bar extends Component{

  componentDidMount() {
    console.log("Bar componentDidMount");
  }

  componentWillUnmount() {
    console.log("Bar componentWillUnmount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Bar componentDidUpdate");
  }

  render() {
    return(
      <div>
        Bar
        {this.props.children}
      </div>
    )
  }
}

export default Bar;
