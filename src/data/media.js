// Central media manifest. Files live in /public/media/photos and /public/media/videos.
// Until real stock photos are downloaded, <Img> shows a tinted gradient fallback.
// Each entry: [file name, fallback gradient seed]
const photo = (name) => `/media/photos/${name}.jpg`
const video = (name) => `/media/videos/${name}.mp4`

export const media = {
  heroSafari: photo('hero-safari'),
  heroBeach: photo('hero-beach'),
  heroWildlife: photo('hero-wildlife'),
  heroFlights: photo('hero-flights'),
  mara: photo('maasai-mara'),
  amboseli: photo('amboseli'),
  serengeti: photo('serengeti'),
  ngorongoro: photo('ngorongoro'),
  gorilla: photo('gorilla'),
  zanzibar: photo('zanzibar'),
  diani: photo('diani'),
  lamu: photo('lamu'),
  capeTown: photo('cape-town'),
  dubai: photo('dubai'),
  paris: photo('paris'),
  maldives: photo('maldives'),
  seychelles: photo('seychelles'),
  honeymoon: photo('honeymoon'),
  balloon: photo('balloon'),
  lion: photo('lion'),
  elephant: photo('elephant'),
  giraffe: photo('giraffe'),
  resort1: photo('resort-1'),
  resort2: photo('resort-2'),
  resort3: photo('resort-3'),
  resort4: photo('resort-4'),
  lodge1: photo('lodge-1'),
  lodge2: photo('lodge-2'),
  van: photo('safari-van'),
  airport: photo('airport'),
  team1: photo('team-1'),
  team2: photo('team-2'),
  team3: photo('team-3'),
  blog1: photo('blog-1'),
  blog2: photo('blog-2'),
  blog3: photo('blog-3'),
  about: photo('about'),
  cta: photo('cta'),
}

export const videos = {
  hero: video('hero'),
  beach: video('beach'),
  wildlife: video('wildlife'),
}
