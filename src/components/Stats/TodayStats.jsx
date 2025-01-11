import React from 'react';
import { CircleProgress } from '../UI/CircleProgress';

const TodayStats = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Today's Progress</h3>
      <div className="flex justify-center">
        <CircleProgress percentage={75} />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-sm text-gray-500">Tasks</p>
          <p className="text-lg font-semibold">12/15</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Hours</p>
          <p className="text-lg font-semibold">6.5</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Meetings</p>
          <p className="text-lg font-semibold">3</p>
        </div>
      </div>
    </div>
  );
};
export default TodayStats;