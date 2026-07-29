export const fakeAuthApi = async (type: 'login' | 'register', data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, token: "mock-jwt-token", user: { name: "Sara Miftah" } });
    }, 1000);
  });
};