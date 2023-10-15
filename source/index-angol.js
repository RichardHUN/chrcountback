let GUI=1;
let angol;
angol = 1;
var english = document.getElementById('english'), magyar = document.getElementById("magyar");
english.onclick = function(){
	window.open("./index-angol.html", "_self");
}
magyar.onclick = function(){
	window.open("./index.html", "_self")
}

function frissit(){
			let txtmonth,txtday,txthour,txtminute,txtsecond,txtand;
			let most, karacsony, maradek;

			most = new Date();

			function christmas(){	 
				if(most.getDate() == 24 && most.getMonth() >= 11 ){
					switch(angol){
						case 0:
							alert("Boldog Karácsonyt!");
							break;
						case 1:
							alert("Merry Christmas!");
					}
				}
			}	
			var resetChristmas = setInterval(christmas, 5000);

			if(most.getMonth == 11 && most.getDate >= 25){
				karacsony = new Date(most.getFullYear()+1, 11, 24);
			} else karacsony = new Date(most.getFullYear(), 11, 24);

			document.getElementById("title").innerHTML = "Countback to Christmas " + karacsony.getFullYear();

			maradek = {
				month: karacsony.getMonth() - most.getMonth(), 
				day: karacsony.getDate() - most.getDate(), 
				hour: 23 - most.getHours(), 
				minute: 59 - most.getMinutes(), 
				second: 59 - most.getSeconds(), 
				day2: karacsony.getDate() - most.getDate()
			}

			switch(angol){
				case 0:
					txtfirst = "Karácsonyig ";
					txtlast = " van hátra.";
					txtmonth = " hónap, ";			

					txtday = " nap, ";

					if(maradek.day < 0){
						maradek.month -= 1;
						maradek.day = 30 - Math.abs(maradek.day);
					}
					if(maradek.month <= 0){
					 	txtmonth = "";
						maradek.month = "";
						if(most.getMonth() == 11 && most.getDate() >=25){
							maradek.month = 11;
							txtmonth = " hónap, "
						}
					}


					txtand = " illetve ";
					if(maradek.minute==0 || maradek.second==0){
						txtand = "";
					}

					txthour = " óra, ";
					if(maradek.hour == 0){
						txthour = "";
						maradek.hour = "";
					}

					txtminute = " perc ";
					if(maradek.minute == 0){
						txtminute = "";
						maradek.minute = "";
					}

					if(maradek.second>=1){
						txtsecond = " másodperc"
					}
					if(maradek.second == 0){
						txtsecond = "";
						maradek.second = "";
					}
					if(GUI%2!=0){
						document.getElementById("down").innerHTML = "Váltás napokra";
						document.getElementById("middledown").innerHTML = "Váltás órákra";
						document.getElementById("middle").innerHTML = "Váltás percekre";
						document.getElementById("middletop").innerHTML = "Váltás másodpercekre";
						document.getElementById("top").innerHTML = "Váltás milliszekundumokra";
					}else {
						document.getElementById("down").innerHTML = "";
						document.getElementById("middledown").innerHTML = "";
						document.getElementById("middle").innerHTML = "";
						document.getElementById("middletop").innerHTML = "";
						document.getElementById("top").innerHTML = "";	
					}
					break;
				case 1:
					if(maradek.month==1 && maradek.day==1 &&
					 maradek.hour==1 && maradek.minute==1 && maradek.second==1){
						txtfirst = "There is ";
						txtmonth = " month, ";
					} else txtfirst = "There are ";
					txtlast = " until Christmas.";
					

					//napok
					if(maradek.day < 0){
						maradek.month -= 1;
						maradek.day = 30 - Math.abs(maradek.day);
					}
					if(maradek.day>1){
						txtday = " days, "
					}
					if(maradek.day==1){
						txtday = " day, "
					}
					if(maradek.day == 0){
				 	txtday = "";
					maradek.day = "";
					}
					
					//hónapok


					if(maradek.month>=1){
					 	txtmonth = " months, ";
					}

					if(maradek.month==1 && maradek.day==1 &&
					 maradek.hour==1 && maradek.minute==1 && maradek.second==1){
						txtmonth = " month, "
					}

					if(maradek.month==0){
					txtmonth = "";
					maradek.month = "";
					}

					//órák
					if(maradek.hour>=1){
						txthour = " hours, "
					}
					if(maradek.month==1 && maradek.day==1 &&
					 maradek.hour==1 && maradek.minute==1 && maradek.second==1){
						txthour = " hour, "
					}
					if(maradek.hour == 0){
					txthour = "";
					maradek.hour = "";
					}

					//percek
					if(maradek.minute>=1){
						txtminute = " minutes, "
					}
					if(maradek.month==1 && maradek.day==1 &&
					 maradek.hour==1 && maradek.minute==1 && maradek.second==1){
						txtminute = " minute, "
					}
					if(maradek.minute == 0){
					txtminute = "";
					maradek.minute = "";
					}

					//txtand
					txtand = " and ";
					if(maradek.minute==0 || maradek.second==0){
						txtand = "";
					}

					//másodperc
					if(maradek.second>=1){
						txtsecond = " seconds"
					}
					if(maradek.month==1 && maradek.day==1 &&
					 maradek.hour==1 && maradek.minute==1 && maradek.second==1){
						txtsecond = " second"
					}
					if(maradek.second == 0){
					txtsecond = "";
					maradek.second = "";
					}
					if(GUI%2!=0){
						document.getElementById("down").innerHTML = "Change to days";
						document.getElementById("middledown").innerHTML = "Change to hours";
						document.getElementById("middle").innerHTML = "Change to minutes";
						document.getElementById("middletop").innerHTML = "Change to seconds";
						document.getElementById("top").innerHTML = "Change to milliseconds";
					}else {
						document.getElementById("down").innerHTML = "";
						document.getElementById("middledown").innerHTML = "";
						document.getElementById("middle").innerHTML = "";
						document.getElementById("middletop").innerHTML = "";
						document.getElementById("top").innerHTML = "";	
					}
					break;
			}
			//document.getElementById("now").innerHTML =  maradek.day;

			document.getElementById("minus").innerHTML = txtfirst + maradek.month + txtmonth + maradek.day
			 + txtday + maradek.hour + txthour + txtand + maradek.minute + txtminute
			  + maradek.second + txtsecond + txtlast;

			//document.getElementById("minus").innerHTML = "Karácsonyig " + txt + " hónap, " + txt1 + " nap, " +
		 	//txt2 + " óra, illetve " + txt3 + " perc, " + txt4 + " másodperc van hátra." ;

		 			 	//Nyelvváltó gombok
		 	if(GUI%2==0){
		 		document.getElementById("english").innerHTML = "";
		 		document.getElementById("magyar").innerHTML = "";
		 	}else {
		 		document.getElementById("english").innerHTML = "English";
		 		document.getElementById("magyar").innerHTML = "Magyar";
		 	}

		 	//Gomb szöveg
		 	if(GUI%2==0){
		 		switch(angol){
		 		case 0:
		 			document.getElementById("GUI").innerHTML = "GUI bekapcsolása";
		 			break;
		 		case 1:
		 			document.getElementById("GUI").innerHTML = "Turn on GUI";
				}
			document.getElementById("english").style.display = "none";
			document.getElementById("magyar").style.display = "none";
 		 	} else {
		 		switch(angol){
		 		case 0:
		 			document.getElementById("GUI").innerHTML = "GUI kikapcsolása";
		 			break;
		 		case 1:
		 			document.getElementById("GUI").innerHTML = "Turn off GUI";
		 		}
		 	document.getElementById("english").style.display = "initial";
		 	document.getElementById("magyar").style.display = "initial";
		 	}
}
var reset = setInterval(frissit, 500);