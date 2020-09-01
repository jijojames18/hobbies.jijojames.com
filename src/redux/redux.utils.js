export const mergeItems = (exisitingItems, newItems = []) => {
  let items = exisitingItems.map((item) => item);
  let itemIds = items.map((item) => item.id);

  for (let i = 0; i < newItems.length; i++) {
    const newItem = newItems[i];
    const exisitingIndex = itemIds.indexOf(newItem.id);
    if (exisitingIndex === -1) {
      items.push(newItem);
      itemIds.push(newItem.id);
    } else {
      items[exisitingIndex] = newItem;
    }
  }

  return items.sort((a, b) => b.id - a.id);
};
