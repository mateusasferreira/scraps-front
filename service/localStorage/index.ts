
class localStorageService {
  static get(key: string): string | null {
    let item = localStorage.getItem(key)

    if(item) {
      item = JSON.parse(item)
    }

    return item
  }

  static set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export default localStorageService