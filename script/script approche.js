function changeImage(){
	var img = document.getElementById("Imagesourcing");
	var titre = document.getElementById("legendeSourcing");
	img.src="./Images/Appro VAE neuf 1.png";
	titre.innerHTML="Sourcing VAE";
	var but = document.getElementById("boutonAE");
	but.innerHTML = '<a class="btn btn-primary active" onclick="changeImage();" role="button">Sourcing VAE</a>'+
				  		'<a class="btn btn-primary" onclick="changeImage2();" role="button">Sourcing BAE</a>';

	return false;
}

function changeImage2(){
	var img = document.getElementById("Imagesourcing");
	img.src="./Images/Appro BAE recyclé 1.png";
	var titre = document.getElementById("legendeSourcing");
	titre.innerHTML="Sourcing B.A.E"
	var but = document.getElementById("boutonAE");
	but.innerHTML = '<a class="btn btn-primary" onclick="changeImage();" role="button">Sourcing VAE</a>'+
				  		'<a class="btn btn-primary active" onclick="changeImage2();" role="button">Sourcing BAE</a>';
	return false;
}

function changeEnvironnement(){
	var sec = document.getElementById("sectionEnvironnement");
		// sec.innerHTML='<div class="col-6"></div>	<div class="col-6 fs-2"> <div id="titre" class="row">Environnement</div> <div class="d-grid gap-2 d-md-flex justify-content-md-end pt-1"> <a class="btn btn-primary" onclick="changeEnvironnement2()" href="#" role="button">Infographie</a>	</div> </div><div id="schema" class="col-6"> <h5>Bicyclette à Assistance Electrique Remade</h5> <ul> <li>104 kg de CO<sub>2</sub> pour sa fabrication</li> <li> 10 kg récupérés</li> <li>10 kg de composants</li> <li>5 000 km parcourus par les composants</li> <li>20 kg de B.A.E tout équipée</li> </ul> </div> <div id="schema" class="col-6"> <h5>VAE de ville neuf (moyenne)</h5> <ul> <li>240 kg de CO<sub>2</sub> pour sa fabrication</li> <li> 0 kg récupéré</li> <li>24 kg de composants</li> <li>10 000 km parcourus par les composants</li> <li>24 kg de B.A.E tout équipé</li> </ul> </div>';
		sec.innerHTML= '<div class="col-6 d-none d-md-block"></div>'+
			'<div class="col-md-6 col-12 fs-2">'+
				'<div id="titre" class="row">Environnement / économie circulaire</div>'+				
				'<div class="d-grid gap-2 d-md-flex justify-content-end pt-1">'+						  	
			  		'<a class="btn btn-primary" onclick="changeEnvironnement2()" role="button">Infographie</a>'+
				'</div>'+
			"</div>"+
			'<div id="schema" class="col-md-6 col-12">'+
				
				"<h3>Un vélo électrique vintage =</h3>"+
        "<ul>"+
          "<li> <strong> 104 kg de CO<sub>2</sub> </strong> pour sa fabrication</li>"+
          "<li> 10 kg de composants originaux récupérés</li>"+
          "<li> <strong>10 kg de composants neufs</strong> approvisionnés</li>"+
          "<li> <strong>5 000 km parcourus </strong> en moyenne par les composants neufs</li>"+
          "<li>20 kg = poids total de la bicyclette transformée</li>"+
        "</ul>"+				
			"</div>"+
			'<div id="schema" class="col-md-6 col-12">'+
			'<div class="d-block d-md-none"> <br><br><br>  </div>'+	
				"<h3>VAE de ville neuf (en moyenne)</h3>"+
        "<ul>"+
          "<li> <strong>240 kg de CO<sub>2</sub></strong> pour sa fabrication</li>"+
          "<li> 0 kg de composants originaux récupéré</li>"+
          "<li><strong>24 kg de composants neufs</strong> approvisionnés</li>"+
          "<li><strong>10 000 km parcourus</strong> en moyenne par les composants neufs</li>"+
          "<li>24 kg = poids total du VAE de ville neuf</li>"+
        "</ul>"+				
			"</div>";

}

function changeEnvironnement2(){
	var sec = document.getElementById("sectionEnvironnement");
	sec.innerHTML='<div class="col-6 d-none d-md-block"></div> <div class="col-md-6 col-12 fs-2">'+
				'<div id="titre" class="row">Environnement / économie circulaire</div>'+				
				'<div class="d-grid gap-2 d-md-flex justify-content-end pt-1">'+					  	
			  		'<a class="btn btn-primary" onclick="changeEnvironnement()" role="button">En savoir plus</a>'+
				'</div>'+
			'</div>'+
			'<div id="schema" class="col-md-3 col-6 anime1">'+
				'<img src="./Images/vélo origine.png">'+
				"<h5>Vélo vintage</h5>"+
				"<p>déjà existante => 0 émission de CO<sub>2</sub> supplémentaire</p>"+
			"</div>"+
			'<div id="schema" class="col-md-3 col-6 anime2">'+
				'<img src="./Images/Composants gardés.png">'+
				'<h5>Pièces conservées</h5>'+
				"<p>autant que possible si leur état le permet</p>"+
			"</div>"+
			'<div id="schema" class="col-md-3 col-6 anime3">'+
				'<img src="./Images/Appro composants.png">'+
				"<h5>Composants achetés</h5>"+
				"<p>optimisés pour limiter le transport longue distance</p>"+
			"</div>"+
			'<div id="schema" class="col-md-3 col-6 anime4">'+
				'<img src="./Images/BAE assemblée.png">'+				
				"<h5>Assemblage</h5>"+
				"<p>réalisé localement, en atelier / boutique</p>"+
			'</div>';
}