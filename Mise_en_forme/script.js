function Recharge (){
	if (load){
		confirm("Vous avez interrompu votre lecture. Souhaitez-vous reprendre du début ?");
	}
}
function Couleur(){}
function Img(){
	document.Mission10.src.value="Mission10(ondule).png"
}
function play(){
	const audio = new Audio('./Dream_On.mp3')
	audio.play()
}

play()