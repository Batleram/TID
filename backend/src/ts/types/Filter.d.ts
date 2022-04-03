type Filter = {
    type: string;
    func: "neq" | "eq" | "st" | "steq" | "gt" | "gteq",
    value: string;
}
