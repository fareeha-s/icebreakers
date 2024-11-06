export interface Icebreaker {
  id: string;
  question: string;
  category: 'fun' | 'introspective' | 'creative';
  mode: 'popcorn' | 'journal';
  tech?: boolean;
  vibe?: boolean;
}

export const icebreakers: Icebreaker[] = [
  {
    id: '1',
    question: "Potatoes! Mashed, roasted, hashed, 🍟...?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '2',
    question: "Dark mode or light mode?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '3',
    question: "What's your abandoned Duolingo language?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '4',
    question: "How's your TikTok algorithm lately?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '5',
    question: "Screen Time report: look or ignore?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '6',
    question: "Which Succession sibling are you?",
    category: 'creative',
    mode: 'journal',
    vibe: true
  },
  {
    id: '7',
    question: "Would you survive a zombie apocalypse?",
    category: 'creative',
    mode: 'journal',
    vibe: true
  },
  {
    id: '8',
    question: "Would you make it in a horror movie?",
    category: 'creative',
    mode: 'journal',
    vibe: true
  },
  {
    id: '9',
    question: "What would be your talent in a talent show?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '10',
    question: "Would you make it as a spy?",
    category: 'creative',
    mode: 'journal',
    vibe: true
  },
  {
    id: '11',
    question: "Group chat: do you send all the memes or just enjoy them?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '12',
    question: "Road trips: DJ or navigator?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '13',
    question: "At a buffet: try everything or stick to favorites?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '14',
    question: "New recipe: follow exactly or improvise?",
    category: 'creative',
    mode: 'popcorn'
  },
  {
    id: '15',
    question: "Watching movies: predict the plot or just enjoy?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '16',
    question: "Party arrival: right on time or fashionably late?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '17',
    question: "Podcast listener: full attention or while doing tasks?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '18',
    question: "Coffee order: same every time or try new drinks?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '19',
    question: "What's a random childhood memory that still makes you laugh?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '20',
    question: "What's the most useless talent you have?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '21',
    question: "What's something you're surprised isn't more popular?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '22',
    question: "What's the most memorable excuse you've heard?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '23',
    question: "What tourist trap actually lived up to the hype?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '24',
    question: "What's your favorite corner of the internet?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '25',
    question: "What's something you're trying to improve?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '26',
    question: "What's your favorite tradition?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '27',
    question: "What's something you've learned about yourself recently?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '28',
    question: "What's your favorite thing to cook?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '29',
    question: "What's a random thing you're an expert in?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '30',
    question: "What's your ideal weather?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '31',
    question: "What's your favorite scent?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '32',
    question: "What's something you do differently than everyone else?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '33',
    question: "What's your favorite place to think?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '34',
    question: "What's something you've completely changed your mind about?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '35',
    question: "What's a habit you picked up recently?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '36',
    question: "What's your favorite time of year?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '37',
    question: "What's a song that always gets stuck in your head?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '38',
    question: "What's your favorite thing about where you live?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '39',
    question: "What's your favorite way to start the day?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '40',
    question: "What's your go-to road trip snack?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '41',
    question: "What's something you're surprisingly passionate about?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '42',
    question: "What's your go-to breakfast?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '43',
    question: "What's a random thing you're picky about?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '44',
    question: "What's the best advice you've ignored?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '45',
    question: "What's a weird thing you believed as a kid?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '46',
    question: "What's the best money you've ever spent?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '47',
    question: "What's something you're irrationally afraid of?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '48',
    question: "What's your favorite way to eat eggs?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '49',
    question: "What's something you're surprisingly competitive about?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '50',
    question: "What's a movie everyone's seen except you?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '51',
    question: "What's something you thought would be easy until you tried it?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '52',
    question: "AirPods or over-ear headphones?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '53',
    question: "Midjourney or DALL-E?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '54',
    question: "Figma or Canva?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '55',
    question: "What's an app that actually improved your life?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '56',
    question: "Kindle or physical books?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '57',
    question: "What's the most recent rabbit hole you fell into?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '58',
    question: "What's your current phone wallpaper?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '59',
    question: "Old photos: organized albums or endless camera roll?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '60',
    question: "Travel photos: post immediately or wait till home?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '61',
    question: "Dream house: modern minimalist or cozy cottage?",
    category: 'creative',
    mode: 'popcorn'
  },
  {
    id: '62',
    question: "What's something you wish you could tell your younger self?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '63',
    question: "What's a book that changed how you see the world?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '64',
    question: "What's a popular trend everyone loves that you couldn't get into?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '65',
    question: "What's the last thing you got really excited about?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '66',
    question: "What's a skill you learned from YouTube?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '67',
    question: "What's the weirdest thing in your camera roll?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '68',
    question: "Museums: read every plaque or just wander?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '69',
    question: "What's the last song you listened to?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '70',
    question: "What's the last thing you saved on Instagram?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '71',
    question: "What's the last tweet you bookmarked?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '72',
    question: "What's the last TikTok you saved?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '73',
    question: "What's the last thing you screenshotted?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '74',
    question: "Hot or cold drinks?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '75',
    question: "Weather: sunny or rainy?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '76',
    question: "Seasons: summer or winter?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '77',
    question: "Music or silence while walking?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '78',
    question: "What's your getting ready music?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '79',
    question: "Windows: blinds or curtains?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '80',
    question: "What's your random convenience store go-to?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '81',
    question: "On your commute: music or podcasts?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '82',
    question: "Notes app or notebook?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '83',
    question: "What's your Sunday reset routine?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '84',
    question: "First app you open when you're bored?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '85',
    question: "What's your go-to background noise?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '86',
    question: "What brand would you be an ambassador for?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '87',
    question: "How long would you last in a haunted house?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '88',
    question: "What would you title your biography?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '89',
    question: "What song have you have in your head all week?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '90',
    question: "What was your last Netflix binge?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '91',
    question: "What's your most specific Spotify playlist?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '92',
    question: "Would you rather: every traffic light always green for you, or always have the best parking spot?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '93',
    question: "Sweet or savory breakfast?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '94',
    question: "Plants: real or fake?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '95',
    question: "How do you organize your phone apps?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '96',
    question: "What do you do when you're waiting in line?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '97',
    question: "What's your favorite playlist name?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '98',
    question: "Would you survive Squid Game?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '99',
    question: "What's a movie that's so bad it's good?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '100',
    question: "What song hits different in the car?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '101',
    question: "What's your signature dance move?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '102',
    question: "Hot sauce: on everything or never?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '103',
    question: "Dumplings: steamed or fried?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '104',
    question: "Tacos: soft or crunchy?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '105',
    question: "Sushi: classic rolls or experimental?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '106',
    question: "Ice cream: cup or cone?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '107',
    question: "Cookies: chewy or crunchy?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '108',
    question: "Beach or mountains?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '109',
    question: "Dogs or cats?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '110',
    question: "Sunrise or sunset?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '111',
    question: "Streaming service of choice (Netflix/Prime/HBO/Hulu)?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '112',
    question: "What's a hill you're willing to die on about food?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '113',
    question: "What's your go-to karaoke song?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '114',
    question: "Spotify or Apple Music?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '115',
    question: "Texts or voice notes?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '116',
    question: "Facetime or phone call?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '117',
    question: "Movies at home or theater?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '118',
    question: "Laptop or tablet?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '119',
    question: "Where do you find inspiration?",
    category: 'creative',
    mode: 'journal',
    tech: true
  },
  {
    id: '120',
    question: "Audiobooks or physical books?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '121',
    question: "Subtitles on or off?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '122',
    question: "Playlist or shuffle?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '123',
    question: "What's something you learned the hard way?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '124',
    question: "What is your favorite travel hack?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '125',
    question: "What's your most used emoji?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '126',
    question: "What's a trend you were way too into?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '127',
    question: "What's a random fact you know that's surprisingly useful?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '128',
    question: "Crosswords or sudoku?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '129',
    question: "What's a small decision that totally changed your life?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '130',
    question: "What's your comfort TV show?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '131',
    question: "What's your most used phone app?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '132',
    question: "What's a skill you thought you'd never use but did?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '133',
    question: "What's a weird thing you do out of habit?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '134',
    question: "Text or call?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '135',
    question: "What's your favorite time of day?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '136',
    question: "Showers: morning or evening?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '137',
    question: "What's a small thing that makes your day better?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '138',
    question: "What's your favorite smell?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '139',
    question: "What's something you're looking forward to?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '140',
    question: "What's your favorite season and why?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '141',
    question: "What's your favorite way to spend a Sunday?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '142',
    question: "What's a habit you're trying to build?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '143',
    question: "What's your favorite holiday tradition?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '144',
    question: "What's something you're curious about lately?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '145',
    question: "What's a skill that impressed you when someone else did it?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '146',
    question: "What's something you like that you never thought you would?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '147',
    question: "What's a weird rule you have for yourself?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '148',
    question: "What world record do you wish you held?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '149',
    question: "What's something you've recently discovered?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '150',
    question: "What's your go-to sandwich?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '151',
    question: "What's a random talent you wish you had?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '152',
    question: "What's something that always makes you feel better?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '153',
    question: "What's your favorite childhood game?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '154',
    question: "What song could you listen to on repeat forever?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '155',
    question: "Early bird or night owl?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '156',
    question: "What's something you're surprisingly good at?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '157',
    question: "What is your DJ name?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '158',
    question: "What's your go-to late night food?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '159',
    question: "What's something you've always wanted to try?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '160',
    question: "What's a random Wikipedia topic you know too much about?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '161',
    question: "What's your ideal weekend morning?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '162',
    question: "What's a skill you want to learn?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '163',
    question: "What's your favorite childhood memory?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '164',
    question: "What's your favorite way to spend a rainy day?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '165',
    question: "What's your favorite cafe?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '166',
    question: "What's something you're proud of?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '167',
    question: "What's your favorite childhood snack?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '168',
    question: "What's something that always makes you nostalgic?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '169',
    question: "What's the best fruit?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '170',
    question: "What's something you learned from your parents?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '171',
    question: "What's your favorite sound?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '172',
    question: "What's your go-to stress relief?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '173',
    question: "Spicy or mild?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '174',
    question: "What's something you wish you could experience again for the first time?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '175',
    question: "What's your favorite way to end the day?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '176',
    question: "What's something you're better at than most people?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '177',
    question: "What's your favorite childhood book?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '178',
    question: "Sweet or salty snacks?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '179',
    question: "What's your non-negotiable morning routine step?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '180',
    question: "What's something you're excited to learn more about?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '181',
    question: "What's a small luxury you enjoy?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '182',
    question: "What's more fun, cardio or strength?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '183',
    question: "What's something you've gotten into lately?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '184',
    question: "Birthday celebration: big party or intimate dinner?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '185',
    question: "Music while working or silence?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '186',
    question: "What's something that surprised you about growing up?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '187',
    question: "Would you rather be able to control time or fly?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '188',
    question: "Cooking or ordering in?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '189',
    question: "What's your favorite thing about your friends?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '190',
    question: "If you had to be an animal, which would you be?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '191',
    question: "Train, plane, or road trip person?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '192',
    question: "What's something you're grateful you tried?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '193',
    question: "Given the choice of anyone in the world, whom would you want as a dinner guest?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '194',
    question: "Would you rather sail or van life around the world?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '195',
    question: "What's your favorite solo activity to recharge?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '196',
    question: "What's something you're glad you didn't give up on?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '197',
    question: "What's your favorite thing about your home?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '198',
    question: "What's something you do to treat yourself?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '199',
    question: "Planned trips or spontaneous adventures?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '200',
    question: "What's something that changed your perspective?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '201',
    question: "What's your favorite memory from last year?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '202',
    question: "What's something you're trying to figure out?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '203',
    question: "What's your favorite thing to cook?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '204',
    question: "What's something you wish you were better at?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '205',
    question: "TikTok or Instagram?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '206',
    question: "What do you value most in a friendship?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '207',
    question: "What's a random thing you screenshot?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '208',
    question: "What app do you open when you're bored?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '209',
    question: "What's your comfort outfit?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '210',
    question: "Iced or hot coffee?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '211',
    question: "What's your online shopping weakness?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '212',
    question: "What's your cozy spot?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '213',
    question: "Before making calls, do you ever rehearse what you're going to say?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '214',
    question: "For what in your life do you feel most grateful?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '215',
    question: "What's your camera roll mostly full of?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '216',
    question: "What's your most controversial design take?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '217',
    question: "Podcasts or audiobooks?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '218',
    question: "Instagram Stories or Posts?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '219',
    question: "What's your phone background?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '220',
    question: "What's your favorite playlist name?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '221',
    question: "What's your most recent impulse buy?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '222',
    question: "Fashion: trendy or classic?",
    category: 'creative',
    mode: 'popcorn'
  },
  {
    id: '223',
    question: "Reels or TikToks?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '224',
    question: "What's your most watched YouTube genre?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '225',
    question: "What's your favorite corner of the internet?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '226',
    question: "What's your desk must-have?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '227',
    question: "Touch ID or Face ID?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '228',
    question: "What's your longest streak of anything?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '229',
    question: "Caps on or off when texting?",
    category: 'fun',
    mode: 'popcorn',
    tech: true
  },
  {
    id: '230',
    question: "What's your most recent saved post?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '231',
    question: "Dream home: modern or classic aesthetic?",
    category: 'creative',
    mode: 'popcorn'
  },
  {
    id: '232',
    question: "Would you/have you run a marathon?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '233',
    question: "What's your lockscreen?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '234',
    question: "Alarm or natural wake up?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '235',
    question: "What's your most recent screenshot?",
    category: 'fun',
    mode: 'journal',
    tech: true
  },
  {
    id: '236',
    question: "Best new artist of the year?",
    category: 'fun',
    mode: 'journal'
  },
  {
    id: '237',
    question: "What's something you wish more people knew?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '238',
    question: "If you were Iron Man for one day what would you build?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '239',
    question: "What's your favorite thing about the person sitting next to you?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '240',
    question: "What's something you wish you had learned sooner?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '241',
    question: "What's your favorite tea?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '242',
    question: "What's something you're still figuring out?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '243',
    question: "What's a compliment you'll never forget?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '244',
    question: "What's something you would change in an app you use regularly?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '245',
    question: "What's something you would teach?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '246',
    question: "What's a belief you've recently challenged?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '247',
    question: "What's something you're working on accepting?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '248',
    question: "What's a recent realization you've had about yourself?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '249',
    question: "What's a quote that changed your perspective?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '250',
    question: "If you had to choose: life in a submarine or on a spaceship?",
    category: 'fun',
    mode: 'popcorn'
  },
  {
    id: '251',
    question: "Who is someone you take inspiration from?",
    category: 'introspective',
    mode: 'journal'
  },
  {
    id: '252',
    question: "If you had a podcast, what would it be about?",
    category: 'creative',
    mode: 'journal'
  },
  {
    id: '253',
    question: "If you could design a new holiday, what would it celebrate?",
    category: 'creative',
    mode: 'journal'
  },

] as const;