type LoginUserQueryArg = {
  email: string;
  password: string;
};

type UserResponse = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export { type LoginUserQueryArg, type UserResponse };
