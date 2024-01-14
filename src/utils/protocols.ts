export type User = {
    id: number,
    name: string,
    nickname: string,
    email: string,
    password: string
};

export type SignUpParams = Omit<User, 'id'>

export type CreateUserParams = {
    id: number,
    name: string,
    nickname: string,
    email: string,
    password: string,
    confirmṔassword: string
};

export type ApplicationError = {
    name: string;
    message: string;
  };

export type RequestError = {
    status: number;
    data: object | null;
    statusText: string;
    name: string;
    message: string;
  };