import React, {Component} from 'react';
import './Offers.css';

export default class Offers extends Component {

    handleSubmit() {
        alert('Insurance policy ordered!')
        console.log(this.state);
    }

    render() {
        const list = localStorage.getItem('resList');
        const parsedList = JSON.parse(list);

        return (
            <form>
                <div className="sect1">
                    <h4>Please choose one of the offers for your car insurance</h4>
                </div>
                <div className="sect2">
                    <table style={{
                        border: '1.5px solid black'
                    }}>
                        <thead>
                        <tr>
                            <th> Plate number</th>
                            <th> Car make</th>
                            <th> Make year</th>
                            <th> Insurance sum</th>
                            <th> Deductible</th>
                            <th> Premium</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody style={{
                            backgroundColor: '#dadada',
                            borderRadius: '1px'
                        }}>
                        {parsedList.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    {item.plateNumber}
                                </td>
                                <td>
                                    {item.carMake}
                                </td>
                                <td>
                                    {item.makeYear}
                                </td>
                                <td>
                                    {item.insSum}
                                </td>
                                <td>
                                    {item.deductible}
                                </td>
                                <td>
                                    {item.premium}
                                </td>
                                <td>
                                    <button style={{minWidth: '150px'}}
                                            onClick={this.handleSubmit}>
                                        Buy policy
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </form>
        );
    }
}