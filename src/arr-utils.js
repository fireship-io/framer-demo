// MacGuyver'd utility to generate && remove notifications
export const remove = (arr, item) => {
  const newArr = [...arr];
  newArr.splice(
    newArr.findIndex((i) => i === item),
    1
  );
  return newArr;
};

let newIndex = 0;
export const add = (arr, text, style) => {
  newIndex = newIndex + 1;
  return [...arr, { id: newIndex, text: text, style: style }];
};
