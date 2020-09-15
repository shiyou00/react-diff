import React,{ Component } from 'react';

class Foo extends Component{

  componentDidMount() {
    console.log("Foo componentDidMount");
  }

  componentWillUnmount() {
    console.log("Foo componentWillUnmount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Foo componentDidUpdate");
  }

  render() {
    return(
      <div>
        Foo
        {this.props.children}
      </div>
    )
  }
}

export default Foo;
