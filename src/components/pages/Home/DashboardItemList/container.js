
import { connect } from 'react-redux';

import {
    getAllFoods
} from '../../../../actions';

function mapStateToProps(state) {
    return {
        foods: state.foods
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllFoods: (data) => {
            dispatch(getAllFoods(data))
        }
    }
}

function container(component) {
    return connect(mapStateToProps, mapDispatchToProps)(component);
}

export default container;
