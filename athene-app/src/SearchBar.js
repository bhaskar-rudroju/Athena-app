import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchItems: [],
            searchedItem: false,
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.getData(this.state.value);
        event.preventDefault();
        event.target.reset();
    }

    getData(searchName) {
        if (!localStorage.getItem('name').includes(searchName)) {
            let searchURL = "https://athena-7.herokuapp.com/ancients.json?search=" + searchName;
            fetch(searchURL)
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        searchedItem: true,
                        searchItems: json,
                    })
                });
        } else {
            this.setState({
                searchItems: JSON.parse(localStorage.getItem('data'))
            })
        }

        return this.searchItems;
    }

    render() {

        var { searchItems, searchedItem } = this.state;

        if (!searchedItem) {
            return <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" placeholder="Search by Name" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Search" />
                </form>
            </div>
        } else {
            return (
                < div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type="text" placeholder="Search by Name" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Search" />
                    </form>


                    <table className="table table-hover" border="1">
                        <thead>
                            <tr>
                                <th> Name </th>
                                <th> Super Power </th>
                                <th> Era </th>
                            </tr>
                        </thead>
                        <tbody>

                            {searchItems.ancients.map(item => (
                                localStorage.setItem("name", item.name),
                                localStorage.setItem("superpower", item.superpower),
                                localStorage.setItem("end_of_an_era", item.end_of_an_era),
                                localStorage.setItem("data", JSON.stringify(searchItems)),

                                <tr>
                                    <td key={item.name}>
                                        {item.name.toUpperCase()}
                                    </td>
                                    <td key={item.superpower}>
                                        {item.superpower.toUpperCase()}
                                    </td>
                                    <td key={item.end_of_an_era}>
                                        {item.end_of_an_era}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        }

    }
}

export default SearchBar;