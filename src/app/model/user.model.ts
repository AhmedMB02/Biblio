export interface User {
    username: string;
    password?: string; // Optional for security when passing around
    email?: string;
    role: 'admin' | 'user';
}
