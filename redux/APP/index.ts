import { createSlice } from "@reduxjs/toolkit";
import { initialValue } from "./types";
import thunks from "./thunks";
import { RootState } from "../store";
import { toast } from "react-toastify";
// import { setCookie } from "cookies-next";

const slice = createSlice({
  name: "app",
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.doContactUs.fulfilled, (state, action) => {
      console.log(action, "fulfilled");
      toast.success(action.payload.data.message);
    });
    builder.addCase(thunks.doContactUs.rejected, (state, action: any) => {
      console.log(action, "rejected");
      // toast.error(action.payload.data.message);
    });
    builder.addCase(thunks.doApplyForFranchise.fulfilled, (state, action) => {
      console.log(action, "fulfilled");
      toast.success(action.payload.data.message);
    })
    builder.addCase(thunks.doApplyForFranchise.rejected, (state, action: any) => {
      console.log(action, "rejected");
      // toast.error(action.payload.errors.name);
    })
    builder.addCase(thunks.doGetAllProducts.fulfilled, (state, action) => {
      console.log(action, "fulfilled");
      state.allProducts = action.payload.data.data;
    })
    builder.addCase(thunks.doGetAllProducts.rejected, (state, action: any) => {
      console.log(action, "rejected");
    })
    builder.addCase(thunks.doCreateWholeSale.fulfilled, (state, action) => {
      console.log(action, "fulfilled");
      toast.success(action.payload.data.message);
    })
    builder.addCase(thunks.doCreateWholeSale.rejected, (state, action: any) => {
      console.log(action, "rejected");
    })
  },
});

export const SelectAllProducts = (state: RootState) => state.app.allProducts

const APP = {
  slice,
  thunks,
};

export default APP;
