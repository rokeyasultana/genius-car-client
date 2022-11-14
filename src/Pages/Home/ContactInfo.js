import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaAddressCard } from 'react-icons/fa';
const ContactInfo = () => {
    return (
        <div >
            <div className='bg-black text-white mt-20 mb-20 h-44 justify-items-center content-center justify-center  grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='flex gap-3'>
<div>
<FaCalendar color='red' size='50px' />
</div>
<div>
  <p> We are open monday-friday</p> 
  <h2 className='text-xl'>7:00am - 9:00pm</h2>
</div>
                </div>
                <div className='flex gap-3'>
<div>
<FaPhone color='red' size='50px' />
</div>
<div>
  <p> Have a question?</p> 
  <h2 className='text-xl'>+2588014 124</h2>
</div>
                </div>
                <div className='flex gap-3 '>
<div>
<FaAddressCard color='red' size='50px' />
</div>
<div>
  <p> Need a repair? Our address</p> 
  <h2 className='text-xl'>Liza Street, New York</h2>
</div>
                </div>

             
            </div>
        </div>
    );
};

export default ContactInfo;