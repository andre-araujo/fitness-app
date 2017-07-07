
import { connect } from 'react-redux';

import {
    addFood
} from '../../../../actions';

function mapDispatchToProps(dispatch) {
    return {
        addFood: (data) => {
            dispatch(addFood(data))
        }
    }
}

function container(component) {
    return connect(null, mapDispatchToProps)(component);
}

export default container;
