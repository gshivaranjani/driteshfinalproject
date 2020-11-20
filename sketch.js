var database, allProducts;
var bill;
var product = [];
var index = 0;
var flag = true;
var product;
var count =1;

var logo;
function preload(){
    logo = loadImage("Capture.png");
}

//var input,submit;
function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    background(logo);
    image(logo,100,50,50,50);
   
   // console.log(database);
    start();

    // var ref = database.ref("products");
    // ref.on("value", (data)=>{
    //     //console.log(data.val());
    //     allProducts = data.val();
    // })


    Product.getProductInfo();
   bill = new Bill();

   if(flag) {
    setTimeout(function() {
        //  console.log("1000 milliseconds have elapsed");
          bill.displayProducts();
          flag = false;
        }, 2000);
        // flag = false;
}

//    if(flag) {
//     setTimeout(function() {
//         //  console.log("1000 milliseconds have elapsed");
//           bill.displayProducts();
//         }, 2000);
// }
  

  
  
   

// input = createInput("Name");
//   submit = createButton('click');
// input.position(200,100);
// submit.position(200,200);

   
}



function draw()
{
   background("lightblue");
    image(logo,100,50,100,100);
//    console.log(flag);

   
    
  
   
   
    
    

  
  //  drawSprites();
}
async function start() {
    product = new Product();
    var nodeRef = await database.ref('products').once('value');
    if(nodeRef.exists()) {
        allProducts = nodeRef.val();
    }
    Product.getProductInfo();
}

