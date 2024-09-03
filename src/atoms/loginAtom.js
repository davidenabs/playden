import { atom } from "jotai";

export const defaultFormState = {
  email: '',
  password: '',
};

export const loginAtom = atom(defaultFormState);

export const loginFormErrorAtom = atom(defaultFormState);
