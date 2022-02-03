interface queryParams {
    username: string;
    password: string;
    db: string;
    query: string;
    data: any;
}

interface dbService<T> {
    getOne(): Promise<T>;
    getFromFilter(f: filter[]): T[];
    castToType(ut: any): T;
}

interface filter {
    type: string;
    func: string;
    value: string;
}

type thing = {
    temp: string;
};
