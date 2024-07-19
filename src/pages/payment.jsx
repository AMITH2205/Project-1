import React, { useState } from 'react';
import Layout from '../layout/Layout';

function Payment() {
    const [member, setMember] = useState('');
    const [paymentDate, setPaymentDate] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Member:', member);
        console.log('Payment Date:', paymentDate);
        console.log('Amount:', amount);
        // Reset form fields
        setMember('');
        setPaymentDate('');
        setAmount('');
    };

    return (
        <Layout>
            <div className="container-fluid">
                <h2 className="mt-4">Payment Page</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row mt-4">
                        <div className="col-sm-6">
                            <label htmlFor="member" className="form-label">Member</label>
                            <input type="text" className="form-control" id="member" value={member} onChange={(e) => setMember(e.target.value)} required />
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="paymentDate" className="form-label">Payment Date</label>
                            <input type="date" className="form-control" id="paymentDate" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm-6">
                            <label htmlFor="amount" className="form-label">Amount</label>
                            <input type="number" className="form-control" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary me-3">Submit</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default Payment;
