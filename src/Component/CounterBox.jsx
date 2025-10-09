import React from "react";
import bgVector from "../assets/vector1.png";
import Container from "./Container";

const CounterBox = ({ inProgressCount, resolveCount }) => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <Container>
        {/* banner part here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         
         {/* Left er card counter */}
          <div className="relative bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl p-8 flex flex-col items-center justify-center overflow-hidden shadow-lg h-60">
            <img
              src={bgVector}
              alt="bgl"
              className="absolute top-0 left-0 w-1/2 h-full "
            />
            <img
              src={bgVector}
              alt="bgr"
              className="absolute top-0 right-0 w-1/2 h-full -scale-x-100 "
            />
            <h3 className="text-3xl font-medium mb-2.5 relative">
              In-Progress
            </h3>
            <p className="text-5xl font-bold relative">
              {inProgressCount}
            </p>
          </div>

          {/* Right er card counter*/}
          <div className="relative bg-gradient-to-r from-green-400 to-emerald-600 text-white rounded-xl p-8 flex flex-col items-center justify-center overflow-hidden shadow-lg h-60">
            <img
              src={bgVector}
              alt="bg-pattern"
              className="absolute top-0 left-0 w-1/2 h-full "
            />
            <img
              src={bgVector}
              alt="bg-pattern"
              className="absolute top-0 right-0 w-1/2 h-full -scale-x-100 "
            />
            <h3 className="text-3xl font-medium mb-2.5 relative z-10">Resolved</h3>
            <p className="text-5xl font-bold relative z-10">{resolveCount}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CounterBox;
