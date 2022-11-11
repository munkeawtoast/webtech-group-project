const sortfunctions = [
  {
    id: 0,
    name: 'priceLowToHigh',
    func: (oldEl, newEl) => {
      return oldEl - newEl
    }
  },
  {
    id: 1,
    name: 'priceHighToLow',
    func: (oldEl, newEl) => {
      return newEl - oldEl
    }
  },
  {
    id: 2,
    name: 'aToZ',
    func: (oldEl, newEl) => {
      const oldName = oldEl.displayName.toLowerCase()
      const newName = newEl.displayName.toLowerCase()
      if (oldName < newName) {
        return -1;
      }
      if (oldName > newName) {
          return 1;
      }
      return 0;
    }
  },
  {
    id: 2,
    name: 'aToZ',
    func: (oldEl, newEl) => {
      const oldName = oldEl.displayName.toLowerCase()
      const newName = newEl.displayName.toLowerCase()
      if (oldName < newName) {
        return 1;
      }
      if (oldName > newName) {
          return -1;
      }
      return 0;
    }
  },
]

export default sortfunctions