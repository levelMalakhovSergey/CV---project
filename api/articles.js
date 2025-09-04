
import fs from 'fs';
import path from 'path';

// Функция для поиска пути к файлу db.json
// process.cwd() указывает на корневую папку проекта
const dbPath = path.resolve(process.cwd(), 'json-server/db.json');

// Функция-обработчик, которая будет выполняться при каждом запросе
export default function handler(req, res) {
  try {
    const fileData = fs.readFileSync(dbPath);
    const data = JSON.parse(fileData);

    // Обрабатываем разные типы запросов (GET, POST и т.д.)
    if (req.method === 'GET') {
      res.status(200).json(data.articles);

    // } else if (req.method === 'POST') {
    //   const newUser = req.body; // Получаем данные нового пользователя из тела запроса
      
    //   // Просто для примера добавляем ID и дату
    //   newUser.id = Date.now(); 
    //   newUser.createdAt = new Date().toISOString();

    //   data.users.push(newUser); // Добавляем в массив

    //   // Перезаписываем файл db.json с новыми данными
    //   fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

    //   res.status(201).json(newUser); // Отвечаем успехом и возвращаем созданного пользователя
    
    } else {
      // Если метод не GET и не POST, отправляем ошибку
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }

  } catch (error) {
    res.status(500).json({ message: 'Ошибка на сервере', error: error.message });
  }
}