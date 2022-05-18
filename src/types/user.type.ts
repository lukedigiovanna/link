export interface User {
    email: string;
    name: string;
    firstName: string;
    lastName: string;
    createdAt: Date | null;
    avatarURL: string;
}

export const UserNotFound = (attemptedUsername: string) => {
    return {
        email: "",
        name: attemptedUsername,
        firstName: "",
        lastName: "",
        createdAt: null,
        avatarURL: ""
    }
}

export const UserLoading = () => {
    return {
        email: "",
        name: "loading",
        firstName: "Loading...",
        lastName: "",
        createdAt: null,
        avatarURL: ""
    }
}