type LoginUserQueryArg = {
  email: string;
  password: string;
};

type DashboardDetailQueryArg = {
  id: string;
};

type UserResponse = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

type DashboardDetailResponse = {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  capacity: number;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  attendees: UserResponse[];
  owner: UserResponse[];
};

export {
  type UserResponse,
  type LoginUserQueryArg,
  type DashboardDetailResponse,
  type DashboardDetailQueryArg,
};
