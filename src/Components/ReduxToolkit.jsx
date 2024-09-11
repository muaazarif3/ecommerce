import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userData } from '../feature/useSlice';
import ProductList from './ProductList';

function ReduxToolkit() {

let {data , loading , error } = useSelector((state) => state.useSlice);


let dispatch = useDispatch();

useEffect(() => {
    dispatch(userData())
}  , [])

  return (
    <>
        <ProductList data={data} loading={loading}  error = {error} />
    </>
  )
}

export default ReduxToolkit