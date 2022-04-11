// itemsCache = [1, 2, 3];
// newItems = [4, 5, 6];
// const res = [...itemsCache, ...newItems];

// // console.log(res);
// // console.log(newItems);
// // console.log(itemsCache);


// children = [7, 8, 9];

// raritys = ['SSR', 'SR', 'R']


// console.log(...raritys);



selectedKeys = [1, 2, 3];
diff = [3];
// console.log([...selectedKeys, ...diff])

console.log([selectedKeys.filter((v) => { return diff.indexOf(v) == -1 })]);
