import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  // Optional: see what data we got
  console.log("EmployeeDashboard data:", props.data);

  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      {/* Only render these if data exists */}
      {props.data ? (
        <>
          <TaskListNumber data={props.data} />
          <TaskList data={props.data} />
        </>
      ) : (
        <p className="text-white">Loading dashboard...</p>
      )}
    </div>
  );
};

export default EmployeeDashboard;