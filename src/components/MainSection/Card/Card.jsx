import { IoCalendarClearOutline } from 'react-icons/io5';

const Card = ({ data, handleProgressTasks, handleShowAbleCards }) => {
    const { id, title, description, customer, priority, status, createdAt } = data;

    const handleClickedCard = (clickedCardData) => {
        handleShowAbleCards(clickedCardData);
        handleProgressTasks(clickedCardData);
    }
    return (
        <div onClick={() => handleClickedCard(data)} className='p-4 rounded-sm bg-white shadow-md cursor-pointer'>
            {/* Title & Button */}
            <div className='flex items-center justify-between'>
                <h3 className='font-medium text-lg text-black'>{title}</h3>
                <button className={` px-5 py-1 rounded-full font-medium text-base 
                    ${status === "Open" && "bg-[#B9F8CF] text-[#0B5E06]"}
                    ${status === "In Progress" && "bg-[#F8F3B9] text-[#9C7700]"}
                    `}>{status}</button>
            </div>

            {/* text */}
            <div>
                <p className='text-base text-[#627382] mt-2 mb-4'>{description}</p>
            </div>

            {/* Bottom Part */}
            <div className='flex items-center justify-between'>
                {/* Left side */}
                <div className='font-medium text-sm text-[#627382] flex flex-col lg:flex-row items-center gap-1 lg:gap-5'>
                    <p>#{id}</p>
                    <p
                        className={`${priority === "High Priority" && "text-[#F83044]"}
                        ${priority === "Medium Priority" && "text-[#FEBB0C]"}
                        ${priority === "Low Priority" && "text-[#02A53B]"}
                        `}>{priority}</p>
                </div>

                {/* Right side */}
                <div className='text-sm text-[#627382] flex flex-col lg:flex-row items-center gap-1 lg:gap-5'>
                    <p>{customer}</p>
                    <p className='flex items-center gap-2'>
                        <IoCalendarClearOutline size={20} />
                        {new Date(createdAt).toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;