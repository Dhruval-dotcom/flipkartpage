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
if(tag=="Mobiles"){
    document.getElementById("headingpro").innerHTML="Best Battery Phones";
}
if(tag=="headphones"){
    document.getElementById("headingpro").innerHTML="Top Deals on Electronics";
}
if(tag=="men"){
    document.getElementById("headingpro").innerHTML="Top Picks On Men's Clothing ";
}
if(tag=="furniture"){
    document.getElementById("headingpro").innerHTML="Furniture Bestsellers section ";
}
if(tag=="trending"){
    document.getElementById("headingpro").innerHTML="Trending offers";
}

if(tag=="men"){
    tag="Men's Clothing";
}
if(tag=="furniture"){
    tag="Best Furnitures"
}
if(tag=="trending"){
    tag="Trending Offers"
}

tag="Home / "+tag;
name=name.replaceAll("%20"," ");


//  alert(name+tag+image+price);
document.getElementById("namepro").innerHTML=name;
document.getElementById("tagpro").innerHTML=tag;
document.getElementById("pricepro").innerHTML=price;