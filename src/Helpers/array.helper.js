export const sum = (arr: []) => arr.reduce((acc, val) => acc + val, 0);

export const nextItem = (arr: [], index: number) => {
    return arr.length === index + 1
        ? arr[0]
        : arr[index + 1]
}

export const prevItem = (arr: [], index: number) => {
    return index === 0
        ? arr[arr.length - 1]
        : arr[index - 1]
}

export const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};
