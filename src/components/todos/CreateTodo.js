import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

    constructor() {
        super();
        this.state = {
            text: '',
        };
    }

    handleChange = event => {
        this.setState({
            text: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state)
    }

  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
        // {this.state.text} - use to test that onChange is working
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};
// In this component, we are not currently concerned with writing a mapStateToProps() function (the first argument passed to connect) as this component doesn't need any state. Since we only need to dispatch an action here and we are not getting information from our store, we can use null instead of mapStateToProps as the first argument.
export default connect(null, mapDispatchToProps)(CreateTodo);
// Remember that, if not given any arguments, connect will return dispatch as a prop to the component we're wrapping with connect. So an alternative way to write the CreateTodo component could be:
// export default connect()(CreateTodo);
