let link=window.location.href;
//"?image=fyufyu&&tag=Mob&&name=product222&&price=200"
let indimage=link.indexOf("image");
let indname=link.indexOf("name");
let indtag=link.indexOf("tag");
let indprice=link.indexOf("price");
let len=link.length;
let image=link.substring(indimage+6,indtag-2);
let tag=link.substring(indtag+4,indname-2);
let name=link.substring(indname+5,indprice-2);
let price=link.substring(indprice+6,len);
image="flipkart images/"+image;

document.getElementById("imagepro").src=image;
let x="";
if(tag=="Mobiles"){
    x="Best Battery Phones";
}
if(tag=="headphones"){
    x="Top Deals on Electronics";
}
if(tag=="men"){
    x="Top Picks On Men's Clothing ";
    tag="Men's Clothing";
}
if(tag=="furniture"){
    x="Furniture Bestsellers section ";
    tag="Best Furnitures"
}
if(tag=="trending"){
    x="Trending offers";
    tag="Trending Offers"
}
document.getElementById("headingpro").innerHTML=x

tag="Home / "+tag;
name=name.replaceAll("%20"," ");


//  alert(name+tag+image+price);
document.getElementById("namepro").innerHTML=name;
document.getElementById("tagpro").innerHTML=tag;
document.getElementById("pricepro").innerHTML=price;