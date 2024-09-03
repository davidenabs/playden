import { useAtom } from "jotai";
import axios from "axios";
import {
  apiLoadingAtom,
  apiErrorAtom,
  apiSuccessAtom,
} from "../atoms/apiAtoms";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import config from "../config";
import useNavigateTo from "./useNavigateTo";

const useApiMethods = () => {
  const [, setLoading] = useAtom(apiLoadingAtom);
  const [, setError] = useAtom(apiErrorAtom);
  const [, setSuccess] = useAtom(apiSuccessAtom);
  const authToken = useAuthHeader();
  const { navigateToDashboard, navigateToVerifyEmail } = useNavigateTo();

  // Create an Axios instance with a default config
  const axiosInstance = axios.create({
    baseURL: config.base_uri,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Function to get dynamic headers including authorization
  const getHeaders = () => ({
    Authorization: authToken ? authToken() : "",
  });

  // Function to handle API requests dynamically
  const apiRequest = async (method, url, data = null, params = {}) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axiosInstance({
        method,
        url,
        data,
        params,
        headers: getHeaders(),
      });

      setSuccess(response.data);
      return response.data; // Return response data for further handling

    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "API request failed";
      setError(errorMessage);
      throw new Error(error.response?.data); // Re-throw for potential global error handling
    } finally {
      setLoading(false);
    }
  };

  return {
    get: (url, params = {}) => apiRequest("GET", url, null, params),
    post: (url, data) => apiRequest("POST", url, data),
    put: (url, data) => apiRequest("PUT", url, data),
    patch: (url, data) => apiRequest("PATCH", url, data),
    delete: (url, data) => apiRequest("DELETE", url, data),
  };
};

export default useApiMethods;



// import { useAtom } from "jotai";
// import {
//   apiLoadingAtom,
//   apiErrorAtom,
//   apiSuccessAtom,
// } from "../atoms/apiAtoms";
// import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
// import config from "../config";
// import useNavigateTo from "./useNavigateTo";

// const useApiMethods = () => {
//   const [, setLoading] = useAtom(apiLoadingAtom);
//   const [, setError] = useAtom(apiErrorAtom);
//   const [, setSuccess] = useAtom(apiSuccessAtom);
//   const authToken = useAuthHeader();
//   const { navigateToDashboard, navigateToVerifyEmail } = useNavigateTo();
//   const getHeaders = () => ({
//     "Content-Type": "application/json",
//     Authorization: authToken,
//   });

//   const apiRequest = async (method, url, body = null) => {
//     url = config.base_uri + url;
//     setLoading(true);
//     setError(null);
//     setSuccess(null);
//     let response;

//     try {
//       if (body) {
//         response = await fetch(url, {
//           method,
//           headers: getHeaders(),
//           body: body !== null ? JSON.stringify(body) : undefined, // Omit unnecessary body
//         });
//       } else {
//         response = await fetch(url, {
//           method,
//           headers: getHeaders(),
//         });
//       }

//       if (!response.ok) {
//         const errorData = await response.json(); // Attempt to parse error JSON
//         const errorMessage =
//           errorData?.errors?.error ||
//           errorData?.errors?.message ||
//           errorData?.message ||
//           "API request failed";
//         throw new Error(errorMessage);
//       }

//       const result = await response.json();
//       setSuccess(result);
//       return result;
//     } catch (err) {
//       setError(err.message);
//       throw err; // Re-throw for potential global error handling
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     get: (url) => apiRequest("GET", url),
//     post: (url, data) => apiRequest("POST", url, data),
//     put: (url, data) => apiRequest("PUT", url, data),
//     patch: (url, data) => apiRequest("PATCH", url, data),
//     delete: (url, data) => apiRequest("DELETE", url, data),
//   };
// };

// export default useApiMethods;
