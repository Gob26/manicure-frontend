export interface RegisterUser {
    username: string;
    email: string;
    password: string;
    city_name: string;
    role?: string;
  }
  
  export interface RegisteredUserResponse {
    username: string;
    email: string;
    city_id: number;
    role: string;
  }
  