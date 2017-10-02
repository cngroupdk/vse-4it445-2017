import bodyParser from 'body-parser';
import express from 'express';

import rootRoutes from './rootRoutes';

export const app = express();

app.use(bodyParser.json());

if (__DEV__) {
  app.use(express.static('uploads'));
}

app.use(rootRoutes);

app.use((req, res, next) => {
  res.status(404);
  res.json({ error: '404: Not found' });
});
