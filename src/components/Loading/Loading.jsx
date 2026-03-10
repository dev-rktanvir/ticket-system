import React from "react";

const Loading = ({ text = "Loading..." }) => {
    return (
        <div className="flex flex-col items-center justify-center h-40">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-[#02A53B] rounded-full animate-spin"></div>
            <p className="mt-3 text-sm text-gray-500">{text}</p>
        </div>
    );
};

export default Loading;