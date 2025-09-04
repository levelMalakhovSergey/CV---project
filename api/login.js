import fs from 'fs';
import path from 'path';

// This is your mock database file
const dbPath = path.resolve(process.cwd(), 'json-server/db.json');

export default function handler(req, res) {
  // We only want to process POST requests for login
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { username, password } = req.body;

    const fileData = fs.readFileSync(dbPath, 'utf8');
    const data = JSON.parse(fileData);
    const users = data.users;

    const foundUser = users.find(user => user.username === username);

    if (foundUser && foundUser.password === password) {
     
      res.status(200).json(foundUser);
    } else {

      res.status(401).json({ message: 'Invalid username or password' });
    }

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}