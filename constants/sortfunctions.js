const sortfunctions = [
  {
    id: 0,
    type: 'priceLowToHigh',
    func: (currency) => {
      return (oldEl, newEl) => {
        console.log(currency)
        console.log(oldEl.price[currency], newEl.price[currency], oldEl.price[currency] - newEl.price[currency])
        return oldEl.price[currency] - newEl.price[currency]
      }
    }
  },
  {
    id: 1,
    type: 'priceHighToLow',
    func: (currency) => {
      return (oldEl, newEl) => oldEl.price[currency] - newEl.price[currency]
    }
  },
  {
    id: 2,
    type: 'aToZ',
    func: () => (oldEl, newEl) => {
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
    id: 3,
    type: 'aToZ',
    func: () => (oldEl, newEl) => {
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