import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actions";
import "./counter.css";
import rocket from "../Rocket.gif";
class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <h1>Counter App</h1>

        <h2>Count : {this.props.count}</h2>
        <button onClick={this.props.onCountDown}>Low</button>

        <button onClick={this.props.onCountUp}>High</button>
        {this.props.loading && <img src={rocket} className="loading-rocket" />}

        <hr />
        {/* <div>History</div>
        <div className="history">
          <ul>
            {this.props.history.map((item) => (
              <li onClick={() => this.props.deleteItem(item.id)} key={item.id}>
                {item.count}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { count: state.count, history: state.history, loading: state.loading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCountUp: () => dispatch(actionCreator.countUp(1)),
    onCountDown: () => dispatch(actionCreator.countDown(1)),
    deleteItem: (id) => dispatch({ type: "DEL_ITEM", key: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
