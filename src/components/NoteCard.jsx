import { Link } from 'react-router-dom';
import { ThumbsUp, MessageCircle } from 'lucide-react';

function NoteCard({ id, title, subject, author, year, likes, comments, tags }) {
    return (
        <Link to={`/notes/${id}`} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s', border: '1px solid var(--panel-border)' }} onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }} onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--glass-shadow)'; e.currentTarget.style.borderColor = 'var(--panel-border)'; }}>
            {/* Thumbnail Mock */}
            <div style={{ width: '100%', height: '160px', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(217, 70, 239, 0.2))', borderBottom: '1px solid var(--panel-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.5rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>
                {subject}
            </div>

            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{title}</h3>

                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                    {tags.map((tag, i) => (
                        <span key={i} style={{ padding: '0.2rem 0.6rem', background: 'var(--panel-bg)', border: '1px solid var(--panel-border)', borderRadius: '4px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{tag}</span>
                    ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--panel-border)', paddingTop: '1rem', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-color), var(--primary-color))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 'bold' }}>
                            {author[0]}
                        </div>
                        <div style={{ fontSize: '0.85rem', lineHeight: 1.2 }}>
                            <span style={{ display: 'block', color: 'var(--text-primary)' }}>{author}</span>
                            <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.75rem', marginTop: '0.1rem' }}>{year}</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><ThumbsUp size={14} /> {likes}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><MessageCircle size={14} /> {comments}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
export default NoteCard;
