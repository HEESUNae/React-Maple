import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosApi } from './axios';

const initialState = {
  equipmentList: [],
};

export const fetchEquipment = createAsyncThunk('equipment/getEquiment', async (ocid: string) => {
  try {
    const res = await axiosApi.get(`/maplestory/v1/character/item-equipment?ocid=${ocid}&date=2023-12-21`);
    return res.data;
  } catch (err) {
    throw err;
  }
});

export const equipmentSlice = createSlice({
  name: 'equipment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEquipment.fulfilled, (state, action) => {
      state.equipmentList = action.payload.item_equipment;
    });
  },
});

export default equipmentSlice.reducer;
