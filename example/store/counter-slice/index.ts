import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchNewData = createAsyncThunk('counter/fetchNewData', async (params, action) => {
  try {
    await new Promise((resolve) => setTimeout(() => {
      resolve(111);
    }, 1500))
    return action.fulfillWithValue(12)
  } catch (error) {
    return action.rejectWithValue(-1);
  }
})

interface CounterState {
  value: number;
  status: 'init' | 'loading' | 'success' | 'failed',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'init',
  } as CounterState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  },
  extraReducers (builder) {
    builder.addCase(fetchNewData.pending, (state, action) => {
      state.status = 'loading';
    })
    .addCase(fetchNewData.fulfilled, (state, action) => {
      state.status = 'success';
      state.value += action.payload
    })
    .addCase(fetchNewData.rejected, (state, action) => {
      state.status = 'failed';
    })
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;


export default counterSlice.reducer