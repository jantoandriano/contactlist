export type Item = {
    id: number
    first_name: string;
    last_name: string;
    job: string;
    description: string;
    favorite: boolean;
}

type Items = Array<Item>;

export const filterData = (items: Items | undefined, query: string) => {
    if (items === undefined || !items.length) {
        return []
    }

    query = query.toLowerCase();
    return items.filter(item =>
        item.first_name.split(' ').some(word =>
            word.toLowerCase().startsWith(query)
        )
    );

}