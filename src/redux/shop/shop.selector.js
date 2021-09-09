import { createSelector } from "reselect"

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = (collectionId) => (
    createSelector(
        [selectShop],
        shop => shop.collections.find(collection => (collection.routeName === collectionId))
)
)