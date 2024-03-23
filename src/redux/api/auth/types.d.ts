/* eslint-disable @typescript-eslint/no-unused-vars */
namespace AUTH {
  type RegisterRequest = {
    email: string;
    password: string;
    photo: string;
    isAuthResult?: boolean;
  };
  type RegisterResponse = {
    _id: string;
    email: string;
    password: string;
    photo: string;
    isAuthResult?: boolean;
  }

  type LoginRequest = {
    email: string;
    password: string;
    isAuthResult?: boolean;
  };
  type LoginResponse = {
    _id: string;
    email: string;
    password: string;
    isAuthResult?: boolean;
  }

  type GetUsersRequest = void;
  type GetUsersResponse = {
    _id: string;
    email: string;
    password: string;
    photo: string;
    isAuthResult?: boolean;
  }[];
}