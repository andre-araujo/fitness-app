import React, { Component } from 'react';

import DashboardHeader from '../DashboardHeader';
import TextInput from '../../../common/TextInput';
import Radio from '../../../common/Radio';
import Submit from '../../../common/Submit';
import './styles.css';

class DashboardAddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            foodName: '',
            password: ''
        };
    }

    _addFood = (e) => {
        e.preventDefault();
    };

    _foodNameInputChange = (text) => {
        this.setState({
            foodName: text
        })
    }

    render() {
        return (
            <section>
                <DashboardHeader
                    title="Add food to daily menu"
                    icon="plus"
                />
                <form
                    name="dashboard-add-item__form"
                    className="dashboard-add-item__form"
                    onSubmit={this._addFood}>

                    <TextInput
                        label="Name:"
                        value={this.state.foodName}
                        onChangeText={this._foodNameInputChange}
                    />

                    <div className="dashboard-add-item__radio-group">
                        <Radio
                            id="morning-radio"
                            name="meal-time"
                            label="morning meal"
                        />
                        <Radio
                            id="afternoon-radio"
                            name="meal-time"
                            label="afternoon meal"
                        />
                        <Radio
                            id="night-radio"
                            name="meal-time"
                            label="night meal"
                        />
                    </div>

                    <Submit text="Add" />
                </form>
            </section>
        );
    }
}

export default DashboardAddItem;
