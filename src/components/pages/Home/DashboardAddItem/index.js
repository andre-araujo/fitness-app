import React, { Component } from 'react';

import container from './container';
import DashboardHeader from '../DashboardHeader';
import TextInput from '../../../common/TextInput';
import Submit from '../../../common/Submit';
import './styles.css';

class DashboardAddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            foodName: ''
        };
    }

    _addFood = (e) => {
        e.preventDefault();

        const foodName = this.state.foodName;

        if (foodName.length > 0) {
            this.props.addFood({
                title: foodName
            });

            this.setState({
                foodName: ''
            })
        }
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

                    <Submit text="Add" />
                </form>

                {
                    this.props.error &&
                    <div className="dashboard-add-item__error">
                        <i
                            className="fa fa-frown-o dashboard-add-item__icon"
                            aria-hidden="true"
                        />
                        <p className="dashboard-add-item__text">
                            We can not find the food you are looking for, 
                            if you are in another language, 
                            try to find it in English
                        </p>
                    </div>
                }
            </section>
        );
    }
}

export default container(DashboardAddItem);
