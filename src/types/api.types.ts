export interface ApiResponse<T = any> {
    status: 'success' | 'error' | 'fail';
    message?: string;
    data?: T;
    meta?: PaginationMeta;
    errors?: any;
}

export interface PaginationMeta {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

export interface ApiError {
    status: 'error';
    statusCode: number;
    message: string;
    errors?: any;
}
