import http from "../http-common";

const getAll = () => {
  return http.get("/posts");
}

const get = id => {
  return http.get("/");
}

const create = data => {
  return http.post("/create_post", data);
}

const update = (id, data) => {
  return http.put("/", data);
}

const remove = id => {
  return http.delete("/");
}

const removeAll = () => {
  return http.delete("/");
}

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};