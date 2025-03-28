import React, { useState } from 'react';
import './css/lrstyle.css';

const CreateLR = () => {
    const [formData, setFormData] = useState({
        lrDate: '',
        from: '',
        to: '',
        lorryNumber: '',
        driversContact: '',
        loadType: 'Full',
        consignor: '',
        consignee: '',
        freightPayableCompany: '',
        invoiceValue: 'inv',
        paymentMode: 'TBB',
        billingBranch: 'Kolhapur',
        collectionType: 'DC',
        deliveryType: 'DD',
        itemType: 'General',
        description: '',
        invoiceNumber: '',
        quantity: '',
        unit: 'Nos',
        rate: '',
        actualWeight: '',
        chargeableWeight: '',
        totalAmount: '',
        remarks: '',
        freight: '',
        surCharges: '',
        stasticalCharges: '',
        hamali: '',
        dcCharges: '',
        ddCharges: '',
        holting: '',
        other: '',
        total: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your submit logic here
    };

    const handleClear = () => {
        setFormData({
            lrDate: '',
            from: '',
            to: '',
            lorryNumber: '',
            driversContact: '',
            loadType: 'Full',
            consignor: '',
            consignee: '',
            freightPayableCompany: '',
            invoiceValue: 'inv',
            paymentMode: 'TBB',
            billingBranch: 'Kolhapur',
            collectionType: 'DC',
            deliveryType: 'DD',
            itemType: 'General',
            description: '',
            invoiceNumber: '',
            quantity: '',
            unit: 'Nos',
            rate: '',
            actualWeight: '',
            chargeableWeight: '',
            totalAmount: '',
            remarks: '',
            freight: '',
            surCharges: '',
            stasticalCharges: '',
            hamali: '',
            dcCharges: '',
            ddCharges: '',
            holting: '',
            other: '',
            total: ''
        });
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="lorry-receipt">
            <h2>Lorry Receipt</h2>
            <form className='receipt-items'onSubmit={handleSubmit}>
            <div className='form1'>
                    <label htmlFor="lrno">LR Details</label>
            <label htmlFor="lrno">LR Number</label>
            <input type="number" id="lrno" name="lrno" value={formData.lrDate} onChange={handleChange} required />
                <label htmlFor="lrDate">LR DATE :</label>
                <input type="date" id="lrDate" name="lrDate" value={formData.lrDate} onChange={handleChange} required />

                <label htmlFor="from">FROM :</label>
                <input type="text" id="from" name="from" placeholder="Enter Pick Up Point" value={formData.from} onChange={handleChange} /><br />

                <label htmlFor="to">TO :</label>
                <input type="text" id="to" name="to" placeholder="Enter Destination" value={formData.to} onChange={handleChange} /><br />
                </div>
             
                <div className="lorry-details">

                <label htmlFor="lorry-details">LORRY DETAILS:</label>
                <label htmlFor="lorryNumber">VEHICLE NUMBER :</label>
                <input type="text" id="lorryNumber" name="lorryNumber" placeholder="Enter Vehicle Number" value={formData.lorryNumber} onChange={handleChange} /><br />

                <label htmlFor="driversContact">DRIVERS CONTACT :</label>
                <input type="tel" id="driversContact" name="driversContact" placeholder="Enter Drivers Mobile No." value={formData.driversContact} onChange={handleChange} /><br />

                <label htmlFor="loadType">LOAD TYPE :</label>
                <select id="loadType" name="loadType" value={formData.loadType} onChange={handleChange}>
                    <option value="Full">Full Load</option>
                    <option value="Part">Part Load</option>
                    <option value="Special Vehicle">Special Vehicle</option>
                </select><br />
                </div>
                
                <div className="company-details">
                    
                <label htmlFor="company-details">COMPANY DETAILS</label>
                <label htmlFor="consignor">CONSIGNOR :</label>
                <input type="text" id="consignor" name="consignor" placeholder="Enter Consignor Name" value={formData.consignor} onChange={handleChange} /><br />

                <label htmlFor="consignee">CONSIGNEE :</label>
                <input type="text" id="consignee" name="consignee" placeholder="Enter Consigneex Name" value={formData.consignee} onChange={handleChange} /><br />

                <label htmlFor="freightPayableCompany">Freight Payable Company :</label>
                <input type="text" id="freightPayableCompany" name="freightPayableCompany" placeholder="Enter Freight Payable Company Name" value={formData.freightPayableCompany} onChange={handleChange} /><br />
                </div>

                <div className="freight-details">
                <label htmlFor="freight-details">FREIGHT DETAILS</label>
                <label htmlFor="invoiceValue">INVOICE VALUE :</label>
                <select id="invoiceValue" name="invoiceValue" value={formData.invoiceValue} onChange={handleChange}>
                    <option value="inv">As Per Invoice</option>
                    <option value="Paid">As Per Challan</option>
                </select>
                <input type="text" id="value" name="value" value={formData.value} onChange={handleChange} placeholder="Enter Value" /><br />

                <label htmlFor="paymentMode">PAYMENT MODE :</label>
                <select id="paymentMode" name="paymentMode" value={formData.paymentMode} onChange={handleChange}>
                    <option value="TBB">TBB</option>
                    <option value="Paid">Paid</option>
                    <option value="To Pay">To Pay</option>
                </select><br />

                <label htmlFor="billingBranch">BILLING BRANCH :</label>
                <select id="billingBranch" name="billingBranch" value={formData.billingBranch} onChange={handleChange}>
                    <option value="Kolhapur">Kolhapur</option>
                    <option value="Pune">Pune</option>
                    <option value="Dharwad">Dharwad</option>
                </select><br />

                <label htmlFor="collectionType">COLLECTION TYPE :</label>
                <select id="collectionType" name="collectionType" value={formData.collectionType} onChange={handleChange}>
                    <option value="DC">Direct Collection</option>
                    <option value="VC">Vehicle Collection</option>
                </select><br />

                <label htmlFor="deliveryType">DELIVERY TYPE :</label>
                <select id="deliveryType" name="deliveryType" value={formData.deliveryType} onChange={handleChange}>
                    <option value="DD">Direct DELIVERY</option>
                    <option value="VD">Vehicle DELIVERY</option>
                </select><br />
                </div>
                <div className="load-details">
                <label htmlFor="load-details">LOAD DETAILS</label>
                <label htmlFor="itemType">ITEM TYPE</label>
                <select id="itemType" name="itemType" value={formData.itemType} onChange={handleChange}>
                    <option value="General">General</option>
                    <option value="Box">Box</option>
                    <option value="Pallete">Pallete</option>
                </select><br />

                <label htmlFor="description">DESCRIPTION :</label>
                <input type="text" id="description" name="description" placeholder="Enter Description" value={formData.description} onChange={handleChange} /><br />

                <label htmlFor="invoiceNumber">INVOICE NUMBER :</label>
                <input type="text" id="invoiceNumber" name="invoiceNumber" value={formData.invoiceNumber} onChange={handleChange} /><br />

                <label htmlFor="quantity">QUANTITY :</label>
                <input type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} /><br />

                <label htmlFor="unit">UNIT :</label>
                <select id="unit" name="unit" value={formData.unit} onChange={handleChange}>
                    <option value="NOS">NOS</option>
                    <option value="UOM">UOM</option>
                    <option value="KGS">KGS</option>
                </select><br />

                <label htmlFor="rate">RATE :</label>
                <input type="text" id="rate" name="rate" value={formData.rate} onChange={handleChange} /><br />

                <label htmlFor="actualWeight">ACTUAL WEIGHT :</label>
                <input type="text" id="actualWeight" name="actualWeight" value={formData.actualWeight} onChange={handleChange} /><br />

                <label htmlFor="chargeableWeight">CHARGEBAL WEIGHT :</label>
                <input type="text" id="chargeableWeight" name="chargeableWeight" value={formData.chargeableWeight} onChange={handleChange} /><br />

                <input type="button" value="Add" onClick={handleSubmit} /><br />
                </div>

                <table className='tbl'>
                    <thead>
                        <tr>
                            <th>DESCRIPTION</th>
                            <th>INVOICE NUMBER</th>
                            <th>QUANTITY</th>
                            <th>UNIT</th>
                            <th>RATE</th>
                            <th>ACTUAL WEIGHT</th>
                            <th>CHARGEBAL WEIGHT</th>
                            <th>TOTAL AMOUNT</th>
                            <th>REMARKS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{formData.description}</td>
                            <td>{formData.invoiceNumber}</td>
                            <td>{formData.quantity}</td>
                            <td>{formData.unit}</td>
                            <td>{formData.rate}</td>
                            <td>{formData.actualWeight}</td>
                            <td>{formData.chargeableWeight}</td>
                            <td>{formData.totalAmount}</td>
                            <td>{formData.remarks}</td>
                        </tr>
                    </tbody>
                </table>
        <div className="amount-details">
            <label htmlFor="totalAmount">TOTAL AMOUNT IN FIGURES</label>
            <input type="text" id='amount' placeholder='Total amount' value={formData.totalAmount} onChange={handleChange} />
        </div>
                <div className="other-charges">
                    <label htmlFor="FREIGHT">FREIGHT</label>
                    <br/>
                    <label htmlFor="freight">Freight :</label>
                    <input type="text" id="freight" name="freight" value={formData.freight} onChange={handleChange} /><br />

                    <label htmlFor="surCharges">Sur Charges :</label>
                    <input type="text" id="surCharges" name="surCharges" value={formData.surCharges} onChange={handleChange} /><br />

                    <label htmlFor="stasticalCharges">Stastical Charges :</label>
                    <input type="text" id="stasticalCharges" name="stasticalCharges" value={formData.stasticalCharges} onChange={handleChange} /><br />

                    <label htmlFor="hamali">Hamali :</label>
                    <input type="text" id="hamali" name="hamali" value={formData.hamali} onChange={handleChange} /><br />

                    <label htmlFor="dcCharges">DC Charges :</label>
                    <input type="text" id="dcCharges" name="dcCharges" value={formData.dcCharges} onChange={handleChange} /><br />

                    <label htmlFor="ddCharges">DD Charges :</label>
                    <input type="text" id="ddCharges" name="ddCharges" value={formData.ddCharges} onChange={handleChange} /><br />

                    <label htmlFor="holting">Holting :</label>
                    <input type="text" id="holting" name="holting" value={formData.holting} onChange={handleChange} /><br />

                    <label htmlFor="other">Other :</label>
                    <input type="text" id="other" name="other" value={formData.other} onChange={handleChange} /><br />
                </div>

                <input type="text" placeholder="Enter Total" name="total" value={formData.total} onChange={handleChange} /><br />

                <div className="actions">
                    <input type="button" value="Clear" onClick={handleClear} />
                    <input type="button" value="Print" onClick={handlePrint} />
                </div>
            </form>
        </div>
    );
};

export default CreateLR;
