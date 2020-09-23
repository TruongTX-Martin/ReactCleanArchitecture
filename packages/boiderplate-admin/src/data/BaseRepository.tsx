import { ACCESS_TOKEN } from '../constants/localStorage';
import BASE_URL from '../constants/apiHosts';
import history from '../constants/history';

const fetchPolifill = require("whatwg-fetch");

class BaseRepository {
  BASE_URL;

  PATH;

  fetch;

  constructor() {
    this.BASE_URL = BASE_URL.BASE_URL;
    this.PATH = "/";
    this.fetch = fetchPolifill.fetch;
  }


  async index(offset, limit, order, direction, searchWord = "", params = {}) {
    return await this.get(
      this.PATH,
      Object.assign(
        {
          offset: offset || 0,
          limit: limit || 0,
          direction: direction || "asc",
          order: order || "id",
          query: searchWord || ""
        },
        params
      )
    );
  }

  async show(id, params = {}) {
    return await this.get(this.PATH + "/" + id, params);
  }

  async store(params = {}) {
    return await this.post(this.PATH, params);
  }

  async update(id, params = {}) {
    return await this.put(this.PATH + "/" + id, params);
  }

  async destroy(id, params = {}) {
    return await this.delete(this.PATH + "/" + id, params);
  }

  async get(url, params = {}) {
    return await this.request("GET", url, params);
  }

  async getFile(url, params = {}, fileName) {
    this.request("GET", url, params, true, fileName);
  }

  async post(url, params = {}) {
    return await this.request("POST", url, params);
  }

  async put(url, params = {}) {
    params["_method"] = "put";
    return await this.request("PUT", url, params);
  }

  async delete(url, params = {}) {
    params["_method"] = "delete";
    return await this.request("DELETE", url, params);
  }

  async download(url, params = {}) {
    params["_method"] = "get";
    return await this.request("GET", url, params, true);
  }

  //use when status is 403
  navigateLogin() {
    history.replace("#/login");
    window.location.reload();
    localStorage.setItem(ACCESS_TOKEN, null);
  }

  async request(method, url, params = {}, isDownLoad = false) {
    let realUrl = this.BASE_URL + url;
    console.log('Request BaseUrl:', this.BASE_URL);
    console.log('Request realUrl:', realUrl);
    let formData = new FormData();

    const token = await localStorage.getItem(ACCESS_TOKEN);

    if (method === "GET" || method === "HEAD") {
      let query = Object.keys(params)
        .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
        .join("&");
      realUrl = realUrl + "?" + query;

      const header = token != null ? {
        Authorization: "Bearer " + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      } : {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        };

      const response = await fetch(realUrl, {
        credentials: "same-origin",
        method: method,
        headers: header,
      });
      if (response.status == 401) {
        this.navigateLogin();
        return;
      }
      if (isDownLoad) {
        const blob = await response.blob();
        const urlPDF = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = urlPDF;
        link.setAttribute("download", params.fileName + '.' + params.type);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        return;
      } else {
        const responseJson = await response.json();
        const tokenNew = response.headers.get("x-auth-token");
        if (tokenNew != null) {
          await localStorage.setItem(ACCESS_TOKEN, tokenNew.toString());
        }
        return responseJson;
      }
    }

    if (method === "PUT" || method === "HEAD" || method === "POST") {
      const response = await this.fetch(realUrl, {
        credentials: "same-origin",
        method: method,
        headers: {
          Authorization: "Bearer " + token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      });
      if (response.status == 401) {
        this.navigateLogin();
        return;
      }
      const responseJson = await response.json();
      const tokenNew = response.headers.get("x-auth-token");
      if (tokenNew != null) {
        await localStorage.setItem(ACCESS_TOKEN, tokenNew.toString());
      }
      return responseJson;
    }

    if (params instanceof FormData) {
      formData = params;
    } else {
      Object.keys(params).forEach(function (key) {
        if (Array.isArray(params[key])) {
          for (let value of params[key]) {
            formData.append(key + "[]", value);
          }
        } else {
          formData.append(key, params[key]);
        }
      });
    }

    // eslint-disable-next-line no-console
    console.log(`fetch url=${realUrl} formData=${formData}`);

    const response = await this.fetch(realUrl, {
      credentials: "same-origin",
      method: method,
      body: formData,
      headers: {
        Authorization: "Bearer " + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    if (response.status == 401) {
      this.navigateLogin();
      return;
    }
    const responseJson = await response.json();
    const tokenNew = response.headers.get("x-auth-token");
    if (tokenNew != null) {
      await localStorage.setItem(ACCESS_TOKEN, tokenNew.toString());
    }
    return responseJson;
  }
}

export default BaseRepository;
