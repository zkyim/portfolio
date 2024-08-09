import axiosClient from "./axiosClinte";

const getFrontendSkills = () => axiosClient.get('/skills?filters[category][$eq]=FRONTEND');
const getBackendSkills = () => axiosClient.get('/skills?filters[category][$eq]=BACKEND');
const getToolsSkills = () => axiosClient.get('/skills?filters[category][$eq]=TOOLS');


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getFrontendSkills,
    getBackendSkills,
    getToolsSkills,
}