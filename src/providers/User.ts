export default class User {
  static isAuthenticated (): boolean {
    const user = localStorage.getItem('user')

    return !!user
  }
}
