import { Link } from 'react-router-dom';
import { Search, Upload, User, BookOpen } from 'lucide-react';

function Navbar() {
    return (
        <nav className="glass-panel" style={{ margin: '1rem', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: '1rem', zIndex: 50 }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, fontSize: '1.25rem' }}>
                <div style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))', padding: '0.5rem', borderRadius: '12px', display: 'flex' }}>
                    <BookOpen color="white" size={24} />
                </div>
                <span>NotesTube</span>
            </Link>

            <div style={{ flex: 1, maxWidth: '500px', margin: '0 2rem', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>
                    <Search size={18} />
                </div>
                <input type="text" placeholder="Search for notes, subjects, or tags..." className="input-base" style={{ paddingLeft: '2.75rem', borderRadius: '9999px' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Link to="/upload" className="btn btn-primary">
                    <Upload size={18} />
                    Upload Note
                </Link>
                <Link to="/auth" className="btn btn-secondary btn-icon">
                    <User size={20} />
                </Link>
            </div>
        </nav>
    );
}
export default Navbar;
