document.write("Scripts_RPG.js");

 function Escolher() {
	  var Jogadores = document.getElementById("Personagem");
	  var Personagens = Jogadores.options[Jogadores.selectedIndex].value;
	  var Vai = document.getElementById("Imagem");
	  
	  if (Personagens == 'Rb') {
	     Vai.src ='file:///C:/Users/canal/Desktop/photo5125523021275179314-removebg-preview.png';
		 Imagem.style.width = "22%";
	  } else if (Personagens == 'Mt') {
	     Vai.src ="https://w7.pngwing.com/pngs/724/742/png-transparent-software-testing-computer-icons-quiz-miscellaneous-text-logo.png";
	  } else if (Personagens == 'Nm') {
	     Vai.src ="file:///C:/Users/canal/Desktop/arquivos/fotos%20RPG/WhatsApp_Image_2021-05-28_at_20.34.49-removebg-preview.png";
	  } else {
	   alert("Escolha seu personagem");
	  }
	}
	
	
   document.getElementById("[id=Força]").onclick = Força;
   
   function Força() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
 
   if (document.getElementById("Força").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("Força").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Força").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Força").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Força").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Força").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Força").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Força").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Força").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Força").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Força").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Força").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("Força").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Força").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Força").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Força").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Força").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Força").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Força").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Força").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
   document.getElementById("[id=Agilidade]").onclick = Agilidade;
   
   function Agilidade() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("Agilidade").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("Agilidade").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Agilidade").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Agilidade").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Agilidade").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Agilidade").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Agilidade").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Agilidade").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Agilidade").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Agilidade").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Agilidade").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Agilidade").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("Agilidade").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Agilidade").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Agilidade").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Agilidade").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Agilidade").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Agilidade").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Agilidade").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Agilidade").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
   document.getElementById("[id=COC]").onclick = COC;
   
   function COC() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("C.O.C").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("C.O.C").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("C.O.C").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("C.O.C").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("C.O.C").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("C.O.C").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("C.O.C").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("C.O.C").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("C.O.C").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("C.O.C").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("C.O.C").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("C.O.C").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("C.O.C").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("C.O.C").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("C.O.C").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("C.O.C").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("C.O.C").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("C.O.C").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("C.O.C").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("C.O.C").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
    document.getElementById("[id=INT]").onclick = INT;
   
   function INT() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("INT").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("INT").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INT").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INT").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INT").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INT").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INT").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INT").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INT").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INT").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INT").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INT").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("INT").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INT").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INT").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INT").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INT").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INT").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INT").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INT").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
   document.getElementById("[id=RAC]").onclick = RAC;
   
   function RAC() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("RAC").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("RAC").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RAC").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RAC").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RAC").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RAC").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RAC").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RAC").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RAC").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RAC").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RAC").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RAC").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("RAC").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RAC").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RAC").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RAC").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RAC").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RAC").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RAC").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RAC").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
   document.getElementById("[id=ESTA]").onclick = ESTA;
   
   function ESTA() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("ESTA").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("ESTA").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESTA").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESTA").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESTA").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESTA").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESTA").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESTA").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESTA").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESTA").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESTA").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESTA").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("ESTA").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESTA").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESTA").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESTA").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESTA").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESTA").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESTA").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESTA").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
    document.getElementById("[id=Salto]").onclick = Salto;
   
   function Salto() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("Salto").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("Salto").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Salto").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Salto").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Salto").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Salto").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Salto").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Salto").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Salto").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Salto").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Salto").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Salto").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("Salto").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Salto").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Salto").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Salto").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Salto").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Salto").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Salto").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Salto").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
    document.getElementById("[id=NAT]").onclick = NAT;
   
   function NAT() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("NAT").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("NAT").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("NAT").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("NAT").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("NAT").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("NAT").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("NAT").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("NAT").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("NAT").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("NAT").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("NAT").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("NAT").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("NAT").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("NAT").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("NAT").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("NAT").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("NAT").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("NAT").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("NAT").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("NAT").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
     document.getElementById("[id=RES]").onclick = RES;
   
   function RES() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("RES").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("RES").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RES").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RES").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RES").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RES").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RES").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RES").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RES").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RES").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RES").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RES").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("RES").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RES").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RES").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RES").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RES").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RES").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RES").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("RES").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
    document.getElementById("[id=CONST]").onclick = CONST;
   
   function CONST() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("CONST").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("CONST").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CONST").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CONST").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CONST").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CONST").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CONST").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CONST").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CONST").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CONST").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CONST").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CONST").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("CONST").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CONST").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CONST").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CONST").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CONST").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CONST").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CONST").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CONST").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
   document.getElementById("[id=FUR]").onclick = FUR;
   
   function FUR() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("FUR").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("FUR").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("FUR").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("FUR").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("FUR").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("FUR").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("FUR").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("FUR").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("FUR").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("FUR").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("FUR").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("FUR").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("FUR").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("FUR").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("FUR").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("FUR").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("FUR").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("FUR").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("FUR").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("FUR").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
    document.getElementById("[id=ARR]").onclick = ARR;
   
   function ARR() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("ARR").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("ARR").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ARR").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ARR").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ARR").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ARR").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ARR").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ARR").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ARR").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ARR").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ARR").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ARR").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("ARR").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ARR").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ARR").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ARR").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ARR").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ARR").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ARR").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ARR").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
    document.getElementById("[id=CAR]").onclick = CAR;
   
   function CAR() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("CAR").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("CAR").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CAR").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CAR").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CAR").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CAR").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CAR").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CAR").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CAR").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CAR").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CAR").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CAR").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("CAR").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CAR").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CAR").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CAR").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CAR").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CAR").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CAR").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("CAR").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
   document.getElementById("[id=SOR]").onclick = SOR;
   
   function SOR() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("SOR").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("SOR").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("SOR").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("SOR").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("SOR").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("SOR").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("SOR").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("SOR").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("SOR").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("SOR").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("SOR").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("SOR").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("SOR").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("SOR").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("SOR").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("SOR").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("SOR").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("SOR").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("SOR").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("SOR").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
    document.getElementById("[id=ESC]").onclick = ESC;
   
   function ESC() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("ESC").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("ESC").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESC").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESC").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESC").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESC").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESC").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESC").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESC").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESC").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESC").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESC").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("ESC").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESC").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESC").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESC").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESC").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESC").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESC").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ESC").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
    document.getElementById("[id=ENC]").onclick = ENC;
   
   function ENC() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("ENC").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("ENC").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ENC").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ENC").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ENC").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ENC").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ENC").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ENC").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ENC").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ENC").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ENC").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ENC").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("ENC").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ENC").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ENC").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ENC").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ENC").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ENC").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ENC").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("ENC").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
    document.getElementById("[id=LAB]").onclick = LAB;
   
   function LAB() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("LAB").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("LAB").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("LAB").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("LAB").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("LAB").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("LAB").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("LAB").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("LAB").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("LAB").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("LAB").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("LAB").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("LAB").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("LAB").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("LAB").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("LAB").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("LAB").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("LAB").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("LAB").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("LAB").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("LAB").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
   document.getElementById("[id=INTIM]").onclick = INTIM;
   
   function INTIM() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("INTIM").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("INTIM").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INTIM").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INTIM").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INTIM").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INTIM").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INTIM").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INTIM").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INTIM").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INTIM").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INTIM").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INTIM").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("INTIM").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INTIM").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INTIM").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INTIM").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INTIM").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INTIM").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INTIM").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("INTIM").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
    document.getElementById("[id=PER]").onclick = PER;
   
   function PER() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("PER").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("PER").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("PER").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("PER").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("PER").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("PER").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("PER").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("PER").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("PER").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("PER").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("PER").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("PER").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("PER").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("PER").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("PER").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("PER").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("PER").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("PER").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("PER").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("PER").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
	
	document.getElementById("[id=TCA]").onclick = TCA;
   
   function TCA() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("TCA").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("TCA").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("TCA").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("TCA").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("TCA").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("TCA").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("TCA").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("TCA").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("TCA").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("TCA").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("TCA").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("TCA").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("TCA").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("TCA").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("TCA").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("TCA").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("TCA").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("TCA").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("TCA").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("TCA").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
   document.getElementById("[id=MCA]").onclick = MCA;
   
   function MCA() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("MCA").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("MCA").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCA").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCA").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCA").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCA").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCA").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCA").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCA").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCA").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCA").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCA").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("MCA").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCA").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCA").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCA").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCA").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCA").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCA").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCA").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
   document.getElementById("[id=MCB]").onclick = MCB;
   
   function MCB() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("MCB").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("MCB").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCB").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCB").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCB").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCB").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCB").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCB").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCB").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCB").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCB").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCB").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("MCB").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCB").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCB").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCB").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCB").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCB").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCB").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("MCB").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   
   document.getElementById("[id=Fé]").onclick = Fé;
   
   function Fé() {
   var Teste = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
   
   if (document.getElementById("Fé").value == 1) {
	   if (Teste == 20) {
		 alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!!");
	   };
   } else if (document.getElementById("Fé").value == 2) {
	   if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste == 19) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Fé").value == 3) {
       if (Teste == 20) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 18) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Fé").value == 4) {
       if (Teste >= 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 17) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Fé").value == 5) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!"); 
	   } else if (Teste == 19) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 16) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Fé").value == 6) {
       if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 15) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Fé").value == 7) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 18) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 14) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Fé").value == 8) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 13) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Fé").value == 9) {
      if (Teste == 20) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 17) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 12) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Fé").value == 10) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 11) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Fé").value == 11) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 16) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 10) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Fé").value == 12) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 9) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   }; 
   } else if (document.getElementById("Fé").value == 13) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 15) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 8) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Fé").value == 14) {
      if (Teste >= 19) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 7) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Fé").value == 15) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 14) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 6) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Fé").value == 16) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 5) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Fé").value == 17) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 13) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 4) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Fé").value == 18) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 3) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Fé").value == 19) {
      if (Teste >= 18) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 12) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 2) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else if (document.getElementById("Fé").value == 20) {
      if (Teste >= 17) {
	     alert(Teste + " EL PODER SUPREMO!");
	   } else if (Teste >= 11) {
	     alert(Teste + " Bom");
	   } else if (Teste >= 1) {
	     alert(Teste + " Normal");
	   } else {
	     alert(Teste + " FALHOU!!!");
	   };
   } else {
     alert("Coloque o Valor");
   }
   };
   