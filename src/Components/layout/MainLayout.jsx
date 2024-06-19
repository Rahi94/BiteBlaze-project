import Navbar from '../Navbar';
import Footer from '../Footer';

import { Outlet } from 'react-router-dom';
const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar></Navbar>

                {/* packet */}
               
            </div>
            <div className='min-h-[calc(100vh-116px)]'>
            <Outlet />
            </div>

            {/* footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;