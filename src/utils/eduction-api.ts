import axiosClient from "./axiosClinte";


const getEductions = () => axiosClient.get('/eductions');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getEductions,
}