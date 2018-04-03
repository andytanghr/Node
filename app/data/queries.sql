-- List all the reviews for a given restaurant given a specific restaurant ID.
select * from review where restaurant_id = 5;

-- List all the reviews for a given restaurant, given a specific restaurant name.
select
	review.review
from
	review, restaurant
where
	review.restaurant_id = restaurant.id
	and restaurant.name = 'Piu Bello';

-- equivalent to:
select
  review.review
from
  review
inner join
  restaurant on review.restaurant_id = restaurant.id
where
  restaurant.name = 'Piu Bello';

-- List all the reviews for a given reviewer, given a specific author name.
select
  review.review
from
  review
inner join
  reviewer on review.reviewer_id = reviewer.id
where
  reviewer.name = 'Aaron';

-- List all the reviews along with the restaurant they were written for. In the query result, select the restaurant name and the review text.
select
	review.review, restaurant.name
from
	review, restaurant
where
	review.restaurant_id = restaurant.id;


-- average stars by restaurant
select
	restaurant.id,
	restaurant.name,
	restaurant.address,
	avg(review.stars)
from
	restaurant, review
where
	review.restaurant_id = restaurant.id
group by
	restaurant.id

-- List all the reviews along with the restaurant, and the reviewer's name. The result should have the restaurant name, the review text, and the reviewer name. Hint: you will need to do a three-way join - i.e. joining all three tables together.

select
	restaurant.name as restaurant_name, reviewer.name as reviewer_name, review.review
from
	restaurant, review, reviewer
where
	restaurant.id = review.restaurant_id and
	review.reviewer_id = reviewer.id;

-- equivalent in inner join syntax
select
	restaurant.name as restaurant_name, reviewer.name as reviewer_name, review.review
from
	reviewer
inner join
	review on review.reviewer_id = review.id
inner join
	restaurant on review.restaurant_id = restaurant.id;

-- Get the number of restaurants in each category. (category name, restaurant count)
select category, count(*) from restaurant group by category;


-- Get number of 5 star reviews given by restaurant. (restaurant name, 5-star count)
select
	restaurant.name,
	count(*)
from
	restaurant, review
where
	review.restaurant_id = restaurant.id and
	review.stars = 5
group by
	restaurant.id;

-- Get the average star rating for a food category. (category name, average star rating)
select
	category,
	avg(review.stars)
from
	restaurant, review
where
	review.restaurant_id = restaurant.id
group by
	restaurant.category;
