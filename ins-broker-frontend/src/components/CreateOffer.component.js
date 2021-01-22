import React, {Component} from 'react';
import './CreateOffer.css';

export default class CreateOffer extends Component {

    constructor() {
        super();
        this.state = {
            plateNumber: '',
            docNumber: '',
            carPrice: 10,
            phoneNr: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        this.state.plateNumber = data.get('plateNumber');
        this.state.docNumber = data.get('docNumber');
        this.state.carPrice = data.get('carPrice');
        this.state.phoneNr = data.get('phoneNr');
        this.state.email = data.get('email');
        console.log(this.state);

        fetch('/newoffer', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
            .then((response) => response.json())
            .then((response) => {
                const ilist = response.offersList;
                localStorage.setItem('resList', JSON.stringify(ilist));
                this.props.history.push("/offers");
            })
            .catch(e => {
                console.log('new offer post request error!')
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form1">
                <div className="sect1">
                    <h3>Please fill this form to receive best offers for your car insurance</h3>
                </div>
                <div className="sect2">
                    <table style={{
                        border: '1.5px solid black'
                    }}>
                        <thead className="tabhead">
                        <tr>
                            <th> Enter plate number</th>
                            <th> Enter document number</th>
                            <th> Enter car price</th>
                            <th> Enter your phone number</th>
                            <th> Enter your e-mail address</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody style={{
                            backgroundColor: '#dadada',
                            borderRadius: '1px'
                        }}>
                        <tr>
                            <td>
                                <input id="plateNumber" name="plateNumber" type="text"/>
                            </td>
                            <td>
                                <input id="docNumber" name="docNumber" type="text"/>
                            </td>
                            <td>
                                <input id="carPrice" name="carPrice" type="number"/>
                            </td>
                            <td>
                                <input id="phoneNr" name="phoneNr" type="text"/>
                            </td>
                            <td>
                                <input id="email" name="email" type="text"/>
                            </td>
                            <td>
                                <button>Request insurance offers</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="sect3">
                    <h5>Beebeeinsurance is an independent professional within many years of experience in insurance
                        indistry.
                        It is helping customers to find best solution and get best advise buying insurance policy or
                        having insurance case.</h5>
                </div>
            </form>
        );
    }
}
