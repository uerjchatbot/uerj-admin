class LocalStorageService {
    getAuthData(token) {
        return localStorage.getItem(token);
    }
    setData(token, data) {
        localStorage.setItem(token, JSON.stringify(data));
    }
    clear() {
        localStorage.clear();
    }
    remove(token) {
        localStorage.removeItem(token);
    }
}
const localStorageService = new LocalStorageService();
export default localStorageService;
//# sourceMappingURL=local-storage.service.js.map