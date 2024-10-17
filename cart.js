class Product {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    increase(amount){
        this.quantity += amount;
    }

    decrease(amount){
        if(this.quantity < amount){
            console.log("Product is out of stock");

            return;
        }

        this.quantity -= amount;
    }
}

const car = new Product('car', 30000, 10);
const book = new Product('book', 150, 200);
const laptop = new Product('laptop', 50000, 5);
const shoes = new Product('shoes', 1200, 80);
const jacket = new Product('jacket', 2500, 40);
const smartphone = new Product('smartphone', 18000, 25);
const pen = new Product('pen', 15, 500);
const chips = new Product('chips', 50, 70);

class Cart {
    constructor(){
        this.products = [];
    }

    addProduct(product){
        if(product.quantity === 0){
            console.log("Product: " + product.name + " is out of stock :(");

            return;
        }

        this.products.push(product);
        product.decrease(1);
        console.log("Product " + product.name + " successfully added");
    }

    removeProduct(product){
        if(!this.products.find((cartProduct) => cartProduct.name === product.name)){
            console.log("Product: " + product.name + " is not in the cart");

            return;
        }

        this.products = this.products.filter((cartProduct) => cartProduct.name !== product.name);
        product.increase(1);
        console.log("Product " + product.name + " was removed from the cart");
    }

    getProductList(){
        console.log("In the cart: ");
        
        for(let i = 0; i < this.products.length; i++){
            console.log(this.products[i].name);
        }
    }

    getTotalPrice(){
        let totalPrice = this.products.reduce((total, product) => total + product.price, 0);

        console.log("Total: " + totalPrice + "$");
    }

    getQuantity(){
        console.log("There are " + this.products.length + " products in the cart");
    }
}

const myCart = new Cart();

myCart.addProduct(laptop); 
myCart.addProduct(smartphone); 
myCart.addProduct(shoes); 

myCart.getProductList(); 

myCart.getQuantity(); 

myCart.getTotalPrice(); 

myCart.removeProduct(smartphone); 

myCart.getProductList(); 

myCart.getQuantity(); 

myCart.getTotalPrice();
