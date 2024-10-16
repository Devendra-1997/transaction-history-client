import axios from "axios";

// Server URL
const API_BASE_URL = "https://transaction-history-api-1.onrender.com";
const transactionEndpoint = "/api/transaction";

const API_URL = API_BASE_URL + transactionEndpoint;

// Create a transaction | Create | POST
export const createTransaction = (transactionObj) => {
  const response = axios
    .post(API_URL, transactionObj, {
      headers: {
        authorization: transactionObj.userId,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return response;
};

// Get all transactions | GET
export const getTransactions = (userId) => {
  const response = axios
    .get(API_URL, {
      headers: {
        authorization: userId,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return response;
};

// delete selected transactions
export const deleteSelectedTransactions = (selectedIds, userId) => {
  const response = axios
    .delete(API_URL, {
      headers: {
        authorization: userId,
      },
      data: {
        selectedIds,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return response;
};
