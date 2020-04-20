import React from 'react';

import InvoiceDetails from '../../components/InvoiceDetails';
import { getFormattedDate } from '../../utils/DateUtils';

function InvoiceDetailsPage(props) {
    
    var date = new Date(Date.now());
    var text = getFormattedDate(date);
    const order ={ orderId:'123456',userName:'Srikanth', phoneNumber:'9550678534', address:"Kurnool",items:[
        {name:"Carrot",quantity:2,price:"12"},{name:"Onion",quantity:4,price:"45"}
    ],totalPrice:440,date:text}
    return (
        <div>
            <InvoiceDetails orderDetails={order}/>
        </div>
    );
}

export default InvoiceDetailsPage;