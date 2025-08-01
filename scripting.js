

const products = [
    {
        "product_id":101,
        "product_name":"Mobile",
        "category":"Electronics",
        "price":15000,
        "description":"Smart Mobile",
        "seller_id":1000
    },
    {
        "product_id":102,
        "product_name":"cooker",
        "category":"Kitchen Accessories",
        "price":1500,
        "description":"Best Quality Steel",
        "seller_id":1021
    },
    {
        "product_id":103,
        "product_name":"Pencil",
        "category":"Stationary",
        "price":15,
        "description":"Darker Pencils",
        "seller_id":1023
    },
    {
        "product_id":104,
        "product_name":"Short Top",
        "category":"Dresses",
        "price":150,
        "description":"Pure Cotton Fabric",
        "seller_id":1024
    },
    {
        "product_id":105,
        "product_name":"Jeans",
        "category":"Dresses",
        "price":399,
        "description":"Good fabric with long life",
        "seller_id":1024
    },
    {
        "product_id":106,
        "product_name":"Laptop",
        "category":"Electronics",
        "price":35000,
        "description":"8GB ram ,&th Gen i7 Core Laptop",
        "seller_id":1000
    },
    {
        "product_id":107,
        "product_name":"Fan",
        "category":"Electronics",
        "price":3500,
        "description":"Good quality fan",
        "seller_id":1039
    }


];

const grid=document.getElementById("product_items");
const form=document.getElementById("form");
let filtered=0;
let edited=0;


//filter function
function applyFilter(){
    const selectValue=document.getElementById("filter_item").value;
    // console.log(selectValue);
    const filterProducts=products.filter(product => product.category.toLocaleLowerCase() === selectValue.toLocaleLowerCase())
    if(edited != 0){
         return filterProducts;
    }
    productsItems(filterProducts);
    filtered=1;
    if(selectValue === "All"){
        productsItems(products)
    }
   
}

function productsItems(products){
    grid.innerHTML="";
    
for(let i=0;i<products.length;i++){
    const {product_id,product_name,category,price,description,seller_id}=products[i];
    let {index,}=products.entries();

    
    const div=document.createElement("div");
    div.setAttribute("class","card-section");
    let p=document.createElement("p");
    p.innerHTML=`<span>Product ID</span> : ${product_id}`;
    div.append(p);

    let productidValue=document.createElement("p");
    productidValue.innerHTML=`<span>Product Name</span> : ${product_name}`;
    div.append(productidValue);

    let categoryValue=document.createElement("p");
    categoryValue.innerHTML=`<span>Category</span> : ${category}`;
    div.append(categoryValue);

    let priceValue=document.createElement("p");
    priceValue.innerHTML=`<span>Price</span> : ${price}`;
    // priceValue.style.te= red;
    div.append(priceValue);

    let discValue=document.createElement("p");
    discValue.innerHTML=`<span>Description</span> : ${description}`;
    div.append(discValue);

    let sellId=document.createElement("p");
    sellId.innerHTML=` <span>Seller ID</span>: ${seller_id}`;
    div.append(sellId);

    // div.innerHTML=`<button id=edit_btn onclick="editProduct()">Edit</button>`
    
    let smallDiv=document.createElement("div");
    smallDiv.setAttribute("class","flex-items")

    let button1=document.createElement("button");
    button1.innerText="Edit";
    button1.setAttribute("id","edit_btn");
    smallDiv.append(button1);
    button1.addEventListener("click",editItems);



  //edit function
    function editItems(){
        document.getElementById("pid").value=`${product_id}`;
        document.getElementById("pname").value=`${product_name}`;
        document.getElementById("cat_id").value=`${category}`;
        document.getElementById("price").value=`${price}`;
        document.getElementById("desc").value=`${description}`;
        document.getElementById("sell_id").value=`${seller_id}`;
        document.getElementById("btn").value="Update";
        document.getElementById("btn").setAttribute("onclick",`changeValue(${i})`)
        // 
        
        
    }

    
    

    let button2=document.createElement("button");
    button2.innerText="Delete";
    button2.setAttribute("id","delete_btn");
    button2.addEventListener("click", function(){
        products.splice(i,1);
        productsItems(products);
    });

    smallDiv.append(button2);
    div.appendChild(smallDiv);


    grid.appendChild(div);
}
    }
    


//add function
function addItems(){
    
    let product_id=parseInt(document.getElementById("pid").value.trim());
    let product_name=document.getElementById("pname").value.trim();
    let category=document.getElementById("cat_id").value.trim();
    let price=parseInt(document.getElementById("price").value.trim());
    let description=document.getElementById("desc").value.trim();
    let seller_id=parseInt(document.getElementById("sell_id").value.trim());
    console.log(product_name.length);
    console.log(price);
    const product_item= { 
        "product_id":product_id,
        "product_name" : product_name,
        "category":category,
        "price" : price,
        "description" : description,
        "seller_id" : seller_id 
    };

    if( (product_id === NaN) && (product_name.length === 0) && (category.length === 0) && (price === NaN) && (description.length === 0) && (seller_id === NaN))
    {
        alert("All feilds should be filled!");
    }

    else{
        products.push(product_item);  
        productsItems(products);
        document.getElementById("pid").value="";
        document.getElementById("pname").value="";
        document.getElementById("cat_id").value="";
        document.getElementById("price").value="";
        document.getElementById("desc").value="";
        document.getElementById("sell_id").value="";
    }
        
}


//funtion for update edited value in product
function changeValue(i){

        products[i].product_id = document.getElementById("pid").value;
        products[i].product_name = document.getElementById("pname").value;
        products[i].category = document.getElementById("cat_id").value;
        products[i].price = document.getElementById("price").value;
        products[i].description = document.getElementById("desc").value;
        products[i].seller_id = document.getElementById("sell_id").value;
        document.getElementById("btn").value = "Add";
        document.getElementById("btn").setAttribute("onclick","addItems()")
        // edited=1;
        // let values = applyFilter();
        // console.log(values);
        // if(filtered == 1)
        // {
        //     productsItems(values);
        //     filtered=0;
        //     edited=0;
        // }
        // else{
            productsItems(products);
        
        document.getElementById("pid").value="";
        document.getElementById("pname").value="";
        document.getElementById("cat_id").value="";
        document.getElementById("price").value="";
        document.getElementById("desc").value="";
        document.getElementById("sell_id").value="";
        
}







productsItems(products);
