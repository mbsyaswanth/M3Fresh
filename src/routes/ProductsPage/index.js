<<<<<<< Updated upstream
import React from "react";
import { useHistory } from "react-router-dom";

import { goToHomePage } from "../../utils/RouteUtils";
import Products from "../../components/Products";

const ProductsPage = () => {
  const history = useHistory();
  return <Products />;
=======
import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'

import Input from '../../components/Input'

const ProductsPage = () => {
    const history = useHistory()
    const [filtertext, setFilterText] = useState('')
    const l=['srikanth','yashwanth','jagadish']
    const showFilterItems=()=>{
        return l.filter(i => i.includes(filtertext)) 
    }
    return (
        <div>
           <Input value={filtertext} onChange={(e)=> setFilterText(e.target.value)} placeholder={'Search...'}/>
           {showFilterItems()}
        </div>
    );
>>>>>>> Stashed changes
};

export default ProductsPage;
