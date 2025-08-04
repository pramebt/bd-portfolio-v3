import React, { useState } from 'react';

const Expblock = ({ icon, title, items }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (idx) => {
    setExpandedItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
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
        <div className="flex-1 w-0.5 timeline-dotted-blue" />
        <div className="flex-1 w-0.5 timeline-dotted-blue" />
      </div>
      {/* Cards */}
      <div className="flex flex-col gap-4 w-full">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            onClick={() => item.detail && toggleItem(idx)}
            className={`bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-5 sm:p-6 min-w-0 w-full max-w-full hover:shadow-xl transition-all duration-300 flex flex-col justify-center group relative overflow-hidden ${
              item.detail ? 'cursor-pointer' : ''
            }`}
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="text-gray-500 text-sm font-medium bg-gradient-to-r from-blue-100/50 to-purple-100/50 px-3 py-1 rounded-full border border-blue-200/30">{item.date}</div>
              {item.cardIcon && (
                <img src={item.cardIcon} alt="Company" className="w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </div>
            <div className="font-bold text-xl mb-2 text-gray-800 group-hover:text-gray-900 transition-colors duration-300 relative z-10">{item.org}</div>
            <div className="text-gray-600 leading-relaxed relative z-10">{item.position}</div>
            
            {item.detail && (
              <div className="mt-3 relative z-10">
                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${expandedItems[idx] ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-sm">{expandedItems[idx] ? 'Click to hide details' : 'Click to show details'}</span>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedItems[idx] 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 text-gray-800 leading-relaxed p-4 rounded-lg mt-2 border-l-4 border-blue-500">
                    {item.detail}
                  </div>
                </div>
              </div>
            )}
            
            {/* Decorative Elements */}
            <div className="absolute bottom-2 right-2 w-8 h-8 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full opacity-60"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Expblock;