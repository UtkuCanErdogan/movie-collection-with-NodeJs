export class CustomError extends Error{
    public statusCode: number;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const actorNotFoundError = (code) => {
    return new CustomError("Actor Not Found!", code);
}

export const movieNotFoundError = (code) => {
    return new CustomError("Movie Not Found!", code);
}

export const userNotFoundError = (code) => {
    return new CustomError("User Not Found!", code);
}
