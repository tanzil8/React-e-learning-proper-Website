import React from 'react'
import header from './image/Header (1).png'
import rate from './image/Frame 55.png'
import img2 from './image/Group 22.png'
import img3 from './image/Group 23.png'
import img4 from './image/Group 17.png'
import img5 from './image/Group 106.png'
import img6 from './image/image 12.png'
import img7 from './image/Group 92.png'
import img8 from './image/Group 124.png'
import img9 from './image/Explore Course.png'
import img10 from './image/Group 40.png'
import img11 from './image/Group 47.png'
import img12 from './image/Group 48.png'
import img13 from './image/Group 49.png'
import './index.css'



const Header = () => {
  return (
   <>
   <img className='banner' src={header} alt=""/>

<div className='text-center mt-9 p-2' >
  <h1 className='font-bold text-3xl'>
    Our Success
  </h1>
  <div className='mt-3 text-sm p-2'>
  Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec <br /> nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. 
  </div>
</div>

<div className='mt-11 flex justify-center p-2'>
<img src={rate} alt="" width={900}/>
</div>

<div className='text-center mt-9 p-2'>
  <h1 className='font-bold text-3xl text-[#2F327D] mt-11'>
  All-In-One <span className='text-[#00CBB8]'>Cloud Software.</span> 
  </h1>
  <div className=' text-sm text-gray-800 mt-10 p-2'>
  TOTC is one powerful online software suite that combines all the tools <br />needed to run a successful school or office.

  </div>
</div>

<div className='flex justify-center gap-10  mt-12 text-center flex-wrap '>
<div className='w-60 h-56 bg-white rounded-md '>
  
 
<h1 className='font-semibold text-xl text-[#2F327D] mt-9 '>Online Billing,<br /> Invoicing, & Contracts</h1>
<p className='mt-3 text-sm p-2 text-gray-600'>
Simple and secure control of your <br /> organization’s financial and legal <br /> transactions. Send customized <br /> invoices and contracts
</p>
</div>
<div className='w-60 h-56 bg-white rounded-md '>
  
 
<h1 className='font-semibold text-xl text-[#2F327D] mt-9 '>Online Billing,<br /> Invoicing, & Contracts</h1>
<p className='mt-3 text-sm p-2 text-gray-600'>
Simple and secure control of your <br /> organization’s financial and legal <br /> transactions. Send customized <br /> invoices and contracts
</p>
</div>
<div className='w-60 h-56 bg-white rounded-md '>
  
 
<h1 className='font-semibold text-xl text-[#2F327D] mt-9 '>Online Billing,<br /> Invoicing, & Contracts</h1>
<p className='mt-3 text-sm p-2 text-gray-600'>
Simple and secure control of your <br /> organization’s financial and legal <br /> transactions. Send customized <br /> invoices and contracts
</p>
</div>



</div>


<div className='flex items-center justify-center flex-col mt-20 p-2'>
  <h1 className='font-bold text-3xl text-[#2F327D]  '>What is <span className='text-[#00CBB8]'>TOTC?</span> 
  </h1>
  <p className=' text-sm text-gray-800 mt-10  text-center p-5'>TOTC is a platform that allows educators to create online classes whereby they can <br /> store the course materials online; manage assignments, quizzes and exams; monitor <br /> due dates; grade results and provide students with feedback all in one place.</p>
  <div className='flex gap-14 mt-10 flex-wrap' >
    <div >
      <img className='w-80' src={img2} alt="" />
    </div>
    <div>
      <img className='w-80' src={img3} alt="" />
    </div>
  </div>
</div>

<div className='flex justify-center items-center gap-10 mt-20 flex-wrap p-2'>
  <div>
  <h1 className='font-bold text-xl text-[#2F327D]  '>Everything you can do in a physical <br /> classroom,  <span className='text-[#00CBB8]'>you can do with TOTC</span></h1>
  <p  className=' text-sm text-gray-700   mt-8 '>TOTC’s school management software helps traditional <br /> and online schools manage scheduling, attendance <br />, payments and virtual classrooms all in one secure cloud <br />-based system.</p>
  </div>
  <div>
    <img className='w-96' src={img4} alt="" />
  </div>
</div>

<div className='text-center mt-14'>
  <h1 className='font-bold text-2xl text-[#2F327D]  '>Our <span className='text-[#00CBB8]'> Features </span></h1>
  <p  className=' text-sm text-gray-700  mt-4 '>This very extraordinary feature, can make learning activities more efficient</p>
</div>


<div className='flex justify-center items-center gap-10 mt-20 flex-wrap p-2'>
<div>
    <img className='w-96' src={img5} alt="" />
  </div>
  <div>
  <h1 className='font-bold text-2xl text-[#2F327D]  '>A <span className='text-[#00CBB8]'>user interface</span>  designed <br /> for the classroom</h1>
  <p  className=' text-sm text-gray-700   mt-8 '>Teachers don’t get lost in the grid view <br /> and have a dedicated Podium space.
  </p>
  <p  className=' text-sm text-gray-700   mt-2 '>TA’s and presenters can be moved to <br /> the front of the class.
  </p>
  <p  className=' text-sm text-gray-700   mt-2 '>Teachers can easily see all students <br /> and class data at one time.</p>
  </div>
 
</div>


<div className='flex justify-center items-center gap-10 mt-20 flex-wrap p-2'>
  <div>
  <h1 className='font-bold text-2xl text-[#2F327D]  '><span className='text-[#00CBB8]'> Tools </span> For Teachers <br /> And Learners</h1>
  <p  className=' text-sm text-gray-700   mt-8 '>Class has a dynamic set of teaching tools built to <br /> be deployed and used during class.
  Teachers <br /> can handout assignments in real-time for students to  <br />complete and submit.</p>
  </div>
  <div>
    <img className='w-48' src={img6} alt="" />
  </div>
</div>

<div className='flex justify-center items-center gap-10 mt-20 flex-wrap p-2'>
<div>
    <img className='w-96' src={img7} alt="" />
  </div>
  <div>
  <h1 className='font-bold text-2xl text-[#2F327D]  '>Assessments, <br /> <span className='text-[#00CBB8]'> Quizzes, </span> Tests</h1>
  <p  className=' text-sm text-gray-700   mt-8 '>Easily launch live assignments, quizzes, and <br /> tests.
  Student results are automatically entered in <br /> the online gradebook.</p>
  </div>
 
</div>

<div className='flex justify-center items-center gap-10 mt-20 flex-wrap p-2'>
  <div>
  <h1 className='font-bold text-2xl text-[#2F327D]  '> <span className='text-[#00CBB8]'>Class Management </span><br /> Tools for Educators</h1>
  <p  className=' text-sm text-gray-700   mt-8 '>Class provides tools to help run and manage the class <br /> such as Class Roster, Attendance, and more. With the <br /> Gradebook, teachers can review and grade tests and <br /> quizzes in real-time.
  </p>
  </div>
  <div>
    <img className='w-96' src={img8} alt="" />
  </div>
</div>

<div className='flex justify-center items-center mt-10'>
<button className='w-36 h-12 border-2 border-[#57e0e2]  rounded-3xl text-sm text-[#57e0e2] '>
See more features
                </button>
                </div>

  
  <img className='object-cover mt-10' src={img9} alt=""  />

  <div className='text-center mt-16'>
    <h1 className='font-bold text-2xl text-[#2F327D] '>Lastest News and Resources</h1>
    <p  className=' text-sm text-gray-700  mt-2  '>See the developments that have occurred to TOTC in the world</p>
  </div>

  <div className='flex gap-20 justify-center mt-10 flex-wrap p-2'>
    <div>
      <img className='w-96' src={img10} alt="" />
      <h1  className='font-bold  text-[#2F327D]  mt-3'>Class adds $30 million to its balance <br /> sheet for  a Zoom-friendly edtech solution</h1>
      <p className=' text-sm text-gray-700  mt-2  '>Class, launched less than a year ago by Blackboard co- <br />rrrrrfounder Michael Chasen, integrates exclusively...</p>
    </div>
    <div className='flex flex-col gap-3 flex-wrap p-2'>
    <div>
      <img className='w-96' src={img11} alt="" />
    </div>
    <div>
      <img className='w-96' src={img12} alt="" />
    </div>
    <div>
      <img className='w-96' src={img13} alt="" />
    </div>
    </div>
  </div>
   </>
  
  )
}

export default Header