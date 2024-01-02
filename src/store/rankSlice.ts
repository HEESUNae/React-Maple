import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosApi } from './axios';

const initialState = {
  dojang: [],
  rank: [],
};

// 현재 날짜
export const nowDate = () => {
  const year = new Date().getFullYear();
  const month = String(new Date().getMonth() + 1).padStart(2, '0');
  const date = String(new Date().getDate()).padStart(2, '0');
  return `${year}-${month}-${date}`;
};

// 무릉도장 랭킹
export const fetchDojang = createAsyncThunk('rank/dojang', async () => {
  try {
    const res = await axiosApi.get(`/maplestory/v1/ranking/dojang?date=${nowDate()}&difficulty=0&page=1`);
    let topTenArr = res.data.ranking.slice(0, 30);
    return topTenArr;
  } catch (err) {
    throw err;
  }
});

// 전체랭킹
export const fetchTotalRank = createAsyncThunk('rank/totalRank', async () => {
  try {
    const res = await axiosApi.get(`/maplestory/v1/ranking/overall?date=${nowDate()}&page=1`);
    let totalRank = res.data.ranking.slice(0, 8);
    return totalRank;
  } catch (err) {
    throw err;
  }
});

const rankSlice = createSlice({
  name: 'rank',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDojang.fulfilled, (state, action) => {
      state.dojang = action.payload;
    });
    builder.addCase(fetchTotalRank.fulfilled, (state, action) => {
      state.rank = action.payload;
    });
  },
});

export default rankSlice.reducer;
