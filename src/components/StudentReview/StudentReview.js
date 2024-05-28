import React from 'react'



function StudentReview({reviewImg, reviewImg2, reviewImg3, reviewTxt, reviewDes}) {
  return (
    <>
         <h2 className="text-center text-[40px] font-bold py-5">Students Review</h2>
        <div className='grid wide:grid-cols-3 gap-[30px]'>
            <div className='bg-[#1F1F1F] w-[100%] h-[50vh] py-[20px] px-[15px] rounded-[10px]'>
               
                    <img src={reviewImg} alt='reviewimg' className='h-[42vh] rounded-[6px]'/>
     
            </div>
            <div className='bg-[#1F1F1F] w-[100%] h-[50vh] py-[20px] px-[15px] rounded-[10px]'>
               
                <img src={reviewImg2} alt='reviewimg' className='h-[42vh] rounded-[6px]'/>
     
            </div>
            <div className='bg-[#1F1F1F] w-[100%] h-[50vh] py-[20px] px-[15px] rounded-[10px]'>
               
                    <img src={reviewImg3} alt='reviewimg' className='h-[42vh] rounded-[6px]'/>
     
            </div>
           
        </div>
    </>
  )
}

export default StudentReview