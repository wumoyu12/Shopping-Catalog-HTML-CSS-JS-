window.addEventListener("load",InitControls);
function InitControls()
{
	document.getElementById("txtaddress1").focus();
	document.getElementById("decesion").style.display="none";
}

function Submit()
{
	address1 = document.getElementById("txtaddress1").value;
	localStorage.setItem("ADDRESS1",address1);
	
	address2 = document.getElementById("txtaddress2").value;
	localStorage.setItem("ADDRESS2",address2);
	
	city = document.getElementById("txtcity").value;
	localStorage.setItem("CITY",city);
	
	state = document.getElementById("SelectStates").value;
	localStorage.setItem("STATE",state);
	
	zip = document.getElementById("txtzipcode").value;
	localStorage.setItem("ZIP",zip);
	firstname = document.getElementById("txtfname").value;
	localStorage.setItem("FIRSTNAME",firstname);
	
	lastname = document.getElementById("txtlname").value;
	localStorage.setItem("LASTNAME",lastname);

	phonenum = document.getElementById("txtphonenum").value;
	localStorage.setItem("PHONE",phonenum);
	cardnum = document.getElementById("txtcardnum").value;
	localStorage.setItem("CARDNUM",cardnum);
	
	expiration = document.getElementById("txtexpiration").value;
	localStorage.setItem("EXPIRATION",expiration);
	
	security = document.getElementById("txtsecuritycode").value;
	localStorage.setItem("SECURITY",security);
	CheckAllInfo();
}

function CheckAllInfo()
{
	msg = "";
	CheckDecimal = parseFloat(security) % 1;
	length = security.length
	if(CheckDecimal != 0 || security == "" || (length<3 || length>4))
	{
		msg = "S";
		document.getElementById("txtsecuritycode").focus();
	}
	if(expiration == "")
	{
		msg = "E";
		document.getElementById("txtexpiration").focus();
	}
	CheckDecimal = parseFloat(cardnum) % 1;
	length = cardnum.length;
	if(CheckDecimal != 0 || cardnum == "" || (length<16 || length>19))
	{
		msg = "C";
		document.getElementById("txtcardnum").focus();
	}
	CheckDecimal = parseFloat(phonenum) % 1;
	length = phonenum.length;
	if(CheckDecimal != 0 || phonenum == "" || length != 10)
	{
		msg = "P";
		document.getElementById("txtphonenum").focus();
	}
	if(lastname == "")
	{
		msg = "L";
		document.getElementById("txtlname").focus();
	}
	if(firstname == "")
	{
		msg = "F";
		document.getElementById("txtfname").focus();
	}
	length = zip.length;
	if(zip == "" || length != 5)
	{
		msg = "Z";
		document.getElementById("txtzipcode").focus();
	}
	if(state == "")
	{
		msg = "S";
		document.getElementById("SelectStates").focus();
	}
	if(city == "")
	{
		msg = "c";
		document.getElementById("txtcity").focus();	
	}
	
	if(address1 == "")
	{
		msg = "a";
		document.getElementById("txtaddress1").focus();
	}
	if(msg == "")
	{
		AddToReceipt();
	}
	else
	{
		alert("Missing Information / Invalid format");
	}
}

function AddToReceipt()
{
	document.getElementById("decesion").style.display="block";
}
