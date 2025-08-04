import React from 'react';

const Edublock = ({ icon, title, items }) => (
  <div className="flex-1 flex flex-col">
    {/* Icon + Title (icon อยู่บน timeline) */}
    <div className="flex flex-row items-center mb-2">
      {/* Timeline + Icon */}
      <div className="flex flex-col items-center mr-4 w-10">
        <img src={icon} alt={title} className="w-9 h-9 mb-1" />
        <div className="flex-1 w-0.5 bg-gray-400" />
      </div>
      {/* Title */}
      <span className="font-bold text-2xl">{title}</span>
    </div>
    {/* Timeline + Card(s) */}
    <div className="flex flex-row items-stretch w-full mt-2">
      {/* Timeline */}
      <div className="flex flex-col items-center mr-6 w-6">
        <div className="flex-1 w-0.5 timeline-dotted-green" />
        <div className="flex-1 w-0.5 timeline-dotted-green" />
      </div>
      {/* Cards */}
      <div className="flex flex-col gap-4 w-full">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-5 sm:p-6 min-w-0 w-full max-w-full hover:shadow-xl transition-all duration-300 flex flex-col justify-center group relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100/20 to-teal-100/20 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="text-gray-500 text-sm font-medium bg-gradient-to-r from-green-100/50 to-teal-100/50 px-3 py-1 rounded-full border border-green-200/30">{item.date}</div>
              {item.cardIcon && (
                <img src={item.cardIcon} alt="University" className="w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </div>
            <div className="font-bold text-xl mb-2 text-gray-800 group-hover:text-gray-900 transition-colors duration-300 relative z-10">{item.org}</div>
            <div className="text-gray-600 leading-relaxed relative z-10">{item.position}</div>
            
            {/* Decorative Elements */}
            <div className="absolute bottom-2 right-2 w-8 h-8 bg-gradient-to-br from-green-200/30 to-teal-200/30 rounded-full opacity-60"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Edublock;
