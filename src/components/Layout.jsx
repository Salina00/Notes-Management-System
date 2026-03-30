import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
    return (
        <div className="layout">
            <Navbar />
            <main className="container animate-fade-in" style={{ padding: '2rem 1.5rem' }}>
                <Outlet />
            </main>
        </div>
    );
}
export default Layout;
