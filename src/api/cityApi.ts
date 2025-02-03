// src/api/cityApi.ts для запросов к эндпоинту /api/v1/cities/
import axiosInstance from './axiosInstance';


export interface City {
    id: number;
    name: string;
    slug: string;
    url: string;
    count_masters: number;
    count_salons: number;
  }


  export const fetchCities = async (): Promise<City[]> => {
      const response = await axiosInstance.get<City[]>('/cities/'); // url
      return response.data;
  };