class CategorySeedsClass {
    constructor(categories) {
        this.categories = categories
    }

    categoriesByLevel(sidebar, level) {
        const filtered = this.categories.filter(e => 
            e['ancestors'][0] === sidebar &&
            e['ancestors'].length === level
        )
        return filtered
    }

    categoriesBySidebar(sidebar) {
        const filtered = this.categories.filter(e =>
            e['ancestors'][0] === sidebar
        )
        return filtered
    }
    
    filterCategories(sidebar, level, lastAncestor) {
        const filtered = this.categories.filter(e => 
            e['ancestors'][0] === sidebar &&
            e['ancestors'].length === level &&
            e['ancestors'][e.ancestors.length - 1] === lastAncestor
        )
        return filtered
    }

    filteredCategories(sidebar, level) {
        const filtered = this.categories.filter(e => 
            e['ancestors'][0] === sidebar &&
            e['ancestors'].length === level
        )
        return filtered
    }

    filterByAncestors(...ancestors) {
        const filtered = this.categories.filter(e => 
            e['ancestors'] === ancestors
        )
        return filtered
    }

    *index(sidebar, level) {
        const filtered = this.filteredCategories(sidebar, level)
        for (let i = 0; i < filtered.length; i++) {
            yield filtered[i]
        }
    }
    
    catsByAncestors(...cats) {
        const ancestors = []
        ancestors.push(...cats)
        return this.categories.filter(e => 
            e['ancestors'].length === ancestors.length &&
            e['ancestors'].every((element, i) => {
                return element === ancestors[i]
            }))
    }
}

module.exports.CategorySeedsClass = CategorySeedsClass

