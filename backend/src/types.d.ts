interface QueryParams {
    username: string;
    password: string;
    db: string;
    query: string;
    data: any;
}

interface DbService<T> {
    getAll(): Promise<T[]>;
    getFromFilter(filters: Filter[]): Promise<T[]>;
}

interface Filter {
    type: string;
    func: string;
    value: string;
}

type Thing = {
    temp: string;
};

type User = {
    id: number,
    username: string;
    email: string;
    passwordHash: string
}
