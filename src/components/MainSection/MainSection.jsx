import { Suspense } from "react";
import Cards from "./Cards/Cards";
import Loading from "../Loading/Loading";
import SideBar from "./Sidebar/Sidebar";

const supportPromiss = fetch('/support.json').then(res => res.json());
const MainSection = () => {

    return (
        <div className='container mx-auto px-3 flex flex-col-reverse lg:flex-row lg:gap-8'>
            {/* cards container */}
            <div className='flex-3'>
                <Suspense fallback={<Loading></Loading>}>
                    <Cards supportPromiss={supportPromiss}></Cards>
                </Suspense>
            </div>

            {/* side bar */}
            <div className='flex-1'>
                <SideBar></SideBar>
            </div>
        </div>
    );
};

export default MainSection;