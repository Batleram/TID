interface queryParams {
    username: string;
    password: string;
    db: string;
    query: string;
    data: any;
}

interface dbService<T> {
    getAll(): Promise<T[]>;
    getFromFilter(f: filter[]): T[];
}

interface filter {
    type: string;
    func: string;
    value: string;
}

type thing = {
    temp: string;
};
