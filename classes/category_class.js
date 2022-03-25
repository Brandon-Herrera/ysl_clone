class CategorySeedsClass {
    constructor(categories) {
        this.categories = categories
    }
    
    filterCategories(sidebar, level) {
        const filtered = this.categories.filter(e => 
            e['ancestors'][0] === sidebar &&
            e['ancestors'].length === level
        )
        return filtered
    }
}

module.exports.CategorySeedsClass = CategorySeedsClass

