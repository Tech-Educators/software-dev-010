select
books.title,
books.author,
genres.name as genres
FROM
books
INNER JOIN
book_genres ON books.id = book_genres.book_id
INNER join
genres ON book_genres.genre_id = genres.id