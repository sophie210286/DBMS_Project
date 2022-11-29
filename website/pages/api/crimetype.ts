import type { NextApiRequest, NextApiResponse } from 'next'
import pool from '../../utils/db'

type Data = {
  data?: any | undefined,
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.method == "GET"){
        try {
            const data = await pool.query("SELECT * FROM crimetype");
            res.status(200).json({ data: data.rows })
        } catch (error:any) {
            console.error(error.message);
            res.status(401).json({error: 'BAD_REQUEST'})
        }
    }
    else res.status(401).json({error: 'BAD_REQUEST'})
}

