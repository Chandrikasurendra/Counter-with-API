const counterElement = document.getElementById("counter");
const decrement=document.getElementById("decrement")
const increment=document.getElementById("increment")
const productNameElement = document.getElementById("product-name");
const img = document.getElementById("product-image");
const errorMessageElement = document.getElementById("error-message");





// Initialize the counter to 1
let counter = 1;



function updateCounter() {
    counterElement.innerHTML = counter;
}




// Increment function
increment.addEventListener("click", ()=>{
    if(counter>=1 && counter<20){
        counter++;
        updateCounter();
    
    fetch(`https://fakestoreapi.com/products/${counterElement.innerHTML}`)
            .then(res=>res.json())
            .then(json=> {
                img.src = json.image;
                productNameElement.innerHTML=json.title;
                errorMessageElement.innerHTML=" ";

                
            })
    
}else{
    errorMessageElement.innerHTML="Error: No product available.";
    productNameElement.innerHTML="No product";
}
});

// Decrement function
decrement.addEventListener("click", ()=>{
    if(counter>1 && counter<=20){
        counter--;
        updateCounter();
    
    fetch(`https://fakestoreapi.com/products/${counterElement.innerHTML}`)
            .then(res=>res.json())
            .then(json=> {
                img.src = json.image;
                productNameElement.innerHTML=json.title;
                errorMessageElement.innerHTML=" ";
                
            })
    
 }else{
    errorMessageElement.innerHTML="Error: No product available.";
    productNameElement.innerHTML="No product";
}
});


