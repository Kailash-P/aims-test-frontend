import axiosInstance from "../../../../axiosInstance";

export async function GenerateAIMSToken() {
  return await axiosInstance()
    .get("/auth/GenerateAIMSToken", {
      params: {
        aims_secret: "CLOUDVILLE_ADMIN_OAUTH_ACCOUNTSERVICE_BACKEND_API",
      },
    })
    .then((response) => {
      localStorage.aimsadmintoken = response.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
