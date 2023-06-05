import { useState } from 'react';   
import Reports from './Reports';
import WorkSpace from './WorkSpace';
import Settings from './Settings';



const Sidebar = () => {

    const [selectedIndex, setSelectedIndex] = useState("WorkSpace");

    const drawer = (
        <div className="bg-[#FFFFFF]  overflow-hidden rounded-r-3xl shadow-2xl  h-full">
                <div className="w-full flex items-center justify-center h-20 ">
                    <img src="/logo.png" alt="logo" width={50} height={50} />
                </div>         

                <div className="flex flex-col items-center gap-4 py-4">
                    <button className={`flex items-center gap-4 w-11/12  pl-6 py-2 rounded-xl  font-medium ${selectedIndex === 'Reports' ? "bg-[#1b59f81a] text-[#1B59F8]" : ""}`} onClick={() => setSelectedIndex("Reports")}>
                        <img src="/Vector.svg" alt="home" width={30} height={30} className={`${selectedIndex === 'Reports' ?  "bg-[#1b59f81a]" : ""}`}  />
                        <span>Reports</span>
                    </button>
                    <button className={`flex items-center gap-4 w-11/12  pl-6 py-2 rounded-xl  font-medium  ${selectedIndex === 'WorkSpace' ? "bg-[#1b59f81a] text-[#1B59F8]" : ""}`} onClick={() => setSelectedIndex("WorkSpace")}>
                        <img src="/Grid.png" alt="home" width={30} height={30} />
                        <span>WorkSpace</span>
                    </button>
                    <button className="flex items-center gap-4 w-11/12  pl-6 py-1" onClick={() => setSelectedIndex("Settings")}>
                        <img src="/Settings.png" alt="home" width={30} height={30} />
                        <span>Settings</span>
                    </button>
            </div>
        </div>
    )

  return (
    <div className="flex min-h-full h-full ">
        <div className="w-64 shadow-2xl min-h-screen ">
            {drawer}
        </div>
        <div className='bg-[#F5F5F5] flex-1 w-full'>
        {selectedIndex === "Reports" && <Reports/>}   
            {selectedIndex === "WorkSpace" && <WorkSpace />}
            { selectedIndex === "Settings" && <Settings/>}
        </div>
    </div>
  )
}

export default Sidebar