// ExampleComponent.js
import React from 'react';
import { connect } from 'react-redux';
import { exampleAction } from './actions';

const ExampleComponent = ({ exampleData, dispatchExampleAction }) => {
    return (
        <div>
            <h1>Example Component</h1>
            {/* Display data from Redux store */}
            <p>{exampleData}</p>
            {/* Dispatch action to update Redux store */}
            <button onClick={() => dispatchExampleAction('newData')}>
                Update Data
            </button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    exampleData: state.example // Map state to component props
});

const mapDispatchToProps = (dispatch) => ({
    dispatchExampleAction: (data) => dispatch(exampleAction(data)) // Map dispatch to component props
});

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
