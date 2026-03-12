import React, { use, useState } from 'react';
import Card from '../Card/Card';


const Cards = ({ supportPromiss, handleProgressTasks }) => {
    const cardsData = use(supportPromiss);

    const [showAbleCards, setShowAbleCards] = useState(cardsData);
    const handleShowAbleCards = (hideCard) => {
        const remainingCards = showAbleCards.filter(c => c.id !== hideCard.id);
        setShowAbleCards(remainingCards);
    }
    return (
        <div className='pb-10 lg:pb-20'>
            <h2 className='font-semibold text-2xl text-[#34485A] mb-4'>Customer Tickets</h2>

            {/* Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 xl:gap-x-6 gap-y-4'>
                {
                    showAbleCards.map(data => <Card
                        key={data.id}
                        handleProgressTasks={handleProgressTasks}
                        handleShowAbleCards={handleShowAbleCards}
                        data={data}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;