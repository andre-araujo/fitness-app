
import { connect } from 'react-redux';

import {
    addFood
} from '../../../../actions';

function mapStateToProps(state) {
    return {
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addFood: (data) => {
            dispatch(addFood(data))
        }
    }
}

function container(component) {
    return connect(mapStateToProps, mapDispatchToProps)(component);
}

export default container;
