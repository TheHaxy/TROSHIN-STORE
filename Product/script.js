const products = [
    {
        name: "Белый приталенный пиджак",
        price: 7990,
        type: 1
    },
    {
        name: "Пиджак TROSHIN DESIGN",
        price: 9521,
        type: 1
    },
    {
        name: "Брюки TROSHIN DESIGN",
        price: 1235,
        type: 3
    },
    {
        name: "Белые брюки",
        price: 1920,
        type: 3
    },
    {
        name: "Рубашка TROSHIN DESIGN",
        price: 1990,
        type: 2
    },
    {
        name: "Рубашка для высоких",
        price: 6990,
        type: 2
    },
    {
        name: "Броги TROSHIN DESIGN",
        price: 7120,
        type: 4
    },
    {
        name: "Туфли TROSHIN DESIGN",
        price: 4120,
        type: 4
    },

]

function renderProduct(index, product) {
    produtctsHTML += `<div class="products ${index}" value="${index}" data-category="1">
                        <img src="../img/img${index}.jpg" alt="Изображение" class="product-img">
                        <h3 class="product-name">${product.name}</h3>
                        <a href="products/product${index}.html" class="product-button"><button>${product.price}₽</button></a>
                      </div>`
}

const catalogContainer = document.querySelector(`[data-type="catalog"]`)
const chooseContainer = document.querySelector(`[data-type="choose"]`)
let produtctsHTML = ''

products.forEach((product, index) => {
    console.log(product)
    index += 1
    renderProduct(index, product)
})
catalogContainer.innerHTML = produtctsHTML

chooseContainer.addEventListener('click', (e) => {
    e.preventDefault()
    const value = e.target.getAttribute('value')
    if (!value) return
    produtctsHTML = ''
    catalogContainer.innerHTML = produtctsHTML

    products.forEach((product, index) => {
        if (+value && product.type !== +value) return
        index += 1
        renderProduct(index, product)

    })
    catalogContainer.innerHTML = produtctsHTML

})

