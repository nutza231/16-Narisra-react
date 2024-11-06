import React, { useState } from 'react';
import User from './Components/user';
import Admin from './Components/admin';
import Nav from './Components/navBar';

const Home = () => {
  const [mockEmployees, setMockEmployees] = useState([]);

  const [selectedSector, setSelectedSector] = useState(''); 

  return (
    <div className="min-h-screen max-h-screen overflow-y-auto">
      <Nav/>  

      {/* เนื้อหาหลัก */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Generation Thailand</h1>
          <h2 className="text-3xl font-bold">Home - User Sector</h2>
        </div>

        {/* ปุ่มเลือก Sector */}
        <div className="flex justify-center space-x-8 mb-12">
          <button 
            className={`px-6 py-3 rounded-md shadow-md transition-shadow duration-200 ease-in-out ${selectedSector === 'user' ? 'bg-blue-500 text-white' : 'bg-white'}`}
            onClick={() => setSelectedSector('user')}
          >
            User Home Sector
          </button>
          
          <button 
            className={`px-6 py-3 rounded-md shadow-md transition-shadow duration-200 ease-in-out ${selectedSector === 'admin' ? 'bg-blue-500 text-white' : 'bg-white'}`}
            onClick={() => setSelectedSector('admin')}
          >
            Admin Home Sector
          </button>
        </div>

        {/* แสดง component ตามค่าที่เลือก */}
        <div>
          {selectedSector === 'user' && <User users={mockEmployees} />}
          {selectedSector === 'admin' && <Admin users={mockEmployees} setUsers={setMockEmployees} />}
        </div>
      </main>
    </div>
  );
};

export default Home;