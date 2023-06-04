import Link from 'next/link'
import React from 'react'
import { BsPencilSquare } from 'react-icons/bs'

const ProductCart = () => {
    return (
        <Link className='transfrom overflow-hidden bg-whit duration-200 hover:scale-105' href='/product/1'>
            <img className='w-full' src="/product-1.webp" alt="" />
            <div>
                <h2 className="text-lg font-medium">Product name</h2>
                <div className='flex items-center text-black/[0.5]'>
                    <p className='mr-2 text-lg font-semibold' > $20.00</p>
                    <p className="text-base font-medium line-through">$25.00</p>
                    <p className='ml-auto text-base font-medium text-green-500'>20% off</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCart
