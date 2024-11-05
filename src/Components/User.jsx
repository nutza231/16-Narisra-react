import React from 'react';


//เอาprops users มาแสดงผล
const UserSectorPage = ({ users }) => {
  return (
    <>
      <h2 className="text-lg font-bold mb-4">User List</h2>
      <table className="w-full bg-white border border-gray-300 rounded">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Last Name</th>
            <th className="p-2 text-left">Position</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-b">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.lastname}</td>
              <td className="p-2">{user.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserSectorPage;