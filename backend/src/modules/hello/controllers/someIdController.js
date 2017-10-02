import axios from 'axios';

export const someIdController = async (req, res) => {
  const { params, query } = req;

  const jsonPlaceholderResponse = await axios.get(
    'https://jsonplaceholder.typicode.com/posts?_limit=3',
  );
  const dataFromJsonPlaceholder = jsonPlaceholderResponse.data;

  const data = {
    dataFromJsonPlaceholder,
    params,
    query,
    time: new Date(),
  };

  res.json(data);
};
