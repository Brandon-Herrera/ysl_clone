const Category = require("../models/category");

class LoadDB {
    constructor() {

    }

    async findLevelCategories(level) {
        const categories = await Category.find({level: level})
        return categories
    }
}

module.exports.LoadDB = LoadDB;