window.addEventListener("load",Start);
window.addEventListener("load",AddListener);
window.addEventListener("load",InitiaControl);
var table, tr0, tr1, td0, td1, td2, td3 , td4, td5, Itemname, Itemnum, Itemprice, Itemstyle, Itemremarks, ProductNUMhowmany, 
NUMProduct, totalprice=0;

function InitiaControl()
{
	document.getElementById("message").style.display="none";
	document.getElementById("message2").style.display="none";
	document.getElementById("message3").style.display="none";
}

function AddListener()
{
	document.getElementById("btnDelete").addEventListener("click",Delete);
	document.getElementById("btnYes").addEventListener("click",Yes);
	document.getElementById("btnNo").addEventListener("click",No);
	document.getElementById("btnClose").addEventListener("click",Close);
	document.getElementById("btnClose2").addEventListener("click",Close);
	document.getElementById("btnCheckOut").addEventListener("click",CheckOut);
}

function Delete()
{
	IfBlanck = localStorage.getItem("NUMPRODUCTID");
	if(IfBlanck == null)
	{
		alert("Nothing is in your cart!")
	}
	else
	{
		document.getElementById("message").style.display="block";
	}
}

function CheckOut()
{
	IfBlanck = localStorage.getItem("NUMPRODUCTID");
	if(IfBlanck == null)
	{
		alert("Nothing is in your cart!")
	}
	else
	{
		window.location.href = "payment.html";
	}
}

function Yes()
{
	localStorage.clear();
	document.getElementById("message").style.display="none";
	document.getElementById("message2").style.display="block";
}

function No()
{
	document.getElementById("message").style.display="none";
	document.getElementById("message3").style.display="block";
}

function Close()
{
	document.getElementById("message2").style.display="none";
	document.getElementById("message3").style.display="none";
}

function Start()
{
	NUMProduct = localStorage.getItem("NUMPRODUCTID");
	Itemname = localStorage.getItem("ITEMNAME");
	Itemnum = localStorage.getItem("ITEMNUM");
	Itemprice = localStorage.getItem("ITEMPRICE");
	Itemstyle = localStorage.getItem("ITEMSTYLE");
	Itemremarks = localStorage.getItem("REMARKS");
	AddToCart();
}

function AddToCart()
{
	var imgarray=["JumpRope.JPG", "pencilcase.JPG", "calculator.JPG", "sharpener.JPG", "pencils.JPG", "eraser.JPG", "highlighter.JPG", "ruler.JPG", "pen.JPG", "notebook.JPG", "shirt.JPG", "sweater.JPG", "pants.JPG", "skirt.JPG", "basketball.JPG", "football.JPG", "soccer.JPG", "volleyball.JPG", "chromebook.JPG", "cup.JPG", "bag.JPG", "books.JPG"]
	table = document.getElementById("ShoppingCart");
	
	var commaarray1=[], commaarray2=[], commaarray3=[], commaarray4=[], commaarray5=[], commaarray6=[];
	var thename="";
	
	for(i = 0; i <= Itemname.length-1; i++)
	{
		if(Itemname[i]==",")
		{
			commaposition = i;
			commaarray1.push(commaposition);
		}
	}
	
	for(i = 0; i <= Itemnum.length-1; i++)
	{
		if(Itemnum[i]==",")
		{
			commaposition = i;
			commaarray2.push(commaposition);
		}
	}
	
	for(i = 0; i <= Itemprice.length-1; i++)
	{
		if(Itemprice[i]==",")
		{
			commaposition = i;
			commaarray3.push(commaposition);
		}
	}
	
	for(i = 0; i <= Itemstyle.length-1; i++)
	{
		if(Itemstyle[i]==",")
		{
			commaposition = i;
			commaarray4.push(commaposition);
		}
	}
	
	for(i = 0; i <= Itemremarks.length-1; i++)
	{
		if(Itemremarks[i]==",")
		{
			commaposition = i;
			commaarray5.push(commaposition);
		}
	}
	
	for(i = 0; i <= NUMProduct.length-1; i++)
	{
		if(NUMProduct[i]==",")
		{
			commaposition = i;
			commaarray6.push(commaposition);
		}
	}
	
	var start=start2=start3=start4=start5=start6=0,
	end=commaarray1[0],
	end2=commaarray2[0],
	end3=commaarray3[0],
	end4=commaarray4[0],
	end5=commaarray5[0];
	end6=commaarray6[0];
	
		
	for(i = 1; i <= commaarray1.length+1; i++)
	{
		thename = Itemname.substring(start,end);
		thenum = Itemnum.substring(start2,end2);
		theprice = Itemprice.substring(start3,end3);
		CheckPrice(theprice);
		thestyle = Itemstyle.substring(start4,end4);
		theremarks = Itemremarks.substring(start5,end5);
		theimagelink = NUMProduct.substring(start6,end6);
		
		img = document.createElement("img");
		img.src = imgarray[theimagelink-1];
		img.id = "image";
		
		var hr = document.createElement("hr");
		tr0 = table.insertRow(0);
		td0 = tr0.insertCell(0);
		td1 = tr0.insertCell(1);
		td2 = tr0.insertCell(2);
		tr1 = table.insertRow(1);
		td3 = tr1.insertCell(0);
		td4 = tr1.insertCell(1);
		td5 = tr1.insertCell(2);
		tr2 = table.insertRow(2);
		td6 = tr2.insertCell(0);
		
		td6.id = "theline";
		document.getElementById("theline").colSpan = "3";
	
		td0.innerHTML = commaarray1.length+2-i + ". " + thename;
		td1.innerHTML = thestyle;
		td2.innerHTML = "number: " + thenum;
		td3.appendChild(img);
		td4.innerHTML = "remarks: " + theremarks;
		td5.innerHTML = theprice;
		td6.appendChild(hr);
		
		start = end + 1;
		start2 = end2 + 1;
		start3 = end3 + 1;
		start4 = end4 + 1;
		start5 = end5 + 1;
		start6 = end6 + 1;
		end=commaarray1[i];
		end2=commaarray2[i];
		end3=commaarray3[i];
		end4=commaarray4[i];
		end5=commaarray5[i];
		end6=commaarray6[i];
	}
	document.getElementById("lblTotalPrice").textContent = "Total Price: $" + totalprice;
	document.getElementById("lblNothing").textContent = "";
}

function CheckPrice(price)
{
	lenPrice = price.length
	thisprice = price.substring(8,lenPrice);
	totalprice = totalprice + parseInt(thisprice);
}
