import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ResolveCard = ({ resolve, handleRemove }) => {
  return (
    <div className="space-y-3 mb-6 ">
      {resolve.length === 0 ? (
        <p className="text-lg text-[#627382]">No resolved tasks yet.</p>
      ) : (
        resolve.map((r) => (
          <div className="rounded-xl shadow bg-green-50 hover:bg-green-100">
            <div
              key={r.id}
              className="border border-gray-200 rounded-xl p-3 flex flex-col gap-4"
            >
              <p className=" text-[#001931] font-bold ">{r.title}</p>
              <div className="flex justify-between">
                <div className="flex gap-1 items-center justify-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-600 text-xl"
                  />

                  <p className="text-green-500 font-bold">Completed</p>
                </div>
                <button
                  onClick={() => handleRemove(r)}
                  className="font-semibold text-gray-500 hover:text-red-500"
                >
                  Click to removed
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ResolveCard;
