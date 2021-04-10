export const assembleSupplies = (store, supplyInfo) => {
    const dictionary = {}
    supplyInfo.each(supply => dictionary[supply.id] = supply)
    store.supplies.map(sup => Object.assign(sup, dictionary[sup.supply_id]))
    return store
}