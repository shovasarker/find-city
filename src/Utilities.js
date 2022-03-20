export const compareFunction = (sortBy, asec) => {
  return (obj1, obj2) => {
    let value = 0
    if (sortBy === 'name') {
      if (obj1[sortBy].common > obj2[sortBy].common) {
        value = 1
      } else if (obj1[sortBy].common < obj2[sortBy].common) {
        value = -1
      } else {
        value = 0
      }
    } else {
      if (obj2[sortBy] >= obj1[sortBy]) {
        value = 1
      } else {
        value = -1
      }
    }
    return asec ? value : value * -1
  }
}
