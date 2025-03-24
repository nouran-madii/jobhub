import React from 'react';
import './_NotFound.scss';

function NotFound() {
    return <>
        <div className='h-100 pt-3'>
            <p className="fw-bold text-center py-2 fs-1">404</p>
            <p className='fw-bold text-center fs-2'>Not Found</p>
            <p className='text-center fs-5'>This page doesn’t exist.</p>
        </div>
        </>
}

export default NotFound
