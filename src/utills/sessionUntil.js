export const getSession = () => ({
    token: localStorage.getItem("token"),
    userId: localStorage.getItem("user_id"),
    user: localStorage.getItem("user"),
});