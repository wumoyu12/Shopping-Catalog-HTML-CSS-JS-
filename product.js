var price, TrueFalse, countFalse, color, number, msg, checknumber, YesOrNo, YesOrNo2, itemname, itemnum, itemprice, itemstyle, itemremarks, HowmanyProducts = 0;
var namelist = [];

function CheckPrice()
{
	countFalse = 0;
	for(let i = 1; i <= 22; i++)
	{	
		HowmanyNumber = "howmany"+[i];
		LabelNumber = "lblprice"+[i];
		price = document.getElementById(HowmanyNumber).value;
		CheckNum();
		if(TrueFalse == "False")
		{
			document.getElementById(HowmanyNumber).value = 1;
			price = 1;
		}
		switch(i)
		{
		case 1:
			price = price * 15;
			break;
		case 2:
			price = price * 7;
			break;
		case 3:
			price = price * 90;
			break;
		case 4:
			price = price * 4;
			break;
		case 5:
			price = price * 1;
			break;
		case 6:
			price = price * 4;
			break;
		case 7:
			price = price * 1;
			break;
		case 8:
			price = price * 1;
			break;
		case 9:
			price = price * 2;
			break;
		case 10:
			price = price * 2;
			break;
		case 11:
			price = price * 15;
			break;
		case 12:
			price = price * 18;
			break;
		case 13:
			price = price * 16;
			break;
		case 14:
			price = price * 14;
			break;
		case 15:
			price = price * 20;
			break;
		case 16:
			price = price * 20;
			break;
		case 17:
			price = price * 20;
			break;
		case 18:
			price = price * 20;
			break;
		case 19:
			price = price * 150;
			break;
		case 20:
			price = price * 20;
			break;
		case 21:
			price = price * 20;
			break;
		case 22:
			price = price * 10;
			break;
		default:
			return false;
		}	
		document.getElementById(LabelNumber).textContent = "price: $" + price;

	}
	if(countFalse > 0)
	{
		alert("Please enter an integer above 0!");
	}	
}

function CheckNum()
{
	CheckDecimal = parseFloat(price)%1
	if(price <= 0)
	{
		TrueFalse = "False";
		countFalse = countFalse + 1;
	}
	else
	{
		TrueFalse = "True";
	}
}

function WhatColor(which)
{
	color = which.substring(3,6);
	length = which.length;
	switch(color) 
	{
		case "red":
			msg = "red";
			number = which.substring(6,8);
			break;
  		case "blu":
			msg = "blue";
			number = which.substring(7,9);
 			break;
  		case "bla":
			msg = "black";
			number = which.substring(8,10);
    		break;
    	case "gre":
			msg = "green";
			number = which.substring(8,10);
    		break;
    	case "pin":
			msg = "pink";
			number = which.substring(7,9);
    		break;
    	case "ora":
			msg = "orange";
			number = which.substring(9,11);
    		break;	
    	case "whi":
			msg = "white";
			number = which.substring(8,10);
    		break;
    	case "pur":
			msg = "purple";
			number = which.substring(9,11);
    		break;
    	case "yel":
			msg = "yellow";
			number = which.substring(9,11);
    		break;
    	case "bro":
			msg = "brown";
			number = which.substring(8,10);
    		break;
  		default:
    		return false;
	}
	ColorLabel = "lblstyle" + number;
	document.getElementById(ColorLabel).textContent = "selected color: " + msg;
}

function WhatColor2(whichone)
{
	if(whichone == "btnblackNwhite17")
	{
		document.getElementById("lblstyle17").textContent = "selected color: balck and white";
	}
	else
	{
		document.getElementById("lblstyle18").textContent = "selected color: blue and white";
	}
}

function WhichStyle(style)
{
	if(style == "btnpresharpened5")
	{
		document.getElementById("lblstyle5").textContent = "selected style: pre-sharpened";
	}
	else
	{
		document.getElementById("lblstyle5").textContent = "selected style: un-sharpened";
	}
}

function WhichSize(whichsize)
{
	size = whichsize.substring(3,4);
	switch(size)
	{
		case "S":
			msg = "S";
    		break;
    	case "M":
			msg = "M";
    		break;
    	case "L":
			msg = "L";
    		break;
  		default:
    		return false;
	}
	number = whichsize.substring(4,6);
	SizeLabel = "lblstyle" + number
	document.getElementById(SizeLabel).textContent = "selected size: " + msg;
}

function WhichBook(whichbook)
{
	book = whichbook.substring(7,8);
	switch(book)
	{
		case "A":
			msg = "The Catcher in the Rye";
    		break;
    	case "B":
			msg = "1984";
    		break;
    	case "C":
			msg = "The Scarlet Letter";
    		break;
    	case "D":
			msg = "The Wordy Shipmates";
    		break;
  		default:
    		return false;
	}
	document.getElementById("lblstyle22").textContent = "selected book: " + msg;
}

function AddToCart(info)
{
	CheckPrice();
	if(countFalse > 0)
	{
		YesOrNo = "TBD";
	}
	else
	{
		let num = info.substring(9,11);
		GetStyle = "lblstyle" + num;
		itemstyle = document.getElementById(GetStyle).textContent;
		CheckStyle();
		GetRemarks = "txtremarks" + num;
		itemremarks = document.getElementById(GetRemarks).value;
		CheckRemarks();
		if(YesOrNo == "no")
		{
			alert("Please complete the information(color/style/size/book name)")
		}
		else if(YesOrNo2 == "no")
		{
			alert("Please do not contain any commas in your remarks.")
		}
		else
		{
			HowmanyProducts = HowmanyProducts + 1;
			NUMProduct = localStorage.getItem("NUMPRODUCTID");
			
			if(NUMProduct == null)
			{
				localStorage.setItem("NUMPRODUCTID",num);
				
				GetName = "lblitemname" + num;
				itemname = document.getElementById(GetName).textContent;
				namelist.push(itemname);	
				localStorage.setItem("ITEMNAME",itemname);
				
				GetNum = "howmany" + num;
				itemnum = document.getElementById(GetNum).value;
				localStorage.setItem("ITEMNUM",itemnum);
				
				GetPrice = "lblprice" + num;
				itemprice  = document.getElementById(GetPrice).textContent;
				localStorage.setItem("ITEMPRICE",itemprice);
				
				localStorage.setItem("ITEMSTYLE",itemstyle);
				
				localStorage.setItem("REMARKS",itemremarks);
			}
			else
			{
				NUMProduct = localStorage.getItem("NUMPRODUCTID");
				Itemname = localStorage.getItem("ITEMNAME");
				Itemnum = localStorage.getItem("ITEMNUM");
				Itemprice = localStorage.getItem("ITEMPRICE");
				Itemstyle = localStorage.getItem("ITEMSTYLE");
				Itemremarks = localStorage.getItem("REMARKS");
				
				let num2 = NUMProduct+","+num;
				localStorage.setItem("NUMPRODUCTID",num2);
				
				GetName = "lblitemname" + num;
				itemname = document.getElementById(GetName).textContent;
				namelist.push(itemname);	
				let itemname2 = Itemname+","+itemname;
				localStorage.setItem("ITEMNAME",itemname2);
				
				GetNum = "howmany" + num;
				itemnum = document.getElementById(GetNum).value;
				let itemnum2 = Itemnum+","+itemnum;
				localStorage.setItem("ITEMNUM",itemnum2);
				
				GetPrice = "lblprice" + num;
				itemprice  = document.getElementById(GetPrice).textContent;
				let itemprice2 = Itemprice+","+itemprice;
				localStorage.setItem("ITEMPRICE",itemprice2);
				
				let itemstyle2 = Itemstyle+","+itemstyle
				localStorage.setItem("ITEMSTYLE",itemstyle2);
				
				let itemremarks2 = Itemremarks+","+itemremarks
				localStorage.setItem("REMARKS",itemremarks2);
			}			
			alert(namelist[HowmanyProducts-1] + " has been added to cart");
			Clear(num);
		}
	}	
}

function CheckStyle()
{
	Stylelen = itemstyle.length;
	start = Stylelen - 4;
	IsNone = itemstyle.substring(start,Stylelen);
	if(IsNone == "none")
	{
		YesOrNo="no";
	}
	else
	{
		YesOrNo="yes";
	}
	
}

function CheckRemarks()
{
	lengthremarks = itemremarks.length
	if(lengthremarks == 0)
		{
			itemremarks = "N/A";
			YesOrNo2 = "yes";
		}
	else
	{
		count = 0
		for(let i=0; i<=lengthremarks-1; i++)
		{
			if(itemremarks[i] == ",")
			{
				count = count + 1;
			}
		}	
		if(count != 0)
		{
			YesOrNo2 = "no";
		}
		else
		{
			YesOrNo2 = "yes";
		}
	}
}

function Clear(num1)
{
	let txtnumber = "howmany" + num1;
	txtremarks = "txtremarks" + num1;
	labelstyle = "lblstyle" + num1;
	document.getElementById(txtnumber).value = "1";
	CheckPrice();
	document.getElementById(txtremarks).value = "";
	CurrentContent = document.getElementById(labelstyle).textContent;
	whichStyle = CurrentContent.substring(9,11)
	switch(whichStyle)
	{
		case "co":
			document.getElementById(labelstyle).textContent = "selected color: none";
    		break;
    	case "st":
			document.getElementById(labelstyle).textContent = "selected style: none";
    		break;
    	case "si":
			document.getElementById(labelstyle).textContent = "selected size: none";
    		break;
    	case "bo":
			document.getElementById(labelstyle).textContent = "selected book: none";
    		break;	
  		default:
    		return false;
	}
}
