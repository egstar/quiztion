CREATE TABLE IF NOT EXISTS track(
    tid SERIAL PRIMARY KEY NOT NULL,
    track TEXT NOT NULL UNIQUE
)