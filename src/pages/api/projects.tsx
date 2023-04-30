import { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {

  //Guard for POST only methods
  if (req.method !== 'POST') {
    res.status(405).send({message: 'Only POST requests allowed'});
    return;
  }

  const name = req.body.name; 
  const desc = req.body.desc; 
  //const tasks = req.body.taskList

  const newProject = {
    name,
    description: desc,
  }

  
  res.status(201).json(newProject);

}
