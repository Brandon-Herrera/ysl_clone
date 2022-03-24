const Category = require("../models/category");

class LoadDB {
    constructor(sidebar, level) {
        this.sidebar = sidebar;
        this.level = level;
    }

    set setSidebar(newSidebar) {
        this.sidebar = newSidebar
    }

    set setLevel(newLevel) {
        this.level = newLevel
    }

    async findCategories() {
        const categories = await Category.find({ancestors: this.sidebar, level: this.level})
        return categories
    }

    async findCategoriesByLevel(level) {
        this.level = level
        const categories = await Category.find({level: this.level})
        return categories
    }

    async findCategoriesBySidebar(sidebar) {
        this.sidebar = sidebar
        const categories = await Category.find({ancestors: sidebar})
        return categories
    }
}

module.exports.LoadDB = LoadDB;