-- Query 1


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


-- Query 6


-- Query 7
select crimecase.city, 
sum(case when criminal.gender = 'Female' then 1 end) as totalfemale,
sum(case when criminal.gender = 'Male' then 1 end) as totalmale
FROM crimecase, criminal
group by crimecase.city;
