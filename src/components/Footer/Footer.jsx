import { connect } from "react-redux";

const Footer = (props) => {
    return <div>{props.counter}</div>
};

const test = (store) => {
    return {
        counter: store.counter
    };
};

export default connect(test)(Footer);