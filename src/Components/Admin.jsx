import React, { useState, useEffect } from 'react';

const UserForm = ({ users: initialUsers, setUsers }) => {
  const [users, setLocalUsers] = useState(initialUsers);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    position: ''
  });

  
  // ใช้ useEffect เพื่ออัพเดท users เมื่อ initialUsers เปลี่ยนแปลง
  useEffect(() => {
    setLocalUsers(initialUsers);
  }, [initialUsers]);

  // ฟังก์ชันสำหรับจัดการการเปลี่ยนแปลงของ input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // ฟังก์ชันสำหรับบันทึกข้อมูลผู้ใช้ใหม่
  const handleSave = () => {
    const newUsers = [...users, formData];
    setLocalUsers(newUsers);
    setUsers(newUsers);
    setFormData({ name: '', lastName: '', position: '' });
  };

  // ฟังก์ชันสำหรับลบผู้ใช้
  const handleDelete = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setLocalUsers(newUsers);
    setUsers(newUsers);
  };

  return (
    <div className="p-8 min-h-screen">
      <h2 className="text-lg font-bold mb-4">Create User Here</h2>
      
      <div className="flex justify-center p-8">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded m-3"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded m-3"
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded m-3"
        />
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-500 text-white rounded m-3"
        >
          Save
        </button>
      </div>

      <h3 className="text-gray-500 mb-2">Table 1</h3>
      <table className="w-full bg-white border border-gray-300 rounded">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Last Name</th>
            <th className="p-2 text-left">Position</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.lastName}</td>
              <td className="p-2">{user.position}</td>
              <td className="p-2">
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserForm;