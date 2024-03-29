export const removeItem = id => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id,
    },
  };
};

export const addItem = itemContent => {
  const id = `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;
  return {
    type: 'ADD_ITEM',
    payload: {
      item: {
        id,
        ...itemContent,
      },
    },
  };
};

export const changeValue = value => {
  return {
    type: 'CHANGE_VALUE',
    payload: {
      value,
    },
  };
};
