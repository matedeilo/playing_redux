let deepFreeze = require('deep-freeze');

const addCounter = (list) => {
    //list.push(0);
    //return list;
    return [...list, 0]
}

const removeCounter = (list, index) => {
    // list.splice(index, 1);
    //return list.slice(0, index).concat(list.slice(index + 1));
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ]
}

const incrementCounter = (list, index) => {
    //list[index]++
    //return list.slice(0, index).concat([list[index] + 1]).concat(list.slice(index + 1))
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ]
}

test('add counter', () => {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore)

    expect(addCounter(listBefore)).toEqual(listAfter)
});

test('remove counter', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];

    deepFreeze(listBefore)

    expect(removeCounter(listBefore, 1)).toEqual(listAfter)
});

test('increment counter', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];

    deepFreeze(listBefore)

    expect(incrementCounter(listBefore, 1)).toEqual(listAfter)
});