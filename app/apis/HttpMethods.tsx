import { RootState, store } from "@/app/redux-code/store";
import { API_BASE_URL } from "./Urls";

const getHeader = () => {
  const token = (store.getState() as RootState).userState?.token;
  return {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${token}`
  };
};

class HttpMethods {
  // POST method
  static async POST(endpoint: string, body: object) {
    try {
      const url = API_BASE_URL + endpoint;
      console.log("[POST] URL:", url, "Body:", body);

      const response = await fetch(url, {
        method: "POST",
        headers: getHeader(),
        body: JSON.stringify(body),
      });

      const text = await response.text();
      console.log("[POST] raw response:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (error) {
        console.error("[POST] JSON parse error:", error);
        data = { error: true, message: "Invalid JSON response" };
      }

      if (!response.ok) {
        console.error("[POST] failed with status", response.status, data);
        return {
          error: true,
          status: response.status,
          data,
        };
      }

      return data;
    } catch (error: any) {
      console.error("[POST] error:", error);
      return { error: true, message: error.message };
    }
  }

  // GET method
  static async GET(endpoint: string) {
    try {
      const url = API_BASE_URL + endpoint;
      console.log("[GET] URL:", url);

      const response = await fetch(url, {
        method: "GET",
        headers: getHeader(),
      });

      const text = await response.text();
      console.log("[GET] raw response:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (error) {
        console.error("[GET] JSON parse error:", error);
        data = { error: true, message: "Invalid JSON response" };
      }

      if (!response.ok) {
        console.error("[GET] failed with status", response.status, data);
        return {
          error: true,
          status: response.status,
          data,
        };
      }

      return data;
    } catch (error: any) {
      console.error("[GET] error:", error);
      return { error: true, message: error.message };
    }
  }

  // DELETE method
  static async DELETE(endpoint: string, body?: object) {
    try {
      const url = API_BASE_URL + endpoint;
      console.log("[DELETE] URL:", url, "Body:", body);

      const options: RequestInit = {
        method: "DELETE",
        headers: getHeader(),
        body: body ? JSON.stringify(body) : undefined,
      };

      const response = await fetch(url, options);
      const text = await response.text();
      console.log("[DELETE] raw response:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (error) {
        console.error("[DELETE] JSON parse error:", error);
        data = { error: true, message: "Invalid JSON response" };
      }

      if (!response.ok) {
        console.error("[DELETE] failed with status", response.status, data);
        return {
          error: true,
          status: response.status,
          data,
        };
      }

      return data;
    } catch (error: any) {
      console.error("[DELETE] error:", error);
      return { error: true, message: error.message };
    }
  }
}

export default HttpMethods;
