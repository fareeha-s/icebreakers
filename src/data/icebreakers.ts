export interface Icebreaker {
  id: string;
  question: string;
  category: 'fun' | 'deep' | 'creative';
  mode: 'popcorn' | 'journal';
}

export const icebreakers: Icebreaker[] = [
  {
    id: '1',
    question: "What's a popular show everyone loves that you couldn't get into?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '2',
    question: "If you could master the entire works of any musician, who would you choose?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '3',
    question: "What's a weird food combination you love?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '4',
    question: "Window or aisle seat?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '5',
    question: "What's a book that changed how you see the world?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '6',
    question: "Hot sauce on everything or no spice at all?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '7',
    question: "What's a hobby you tried and surprisingly disliked?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '8',
    question: "What's the most useless talent you have?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '9',
    question: "If you could instantly learn any language, which would you choose and why?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '10',
    question: "What's a place that totally lived up to the hype?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '11',
    question: "Audiobooks or physical books?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '12',
    question: "What's a random skill that's saved you in an unexpected situation?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '13',
    question: "What's an unpopular opinion you have about your favorite hobby?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '14',
    question: "Sweet or savory breakfast?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '15',
    question: "What's the weirdest thing you've ever googled?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '16',
    question: "What's a song you hate from an artist you love?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '17',
    question: "If you could live in any fictional universe, which would you choose?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '18',
    question: "What's a childhood rule you still follow?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '19',
    question: "Concert or festival?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '20',
    question: "What's the worst advice you've ever followed?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '21',
    question: "If you could instantly master any instrument, which would you choose?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '22',
    question: "What's a movie sequel that was better than the original?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '23',
    question: "Cold pizza or reheated?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '24',
    question: "What's a trend you were way too into?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '25',
    question: "If you could design a class that schools should teach, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '26',
    question: "What's a random fact you know that's surprisingly useful?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '27',
    question: "Crosswords or sudoku?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '28',
    question: "What's something you thought would be easy until you tried it?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '29',
    question: "If you could add any feature to the human body, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '30',
    question: "What's a hill you're willing to die on about food?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '31',
    question: "What's the most interesting fact you learned this week?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '32',
    question: "If you could master any martial art instantly, which would you choose?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '33',
    question: "What's a movie everyone quotes but you've never seen?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '34',
    question: "Notes on phone or paper?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '35',
    question: "What's a small decision that totally changed your life?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '36',
    question: "What's something you've always wanted to try?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '37',
    question: "What's an obscure topic you know way too much about?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '38',
    question: "If you could instantly learn all episodes of any TV show, which would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '39',
    question: "What tourist trap was actually worth visiting?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '40',
    question: "Breakfast for dinner or dinner for breakfast?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '41',
    question: "What's the weirdest dream you remember?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '42',
    question: "If you could combine two sports into one, what would you create?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '43',
    question: "What's a movie that's so bad it's good?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '44',
    question: "Rain or snow?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '45',
    question: "What skill did you learn from the weirdest source?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '46',
    question: "Potatoes! Mashed, roasted, hashed, 🍟...?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '47',
    question: "If you could combine any two animals, what would you create?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '48',
    question: "What's something you love that everyone else seems to hate?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '49',
    question: "Sweet popcorn or salty popcorn?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '50',
    question: "What's a random childhood memory that still makes you laugh?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '51',
    question: "What's the most ridiculous way you've ever injured yourself?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '52',
    question: "If you could create any ice cream flavor, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '53',
    question: "What's the worst movie adaptation of a book you've seen?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '54',
    question: "Soup or salad?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '55',
    question: "What's a joke that's so bad it's good?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '56',
    question: "If you could create a new holiday tradition, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '57',
    question: "What's something you're surprised isn't more popular?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '58',
    question: "Board games or card games?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '59',
    question: "What's the most memorable excuse you've ever heard?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '60',
    question: "If you could create a new sport, what would be its key rule?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '61',
    question: "What's the most unusual pet you'd want to have?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '62',
    question: "Hot or iced coffee?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '63',
    question: "What's a fashion trend you secretly wish would come back?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '64',
    question: "If you could create a new genre of music, what would it sound like?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '65',
    question: "What's the weirdest thing you've ever eaten?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '66',
    question: "What's a skill you'd love to master?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '67',
    question: "What's a skill you learned from a video game?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '68',
    question: "If you could design the perfect restaurant, what would make it unique?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '69',
    question: "What's the most interesting thing you've found?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '70',
    question: "Pancakes or waffles?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '71',
    question: "Dark mode or light mode?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '72',
    question: "What's an app that's actually improved your life?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '73',
    question: "If you could create a new streaming service, what would make it special?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '74',
    question: "Reddit or Twitter?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '75',
    question: "What's your relationship with social media like?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '76',
    question: "Wireless earbuds or over-ear headphones?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '77',
    question: "If you could add one smart feature to your home, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '78',
    question: "iPhone or Android?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '79',
    question: "What's a piece of tech you wish existed?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '80',
    question: "Video calls or phone calls?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '81',
    question: "What's your most-used app and why?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '82',
    question: "Laptop or desktop?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '83',
    question: "If you could design a VR experience, what would it be like?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '84',
    question: "What's your favorite way to learn new things?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '85',
    question: "Subtitles on or off?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '86',
    question: "If you could create a new emoji, what would it be?",
    category: 'creative',
    mode: 'popcorn'
  },
  {
    id: '87',
    question: "What's a YouTube rabbit hole you've fallen into recently?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '88',
    question: "How has tech changed your relationships?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '89',
    question: "Clicky keyboard or quiet keys?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '90',
    question: "If you could design a perfect learning platform, what would it include?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '91',
    question: "What's your favorite meme format?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '92',
    question: "What's a tech skill you want to master?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '93',
    question: "Notifications on or off?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '94',
    question: "If you could create a virtual pet, what would it be like?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '95',
    question: "What's your favorite art style?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '96',
    question: "What's an old piece of tech you miss?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '97',
    question: "Touch typing or hunt and peck?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '98',
    question: "If you could design future transportation, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '99',
    question: "What's your go-to photo filter?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '100',
    question: "If you could design a new superhero power, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '101',
    question: "What's the weirdest thing you've seen at someone's house?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '102',
    question: "Plants or pets?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '103',
    question: "What's a random skill that impressed someone?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '104',
    question: "If you could design any vehicle, what features would it have?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '105',
    question: "What's the strangest compliment you've received?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '106',
    question: "Movies at home or theater?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '107',
    question: "What's a weird food combination that actually works?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '108',
    question: "If you could create a new tradition, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '109',
    question: "What's something you're surprised you got away with?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '110',
    question: "Early bird or night owl?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '111',
    question: "What's the most interesting thing you've found while cleaning?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '112',
    question: "If you could design a new candy, what would it taste like?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '113',
    question: "What's a strange talent that's come in handy?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '114',
    question: "Sweet or salty snacks?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '115',
    question: "What's the most interesting misunderstanding you've had?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '116',
    question: "If you could create a new holiday, what would people do?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '117',
    question: "What's something unexpected that helps you focus?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '118',
    question: "Painting or photography?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '119',
    question: "What's the most interesting thing in your bag right now?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '120',
    question: "If you could create a new season between two existing ones, what would it be like?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '121',
    question: "What's a seemingly useless superpower that would actually be great?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '122',
    question: "Bath bombs or bubble bath?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '123',
    question: "What's something you've always collected?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '124',
    question: "If you could invent a new form of entertainment, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '125',
    question: "What's the most interesting thing you've learned from a kid?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '126',
    question: "Chocolate or vanilla?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '127',
    question: "What's something that changed your taste in music?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '128',
    question: "If you could design a treehouse, what would you include?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '129',
    question: "What's the most interesting thing you've seen out a window?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '130',
    question: "Radio or playlist?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '131',
    question: "What's a story you tell that no one ever believes?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '132',
    question: "If you could create a new flavor of potato chip, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '133',
    question: "What's the weirdest thing you've seen at a wedding?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '134',
    question: "Grass or sand between your toes?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '135',
    question: "What's a random fact that always blows people's minds?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '136',
    question: "If you could design a new school subject, what would it teach?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '137',
    question: "What's a small win you celebrated recently?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '138',
    question: "Camping or glamping?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '139',
    question: "What makes a perfect weekend?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '140',
    question: "Board games or video games?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '141',
    question: "What's your idea of a perfect celebration?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '142',
    question: "Breakfast for dinner or dinner for breakfast?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '143',
    question: "What's a random skill that impressed your parents?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '144',
    question: "If you could design a new type of furniture, what would it do?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '145',
    question: "What's the most interesting thing you've seen in the sky?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '146',
    question: "Tent camping or glamping?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '147',
    question: "What's something unusual that helps you relax?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '148',
    question: "If you could invent a new sport, what would be its key rule?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '149',
    question: "What's the most interesting thing you've found in a book?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '150',
    question: "Fruit juice or smoothie?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '151',
    question: "What's a random coincidence that seemed too perfect?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '152',
    question: "If you could design a new type of shoe, what would make it special?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '153',
    question: "What's the most interesting thing you've seen in someone's yard?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '154',
    question: "Hot tub or swimming pool?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '155',
    question: "What's a weird thing you believed for way too long?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '156',
    question: "If you could create a new theme park, what would be its theme?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '157',
    question: "What's the most surprising thing you're good at?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '158',
    question: "Podcasts or audiobooks?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '159',
    question: "What's a random memory that always makes you laugh?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '160',
    question: "If you could design a new game show, what would contestants do?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '161',
    question: "What's the most interesting thing you've seen at a concert?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '162',
    question: "Cake or pie?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '163',
    question: "What hobby would you try if you had time?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '164',
    question: "If you could create a new fairytale, what would be its moral?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '165',
    question: "What's the most interesting thing you've learned from a grandparent?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '166',
    question: "Sunny day or rainy day?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '167',
    question: "What's something random that always cheers you up?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '168',
    question: "If you could design a new toy, what would it do?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '169',
    question: "What's the most interesting thing you've found at a thrift store?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '170',
    question: "Roller skates or ice skates?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '171',
    question: "What's a habit you picked up from someone else?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '172',
    question: "If you could invent a new dessert, what would it include?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '173',
    question: "What's the most interesting thing you've seen in a museum?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '174',
    question: "Train or plane?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '175',
    question: "What's something that always makes you smile?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '176',
    question: "If you could create a new constellation, what would it depict?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '177',
    question: "What's the most interesting thing you've overheard in public?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '178',
    question: "Picnic or restaurant?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '179',
    question: "What's something you're oddly proud of?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '180',
    question: "If you could design a new type of pet, what would it be like?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '181',
    question: "What's the most interesting thing you've cooked by accident?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '182',
    question: "Singing or dancing?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '183',
    question: "What's a fear you've overcome?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '184',
    question: "If you could create a new carnival game, how would it work?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '185',
    question: "What's the most interesting thing you've learned from a book?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '186',
    question: "Comedy or drama?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '187',
    question: "What's something you do for luck?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '188',
    question: "If you could design a new robot, what would be its main task?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '189',
    question: "What's the most interesting thing you've seen in a dream?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '190',
    question: "Soup or sandwich?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '191',
    question: "What's a talent you wish you had?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '192',
    question: "If you could create a new language, what would be its most unique feature?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '193',
    question: "What's the most interesting thing you've learned from a mistake?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '194',
    question: "Ocean waves or mountain views?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '195',
    question: "What's something that fascinates you?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '196',
    question: "If you could design a new musical instrument, what would it sound like?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '197',
    question: "What's the most interesting thing you've repurposed?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '198',
    question: "Gummy bears or chocolate?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '199',
    question: "What's a compliment you'll never forget?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '200',
    question: "If you could create a new art style, how would you describe it?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '201',
    question: "What's the most interesting thing you've built?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '202',
    question: "Backpack or messenger bag?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '203',
    question: "What's an invention idea you've had?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '204',
    question: "If you could design a new type of transportation, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '205',
    question: "What's the most interesting thing you've witnessed at work?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '206',
    question: "Hammock or beach chair?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '207',
    question: "What's something you've named?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '208',
    question: "If you could design a secret hideout, what would it include?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '209',
    question: "What's the most interesting thing you've found in your backyard?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '210',
    question: "Playlist or shuffle?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '211',
    question: "What's something unexpected that changed your life?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '212',
    question: "If you could create a new weather phenomenon, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '213',
    question: "What's the weirdest way you've made a friend?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '214',
    question: "Sunset walks or midnight stargazing?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '215',
    question: "What's something you've witnessed that no one believes?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '216',
    question: "If you could design a new kind of garden, what would grow in it?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '217',
    question: "What's something interesting you learned from family?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '218',
    question: "Yoga or weightlifting?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '219',
    question: "What's a skill that surprised your friends?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '220',
    question: "If you could invent a new game piece, what would it do?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '221',
    question: "What's the most interesting thing you've seen from a plane?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '222',
    question: "Homemade or takeout?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '223',
    question: "What's a rule you actually like?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '224',
    question: "If you could create a new flavor combination, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '225',
    question: "What's something interesting you've learned about yourself?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '226',
    question: "Art museums or science museums?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '227',
    question: "What's something that always makes you laugh?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '228',
    question: "If you could design a new kind of hat, what would it look like?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '229',
    question: "What's the most interesting thing you've done by accident?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '230',
    question: "Mini golf or laser tag?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '231',
    question: "What's a hobby you want to try?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '232',
    question: "If you could create a new magic trick, what would happen?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '233',
    question: "What's the most interesting thing you've drawn?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '234',
    question: "Street food or food trucks?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '235',
    question: "What's a fact that changed how you see things?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '236',
    question: "If you could design a new kind of door, how would it open?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '237',
    question: "What's the most interesting thing you've won?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '238',
    question: "Fresh herbs or dried spices?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '239',
    question: "What's something that made you proud?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '240',
    question: "If you could invent a new sports equipment, what would it do?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '241',
    question: "What's something interesting you've taught someone?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '242',
    question: "Ferris wheel or roller coaster?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '243',
    question: "What's something you collect?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '244',
    question: "If you could design a new kind of clock, how would it show time?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '245',
    question: "What's the most interesting thing you've grown?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '246',
    question: "Charades or trivia?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '247',
    question: "What's a tradition you started?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '248',
    question: "If you could create a new dance move, what would it look like?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '249',
    question: "What's something interesting you've customized?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '250',
    question: "Escape room or scavenger hunt?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '251',
    question: "What's something that inspired you?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '252',
    question: "If you could design a new kind of bridge, what would make it unique?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '253',
    question: "What's something cool you've upcycled?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '254',
    question: "Karaoke or open mic?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '255',
    question: "What's a skill you want to improve?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '256',
    question: "If you could create a new kind of chair, what would be its special feature?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '257',
    question: "What's the most interesting thing you've photographed?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '258',
    question: "Board games or video games?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '259',
    question: "What's a project you're proud of?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '260',
    question: "If you could invent a new kind of puzzle, how would it work?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '261',
    question: "What's something interesting you've improvised?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '262',
    question: "Hiking or biking?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '263',
    question: "What's something you've mastered?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '264',
    question: "If you could create a new kind of container, what would it store?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '265',
    question: "What's the most interesting thing you've written?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '266',
    question: "Solo travel or group trips?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '267',
    question: "What's something that changed your mind?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '268',
    question: "If you could design a new kind of light fixture, what would it do?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '269',
    question: "What's something interesting you've organized?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '270',
    question: "Jazz or classical?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '271',
    question: "What's something you're curious about?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '272',
    question: "If you could create a new kind of map, what would it show?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '273',
    question: "What's something cool you've recycled?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '274',
    question: "Comedy show or magic show?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '275',
    question: "What's something you're excited to learn?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '276',
    question: "If you could design a new kind of playground, what would it feature?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '277',
    question: "What's something interesting you've preserved?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '278',
    question: "Live music or recorded?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '279',
    question: "What's something that challenged you?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '280',
    question: "If you could create a new kind of bookmark, what would make it special?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '281',
    question: "What's something cool you've animated?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '282',
    question: "Mustard or ketchup?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '283',
    question: "What's something you're passionate about?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '284',
    question: "If you could design a new kind of bag, what would it carry?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '285',
    question: "What's the most interesting thing you've sampled?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '286',
    question: "Sketching or painting?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '287',
    question: "What's something you're determined to try?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '288',
    question: "If you could create a new kind of umbrella, what would it do?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '289',
    question: "What's something interesting you've arranged?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '290',
    question: "Brownies or cookies?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '291',
    question: "What's something that made you feel accomplished?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '292',
    question: "If you could design a new kind of library, what would make it unique?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '293',
    question: "What's something you've invented out of necessity?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '294',
    question: "Fire pit or bonfire?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '295',
    question: "What's something that turned out better than expected?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '296',
    question: "If you could create a new kind of festival, what would people celebrate?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '297',
    question: "What's something interesting you've traded?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '298',
    question: "Drums or guitar?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '299',
    question: "What's something that helped you grow?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '300',
    question: "If you could design a new kind of journal, what would it track?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '301',
    question: "What's something interesting you've restored?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '302',
    question: "Vintage or modern?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '303',
    question: "What's a dish you've always wanted to learn to cook?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '304',
    question: "Hot chocolate or hot apple cider?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '305',
    question: "What's something you've remixed or reimagined?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '306',
    question: "Sci-fi or fantasy books?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '307',
    question: "What's something that sparked your creativity?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '308',
    question: "If you could design a new kind of store, what would it sell?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '309',
    question: "What's something you've adapted?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '310',
    question: "Sunrise yoga or sunset meditation?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '311',
    question: "What's something that became meaningful to you?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '312',
    question: "If you could create a new kind of celebration, what would it honor?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '313',
    question: "What's something you've customized?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '314',
    question: "Arcade games or console games?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '315',
    question: "What's something unique about you?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '316',
    question: "If you could design a new kind of museum, what would it showcase?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '317',
    question: "What's something you've discovered by chance?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '318',
    question: "Train travel or road trip?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '319',
    question: "What's something that makes you feel at home?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '320',
    question: "If you could create a new kind of comedy show, what would it focus on?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '321',
    question: "What's something you've created from scratch?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '322',
    question: "Sweet or sour candy?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '323',
    question: "What reminds you of childhood?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '324',
    question: "If you could design a new kind of festival game, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '325',
    question: "What's something you've fixed?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '326',
    question: "Writing or drawing?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '327',
    question: "What's something you do differently than most people?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '328',
    question: "If you could create a new kind of performance, what would it include?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '329',
    question: "What's something you've learned from a stranger?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '330',
    question: "Historical fiction or contemporary fiction?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '331',
    question: "What's something you geek out about?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '332',
    question: "If you could design a new kind of instrument, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '333',
    question: "What's something you've taught yourself?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '334',
    question: "Roller blades or skateboard?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '335',
    question: "What's something that always gets your attention?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '336',
    question: "If you could create a new kind of party theme, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '337',
    question: "What's something you've accomplished alone?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '338',
    question: "Milkshake or smoothie?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '339',
    question: "What's something that surprised you about yourself?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '340',
    question: "If you could design a new kind of room, what would be its purpose?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '341',
    question: "What's something you've solved?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '342',
    question: "Poetry or prose?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '343',
    question: "What's something that always feels like an adventure?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '344',
    question: "If you could create a new kind of competition, what would people compete in?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '345',
    question: "What's something you've done spontaneously?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '346',
    question: "Origami or pottery?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '347',
    question: "What's something that made you feel brave?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '348',
    question: "If you could design a new kind of award, what would it recognize?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '349',
    question: "What's something fun you've done with friends?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '350',
    question: "Autumn walks or spring picnics?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '351',
    question: "What's something that made you feel powerful?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '352',
    question: "If you could create a new kind of gift, what would it give people?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '353',
    question: "What's something you've done to help someone?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '354',
    question: "Chess or checkers?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '355',
    question: "What's something that makes you feel connected to others?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '356',
    question: "If you could design a new game show, what would contestants do?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '357',
    question: "What's an interesting way you've helped your community?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '358',
    question: "Whale watching or stargazing?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '359',
    question: "What's something that makes you hopeful?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '360',
    question: "If you could create a new celebration, how would people mark the occasion?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '361',
    question: "What's something you've done just for yourself?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '362',
    question: "Stand-up comedy or improv?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '363',
    question: "What's something that makes you excited about life?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '364',
    question: "If you could design anything without limits, what would you create?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '365',
    question: "What's the most interesting part of your life story so far?",
    category: 'deep',
    mode: 'journal'
  }
];