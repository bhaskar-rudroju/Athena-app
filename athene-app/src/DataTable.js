import React, { Component } from 'react';

class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            search: '',
        };
    }

    componentDidMount() {
        fetch('https://athena-7.herokuapp.com/ancients.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div className="container"> Loading ....</div>
        } else {
            return (
                <div className="container">
                    <table className="table table-hover" border="1">
                        <thead>
                            <tr>
                                <th> Name </th>
                                <th> Super Power </th>
                                <th> Era </th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item.name}>
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
                </div >
            )
        }
    }
}

export default DataTable;