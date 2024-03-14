CREATE TABLE IF NOT EXISTS public.users (
  id SERIAL PRIMARY KEY,
  admin BOOLEAN DEFAULT FALSE,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS public.tokens (
  id serial primary key,
  user_id integer NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(256) NOT NULL UNIQUE,
  expires TIMESTAMP WITH TIME ZONE NOT NULL
);

CREATE TABLE IF NOT EXISTS public.tasks (
  title VARCHAR(64) NOT NULL,
  description TEXT,
  user_id INTEGER NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS public.photos (
  id SERIAL PRIMARY KEY,
  link VARCHAR(255) NOT NULL
);
/*hop1database*/
