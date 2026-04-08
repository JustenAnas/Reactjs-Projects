import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext); // employees array

  if (!Array.isArray(userData)) return null;

  return (
    <div className="p-5 bg-[#1c1c1c] rounded mt-7 h-55">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium  w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className=" text-lg font-medium w-1/5 ">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 ">Completed</h5>
        <h5 className=" text-lg font-medium w-1/5 ">Failed Task</h5>
      </div>
      <div className="h-80% overflow-auto ">
        {userData.map((e, idx) => (
          <div
            key={idx}
            className="bg-red-300 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
          >
            <h2 className=" text-lg font-medium w-1/5 ">
              {e.name || e.firstName}
            </h2>
            <h3 className="text-lg font-medium w-1/5 text-blue-600">
              {e.taskCounts.active}
            </h3>
            <h5 className="text-lg font-medium w-1/5 text-yellow-300">
              {e.taskCounts.newTask}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-green-500">
              {e.taskCounts.completed}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-red-600">
              {e.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
