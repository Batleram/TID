interface DbModel<T> {
    getAll(): Promise<T[]>;
    getFromFilter(filters: Filter[]): Promise<T[]>;
}
