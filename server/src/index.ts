import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8080;
const pathName = path.join(__dirname, '/../../client/dist');

app
  .use(express.static(pathName))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get('/api/test', (req, res) => {
  res.send({ foo: 'bar' });
});

app.get('*', (req, res) => {
  res.sendFile(pathName);
});
