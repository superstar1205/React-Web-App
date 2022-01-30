import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = () => {
  return(
      <div className='vh-100 d-flex justify-content-center align-items-center'>
          <ClipLoader color={'#7E18FA'} loading={true} size={100} />
      </div>
  )
}

export default Loader;
