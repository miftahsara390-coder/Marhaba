import { generateMockJwt } from "@/utils/jwt";

export const fakeAuthApi = async (type: "login" | "register", data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = {
        id: 1,
        name: data.name || "Sara Miftah",
        email: data.email || "sara@exemple.com",
      };

      const token = generateMockJwt(user, 7 * 24 * 3600);

      resolve({
        success: true,
        token,
        user,
      });
    }, 800);
  });
};