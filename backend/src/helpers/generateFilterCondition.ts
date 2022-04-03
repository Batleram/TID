export const generateFilterCondition = (acceptableFilters: string[], filters: Filter[]): FilterCondition => {
    const filterSections: string[] = [];
    const filterData: string[] = [];
    filters.forEach((f: Filter) => {
        if (!acceptableFilters.includes(f.type)) return
        filterSections.push(`? ${processFilterFunc(f.func)} ?`)
        filterData.push(f.type)
        filterData.push(f.value)
    })

    const filterCondition = filterSections.length > 0 ? filterSections.join(" and ") : ""

    return {
        condition: filterCondition,
        filterData: filterData
    }
}

const processFilterFunc = (f: Filter["func"]) => {
    switch (f) {
        case "neq":
            return "!="
        case "eq":
            return "="
        case "st":
            return "<"
        case "steq":
            return "<="
        case "gt":
            return ">"
        case "gteq":
            return ">="
        default:
            return "="
    }
}


