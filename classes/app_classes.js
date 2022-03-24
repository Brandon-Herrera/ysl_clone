const Category = require("../models/category");

class LoadDB {
    constructor() {

    }

    async _findLevelCategories(level) {
        const categories = await Category.find({})
        return categories.filter(cat => cat['ancestors'].length === level)
    }

    get firstLevelCategories() {
        return this._findLevelCategories(1)
    }

    get secondLevelCategories() {
        return this._findLevelCategories(2)
    }

    get thirdLevelCategories() {
        return this._findLevelCategories(3)
    }

    get fourthLevelCategories() {
        return this._findLevelCategories(4)
    }
}

module.exports.LoadDB = LoadDB;