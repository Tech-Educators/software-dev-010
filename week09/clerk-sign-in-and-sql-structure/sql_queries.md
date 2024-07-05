Run these one at a time - make sure to comment out/delete one of the queries once it's run.

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  clerk_id varchar(100) unique,
  username varchar(25) unique,
  bio varchar(255),
  location varchar(100),
  created_at TIMESTAMP WITH TIME ZONE not null DEFAULT CURRENT_TIMESTAMP
)
```

```sql
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  post_content TEXT,
  clerk_id varchar(100) references users(clerk_id),
  created_at TIMESTAMP WITH TIME ZONE not null DEFAULT CURRENT_TIMESTAMP
)
```

```sql
CREATE TABLE follows (
  id SERIAL PRIMARY KEY,
  follower_id INT references users(id),
  followee_id INT references users(id),
  unique(follower_id, followee_id)
)
```