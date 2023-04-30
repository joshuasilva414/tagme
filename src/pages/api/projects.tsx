import { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from "@/server/db";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  //Guard for POST only methods
  if (req.method !== 'POST') {
    res.status(405).send({message: 'Only POST requests allowed'});
    return;
  }

  const name: string = req.body.name;
  const desc = req.body.desc; 
  const tasks = req.body.taskList;

  try {
    const newProject = await prisma.project.create({
    data: {
      description: desc,
      name: name,
      task: tasks
    }
  });
    res.status(201).json(newProject);
  } catch ({message}) {
    console.error(message);
    res.status(500);
  }

}
