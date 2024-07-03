import api from "../_axios";

const contactUs = (data: any) => api.post("/contact", data);
const applyForFranchise = (data: any) => api.post("/franchise", data);

const getAllProducts = () => api.get("/products");

const createWholeSale = (data: any) => api.post("/wholesale/create", data);

const APPAPI = {
  contactUs,
  applyForFranchise,
  getAllProducts,
  createWholeSale,
};
export default APPAPI;
