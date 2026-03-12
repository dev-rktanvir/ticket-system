import React from 'react';
import StatusCard from '../../StatusCard/StatusCard';

const Hero = ({ progressTasks }) => {
    return (
        <div className='container mx-auto px-3 py-20 grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <StatusCard
                title="In-Progress"
                bgClr="bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
                progressTasks={progressTasks}
            >

            </StatusCard>
            <StatusCard
                title="Resolved"
                bgClr="bg-linear-to-r from-[#54CF68] to-[#00827A]"
            >
            </StatusCard>
        </div>
    );
};

export default Hero;