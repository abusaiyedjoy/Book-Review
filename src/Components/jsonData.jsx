import React, { useEffect, useState } from 'react';

const jsonData = () => {
    const [data, setData]= useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true)
            const res = await fetch('/Books.json')
            const details = await res.json()
            setData(details)
            setLoading(false)
        };
        fetchData()
    },[]);
    return {data, loading};
};

export default jsonData;