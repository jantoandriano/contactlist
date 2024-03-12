export type Item = {
    id: number
    first_name: string;
    last_name: string;
    job: string;
    description: string;
    favorite: boolean;
}

type Items = Array<Item>;

export function filterData(array: Items, query: string) {
    if (array) {
        const searchTerms = query.toLowerCase().split(' ');

        return array.filter(item => {
            return searchTerms.every(term =>
                Object.values(item).some(value =>
                    typeof value === 'string' && value.toLowerCase().includes(term)
                )
            );
        });
    }
}