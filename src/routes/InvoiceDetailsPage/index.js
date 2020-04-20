import React from 'react';
import {useParams} from 'react-router-dom'

import InvoiceDetails from '../../components/InvoiceDetails';
import { getFormattedDate } from '../../utils/DateUtils';

function InvoiceDetailsPage(props) {
    let params = useParams();
    var date = new Date(Date.now());
    var text = getFormattedDate(date);
    const order ={ orderId:params.orderId,userName:'Srikanth', phoneNumber:'9550678534', address:"Kurnool",items:[
        {name:"Carrot",quantity:2,price:"12"},{name:"Onion",quantity:4,price:"45"}
    ],totalPrice:440,date:text}
    return (
        <div>
            <InvoiceDetails orderDetails={order}/>
        </div>
    );
}

export default InvoiceDetailsPage;