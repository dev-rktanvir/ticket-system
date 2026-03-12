import Cards from "./Cards/Cards";
import Loading from "../Loading/Loading";
import SideBar from "./Sidebar/Sidebar";
import { Suspense } from "react";

const supportPromiss = fetch('/support.json').then(res => res.json());
const MainSection = ({ progressTasks, handleProgressTasks }) => {

    return (
        <div className='container mx-auto px-3 flex flex-col-reverse lg:flex-row lg:gap-8'>
            {/* cards container */}
            <div className='flex-3'>
                <Suspense fallback={<Loading></Loading>}>
                    <Cards
                        supportPromiss={supportPromiss}
                        handleProgressTasks={handleProgressTasks}></Cards>
                </Suspense>
            </div>

            {/* side bar */}
            <div className='flex-1'>
                <SideBar progressTasks={progressTasks}></SideBar>
            </div>
        </div>
    );
};

export default MainSection;