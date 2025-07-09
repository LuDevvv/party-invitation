"use client";

import { invitationData } from "@/data/invitation-data";

export const DateTimeDisplay = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white border-4 border-green-600 rounded-2xl shadow-2xl overflow-hidden">
        {/* Day of Week Header */}
        <div className="bg-green-600 text-white text-center py-2 px-8">
          <span className="font-bold text-lg tracking-wide">
            {invitationData.event.day}
          </span>
        </div>

        {/* Date and Time Container */}
        <div className="p-6 bg-white">
          <div className="flex items-center justify-center gap-6">
            {/* Date */}
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-green-700 leading-none">
                {invitationData.event.date}
              </div>
              <div className="text-green-600 font-medium text-lg mt-1">
                {invitationData.event.month}
              </div>
            </div>

            {/* Separator */}
            <div className="text-green-600 text-4xl font-bold">|</div>

            {/* Time */}
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-green-700 leading-none">
                {invitationData.event.time}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
