class Storage {
    #items = [];

    constructor(items) {
        items.forEach(item => this.#items.push(item));
    }
    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        if (this.#items.includes(newItem)===false)
            this.#items.push(newItem);
    }
    removeItem(itemToRemove) {
        const idx = this.#items.indexOf(itemToRemove);
        if (idx >= 0) this.#items.splice(idx, 1);
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
console.log("--------------------END TASK 2--------------------");