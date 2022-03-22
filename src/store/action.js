export function saveList(list) {
    console.log("funciona")
    return {
      type: 'SAVE_LIST',
      payload: list,
    }
  }