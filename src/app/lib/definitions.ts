export type MyProjects = {
    id: string;
    customer_id: string;
    amount: number;
    date: string;
    status: 'open' | 'close';
};