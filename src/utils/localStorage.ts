export const appLocalStorage = {
  getValue(key: string) {
    if (key) {
      const VALUE = window.localStorage.getItem(key)
      if (VALUE !== null && VALUE !== '') {
        try {
          return JSON.parse(VALUE)
        } catch {
          return VALUE
        }
      }
    }
    return ''
  },
  remove(key: string) {
    if (key) {
      window.localStorage.removeItem(key)
    }
  },
  setValue(key: string, value: any) {
    if (key && value) {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }
}
