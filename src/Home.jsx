import React, { useState } from 'react';
import User from './Components/user';
import Admin from './Components/admin';
import Nav from './Components/navBar';

const Home = () => {
  const [mockEmployees, setMockEmployees] = useState([
    {
      id: 0,
      name: "mock",
      lastname: 'mocklastname',
      position: "Manager"
    },
    {
      id: 1,
      name: "employee 1",
      lastname: "em",
      position: "Engineer"
    },
    {
      id: 2,
      name: "employee 2",
      lastname: "lord",
      position: "Designer"
    },
    {
      id: 3,
      name: "employee 3",
      lastname: "aaa",
      position: "Desigaaner"
    },
    {
      id: 4,
      name: "employee 4",
      lastname: "asdfweaa",
      position: "Desdfssigaaner"
    },
    {
      id: 5,
      name: "employee 5",
      lastname: "aa",
      position: "Daner"
    },
  ]);

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