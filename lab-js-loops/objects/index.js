//! ***  Do NOT remove this line ***/
const data = require('./data/data')
//! *** DO Not REMOVE Line Above ***/

//  console.log(data.subscription);


//? 1. Extract the following from the appliance object 

//* brand
//* equipment

// format the information as follows: 
// A ::brand ::equipement

//* i.e. A Blue Star Dishwasher

let appliance = {
  id: 6877,
  uid: '6ced25ea-78c4-4b97-88f9-01ca36599075',
  brand: 'Blue Star',
  equipment: 'Dishwasher'
}

//? 1b. Loop through the  appliances array of objects and the same information as in part 1a for each appliance in the array 

let appliances = data.appliances;
for (let i = 0; i < appliances.length; i++){
  // console.log(appliances[i].brand)
  // console.log(appliances[i])
  // console.log(`${appliances[i].brand}: ${appliances[i].equipment}`)
}

//? 2a. Extract the following from the dessert object 
//* variety 
//* topping
//* flavor

// format the information as follows: 
// ::flavor ::variety with ::topping

//* i.e.  Salted Caramel Doughnut with Whipped Cream

// let dessert = {
//     id: 5166,
//     uid: '906882af-166c-4fc7-92c5-5e3b6687ba7b',
//     variety: 'Doughnut',
//     topping: 'Whipped Cream',
//     flavor: 'Salted Caramel'
// }
// console.log(`${dessert.flavor} ${dessert.variety} with ${dessert.topping}`)
//? 2b. Loop through the  desserts array of objects and the same information as in part 2a for each dessert in the array

// let dessers = data.desserts; 


//? 3a. Extract the following from the beer object 
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


//? 3b. Loop through the  beers array of objects and the same information as in part 3a for each beer in the array 

// let beers = data.beers;
// for(let i = 0; i < beers.length; i++){
// console.log(`${beers[i].name} ${beers[i].brand} is a ${beers[i].style} with a ${beers[i].alcohol} content.  
// It features a ${beers[i].hop} and ${beers[i].malt} with a ${beers[i].yeast}.
// `)
// }
//? 4a. Extract the following from the coffee object 

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
// console.log(`${coffee.blend_name} from ${coffee.origin} is a ${coffee.variety} with notes of ${coffee.notes}`)

//? 4b. Loop through the  coffeeData array of objects and the same information as in part 4a for each coffee in the array 

let coffeeData = data.coffee;
// for (let i = 0; i < coffeeData.length; i++){
// console.log(`${coffeeData[i].blend_name} from ${coffeeData[i].origin} is a ${coffeeData[i].variety} with notes ${coffeeData[i].notes}`)

// }

//? 5a. Extract the following from the bank object 
//* bank_name 
//* routing_number

// format the information as follows: 
// ::bank_name
// account number ::account_number 
// routing number ::routing_number

//* i.e.  ABN AMRO MEZZANINE (UK) LIMITED
//*       account number: 0111327040
//*       routing number: 672419029

let bank = {
    id: 305,
    uid: 'f2994a31-d044-47ae-8735-cbfd416c4bf4',
    account_number: '0111327040',
    iban: 'GB67FKYO77286957606066',
    bank_name: 'ABN AMRO MEZZANINE (UK) LIMITED',
    routing_number: '672419029',
    swift_bic: 'BCYPGB2LCBB'
}
// console.log(`${bank.bank_name} 
// account number: ${bank.account_number} 
// routing number: ${bank.routing_number}`)
//? 5b. Loop through the  banks array of objects and the same information as in part 5a for each bank in the array 


// let banks = data.banks;
// for (let i = 0; i < banks.length; i++){
//   console.log(`${banks[i].bank_name} 
// account number: ${banks[i].account_number} 
// routing number: ${banks[i].routing_number}
// `)

// }

//? 6a. Extract the following from the subscription object 

//* subscription_term
//* payment_term
//* payment_method


// format the information as follows: 
// ::subscription_term ::payment_term Subscription with ::payment_method

//* i.e.  Biennal Monthly Subscription with Apple Pay

// let subscription = {
//     id: 757,
//     uid: '33806b73-8613-4d0b-b41b-fb447411c9c6',
//     plan: 'Free Trial',
//     status: 'Idle',
//     payment_method: 'Apple Pay',
//     subscription_term: 'Biennal',
//     payment_term: 'Monthly'
// }
// console.log(`${subscription.subscription_term} ${subscription.payment_term} Subscription with ${subscription.payment_method}`)
//? 6b. Loop through the  subscriptions array of objects and the same information as in part 6a for each subscription in the array 

// let subscriptions = data.subscriptions
// for (let i = 0; i < subscriptions.length; i++){
//   console.log(`id:  ${subscriptions[i].id} 
//   ${subscriptions[i].subscription_term} ${subscriptions[i].payment_term} with ${subscriptions[i].payment_method}
//   `)
// }

//? 7a. Extract the following from the nation object 

//* nationality
//* language
//* capital
//* national_sport
//* flag

// format the information as follows: 
// nationality: ::nationality 
// language: ::language 
// capital: ::capital
// national sport: ::national_sport
// flag: ::flag

//* i.e. nationality: Sudanese 
//* language: Zulu 
//* capital: Bucharest
//* national sport: golf
//* flag: 🇲🇨

let nation = {
    id: 9510,
    uid: '5d3d544d-a815-4676-93a9-93199fefc04f',
    nationality: 'Sudanese',
    language: 'Zulu',
    capital: 'Bucharest',
    national_sport: 'golf',
    flag: '🇲🇨'
}
// console.log(`nationality: ${nation.nationality}
// language: ${nation.language} 
// capital: ${nation.capital} 
// national spport: ${nation.national_sport} 
// flag: ${nation.flag}`)
//? 7b. Loop through the  nations array of objects and the same information as in part 7a for each nation in the array 

let nations = data.nations;
// for ( let i = 0; i < nations.length; i++){
//   console.log(`
//   nationality: ${nations[i].nationality}
//   language: ${nations[i].language}
//   capital: ${nations[i].capital}
//   national spport: ${nations[i].national_sport}
//   flag: ${nations[i].flag}
//   `)
 
// }

//? 8a. Extract the following from the computer object

//* platform
//* type
//* os

// format the information as follows: 
// A ::platform ::type running ::os
//* i.e.  A Windows server running Windows 7

let computer = {
    id: 7380,
    uid: 'd6725475-1872-4d1e-a1da-8f64086fceb2',
    platform: 'Windows',
    type: 'server',
    os: 'Windows 7',
    stack: 'macOS, Mojave (10.14)'
}
// console.log(`A ${computer.platform} ${computer.type} running ${computer.os}`)

//? 8b. Loop through the  computers array of objects and the same information as in part 8a for each computer in the array 

let computers = data.computers;
// for (let i = 0; i < computers.length; i++){
//   console.log(`A ${computers[i].platform} ${computers[i].type} running ${computers[i].os}
//   `)
// }

//? 9a. Extract the following from the commerce object

//* department
//* material
//* color
//* product_name
//* price
//* promo_code

// format the information as follows: 
// Blowout sale in the ::department Department! Get ::material, ::color ::product_name for only $::price! Use promo code: ::promo_code (while supplies last)

//* Blowout sale in the Toys Department! Get Leather, amethyst Incredible Linen Shoes for only $33.32! Use promo code: PremiumDiscount379839 (while supplies last)

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
// console.log(`Blowout sale in the ${commerce.department} Department! Get ${commerce.material}, ${commerce.color} ${commerce.product_name} for only $ ${commerce.price}! User promo code: ${commerce.promo_code} (while supplies last).`)
//? 9b. Loop through the  commerceData array of objects and the same information as in part 9a for each commerce in the array 

let commerceData = data.commerce;
// for (let i = 0; i < commerceData.length; i++){
// console.log(`Blowout sale in the ${commerceData[i].department} Department! Get ${commerceData[i].material}, ${commerceData[i].color} ${commerceData[i].product_name} for only $${commerceData[i].price}! Use promo code: ${commerceData[i].promo_code} (while supplies last) 
// `)}



//? 10a. Extract the following from the company object

//* business_name
//* catch_phrase
//* full_address
//* phone_number

// format the information as follows: 
// ::business_name --- ::catch_phrase 
// ::full_address 
// ::phone_number

//* i.e.  Schneider, Ruecker and Lueilwitz, Inc --- Secured homogeneous moratorium 
//* 524 Sau Key, Port Bertram, WY 38185 
//* 597 376-192-9487

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
// console.log(`
// ${company.business_name} --- ${company.catch_phrase}
// ${company.full_address}
// ${company.phone_number}`)

//? 10b. Loop through the  companies array of objects and the same information as in part 10a for each comany in the array 

let companies = data.companies;
// for (let i = 0; i < companies.length; i++){
//   console.log(`
//   ${companies[i].business_name} --- ${companies[i].catch_phrase}
//   ${companies[i].full_address}
//   ${companies[i].phone_number}`)
// }

//? 11. Extract the following from the address object 

//* street_name 
//* city 
//* state_abbr
//* zip_code

// format the information as follows: 
// ::street_address
// ::city ::state_abbr, ::zip_code

//* i.e.  36661 Petra Falls
//* West Kareem FL, 84730

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
// console.log(`
// ${address.street_address}
// ${address.city} ${address.state_abbr}, ${address.zip_code}`)

//? 11b. Loop through the  addresses array of objects and the same information as in part 11a for each dessert in the array 

// let addresses = data.addresses;
// for (let i = 0; i < addresses.length; i++){
//   console.log(`
//   ${addresses[i].street_address}
//   ${addresses[i].city} ${addresses[i].state_abbr}, ${addresses[i].zip_code}`)
// }
//? 12a. Extract the following from the restaurant object 


// format the information as follows: 
// ::type
// ::name
// ::address
// ::phone_number
// 
// ::description 
// ::review 
//
// ::monday
// ::tuesday
// ::wednesday
// ::thursday
// ::friday
// ::saturday
// ::sunday

// i.e.
//* Mexican Restaurant
//* Smokestack Juice Bar
//* 196 Daren Keys, New Antoineton, MT 41318-1631
//* 678-444-2997 x39368
//* 
//*  ...description 
//*  ...review 
//*
//* monday: 9:28 AM - 12:52 PM
//* tuesday: 8:41 AM - 11:24 PM
//* wednesday: 11:11 AM - 2:47 PM
//* thursday: 8:30 AM - 5:38 PM
//* friday: 6:47 AM - 5:48 PM
//* saturday: 10:33 AM - 1:38 PM
//* sunday: 7:55 AM - 4:13 PM



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
// console.log(`
// ${restaurant.type}
// ${restaurant.name}
// ${restaurant.address}
// ${restaurant.phone_number}

// ${restaurant.description}

// ${restaurant.review}

// Monday: ${restaurant.hours.monday.opens_at} - ${restaurant.hours.monday.closes_at}
// Tuesday: ${restaurant.hours.tuesday.opens_at} - ${restaurant.hours.tuesday.closes_at}
// Wednesday: ${restaurant.hours.wednesday.opens_at} - ${restaurant.hours.wednesday.closes_at}
// Thursday: ${restaurant.hours.thursday.opens_at} - ${restaurant.hours.thursday.closes_at}
// Friday: ${restaurant.hours.friday.opens_at} - ${restaurant.hours.friday.closes_at}
// Saturday: ${restaurant.hours.saturday.opens_at} - ${restaurant.hours.saturday.closes_at}
// Sunday: ${restaurant.hours.sunday.opens_at} - ${restaurant.hours.sunday.closes_at}
// `)
//? 12b. Loop through the  restaurants array of objects and the same information as in part a for each restaurant in the array 

let restaurants = data.restaurants;
// for (let i = 0; i < restaurants.length; i++){
//   console.log(`
// ${restaurants[i].type}
// ${restaurants[i].name}
// ${restaurants[i].address}
// ${restaurants[i].phone_number}

// ${restaurants[i].description}

// ${restaurants[i].review}

// Monday: ${restaurants[i].hours.monday.opens_at} - ${restaurants[i].hours.monday.closes_at}
// Tuesday: ${restaurants[i].hours.tuesday.opens_at} - ${restaurants[i].hours.tuesday.closes_at}
// Wednesday: ${restaurants[i].hours.wednesday.opens_at} - ${restaurants[i].hours.wednesday.closes_at}
// Thursday: ${restaurants[i].hours.thursday.opens_at} - ${restaurants[i].hours.thursday.closes_at}
// Friday: ${restaurants[i].hours.friday.opens_at} - ${restaurants[i].hours.friday.closes_at}
// Saturday: ${restaurants[i].hours.saturday.opens_at} - ${restaurants[i].hours.saturday.closes_at}
// Sunday: ${restaurants[i].hours.sunday.opens_at} - ${restaurants[i].hours.sunday.closes_at}
// `)

// }

//todo extra: sort by restruant type i.e. Mexician

//? 13a. Extract the following from the vehicle object 

//* 
//* 
//* 
//* 
//* 

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

//? 13b. Loop through the dessertData array of objects and the same information as in part a for each dessert in the array 

let vehicleData = data.vehicles;


//? 14a. Extract the following from the loremIpsum object 


//* i.e.  
//* 'Omnis modi expedita. Ullam quam dolorem. Sint eos iste. Voluptatem ut est. Nisi impedit nostrum. Iusto similique facere. Possimus dolores quia. Sit quibusdam ducimus. Laudantium explicabo ex.'
//* 1. Dolorem libero nemo?,
//* 2. Unde quidem dicta?,
//* 3. Aut dicta ipsum?,
//* 4. Expedita voluptate aspernatur?,
//* 5. A praesentium accusantium?,
//* 6. Illum explicabo voluptatem?,
//* 7. Tempore commodi doloribus?,
//* 8. Ducimus rem cum?,
//* 9. Incidunt eum ad?,
//* 10. Velit sit dolores?


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
// console.log(`
// ${loremIpsum.paragraphs[0]} ${loremIpsum.paragraphs[1]} ${loremIpsum.paragraphs[2]}
// 1. ${loremIpsum.questions[0]},
// 2. ${loremIpsum.questions[1]},
// 3. ${loremIpsum.questions[2]},
// 4. ${loremIpsum.questions[3]},
// 5. ${loremIpsum.questions[4]},
// 6. ${loremIpsum.questions[5]},
// 7. ${loremIpsum.questions[6]},
// 8. ${loremIpsum.questions[7]},
// 9. ${loremIpsum.questions[8]},
// 10. ${loremIpsum.questions[9]}
// `)
//? 14b. Loop through the  dessertData array of objects and the same information as in part a for each dessert in the array 

let loremIpsumData = data.loremIpsum
// for (let i = 0; i < loremIpsumData.length; i++){
// console.log(`
// id: ${loremIpsumData[i].id}
// ${loremIpsumData[i].paragraphs[0]} ${loremIpsumData[i].paragraphs[1]} ${loremIpsumData[i].paragraphs[2]}
// 1. ${loremIpsumData[i].questions[0]},
// 2. ${loremIpsumData[i].questions[1]},
// 3. ${loremIpsumData[i].questions[2]},
// 4. ${loremIpsumData[i].questions[3]},
// 5. ${loremIpsumData[i].questions[4]},
// 6. ${loremIpsumData[i].questions[5]},
// 7. ${loremIpsumData[i].questions[6]},
// 8. ${loremIpsumData[i].questions[7]},
// 9. ${loremIpsumData[i].questions[8]},
// 10. ${loremIpsumData[i].questions[9]}
// `)
// }
//? 15a. Extract the following from the user object 

//* 

// format the information as follows: 
// flavor variety with topping
//* i.e.
//*  Human Administration Representative
//*  Emmanuel Zulauf 
//*  1492 Zboncak Circle
//*  New Denna, New York 16127
//*  +503 794.101.0079 x98
//*  email: emmanuel.zulauf@email.com
//*  username: emmanuel.zulauf
//*  password: CJ83jLRSlt
//*  subscription plan: 'Free Trial' 
//*  


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
// console.log(`
// ${user.employment.title}
// ${user.first_name} ${user.last_name}
// ${user.address.street_address}
// ${user.address.city} ${user.address.state} ${user.address.zip_code}
// ${user.phone_number}
// email: ${user.email}
// username: ${user.username}
// password: ${user.password}
// subscription plan: ${user.subscription.plan}
// `)
//? 15b. Loop through the  dessertData array of objects and the same information as in part a for each dessert in the array 

let userData = data.users;
// for(let i = 0; i < userData.length; i++){
//   console.log(`
// ${userData[i].employment.title}
// ${userData[i].first_name} ${user.last_name}
// ${userData[i].address.street_address}
// ${userData[i].address.city} ${userData[i].address.state} ${userData[i].address.zip_code}
// ${userData[i].phone_number}
// email: ${userData[i].email}
// username: ${userData[i].username}
// password: ${userData[i].password}
// subscription plan: ${userData[i].subscription.plan}`)
// }


//?  16a. Extract the following from the hipsterInfo object

//* 


// format the information as follows: 
// flavor variety with topping
//* i.e. 
//* goth 
//*
//* Church-key kinfolk slow-carb. Park freegan fixie lo-fi iphone offal. Next level whatever scenester +1. Helvetica 3 wolf moon pug ramps roof umami brunch. Keffiyeh photo booth meh offal bicycle rights. Wolf kinfolk skateboard helvetica carry gentrify photo booth. Vinyl green juice chartreuse schlitz aesthetic beard ugh lomo. Viral venmo five dollar toast. Kogi green juice church-key selfies five dollar toast. Kinfolk tattooed food truck lumbersexual farm-to-table sustainable pop-up hammock. Mixtape narwhal pinterest wolf loko viral shoreditch.
//* words:
//* 1. ethical
//* 2. cleanse
//* 3. leggings
//*
//* sentences
//* 1. Next level art party kogi shoreditch asymmetrical forage.
//* 2. Forage readymade goth before they sold out chartreuse phlogiston.
//* 3. Viral wayfarers fingerstache migas swag.

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
console.log(`
${hipsterInfo.paragraphs}
words:
1. ${hipsterInfo.words[0]}
2. ${hipsterInfo.words[1]}
3. ${hipsterInfo.words[2]}

sentences
1. ${hipsterInfo.sentences[0]}
2. ${hipsterInfo.sentences[1]}
3. ${hipsterInfo.sentences[2]}
`)
//? 16b. Loop through the  dessertData array of objects and the same information as in part a for each dessert in the array 

let hipsterData = data.hipsters;
for(let i = 0; i < hipsterData.length; i++)
console.log(`
${hipsterData[i].paragraphs}
words:
1. ${hipsterData[i].words[0]}
2. ${hipsterData[i].words[1]}
3. ${hipsterData[i].words[2]}

sentences
1. ${hipsterData[i].sentences[0]}
2. ${hipsterData[i].sentences[1]}
3. ${hipsterData[i].sentences[2]}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)

