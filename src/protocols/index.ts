export type User = {
    id: number,
    name: string,
    nickname: string,
    email: string,
    password: string,
    createdAt: string
}

export type UserCreateOrUpdate = Omit<User, "id" | "createdAt">

export type SignInParams = Pick<User, 'email' | 'password'>;

export type SignInResult = {
  user: Pick<User, 'id' | 'email'>;
  token: string;
};
