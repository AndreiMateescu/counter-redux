import React from "react";
import { connect, useDispatch } from "react-redux";
import { setCounter } from "../../redux/action";

const Header = (props) => {
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <div>{props.counter}</div>
            <button onClick={() => dispatch(setCounter(props.counter + 1))}>+</button>
        </React.Fragment>
    )
};

const unNume = (store) => {
    return {
        counter: store.counter
    };
};

export default connect(unNume)(Header);