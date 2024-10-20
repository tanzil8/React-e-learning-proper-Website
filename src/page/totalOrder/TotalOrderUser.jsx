import React, { useContext } from 'react';
import { UserContext } from '../../context/UserInfo';
import Navbar from '../../componenet/Navbar3/Navbar3';

const TotalOrderUser = () => {
  const { UserInfo } = useContext(UserContext);
  console.log('UserInfo', UserInfo);

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mt-7">
      {UserInfo.map((data) => (
        <div key={data.PhoneNum} className="w-full lg:w-3/4 xl:w-2/3 mb-4">
          <div className="overflow-x-auto">
            <div className="min-w-full shadow-lg rounded-lg">
              <table className="min-w-full border border-gray-300 text-center text-sm font-light text-gray-700 dark:text-white dark:border-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                      Full Name
                    </th>
                    <th className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                      Phone Num
                    </th>
                    <th className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                      Building / House No
                    </th>
                    <th className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                      Colony
                    </th>
                    <th className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                      City
                    </th>
                    <th className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                      Area
                    </th>
                    <th className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
                    <td className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                      {data.Namee}
                    </td>
                    <td className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                      {data.PhoneNum}
                    </td>
                    <td className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                      {data.Building}
                    </td>
                    <td className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                      {data.Colony}
                    </td>
                    <td className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                      {data.City}
                    </td>
                    <td className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                      {data.Area}
                    </td>
                    <td className="px-6 py-4 border border-gray-300 dark:border-gray-700">
                      {data.Address}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default TotalOrderUser;
