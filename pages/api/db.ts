import { NextApiRequest, NextApiResponse } from 'next';
import Database from 'better-sqlite3';

type ResponseData = {
  message: string
}

// Import and initialize database
const db = new Database('somethingtodo_db.sqlite', { verbose: console.log });
db.exec(`CREATE TABLE IF NOT EXISTS 
todos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  task TEXT,
  priority int
)`);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  if (req.method === 'POST') {
    addTodo(req, res);
  }

  else if (req.method === 'GET') {
    getAllTodos(req, res);
  }

  else { res.status(404).json({ message: `${req.method} is not supported` }); }
}



/* Posts form data to todo table 
 *   Creates and adds a new task
 */
let addTodo = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  // Form info
  const { task } = req.body; // equivalent of req.body.task
  const { priority = 0 } = req.body; // equivalent of p = req.body.priority; if (!p) p = 0;

  const insertData = db.prepare('INSERT INTO todos (task, priority) VALUES (?, ?)');
  const data = insertData.run(task, priority);

  console.log('Changes:', data.changes);
  console.log('Last Insert Row ID', data.lastInsertRowid);
  console.log(data);

  res.status(201).json({ message: 'SUCCESSFULLY inserted task into todo table' });
}



/* Gets all tasks from todo table */
let getAllTodos = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  // All Tasks
  const getData = db.prepare('SELECT * FROM todos');
  const data = getData.all();

  res.status(200).json(data);
}
