import type { NextApiRequest, NextApiResponse } from 'next'
import pool from '../../utils/db'

type Data = {
  data?: any | undefined,
  error?: string,
  message?: string,

}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    try {
      const data = await pool.query("SELECT * FROM investigate");
      res.status(200).json({ data: data.rows })
    } catch (error: any) {
      console.error(error.message);
      res.status(401).json({ error: 'BAD_REQUEST' })
    }
  }
  else if (req.method === "POST") {
    try {
      const { crimeid, policeid, startdate, enddate } = req.body
      const data = await pool.query(`INSERT INTO Investigate(CrimeID,PoliceID,StartDate,EndDate) VALUES (${crimeid},${policeid},'${startdate}','${enddate}');`);
      res.status(200).json({ data: data.rowCount })
    } catch (error: any) {
      console.error(error.message);
      res.status(401).json({ error: 'BAD_REQUEST', message: error.message })
    }
  }
  else res.status(401).json({ error: 'BAD_REQUEST' })
}
