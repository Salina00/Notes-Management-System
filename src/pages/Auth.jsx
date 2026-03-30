function Auth() {
    return (
        <div className="flex-center" style={{ minHeight: '80vh' }}>
            <div className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '400px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem' }}>Join NotesTube</h2>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input type="text" placeholder="Full Name (for Student Profile)" className="input-base" />
                    <input type="text" placeholder="Branch & Year (e.g., CSE 3rd Year)" className="input-base" />
                    <input type="email" placeholder="Email Address" className="input-base" />
                    <input type="password" placeholder="Password" className="input-base" />
                    <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Register</button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Already have an account? <a href="#" style={{ color: 'var(--primary-color)' }}>Login</a>
                </p>
            </div>
        </div>
    );
}
export default Auth;
