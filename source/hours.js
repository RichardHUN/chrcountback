let GUI=1;
	let angol;
	angol = 0;
	var english = document.getElementById('english'), magyar = document.getElementById("magyar");
	english.onclick = function(){
		window.open("./hours-angol.html", "_self");
	}
	magyar.onclick = function(){
		window.open("./hours.html", "_self")
	}

	function frissit(){
		let karacsony, maradek, most;
		most = new Date();

		if(most.getMonth() == 11 && most.getDate() >= 25){
			karacsony = new Date(most.getFullYear()+1, 11, 24);
		} else karacsony = new Date(most.getFullYear(), 11, 24);
		document.getElementById("title").innerHTML = "Countback to Christmas " + karacsony.getFullYear();

		maradek = {
			month: karacsony.getMonth() - most.getMonth(),
			day: 24 - most.getDate()
		}
		let newYear = most.getDate() - 31;
		if(most.getMonth() == 11 && most.getDate() >= 24){
			maradek.day = 365*24 + newYear*24 - most.getHours();
		}

		switch(maradek.month){
			case 11:
				maradek.day += 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 + 28 + 31;
				break;
			case 10:
			 	maradek.day += 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 + 28;
			 	break;
			case 9:
				maradek.day += 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31;
				break;
			case 8:
				maradek.day += 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;
				break;
			case 7:
				maradek.day += 30 + 31 + 30 + 31 + 31 + 30 + 31;
				break;
			case 6:
				maradek.day += 30 + 31 + 30 + 31 + 31 + 30;
				break;
			case 5:
				maradek.day += 30 + 31 + 30 + 31 + 31;
				break;
			case 4:
				maradek.day += 30 + 31 + 30 + 31;
				break;
			case 3:
				maradek.day += 30 + 31 + 30;
				break;
			case 2:
				maradek.day += 30 + 31;
				break;
			case 1:
				maradek.day += 30;
				break;
			case 0:
				maradek.day = maradek.day;
		}
		maradek.day *= 24;
		maradek.day -= most.getHours();

		//total =  maradekh + honap;

		switch(angol){
			case 0:
				document.getElementById("iras").innerHTML = "Karácsonyig " + maradek.day + " óra van hátra.";
				if(GUI%2!=0){
						document.getElementById("down").innerHTML = "Váltás teljes visszaszámlálásra";
						document.getElementById("middledown").innerHTML = "Váltás napokra";
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
				if(maradek.day>1)
				document.getElementById("iras").innerHTML = "There are " + maradek.day + " hours until Christmas.";
				if(maradek.day==1)
				document.getElementById("iras").innerHTML = "There is " + maradek.day + " hour until Christmas.";
				if(GUI%2!=0){
						document.getElementById("down").innerHTML = "Change to full countback";
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
			}
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
	var reset = setInterval(frissit, 200);