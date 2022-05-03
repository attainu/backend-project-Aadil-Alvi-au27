
const getData = async () => {
    const productsResponse = await fetch('/items')
    const products = await productsResponse.json()
    return products
}

async function putData() {

    const data = await getData()
    const productEle = document.getElementById('products')
    var idCart = []

    data.map((product) => {
        const newEle = document.createElement('div')
        newEle.className = "card m-2"
        newEle.style = "width: 16rem;"
        idCart.push(product.Dish_name)
        // console.log(idCart, 'map')
        // newEle.innerText = `${product.Dish_name}`

        // if (product.imageUrl) {
        const imageTag = document.createElement(`img`)
        imageTag.src = product.imageUrl
        imageTag.className = "card-img-top"
        // imageTag.height = "200px"
        newEle.appendChild(imageTag)
        // }
        const divEle = document.createElement('div')
        divEle.className = "card-body"


        if (product.category == 'Veg') {
            cate = "../../img/veg.png"
        }
        else {
            cate = "../../img/non-veg.png"
        }

        // if (product.Dish_name) {
        const headerName = document.createElement('h5')
        headerName.className = "card-title card-header bg-dark text-danger"
        headerName.id = "dishName"
        headerName.innerHTML = `<img src="${cate}" height="25px" width=25px alt="Category"> ${product.Dish_name}`
        divEle.appendChild(headerName)
        // }
        // if (product.price) {
        const Cost = document.createElement('div')
        Cost.className = "card-title mt-2"
        Cost.id = "dishPrice"
        Cost.innerText = `Price: ₹ ${product.price} /-`
        divEle.appendChild(Cost)

        // }
        const cart = document.createElement('button')
        cart.className = "btn-outline-danger mt-2 btn-dark"
        cart.id = `addCartBtn${product.Dish_name}`
        cart.innerText = "Add to Cart"
        divEle.appendChild(cart)

        const CartBtn = document.getElementById(`addCartBtn${product.Dish_name}`)
        console.log(CartBtn);

        newEle.appendChild(divEle)

        productEle.appendChild(newEle)
    })

    addToCartHAndler()






    if (data) {
        // let idCart = product.Dish_name
        // console.log(idCart);
        idCart.map((id, idx) => {
            console.log(idx);
            // const dish = document.getElementById('dishName')
            // const price = document.getElementById('dishPrice')
            // const CartBtn = document.getElementById(`addCartBtn${idx}`)
            // CartBtn.addEventListener('click', function (e) {
            //     e.preventDefault()
            //     console.log(dish.innerHTML)
            //     console.log(price.innerText)


            // })

        })


    }


}

putData()
