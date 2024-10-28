export interface Icebreaker {
  id: string;
  question: string;
  category: 'fun' | 'deep' | 'creative';
  mode: 'popcorn' | 'journal';
}

export const icebreakers: Icebreaker[] = [
  {
    id: '1',
    question: "If you could instantly master any skill, what would it be and why?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '2',
    question: "What's the most interesting documentary you've ever watched?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '3',
    question: "If you could have dinner with any historical figure, who would it be?",
    category: 'creative',
    mode: 'popcorn'
  },
  {
    id: '4',
    question: "Coffee or tea?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '5',
    question: "What's a memorable experience that shaped who you are?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '6',
    question: "What's the most beautiful place you've ever visited?",
    category: 'deep'
  },
  {
    id: '7',
    question: "If you could instantly become an expert in one subject, what would it be?",
    category: 'professional'
  },
  {
    id: '8',
    question: "What's a small act of kindness you'll never forget?",
    category: 'deep'
  },
  {
    id: '9',
    question: "If you could trade lives with anyone for a day, who would it be?",
    category: 'creative'
  },
  {
    id: '10',
    question: "What's the most valuable life lesson you learned the hard way?",
    category: 'deep'
  },
  {
    id: '11',
    question: "Sweet or savory breakfast?",
    category: 'fun'
  },
  {
    id: '12',
    question: "Morning person or night owl?",
    category: 'fun'
  },
  {
    id: '13',
    question: "What's the best piece of professional advice you've ever received?",
    category: 'professional'
  },
  {
    id: '6',
    question: "Sweet or savory breakfast?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '7',
    question: "What's one habit you've adopted recently that's improved your life?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '8',
    question: "Mountains or beach?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '9',
    question: "If you could design your perfect day, what would it look like?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '10',
    question: "Cats or dogs?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '11',
    question: "What's a small act of kindness you'll never forget?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '12',
    question: "Books or movies?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '13',
    question: "What's a dream you're currently working toward?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '14',
    question: "If you could instantly become an expert in any subject, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '15',
    question: "Summer or winter?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '16',
    question: "What's your go-to karaoke song?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '17',
    question: "If you could master any creative skill instantly, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '18',
    question: "Pancakes or waffles?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '19',
    question: "What's a life lesson you learned the hard way?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '20',
    question: "City life or countryside?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '21',
    question: "What's a book that changed your perspective on life?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '22',
    question: "If you could design a new holiday, what would it celebrate?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '23',
    question: "Sunrise or sunset?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '24',
    question: "What's a memory that always makes you smile?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '25',
    question: "Movie theater or home streaming?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '26',
    question: "What's a tradition you'd like to start?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '27',
    question: "Tea or coffee?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '28',
    question: "What's something you're proud of but rarely get to talk about?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '29',
    question: "If you could invent anything, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '30',
    question: "Beach day or ski trip?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '31',
    question: "What's your favorite ice cream flavor?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '32',
    question: "What's a moment that completely changed your perspective?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '33',
    question: "If you could create your own planet, what would it be like?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '34',
    question: "Netflix or YouTube?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '35',
    question: "What's a life goal that excites you the most?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '36',
    question: "Pizza or burgers?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '37',
    question: "If you could design a new language, what would be its most unique feature?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '38',
    question: "What's your go-to comfort show?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '39',
    question: "What's a belief you had that completely changed?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '40',
    question: "Indoor or outdoor activities?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '41',
    question: "If you could create any new technology, what would it do?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '42',
    question: "What's your favorite way to spend a rainy day?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '43',
    question: "What's a challenge that made you stronger?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '44',
    question: "Text messages or phone calls?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '45',
    question: "If you could design your dream home, what's one unique feature it would have?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '46',
    question: "What's your opinion on AI in everyday life?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '47',
    question: "Spotify or Apple Music?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '48',
    question: "If you could design a video game, what would it be about?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '49',
    question: "Digital books or physical books?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '50',
    question: "What's a technology that changed your life?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '51',
    question: "Instagram or TikTok?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '52',
    question: "If you could create a new social media platform, what would make it unique?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '53',
    question: "Voice messages or text messages?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '54',
    question: "What's a digital habit you're trying to change?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '55',
    question: "Gaming PC or Console?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '56',
    question: "If you could create an app, what would it do?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '57',
    question: "Remote work or office work?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '58',
    question: "What's your take on cryptocurrency?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '59',
    question: "Touchscreen or physical buttons?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '60',
    question: "If you could design a robot assistant, what would be its main feature?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '61',
    question: "What's your favorite emoji to use?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '62',
    question: "If you could design the future of social media, what would you change?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '63',
    question: "Dark mode or light mode?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '64',
    question: "What's a digital tool that's transformed how you work?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '65',
    question: "If you could create a new streaming service, what would make it special?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '66',
    question: "Reddit or Twitter?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '67',
    question: "What's your relationship with social media?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '68',
    question: "Wireless earbuds or over-ear headphones?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '69',
    question: "If you could design a smart home feature, what would it do?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '70',
    question: "iOS or Android?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '71',
    question: "What's a piece of technology you wish existed?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '72',
    question: "Video calls or phone calls?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '73',
    question: "What's your most used app and why?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '74',
    question: "Laptop or desktop?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '75',
    question: "If you could create a new form of virtual reality, what would it be like?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '76',
    question: "What's your favorite way to learn new things online?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '77',
    question: "Subtitles on or off?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '78',
    question: "If you could create a new emoji, what would it be?",
    category: 'creative',
    mode: 'popcorn'
  },
  {
    id: '79',
    question: "What's a YouTube rabbit hole you've fallen into recently?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '80',
    question: "How has technology changed your relationships?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '81',
    question: "Mechanical keyboard or silent keys?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '82',
    question: "If you could design a perfect online learning platform, what would it include?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '83',
    question: "What's your favorite meme format?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '84',
    question: "What's a digital skill you want to master?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '85',
    question: "Notifications on or off?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '86',
    question: "If you could create a virtual pet, what would it be like?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '87',
    question: "What's your favorite digital art style?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '88',
    question: "What's a technology you miss from the past?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '89',
    question: "Touch typing or hunt and peck?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '90',
    question: "If you could design a futuristic transportation method, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '91',
    question: "What's your favorite filter to use on photos?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '92',
    question: "How do you think AI will change education in the future?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '93',
    question: "If you could create a new type of music genre, what would it sound like?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '94',
    question: "Digital art or traditional art?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '95',
    question: "What's a piece of advice you'd give to your younger online self?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '96',
    question: "Gaming mouse or regular mouse?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '97',
    question: "If you could design a new type of social gathering app, what would it do?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '98',
    question: "Do you prefer voice typing or keyboard typing?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '99',
    question: "What's a digital achievement you're proud of?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '100',
    question: "Vertical or horizontal video?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '101',
    question: "If you could create any AR filter, what would it do?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '102',
    question: "What's your favorite type of YouTube content?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '103',
    question: "How has the internet changed how you learn?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '104',
    question: "Wireless charging or cable charging?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '105',
    question: "If you could design a new type of digital art tool, what would it do?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '106',
    question: "What's your favorite video game memory?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '107',
    question: "How do you think VR will change how we connect with others?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '108',
    question: "If you could design a hologram feature, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '109',
    question: "Discord or Slack?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '110',
    question: "What's a digital space that makes you feel most comfortable?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '111',
    question: "Pixel art or 3D graphics?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '112',
    question: "If you could create any digital pet, what abilities would it have?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '113',
    question: "Do you prefer group chats or one-on-one messages?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '121',
    question: "What's your favorite video editing effect?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '122',
    question: "How do you think AI art will impact creativity?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '123',
    question: "If you could design a new type of smartphone, what feature would you add?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '124',
    question: "GIFs or Stickers?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '125',
    question: "What's a digital skill that's become essential in your life?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '126',
    question: "Podcast or audiobook?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '136',
    question: "What's your favorite mobile game genre?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '137',
    question: "How do you think the metaverse will change social interaction?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '138',
    question: "If you could design a new emoji reaction, what would it express?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '139',
    question: "Touch ID or Face ID?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '140',
    question: "What's a digital habit you're proud of developing?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '141',
    question: "Physical gift cards or digital gift cards?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '142',
    question: "If you could create a new type of digital art style, what would it look like?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '143',
    question: "Do you prefer digital or physical photo albums?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '144',
    question: "What's a digital community that's impacted your life?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '145',
    question: "Smart watch or traditional watch?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '146',
    question: "If you could design a new type of digital game, what would be its core mechanic?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '147',
    question: "What's your favorite type of digital content to create?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '148',
    question: "How has digital technology changed your work life?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '149',
    question: "Bluetooth or wired headphones?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '150',
    question: "If you could create a new type of digital celebration, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '151',
    question: "What's your favorite coding language?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '152',
    question: "How do you think quantum computing will change the world?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '153',
    question: "If you could design a robot companion, what would be its personality?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '154',
    question: "Mac or Windows?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '155',
    question: "What's a technology that made you feel old?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '156',
    question: "Voice assistant or typing?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '157',
    question: "If you could create a new social media feature, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '158',
    question: "Do you prefer digital or physical art galleries?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '159',
    question: "What's a digital memory you wish you could relive?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '160',
    question: "Tablet or e-reader?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '161',
    question: "If you could design a virtual concert experience, what would make it special?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '162',
    question: "What's your favorite type of tech gadget?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '163',
    question: "How has online shopping changed your life?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '164',
    question: "Digital wallet or physical wallet?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '165',
    question: "If you could create a new type of digital memory storage, how would it work?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '166',
    question: "What's your favorite video chat platform?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '167',
    question: "What's a digital skill you wish everyone would learn?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '168',
    question: "Chrome or Firefox?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '169',
    question: "If you could design a digital learning game, what would it teach?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '170',
    question: "Do you prefer digital or physical greeting cards?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '171',
    question: "What's a digital platform that changed how you see the world?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '172',
    question: "Smart home or traditional home?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '186',
    question: "What's your favorite way to express creativity?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '187',
    question: "Board games or card games?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '188',
    question: "If you could design a dream vacation, what would it include?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '189',
    question: "Chocolate or vanilla ice cream?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '190',
    question: "What's a hobby that changed your perspective on life?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '191',
    question: "Camping or glamping?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '192',
    question: "If you could create a new flavor combination, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '193',
    question: "Morning shower or night shower?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '194',
    question: "What's a skill you never thought you'd learn?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '195',
    question: "Sneakers or sandals?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '196',
    question: "If you could design a perfect morning routine, what would it include?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '197',
    question: "Plants or pets?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '198',
    question: "What's a compliment you'll never forget?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '199',
    question: "Spicy or mild?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '200',
    question: "If you could create a new restaurant concept, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '201',
    question: "What's your favorite season and why?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '202',
    question: "What's a dream that keeps coming back?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '211',
    question: "What's a life lesson that took you too long to learn?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '212',
    question: "Roller coasters or water slides?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '213',
    question: "If you could design your own festival, what would it celebrate?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '214',
    question: "Dine in or takeout?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '215',
    question: "What's a moment that made you proud of yourself?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '216',
    question: "Horror movies or comedy shows?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '217',
    question: "If you could create a new superhero, what would be their power?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '218',
    question: "Yoga or high-intensity workouts?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '219',
    question: "What's a friendship that changed your life?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '220',
    question: "Smoothie or juice?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '221',
    question: "If you could invent a new musical instrument, what would it sound like?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '222',
    question: "Sci-fi or fantasy?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '223',
    question: "What's a small gesture that meant a lot to you?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '224',
    question: "Picnic or restaurant date?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '225',
    question: "If you could create a new holiday tradition, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '226',
    question: "Crossword puzzles or sudoku?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '227',
    question: "What's a challenge that made you grow?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '228',
    question: "Autumn walks or spring picnics?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '229',
    question: "If you could design a new board game, what would be its theme?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '236',
    question: "Farmer's market or grocery store?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '237',
    question: "What's a memory that always makes you laugh?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '238',
    question: "If you could create a new language, what would be its most unique feature?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '239',
    question: "Singing or dancing?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '240',
    question: "What's a place that feels like home to you?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '241',
    question: "Vintage or modern style?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '242',
    question: "If you could design a treehouse, what would you include?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '243',
    question: "Breakfast for dinner or dinner for breakfast?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '244',
    question: "What's a dream you're currently working towards?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '245',
    question: "Painting or photography?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '246',
    question: "If you could create a new color, how would you describe it?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '247',
    question: "Hammock or beach chair?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '248',
    question: "What's a risk you're glad you took?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '249',
    question: "Stargazing or cloud watching?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '250',
    question: "If you could design a perfect day, what would it include?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '251',
    question: "Amusement parks or water parks?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '252',
    question: "What's a lesson you learned from your family?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '253',
    question: "If you could invent a new sport, what would be its main rule?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '254',
    question: "Hot chocolate or hot cider?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '255',
    question: "What's a talent you'd love to develop?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '256',
    question: "Outdoor concert or indoor venue?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '257',
    question: "If you could create a new tradition for your community, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '258',
    question: "Jigsaw puzzles or word puzzles?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '259',
    question: "What's a goal that pushed you out of your comfort zone?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '260',
    question: "Sunrise yoga or sunset meditation?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '261',
    question: "What's a childhood dream you still think about?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '262',
    question: "Candles or fairy lights?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '263',
    question: "If you could design a magical garden, what would grow in it?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '264',
    question: "Podcasts or playlists?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '265',
    question: "What's a piece of art that moved you?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '266',
    question: "Minimalist or maximalist style?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '267',
    question: "If you could create a new constellation, what would it depict?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '268',
    question: "Fruit smoothie or green juice?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '269',
    question: "What's a moment when you felt truly proud of someone else?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '270',
    question: "Hiking boots or running shoes?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '271',
    question: "If you could design a new kind of garden, what would make it unique?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '272',
    question: "Acoustic or electric music?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '273',
    question: "What's a small victory you're proud of?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '274',
    question: "Rooftop views or forest trails?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '275',
    question: "If you could create a new kind of celebration, what would it honor?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '276',
    question: "Polaroid or digital photos?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '277',
    question: "What's a conversation that changed your perspective?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '278',
    question: "If you could design a new kind of musical instrument, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '279',
    question: "Houseplants or fresh flowers?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '280',
    question: "What's a hobby that helps you relax?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '281',
    question: "Morning pages or evening reflection?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '282',
    question: "If you could create a new kind of art form, what would it involve?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '283',
    question: "Street food or fine dining?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '284',
    question: "What's a place you find peace?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '285',
    question: "Backyard barbecue or indoor dinner party?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '286',
    question: "What's a lesson you learned from a mistake?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '287',
    question: "Baking or grilling?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '288',
    question: "If you could design a perfect living space, what would be its key feature?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '289',
    question: "Documentaries or dramas?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '290',
    question: "What's a gift you'll never forget receiving?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '291',
    question: "Outdoor markets or indoor malls?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '292',
    question: "If you could invent a new kind of transportation, how would it work?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '293',
    question: "Chocolate chip or oatmeal cookies?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '294',
    question: "What's a tradition you want to pass on?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '295',
    question: "Stand-up comedy or improv shows?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '296',
    question: "If you could create a new kind of festival, what would people celebrate?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '297',
    question: "Journaling or meditation?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '298',
    question: "What's a moment that made you believe in yourself?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '299',
    question: "Farmers market or food truck festival?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '300',
    question: "If you could design a new kind of playground, what would you include?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '301',
    question: "Classic rock or modern indie?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '302',
    question: "What's a challenge you're proud of overcoming?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '303',
    question: "If you could design a new kind of museum, what would it showcase?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '304',
    question: "Bubble tea or smoothie bowl?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '305',
    question: "What's a skill that's become unexpectedly useful?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '306',
    question: "Cozy cafe or busy coffee shop?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '307',
    question: "If you could design a new kind of park, what would be its theme?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '308',
    question: "Sci-fi movies or romantic comedies?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '309',
    question: "What's a friendship that surprised you?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '310',
    question: "Morning run or evening walk?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '311',
    question: "What's a book that changed how you think?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '312',
    question: "Tacos or pizza?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '313',
    question: "If you could design a new kind of school, what would make it special?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '314',
    question: "Vinyl records or digital streaming?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '315',
    question: "What's a moment when you felt truly understood?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '316',
    question: "Beach volleyball or pool party?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '317',
    question: "If you could invent a new kind of food, what would it taste like?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '318',
    question: "Karaoke or dance party?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '319',
    question: "What's a lesson you learned from a stranger?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '320',
    question: "Outdoor yoga or gym workout?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '321',
    question: "If you could create a new kind of holiday, what would people do?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '322',
    question: "Fruit pie or chocolate cake?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '323',
    question: "What's a memory that always calms you?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '324',
    question: "Board game cafe or arcade?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '325',
    question: "If you could design a new kind of restaurant, what would be its theme?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '326',
    question: "Historical fiction or science fiction?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '327',
    question: "What's a dream that changed your direction in life?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '328',
    question: "If you could create a new kind of game show, what would contestants do?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '329',
    question: "Hot springs or cold plunge?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '330',
    question: "What's a place that exceeded your expectations?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '331',
    question: "Escape room or scavenger hunt?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '332',
    question: "If you could design a new kind of carnival ride, what would it do?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '333',
    question: "Sushi or pasta?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '334',
    question: "What's a hobby that taught you about yourself?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '335',
    question: "Drive-in movie or rooftop cinema?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '336',
    question: "What's a lesson that nature taught you?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '337',
    question: "Waterfall hike or desert exploration?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '338',
    question: "If you could design a new kind of library, what would make it unique?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '339',
    question: "Homemade pizza or takeout pizza?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '340',
    question: "What's a moment of kindness you'll never forget?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '341',
    question: "Jazz club or rock concert?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '342',
    question: "If you could invent a new kind of musical genre, what would it sound like?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '343',
    question: "Campfire stories or ghost tours?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '344',
    question: "What's a creative project that challenged you?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '345',
    question: "Pottery class or painting workshop?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '346',
    question: "If you could design a new kind of festival, what would people experience?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '347',
    question: "Morning meditation or evening reflection?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '348',
    question: "What's a journey that changed your perspective?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '349',
    question: "Food truck rally or wine tasting?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '350',
    question: "If you could create a new kind of performance art, what would it involve?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '351',
    question: "Sunset sailing or sunrise hiking?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '352',
    question: "What's a skill you're currently developing?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '353',
    question: "If you could design a new kind of community space, what would it include?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '354',
    question: "Urban exploration or nature photography?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '355',
    question: "What's a goal that excites you for the future?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '356',
    question: "Rooftop garden or basement studio?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '357',
    question: "If you could invent a new kind of celebration ritual, what would it be?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '358',
    question: "Silent disco or live band?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '359',
    question: "What's a piece of wisdom you'd share with others?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '360',
    question: "Forest bathing or beach meditation?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '361',
    question: "What's a life motto you live by?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '362',
    question: "If you could design your dream creative studio, what would it include?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '363',
    question: "Starlit picnic or sunrise breakfast?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '364',
    question: "What's a story you'll always remember?",
    category: 'deep',
    mode: 'journal'
  },
  {
    id: '365',
    question: "If you could create any kind of legacy, what would it be?",
    category: 'creative',
    mode: 'journal'
  }
];
