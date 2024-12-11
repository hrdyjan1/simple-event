type SignInUserQueryArg = {
  email: string;
  password: string;
};

type SignUpUserQueryArg = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

type DashboardGetDetailQueryArg = {
  id: string;
};

type DashboardCreateDetailMutationArg = {
  title: string;
  description: string;
  startsAt: string;
  capacity: number;
};

type AttendEventMutationArq = {
  id: string;
};

type UnAttendEventMutationArq = {
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
  owner: UserResponse;
};


export {
  type UserResponse,
  type SignInUserQueryArg,
  type SignUpUserQueryArg,
  type AttendEventMutationArq,
  type DashboardDetailResponse,
  type UnAttendEventMutationArq,
  type DashboardGetDetailQueryArg,
  type DashboardCreateDetailMutationArg,
};
