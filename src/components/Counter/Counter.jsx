import { useDispatch, connect } from "react-redux";
import React from "react";
import { setCounter } from "../../redux/action";

const Counter = (props) => {

    const dispatch = useDispatch();

    return <div>
        {props.counter}
        <button onClick={() => dispatch(setCounter(props.counter + 1))}>+</button>
        <button onClick={() => dispatch(setCounter(props.counter - 1))}>-</button>
        <button onClick={() => dispatch(setCounter(0))}>reset</button>
    </div>
}

const mapStateToProps = function(state) {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(Counter); //higher order component