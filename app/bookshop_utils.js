function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(first, second) {
    return (first + " " + second);
}

function makeHalfPrice(price) {
    return price * 0.5;
}

function countBooks(books) {
    return (books.length);
}

function inStock(book) {
    if ((book.quantity)>0) {
    return true;
    }
    else {
        return false;
    }
}

function getTotalOrderPrice(price, quantity) {
    let calc = (price * quantity) * 1.2
    let fixed = Math.round(calc * 1e2) / 1e2
    return fixed;
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    inStock,
    getTotalOrderPrice
};