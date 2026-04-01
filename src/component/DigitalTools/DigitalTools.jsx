import React, { useState } from 'react';

const DigitalTools = () => {
    const [selectId,setSelectId] =useState(1)
    const cardLength = 2;

    const buttonList=[
        {
            id:1,
            name: "Products"
        },
        {
            id:2,
            name: `Cart(${cardLength})`
        }
    ]

    return (
        <div className='w-9/12 mx-auto mt-30'>
            <div className='text-center flex flex-col justify-center items-center space-y-4'>
                <h2 className='font-extrabold text-5xl text-[#101727]'>Premium Digital Tools</h2>
                <p className='text-[#627382] text-base/[20px]'>Choose from our curated collection of premium digital products designed 
                <br />
                to boost your productivity and creativity.</p>
                <div className='flex px-1 justify-center items-center gap-3 w-max border-2 border-[#f6f6f6] rounded-full'>

                    {
                       buttonList.map(list=> <button
                       onClick={()=>{
                        setSelectId(list.id)
                       }}
                        
                        key={list.id}

                    
                    className={`px-6 py-3.5 ${list.id === selectId && ' bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white' } `} >{list.name}</button>) 
                    }


                </div>
            </div>
            <div></div>
            
        </div>
    );
};

export default DigitalTools;