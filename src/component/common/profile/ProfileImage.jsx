import React from 'react';
import image from '../../../assets/IMG_20240318_125724~2.jpg';

const ProfileImage = () => {
    return (
        <div>
            <figure className='h-40 w-44 mx-auto'>
                <img className='h-full w-full' src={image} alt="" />
            </figure>
            <h2 className='py-3 bg-sky-700 text-center'>MD RASEL MIA</h2>
        </div>
    );
};

export default ProfileImage;