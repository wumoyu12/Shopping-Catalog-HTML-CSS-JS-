window.addEventListener("load",Start);
var table, tr, td1, td2, td3 , td4, td5, Itemname, Itemnum, Itemprice, Itemstyle, Itemremarks, totalprice=0;
var Address1,Address2,City,State,Zip,Firstname,Lastname,Phonenum,Cardnum,Expiration,Security
function Start()
{
	ProductNUM = localStorage.getItem("PRODUCTNUM");
	Itemname = localStorage.getItem("ITEMNAME");
	Itemnum = localStorage.getItem("ITEMNUM");
	Itemprice = localStorage.getItem("ITEMPRICE");
	Itemstyle = localStorage.getItem("ITEMSTYLE");
	Itemremarks = localStorage.getItem("REMARKS");
	Address1 = localStorage.getItem("ADDRESS1");
	Address2 = localStorage.getItem("ADDRESS2");
	City = localStorage.getItem("CITY");
	State = localStorage.getItem("STATE");
	Zip = localStorage.getItem("ZIP");
	Firstname = localStorage.getItem("FIRSTNAME");
	Lastname = localStorage.getItem("LASTNAME");
	Phonenum = localStorage.getItem("PHONE");
	Cardnum = localStorage.getItem("CARDNUM");
	Expiration = localStorage.getItem("EXPIRATION");
	Security = localStorage.getItem("SECURITY");
	
	AddToCart();
}

function AddToCart()
{
	table = document.getElementById("ShoppingCart");

	var commaarray1=[], commaarray2=[], commaarray3=[], commaarray4=[], commaarray5=[];
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
	
	var start=start2=start3=start4=start5=0;
	end=commaarray1[0];
	end2=commaarray2[0];
	end3=commaarray3[0];
	end4=commaarray4[0];
	end5=commaarray5[0];
	for(i = 1; i <= commaarray1.length+1; i++)
	{
		thename = Itemname.substring(start,end);
		thenum = Itemnum.substring(start2,end2);
		theprice = Itemprice.substring(start3,end3);
		CheckPrice(theprice);
		thestyle = Itemstyle.substring(start4,end4);
		theremarks = Itemremarks.substring(start5,end5);
		tr = table.insertRow(0);
		td0 = tr.insertCell(0);
		td1 = tr.insertCell(1);
		td2 = tr.insertCell(2);
		td3 = tr.insertCell(3);
		td4 = tr.insertCell(4);
		td5 = tr.insertCell(5);
		td0.innerHTML = commaarray1.length+2-i;
		td1.innerHTML = thename;
		td2.innerHTML = thenum;
		td3.innerHTML = theprice;
		td4.innerHTML = thestyle;
		td5.innerHTML = theremarks;
		start = end + 1;
		start2 = end2 + 1;
		start3 = end3 + 1;
		start4 = end4 + 1;
		start5 = end5 + 1;
		end=commaarray1[i]
		end2=commaarray2[i]
		end3=commaarray3[i]
		end4=commaarray4[i]
		end5=commaarray5[i]
	
	}
	document.getElementById("lblTotalPrice").textContent = "Total Price: " + totalprice;
	document.getElementById("lblname").textContent = "Name: " + Firstname + " " + Lastname;
	document.getElementById("lblphonenum").textContent = "Phone Number: " + Phonenum;
	document.getElementById("lbladdress").textContent = "Address: " + Address1 + " " + Address2 + " " + City + " " + State + " " + Zip;
}
function CheckPrice(price)
{
	lenPrice = price.length
	thisprice = price.substring(8,lenPrice);
	totalprice = totalprice + parseInt(thisprice);
}

function RemoveAll()
{
	localStorage.clear();
}
