import { signInWithPopup, GithubAuthProvider } from "firebase/auth";

import { auth } from '../config';

const provider = new GithubAuthProvider();

export const signInWithGithubPopup = () => signInWithPopup(auth, provider);