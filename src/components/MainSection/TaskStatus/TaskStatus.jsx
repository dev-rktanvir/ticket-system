import React from 'react';
import TaskAction from '../TaskAction/TaskAction';

const TaskStatus = () => {
    return (
        <div>
            <h2 className='font-semibold text-2xl text-[#34485A] mb-4'>Task Status</h2>
            <TaskAction></TaskAction>
        </div>
    );
};

export default TaskStatus;