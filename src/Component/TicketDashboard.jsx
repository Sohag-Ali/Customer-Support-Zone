import React, { use, useState } from "react";
import Container from "./Container";
import CounterBox from "./CounterBox";
import { toast } from "react-toastify";

import TicketCard from "./TicketCard";
import TaskCard from "./TaskCard";
import ResolveCard from "./ResolveCard";

const TicketDashboard = ({ fetchPromise }) => {
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);
  console.log(setData);
  const [tasks, setTasks] = useState([]);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolveCount, setresolveCount] = useState(0);
  const [resolve, setresolve] = useState([]);

//   card clicke kore task status e show and in progress increase kora hosse
  const handleCardClick = (ticket) => {
    // check if it's already in the task list
    const alreadyExists = tasks.find((t) => t.id === ticket.id);
    if (alreadyExists){
        toast("Sorry 😢. Card Already In Progress !")
return;
    } 

    setTasks([...tasks, ticket]);
    toast("Card In Progress 😊");

    setInProgressCount(inProgressCount + 1);
  };

//   ei function e task status thke card comple kore remove and inprogress thke decrease and resolve e increase hosse
  const handleComplete = (ticket) => {
    // remove from task list
    setresolve([...resolve, ticket]);
    setTasks((prev) => prev.filter((t) => t.id !== ticket.id));
    toast("Completed In Progress 😀");

    setInProgressCount((prev) => (prev > 0 ? prev - 1 : 0));

    setresolveCount(resolveCount + 1);
  };

//   ai khne ei function er maddome resolved status thke card remove kora hosse nah resolved count thke decrease kora hosse
  const handleRemove = (ticket) => {
    setresolve((prev) => prev.filter((t) => t.id !== ticket.id));
    setresolveCount((prev) => (prev > 0 ? prev - 1 : 0));
    toast("Resolved Card Reomoved ☺️");
  };

  return (
    <div>
      <CounterBox
        inProgressCount={inProgressCount}
        resolveCount={resolveCount}
        resolved={0}
      />

      <section className="bg-[#F5F5F5] py-10 px-6">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Customer ticket section */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Customer Tickets
              </h2>

              <TicketCard
                handleCardClick={handleCardClick}
                data={data}
              ></TicketCard>
            </div>

            {/*Task Status er part */}
            <div className=" p-5 h-fit flex flex-col gap-7">
              <div className="bg-white p-4 rounded-xl">
                <h3 className="text-2xl font-semibold text-[#34485A] mb-3">
                Task Status
              </h3>

              <TaskCard
                handleComplete={handleComplete}
                tasks={tasks}
              ></TaskCard>
              </div>

                {/* Resolve er part ei khne thke card show kora hosse */}
              <div className="bg-white p-4 rounded-xl">
                <h3 className="text-2xl font-semibold text-[#34485A] mb-3">
                Resolved Task
              </h3>
              <ResolveCard
                handleRemove={handleRemove}
                resolve={resolve}
              ></ResolveCard>
              </div>

            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default TicketDashboard;
