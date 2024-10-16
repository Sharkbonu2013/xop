import React from 'react';

const Salary = () => {
  return (
    <div className="p-6">
      {/* Employee Info Section */}
      <div className='flex gap-5'>
        <div className="card shadow-lg bg-base-100 mb-6 p-6 min-w-[35%]">
          <h2 className="text-2xl font-bold mb-4">Mirzaaliyev Bekzod</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="font-medium">O'quvchilar soni:</span>
            </div>
            <div>
              <span>73</span>
            </div>
            <div>
              <span className="font-medium">Guruhlar soni:</span>
            </div>
            <div>
              <span>12</span>
            </div>
            <div>
              <span className="font-medium">Grade:</span>
            </div>
            <div>
              <span>Senior</span>
            </div>
          </div>
        </div>

        {/* Groups Section */}
        <div className="card shadow-lg bg-base-100 mb-6 p-6 flex-1">
          <h3 className="text-xl font-semibold mb-4">Groups (darajasi)</h3>
          <ul className="divide-y divide-gray-200">
            {[
              { group: 'FRONT-826', salary: '1,510,167 so\'m' },
              { group: 'FRONT-908', salary: '1,012,915 so\'m' },
              { group: 'FRONT-926', salary: '1,878,503 so\'m' },
              { group: 'INPR-961', salary: '1,795,000 so\'m' },
              { group: 'FRONT-998', salary: '2,136,337 so\'m' },
              { group: 'FRONT-1012', salary: '1,473,336 so\'m' },
              { group: 'FRONT-1010', salary: '1,399,665 so\'m' },
              { group: 'INPR-1021', salary: '1,795,000 so\'m' },
              { group: '1063', salary: '1,326,000 so\'m' },
              { group: '1087', salary: '847,169 so\'m' },
              { group: 'INPR-1641', salary: '1,645,417 so\'m' },
              { group: 'F2-1703', salary: '662,998 so\'m' },
            ].map((item, index) => (
              <li key={index} className="flex justify-between py-2">
                {item.group} <span className="font-bold">{item.salary}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Total Salary Section */}
      <div className="card shadow-lg bg-base-100 p-6">
        <h3 className="text-xl font-semibold mb-2">Jami summa</h3>
        <span className="text-2xl font-bold text-green-600">17,482,507 so'm</span>
      </div>
    </div>
  );
};

export default Salary;
