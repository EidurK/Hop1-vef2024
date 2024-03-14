CREATE TABLE IF NOT EXISTS public.users (
  id SERIAL PRIMARY KEY,
  admin BOOLEAN DEFAULT FALSE,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.tasks (
  title VARCHAR(64) NOT NULL,
  description TEXT,
  due_date DATE,
  tag VARCHAR(64) DEFAULT 'home',
  status BOOLEAN DEFAULT FALSE,
  user_id INTEGER NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
/*hop1database*/
