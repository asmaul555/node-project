import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import Axios from 'axios'

import allProducts from './redux/action/allproduct';
const ProductListin = () => {
    // const products=useSelector((state)=>state)
    const dispatch=useDispatch()
    const fetchProduct=async ()=>{
            const response= await Axios.get('https://fakestoreapi.com/products').catch(err=>console.log(err))
            dispatch(allProducts(response))
        console.log("data",response)
    }
    useEffect(() => {
        fetchProduct()
    }, []);
     
    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    );
}

export default ProductListin;
