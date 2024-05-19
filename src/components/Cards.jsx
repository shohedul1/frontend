import React from 'react'

const Cards = ({ item }) => {
    return (
        <>
            <div className='mt-4 my-3 p-3'>
            
                <div className="card w-93 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:border dark:text-white">
                    <figure><img src={item.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">{item.price}</div>
                            <div className="px-2 py-1 border rounded-full hover:bg-pink-600 cursor-pointer hover:text-white duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>
            
            </div>
        </>
    )
}

export default Cards