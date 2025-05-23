"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  apiClient: () => apiClient,
  getImageById: () => getImageById,
  searchImages: () => searchImages
});
module.exports = __toCommonJS(index_exports);
var import_axios = __toESM(require("axios"));
var apiClient = import_axios.default.create({
  baseURL: "https://api.example.com",
  timeout: 1e4,
  headers: {
    "Content-Type": "application/json"
  }
});
var API_KEY = "49274364-dd165c93bb99f0825fe77253d";
var BASE_URL = "https://pixabay.com/api/";
var searchImages = async (params = {}) => {
  const response = await import_axios.default.get(BASE_URL, {
    params: {
      key: API_KEY,
      ...params
    }
  });
  return response.data;
};
var getImageById = async (id) => {
  const response = await import_axios.default.get(BASE_URL, {
    params: {
      key: API_KEY,
      id
    }
  });
  return response.data;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  apiClient,
  getImageById,
  searchImages
});
