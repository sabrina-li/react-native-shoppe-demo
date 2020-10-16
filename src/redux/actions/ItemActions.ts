export const ItemActions = {
  addItem: item => (
    {
      type: 'ADD_ITEM',
      payload: item,
    }
  ),

  removeItem: item => (
    {
      type: 'REMOVE_ITEM',
      payload: item,
    }
  )
}