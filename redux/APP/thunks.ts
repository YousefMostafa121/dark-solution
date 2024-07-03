import { createAsyncThunk } from "@reduxjs/toolkit";
import APPAPI from "./api";

const doContactUs = createAsyncThunk(
  "app/doContactUs",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await APPAPI.contactUs(data);
      return {
        data: response.data,
      };
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
const doApplyForFranchise = createAsyncThunk(
  "app/doApplyForFranchise",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await APPAPI.applyForFranchise(data);
      return {
        data: response.data,
      };
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
const doGetAllProducts = createAsyncThunk(
  "app/doGetAllProducts",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await APPAPI.getAllProducts();
      return {
        data: response.data,
      };
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const doCreateWholeSale = createAsyncThunk(
  "app/doCreateWholeSale",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await APPAPI.createWholeSale(data);
      return {
        data: response.data,
      };
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const thunks = {
  doContactUs,
  doApplyForFranchise,
  doGetAllProducts,
  doCreateWholeSale,
};

export default thunks;
