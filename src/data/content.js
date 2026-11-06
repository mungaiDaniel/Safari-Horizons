import { media } from './media'

export const destinations = [
  { name: 'Maasai Mara', country: 'Kenya', group: 'Africa', img: media.mara, blurb: 'Big cats, the Mara River and endless golden plains.' },
  { name: 'Amboseli', country: 'Kenya', group: 'Africa', img: media.amboseli, blurb: 'Elephants beneath Mount Kilimanjaro.' },
  { name: 'Diani Beach', country: 'Kenya', group: 'Beach', img: media.diani, blurb: 'Powder sand and warm Indian Ocean water.' },
  { name: 'Lamu', country: 'Kenya', group: 'Beach', img: media.lamu, blurb: 'A car-free Swahili island out of time.' },
  { name: 'Serengeti', country: 'Tanzania', group: 'Africa', img: media.serengeti, blurb: 'Home of the Great Migration.' },
  { name: 'Ngorongoro Crater', country: 'Tanzania', group: 'Africa', img: media.ngorongoro, blurb: 'A natural wildlife amphitheatre.' },
  { name: 'Zanzibar', country: 'Tanzania', group: 'Beach', img: media.zanzibar, blurb: 'Spice, stone alleys and shimmering sea.' },
  { name: 'Volcanoes NP', country: 'Rwanda', group: 'Africa', img: media.gorilla, blurb: 'Face to face with mountain gorillas.' },
  { name: 'Cape Town', country: 'South Africa', group: 'City', img: media.capeTown, blurb: 'Table Mountain, vineyards and ocean drives.' },
  { name: 'Dubai', country: 'UAE', group: 'City', img: media.dubai, blurb: 'Skyline, souks and desert dunes.' },
  { name: 'Paris', country: 'France', group: 'City', img: media.paris, blurb: 'Cafés, art and the Seine at dusk.' },
  { name: 'Maldives', country: 'Maldives', group: 'Beach', img: media.maldives, blurb: 'Overwater villas and glassy lagoons.' },
]

export const beachDeals = [
  { name: 'Coral Sands Resort', place: 'Diani Beach', img: media.resort1, price: 'KES 23,000', board: 'All inclusive', nights: 'Min 3 nights', valid: '21 Dec – 4 Jan' },
  { name: 'Palm Bay Beach Hotel', place: 'Diani Beach', img: media.resort2, price: 'KES 27,000', board: 'Half board', nights: 'Min 5 nights', valid: '23 Dec – 3 Jan' },
  { name: 'Turtle Cove Lodge', place: 'Watamu', img: media.resort3, price: 'KES 31,000', board: 'Full board', nights: 'Min 5 nights', valid: '21 Dec – 5 Jan' },
  { name: 'Dhow House', place: 'Lamu', img: media.resort4, price: 'KES 18,000', board: 'Bed & breakfast', nights: 'Min 3 nights', valid: '19 Dec – 26 Jan' },
]

export const residentDeals = [
  { name: 'Mara Riverside Camp', place: 'Maasai Mara', img: media.lodge1, price: 'KES 34,900', board: 'Per person sharing', nights: '2 nights flying', valid: 'Festive season' },
  { name: 'Savanna Tented Camp', place: 'Samburu', img: media.lodge2, price: 'KES 22,900', board: 'Per person sharing', nights: '2 nights', valid: 'Festive season' },
  { name: 'Elephant Lodge', place: 'Amboseli', img: media.amboseli, price: 'KES 26,500', board: 'Per person sharing', nights: '2 nights', valid: 'Festive season' },
]

export const visitorDeals = [
  { name: 'Mara Riverside Camp', place: 'Maasai Mara', img: media.lodge1, price: 'USD 940', board: 'Per person sharing', nights: '2 nights flying', valid: 'Low season' },
  { name: 'Savanna Tented Camp', place: 'Samburu', img: media.lodge2, price: 'USD 890', board: 'Per person sharing', nights: '2 nights flying', valid: 'Low season' },
  { name: 'Elephant Lodge', place: 'Amboseli', img: media.amboseli, price: 'USD 780', board: 'Per person sharing', nights: '2 nights', valid: 'Low season' },
]

export const services = [
  { icon: 'Plane', title: 'Flight Booking', text: 'Competitive fares on every major airline, with flexible changes and a human on the line.' },
  { icon: 'Hotel', title: 'Hotels & Resorts', text: 'Hand-picked stays from beach resorts to bush camps, booked at negotiated rates.' },
  { icon: 'Compass', title: 'Safari Packages', text: 'Tailor-made itineraries built by guides who actually live here.' },
  { icon: 'Car', title: 'Airport Transfers', text: 'Meet-and-greet pickups in saloons, vans and executive vehicles.' },
  { icon: 'FileCheck', title: 'Visa Assistance', text: 'We prepare documents and guide you through e-visas and permits.' },
  { icon: 'Shield', title: 'Travel Insurance', text: 'Medical and trip cover so surprises stay small.' },
  { icon: 'Users', title: 'Groups & Corporate', text: 'Meetings, incentives and conferences managed end to end.' },
  { icon: 'Heart', title: 'Honeymoons', text: 'Romantic escapes with the little surprises done properly.' },
]

export const team = [
  { name: 'Lucy', role: 'Beach Holiday Specialist', img: media.team1 },
  { name: 'Stephen', role: 'Safari Specialist', img: media.team2 },
  { name: 'Cathy', role: 'Gorilla Trekking Specialist', img: media.team3 },
]

export const testimonials = [
  { name: 'Sarah J.', role: 'Honeymooner', text: 'Every detail was thought through. The balloon ride at sunrise is something we will never forget.' },
  { name: 'David W.', role: 'Safari enthusiast', text: 'Our guide spotted a leopard before anyone else. Brilliant planning from start to finish.' },
  { name: 'Amber B.', role: 'Family traveller', text: 'They dropped our fare when the price fell, after we had already paid. Honest people.' },
  { name: 'Michael B.', role: 'Business traveller', text: 'Fast replies, clear quotes and zero stress booking a family holiday.' },
]

export const fleet = [
  { name: 'Executive Saloon', seats: '1–3 guests', text: 'Comfortable, discreet airport and city transfers.', img: '/media/photos/fleet-1.jpg' },
  { name: 'Safari Vehicle', seats: '4–7 guests', text: 'Open-sided 4x4 with plenty of room for game viewing.', img: '/media/photos/fleet-3.jpg' },
  { name: 'Meet & Greet', seats: 'Any group size', text: 'A named greeter at arrivals and help with luggage.', img: media.airport },
]

export const posts = [
  {
    slug: 'safari-packing-list',
    title: 'The Ultimate Safari Packing List',
    cat: 'Tips', date: 'March 3, 2026', read: '6 min', author: 'Travel Team', img: media.blog1,
    excerpt: 'What to bring, what to leave behind, and why neutral colours really matter.',
    body: [
      'Packing for safari is simpler than it looks. Think light layers, neutral colours and a good hat.',
      'Mornings are cold on the open vehicle, afternoons are hot. A fleece you can strip off is your best friend.',
      'Bring binoculars, a power bank and a soft duffel bag: many bush flights restrict hard suitcases.',
      'Skip bright white and dark blue; tsetse flies love dark blue. Khaki, olive and sand are safe.',
    ],
  },
  {
    slug: 'nairobi-in-a-day',
    title: 'Nairobi in a Day: Safari to Sunset',
    cat: 'Destinations', date: 'March 6, 2026', read: '8 min', author: 'Travel Team', img: media.blog2,
    excerpt: 'Wildlife at breakfast, giraffes by lunch and Karen coffee before dusk.',
    body: [
      'Nairobi is the only capital where lions roam within sight of the skyline.',
      'Start early at the national park, then visit the giraffe centre and an elephant orphanage.',
      'Finish with a slow lunch in Karen and sundowners with a view across the city.',
    ],
  },
  {
    slug: 'great-migration-guide',
    title: 'When to See the Great Migration',
    cat: 'Safari', date: 'February 21, 2026', read: '7 min', author: 'Travel Team', img: media.blog3,
    excerpt: 'Month-by-month guide to where the herds are and when to book.',
    body: [
      'The herds move in a rough circle between the Serengeti and the Mara all year.',
      'River crossings peak July to September in the Mara. Calving season in the southern Serengeti peaks in February.',
      'Book camps six to nine months ahead for peak months.',
    ],
  },
  {
    slug: 'diani-vs-zanzibar',
    title: 'Diani or Zanzibar? Choosing Your Beach',
    cat: 'Beach', date: 'February 10, 2026', read: '5 min', author: 'Travel Team', img: media.diani,
    excerpt: 'Two Indian Ocean favourites compared on price, culture and activities.',
    body: [
      'Diani offers a quick flight, great value and excellent kitesurfing.',
      'Zanzibar adds Stone Town heritage and a spice-island character.',
      'Combine them with a safari for the best of both worlds.',
    ],
  },
]
