import React from 'react';
import PERSON from '../Data/person';

function Profile() {

  const personMedia = PERSON.personMediaFiles.map(({photo, id}) => {
    return <div key={id} className=' h-20 rounded-lg overflow-hidden'>
    <img src={photo} alt="" srcset="" className='w-full h-full' />
  </div>;
  })
   
  return (
      <div>
      <img src={PERSON.profileImage} alt="" className='w-16 h-16 rounded-full' />
      <p className='font-bold text-lg mt-1'>{PERSON.personName}</p>
      <p className='font-bold text-xs mt-0.5'>{PERSON.job}</p>
      <p className='text-gray-700 text-xs mt-0.5'>{PERSON.email}</p>
      <div className="infor mt-4 flex justify-between">
        <div className="posts flex flex-col items-center text-gray-700 text-sm font-light">
          <p>{PERSON.posts}</p>
          <p>Posts</p>
        </div>
        <div className="followers flex flex-col items-center text-gray-700 text-sm font-light">
          <p>{PERSON.followers}</p>
          <p>Followers</p>
        </div>
        <div className="following flex flex-col items-center text-gray-700 text-sm font-light">
          <p>{PERSON.following}</p>
          <p>Following</p>
        </div>
      </div>
      <hr className='mt-4 h-0.5 bg-gray-400'/>
      <div className="media-section mt-4">
        <p className='font-bold text-sm'>Media Files</p>
        <div className="media-content grid grid-cols-3 gap-2 mt-4" >
          {personMedia}
        </div>
      </div>
    </div>
  )
}

export default Profile