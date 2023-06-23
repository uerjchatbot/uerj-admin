class LocalStorageService {
  public getAuthData(token: string): string | null {
    return localStorage.getItem(token);
  }

  public setData(token: string, data: any): void {
    localStorage.setItem(token, JSON.stringify(data));
  }

  public clear(): void {
    localStorage.clear();
  }

  public remove(token: string): void {
    localStorage.removeItem(token);
  }
}

const localStorageService = new LocalStorageService();

export default localStorageService;
