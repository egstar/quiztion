CREATE TABLE IF NOT EXISTS user_sessions(
    userid INT NOT NULL UNIQUE REFERENCES users(uid) ON DELETE CASCADE,
    last_session TEXT NOT NULL,
    userip TEXT NOT NULL,
    issued_at DATE NOT NULL,
    expires_at DATE NOT NULL
)