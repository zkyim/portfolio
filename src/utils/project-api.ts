import axiosClient from "./axiosClinte";


const getProjects = () => axiosClient.get('/projects?populate=*');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getProjects,
}