const NewTask = ({data}) => {
  return (
    <>
      <div className=" shrink-0 h-full w-75 p-5 bg-red-800 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 text-sm py-1 rounded">{date.category}</h3>
          <h4 className="text-sm font-semibold">{ date.taskDate}</h4>
        </div>
        <h2 className="mt-6 text-2xl font-semibold">{date.taskTitle}</h2>
        <p className="text-sm mt-4">{ date.taskDescription}</p>
        <div className="mt-6">
          <button className="ml-15 w-[40%] bg-blue-500">Accept Task</button>
        </div>
      </div>
    </>
  );
};

export default NewTask;
