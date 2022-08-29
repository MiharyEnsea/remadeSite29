function moyeuPlus(){
	var txt = document.getElementById("textMoyeu");
	txt.innerHTML="Les vitesses non indexées sur la transmission d'origine créent un risque de déraillage important. Nous remplaçons donc systématiquement la transmission par un moyeu à vitesses intégrées, plus moderne, qui permet :"+
						"<ul>"+
						"<li>de ne jamais dérailler, ne jamais rater un passage de vitesses</li>"+
						"<li>de passer les vitesses à l'arrêt, par exemple en ville au feu rouge</li>"+
						"<li>de limiter l'entretien à réaliser par l'utilisateur</li>"+
						"<li>d'alléger la ligne du vélo en supprimant les dérailleurs</li>"+ 
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="moyeuMoins()" role="button">Réduire</a>'+ 
					"</div>";
}

function moyeuMoins(){
	var txt = document.getElementById("textMoyeu");
	txt.innerHTML="Moyeu à vitesses intégrées de type SHIMANO NEXUS 5 ou 7 vitesses"+
						"<ul>"+						
						"<li>Fiable</li>"+
						"<li>Confortable</li>"+
						"<li>Entretien facilité</li>"+
						"<li>Discret</li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="moyeuPlus()" role="button">En savoir plus</a>'+ 
					"</div>";
}

function moteurPlus(){
	var txt = document.getElementById("textMoteur");
	txt.innerHTML="<div>"+
  "Si le moteur central est préférable sur des VAE sportifs ou de tourisme, le moteur à l'avant convient parfaitement aux courts trajets que l'on réalise généralement sur un vélo électrique de ville. <br><br>"+
  "Notre moteur dans la roue avant à entraînement direct :  <br><br>"+
   
  "<ul>"+
  	"<li>pèse moins de  2,0 kg</li>"+
  	"<li>offre 30 Nm de couple, ce qui suffit pour vous aider au démarrage ou dans les côtes dans la plupart des zones urbaines et convient à un utilisateur de moins de 90 kg.</li>"+
    "<li>est silencieux car il ne contient pas d'engrenage</li>"+
    "<li>est adaptable sur un vélo vintage</li>"+
   
  "</ul>"+
  
"</div>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="moteurMoins()" role="button">Réduire</a>'+ 
					"</div>";
}


function moteurMoins(){
	var txt = document.getElementById("textMoteur");
	txt.innerHTML="<div>"+
				 		"Moteur dans la roue avant"+
				 	"</div>"+					
					"<ul>"+
						"<li>Léger</li>"+
						"<li>Suffisant pour vous assister au démarrage ou en côte</li>"+
						"<li>Silencieux</li>"+						
					"</ul>"+ 					

					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="moteurPlus()" role="button">En savoir plus</a>'+ 
					"</div>";

}


function freinagePlus(){
	var txt = document.getElementById("textFreinage");
	txt.innerHTML="<div>"+
				  "Il y a de nombreux systèmes de freinage selon le frottement (disque, patins, tambour), le système de transmission (câble ou hydraulique) <br>"+
				  "Nous avons opté pour un frein à patins montés sur l'étrier d'origine tiré par câble pour préserver le style"+
				  "<ul>"+
				    "<li>son efficacité est accrue car la jante est en aluminium</li>"+
				    "<li>l'ensemble des consommables sont changés : câbles, gaines et patins</li>"+
				    "<li>les leviers sont remplacés par des leviers qui coupent l'alimentation du moteur dès qu'ils sont actionnés, pour plus de sécurité.</li>"+
				  "</ul>"+

				"</div>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="freinageMoins()" role="button">Réduire</a> '+
					"</div>";
}

function freinageMoins(){
	var txt = document.getElementById("textFreinage");
	txt.innerHTML = "<ul>"+
			 	"<li>Système de freinage amélioré</li>"+
			 	"<li>Style préservé</li>"+
			 	"<li>Sécurité accrue</li>"+
			 	"<ul>"+			
					
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="freinagePlus()" role="button">En savoir plus</a>'+
					"</div>";
}

function batteriePlus(){
	var txt = document.getElementById("textBatterie");
	txt.innerHTML = "Nous avons opté pour une batterie format"+ '"bidon'+ "d'"+'eau"'+" aux dimensions réduites (H = 280 mm et diamètre = 80 mm) <br>"+
									"Pour une utilisation régulière de votre VAE de ville sur de courtes distances, nous avons privilégié le poids et l'esthétique à la capacité. La batterie :"+
				"<ul>"+
						"<li>pèse 1,4 kg (~1,5 kg de moins qu'une batterie standard de 468 Wh)</li>"+
						"<li>a une capacité de 250 Wh</li>"+
					"</ul>"+
					"Les gains de poids cumulés permettent de garder une bicyclette maniable et offrant une grande cyclabilité."+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="batterieMoins()" role="button">Réduire</a>'+ 
					"</div>";
}

function batterieMoins(){
	var txt = document.getElementById("textBatterie");
	txt.innerHTML = "<ul>"+						
						"<li>Discrète</li>"+
						"<li>Légère</li>"+
						"<li>Amovible</li>"+						
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="batteriePlus()" role="button">En savoir plus</a>'+ 
					"</div>";
}


function cadrePlus(){
	var txt = document.getElementById("textCadre");
	txt.innerHTML = 	"Le cadre et la fourche définissent l'usage possible (route, chemin, ville) et le style. Ils se caractérisent par leur géométrie et leur matériau. <br><br>"+						 						    
					    "Les vélos de ville fabriqués en France dans les années 60 à 80"+
					"<ul>"+	  
						"<li>offrent un grand confort par leur géométrie et élasticité importante</li>"+
						"<li>sont très robuste : l'acier marque peu en cas de choc </li>"+				  
					    "<li>permettent des sections fines et des soudures très discrètes qui confèrent à la bicyclette toute son élégance.</li>"+						
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="cadreMoins()" role="button">Réduire</a>'+
					"</div>";
}

function cadreMoins(){
	var txt = document.getElementById("textCadre");
	txt.innerHTML = "<ul>"+
						"<li>Confortable</li>"+
						"<li>Robuste</li>"+
						"<li>Elégant</li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="cadrePlus()" role="button">En savoir plus</a> '+
					"</div>";
}

function selleriePlus(){
	var txt = document.getElementById("textSellerie");
	txt.innerHTML = "<div>"+
					  "Le choix de la sellerie est un équilibre entre confort, style et coût. <br><br>"+
					  "Une sellerie vinyle d'origine (selle rembourrée, poignées plastique) offre un confort immédiat et conserve au vélo son caractère d'origine. <br><br>"+
					  "Une sellerie cuir, plus coûteuse, plus dure au départ, doit être"+ ' "faite à la morphologie du cycliste"'+ "mais renforce le côté rétro et peut être harmonisée avec divers éléments (selle, sacoche de selle, guidoline…)"+ 
					  
					"</div>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="sellerieMoins()" role="button">Réduire</a>'+ 
					"</div>";					
}


function sellerieMoins(){
	var txt = document.getElementById("textSellerie");
	txt.innerHTML = "La sellerie inclut la selle, la sacoche de selle, les poignées, les sangles… <br><br>"+
						"Le choix s'opère entre"+			 						
						"<ul>"+
							"<li>Sellerie originale en vinyle : économique et immédiatement confortable</li>"+
							"<li>Sellerie en cuir : pour renforcer le caractère vintage du vélo"+												
						"</ul>"+
						'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
								'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
					  		'<a class="btn btn-primary" onclick="selleriePlus()" role="button">En savoir plus</a>'+
						"</div>";

}


function pedalierPlus(){
	var txt = document.getElementById("textPedalier");
	txt.innerHTML ="Nous avons opté pour des pédaliers à plateau unique qui s'appairent avec le moyeu à vitesses intégrées et suppriment la flexion de la chaîne."+
					 "<ul>"+
						"<li>Le pédalier d'origine est léger et élégant</li>"+
						"<li>Pédalier performance permet une meilleure transmission de votre effort à la roue. Il décale les manivelles et augmente le rendement de 10%. C'est une innovation française, fabriquée en France </li>"+						
					"</ul>"+
					"Cette amélioration mécanique rejoint notre vision de l'assistance électrique"+ '"légère"'+ "qui vient vous apporter l'aide juste nécessaire."+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="pedalierMoins()" role="button">Réduire</a>'+ 
					"</div>";
}

function pedalierMoins(){
	var txt = document.getElementById("textPedalier");
	txt.innerHTML = "Tous nos pédaliers sont composés d'un plateau unique <br><br>"+
									"Au choix :"+
					"<ul>"+
						"<li>Pédalier d'origine : léger et élégant avec ses manivelles fines</li>"+
						"<li>Pédalier performance : offrant un rendement supérieur de 10%</li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="pedalierPlus()" role="button">En savoir plus</a>'+ 
					"</div>";
}


function rouePlus(){
	var txt = document.getElementById("textRoues");
	txt.innerHTML = "Nous avons choisi d'assembler les roues en France (rayonnage). Cela permet"+
					"<ul>"+
						"<li>d'utiliser des composants fabriqués en France (jantes et rayons)</li>"+
						"<li>d'harmoniser les deux roues avant et arrière</li>"+
						"<li>de choisir l'esthétique qui vous plait chromés ou noir satin</li>"+
						"<li>de limiter le volume des composants transportés sur de longues distances</li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="roueMoins()" role="button">Réduire</a> '+
					"</div>";
}



function roueMoins(){
	var txt = document.getElementById("textRoues");
	txt.innerHTML = 			 						
					"<ul>"+
						"<li>Robustesse</li>"+
						"<li>Elégance</li>"+
						"<li>Fabrication française ou Européenne</li>"+
						"<li>Performance au freinage (aluminium)</li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+					  	
				  		'<a class="btn btn-primary" onclick="rouePlus()" role="button">En savoir plus</a>'+ 
					"</div>";
}



function equipementPlus(){
	var txt = document.getElementById("textEquipement");
	txt.innerHTML = "Les équipements suivants complètent le vélo"+
					"<ul>"+
						"<li>afficheur LCD monochrome 5 niveaux d'assistance</li>"+
						"<li>capteur de mouvement au pédalier</li>"+
						"<li>phares à LED au look vintage</li>"+						
					"</ul>"+
					"Vous pouvez ajouter des accessoires sur votre vélo électrique vintage : sacoches de transport, rétroviseurs…"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick = "equipementMoins()" role="button">Réduire</a> '+
					"</div>";
}

function equipementMoins(){
	var txt = document.getElementById("textEquipement");
	txt.innerHTML = "<ul>"+
						"<li>Equipements électriques discrets et adaptés à l'usage en ville</li>"+
						"<li>Accessoires élégants (sacoches, phare bombé…)</li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="equipementPlus()" role="button">En savoir plus</a>'+ 
					"</div>";
}