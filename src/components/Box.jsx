import React from 'react'

const Box = () => {
  return (
    <div className='flex justify-center items-center gap-10'>

    <div className="box-border h-32 w-64 p-4 border-4 ... bg-blue-900">
        <div className='text-white'>
            <p>Next payout</p>
            <div className='flex gap-10'>
                <div>
                <h2>32789 ru.</h2>
                </div>
                <div>
                    <p>23 orders</p>
                </div>
            </div>
            <div className='flex gap-10'>
                <div>
                <h2>Not payble date</h2>
                </div>
                <div>
                    <p>Totally available</p>
                </div>
            </div>
        </div>
    </div>
    <div class="box-border h-32 w-64 p-4 border-4 ...">
       
       </div>
       <div class="box-border h-32 w-64 p-4 border-4 ...">
       
       </div>
    </div>
  )
}

export default Box