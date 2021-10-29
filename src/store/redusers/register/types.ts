export interface Register {
    name: string;
    age: number;
    gender: string;
    phoneNumber: number;
    otp: string;
    receiveMarketing: boolean;
}

export interface RegisterState {
    RegisterInfo: Register;
    isLoading: boolean;
    error: string;
}

export enum RegisterActionEnum {
    SET_NAME = 'SET_NAME',
    SET_AGE = 'SET_AGE',
    SET_GENDER = 'SET_GENDER',
    SET_NUMBER = 'SET_NUMBER',
    SET_OTP = 'SET_OTP',
    SET_MARKETING = 'SET_MARKETING',
    IS_EMPTY = 'IS_EMPTY',
    SIGN_UP = 'SIGN_UP'
}

export interface SetNameAction {
    type: RegisterActionEnum.SET_NAME;
    payload: string
}

export interface SetAgeAction {
    type: RegisterActionEnum.SET_AGE;
    payload: number;
}

export interface SetGenderAction {
    type: RegisterActionEnum.SET_GENDER;
    payload: string;
}

export interface SetOTPAction {
    type: RegisterActionEnum.SET_OTP;
    payload: number;
}

export interface SetMarketingAction {
    type: RegisterActionEnum.SET_MARKETING;
    payload: boolean;
}

export interface SetIsEmptyAction {
    type: RegisterActionEnum.IS_EMPTY;
    payload: boolean;
}

export interface SetSignUpAction {
    type: RegisterActionEnum.SIGN_UP;
    payload: boolean;
}

export type RegisterAction =
    SetNameAction |
    SetAgeAction |
    SetGenderAction |
    SetOTPAction |
    SetMarketingAction |
    SetIsEmptyAction |
    SetSignUpAction