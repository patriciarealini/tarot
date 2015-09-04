//Tarot Card App

//MODULE 1A: Declarations

//create new object with cards
var cards = new Array ();

//create variables to limit cards dealt to 7 & to test in console
var cardsLeftToDeal = 7;
var cardsDealt = 0;


//array containing the 78 cards with their img names
cards[00] = "00_Fool";
cards[01] = "01_Magician";
cards[02] = "02_High_Priestess";
cards[03] = "03_Empress";
cards[04] = "04_Emperor";
cards[05] = "05_Hierophant";
cards[06] = "06_Lovers";
cards[07] = "07_Chariot";
cards[08] = "08_Strength";
cards[09] = "09_Hermit";
cards[10] = "10_Wheel_of_Fortune";
cards[11] = "11_Justice";
cards[12] = "12_Hanged_Man";
cards[13] = "13_Death";
cards[14] = "14_Temperance";
cards[15] = "15_Devil";
cards[16] = "16_Tower";
cards[17] = "17_Star";
cards[18] = "18_Moon";
cards[19] = "19_Sun";
cards[20] = "20_Judgement";
cards[21] = "21_World";
cards[22] = "22_Ace_of_Wands";
cards[23] = "23_Two_of_Wands";
cards[24] = "24_Three_of_Wands";
cards[25] = "25_Four_of_Wands";
cards[26] = "26_Five_of_Wands";
cards[27] = "27_Six_of_Wands";
cards[28] = "28_Seven_of_Wands";
cards[29] = "29_Eight_of_Wands";
cards[30] = "30_Nine_of_Wands";
cards[31] = "31_Ten_of_Wands";
cards[32] = "32_Page_of_Wands";
cards[33] = "33_Knight_of_Wands";
cards[34] = "34_Queen_of_Wands";
cards[35] = "35_King_of_Wands";
cards[36] = "36_Ace_of_Pentacles";
cards[37] = "37_Two_of_Pentacles";
cards[38] = "38_Three_of_Pentacles";
cards[39] = "39_Four_of_Pentacles";
cards[40] = "40_Five_of_Pentacles";
cards[41] = "41_Six_of_Pentacles";
cards[42] = "42_Seven_of_Pentacles";
cards[43] = "43_Eight_of_Pentacles";
cards[44] = "44_Nine_of_Pentacles";
cards[45] = "45_Ten_of_Pentacles";
cards[46] = "46_Page_of_Pentacles";
cards[47] = "47_Knight_of_Pentacles";
cards[48] = "48_Queen_of_Pentacles";
cards[49] = "49_King_of_Pentacles";
cards[50] = "50_Ace_of_Cups";
cards[51] = "51_Two_of_Cups";
cards[52] = "52_Three_of_Cups";
cards[53] = "53_Four_of_Cups";
cards[54] = "54_Five_of_Cups";
cards[55] = "55_Six_of_Cups";
cards[56] = "56_Seven_of_Cups";
cards[57] = "57_Eight_of_Cups";
cards[58] = "58_Nine_of_Cups";
cards[59] = "59_Ten_of_Cups";
cards[60] = "60_Page_of_Cups";
cards[61] = "61_Knight_of_Cups";
cards[62] = "62_Queen_of_Cups";
cards[63] = "63_King_of_Cups";
cards[64] = "64_Ace_of_Swords";
cards[65] = "65_Two_of_Swords";
cards[66] = "66_Three_of_Swords";
cards[67] = "67_Four_of_Swords";
cards[68] = "68_Five_of_Swords";
cards[69] = "69_Six_of_Swords";
cards[70] = "70_Seven_of_Swords";
cards[71] = "71_Eight_of_Swords";
cards[72] = "72_Nine_of_Swords";
cards[73] = "73_Ten_of_Swords";
cards[74] = "74_Page_of_Swords";
cards[75] = "75_Knight_of_Swords";
cards[76] = "76_Queen_of_Swords";
cards[77] = "77_King_of_Swords";

//MODULE 2A: Functions

// create function to randomly select a number that corresponds with the number of cards available. Used Math.floor to remove remainder from the random calculation, found that i could never get the King Of Swords because 78 was an impossibility. opted for math.round in order to achieve that possibility. 
var random = function() {
  	return Math.round(Math.random() * (78-cardsDealt));
};

//create a function to remove a card once it has been used. This is a basic way to avoid duplicates. Implies that to deal we must refresh the page. 
var removeCard = function(k) {
	for (var j=k; j<cards.length; j++) {
		cards[j] = cards[j+1];	
	}
	cardsLeftToDeal--;
	cardsDealt++;
}

//create function to deal your random number as a card
var dealCard = function(i) {
	if (cardsLeftToDeal == 0) {
		return false;
	} else {
		//display card chosen in HTML by creating an image element
		var img = document.createElement("img");
		img.src = ("images/deck/" + cards[i] + ".jpg");
		img.alt = cards[i];

		document.getElementById("hand").appendChild(img);
		removeCard(i);
	};
};

//MODULE 3A: Execution (JQuery)

//jquery: deal cards when "deck" is clicked & shuffle the deck by reloading the page
$(document).ready(function() {
	$('#deal').click(function() {
		console.log(dealCard(random()));
	});
	$('#shuffle').click(function() {
		location.reload();
	});
});


// MODULE 2A: Declarations

//create a 3 layer object: 
var deck = new Object ();

//layer 1. card (78) 
//layer 2. position (7)
//layer 3. orientation (2)
var deck = {
	fool: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	magician: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},	
	},
	highPriestess: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	empress: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	hierophant: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	lovers: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	chariot: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	strength: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	hermit: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	wheelOfFortune: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	justice: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	hangedMan: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	death: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	temperance: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	devil: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	tower: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	star: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	moon: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	sun: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	judgement: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	world: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	aceOfWands: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	twoOfWands: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	threeOfWands: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	fourOfWands: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	fiveOfWands: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	sixOfWands: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	sevenOfWands: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	eightOfWands: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	nineOfWands: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	tenOfWands: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	pageOfWands: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	knightOfWands: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	queenOfWands: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	kingOfWands: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	aceOfPentacles: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	twoOfPentacles: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	threeOfPentacles: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	fourOfPentacles: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	fiveOfPentacles: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	sixOfPentacles: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	sevenOfPentacles: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	eightOfPentacles: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	nineOfPentacles: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	tenOfPentacles: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	pageOfPentacles: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	knightOfPentacles: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	queenOfPentacles: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	kingOfPentacles: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	aceOfCups: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	twoOfCups: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	threeOfCups: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	fourOfCups: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	fiveOfCups: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	sixOfCups: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	sevenOfCups: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	eightOfCups: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	nineOfCups: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	tenOfCups: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	pageOfCups: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	knightOfCups: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	queenOfCups: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	kingOfCups: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	aceOfSwords: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	twoOfSwords: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	threeOfSwords: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	fourOfSwords: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	fiveOfSwords: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	sixOfSwords: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	sevenOfSwords: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	eightOfSwords: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	nineOfSwords: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	tenOfSwords: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	pageOfSwords: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	knightOfSwords: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	queenOfSwords: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	kingOfSwords: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
};

// MODULE 2B: Functions

//create a function that prints the string stored in the deck object for the card that is dealt.

// MODULE 2C: Execution

