import React from 'react';
import ResolveAction from '../ResolveAction/ResolveAction';

const ResolveStatus = () => {
    return (
        <div>
            <h2 className='font-semibold text-2xl text-[#34485A] mb-4'>Resolved Task</h2>
            <ResolveAction></ResolveAction>
        </div>
    );
};

export default ResolveStatus;