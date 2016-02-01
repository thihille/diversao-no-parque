var verificar_inicio_cnd;
var txtLvl = 0;

/*
var audio2_trilha = new Howl({urls: ['media/audio/somintro.mp3'],loop: true,volume: 0.5,});
var audio2_ambiente = new Howl({urls: ['media/audio/somAmbiente.mp3'],loop: true,volume: 0.5,});
var audio2_texto1 = new Howl({urls: ['media/audio/texto1.mp3'],loop: true,volume: 1});
*/
//Ajustes para o Howler .js //
var audio2_somintro = new Howl({urls: ['media/audio/somintro.mp3'],volume: 0.5, loop:true, onend: function() { tocar_audio2_somintro();}});
var audio2_somambiente = new Howl({urls: ['media/audio/somAmbiente.mp3'],volume: 0.5, loop:true, onend: function() { tocar_audio2_somambiente();}});
var audio2_somacerto = new Howl({urls: ['media/audio/somAcerto.mp3']});
var audio2_somerro = new Howl({urls: ['media/audio/somErro.mp3']});
var audio2_falasucesso = new Howl({urls: ['media/audio/final.mp3'], onend: function() { encerrra_oed();}});
var audio2_somgameoverf = new Howl({urls: ['media/audio/somGameoverF.mp3']});
var audio2_somgameoverm = new Howl({urls: ['media/audio/somGameoverM.mp3']});
var audio2_somsucesso = new Howl({urls: ['media/audio/somSucesso.mp3']});
//
var audio2_somtexto1 = new Howl({urls: ['media/audio/texto1.mp3']});
var audio2_somperguntafase1 = new Howl({urls: ['media/audio/fase1-pergunta.mp3']});
var audio2_somperguntafase2 = new Howl({urls: ['media/audio/fase2-pergunta.mp3'],onend: function() {  }});
var audio2_somperguntafase3 = new Howl({urls: ['media/audio/fase3-pergunta.mp3']});
var audio2_somperguntafase4 = new Howl({urls: ['media/audio/fase4-pergunta.mp3']});
var audio2_somperguntafase5 = new Howl({urls: ['media/audio/fase5-pergunta.mp3']});
var audio2_somperguntafase6 = new Howl({urls: ['media/audio/fase6-pergunta.mp3']});
var audio2_somperguntafase7 = new Howl({urls: ['media/audio/fase7-pergunta.mp3']});
var audio2_somperguntafase8 = new Howl({urls: ['media/audio/fase8-pergunta.mp3']});
var audio2_somperguntafase9 = new Howl({urls: ['media/audio/fase9-pergunta.mp3']});
//
var audio2_somacertofase1 = new Howl({urls: ['media/audio/fase1-acerto.mp3'],onend: function() { audio2_somperguntafase1.volume(0); }});
var audio2_somacertofase2 = new Howl({urls: ['media/audio/fase2-acerto.mp3'],onend: function() { audio2_somperguntafase2.volume(0); }});
var audio2_somacertofase3 = new Howl({urls: ['media/audio/fase3-acerto.mp3'],onend: function() { audio2_somperguntafase3.volume(0); }});
var audio2_somacertofase4 = new Howl({urls: ['media/audio/fase4-acerto.mp3'],onend: function() { audio2_somperguntafase4.volume(0); }});
var audio2_somacertofase5 = new Howl({urls: ['media/audio/fase5-acerto.mp3'],onend: function() { audio2_somperguntafase5.volume(0); }});
var audio2_somacertofase6 = new Howl({urls: ['media/audio/fase6-acerto.mp3'],onend: function() { audio2_somperguntafase6.volume(0); }});
var audio2_somacertofase7 = new Howl({urls: ['media/audio/fase7-acerto.mp3'],onend: function() { audio2_somperguntafase7.volume(0); }});
var audio2_somacertofase8 = new Howl({urls: ['media/audio/fase8-acerto.mp3'],onend: function() { audio2_somperguntafase8.volume(0); }});
var audio2_somacertofase9 = new Howl({urls: ['media/audio/fase9-acerto.mp3'],onend: function() { audio2_somperguntafase9.volume(0); }});
//
var audio2_somerrofase1 = new Howl({urls: ['media/audio/fase1-erro.mp3']});
var audio2_somerrofase2 = new Howl({urls: ['media/audio/fase2-erro.mp3']});
var audio2_somerrofase3 = new Howl({urls: ['media/audio/fase3-erro.mp3']});
var audio2_somerrofase4 = new Howl({urls: ['media/audio/fase4-erro.mp3']});
var audio2_somerrofase5 = new Howl({urls: ['media/audio/fase5-erro.mp3']});
var audio2_somerrofase6 = new Howl({urls: ['media/audio/fase6-erro.mp3']});
var audio2_somerrofase7 = new Howl({urls: ['media/audio/fase7-erro.mp3']});
var audio2_somerrofase8 = new Howl({urls: ['media/audio/fase8-erro.mp3']});
var audio2_somerrofase9 = new Howl({urls: ['media/audio/fase9-erro.mp3']});
// Configurações dos textos do botão de ajuda... Se houver mais de um texto do botão de ajuda, no arquivo FUNÇÕES.JS de desenvolvimento insira apenas a variavel "txtLvl = NUMERO DO TEXTO DO BOTÃO DE AJUDA QUE APARECERÁ, no local da função de desenvolvimento do projeto.
function tocar_audio2_somintro(){
	audio2_somintro.stop().play();
}
function tocar_audio2_somambiente(){
	audio2_somambiente.stop().play();
}
function encerrra_oed(){
	setTimeout(function(){
        sessionStorage.setItem('reiniciar_oed', 'sim'); 
    }, 7000);	
}


function textosInstrucoes(txtLvl){
	
	if(txtLvl == 0){
		$("#instrucoes").html("Escolha o número relacionado a quantidade de itens da alternativa apresentada.");
	}else if(txtLvl == 1){
		$("#instrucoes").html("");
	}else if(txtLvl == 2){
		$("#instrucoes").html("");
	}
}


// JIMBOE
function engine(tipo){
	
	// Busca ID do HTML
	var 
	init = document.getElementById("init"),
	conteudo = document.getElementById("content");

	// Cria os elementos
	var	
	header = document.createElement("div"),
	iconHeader = document.createElement("div"),
	tituloHeader = document.createElement("h1"),
	btnOptions = document.createElement("div"),
	activeOptions = document.createElement("div"),
	listOptions = document.createElement("ul"),
	instrucoes = document.createElement("div"),
	setaInstrucoes = document.createElement("div"),
	overlayOptions = document.createElement("div");
		
	// Seta as Classes e variáveis	
	header.setAttribute("id","header");
	iconHeader.setAttribute("class", "img"+config.genero+" icon");
	btnOptions.setAttribute("id","btnOptions");
	activeOptions.setAttribute("class","actionOptions");
	listOptions.setAttribute("id","navOptions");
	instrucoes.setAttribute("id","instrucoes");
	setaInstrucoes.setAttribute("class","seta");
	overlayOptions.setAttribute("class","overlayOptions");
		
	var
	btnStartCapa = $("#capa .acoes div:first-child"),
	subHeader = $(".subheader");
	subHeaderText = $(".subheader p");
	botaoPop = $(".btnFechaPopUp, .btnFechaSmall, .btnFechaSmallFinaliza"),
	jnlFeed = $(".feedback, .feedsmall"),
	srcBotao1 = new Array ("btnHome","btnSom","btnInstrucoes"),
	tituloNavegador = $("head title");
	
	for(var m=0;m < srcBotao1.length;m++){
		var list = document.createElement("li");
			list.setAttribute("class","btnOption "+ srcBotao1[m]);
		var imgList = document.createElement("img");
			imgList.setAttribute("src","img/"+srcBotao1[m]+".png");
			list.appendChild(imgList);				
			listOptions.appendChild(list);
			header.appendChild(listOptions);
	}
		
	// Create DOM
	tituloNavegador.html(config.ano+" - "+config.titulo);
	init.insertBefore(header, conteudo);
	init.appendChild(overlayOptions);
	header.appendChild(iconHeader);
	header.appendChild(tituloHeader);
	header.appendChild(btnOptions);
	btnOptions.appendChild(activeOptions);
	instrucoes.appendChild(setaInstrucoes);
	header.appendChild(instrucoes);
	tituloHeader.innerHTML = config.titulo;
	iconHeader.style.backgroundImage = config.genero;
	
	if(tipo == "matematica"){
		$("body").css({background:config.matematica.bck});
		iconHeader.style.backgroundColor = config.matematica.cp4;
		header.style.backgroundColor = config.matematica.cp1; 
		btnOptions.style.background = config.matematica.btnOptions;
		btnStartCapa.css("background-color",config.matematica.cs1);	
		subHeader.css({"background-color":config.matematica.cs1, width:"335px"});
		subHeaderText.text(config.ano);
		botaoPop.css("background-color",config.matematica.cs1);
		$("#instrucoes").css("background",config.matematica.cp1);
		$(".seta").css("border-left-color",config.matematica.cp1);
		jnlFeed.css("border", "5px solid "+config.matematica.cs1);
	}else if(tipo == "portugues"){
		$("body").css({background:config.portugues.bck});
		iconHeader.style.backgroundColor = config.portugues.cp4;
		header.style.backgroundColor = config.portugues.cp1; 
		btnOptions.style.background = config.portugues.btnOptions;
		btnStartCapa.css("background-color",config.portugues.cs1);	
		subHeader.css({"background-color":config.portugues.cs1, width:"335px"});	
		subHeaderText.text(config.ano);
		botaoPop.css("background-color",config.portugues.cs4);
		jnlFeed.css("border", "5px solid "+config.portugues.cs4);
		$("#instrucoes").css("background",config.portugues.cp1);
		$(".seta").css("border-left-color",config.portugues.cp1);
	}else if(tipo == "geografia"){
		$("body").css({background:config.geografia.bck});
		iconHeader.style.backgroundColor = config.geografia.cp4;
		header.style.backgroundColor = config.geografia.cp1; 
		btnOptions.style.background = config.geografia.btnOptions;
		botaoPop.css("background-color",config.geografia.cs4);
		btnStartCapa.css("background-color",config.geografia.cs1);	
		subHeader.css({"background-color":config.geografia.cs1, width:"335px"});	
		subHeaderText.text(config.ano);
		jnlFeed.css("border", "5px solid "+config.geografia.cs4);
		$("#instrucoes").css("background",config.geografia.cp1);
		$(".seta").css("border-left-color",config.geografia.cp1);
	}else if(tipo == "ciencias"){
		$("body").css({background:config.ciencias.bck});
		iconHeader.style.backgroundColor = config.ciencias.cp4;
		header.style.backgroundColor = config.ciencias.cp1; 
		btnOptions.style.background = config.ciencias.btnOptions;
		btnStartCapa.css("background-color",config.ciencias.cs1);	
		subHeader.css({"background-color":config.ciencias.cs1, width:"335px"});	
		subHeaderText.text(config.ano);
		botaoPop.css("background-color",config.ciencias.cs4);
		jnlFeed.css("border", "5px solid "+config.ciencias.cs4);
		$("#instrucoes").css("background",config.ciencias.cp1);
		$(".seta").css("border-left-color",config.ciencias.cp1);
	}else if(tipo == "historia"){
		$("body").css({background:config.historia.bck});
		iconHeader.style.backgroundColor = config.historia.cp4;
		header.style.backgroundColor = config.historia.cp1; 
		btnOptions.style.background = config.historia.btnOptions;
		btnStartCapa.css("background-color",config.historia.cs1);	
		subHeaderText.text(config.ano);
		subHeader.css({"background-color":config.historia.cs1, width:"335px"});	
		botaoPop.css("background-color",config.historia.cs4);
		jnlFeed.css("border", "5px solid "+config.historia.cs4);
		$("#instrucoes").css("background",config.historia.cp1);
		$(".seta").css("border-left-color",config.historia.cp1);
	}
}
// Configura Objeto
var config = {
	create: function(){
		engine("matematica"); // 1 - português // 2 - matemática // 3 - ciências // 4 - história // 5 - geografia
	},
	titulo: "Diversão no parque",
	tipo: "Pnld 2016",
	colecao: "Jimboe",
	ano: "MATEMÁTICA | 1º Ano",
	genero: "home", // 1 - infografico / 2 - jogo / 3 - video/ 4-dragindrop
	
	matematica: {
		cp1: "rgba(46,86,166,1)",
		cp2: "rgba(136,178,223,1)",
		cp3: "rgba(14,49,120,1)",
		cp4: "rgba(18,23,57,1)",
		cs1: "rgba(246,140,61,1)",
		cs2: "rgba(253,209,176,1)",
		cs3: "rgba(251,178,115,1)",
		cs4: "rgba(192,102,22,1)",
		bck: "url(img/background-matematica.gif) repeat center",
		btnOptions: "url(img/btnOptionsMatematica.png) no-repeat bottom right"
	},
	ciencias: {
		cp1: "rgba(1,186,189,1)",
		cp2: "rgba(119,205,208,1)",
		cp3: "rgba(0,125,126,1)",
		cp4: "rgba(0,72,74,1)",
		cs1: "rgba(237,26,59,1)",
		cs2: "rgba(245,151,149,1)",
		cs3: "rgba(241,102,106,1)",
		cs4: "rgba(196,18,47,1)",
		bck: "url(img/background-ciencias.gif) repeat bottom",
		btnOptions: "url(img/btnOptionsCiencias.png) no-repeat bottom right"
	},
	historia: {
		cp1: "rgba(112,89,166,1)",
		cp2: "rgba(176,163,208,1)",
		cp3: "rgba(92,46,145,1)",
		cp4: "rgba(52,12,61,1)",
		cs1: "rgba(209,162,28,1)",
		cs2: "rgba(238,221,140,1)",
		cs3: "rgba(225,198,102,1)",
		cs4: "rgba(163,139,16,1)",
		bck: "url(img/background-historia.gif) repeat bottom",
		btnOptions: "url(img/btnOptionsHistoria.png) no-repeat bottom right"
	},
	portugues: {
		cp1: "rgba(237,20,91,1)",
		cp2: "rgba(245,152,157,1)",
		cp3: "rgba(176,4,65,1)",
		cp4: "rgba(93,0,35,1)",
		cs1: "rgba(0,169,100,1)",
		cs2: "rgba(165,217,201,1)",
		cs3: "rgba(79,190,149,1)",
		cs4: "rgba(0,98,58,1)",
		bck: "url(img/background-portugues.gif) repeat bottom",
		btnOptions: "url(img/btnOptionsPortugues.png) no-repeat bottom right"
	},
	geografia: {
		cp1: "rgba(180,62,151,1)",
		cp2: "rgba(199,142,191,1)",
		cp3: "rgba(143,43,120,1)",
		cp4: "rgba(104,0,89,1)",
		cs1: "rgba(77,184,72,1)",
		cs2: "rgba(196,223,155,1)",
		cs3: "rgba(151,203,89,1)",
		cs4: "rgba(33,116,52,1)",
		bck: "url(img/background-geografia.gif) repeat bottom",
		btnOptions: "url(img/btnOptionsGeografia.png) no-repeat bottom right"
	}
}

$(window).resize(function(){
	updateScale();
});

// Funções de Pop Up
function PopUpSmall(posTxt,imagem,descricao){
	var popup = $(".overlay-small");
	var popupC = $(".overlay-small .feedsmall");
	var posText = $(".overlay-small .feedsmall p");
	
	popup.find("p").text(descricao);
	popup.find("img").attr("src","img/"+imagem+".png");
	popup.fadeIn(300);
	setTimeout(function(){
		popupC.css({
			"transform":"scale(1)",
			"-moz-transform":"scale(1)",
			"-ms-transform":"scale(1)",
			"-o-transform":"scale(1)",
			"-webkit-transform":"scale(1)"
			});
		posText.css({
			marginTop:posTxt+"px"
		});
	},300);
	
}

function PopUp(tipo,imagem,descricao){
	var popup = $(".overlay-feedback");
	var popupC = $(".overlay-feedback .feedback");
	
	if(tipo == 0){
		popupC.addClass("semImg").removeClass("comImg");
		popup.find("img").hide();
		popup.find("p").text(descricao);
		popup.fadeIn(300);
		setTimeout(function(){
			popupC.css({
				"transform":"scale(1)",
				"-moz-transform":"scale(1)",
				"-ms-transform":"scale(1)",
				"-o-transform":"scale(1)",
				"-webkit-transform":"scale(1)"
				});
		},300);
	}else if(tipo == 1){
		popupC.addClass("comImg").removeClass("semImg");
		popup.find("p").text(descricao);
		popup.find("img").attr("src","img/"+imagem+".png");
		popup.fadeIn(300);
		setTimeout(function(){
			popupC.css({
				"transform":"scale(1)",
				"-moz-transform":"scale(1)",
				"-ms-transform":"scale(1)",
				"-o-transform":"scale(1)",
				"-webkit-transform":"scale(1)"
				});
		},300);
	}
}

// Executa esta função "start" após o carregamento das imagens
function start(){
	config.create(); // Seta as propriedades principais do Objeto e executa

var canvas;
var ctx;
var confettiHandler;
//canvas dimensions
var W;
var H;
var mp = 150; //max particles
var particles = [];

$(window).resize(function () {
    canvas = document.getElementById("canvas");
    //canvas dimensions
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
});
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    //canvas dimensions
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    for (var i = 0; i < mp; i++) {
        particles.push({
            x: Math.random() * W, //x-coordinate
            y: Math.random() * H, //y-coordinate
            r: randomFromTo(5, 30), //radius
            d: (Math.random() * mp) + 10, //density
            color: "rgba(" + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", 0.7)",
            tilt: Math.floor(Math.random() * 10) - 10,
            tiltAngleIncremental: (Math.random() * 0.07) + .05,
            tiltAngle: 0
        });
    }
    
    


function draw() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < mp; i++) {
        var p = particles[i];
        ctx.beginPath();
        ctx.lineWidth = p.r / 2;
        ctx.strokeStyle = p.color;  // Green path
        ctx.moveTo(p.x + p.tilt + (p.r / 4), p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + (p.r / 4));
        ctx.stroke();  // Draw it
    }

    update();
}
function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}
var TiltChangeCountdown = 5;
//Function to move the snowflakes
//angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
var angle = 0;
var tiltAngle = 0;
function update() {
    angle += 0.01;
    tiltAngle += 0.1;
    TiltChangeCountdown--;
    for (var i = 0; i < mp; i++) {
        
        var p = particles[i];
        p.tiltAngle += p.tiltAngleIncremental;
        //Updating X and Y coordinates
        //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
        //Every particle has its own density which can be used to make the downward movement different for each flake
        //Lets make it more random by adding in the radius
        p.y += (Math.cos(angle + p.d) + 1 + p.r / 2) / 2;
        p.x += Math.sin(angle);
        //p.tilt = (Math.cos(p.tiltAngle - (i / 3))) * 15;
        p.tilt = (Math.sin(p.tiltAngle - (i / 3))) * 15;

        //Sending flakes back from the top when it exits
        //Lets make it a bit more organic and let flakes enter from the left and right also.
        if (p.x > W + 5 || p.x < -5 || p.y > H) {
            if (i % 5 > 0 || i % 2 == 0) //66.67% of the flakes
            {
                particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d, color: p.color, tilt: Math.floor(Math.random() * 10) - 10, tiltAngle: p.tiltAngle, tiltAngleIncremental: p.tiltAngleIncremental };
            }
            else {
                //If the flake is exitting from the right
                if (Math.sin(angle) > 0) {
                    //Enter from the left
                    particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d, color: p.color, tilt: Math.floor(Math.random() * 10) - 10, tiltAngleIncremental: p.tiltAngleIncremental };
                }
                else {
                    //Enter from the right
                    particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d, color: p.color, tilt: Math.floor(Math.random() * 10) - 10, tiltAngleIncremental: p.tiltAngleIncremental };
                }
            }
        }
    }
}
function StartConfetti() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    confettiHandler = setInterval(draw, 15);
}
function StopConfetti() {
    clearTimeout(confettiHandler);
    if (ctx == undefined) return;
    ctx.clearRect(0, 0, W, H);
}



	var personagemPrincipal = {
		movimentar:"correndo",
		parar:"parado",
		interage1: "interativo1",
		ganhou: "win",
		seletor:$("#personagem")
	}
	
	var path = {
		local: "img/",
		ext:".gif"
	}
	
	var personagem1 = {
		seletor:$(".personagem1"),
		
	}
	var personagem2 = {
		seletor:$(".personagem2"),
		id:"p2"
	}
	
	
	function movendo(tempoExe){
		setTimeout(function(){
			if($(".sucesso").length == "0"){
				conteudo(100, "id1");
				$("#personagem").css({opacity:0});
			}else if($(".sucesso").length == "1"){
				personagemPrincipal.seletor.find("img").attr("src","img/"+id+"-"+personagemPrincipal.movimentar+path.ext); // muda o gif personagem
				personagemPrincipal.seletor.addClass("prg1"); // adiciona a animação do primeiro progresso
				personagemPrincipal.seletor.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() { // Terminou a animação executa a função
					$("#personagem").css({opacity:0});
					$(this).find("img").attr("src","img/"+id+"-"+personagemPrincipal.interage1+path.ext); // Muda gif personagem quando para para próxima fase
					conteudo(100, "id2");
				});
			}else if($(".sucesso").length == "2"){
				personagemPrincipal.seletor.find("img").attr("src","img/"+id+"-"+personagemPrincipal.movimentar+path.ext); // muda o gif personagem
				personagemPrincipal.seletor.removeClass("prg1").addClass("prg2"); // adiciona a animação do primeiro progresso
				personagemPrincipal.seletor.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() { // Terminou a animação executa a função
					$("#personagem").css({opacity:0});
					$(this).find("img").attr("src","img/"+id+"-"+personagemPrincipal.interage1+path.ext); // Muda gif personagem quando para para próxima fase
					conteudo(100, "id3");
				});
			}else if($(".sucesso").length == "3"){
				personagemPrincipal.seletor.find("img").attr("src","img/"+id+"-"+personagemPrincipal.movimentar+path.ext); // muda o gif personagem
				personagemPrincipal.seletor.removeClass("prg2").addClass("prg3"); // adiciona a animação do primeiro progresso
				personagemPrincipal.seletor.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() { // Terminou a animação executa a função
					$("#personagem").css({opacity:0});
					$(this).find("img").attr("src","img/"+id+"-"+personagemPrincipal.interage1+path.ext); // Muda gif personagem quando para para próxima fase
					conteudo(100, "id4");
				});
			}else if($(".sucesso").length == "4"){
				personagemPrincipal.seletor.find("img").attr("src","img/"+id+"-"+personagemPrincipal.movimentar+path.ext); // muda o gif personagem
				personagemPrincipal.seletor.removeClass("prg3").addClass("prg4"); // adiciona a animação do primeiro progresso
				personagemPrincipal.seletor.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() { // Terminou a animação executa a função
					$("#personagem").css({opacity:0});
					$(this).find("img").attr("src","img/"+id+"-"+personagemPrincipal.interage1+path.ext); // Muda gif personagem quando para para próxima fase
					conteudo(100, "id5");
				});
			}else if($(".sucesso").length == "5"){
				personagemPrincipal.seletor.find("img").attr("src","img/"+id+"-"+personagemPrincipal.movimentar+path.ext); // muda o gif personagem
				personagemPrincipal.seletor.removeClass("prg4").addClass("prg5"); // adiciona a animação do primeiro progresso
				personagemPrincipal.seletor.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() { // Terminou a animação executa a função
					$("#personagem").css({opacity:0});
					$(this).find("img").attr("src","img/"+id+"-"+personagemPrincipal.interage1+path.ext); // Muda gif personagem quando para para próxima fase
					conteudo(100, "id6");
				});
			}else if($(".sucesso").length == "6"){
				personagemPrincipal.seletor.find("img").attr("src","img/"+id+"-"+personagemPrincipal.movimentar+path.ext); // muda o gif personagem
				personagemPrincipal.seletor.removeClass("prg5").addClass("prg6"); // adiciona a animação do primeiro progresso
				personagemPrincipal.seletor.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() { // Terminou a animação executa a função
					$("#personagem").css({opacity:0});
					$(this).find("img").attr("src","img/"+id+"-"+personagemPrincipal.interage1+path.ext); // Muda gif personagem quando para para próxima fase
					conteudo(100, "id7");
				});
			}else if($(".sucesso").length == "7"){
				personagemPrincipal.seletor.find("img").attr("src","img/"+id+"-"+personagemPrincipal.movimentar+path.ext); // muda o gif personagem
				personagemPrincipal.seletor.removeClass("prg6").addClass("prg7"); // adiciona a animação do primeiro progresso
				personagemPrincipal.seletor.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() { // Terminou a animação executa a função
					$("#personagem").css({opacity:0});
					$(this).find("img").attr("src","img/"+id+"-"+personagemPrincipal.interage1+path.ext); // Muda gif personagem quando para para próxima fase
					conteudo(100, "id8");
				});
			}else if($(".sucesso").length == "8"){
				personagemPrincipal.seletor.find("img").attr("src","img/"+id+"-"+personagemPrincipal.movimentar+path.ext); // muda o gif personagem
				personagemPrincipal.seletor.removeClass("prg7").addClass("prg8"); // adiciona a animação do primeiro progresso
				personagemPrincipal.seletor.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() { // Terminou a animação executa a função
					$("#personagem").css({opacity:0});
					$(this).find("img").attr("src","img/"+id+"-"+personagemPrincipal.interage1+path.ext); // Muda gif personagem quando para para próxima fase
					conteudo(100, "id9");
				});
			}else if($(".sucesso").length == "9"){
				$(".balaoFinal").show().addClass("animated fadeInUp");
				$(".professor-final").show().addClass("animated fadeInUp");
				$("#personagem").remove();
				$("#parabens img").attr("src","img/"+id+"-"+personagemPrincipal.ganhou+path.ext);
				$("#parabens").show().addClass("animated fadeInUp");
				//somAmbiente.remove();
				audio2_somambiente.stop();
				//somSucesso.get(0).play();
				audio2_somsucesso.stop().play();
				//somFalaSucesso.get(0).play();
				audio2_falasucesso.stop().play();
				StartConfetti();
				$("canvas").show().addClass("animated fadeInUp");
				/*somSucesso.on("ended",function(){
					$("canvas").fadeOut(1000,function(){
						location.href = "index.html";
						sessionStorage.setItem('reiniciar_oed', 'sim');
					});
				});*/
			}
		},tempoExe);
	}
	
	function feedback(yPos,xPos,yWid,yHei,msg){
		//somAcerto.get(0).play();
		audio2_somacerto.play();
		$("#feedback div:first-child").css({
			marginTop:yPos,
			marginLeft:xPos,
			height: yHei,
			width: yWid
		});
		$("#feedback div:first-child span").css("bottom","27px");
		$("#feedback div:first-child p").html(msg);
		$("#feedback").css("background","rgba(96,161,215,.6)").show().addClass("animated fadeInUp");
		$(".professorF").show().addClass("animated slideInRight");
		setTimeout(function(){
			$("#feedback div:first-child").show().addClass("animated bounceIn");
			setTimeout(function(){
				movendo(velPgr);
				$("#feedback").removeClass("fadeInUp");
				$(".professorF").removeClass("slideInRight");
				$("#feedback div:first-child").removeClass("bounceIn");
				$("#feedback").addClass("fadeOutUp");
				$(".professorF").addClass("slideOutLeft");
				$("#feedback div:first-child").addClass("bounceOut");
				setTimeout(function(){
					$("#feedback").removeClass("fadeOutUp").hide();
					$(".professorF").removeClass("slideOutLeft").hide();
					$("#feedback div:first-child").removeClass("bounceOut").hide();
				},1000);
			},5500);
		},1000);
	}
			
	function feedbackE(yPos,xPos,yWid,yHei,msg){
		if(vidas != 0){
			//somErro.get(0).play();
			audio2_somerro.stop().play();
			$("#feedback div:first-child").css({
				marginTop:yPos,
				marginLeft:xPos,
				height: yHei,
				width: yWid
			});
			$("#feedback div:first-child span").css("bottom","55px");
			$(".pergunta").css({"-webkit-filter":"blur(5px) grayscale(.7) opacity(.95)"});
			$("#feedback div:first-child p").html(msg);
			$("#feedback").css("background","rgba(253,198,137,.7)").show().addClass("animated fadeInUp");
			$(".professorF").show().addClass("animated slideInRight");
			setTimeout(function(){
				$("#feedback div:first-child").show().addClass("animated bounceIn");
				setTimeout(function(){
					$("#feedback").removeClass("fadeInUp");
					$(".professorF").removeClass("slideInRight");
					$("#feedback div:first-child").removeClass("bounceIn");
					$("#feedback").addClass("fadeOutUp");
					$(".professorF").addClass("slideOutLeft");
					$("#feedback div:first-child").addClass("bounceOut");
					$(".pergunta").css({"-webkit-filter":"blur(0px) grayscale(0) opacity(1)"});
					setTimeout(function(){
						$("#feedback").removeClass("fadeOutUp").hide();
						$(".professorF").removeClass("slideOutLeft").hide();
						$("#feedback div:first-child").removeClass("bounceOut").hide();
					},1000);
				},8100);
			},1000);
		}else {
			$("#feedback div:first-child").css({
				marginTop:yPos,
				marginLeft:xPos,
				height: yHei,
				width: yWid,
			});
			$("#feedback div:first-child span").css("bottom","40px");
			somAmbiente.prop("volume", 0.2);
			$("#feedback div:first-child p").html(msg);
			$("#feedback").css("background","rgba(253,198,137,.95)").show().addClass("animated fadeInUp");
			$(".professorF").show().addClass("animated slideInRight");
			setTimeout(function(){
				$("#feedback div:first-child").show().addClass("animated bounceIn");
				setTimeout(function(){
					//location.href = "index.html";
					sessionStorage.setItem('reiniciar_oed', 'sim');
				},7000);
			},1000);
		}
	}
			
	var velPgr = 1500,
		vidas = 3;
	function conteudo(tempo, idPergunta){
		setTimeout(function(){
			vidas = 3;
			$("#"+idPergunta).show().addClass("animated flipInY");
			if(idPergunta == "id1"){
				audio2_somperguntafase1.stop().play();
			}else if(idPergunta == "id2"){
				audio2_somperguntafase1.stop();					
				audio2_somperguntafase2.stop().play();			
			}else if(idPergunta == "id3"){
				audio2_somperguntafase1.stop();
				audio2_somperguntafase2.stop();	
				audio2_somperguntafase2.volume(0);
				audio2_somperguntafase3.stop().play();	
			}else if(idPergunta == "id4"){
				audio2_somperguntafase1.stop();
				audio2_somperguntafase2.stop();
				audio2_somperguntafase3.stop();					
				audio2_somperguntafase4.stop().play();	
			}else if(idPergunta == "id5"){
				audio2_somperguntafase1.stop();
				audio2_somperguntafase2.stop();
				audio2_somperguntafase3.stop();
				audio2_somperguntafase4.stop();					
				audio2_somperguntafase5.stop().play();	
			}else if(idPergunta == "id6"){
				audio2_somperguntafase1.stop();
				audio2_somperguntafase2.stop();
				audio2_somperguntafase3.stop();
				audio2_somperguntafase4.stop();					
				audio2_somperguntafase5.stop();
				audio2_somperguntafase6.stop().play();	
			}else if(idPergunta == "id7"){
				audio2_somperguntafase1.stop();
				audio2_somperguntafase2.stop();
				audio2_somperguntafase3.stop();
				audio2_somperguntafase4.stop();					
				audio2_somperguntafase5.stop();
				audio2_somperguntafase6.stop();	
				audio2_somperguntafase7.play();	
			}else if(idPergunta == "id8"){
				audio2_somperguntafase1.stop();
				audio2_somperguntafase2.stop();
				audio2_somperguntafase3.stop();
				audio2_somperguntafase4.stop();					
				audio2_somperguntafase5.stop();
				audio2_somperguntafase6.stop();	
				audio2_somperguntafase7.stop();	
				audio2_somperguntafase8.stop().play();	
			}else if(idPergunta == "id9"){
				audio2_somperguntafase1.stop();
				audio2_somperguntafase2.stop();
				audio2_somperguntafase3.stop();
				audio2_somperguntafase4.stop();					
				audio2_somperguntafase5.stop();
				audio2_somperguntafase6.stop();	
				audio2_somperguntafase7.stop();	
				audio2_somperguntafase8.stop();
				audio2_somperguntafase9.stop().play();	
			}
		},tempo);		
	}

	var alturaPadraoC = "60px";
	var alturaPadraoE = "87px";
	var alturaPadraoE2 = "116px";
	
	$("#id1 ul li").on("click",function(){
		//somPerguntaFase1.remove();
		audio2_somperguntafase1.stop();
		if($(this).hasClass("acerto")){
			setTimeout(function(){/*somAcertoFase1.get(0).play();*/audio2_somacertofase1.play();},700);
			$(this).addClass("sucesso");
			$("#personagem").css({opacity:1});
			$("#id1").removeClass("animated flipInY").addClass("animated flipOutY"); // Esconde janela
			feedback("250px","265px","400px",alturaPadraoC,"Você acertou! Há 4 mapas na tela. Parabéns!"); // Carrega feed de acerto
		}else{
			$(this).css({"opacity":".3"}).off("click"); // Bloqueia alternativa
			var arranca = vidas--; $("#id1 p img:first-child").remove(); // Detona vida
			feedbackE("233px","265px","400px",alturaPadraoE,"Infelizmente o número escolhido não corresponde à quantidade de mapas que está na tela.");
			setTimeout(function(){/*somErroFase1.get(0).play();*/audio2_somerrofase1.play();},700);
			if(vidas === 0){
				if(id == "p1"){
					//somErroFase1.prop("volume",0);
					//somGameoverM.get(0).play();
					setTimeout(function(){
					audio2_somerrofase1.stop();
					audio2_somgameoverm.stop().play();
					},800);
					feedbackE("233px","265px","400px",alturaPadraoE,"Seja bem-vindo para reiniciar o passeio, fique atento desta vez, boa sorte!");
				}else if(id == "p2"){
					//somErroFase1.prop("volume",0);
					//somGameoverF.get(0).play();
					setTimeout(function(){
					audio2_somerrofase1.stop();
					audio2_somgameoverf.stop().play();
					},800);
					feedbackE("233px","265px","400px",alturaPadraoE,"Seja bem-vinda para reiniciar o passeio, fique atenta desta vez, boa sorte!");
				}
			}
		}
	});
	$("#id2 ul li").on("click",function(){
		//somPerguntaFase2.remove();
		audio2_somperguntafase2.stop();
		if($(this).hasClass("acerto")){
			setTimeout(function(){/*somAcertoFase2.get(0).play();*/audio2_somacertofase2.play();},700);
			$(this).addClass("sucesso");
			$("#id2").removeClass("animated flipInY").addClass("animated flipOutY");
			$("#personagem").css({opacity:1});
			feedback("250px","265px","400px",alturaPadraoC,"Você acertou! Há 8 pedalinhos na tela. Parabéns!");
		}else{
			$(this).css({"opacity":".3"}).off("click"); // Bloqueia alternativa
			var arranca = vidas--; $("#id2 p img:first-child").remove(); // Detona vida
			setTimeout(function(){/*somErroFase2.get(0).play();*/audio2_somerrofase2.play();},700);
			feedbackE("233px","255px","415px",alturaPadraoE2,"Infelizmente o número escolhido não corresponde à quantidade de pedalinhos que está na tela. Você não quer tentar novamente?");
			if(vidas === 0){
				if(id == "p1"){
					//somErroFase2.prop("volume",0);
					//somGameoverM.get(0).play();
					setTimeout(function(){
					audio2_somerrofase2.stop();
					audio2_somgameoverm.stop().play();
					},800);
					feedbackE("233px","265px","400px",alturaPadraoE,"Seja bem-vindo para reiniciar o passeio, fique atento desta vez, boa sorte!");
				}else if(id == "p2"){
					//somErroFase2.prop("volume",0);
					//somGameoverF.get(0).play();
					setTimeout(function(){
					audio2_somerrofase2.stop();
					audio2_somgameoverf.stop().play();
					},800);
					feedbackE("233px","265px","400px",alturaPadraoE,"Seja bem-vinda para reiniciar o passeio, fique atenta desta vez, boa sorte!");
				}
			}
		}
	});
	$("#id3 ul li").on("click",function(){
		//somPerguntaFase3.remove();
		audio2_somperguntafase3.stop();
		if($(this).hasClass("acerto")){
			setTimeout(function(){/*somAcertoFase3.get(0).play();*/audio2_somacertofase2.volume(0);audio2_somacertofase3.play();},700);
			$(this).addClass("sucesso");
			$("#personagem").css({opacity:1});
			$("#id3").removeClass("animated flipInY").addClass("animated flipOutY");
			feedback("250px","265px","400px",alturaPadraoC,"Você acertou! Há 7 tatus na tela. Parabéns!");
		}else{
			$(this).css({"opacity":".3"}).off("click");
			var arranca = vidas--; $("#id3 p img:first-child").remove();
			setTimeout(function(){/*somErroFase3.get(0).play();*/audio2_somerrofase3.play();},700);
			feedbackE("233px","255px","415px",alturaPadraoE2,"Infelizmente o número escolhido não corresponde à quantidade de tatus que está na tela. Você não quer tentar novamente?");
			if(vidas === 0){
				if(id == "p1"){
					//somErroFase3.prop("volume",0);
					//somGameoverM.get(0).play();
					setTimeout(function(){
					audio2_somerrofase3.stop();
					audio2_somgameoverm.stop().play();
					},800);					
					feedbackE("233px","265px","400px",alturaPadraoE,"Seja bem-vindo para reiniciar o passeio, fique atento desta vez, boa sorte!");
				}else if(id == "p2"){
					//somErroFase3.prop("volume",0);
					//somGameoverF.get(0).play();
					setTimeout(function(){
					audio2_somerrofase3.stop();
					audio2_somgameoverf.stop().play();
					},800);						
					feedbackE("233px","265px","400px",alturaPadraoE,"Seja bem-vinda para reiniciar o passeio, fique atenta desta vez, boa sorte!");
				}
			}
		}
	});
	$("#id4 ul li").on("click",function(){
		//somPerguntaFase4.remove();
		audio2_somperguntafase4.stop();
		if($(this).hasClass("acerto")){
			setTimeout(function(){/*somAcertoFase4.get(0).play();*/audio2_somacertofase4.play();},700);
			$(this).addClass("sucesso");
			$("#personagem").css({opacity:1});
			$("#id4").removeClass("animated flipInY").addClass("animated flipOutY");
			feedback("250px","255px","415px",alturaPadraoC,"Você acertou! Há 5 cestas na tela. Parabéns!");
		}else{
			$(this).css({"opacity":".3"}).off("click");
			var arranca = vidas--; $("#id4 p img:first-child").remove();
			setTimeout(function(){/*somErroFase4.get(0).play();*/audio2_somerrofase4.play();},700);
			feedbackE("233px","205px","455px",alturaPadraoE2,"Infelizmente o número escolhido não corresponde à quantidade de cestas de piquenique que está na tela. Você não quer tentar novamente?");
			if(vidas === 0){
				if(id == "p1"){
					//somErroFase4.prop("volume",0);
					//somGameoverM.get(0).play();
					setTimeout(function(){
					audio2_somerrofase4.stop();
					audio2_somgameoverm.stop().play();	
					},800);				
					feedbackE("233px","265px","400px",alturaPadraoE,"Seja bem-vindo para reiniciar o passeio, fique atento desta vez, boa sorte!");
				}else if(id == "p2"){
					//somErroFase4.prop("volume",0);
					//somGameoverF.get(0).play();
					setTimeout(function(){
					audio2_somerrofase4.stop();
					audio2_somgameoverf.stop().play();	
					},800);						
					feedbackE("233px","265px","400px",alturaPadraoE,"Seja bem-vinda para reiniciar o passeio, fique atenta desta vez, boa sorte!");
				}
			}
		}
	});
	$("#id5 ul li").on("click",function(){
		//somPerguntaFase5.remove();
		audio2_somperguntafase5.stop();
		if($(this).hasClass("acerto")){
			setTimeout(function(){/*somAcertoFase5.get(0).play();*/audio2_somacertofase5.play();},700);
			$(this).addClass("sucesso");
			$("#personagem").css({opacity:1});
			$("#id5").removeClass("animated flipInY").addClass("animated flipOutY");
			feedback("250px","265px","400px",alturaPadraoC,"Você acertou! Há 2 corujas na tela. Parabéns!");
		}else{
			$(this).css({"opacity":".3"}).off("click");
			var arranca = vidas--; $("#id5 p img:first-child").remove();
			setTimeout(function(){/*somErroFase5.get(0).play();*/audio2_somerrofase5.play();},700);
			feedbackE("233px","255px","415px",alturaPadraoE2,"Infelizmente o número escolhido não corresponde à quantidade de corujas que está na tela. Você não quer tentar novamente?");
			if(vidas === 0){
				if(id == "p1"){
					//somErroFase5.prop("volume",0);
					//somGameoverM.get(0).play();
					setTimeout(function(){
					audio2_somerrofase5.stop();
					audio2_somgameoverm.stop().play();
					},800);					
					feedbackE("233px","265px","400px",alturaPadraoE,"Seja bem-vindo para reiniciar o passeio, fique atento desta vez, boa sorte!");
				}else if(id == "p2"){
					//somErroFase5.prop("volume",0);
					//somGameoverF.get(0).play();
					setTimeout(function(){
					audio2_somerrofase5.stop();
					audio2_somgameoverf.stop().play();
					},800);						
					feedbackE("233px","265px","400px",alturaPadraoE,"Seja bem-vinda para reiniciar o passeio, fique atenta desta vez, boa sorte!");
				}
			}
		}
	});
	$("#id6 ul li").on("click",function(){
		//somPerguntaFase6.remove();
		audio2_somperguntafase6.stop();
		if($(this).hasClass("acerto")){
			setTimeout(function(){/*somAcertoFase6.get(0).play();*/audio2_somacertofase6.play();},700);
			$(this).addClass("sucesso");
			$("#personagem").css({opacity:1});
			$("#id6").removeClass("animated flipInY").addClass("animated flipOutY");
			feedback("250px","265px","400px",alturaPadraoC,"Você acertou! Há 6 árvores na tela. Parabéns!");
		}else{
			$(this).css({"opacity":".3"}).off("click");
			var arranca = vidas--; $("#id6 p img:first-child").remove();
			setTimeout(function(){/*somErroFase6.get(0).play();*/audio2_somerrofase6.play();},700);
			feedbackE("233px","255px","415px",alturaPadraoE2,"Infelizmente o número escolhido não corresponde à quantidade de árvores que está na tela. Você não quer tentar novamente?");
			if(vidas === 0){
				if(id == "p1"){
					//somErroFase6.prop("volume",0);
					//somGameoverM.get(0).play();
					setTimeout(function(){
					audio2_somerrofase6.stop();
					audio2_somgameoverm.stop().play();
					},800);						
					feedbackE("233px","265px","400px",alturaPadraoE,"Seja bem-vindo para reiniciar o passeio, fique atento desta vez, boa sorte!");
				}else if(id == "p2"){
					//somErroFase6.prop("volume",0);
					//somGameoverF.get(0).play();
					setTimeout(function(){
					audio2_somerrofase6.stop();
					audio2_somgameoverf.stop().play();
					},800);						
					feedbackE("233px","265px","400px",alturaPadraoE,"Seja bem-vinda para reiniciar o passeio, fique atenta desta vez, boa sorte!");
				}
			}
		}
	});
	$("#id7 ul li").on("click",function(){
		//somPerguntaFase7.remove();
		audio2_somperguntafase7.stop();
		if($(this).hasClass("acerto")){
			setTimeout(function(){/*somAcertoFase7.get(0).play();*/audio2_somacertofase7.play();},700);
			$(this).addClass("sucesso");
			$("#personagem").css({opacity:1});
			$("#id7").removeClass("animated flipInY").addClass("animated flipOutY");
			feedback("250px","265px","400px",alturaPadraoC,"Você acertou! Há 1 sorvete na tela. Parabéns!");
		}else{
			$(this).css({"opacity":".3"}).off("click");
			var arranca = vidas--; $("#id7 p img:first-child").remove();
			setTimeout(function(){/*somErroFase7.get(0).play();*/audio2_somerrofase7.play();},700);
			feedbackE("233px","255px","415px",alturaPadraoE2,"Infelizmente o número escolhido não corresponde à quantidade de sorvetes que está na tela. Você não quer tentar novamente?");
			if(vidas === 0){
				if(id == "p1"){
					//somErroFase7.prop("volume",0);
					//somGameoverM.get(0).play();
					setTimeout(function(){
					audio2_somerrofase.stop();
					audio2_somgameoverm.stop().play();
					},800);						
					feedbackE("233px","265px","400px",alturaPadraoE,"Seja bem-vindo para reiniciar o passeio, fique atento desta vez, boa sorte!");
				}else if(id == "p2"){
					//somErroFase7.prop("volume",0);
					//somGameoverF.get(0).play();
					setTimeout(function(){
					audio2_somerrofase7.stop();
					audio2_somgameoverf.stop().play();	
					},800);										
					feedbackE("233px","265px","400px",alturaPadraoE,"Seja bem-vinda para reiniciar o passeio, fique atenta desta vez, boa sorte!");
				}
			}
		}
	});
	$("#id8 ul li").on("click",function(){
		//somPerguntaFase8.remove();
		audio2_somperguntafase8.stop();
		if($(this).hasClass("acerto")){
			setTimeout(function(){/*somAcertoFase8.get(0).play();*/audio2_somacertofase8.play();},700);
			$(this).addClass("sucesso");
			$("#personagem").css({opacity:1});
			$("#id8").removeClass("animated flipInY").addClass("animated flipOutY");
			feedback("250px","265px","400px",alturaPadraoC,"Você acertou! Há 3 <em>skates</em> na tela. Parabéns!");
		}else{
			$(this).css({"opacity":".3"}).off("click");
			var arranca = vidas--; $("#id8 p img:first-child").remove();
			setTimeout(function(){/*somErroFase8.get(0).play();*/audio2_somerrofase8.play();},700);
			feedbackE("233px","255px","415px",alturaPadraoE2,"Infelizmente o número escolhido não corresponde à quantidade de <em>skates</em> que está na tela. Você não quer tentar novamente?");
			if(vidas === 0){
				if(id == "p1"){
					//somErroFase8.prop("volume",0);
					//somGameoverM.get(0).play();
					setTimeout(function(){
					audio2_somerrofase8.stop();
					audio2_somgameoverm.stop().play();	
					},800);						
					feedbackE("233px","265px","400px",alturaPadraoE,"Seja bem-vindo para reiniciar o passeio, fique atento desta vez, boa sorte!");
				}else if(id == "p2"){
					//somErroFase8.prop("volume",0);
					//somGameoverF.get(0).play();
					setTimeout(function(){
					audio2_somerrofase8.stop();
					audio2_somgameoverf.stop().play();	
					},800);						
					feedbackE("233px","265px","400px",alturaPadraoE,"Seja bem-vinda para reiniciar o passeio, fique atenta desta vez, boa sorte!");
				}
			}
		}
	});
	$("#id9 ul li").on("click",function(){
		//somPerguntaFase9.remove();
		audio2_somperguntafase9.stop();
		if($(this).hasClass("acerto")){
			setTimeout(function(){/*somAcertoFase9.get(0).play();*/audio2_somacertofase9.play();},700);
			$(this).addClass("sucesso");
			$("#personagem").css({opacity:1});
			$("#id9").removeClass("animated flipInY").addClass("animated flipOutY");
			feedback("250px","265px","400px",alturaPadraoC,"Você acertou! Há 9 fotografias na tela. Parabéns!");
		}else{
			$(this).css({"opacity":".3"}).off("click");
			var arranca = vidas--; $("#id9 p img:first-child").remove();
			setTimeout(function(){/*somErroFase9.get(0).play();*/audio2_somerrofase9.play();},700);
			feedbackE("233px","255px","415px",alturaPadraoE2,"Infelizmente o número escolhido não corresponde à quantidade de fotografias que está na tela. Você não quer tentar novamente?");
			if(vidas === 0){
				if(id == "p1"){
					//somErroFase9.prop("volume",0);
					//somGameoverM.get(0).play();
					setTimeout(function(){
					audio2_somerrofase9.stop();
					audio2_somgameoverm.stop().play();	
					},800);						
					feedbackE("233px","265px","400px",alturaPadraoE,"Seja bem-vindo para reiniciar o passeio, fique atento desta vez, boa sorte!");
				}else if(id == "p2"){
					//somErroFase9.prop("volume",0);
					//somGameoverF.get(0).play();
					setTimeout(function(){
					audio2_somerrofase9.stop();
					audio2_somgameoverf.stop().play();	
					},800);						

					feedbackE("233px","265px","400px",alturaPadraoE,"Seja bem-vinda para reiniciar o passeio, fique atenta desta vez, boa sorte!");
				}
			}
		}
	});

	
	//Variáveis da capa
	var 
	capa = {
		imagem: $("#capa"),
		cabecalho: $("#capa .header"),
		subcapa: $("#capa .subheader"),
		tituloCabecalho: $("#capa .header h1"),
		botaoIniciar: $("#capa .acoes div:first-child"),
		botaoCredito: $("#capa .acoes div:nth-child(2)"),
		creditos: {
			janela: $("#creditos"),
			texto: $(".text-creditos"),
			botaoFechar: $(".btnFechaCreditos")
		}
	}
	
	// Variáveis diversas
	var
	sons = $("audio");
	
	somIntro = $(".som-introducaoambiente");
	somAmbiente = $(".som-ambiente");
	somAcerto = $(".som-acerto");
	somErro = $(".som-erro");
	somSucesso = $(".som-sucesso");
	somFalaSucesso = $(".som-falasucesso");
	somGameoverF = $(".som-gameoverF");
	somGameoverM = $(".som-gameoverM");
	
	somTexto1 = $(".som-texto1"),
	
	somPerguntaFase1 = $(".som-pergunta1"),
	somPerguntaFase2 = $(".som-pergunta2"),
	somPerguntaFase3 = $(".som-pergunta3"),
	somPerguntaFase4 = $(".som-pergunta4"),
	somPerguntaFase5 = $(".som-pergunta5"),
	somPerguntaFase6 = $(".som-pergunta6"),
	somPerguntaFase7 = $(".som-pergunta7"),
	somPerguntaFase8 = $(".som-pergunta8"),
	somPerguntaFase9 = $(".som-pergunta9"),

	somAcertoFase1 = $(".som-acerto1"),
	somAcertoFase2 = $(".som-acerto2"),
	somAcertoFase3 = $(".som-acerto3"),
	somAcertoFase4 = $(".som-acerto4"),
	somAcertoFase5 = $(".som-acerto5"),
	somAcertoFase6 = $(".som-acerto6"),
	somAcertoFase7 = $(".som-acerto7"),
	somAcertoFase8 = $(".som-acerto8"),
	somAcertoFase9 = $(".som-acerto9"),

	somErroFase1 = $(".som-erro1"),
	somErroFase2 = $(".som-erro2"),
	somErroFase3 = $(".som-erro3"),
	somErroFase4 = $(".som-erro4"),
	somErroFase5 = $(".som-erro5"),
	somErroFase6 = $(".som-erro6"),
	somErroFase7 = $(".som-erro7"),
	somErroFase8 = $(".som-erro8"),
	somErroFase9 = $(".som-erro9")

	// Variáveis do menu Opções do Objeto
	var 
	opcoes = {
		ativo:0,
		tool: $(".actionOptions"),
		botoes: $("#navOptions"),
		overlay: $(".overlayOptions"),
		menu: {
			geral: $("#navOptions li"),
			background: $("#btnOptions"),
			atualizar: $(".imghome"),
			principal: $(".btnMenu"),
			som: $(".btnSom"),
			somOff: $(".btnSomOff"),
			instrucoes: $(".btnInstrucoes")
		},
		cntInstrucoes: $("#instrucoes"),
		textoInstrucoes: "Escolha o número relacionado a quantidade de itens da alternativa apresentada."
	}
	animacao = $("#interaction");
	
	var botaoFechaPop = $(".btnFechaPopUp");
	var botaoFechaSmall = $(".btnFechaSmall");
	var botaoFechaSmallFinaliza = $(".btnFechaSmallFinaliza");


		//Botão que fecha o Pop e Small
	botaoFechaSmall.on({
		click: function(){
			$(".feedsmall").css({
				"transform":"scale(0)",
				"-moz-transform":"scale(0)",
				"-ms-transform":"scale(0)",
				"-o-transform":"scale(0)",
				"-webkit-transform":"scale(0)"
			});
			setTimeout(function(){
				$(".overlay-small").fadeOut(300);
				//desliga = 'play';
			},500);
		}
	});
	botaoFechaSmallFinaliza.on({
		click: function(){
			//location.href="index.html"
			sessionStorage.setItem('reiniciar_oed', 'sim');
		}
	});
opcoes.menu.instrucoes.hide();
	// Variáveis diversas
	var
	audioTrilha = $(".musica-som");
	audioAcerto = $(".acerto-som");
	audioErro = $(".erro-som");
	animacao = $("#interaction");
	
	//Carrega Capa
	capa.cabecalho.show().addClass("animated slideInRight");
	capa.tituloCabecalho.text(config.titulo);
	setTimeout(function(){
		capa.subcapa.css({"margin-top":"-222px",opacity:"1"});
		capa.botaoIniciar.show().addClass("animated lightSpeedIn");
		setTimeout(function(){capa.botaoIniciar.removeClass("animated lightSpeedIn");},1000);
		capa.botaoCredito.delay(500).fadeIn(500);
	},1000);
	
// --------------------------- Botões Padrões
	// Inicia Objeto
	/*capa.botaoIniciar.on("click",function()*/function iniciar_oed_funcoes(){
		capa.cabecalho.css({marginTop:"-380px"});
		capa.botaoIniciar.css({width:"0", marginRight:"-50px"});
		capa.botaoCredito.css({marginLeft:"250px"});
		//somIntro.get(0).play();
		audio2_somintro.play();
		
		setTimeout(function(){
			capa.imagem.fadeOut(300,function(){
				$(this).remove();
				//audioTrilha.get(0).play();
				setTimeout(function(){
					$("#bemvindo").show().addClass("animated bounceIn");
					setTimeout(function(){
						personagem1.seletor.show(0).addClass("animated bounceInUp");
						setTimeout(function(){
							personagem2.seletor.show(0).addClass("animated bounceInUp");
							setTimeout(function(){
								$(".personagem1, .personagem2").removeClass("bounceInUp");
								$("#bemvindo").removeClass("animated bounceIn");
								$(".professor").show().addClass("animated slideInRight");
								setTimeout(function(){
									$(".fala").show().addClass("animated bounceIn");
									//somIntro.prop("volume", 0.2);
									//audio2_somintro.stop();
									
									audio2_somtexto1.stop().play();
									somTexto1.on("ended",function(){
										somIntro.prop("volume", 1);
										personagem1.seletor.animate({opacity:0},100).animate({opacity:1},100).animate({opacity:0},100).animate({opacity:1},100).animate({opacity:0},100).animate({opacity:1},100,function(){
											personagem2.seletor.animate({opacity:0},100).animate({opacity:1},100).animate({opacity:0},100).animate({opacity:1},100).animate({opacity:0},100).animate({opacity:1},100);
										});
										
									});
									// Ação dos personagens
									personagem1.seletor.on({
										mouseover:function(){
											$(this).find("img").attr("src","img/personagem1-hover.png")
											$(this).addClass("animated tada")
										},
										mouseleave:function(){
											$(this).find("img").attr("src","img/personagem1.png")
											$(this).removeClass("animated tada")
										}
									});
									personagem2.seletor.on({
										mouseover:function(){
											$(this).find("img").attr("src","img/personagem2-hover.png")
											$(this).addClass("animated tada")
										},
										mouseleave:function(){
											$(this).find("img").attr("src","img/personagem2.png")
											$(this).removeClass("animated tada")
										}
									});
									personagem1.seletor.on({
										click:function(){
											id = "p1";
											personagem1.seletor.off("click");
											personagemPrincipal.seletor.append("<img src='img/"+id+"-interativo1"+path.ext+"' alt=''>").delay(500).fadeIn(300);
											$("#bemvindo").addClass("animated bounceOut");
											$(".pergunta p").find("img").attr("src","img/vida-"+id+".png");
											movendo(1500);
											somTexto1.remove();
											audio2_somtexto1.stop();
											//somIntro.remove();
											audio2_somintro.stop();
											//somAmbiente.get(0).play();
											audio2_somambiente.stop().play();
											setTimeout(function(){
												$("#bemvindo").remove();
												personagem1.seletor.hide();
												personagem2.seletor.hide();
											},1500);
											opcoes.menu.instrucoes.show();
										}
									})
									personagem2.seletor.on({
										click:function(){
											id = "p2";
											personagem2.seletor.off("click");
											personagemPrincipal.seletor.append("<img src='img/"+id+"-interativo1"+path.ext+"' alt=''>").delay(500).fadeIn(300);
											$("#bemvindo").addClass("animated bounceOut");
											$(".pergunta p").find("img").attr("src","img/vida-"+id+".png");
											movendo(1500);
											//somTexto1.remove();
											audio2_somtexto1.stop();
											//somIntro.remove();
											audio2_somintro.stop();
											//somAmbiente.get(0).play();
											audio2_somambiente.stop().play();
											setTimeout(function(){
												$("#bemvindo").remove();
												personagem1.seletor.hide();
												personagem2.seletor.hide();
											},1500);
											opcoes.menu.instrucoes.show();
										}
									})
								},1000);
							},1000);
						},300);
					},500);
				},2000);
				
			});
		},400);
	};
	
	// Ativa créditos
	capa.botaoCredito.on("click",function(){
		$(this).fadeOut(500);		
		capa.creditos.janela.fadeIn(500,function(){
			capa.creditos.texto.stop().animate({marginTop:"-340px"},25000, "linear");
			starwars = setInterval(function(){
				capa.creditos.texto.css({marginTop:"261px"}).stop().animate({marginTop:"-340px"},25000, "linear");
			},25000);
			
		});
	});
	
	//Fecha os créditos
	capa.creditos.botaoFechar.on("click",function(){
		capa.creditos.texto.stop().css({marginTop:"261px"});
		clearInterval(starwars);
		capa.creditos.janela.fadeOut(500);
		capa.botaoCredito.fadeIn(500);
	});

	// Abre opções do Objeto
	opcoes.tool.on({
		click:function(){
			if(opcoes.ativo == 0){
				textosInstrucoes(txtLvl);
				$(this).parent().css("box-shadow","-5px -25px 10px rgba(0,0,0,.5)");
				$(this).css("opacity",".3");
				opcoes.cntInstrucoes.removeClass("animated rotateOutUpRight");
				opcoes.cntInstrucoes.show().addClass("animated rotateInDownRight");
				opcoes.ativo = 1;
			}else{
				$(this).parent().css("box-shadow","none");
				$(this).css("opacity","1");
				opcoes.cntInstrucoes.removeClass("animated rotateInDownRight");
				opcoes.cntInstrucoes.addClass("animated rotateOutUpRight");
				opcoes.ativo = 0;
			}
		}
	});
	
	opcoes.overlay.on({
		click: function(){
			opcoes.tool.removeClass("opened").css({backgroundPosition:"11px 15px"});
			opcoes.botoes.hide();
			opcoes.menu.background.css({height:"78px", backgroundPosition:"bottom"});
			$(".overlayOptions").hide();
			if($(".seta").is(":visible")){
				opcoes.cntInstrucoes.css({
				width:"0px",
				opacity:"0"
				});
				$(".seta").fadeOut(200);
				$("#instrucoes p").remove();
			}
		}
		
	});
	// Botão Volta pra capa
	opcoes.menu.atualizar.on("click",function(){
		//location.href="index.html"
		sessionStorage.setItem('reiniciar_oed', 'sim');
	});
	
// Final
//iniciar_oed_funcoes();



verificar_inicio();


	function verificar_inicio(){
	  verificar_inicio_cnd = setInterval(function(){
	  if(window.sessionStorage.getItem('iniciar_oed')=='sim'){
	      iniciar_oed_funcoes();
		  //startGame.init();
	      clearInterval(verificar_inicio_cnd);
	    }
	  }, 1000);
	}
}

	function iniciar_com_tap(){
	//alert("Tap");
	audio2_somintro.play();
	audio2_somintro.stop();
	iniciar_oed_funcoes();
	
	clearInterval(verificar_inicio_cnd);
}

function iniciar_trilha(){
	//audio2_somintro.play();	
}

	

