import axios from 'axios';

// Pode ser algum servidor executando localmente:
// http://localhost:3000

const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/',
});

const getBalanceAndTransactions = async () => {
  let data = await api.get('yuricplus/api-mocks/master/transactions.json');
  return data.data;
};

export default getBalanceAndTransactions;
