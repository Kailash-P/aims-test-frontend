import axiosInstance from "../../../../axiosInstance";

export async function GetDropDownData(url, params) {
  return await axiosInstance()
    .get(url, {
      params: params,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
