import axios from "axios";

export const getDatos = async (url) => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const postDatos = async (url, datos) => {
	try {
		const response = await axios.post(url, datos);
        return response;
	} catch (error) {
		console.error(error);
	}
};

export const putDatos = async (url, datos) => {
	try {
		const response = await axios.put(url, datos);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const deleteDatos = async (url) => {
	try {
		const response = await axios.delete(url);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
