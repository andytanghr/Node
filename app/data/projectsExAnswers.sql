/* 1. What are all projects that use JavaScript? */
SELECT * FROM project_uses_tech WHERE tech_id=3;


/* 2. What are all technologies used by the Person Website? */
/* done in three steps */
SELECT id FROM project WHERE name='Personal Website'; /* project id for Personal Website is 4*/
SELECT * FROM project_uses_tech WHERE project_id=4; /* this gets the tech ids only, ids 1 and 2*/
SELECT * FROM tech WHERE id=1 OR id=2; /* this gets the tech names */
 /* in one line! */
SELECT * FROM project, tech WHERE (tech.id=1 OR tech.id=2) AND project.name ILIKE '%Personal Website%';
-- HTML, CSS


/* 3. Perform a left outer join from the tech table to the project_uses_tech table. Which techs have no associated project? */
SELECT * FROM tech
LEFT OUTER JOIN project_uses_tech
ON tech.id = project_uses_tech.tech_id
WHERE project_uses_tech.tech_id IS NULL;
-- JavaScript, Java, Ruby


/* 4. Based on the previous query, get the count of the number of techs used by each project */
SELECT project.*, COUNT(tech_id) FROM project
LEFT OUTER JOIN project_uses_tech
ON project.id = project_uses_tech.project_id
GROUP BY project.id;
/*
 id |           name            | count
----+---------------------------+-------
  3 | Mozilla Front Page        |     3
 11 | Turtle Graphics Exercises |     2
  8 | RPG Hero Game             |     2
  7 | Whiteboard Exercises      |     0
 10 | Phone Book                |     3
  9 | Catch the Monster Game    |     3
  1 | School Bus                |     2
  5 | Modal Dialog              |     2
  4 | Personal Website          |     2
  2 | Medium Blog Layout        |     2
  6 | CSS Tricks Blog Layout    |     2
(11 rows)
*/

--gets the count but not the names of the techs or names of projects
SELECT COUNT(tech_id) FROM project_uses_tech GROUP BY project_id; 
--same thing below in multiple lines
SELECT COUNT(tech_id) FROM tech
LEFT OUTER JOIN project_uses_tech
ON tech.id = project_uses_tech.tech_id
WHERE project_uses_tech.tech_id IS NOT NULL
GROUP BY project_uses_tech.project_id;
/*
 count
-------
     2
     3
     3
     2
     2
     3
     2
     2
     2
     2
(10 rows)
*/




/* 5. Perform a left outer join from the project table to the project_uses_tech table. Which projct has no associated tech? */
SELECT * FROM project
LEFT OUTER JOIN project_uses_tech
ON project.id = project_uses_tech.project_id
WHERE project_uses_tech.tech_id IS NULL;
-- Whiteboard Exercises

/* 6. Based on the previous query, get the count of the number of projects that use each tech. */
SELECT tech.*, COUNT(project_id) FROM tech
LEFT OUTER JOIN project_uses_tech
ON tech.id = project_uses_tech.tech_id
GROUP BY tech.id;
/*
 id |      name       | count
----+-----------------+-------
 12 | Pickle          |     1
  3 | JavaScript      |     0
  8 | Ruby            |     0
 11 | File IO         |     1
  7 | Java            |     0
 10 | Objects         |     2
  9 | Bootstrap       |     1
  1 | HTML            |     6
  5 | Turtle Graphics |     1
  4 | Python          |     4
  2 | CSS             |     6
  6 | PyGame          |     1
(12 rows)
*/

--these commands just gets the count for each tech used but no names of tech
SELECT COUNT(project_id) FROM project_uses_tech GROUP BY tech_id;
/*
 count
-------
     1
     1
     1
     4
     2
     1
     6
     1
     6
(9 rows)
*/


/* 7. List all projects along with each technology used by it. You will need to do a three-way join. */
SELECT * FROM project
LEFT OUTER JOIN project_uses_tech
ON project.id = project_uses_tech.project_id
LEFT OUTER JOIN tech
ON tech.id = project_uses_tech.tech_id;


/* 8. List all the distinct techs that are used by at least one project. */
SELECT DISTINCT tech.name FROM tech
LEFT OUTER JOIN project_uses_tech
ON tech.id = project_uses_tech.tech_id
WHERE project_uses_tech.tech_id IS NOT NULL;
/*
      name
-----------------
 HTML
 Turtle Graphics
 PyGame
 Python
 File IO
 CSS
 Bootstrap
 Objects
 Pickle
(9 rows)
*/

--another solution
SELECT DISTINCT tech.name FROM project
INNER JOIN project_uses_tech
ON project.id = project_uses_tech.project_id
INNER JOIN tech
ON tech.id = project_uses_tech.tech_id;



/* 9. List all the distinct techs that are not used by any projects. */
SELECT DISTINCT tech.name FROM tech
LEFT OUTER JOIN project_uses_tech
ON tech.id = project_uses_tech.tech_id
WHERE project_uses_tech.tech_id IS NULL;
/*
    name
------------
 Java
 JavaScript
 Ruby
(3 rows)
/*


/* 10. List all the distinct projects that use at least one tech. */
SELECT DISTINCT project.name FROM project
LEFT OUTER JOIN project_uses_tech
ON project.id = project_uses_tech.project_id
WHERE project_uses_tech.project_id IS NOT NULL;
/*
           name
---------------------------
 Phone Book
 CSS Tricks Blog Layout
 Turtle Graphics Exercises
 Medium Blog Layout
 Mozilla Front Page
 School Bus
 RPG Hero Game
 Modal Dialog
 Personal Website
 Catch the Monster Game
(10 rows)
*/



/* 11. List all distinct projects that use no tech. */
SELECT DISTINCT project.name FROM project
LEFT OUTER JOIN project_uses_tech
ON project.id = project_uses_tech.project_id
WHERE project_uses_tech.tech_id IS NULL;
/*
         name
----------------------
 Whiteboard Exercises
(1 row)
*/




/* 12. Order the projects by how many tech it uses. */
SELECT project.name, COUNT(tech_id) FROM project
LEFT OUTER JOIN project_uses_tech
ON project.id = project_uses_tech.project_id
GROUP BY project.name
ORDER BY COUNT(tech_id);
/*
           name            | count
---------------------------+-------
 Whiteboard Exercises      |     0
 CSS Tricks Blog Layout    |     2
 Medium Blog Layout        |     2
 Modal Dialog              |     2
 Personal Website          |     2
 RPG Hero Game             |     2
 School Bus                |     2
 Turtle Graphics Exercises |     2
 Catch the Monster Game    |     3
 Mozilla Front Page        |     3
 Phone Book                |     3
(11 rows)
*/



/* 13. Order the tech by how many projects use it. */
SELECT tech.name, COUNT(project_id) FROM tech
LEFT OUTER JOIN project_uses_tech
ON tech.id = project_uses_tech.tech_id
GROUP BY tech.name
ORDER BY COUNT(project_id);
/*
      name       | count
-----------------+-------
 JavaScript      |     0
 Java            |     0
 Ruby            |     0
 File IO         |     1
 Turtle Graphics |     1
 Bootstrap       |     1
 Pickle          |     1
 PyGame          |     1
 Objects         |     2
 Python          |     4
 CSS             |     6
 HTML            |     6
(12 rows)
*/

/* 14. What is the average number of techs used by a project? */
SELECT COUNT(project.id) FROM project; --11 projects
SELECT COUNT(tech_id) FROM project_uses_tech; --23 tech uses
--23 tech uses per 11 projects = 2.1 techs used per project