import React from 'react'

const Events = () => {
  return (
    <div>
        <div className='text-[30px] text-white font-bold pb-10'>Event Details</div>
        <div className='flex flex-col space-y-5'>
            <div>
                <p className='text-white text-[18px]'>Event Name</p>
                <input type="text" className="w-[600px] h-[60px] bg-white/20 rounded-lg border border-[#D3D3D3]/10 placeholder:text-white/50 p-3" placeholder="Enter event name"></input>
            </div>

            <div>
                <p className='text-white text-[18px]'>Details</p>
                <input type="text" className="w-[600px] h-[60px] bg-white/20 rounded-lg border border-[#D3D3D3]/10 placeholder:text-white/50 p-3" placeholder="Enter event details"></input>
            </div>

            <div className='flex space-x-10'>
                <div>
                <p className='text-white text-[18px]'>Date</p>
                <input type="text" className="w-[400px] h-[250px] bg-white/20 rounded-lg border border-[#D3D3D3]/10 placeholder:text-white/50 p-3" placeholder="Enter event date"></input>

                </div>

                <div className='flex space-y-5 flex-col' >
                    <div>
                    <p className='text-white text-[18px]'>Start Time</p>
                <input type="text" className="w-[300px] h-[60px] bg-white/20 rounded-lg border border-[#D3D3D3]/10 placeholder:text-white/50 p-3" placeholder="Enter event start time"></input>
                    </div>
                    <div>
                    <p className='text-white text-[18px]'>End Time</p>
                <input type="text" className="w-[300px] h-[60px] bg-white/20 rounded-lg border border-[#D3D3D3]/10 placeholder:text-white/50 p-3" placeholder="Enter event end time"></input>
                    </div>
                </div>
            </div>

            <div>
            <p className='text-white text-[18px]'>Location</p>
                <input type="text" className="w-[400px] h-[60px] bg-white/20 rounded-lg border border-[#D3D3D3]/10 placeholder:text-white/50 p-3" placeholder="Enter event location"></input>
            </div>

            <div>
            <p className='text-white text-[18px]'>Seats</p>
                <input type="text" className="w-[400px] h-[60px] bg-white/20 rounded-lg border border-[#D3D3D3]/10 placeholder:text-white/50 p-3" placeholder="Enter event seats"></input>
            </div>

            <div>
            <p className='text-white text-[18px]'>Eligibility Criteria</p>
                <input type="text" className="w-[600px] h-[60px] bg-white/20 rounded-lg border border-[#D3D3D3]/10 placeholder:text-white/50 p-3" placeholder="Enter event Eligibility Criteria"></input>
            </div>

            <div>
            <p className='text-white text-[18px]'>Cost</p>
                <input type="text" className="w-[600px] h-[60px] bg-white/20 rounded-lg border border-[#D3D3D3]/10 placeholder:text-white/50 p-3" placeholder="Enter event cost"></input>
            </div>
        </div>
    </div>
  )
}

export default Events