import React from 'react';
import {useHistory} from 'react-router-dom'

import { goToHomePage } from '../../utils/RouteUtils';

const ProductsPage = () => {
    const history = useHistory()
    return (
        <div>
            ProductsPage
            <button onClick = {()=>{goToHomePage(history)}}>Go to HomePage</button>
        </div>
    );
};

export default ProductsPage;