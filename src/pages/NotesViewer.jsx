import { BookOpen, ThumbsUp, BookmarkPlus, MessageCircle } from 'lucide-react';

function NotesViewer() {
    return (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 700px' }}>
                {/* Mock PDF Viewer */}
                <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#09090b', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)', border: '1px solid var(--panel-border)' }}>
                    <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                        <BookOpen size={64} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
                        <p>PDF/PPT Viewer Canvas (Mock)</p>
                    </div>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                    <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Advanced Data Structures Master Notes</h1>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-color), var(--primary-color))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                A
                            </div>
                            <div>
                                <p style={{ fontWeight: 600 }}>Alex Student</p>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>CSE • 3rd Year</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <button className="btn btn-secondary"><ThumbsUp size={18} /> Like</button>
                            <button className="btn btn-secondary"><BookmarkPlus size={18} /> Save</button>
                            <button className="btn btn-secondary btn-icon"><MessageCircle size={18} /></button>
                        </div>
                    </div>

                    <div className="glass-panel" style={{ padding: '1.5rem', marginTop: '2rem' }}>
                        <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Subject: DSA</p>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(139, 92, 246, 0.2)', color: '#c4b5fd', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 500 }}>#unit1</span>
                            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(139, 92, 246, 0.2)', color: '#c4b5fd', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 500 }}>#important</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            These are my hand-written notes for Unit 1 of Advanced DSA, covering Binary Search Trees, AVL Trees, and foundational graph traversal techniques. Highly recommended before the midterms!
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ marginBottom: '1rem' }}>Related Notes</h3>
                <div className="glass-panel" style={{ padding: '1rem', marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>Red-Black Trees Summary</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Alex Student • 2 days ago</p>
                </div>
                <div className="glass-panel" style={{ padding: '1rem', marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>Graph Algorithms Cheat Sheet</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Jane Doe • 5 days ago</p>
                </div>
            </div>
        </div>
    );
}
export default NotesViewer;
