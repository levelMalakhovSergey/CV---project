
import fs from 'fs';
import path from 'path';

// Функция для поиска пути к файлу db.json
// process.cwd() указывает на корневую папку проекта
const dbPath = path.resolve(process.cwd(), 'json-server/db.json');

// Функция-обработчик, которая будет выполняться при каждом запросе
export default function handler(req, res) {
  console.log(req.query.id);
  
  res.status(200).json( {
      "id": "1",
      "first": "Serhii Malakhov",
      "lastname": "Malakhov",
      "age": 22,
      "currency": "EUR",
      "country": "Ukraine",
      "city": "Krakow",
      "username": "admin213",
      "avatar": "https://www.google.com/search?q=cat&sca_esv=1dfb77f5f82eed46&sxsrf=AE3TifMs8LxkL3pUYr50lQkTBD-hpVx6dw:1755140206254&source=hp&biw=1536&bih=824&ei=blCdaJDjDZCGxc8PkKa3oQk&iflsig=AOw8s4IAAAAAaJ1eftYRlhj8nriK1RXd_2_H8vmIr7Qu&ved=0ahUKEwiQ0pfkpomPAxUQQ_EDHRDTLZQQ4dUDCBc&uact=5&oq=cat&gs_lp=EgNpbWciA2NhdDIHECMYJxjJAjIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjrClCvB1iUCnABeACQAQCYAVWgAekBqgEBM7gBA8gBAPgBAYoCC2d3cy13aXotaW1nmAIEoAKPAqgCCsICChAjGCcYyQIY6gKYAwySBwE0oAeAErIHATO4B4MCwgcFMi0zLjHIBx8&sclient=img&udm=2#vhid=KJJtoL7e6aITTM&vssid=mosaic"
    })
  // try {
  //   const fileData = fs.readFileSync(dbPath);
  //   const data = JSON.parse(fileData);
  //       const { id } = req.query;
  //   // Обрабатываем разные типы запросов (GET, POST и т.д.)
  //   if (req.method === 'GET') {
  //     // Если это GET-запрос, просто возвращаем всех пользователей
  //     console.log(data.profile)
  //     res.status(200).json(data.profile);

  //   } 
  //        if (req.method === 'POST') {
  //     // Если это POST-запрос, добавляем нового пользователя
  //   //   const newUser = req.body; // Получаем данные нового пользователя из тела запроса
      
  //   //   // Просто для примера добавляем ID и дату
  //   //   newUser.id = Date.now(); 
  //   //   newUser.createdAt = new Date().toISOString();

  //   //   data.users.push(newUser); // Добавляем в массив

  //   //   // Перезаписываем файл db.json с новыми данными
  //   //   fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

  //   //   res.status(201).json(newUser); // Отвечаем успехом и возвращаем созданного пользователя
    
  //   } else {
  //     // Если метод не GET и не POST, отправляем ошибку
  //     res.setHeader('Allow', ['GET', 'POST']);
  //     res.status(405).end(`Method ${req.method} Not Allowed`);
  //   }

  // } catch (error) {
  //   res.status(500).json({ message: 'Ошибка на сервере', error: error.message });
  // }
}