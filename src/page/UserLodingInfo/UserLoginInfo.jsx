import React, { useContext } from 'react';
import { UserContext } from '../../context/UserInfo';
import { DashboardContext } from '../../context/Dashboard';
import Navbar from '../../componenet/Navbar3/Navbar3';

const UserLoginInfo = () => {
    
    const { dash } = useContext(DashboardContext); // Consume the context
    console.log('dash', dash);

  return (
    <>
    <Navbar/>
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mt-7">
{dash.map((data)=>{
    return(
<div className="w-full lg:w-3/4 xl:w-2/3 mb-4">
          <div className="overflow-x-auto">
            <div className="min-w-full shadow-lg rounded-lg">
              <table className="min-w-full border border-gray-300 text-center text-sm font-light text-gray-700 dark:text-white dark:border-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                    Email
                    </th>
                    <th className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                      Password
                    </th>
                    <th className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                     Role
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                    <td className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                      {data.email}
                    </td>
                    <td className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                      {data.password}
                    </td>
                    <td className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                      {data.role}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

    )
})}

        
      </div>
    </>
  );
};

export default UserLoginInfo;
