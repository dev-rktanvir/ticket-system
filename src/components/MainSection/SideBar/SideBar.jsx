import React from 'react';
import TaskStatus from '../TaskStatus/TaskStatus';
import ResolveStatus from '../ResolveStatus/ResolveStatus';

const SideBar = () => {
    return (
        <div className='flex flex-col gap-10 pb-5'>
            {/* Task Status */}
            <div>
                <TaskStatus></TaskStatus>
            </div>

            {/* Resolve Status */}
            <div>
                <ResolveStatus></ResolveStatus>
            </div>
        </div>
    );
};

export default SideBar;