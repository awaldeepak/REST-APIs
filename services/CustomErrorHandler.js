export class CustomErrorHandler extends Error {

    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    static alreadyExist(message='Email already exists') {

        return new CustomErrorHandler(409, message);
    }

    static wrongCredentials(message='Username or password is incorrect!') {

        return new CustomErrorHandler(401, message);
    }

    static unAuthorized(message='Unauthorized') {

        return new CustomErrorHandler(401, message);
    }

    static notFound(message='404 Not Found') {

        return new CustomErrorHandler(404, message);
    }
}