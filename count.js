var cnt=0;
function touch() {
	var img = document.getElementById("img_cat");	
	img.src="./images/open.png";
    
    const current = parseInt(number.textContent,10);//뒤 숫자: 진법
    number.textContent = current+1;

	if (cnt%2==0) {
		img.src="./images/close.png";

	} else {
		img.src="./images/open.png";
		
	}
	cnt++;
	
}