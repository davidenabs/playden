import ENDPOINTS from "../constants/endpoints";
import useApiMethods from "../hooks/useApiMethods";
// import memoize from "memoizee";

const createApiManager = () => {
  const { get, post, put, patch } = useApiMethods();

  return {
    login: async (data) => {
      const url = ENDPOINTS.LOGIN;
      return await post(url, data);
    },
    register: async (data) => {
      const url = ENDPOINTS.REGISTER;
      return await post(url, data);
    },
    // getStaffTransactions: memoize(
    //   async (staffId, page = 1, itemsPerPage = 10) => {
    //     const url = ENDPOINTS.STAFF_TRANSACTION(staffId, page, itemsPerPage);
    //     return await get(url);
    //   }
    // ),
   
  };
};
// STAFFS
export default createApiManager;
