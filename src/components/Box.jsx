import React from 'react'
import { FaRegCircleQuestion } from "react-icons/fa6";
const Box = () => {
    return (
        <div className='flex justify-center items-center gap-10'>

            <div class="flex h-32 w-64 p-5 border-4 border-blue-900 flex-col items-start gap-4 rounded-md bg-#146EB4" style={{backgroundColor:"rgb(43, 43, 148)"}}>
                <div class="flex flex-col items-start h-154 p-5 gap-4 self-stretch rounded-md bg-primary-blue">
                    <div class="flex justify-between items-center self-stretch">
                        <p>Next payout</p>
                        <FaRegCircleQuestion />
                    </div>
                    <div class="flex justify-between items-center self-stretch">
                        <h2>23124 Ru.</h2>
                        <p>23 orders</p>
                    </div>
                </div>

            </div>

            {/* <div className='text-white'>
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
        </div> */}
            <div class="box-border h-32 w-64 p-4 border-4 ...">
            <div class="justify-between items-center self-stretch">
                        <p>Amount Pending</p>
                        <h2>92312.20</h2>
                    </div>
            </div>
            <div class="box-border h-32 w-64 p-4 border-4 ...">

            </div>
        </div>
    )
}

export default Box