export const orderChildrens = (data) => {
    return data.sort(function (a, b) {
        return a.id - b.id;
    });
};
//# sourceMappingURL=order.js.map