type UserData = {
  id: number;
  name: string;
};

async function fetchUserData(): Promise<UserData> {
  try {
    return fetch('https://ourverycoolapiserver.ru/api/v1/user')
      .then((response) => {
        if (response.status === 200) {
          return response.json() as UserData;
        } else {
          throw new Error('Ошибка при получении данных');
        }
      });
  }
  catch (error) {
    console.error('Ошибка при выполнении fetch:', error);
  }
}

function processUserData(userData: UserData) {
  console.log(`User ID: ${userData.id}`);
  console.log(`User Name: ${userData.name}`);
}

await fetchUserData()
  .then((data) => {
    processUserData(data);
  })
  .catch((error) => {
    console.error('Произошла ошибка', error);
  });
