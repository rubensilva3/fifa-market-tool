import React, { Component } from 'react';
import Container from './style';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = { buyingPrice: '', sellingPrice: '', profit: 0 };

        this.handleChange = this.handleChange.bind(this);
        this.calculateProfit = this.calculateProfit.bind(this);
    }

    calculateProfit(event) {
        const { buyingPrice, sellingPrice } = this.state;

        event.preventDefault();

        const profit = sellingPrice * 0.95 - buyingPrice;

        this.setState({
            profit
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { buyingPrice, sellingPrice, profit } = this.state;

        return (
            <Container>
                <form onSubmit={this.calculateProfit}>
                    <label htmlFor="name">Insert your buying price:</label>
                    <input
                        type="number"
                        id="name"
                        name="buyingPrice"
                        autoComplete="off"
                        step="100"
                        value={buyingPrice}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="name">Insert your selling price:</label>
                    <input
                        type="number"
                        id="name"
                        name="sellingPrice"
                        autoComplete="off"
                        step="100"
                        value={sellingPrice}
                        onChange={this.handleChange}
                    />
                    <div>
                        <button type="submit">Calculate</button>
                        <p>Your profit is: {profit}</p>
                    </div>
                </form>
            </Container>
        );
    }
}

export default Main;
