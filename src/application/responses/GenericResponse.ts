export interface GenericResponse<T>{
    success: boolean;
    message?: string;
    data?: T;
}

export function createResponse<T>(success: boolean, message: string, data: T): GenericResponse<T> {
    return {
        success: success,
        message: message,
        data: data,
    };
}
