import { Reaction } from "./reactions.type";

export interface User {
    email: string;
    name: string;
    firstName: string;
    lastName: string;
    createdAt: Date | null;
    avatarURL: string;
    reactions: Reaction[]
}

export const UserNotFound = (attemptedUsername: string) => {
    return {
        email: "",
        name: attemptedUsername,
        firstName: "",
        lastName: "",
        createdAt: null,
        avatarURL: "",
        reactions: []
    }
}

export const UserLoading = () => {
    return {
        email: "",
        name: "loading",
        firstName: "Loading...",
        lastName: "",
        createdAt: null,
        avatarURL: "",
        reactions: []
    }
}