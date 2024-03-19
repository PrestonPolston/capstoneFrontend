const manageAllOrdersStorage = {
  saveToSessionStorage: (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
  },
  retrieveFromSessionStorage: (key) => {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : {};
  },
};

const manageAllUsersStorage = {
  saveToSessionStorage: (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
  },
  retrieveFromSessionStorage: (key) => {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : {};
  },
};

export { manageAllOrdersStorage, manageAllUsersStorage };
