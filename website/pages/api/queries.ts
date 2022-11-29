import type { NextApiRequest, NextApiResponse } from 'next'
import pool from '../../utils/db'

type Data = {
  data?: any | undefined,
  error?: string,
  question?: string,
  query?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { q } = req.query
  if (req.method == "GET") {
    switch (q) {
      case '1': {
        try {
          const query = `
SELECT pr.prisonname, pr.city, COUNT(cv.crimeid) as TotalCrimes
FROM prison pr, criminal c, criminalvictimcase cv
WHERE pr.prisonid = c.prisonid
AND c.criminalid = cv.criminalid
GROUP BY pr.prisonname, pr.city
ORDER BY TotalCrimes DESC
LIMIT 10;
`
          const data = await pool.query(query);
          const question = "Find top 10 prisons with the highest number of crimes. Display the prison name, location, and total number of crimes sorted from highest to lowest."
          res.status(200).json({ question: question, query: query, data: data.rows })
        } catch (error: any) {
          console.error(error.message);
          res.status(401).json({ error: 'BAD_REQUEST' })
        }
        break;
      }
      case '2': {
        try {
          const query = `
SELECT p.firstname, p.lastname, p.rank, COUNT(p.policeid) AS NumOfTimes
FROM police p, investigate i, criminalvictimcase cv, victim v
WHERE p.policeid = i.policeid
AND i.crimeid = cv.crimeid
AND cv.victimid = v.victimid
AND v.gender = 'Male'
GROUP BY p.firstname, p.lastname, p.rank
ORDER BY COUNT(p.policeid) DESC;`
          const data = await pool.query(query);
          const question = "Identify the total number of times a police officer has investigated victims that are male. Display police first name, last name and rank. Sort the total number of times in descending order."
          res.status(200).json({ question: question, query: query, data: data.rows })
        } catch (error: any) {
          console.error(error.message);
          res.status(401).json({ error: 'BAD_REQUEST' })
        }
        break;
      }
      case '3': {
        try {
const query = `SELECT p.policeid, p.lastname, COUNT(c.crimeid) as Involved
FROM police p, investigate i, crimecase c
WHERE p.policeid = i.policeid
AND i.crimeid = c.crimeid
AND p.rank = 'Senior Police Officer'
GROUP BY p.policeid, p.lastname
ORDER BY COUNT(c.crimeid) DESC;`
          const data = await pool.query(query);
          const question = "Return the Id and last name of all the Senior Police Officers with the amount of crimes cases they've been involved in"
          res.status(200).json({ question: question, query: query, data: data.rows })
        } catch (error: any) {
          console.error(error.message);
          res.status(401).json({ error: 'BAD_REQUEST' })
        }
        break;
      }
      case '4': {
        try {
          const query = `
SELECT t.crimename, COUNT(c.criminalid) as TotalCriminal
FROM prison p, criminal c, criminalvictimcase cv, crimetype ct, type t
WHERE p.prisonid = c.prisonid
AND c.criminalid = cv.crimeid
AND cv.crimeid = ct.crimeid
AND ct.typeid = t.typeid
AND p.prisonname = 'Pulaski State Prison'
GROUP BY t.crimename
ORDER BY TotalCriminal DESC
LIMIT 5;`
          const data = await pool.query(query);
          const question = "Find the top 5 crime types committed by prisoners of Pulaski State Prison and count the total number of criminals who committed that crime type. Print the crime name and total number of criminals for each crime name and order them by the highest number of criminals"
          res.status(200).json({ question: question, query: query, data: data.rows })
        } catch (error: any) {
          console.error(error.message);
          res.status(401).json({ error: 'BAD_REQUEST' })
        }
        break;
      }
      case '5': {
        try {
          const query = `
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
`
          const data = await pool.query(query);
          const question = "Find the female criminals who stay at the prison, starting with 'G.' Count the criminalID and order by the first name in ascending, using the nested query. Return first name, last name, gender, race, dob, and the count."
          res.status(200).json({ question: question, query: query, data: data.rows })
          res.status(200).json({ question: "", query: "", data: data.rows })
        } catch (error: any) {
          console.error(error.message);
          res.status(401).json({ error: 'BAD_REQUEST' })
        }
        break;
      }
      case '6': {
        try {
          const query = `
SELECT c.gender, AVG(2022 - extract(year from c.dob)) as AVGAge, c.firstname, c.lastname, COUNT(cv.crimeid) as CrimeCount
FROM criminal c, criminalvictimcase cv
WHERE c.criminalid = cv.criminalid
GROUP BY c.gender, c.firstname, c.lastname
ORDER BY COUNT(cv.crimeid) DESC;`
          const data = await pool.query(query);
          const question = "Get the criminal gender, the average age of the criminals, their names, and the number of crimes they committed in descending order."
          res.status(200).json({ question: question, query: query, data: data.rows })
        } catch (error: any) {
          console.error(error.message);
          res.status(401).json({ error: 'BAD_REQUEST' })
        }
        break;
      }
      case '7': {
        try {
          const query = `
SELECT crimecase.city,
SUM(CASE WHEN criminal.gender = 'Female' THEN 1 END) as totalfemale,
SUM(CASE WHEN criminal.gender = 'Male' THEN 1 END) as totalmale
FROM crimecase, criminal
GROUP BY crimecase.city;`
          const data = await pool.query(query);
          const question = "Find how many female and male criminals committed a crime in each city. Return the city name, and amount of female/male criminals"
          res.status(200).json({ question: question, query: query, data: data.rows })
        } catch (error: any) {
          console.error(error.message);
          res.status(401).json({ error: 'BAD_REQUEST' })
        }
        break;

      }
      default: {
        res.status(401).json({ error: 'BAD_REQUEST' })
      }
    }
  }
  else res.status(401).json({ error: 'BAD_REQUEST' })
}
