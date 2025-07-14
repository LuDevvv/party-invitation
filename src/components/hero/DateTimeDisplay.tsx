"use client";

import { invitationData } from "@/data/invitation-data";

export const DateTimeDisplay = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white/95 backdrop-blur-sm border-4 border-green-600 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
        {/* Date and Time Container */}
        <div className="p-6 bg-white/95 relative">
          <div className="relative flex items-center justify-center gap-6">
            {/* Date */}
            <div className="text-center group">
              <div className="text-6xl md:text-7xl font-bold text-green-700 leading-none drop-shadow-sm group-hover:text-green-800 transition-colors duration-300">
                {invitationData.event.date}
              </div>
              <div className="text-green-600 font-medium text-lg mt-1 uppercase tracking-wide">
                {invitationData.event.month}
              </div>
            </div>

            {/* Separator with Safari Icon */}
            <div className="flex flex-col items-center">
              <div className="text-green-600 text-4xl font-bold">|</div>
            </div>

            {/* Time */}
            <div className="text-center group">
              <div className="text-6xl md:text-7xl font-bold text-green-700 leading-none drop-shadow-sm group-hover:text-green-800 transition-colors duration-300">
                {invitationData.event.time}
              </div>
              <div className="text-green-600 font-medium text-sm mt-1 uppercase tracking-wide">
                {invitationData.event.day}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
