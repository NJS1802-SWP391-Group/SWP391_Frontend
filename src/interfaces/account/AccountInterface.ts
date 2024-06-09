export interface AccountInfo {
  success: boolean;
  result: Result;
}

export interface Result {
  user: User;
}

export interface User {
  accountId: number;
  userName: string;
  password: string;
  status: string;
  roleName: string;
  customerId: number;
}
