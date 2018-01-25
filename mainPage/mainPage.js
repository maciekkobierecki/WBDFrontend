var categories=$("#sidebar")[0];
var content=$("#content")[0];


function fetchCategories()
{
    //pobieranie jsona z kategoriami

    categories.append(createCategory("d", 30));
    

}



function createCategory(name, count)
{
    console.log("creating category");
    var $newDiv = $("<div/>")   // creates a div element
                 .attr("id", "someID")  // adds the id
                 .addClass("optionL")   // add a class
                 .html(name+"("+count+")");
    return $newDiv[0];
}

function fetchProducts(category)
{
    //pobierz produkty

    
}

function createProduct(name, price, description)
{
    //image
    var $image=$("<div />")
    .addClass("image")
    .html("<img src='image.jpg'>");
    //name
    var $name=$("<div />")
    .addClass("name")
    .html(name);
    //price
    var $price=$("<div />")
    .addClass("price")
    .html(price);
    var $newProduct= $("<div />")
    .addClass("product")
    .append($image)
    .append($name)
    .append($price);
    
    return $newProduct;
    
}

function appendProduct(product)
{
    content.append(product);
}



//metody testowe

//testowa
function addCategory(name, count)
{
    categories.append(createCategory(name, count));
}

function addProduct(name, price, description)
{
    var newProduct=createProduct(name, price,description);
    appendProduct(newProduct[0]);
}