import { generateQueryString } from "../utils/queryUtils";

const BASE_URL = "/api/v1";

const ENDPOINTS = {
  LOGIN: `${BASE_URL}/auth/login`,
  REGISTER: `${BASE_URL}/auth/register`,
  // STAFFS_SPENDING: (page = 1, itemsPerPage = 10) => {
  //   const queryParams = generateQueryString({
  //     limit: itemsPerPage,
  //     page: page,
  //     sort: "createdAt",
  //     sortType: "desc",
  //   });
  //   return `${BASE_URL}/transactions/staffs-spending?${queryParams}`;
  // },
};

export default ENDPOINTS;
