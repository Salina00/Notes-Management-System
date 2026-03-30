import { UploadCloud } from 'lucide-react';

function Upload() {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Upload Note</h2>
            <div className="glass-panel" style={{ padding: '2.5rem' }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Title</label>
                        <input type="text" placeholder="e.g., Data Structures Midterm Notes" className="input-base" />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Subject</label>
                        <input type="text" placeholder="e.g., DSA, OS, DBMS" className="input-base" />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Tags</label>
                        <input type="text" placeholder="e.g., #important, #unit1" className="input-base" />
                    </div>

                    <div style={{ border: '2px dashed var(--panel-border)', borderRadius: '16px', padding: '3rem 2rem', textAlign: 'center', marginTop: '1rem', cursor: 'pointer', transition: 'border 0.2s', backgroundColor: 'rgba(0,0,0,0.2)' }} onMouseOver={e => e.currentTarget.style.borderColor = 'var(--primary-color)'} onMouseOut={e => e.currentTarget.style.borderColor = 'var(--panel-border)'}>
                        <UploadCloud size={48} color="var(--primary-color)" style={{ margin: '0 auto 1rem' }} />
                        <h3 style={{ marginBottom: '0.5rem' }}>Drag & drop your PDF/PPT here</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>or paste a link to your document</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                        <button type="button" className="btn btn-primary">Publish Note</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Upload;
