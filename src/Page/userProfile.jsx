import React from 'react';
import Nav from '../Components/navBar'
import profileImage from '../assets/images/wtf.png';

const UserProfile = () => {
  return (
    <>
    <Nav /> 

    <div className="min-h-90vh bg-gray-100 p-8">
     
      {/* Profile Content */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Narisra - Group D - 67</h1>

        {/* Image Placeholder */}
        <div className="w-64 h-64 bg-gray-300 mx-auto mb-6 flex items-center justify-center">
        <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />

        </div>

        {/* Short Biography */}
        <h2 className="font-semibold mb-2">Introduction:</h2>
        <p className="max-w-xl mx-auto text-gray-600">
        Aspiring Web Developer and recent graduate from Generation Bootcamp with expertise
in Junior Software Development. Possess a strong foundation in coding, including CSS, HTML,
JavaScript, React and C++. Soft skills include problem-solving, teamwork,
and effective communication. With over 4 years of experience teaching mathematics,
I bring a unique perspective on effective communication and a passion for
continuous learning. Holding a Bachelor's degree in Production Engineering, I have a solid understanding of technical processes  and a keen eye for detail. Eager to join a dynamic software development team that values customer focus, achievement motivation, and teamwork.

        </p>
      </div>
    </div>
    </>
  );
};


export default UserProfile;
