import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAccount, getAllAccounts } from "./UserAPI";

// Interface for User Account
export interface UserAccount {
    user: UserProps;
    users: UserProps[];
    status: 'idle' | 'loading' | 'rejected' | 'fulfilled'
}

// Interface for User Properties
export interface UserProps {
    name: string;
    _id: string;
    accountType: 'admin' | 'user';
}

// State
const initialState: UserAccount = {
    user: {} as UserProps,
    users: [] as UserProps[],
    status: 'idle'
}

export const fetchUsersAsync = createAsyncThunk(
    'userSlice/fetchUsersAsync',
    async (_id: string) => {
        const response = await getAccount(_id);

        return response.data as UserProps;
    }
)

export const fetchAllUsersAsync = createAsyncThunk(
    'userSlice/fetchAllUsersAsync',
    async () => {
        const response = await getAllAccounts();

        return response.data as UserProps[];
    }
)

const UserSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
 
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsersAsync.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = 'fulfilled';
            })
            .addCase(fetchUsersAsync.rejected, (state) => {
                state.status = 'rejected';
            })
            .addCase(fetchAllUsersAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllUsersAsync.fulfilled, (state, action) => {
                state.users = action.payload;
                state.status = 'fulfilled';
            })
            .addCase(fetchAllUsersAsync.rejected, (state) => {
                state.status = 'rejected';
            })
    }
})

export default UserSlice.reducer;