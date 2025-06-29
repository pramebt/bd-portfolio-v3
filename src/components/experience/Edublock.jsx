import React from 'react';

const Edublock = ({ icon, title, items }) => (
  <div className="flex-1 flex flex-col">
    {/* Icon + Title (icon อยู่บน timeline) */}
    <div className="flex flex-row items-center mb-2">
      {/* Timeline + Icon */}
      <div className="flex flex-col items-center mr-4 w-10">
        <img src={icon} alt={title} className="w-8 h-8 mb-1" />
        <div className="flex-1 w-0.5 bg-gray-400" />
      </div>
      {/* Title */}
      <span className="font-bold text-2xl">{title}</span>
    </div>
    {/* Timeline + Card(s) */}
    <div className="flex flex-row items-stretch w-full mt-2">
      {/* Timeline */}
      <div className="flex flex-col items-center mr-6 w-6">
        <div className="flex-1 w-0.5 bg-gray-400" />
        <div className="flex-1 w-0.5 bg-gray-400" />
      </div>
      {/* Cards */}
      <div className="flex flex-col gap-4 w-full">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 min-w-0 w-full max-w-full shadow-sm flex flex-col justify-center">
            <div className="text-gray-400 mb-1">{item.date}</div>
            <div className="font-bold text-xl mb-1">{item.org}</div>
            <div className="text-gray-600">{item.position}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Edublock;
