-- 1 What are tracks for a given album?
select
	song.name, track.duration
from
	album
inner join
	track on track.album_id = album.id
inner join
	song on track.song_id = song.id
where
	album.title = 'A Love Supreme'

-- 2 What are the albums produced by a given artist?

select
	*
from
	album
inner join
	artist on album.id = artist.id
where
	artist.name = 'John Coltrane';

-- What is the track with the longest duration?
select
	*
from
	track
inner join
	song on song.id = track.song_id
order by
	duration desc
limit 1;

-- What are the albums released in the 60s? 70s? 80s? 90s?
select
	*
from
	album
where
	year between 1960 and 1970

-- How many albums did a given artist produce in the 90s?
select
	*
from
	album
inner join
	artist on album.artist_id = artist.id
where
	year between 1960 and 1970 and
	artist.name = 'John Coltrane'

-- What year is each artist's latest album?
select
	artist.name,
	max(album.year)
from
	artist
inner join
	album on album.artist_id = artist.id
group by
	artist.id

-- What is the title of each artist's latest album? *Hint: try using a combination of order by, a subselect, and a distinct on*
select
	*
from
	artist
join
	album on artist.id = album.artist_id
where
	year = (
		select
			max(year)
		from
			album
		where
			album.artist_id = artist.id
	);

-- alterative
select
	distinct on (artist.id) *
from
	artist
join
	album on artist.id = album.artist_id
order by
	artist.id, year desc;

-- List all albums along with its total duration based on summing the duration of its tracks.
select
	album.id,
	album.title,
	sum(track.duration)
from
	album
inner join
	track on track.album_id = album.id
group by
	album.id

-- Who are the 5 most prolific artists based on the number of albums they have recorded?
SELECT
	artist.name,
	count(album.title)
FROM
	artist
LEFT OUTER JOIN
	album on artist.id = album.artist_id
GROUP BY
	artist.id
ORDER BY
	count desc
LIMIT
	5;

-- What are all the tracks a given artist has recorded?
SELECT
	*
FROM
	artist
LEFT OUTER JOIN
	album on artist.id = album.artist_id
LEFT OUTER JOIN
	track on track.album_id = album.id
LEFT OUTER JOIN
	song on track.song_id = song.id
where
	artist.name = 'Charles Mingus'

-- Who are the song writers whose songs a given artist has recorded?

select
	distinct(song_writer.name)
from
	artist
inner join
	album on album.artist_id = artist.id
inner join
	track on track.album_id = album.id
inner join
	song on track.song_id = song.id
inner join
	song_writer on song.song_writer_id = song_writer.id
where
	artist.name = 'John Coltrane'

-- Given a lead artist, what collaborators has he worked with? Hint: you can give the same table 2 different aliases. For example, a query to find all people you follow would look like `select from "user" as follower, "user" as followee where ...`*

SELECT
    lead_artist.name as lead_artist,
    album.name as album,
    a_collaborator.name
FROM
    artist as lead_artist
LEFT OUTER JOIN
    album on album.artist_id = lead_artist.id
LEFT OUTER JOIN
    collaborators on collaborators.album_id = album.id
LEFT OUTER JOIN
	artist as a_collaborator on collaborators.artist_id = a_collaborator.id
WHERE
    artist.name = ‘Julie’;
