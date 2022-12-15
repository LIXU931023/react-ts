import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../../service/login';
import { LoginParams } from '../../service/type';


export const fetchLoginUser = createAsyncThunk('user/loginInfo', async (params: LoginParams) => {
  try {
    const result = await loginUser(params);
    return result
  } catch (error) {
    return error;
  }
})

interface IUserInfo {
  nickname: string;
  phoneNumber: string;
  token: string;
}

const localUser = localStorage.getItem('user');

const initUserInfo:IUserInfo = localUser && JSON.parse(localUser) || {
  nickname: '',
  phoneNumber: '',
  token: '',
} 

export const userSlice = createSlice({
  name: 'user',
  initialState: initUserInfo,
  reducers: {
    clearInfo(state, action: PayloadAction<IUserInfo>) {
      const { nickname, phoneNumber, token } = action.payload
      state.nickname =  nickname;
      state.phoneNumber =  phoneNumber;
      state.token =  token;
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchLoginUser.pending, () => {
    })
    .addCase(fetchLoginUser.fulfilled, (state, action: PayloadAction<IUserInfo>) => {
      const { nickname, phoneNumber, token } = action.payload
      state.nickname =  nickname;
      state.phoneNumber =  phoneNumber;
      state.token =  token;
      localStorage.setItem('user', JSON.stringify(action.payload));
    })
    .addCase(fetchLoginUser.rejected, () => {
    })
  }
})


export const { clearInfo } = userSlice.actions;

export default userSlice.reducer;

