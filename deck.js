//Tarot Card App

//MODULE 1: Declarations

//create a 3 layer object: 
var deck = new Object ();

//layer 1. card (78) 
//layer 2. position (7)
//layer 3. orientation (2)
deck = {
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

// MODULE 2: Functions
//create functions that prints the string stored in the deck object for the card that is dealt.

//fetch the element class to get the name of the card. 
//fetch the element class to get the position of the card.
//fetch the element class to get the orientation of the card. 

//get & output the appropriate object based on the classes assigned to the element. 

// MODULE 3: Execution