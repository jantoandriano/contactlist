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

export function sortData(array: Items, type: string) {
    if (array) {
        return array.sort((a, b) => {
            let fa = a.first_name.toLowerCase(),
                fb = b.first_name.toLowerCase();

            if (type === 'asc') {
                if (fa < fb) {
                    return -1;
                }
            } else {
                if (fa > fb) {
                    return 1;
                }
            }
            return 0;
        });
    }
}