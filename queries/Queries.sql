-- Query 1
SELECT pr.prisonname, pr.city, COUNT(cv.crimeid) as TotalCrimes
FROM prison pr, criminal c, criminalvictimcase cv
WHERE pr.prisonid = c.prisonid
AND c.criminalid = cv.criminalid
GROUP BY  pr.prisonname, pr.city
ORDER BY TotalCrimes DESC
LIMIT 10; 

-- Query 2



-- Query 3
SELECT p.policeid,p.lastname,count(c.crimeid)
From police p, investigate i, crimecase c
Where p.policeid = i.policeid AND i.crimeid = c.crimeid
AND p.rank =  'Senior Police Officer'
Group by p.policeid, p.lastname
Order By count(c.crimeid) DESC;
-- Query 4


-- Query 5
SELECT c.firstname, c.lastname, c.gender, c.race, COUNT(c.criminalid)
FROM criminal c
WHERE c.prisonid in(
	SELECT p.prisonid
	FROM prison p
	WHERE p.prisonname LIKE 'G%'
)
GROUP BY c.firstname, c.lastname, c.gender, c.race
HAVING c.gender = 'Female'
ORDER BY c.firstname ASC;

-- Query 6
SELECT c.gender, AVG(2022-extract (year from c.dob)),
c.firstname,c.lastname, count(cv.crimeid)
FROM criminal c, criminalvictimcase cv
WHERE c.criminalid=cv.criminalid
GROUP BY c.gender, c.firstname, c.lastname
ORDER BY count(cv.crimeid) DESC


-- Query 7
select crimecase.city, 
sum(case when criminal.gender = 'Female' then 1 end) as totalfemale,
sum(case when criminal.gender = 'Male' then 1 end) as totalmale
FROM crimecase, criminal
group by crimecase.city;
