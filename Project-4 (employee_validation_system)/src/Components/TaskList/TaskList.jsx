import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  if (!data || !Array.isArray(data.tasks)) return <p className="text-white">No tasks available</p>;

  return (
    <div
      id="tasklist"
      className="h-[57%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap mt-10 w-full py-5"
    >
      {data.tasks.map((e, idx) => {
        if (e.active) return <AcceptTask key={idx} data={e} />;
        if (e.newTask) return <NewTask key={idx} data={e} />;
        if (e.completed) return <CompleteTask key={idx} data={e} />;
        if (e.failed) return <FailedTask key={idx} data={e} />;
        return null;
      })}

      {/* Example static cards */}
      <div className="shrink-0 h-full w-75 p-5 bg-gray-600 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 text-sm py-1 rounded">High</h3>
          <h4 className="text-sm font-semibold">20 Feb 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a YouTube video</h2>
        <p className="text-sm mt-2">Task description goes here.</p>
      </div>
    </div>
  );
};

export default TaskList;