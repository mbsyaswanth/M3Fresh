import React from 'react';
import {useHistory} from 'react-router-dom'

import { goToDeliveryDetailsPage } from '../../utils/RouteUtils';


const HomePage = () => {
    const history = useHistory()
    return (
        <div>
            HomePage
            <button onClick={()=>{
                goToDeliveryDetailsPage(history)
            }}>GO to fill details</button>
        </div>
    );
};

export default HomePage;