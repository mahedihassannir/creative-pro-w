import React, { useEffect, useState } from 'react';
import Single from '../single-data/Single';
import './fetc.css'
const Fetch = () => {
    let [api, setApi] = useState([])

    useEffect(() => {

        fetch('fake.json')
            .then(res => res.json())
            .then((data) => setApi(data))
    }, [])

    // let final=[mahedi,mm]-useState()

    // let btn1 = (single) => {
        
    // }



    return (
        <div>
            <div className='cmnn'>
                <div className='grid gap-5  grid-cols-3'>
                    {
                        api.slice(0, 6).map(res => <Single
                            key={res.id}
                            single={res}
                            // btn1={btn1}
                        ></Single>)
                    }
                </div>
                <div className='bg-green-500 h-20'>


                </div>
            </div>
        </div>
    );
};

export default Fetch;