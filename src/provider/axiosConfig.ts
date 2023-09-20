import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

/*
    Just a little config for axios, fot possible "Growth" of the project :)
 */
const instance = axios.create({
    baseURL: process.env.API_BASE_URL,
    validateStatus: null
})

export default instance