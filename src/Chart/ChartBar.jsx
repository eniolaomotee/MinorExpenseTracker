import React from 'react'

const ChartBar =(props)=> {

   let  barFillHeight = '0%';

    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
    <div className='h-full flex flex-col items-center'>
        <div className='h-full w-full rounded-xl border border-[#313131] bg-[#c3b4f3] overflow-hidden flex flex-col justify-end'>
            <div className={`bg-[#4826b9] w-full`} style={{height: barFillHeight}}></div>
            </div>
            <div className='font-bold text-[0.5rem] text-center'>  {props.label}</div>
    </div>
  )
}

export default ChartBar;