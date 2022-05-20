import Fuse from 'fuse.js';

function fuzzySearch(searchTerm: string | undefined, config: any, searchList: any[]) {
    if (!searchTerm) {
        return searchList;
    }
    const fuse = new Fuse(searchList, config);
    const result = fuse.search(searchTerm) as any[];
    return result.map(r => r.item);
}

export { fuzzySearch };