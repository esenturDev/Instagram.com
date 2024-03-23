import { api as index } from "../index";

const api = index.injectEndpoints({
	endpoints: (build) => ({
		postRegister: build.mutation<AUTH.RegisterResponse, AUTH.RegisterRequest>({
			query: (newUsers) => ({
				url: "",
				method: "POST",
				body: newUsers,
			}),
			invalidatesTags: ["auth"],
		}),
		postLogin: build.mutation<AUTH.LoginResponse, AUTH.LoginRequest>({
			query: (newUsers) => ({
				url: "",
				method: "POST",
				body: newUsers,
			}),
			invalidatesTags: ["auth"],
		}),
		getUsers: build.query<AUTH.GetUsersResponse, AUTH.GetUsersRequest>({
			query: () => ({
				url: "",
				method: "GET",
			}),
			providesTags: ["auth"],
		}),
	}),
});

export const {
	usePostRegisterMutation,
	usePostLoginMutation,
	useGetUsersQuery,
} = api;
