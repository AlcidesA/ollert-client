interface AuthUser {
  token: string;
  user: {
    id: number;
    email: string;
    name: string
  }
}

export default class User {
  static isAuthenticated (): boolean {
    const user = localStorage.getItem('user')

    return !!user
  }

  static get (): AuthUser {
    const user = localStorage.getItem('user')

    return JSON.parse(user ?? '{}')
  }

  static logout (): void {
    localStorage.removeItem('user')

    window.location.reload()
  }
}
