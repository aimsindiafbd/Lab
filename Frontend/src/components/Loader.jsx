import React, { useEffect } from 'react'
import Loading from '../assets/loading.gif'
import { useLocation } from 'react-router-dom'
const Loader = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])
    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-100 z-50">
                <img src={Loading} className='w-full max-w-20' alt="" />
                <div>
                    <p>Loading..</p>
                </div>
            </div>
        </div>
    )
}

export default Loader