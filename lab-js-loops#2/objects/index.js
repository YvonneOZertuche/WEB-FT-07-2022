//! ***  Do NOT remove this line ***/
const data = require('./data/data')
//! *** DO Not REMOVE Line Above ***/

//  console.log(data.subscription);

//? 1a. Extract the following from the dessert object 
//* variety 
//* topping
//* flavor

// format the information as follows: 
// ::flavor ::variety with ::topping
//* i.e.  Salted Caramel Doughnut with Whipped Cream

let dessert = {
    id: 5166,
    uid: '906882af-166c-4fc7-92c5-5e3b6687ba7b',
    variety: 'Doughnut',
    topping: 'Whipped Cream',
    flavor: 'Salted Caramel'
}

//? 1b. Loop through the  dessertData array of objects and the same information as in part 1a for each dessert in the array

let desserData = data.desserData; 


//? 2a. Extract the following from the beer object 
let beer = {
    id: 6078,
    uid: '6fed8449-9514-479e-b659-892dd363a0b6',
    brand: 'Lowenbrau',
    name: 'Pliny The Elder',
    style: 'Strong Ale',
    hop: 'Sorachi Ace',
    yeast: '3068 - Weihenstephan Weizen',
    malts: 'Chocolate',
    ibu: '67 IBU',
    alcohol: '8.6%',
    blg: '6.5°Blg'
}

//* name 
//* brand
//* style
//* alcohol
//* hop
//* malt
//* yeast

// format the information as follows: 
// ::name ::brand is a ::style with a ::alcohol alcohol content. It features a ::hop hop and ::malt malt with a ::yeast yeast.
//* i.e.  Pliny the Elder Lowenbrau is a Strong Ale with a 8.6% alcohol content. It features a Sorachi Ace hop and Chocolate malt with a 3068 - Weihenstephan Weizen yeast. 


//? 2b. Loop through the  beerData array of objects and the same information as in part 2a for each beer in the array 

let beerData = data.beerData;


//? 3a. Extract the following from the coffee object 

//* blend_name 
//* origin
//* variety
//* notes

// format the information as follows: 
// ::blend_name from ::origin is a :;variety with notes of: ::notes
//* i.e.  Postmodern Enlightenment from Tapanuli, Sumatra is a Yellow Bourbon with notes of: lingering, juicy, meyer lemon, vanilla, dates

let coffee = {
    id: 6652,
    uid: '87c9966e-deb2-4a11-bf1d-e05969239191',
    blend_name: 'Postmodern Enlightenment',
    origin: 'Tapanuli, Sumatra',
    variety: 'Yellow Bourbon',
    notes: 'lingering, juicy, meyer lemon, vanilla, dates',
    intensifier: 'clean'
}

//? 3b. Loop through the  coffeeData array of objects and the same information as in part a for each coffee in the array 

let coffeeData = data.coffeeData;


//? 4a. Extract the following from the address object 

//* variety 
//* topping
//* flavor

// format the information as follows: 
//* flavor variety with topping
// i.e.  Salted Caramel Doughnut with Whipped Cream 
let appliances = {
    id: 6877,
    uid: '6ced25ea-78c4-4b97-88f9-01ca36599075',
    brand: 'Blue Star',
    equipment: 'Dishwasher'
}

//? 4b. Loop through the  dessertData array of objects and the same information as in part a for each dessert in the array 


//? 5a. Extract the following from the address object 
//* variety 
//* topping
//* flavor

// format the information as follows: 
//* flavor variety with topping
// i.e.  Salted Caramel Doughnut with Whipped Cream

let bank = {
    id: 305,
    uid: 'f2994a31-d044-47ae-8735-cbfd416c4bf4',
    account_number: '0111327040',
    iban: 'GB67FKYO77286957606066',
    bank_name: 'ABN AMRO MEZZANINE (UK) LIMITED',
    routing_number: '672419029',
    swift_bic: 'BCYPGB2LCBB'
}

//? 5b. Loop through the  dessertData array of objects and the same information as in part a for each dessert in the array 


//? 6a. Extract the following from the address object 

//* variety 
//* topping
//* flavor

// format the information as follows: 
//* flavor variety with topping
// i.e.  Salted Caramel Doughnut with Whipped Cream

let subscription = {
    id: 757,
    uid: '33806b73-8613-4d0b-b41b-fb447411c9c6',
    plan: 'Free Trial',
    status: 'Idle',
    payment_method: 'Apple Pay',
    subscription_term: 'Biennal',
    payment_term: 'Monthly'
}

//? 6b. Loop through the  dessertData array of objects and the same information as in part a for each dessert in the array 


//? 7a. Extract the following from the address object 

//* variety 
//* topping
//* flavor

// format the information as follows: 
//* flavor variety with topping
// i.e.  Salted Caramel Doughnut with Whipped Cream

let nation = {
    id: 9510,
    uid: '5d3d544d-a815-4676-93a9-93199fefc04f',
    nationality: 'Sudanese',
    language: 'Zulu',
    capital: 'Bucharest',
    national_sport: 'golf',
    flag: '🇲🇨'
}

//? 7b. Loop through the  dessertData array of objects and the same information as in part a for each dessert in the array 


//? 8a. Extract the following from the address object

//* variety 
//* topping
//* flavor

// format the information as follows: 
//* flavor variety with topping
// i.e.  Salted Caramel Doughnut with Whipped Cream

let randomComputer = {
    id: 7380,
    uid: 'd6725475-1872-4d1e-a1da-8f64086fceb2',
    platform: 'Windows',
    type: 'server',
    os: 'Windows 7',
    stack: 'macOS, Mojave (10.14)'
}

//? 8b. Loop through the  dessertData array of objects and the same information as in part a for each dessert in the array 


//? 9a. Extract the following from the address object

//* variety 
//* topping
//* flavor

// format the information as follows: 
//* flavor variety with topping
// i.e.  Salted Caramel Doughnut with Whipped Cream

let commerce = {
    id: 1699,
    uid: '8e703e9c-b017-4bdc-84c4-8c2834defe11',
    color: 'amethyst',
    department: 'Toys',
    material: 'Leather',
    product_name: 'Incredible Linen Shoes',
    price: 33.32,
    price_string: '8.67',
    promo_code: 'PremiumDiscount379839'
}

//? 9b. Loop through the  dessertData array of objects and the same information as in part a for each dessert in the array 


//? 10a. Extract the following from the address object 
//* variety 
//* topping
//* flavor

// format the information as follows: 
//* flavor variety with topping
// i.e.  Salted Caramel Doughnut with Whipped Cream

let company = {
    id: 4253,
    uid: '97b07701-5f23-4c77-bb86-59728c8fc350',
    business_name: 'Schneider, Ruecker and Lueilwitz',
    suffix: 'Inc',
    industry: 'Performing Arts',
    catch_phrase: 'Secured homogeneous moratorium',
    buzzword: 'Public-key',
    bs_company_statement: 'revolutionize ubiquitous action-items',
    employee_identification_number: '51-5925974',
    duns_number: '00-285-7431',
    logo: 'https://pigment.github.io/fake-logos/logos/medium/color/5.png',
    type: 'Privately Held',
    phone_number: '+597 376-192-9487',
    full_address: '524 Sau Key, Port Bertram, WY 38185',
    latitude: -73.18201842261946,
    longitude: 159.47558427151534
}

//? 10b. Loop through the  dessertData array of objects and the same information as in part a for each dessert in the array 


//? 11. Extract the following from the address object 

// - street_name 
// - zip_code 
// - state 
// - country
// - full_address

//* variety 
//* topping
//* flavor

// format the information as follows: 
//* flavor variety with topping
// i.e.  Salted Caramel Doughnut with Whipped Cream

let address = {
    id: 502,
    uid: 'e8ca1469-823c-4aa2-b632-f205997675f3',
    city: 'West Kareem',
    street_name: 'Blanda Mountain',
    street_address: '36661 Petra Falls',
    secondary_address: 'Suite 475',
    building_number: '42900',
    mail_box: 'PO Box 289',
    community: 'Park Court',
    zip_code: '84730',
    zip: '09270-6514',
    postcode: '54328-6629',
    time_zone: 'Africa/Casablanca',
    street_suffix: 'Avenue',
    city_suffix: 'bury',
    city_prefix: 'North',
    state: 'Utah',
    state_abbr: 'FL',
    country: 'Western Sahara',
    country_code: 'VG',
    latitude: 3.299709589256736,
    longitude: 14.039491768753294,
    full_address: 'Apt. 112 80931 Briana Green, South Joelfurt, NE 13161'
}

//? 11b. Loop through the  dessertData array of objects and the same information as in part a for each dessert in the array 


//? 12a. Loop through the array of objects called addressData and extract the same data as above

//* variety 
//* topping
//* flavor

// format the information as follows: 
//* flavor variety with topping
// i.e.  Salted Caramel Doughnut with Whipped Cream

 
let restaurant = {
    id: 8613,
    uid: 'd219f3e0-e021-4f79-9dcc-b4d87e051f14',
    name: 'Smokestack Juice Bar',
    type: 'Mexican',
    description: 'To sell delicious and remarkable food and drinks. That the food and drink we sell meets the highest standards of quality, freshness and seasonality and combines both modern-creative and traditional southern styles of cooking. To consistently provide our customers with impeccable service by demonstrating warmth, graciousness, efficiency, knowledge, professionalism and integrity in our work. To have every customer who comes through our doors leave impressed by Maxie’s and excited to come back again. To create and maintain a restaurant that is comprehensive and exceptional in its attention to every detail of operation. To provide all who work with us a friendly, cooperative and rewarding environment which encourages long- term, satisfying, growth employment. To keep our concept fresh, exciting and on the cutting edge of the hospitality and entertainment industry. To be a giving member of the Ithaca community and to use our restaurant to improve the quality of life in the Finger Lakes region.',
    review: 'Great lattes and cold drinks as well. Nice to see a place carrying local coffee and products in Times Square! Excited to make it a part of my morning commute as it is much less crowded than the chain coffee shops around here.',
    logo: 'https://loremflickr.com/500/500/restaurant',
    phone_number: '678-444-2997 x39368',
    address: '196 Daren Keys, New Antoineton, MT 41318-1631',
    hours: {
      monday: { opens_at: '9:28 AM', closes_at: '12:52 PM', is_closed: true },
      tuesday: { opens_at: '8:41 AM', closes_at: '11:24 PM', is_closed: true },
      wednesday: { opens_at: '11:11 AM', closes_at: '2:47 PM', is_closed: true },
      thursday: { opens_at: '8:30 AM', closes_at: '5:38 PM', is_closed: true },
      friday: { opens_at: '6:47 AM', closes_at: '5:48 PM', is_closed: false },
      saturday: { opens_at: '10:33 AM', closes_at: '1:38 PM', is_closed: true },
      sunday: { opens_at: '7:55 AM', closes_at: '4:13 PM', is_closed: false }
    }
}

//? 12b. Loop through the  dessertData array of objects and the same information as in part a for each dessert in the array 


//? 13a. Extract the following from the address object 

//* variety 
//* topping
//* flavor

// format the information as follows: 
//* flavor variety with topping
// i.e.  Salted Caramel Doughnut with Whipped Cream

let vehicle = {
    id: 2830,
    uid: '7006d820-69db-4423-9906-0a476c99218a',
    vin: 'T970D0YLTT0X90713',
    make_and_model: 'Ford Fiesta',
    color: 'Orange',
    transmission: 'CVT',
    drive_type: '4x4/4-wheel drive',
    fuel_type: 'Gasoline Hybrid',
    car_type: 'Minivan',
    car_options: [
      'MP3 (Multi Disc)',
      'Rear Window Wiper',
      'A/C: Rear',
      'Tinted Glass',
      'Memory Seats',
      'Integrated Phone',
      'Integrated Phone'
    ],
    specs: [
      'Reversible/waterproof cargo storage',
      'P235/50R18 all-season tires',
      'Traveler/mini trip computer',
      'Dual-zone automatic climate control system -inc: smog sensor, auto recirculation, clear air filter, pollen filter',
      'Leather-wrapped parking brake handle',
      'Scratch-resistant paint clearcoating',
      'Rain-sensing wipers'
    ],
    doors: 1,
    mileage: 48836,
    kilometrage: 22490,
    license_plate: 'LPX-8269'
}

//? 13b. Loop through the  dessertData array of objects and the same information as in part a for each dessert in the array 


//? 14a. Extract the following from the address object 

//* variety 
//* topping
//* flavor

// format the information as follows: 
//* flavor variety with topping
// i.e.  Salted Caramel Doughnut with Whipped Cream

let loremIpsum = {
    id: 2650,
    uid: '2e1b40e7-6b56-4bb3-a3b9-1f727d754848',
    word: 'qui',
    words: [ 'incidunt', 'dolores', 'sint' ],
    characters: 'premv4i0y6zicqqlkc22bd9aaswc6suam210b9viwo4eonksdu75xtrlm7uyfiau991pumjiefce9fos6w0gtd7pa6vd8vuw28vx5pmjqxk12rersjk00hw3vx3q4g5tjb9ipc37lp9vwk7ucei5r2dmpr1jo3vprettrmu7mzi8xzgq9op2f2xeck2o6askk376p0872os4htoiviabjy0jz4dadti32o2gwoz1fqdqdjb40lj4n94atkkg5pd',
    short_sentence: 'Iusto cupiditate veritatis voluptas.',
    long_sentence: 'Fugit in voluptatibus dignissimos harum.',
    very_long_sentence: 'Deserunt natus impedit eius ut est amet corrupti voluptate fuga nihil et excepturi sint quam enim id cum voluptatem fugit.',
    paragraphs: [
      'Omnis modi expedita. Ullam quam dolorem. Sint eos iste.',
      'Voluptatem ut est. Nisi impedit nostrum. Iusto similique facere.',
      'Possimus dolores quia. Sit quibusdam ducimus. Laudantium explicabo ex.'
    ],
    question: 'Sint voluptas numquam quaerat?',
    questions: [
      'Dolorem libero nemo?',
      'Unde quidem dicta?',
      'Aut dicta ipsum?',
      'Expedita voluptate aspernatur?',
      'A praesentium accusantium?',
      'Illum explicabo voluptatem?',
      'Tempore commodi doloribus?',
      'Ducimus rem cum?',
      'Incidunt eum ad?',
      'Velit sit dolores?'
    ]
}

//? 14b. Loop through the  dessertData array of objects and the same information as in part a for each dessert in the array 


//? 15a. Extract the following from the address object 

//* variety 
//* topping
//* flavor

// format the information as follows: 
//* flavor variety with topping
// i.e.  Salted Caramel Doughnut with Whipped Cream

let user = {
    id: 2916,
    uid: '144cb59e-a258-4eab-a277-86b074f7aed6',
    password: 'CJ83jLRSlt',
    first_name: 'Emmanuel',
    last_name: 'Zulauf',
    username: 'emmanuel.zulauf',
    email: 'emmanuel.zulauf@email.com',
    avatar: 'https://robohash.org/voluptassitquis.png?size=300x300&set=set1',
    gender: 'Genderfluid',
    phone_number: '+503 794.101.0079 x982',
    social_insurance_number: '262958820',
    date_of_birth: '1967-06-28',
    employment: {
      title: 'Human Administration Representative',
      key_skill: 'Problem solving'
    },
    address: {
      city: 'New Denna',
      street_name: 'Watsica Gateway',
      street_address: '1492 Zboncak Circle',
      zip_code: '16127',
      state: 'New York',
      country: 'United States',
      coordinates: { lat: -56.12150302545105, lng: 39.23354958493715 }
    },
    credit_card: { cc_number: '5419-3442-3448-4695' },
    subscription: {
      plan: 'Free Trial',
      status: 'Pending',
      payment_method: 'Credit card',
      term: 'Monthly'
    }
}

//? 15b. Loop through the  dessertData array of objects and the same information as in part a for each dessert in the array 


//?  16a. Extract the following from the address object

//* variety 
//* topping
//* flavor

// format the information as follows: 
//* flavor variety with topping
// i.e.  Salted Caramel Doughnut with Whipped Cream

let hipsterInfo = {
    id: 3828,
    uid: 'b88b3e91-c769-4a64-9045-5a7cb4ecb784',
    word: 'goth',
    words: [ 'ethical', 'cleanse', 'leggings' ],
    sentence: 'Gentrify slow-carb cred meggings brunch put a bird on it whatever.',
    sentences: [
      'Next level art party kogi shoreditch asymmetrical forage.',
      'Forage readymade goth before they sold out chartreuse phlogiston.',
      'Viral wayfarers fingerstache migas swag.'
    ],
    paragraph: 'Shabby chic ugh disrupt church-key chambray truffaut slow-carb kombucha. Godard sartorial chambray knausgaard pinterest heirloom five dollar toast tattooed. Artisan keytar neutra mlkshk hammock trust fund. Franzen single-origin coffee salvia kogi. Pitchfork meditation echo etsy portland bespoke leggings skateboard.',
    paragraphs: [
      'Church-key kinfolk slow-carb. Park freegan fixie lo-fi iphone offal. Next level whatever scenester +1. Helvetica 3 wolf moon pug ramps roof umami brunch.',
      'Keffiyeh photo booth meh offal bicycle rights. Wolf kinfolk skateboard helvetica carry gentrify photo booth. Vinyl green juice chartreuse schlitz aesthetic beard ugh lomo. Viral venmo five dollar toast.',
      'Kogi green juice church-key selfies five dollar toast. Kinfolk tattooed food truck lumbersexual farm-to-table sustainable pop-up hammock. Mixtape narwhal pinterest wolf loko viral shoreditch.'
    ]
}

//? 16b. Loop through the  dessertData array of objects and the same information as in part a for each dessert in the array 
