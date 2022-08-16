CREATE TABLE IF NOT EXISTS users(
    uid SERIAL PRIMARY KEY NOT NULL,
    uname VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    upass TEXT NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NUll,
    user_role INT NOT NULL DEFAULT 1,
    created_at DATE DEFAULT CURRENT_DATE,
    isactive boolean DEFAULT false NOT NULL,
    FOREIGN KEY (user_role) REFERENCES roles(rid) ON DELETE SET DEFAULT
);
