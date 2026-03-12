import TaskAction from '../TaskAction/TaskAction';

const TaskStatus = ({progressTasks}) => {
    return (
        <div>
            <h2 className='font-semibold text-2xl text-[#34485A] mb-4'>Task Status</h2>
            {
                progressTasks.length === 0 ? 
                 <p className='text-base text-[#627382]'>Select a ticket to add to Task Status</p>
                 :
                 progressTasks.map(task => <TaskAction task={task}></TaskAction>)
            }
        </div>
    );
};

export default TaskStatus;