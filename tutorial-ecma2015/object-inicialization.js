

/*
eg. Create product


function createProduct(name, category, price) {
    let pagetitle = category +  " > " + name;
    return { name: name, category: category, price: price, pagetitle: pagetitle };
}

*/

function createProduct(name, category, price) {
    let pagetitle = category +  " > " + name;
    return { name, category, price, pagetitle };
}

var product = createProduct("mac", "computer", "2000");
