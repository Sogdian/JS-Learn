type TUser = {
  id: number;
  name: string;
}

function fetchUserData(): Promise<TUser> {
  return fetch('https://ourverycoolapiserver.ru/api/v1/user')
    .then((response) => {
      if (response.status === 200) {
        return response.json() as TUser;
      } else {
        throw new Error('Ошибка при получении данных');
      }
    });
}

function processUserData(userData: TUser) {
  console.log(`User ID: ${userData.id}`);
  console.log(`User Name: ${userData.name}`);
}

fetchUserData()
  .then((data) => {
    processUserData(data);
  })
  .catch((error) => {
    console.error('Произошла ошибка', error);
  });
