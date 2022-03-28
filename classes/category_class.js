class CategorySeedsClass {
    constructor(categories) {
        this.categories = categories
    }
    
    filterCategories(sidebar, level, lastAncestor) {
        const filtered = this.categories.filter(e => 
            e['ancestors'][0] === sidebar &&
            e['ancestors'].length === level &&
            e['ancestors'][e.ancestors.length - 1] === lastAncestor
        )
        return filtered
    }
}

module.exports.CategorySeedsClass = CategorySeedsClass

