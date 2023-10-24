import axios from "axios";

const NASA_API_BASE_URL = "https://api.nasa.gov";
const API_KEY = "TDzuIhofaO7Q3LpFXHyPVYeqMqE52cFnSvam3YaQ";
const ImgApi_url = "https://images-api.nasa.gov";
const NasaApiService = {
  getAstronomyPictureOfTheDay: async () => {
    try {
      const response = await axios.get(`${NASA_API_BASE_URL}/planetary/apod`, {
        params: {
          api_key: API_KEY,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  searchImages: async (query) => {
    try {
      const response = await axios.get(`${ImgApi_url}/search`, {
        params: {
          q: query,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getAssetManifest: async (nasaId) => {
    try {
      const response = await axios.get(`${NASA_API_BASE_URL}/asset/${nasaId}`, {
        params: {
          api_key: API_KEY,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getMetadataLocation: async (nasaId) => {
    try {
      const response = await axios.get(
        `${NASA_API_BASE_URL}/metadata/${nasaId}`,
        {
          params: {
            api_key: API_KEY,
          },
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getVideoCaptionsLocation: async (nasaId) => {
    try {
      const response = await axios.get(
        `${NASA_API_BASE_URL}/captions/${nasaId}`,
        {
          params: {
            api_key: API_KEY,
          },
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default NasaApiService;
