export interface RespLoginAuth {
  token: string;
  name: string;
  email: string;
  expirationTimestamp: number;
  internalDeviceId: number;
  isValidated: boolean | null;
  userId: number;
  deviceId: string;
  companyId: number;
}
