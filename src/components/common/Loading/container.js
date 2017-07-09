
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        loading: state.loading
    }
}

function container(component) {
    return connect(mapStateToProps)(component);
}

export default container;
