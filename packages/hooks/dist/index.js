"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  useImageById: () => useImageById,
  useSearchImages: () => useSearchImages
});
module.exports = __toCommonJS(index_exports);

// src/usePixabay.ts
var import_react_query = require("@tanstack/react-query");
var import_api = require("@myvideo/api");
function useSearchImages(params = {}, options = {}) {
  return (0, import_react_query.useQuery)({
    queryKey: ["pixabay", "search", params],
    queryFn: () => (0, import_api.searchImages)(params),
    staleTime: 5 * 60 * 1e3,
    ...options
  });
}
function useImageById(id, options = {}) {
  return (0, import_react_query.useQuery)({
    queryKey: ["pixabay", "image", id],
    queryFn: () => (0, import_api.getImageById)(id),
    enabled: Boolean(id),
    staleTime: 10 * 60 * 1e3,
    ...options
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useImageById,
  useSearchImages
});
