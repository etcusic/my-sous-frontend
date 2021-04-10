export const assembleSupplies = (supplyPartials, supplyInfo) => {
    // ID attribute may be duplicated here - need to weed out unless serializers fix issue on backend
    const dictionary = {}
    supplyInfo.forEach(supply => dictionary[supply.id] = supply)
    return supplyPartials.map(sup => Object.assign(sup, dictionary[sup.supply_id]))
}