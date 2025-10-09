import React from "react";

const TaskCard = ({ tasks, handleComplete }) => {
  return (
    <div className="space-y-3 mb-6 ">
      {tasks.length === 0 ? (
        <p className="text-lg text-[#627382]">
          Click a ticket to add to task list.
        </p>
      ) : (
        tasks.map((task) => (
          <div className="rounded-lg shadow bg-[#f5f5f5] hover:bg-amber-50">
            <div
              key={task.id}
              className="border border-gray-100 rounded p-3 flex flex-col gap-4"
            >
              <p className=" text-[#001931] font-bold ">{task.title}</p>
              <button
                onClick={() => handleComplete(task)}
                className="bg-green-500 text-white px-3 py-1.5 rounded  hover:bg-green-600 transition"
              >
                Complete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskCard;
