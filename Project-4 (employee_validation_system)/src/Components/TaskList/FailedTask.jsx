 
const FailedTask = ({data}) => {
  return (
   <div className=" shrink-0 h-full w-75 p-5 bg-green-600 rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 px-3 text-sm py-1 rounded">{data.category}</h3>
                <h4 className="text-sm font-semibold">{data.taskDate}</h4>
            </div>
            <h2 className="mt-6 text-2xl font-semibold">{data.taskTitle}</h2>
            <p className="text-sm mt-4">{data.taskDescription}</p>
            <div className="mt-6">
                <button className='ml-15 w-[40%] bg-red-500'>Failed</button>
            </div>
        </div>
  )
}

export default FailedTask