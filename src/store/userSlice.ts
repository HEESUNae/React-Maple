import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosApi } from './axios';

interface UserState {
  uuid: string;
  user: any;
  error: string | unknown;
}

const initialState: UserState = {
  uuid: '',
  user: [],
  error: '',
};

// 유저 uuid
export const fetchUuid = createAsyncThunk('user/userUuid', async (nickname: string) => {
  try {
    const res = await axiosApi.get(`/maplestory/v1/id?character_name=${nickname}`);
    return res.data.ocid;
  } catch (err) {
    alert('존재하지 않은 유저입니다.');
    throw err;
  }
});

// 현재 날짜
export const nowDate = async () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const date = 21;
  return `${year}-${month}-${date}`;
};

// 유저 정보
export const userInfo = createAsyncThunk('user/getUserInfo', async (ocid: string) => {
  try {
    const res = await axiosApi.get(`/maplestory/v1/character/basic?ocid=${ocid}&date=${await nowDate()}`);
    if (res.data.character_name === null) {
      alert('캐릭터 정보가 없습니다.');
    }
    return res.data;
  } catch (err) {
    alert('캐릭터 정보가 없습니다.');
    throw err;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUuid.fulfilled, (state, action) => {
      state.uuid = action.payload;
    });
    builder.addCase(userInfo.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

// export const {} = userSlice.actions;
export default userSlice.reducer;
