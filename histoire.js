
function tellInP(){

	var para = document.createElement("p");
	var node = document.createTextNode(tell());
	para.appendChild(node);
	var element = document.getElementById("divStories");
	element.appendChild(para);
}
function tell(){
	let tags = chooseTags();
	return(
	"tags: "+tags+"----"+
	chooseFromArray(moment,tags)+" "+
	chooseFromArray(place,tags)+
	// choose(where)+" "+
	choose(who)+" "+
	choose(situation));

}
function choose( array){
	return array[  Math.floor(Math.random()*array.length)];
}
function chooseTags(){
	let tags= ["@mountain","@forest","@sea","@house","@outer","@inner","@tree","@quiet","@disquiet","@castle",
	"@city","@valley","@landscape"];

	let numTags=4;
	let choosen=[];
	for(let i =0;i< numTags;i++){
		choosen.push(tags[Math.floor(Math.random()*tags.length)]);
	}
	let res=""
	for(let i in choosen){
		res+=choosen[i]+"|";
	}
	return new RegExp(res);
}

function describe(array, tags){



}


function chooseFromArray(array,tags,factor=10){
/*
	Compte les elements; ajouter un poid à ceux qui ont le tag qui correspond; tirer au sort.
*/

	let totalWeight= countMatchTags(array, tags)*factor+ array.length;
	let rand= Math.random()* totalWeight;
	console.log(rand);
	let w=0;
	let choosen=0;
	for(let i in array){
		w+=array[i].match(tags).length*factor+1;
		if(rand<w){
			choosen=i;
			break;
		}
	}
	return array[choosen].replace(/@\w+|(\\)|(\n)/g,"");

}

function computeWeights(array,tags){
	let matches=countMatchTags(array, tags);
	matches+=array.length;
	return matches;
}

function countMatchTags(array, tags){
	let res=0;
	for(let i in array){
		res+=array[i].match(tags).length;
	}
	return res;
}

//"Aujourd'hui Dans un magnifique chateau Un petit enfant perdu Qui voulait dÃ©couvrir le monde"
var when=[
"Il était une fois,",
"Un jour,",
"Aujourd'hui",
"Hier",
"Par une nuit de pleine lune,",
];

var where=[
"Dans un pays fort fort lointain",
"Sur une île déserte",
"Dans un magnifique chateau",
"Au plus profond du désert",
"Dans les entrailles de la Terre",
"Sur une planète étrange",
];

var situation=[
"Qui était complètement pedu",
"Qui cherchait un précieux trésor",
"Qui voulait découvrir le monde",
"Qui ne savait pas parler",
];

var who=[
"Le capitaine Barbarossa",
"Un petit enfant perdu",
"Une belle et jeune princesse",
"Le fils du voisin",
"Un chat qui savait parler",
];

var timeConjonc=[
"alors qu'il",
"pendant que",
"une fois que",
"au même instant",
];

var action=[
"portait des fruits à sa grand mère",
"allait à la chasse aux papillions",
"se préparait pour aller au bal",
"se préparait pour partir pêcher",
"espionnait la rue par le carreau",
"tirait de son sac une miche de pain et du fromage",
"jouait à faire tomber ",
];

var goal=[{
	tags:"trip quest ",
	begin: [
		"qui cherchait un précieux trésor",
		],
		end:[
	  "@poetic Le trésor était là, sous ses yeux. Il l' ouvra et en sortit un grand parchemin, qui racontait son histoire.",
	  "@sad En vain il continua à chercher le trésor, toute sa vie durant.",
	  "@mystic ",
	  "@"
		]
},
];

var peripeties=[
	{
		tags:"trip quest",
		begin:[
			"@meet C\'est alors qu\'ils rencontrèrent le terrible @badgui, dieu des mers et des océans.\
			 Il était à la recherche de Personne. Mais personne ne savait où le trouver. Alors il était furieux.",
			
			"@loose Un matin, alors qu'ils remplissaient leur gourde à la rivière, l'orage se mit à gronder, \
			 une pluie torrentielle s'abatit. L'eau monta et emporta tout ce qu'ils avaient avec eux.",
			 
			 "@find ",
		 ]
	},
	{
		tags:"romance",
		begin:[
			"@meet ",
			"@find Un matin, il la vit de loin qui rentrait chez elle. Comme elle marchait dans sa direction\
			Il se sentit bondir. Allait-elle le regarder? Lui parler ? Que fait-elle? \
			Qu'a t'elle sur elle qui pourrait être prétexte à engager la conversation ? Mon dieu qu'elle est belle ! Pensa t'il\
			Elle arrive, elle s'approche. "
		],
		end:[
		"@fun ",
		"@bollywood",
		"@sad",
		"@notyet"
		]
	},
	{
		tags:"",
		begin:[
			"@maupassant Un mardi soir, comme ils étaient assis sous le platane,\
			autour d'une table de bois qui portait deux petits verres et un carafon d'eau-de-vie",
			"@maupassant Ils lui faisaient l'effet de ces gens qu'on a fréquentés longtemps sans qu'ils se soient\
			 jamais révélés et qui soudain, un soir, à propos de rien, se mettent à bavarder sans fin,\
			 à raconter toute leur âme qu'on ne soupçonnait pas.",
			 "@maupassant Par un matin de mistral, ils se retrouvèrent à Marseille.",

		],
		end:[
		"@fun ",
		"@sad",
		"@poetic",
		
		]
	},
];

var place= [

"@zola @house @outer @disquiet Sur la rue, la maison avait cinq étages, alignant chacun à la file quinze fenêtres,\
dont les persiennes noires, aux lames cassées, donnaient un air de ruine à cet immense pan de muraille",

"@hugo @house @outer @quiet Ma maison est cachée et semble faite exprès;\
Le plafond est en cèdre et l'alcôve en cyprès;\
Oh! le jour où nous nous parlâmes,\
Il était blanc, les nids chantaient, il me semblait\
Fils des cygnes qu'on croit lavés avec du lait,\
Et je vis dans le ciel des flammes.",

"@maupassant  @house @outer une vieille maison vermoulue dont toute la charpente piquée des vers,\
parcourue par les longs tarets mangeurs de poutres, bruissait, semblait vivre et soupirer.",

"@maupassant  @house @outer la grande maison avait l'air de sonner le creux, toute morne,\
avec sa face que les pluies maculaient de longues traînées grises. ",

"@maupassant  @house @outer La maison entière semblait travaillée par le froid ;\
les murs pénétrés avaient des bruits légers comme des frissons",

"@maupassant  @house @outer une petite maison de briques bâtie au milieu d'un verger\
planté de poiriers en quenouilles, sur le bord de la grand-route.",

"@house @outer @balzac La façade, mal bâtie en pierres et en briques mêlées sans symétrie,\
semblait plier sous le poids d’un toit vermoulu surchargé de ces tuiles creuses qui composent\
toutes les toitures dans le midi de la France",

"@hugo @house @outer Au rez-de-chaussée, la salle à manger, tapissée de faïences rares et belles qui se groupaient\
en un H gigantesque, au-dessus de la cheminée.Un fauteuil, fermé par une chaîne de fer, représentait\
le siège des ancêtres.",

"@verne @house @outer la salle à manger, dont les neuf fenêtres\
s'ouvraient sur un beau jardin aux arbres déjà dorés par l'automne.",

"@balzac @house @inner Le mobilier consistait en trois mauvaises chaises.",

"@reaux @castle @outer Il y a au pied du château une fort grande prairie, au milieu de laquelle,\
par une bizarrerie de la nature, se trouve comme un cercle de grosses roches,\
entre lesquelles s'élèvent de grands arbres qui font un ombrage très agréable.",
"@castle @outer @maupassant Deux arbres géants se dressaient aux pointes devant le château,\
un platane au nord, un tilleul au sud. ",

"@zola @city\
Il n'y avait pas de soir où la ville en feu n'étincelât sous les étoiles, ainsi qu'un colossal palais\
au fond duquel la débauche veillait jusqu'à l'aube. La joie avait gagné de maison en maison, les rues\
étaient une ivresse, un nuage de vapeurs fauves, la fumée des festins, la sueur des accouplements,\
s'en allait à l'horizon, roulait au-dessus des toits la nuit des Sodome, des Babylone et des Ninive.\
Depuis mai, les empereurs et les rois étaient venus en pèlerinage des quatre coins du monde,\
des cortèges qui ne cessaient point, près d'une centaine de souverains et de souveraines,\
de princes et de princesses.",

"@zola @city\
une ville avait poussé en quatre ans dans les sables de la plage de Port-Saïd,\
tout un peuple s'agitait là, les fourmis humaines s'étaient multipliées,\
changeaient la face de la terre",

"#@phedre @city\
Je songe quelle était autrefois cette ville,\
Si superbe en remparts, en héros si fertile,\
Maîtresse de l'Asie ; et je regarde enfin\
Quel fut le sort de Troie et quel est son destin.\
Je ne vois que des tours que la cendre a couvertes,\
Un fleuve teint de sang, des campagnes désertes,\
Un enfant dans les fers ; et je ne puis songer\
Que Troie en cet état aspire à se venger.",

"@maupassant @city \
Cette petite ville cachée au fond de son golfe bleu,\
chaude comme dans une fournaise derrière son rideau de montagnes\
qui ne laisse jamais le vent souffler jusqu'à elle.",

"@maupassant @city\
Le village d'Yport. Des femmes qui raccommodaient des hardes,\
assises sur le seuil de leurs demeures, les regardaient passer.\
La rue inclinée, avec un ruisseau dans le milieu et des tas de débris traînant devant les portes,\
exhalait une odeur forte de saumure. Les filets bruns, où restaient de place en place des écailles\
luisantes pareilles à des piécettes d'argent, séchaient entre les portes des taudis d'où sortaient\
les senteurs des familles nombreuses grouillant dans une seule pièce. ",

"@maupassant @mountain\
Un petit hameau de granit accroché là,\
cramponné comme un vrai nid d'oiseau,\
presque invisible sur l'immense montagne.",

"@maupassant @sea\
Les rues vides, silencieuses, gardaient une odeur de mer,\
de varech et de poisson. Les vastes filets tannés séchaient toujours,\
accrochés devant les portes ou bien étendus sur le galet.\
La mer grise et froide avec son éternelle et grondante écume commençait à descendre,\
découvrant vers Fécamp les rochers verdâtres au pied des falaises.\
Et le long de la plage les grosses barques échouées sur le flanc semblaient de vastes poissons morts.",

"@lamartine\
Un groupe immense de ruines jaunes,\
dorées par le soleil couchant, se détachaient de l'ombre des montagnes et\
répercutaient les rayons du soir.",

"@lamartine @landscape @sea @hill @valley\
Ce golfe était à vingt lieues de nous, mais la transparence de l'air nous le montrait\
à nos pieds, et nous distinguions même deux navires à la voile qui, suspendus entre le\
bleu du ciel et celui de la mer, et diminués par la distance, ressemblaient à deux cygnes\
planant dans notre horizon. Ce spectacle nous saisit tellement d'abord, que nous n'arrêtâmes\
nos regards sur aucun détail de la vallée; mais quand le premier éblouissement fut passé,\
et que notre oeil put percer à travers la vapeur flottante du soir et des eaux,\
une scène d'une autre nature se déroula peu à peu devant nous.",

"@verne @landscape @hill\
A l'horizon, un arrière-plan de collines se profilait harmonieusement sur le fond du ciel.",

"@maupassant @landscape @forest L'herbe avait poussé sous les arbres, étalant son tapis vert. Le bosquet, tout au bout,\
était charmant, mêlait ses petits chemins tortueux, séparés par des cloisons de feuilles.",

"@maupassant @landscape @forest @road Encaissée entre deux talus, une allée étroite s'avançait sous de grands arbres impénétrables au soleil.",
"@maupassant @landscape @rock @disquiet Hauts jusqu'à trois cents mètres, minces, ronds, tortus, crochus,\
difformes, imprévus, fantastiques, ces surprenants rochers semblaient des arbres,\
des plantes, des bêtes, des monuments, des hommes, des moines en robe,\
des diables cornus, des oiseaux démesurés, tout un peuple monstrueux,\
une ménagerie de cauchemar pétrifiée par le vouloir de quelque Dieu extravagant.",

"@maupassant @landscape @land @cold @disquiet La plaine, les haies, les ormes des clôtures,\
tout semblait mort, tué par le froid.",
"@maupassant @landscape @lake @disquiet La verdure à tons noirs rendait profond, austère et lugubre l'étang;\
et, quand le vent soufflait, les gémissements des arbres semblaient la voix du marais.",

"@stendhal @landscape @land @forest Son oeil avide dévorait cette pente immense de verdure sombre et unie comme un pré,\
que forme le sommet des arbres",

"@stendhal @sea @valley au delà d'une vallée profonde,\
un promontoire élevé de deux ou trois cents pieds, et terminé, du côté de la mer, par un précipice",

"@balzac @garden @quiet Un jardin dont il sentit les fleurs et l'odeur particulière aux arbres et à\
la verdure. Le silence qui y régnait était si profond qu'il put distinguer le bruit que faisaient\
quelques gouttes d'eau en tombant des feuilles humides.",

];

var impressions = [
	"@maupassant @air @ambient @quiet Une espèce de fraîcheur moisie les saisit en entrant,\
	 cette humidité qui fait frissonner la peau et pénètre dans les poumons." ,
	 "@stendhal @quiet Il regarda les arbres; cette vue lui fit du bien, comme s'il eût aperçu d'anciens amis. "

];

var moment =[
	"@maupassant @sunset Un soir, vers la fin du mois, après une journée de lourde chaleur,\
	la lune se leva dans une de ces nuits claires et tièdes, qui troublent,\
	attendrissent, font s'exalter, semblent éveiller toutes les poésies secrètes de l'âme.\
	Les souffles doux des champs entraient dans le salon tranquille.",

	"@maupassant @sunset Le soir venait, un soir calme, radieux, plein de clarté, de paix heureuse.\
	 Pas un frisson dans l'air ou sur l'eau ; et ce repos illimité de la mer et\
	 du ciel s'étendait aux âmes engourdies où pas un frisson non plus ne passait",

	 "@maupassant @sunset Le soir venait avec de longs frissons gelés, des souffles du nord\
	 qui passaient dans les joncs flétris. Le soleil avait plongé derrière les sapins ;\
	 et le ciel rouge, criblé de petits nuages écarlates et bizarres, donnait froid rien qu'à le regarder.",

	 "@maupassant @city @sunset Le triste soir tomba sur la ville qui s'illuminait peu à peu.",

	 "@lamartine @sunset Le soir ramène le silence.\
		  Assis sur ces rochers déserts,",

	"@maupassant @night @quiet @sea Les gazons coupés, les arbres, la lande,\
	 la mer là-bas se reposaient dans une paix silencieuse,\
	  endormis sous le charme tendre de la lune.",

	"@summer @land Quand toutes les sèves se réveillèrent sous la chaleur du soleil,\
	 quand les récoltes se mirent à pousser par les champs, les arbres à verdir,\
	 quand les pommiers dans les cours s'épanouirent comme des boules roses et parfumèrent la plaine.",

	 "@Balzac @morning @quiet Par une de ces belles matinées de printemps, où les feuilles ne sont pas vertes encore, quoique dépliées ;\
	  où le soleil commence à faire flamber les toits et où le ciel est bleu",

]


var poesy= [

	"@hugo Ma maison me regarde et ne me connaît plus.\
	D'autres vont maintenant passer où nous passâmes.\
	Nous y sommes venus, d'autres vont y venir ;\
	Et le songe qu'avaient ébauché nos deux âmes,\
	Ils le continueront sans pouvoir le finir !",

	"Nous vous comprenions tant ! doux, attentifs, austères,\
	Tous nos échos s'ouvraient si bien à votre voix !\
	Et nous prêtions si bien, sans troubler vos mystères,\
	L'oreille aux mots profonds que vous dites parfois !"


]

function pushPeripetie(tags, begin,end){
	peripeties.push({})
}


function tellMeStories(){
tellInP();
tellInP();
tellInP();
tellInP();
tellInP();
tellInP();
}
