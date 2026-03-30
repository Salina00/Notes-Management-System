import NoteCard from '../components/NoteCard';

const mockNotes = [
    { id: '1', title: 'Advanced Data Structures Master Notes', subject: 'DSA', author: 'Alex Student', year: '3rd Year', likes: 124, comments: 18, tags: ['#unit1', '#important'] },
    { id: '2', title: 'Operating Systems - Process Management', subject: 'OS', author: 'Jane Doe', year: '2nd Year', likes: 89, comments: 5, tags: ['#midterm', '#theory'] },
    { id: '3', title: 'Database Normalization Forms 1-3', subject: 'DBMS', author: 'Sam Smith', year: '3rd Year', likes: 210, comments: 34, tags: ['#sql', '#unit3'] },
    { id: '4', title: 'Calculus III Fourier Series Cheat Sheet', subject: 'Math', author: 'Emily Chan', year: '1st Year', likes: 45, comments: 2, tags: ['#formulas', '#finals'] },
    { id: '5', title: 'Computer Networks - OSI Model Explained', subject: 'CN', author: 'Chris Wong', year: '4th Year', likes: 312, comments: 45, tags: ['#basics', '#networking'] },
];

function HomeFeed() {
    return (
        <div>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '2rem', background: 'linear-gradient(135deg, #fff, #a1a1aa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Latest Uploads</h2>
            <div className="grid-cols-auto">
                {mockNotes.map(note => (
                    <NoteCard key={note.id} {...note} />
                ))}
            </div>
        </div>
    );
}
export default HomeFeed;
