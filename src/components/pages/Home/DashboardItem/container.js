
import { connect } from 'react-redux';

import {
    removeFood
} from '../../../../actions';

function mapDispatchToProps(dispatch) {
    return {
        removeFood: (data) => {
            dispatch(removeFood(data))
        }
    }
}

function container(component) {
    return connect(null, mapDispatchToProps)(component);
}

export default container;
