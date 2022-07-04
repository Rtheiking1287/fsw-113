const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

]

// list of each part number and qty for check-off in the "detailsList" element
let itemList = '<ul>'
parts.forEach(function(parts) {
    itemList += `<li>${parts.qty} (${parts.partNbr}) - ${parts.partDescr}</li>`
});
itemList += '</ul>'
document.querySelector('#detailsList').innerHTML = itemList

// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element
const specialHandling = parts.filter(function(parts) {
    return parts.aisle == 'B3'
})

let specialPackaging = '<ol>'
specialHandling.forEach(function(parts) {
    specialPackaging += `<li>Item: ${parts.partNbr} / Qty:${parts.qty}</li>`
});
specialPackaging += '</ol>'
document.querySelector('#specialPackaging').innerHTML = specialPackaging

// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element
const hazard = parts.some(function(parts) {
    return parts.aisle == 'J4'
})
if (hazard) {
    document.querySelector('#hazardousMaterials').innerText = 'Hazardous Materials included\n\rBring Gloves'
} else {
    document.querySelector('#hazardousMaterials').innerText = 'No hazardous materials'
}

// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go dirctly to aisle H1
const smallParts = parts.some(function(parts) {
    return parts.aisle == 'H1'
})
if (smallParts) {
    document.querySelector('#smallItemsOnly').innerText = 'Employees should take a basket and go directly to aisle H1'
} else {
    document.querySelector('#smallItemsOnly').innerText = 'No small items'
}

// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element
const largeParts = parts.some(function(parts) {
    return parts.aisle == 'S','T','U'
})
if (largeParts) {
    document.querySelector('#forkiftNeeded').innerText = 'Employees should reserve a forklift'
} else {
    document.querySelector('#forkiftNeeded').innerText = 'No forklift needed'
}

// sum up the total number of parts and append that number to the text already in "totalItems" element
const totalParts = parts.reduce(function(currentTotal, parts) {
    return parts.qty + currentTotal
}, 
0)
document.querySelector('#totalItems').innerText = `Total number of parts in order: ${(totalParts + parts.length).toLocaleString()}`