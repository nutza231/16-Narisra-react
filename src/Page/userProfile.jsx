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
        <h1 className="text-3xl font-bold mb-4">พาทิศ สุดสัตย์ - JSD 5</h1>

        {/* Image Placeholder */}
        <div className="w-64 h-64 bg-gray-300 mx-auto mb-6 flex items-center justify-center">
        <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />

        </div>

        {/* Short Biography */}
        <h2 className="font-semibold mb-2">Short Biography:</h2>
        <p className="max-w-xl mx-auto text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    </>
  );
};


export default UserProfile;
