// ─────────────────────────────────────────────────────────────
// ALL THE WORDS AND PHOTOS FOR THE SITE LIVE HERE.
// Change text between the quotes, swap photo imports, and the
// whole site updates. You should not need to touch any other
// file just to edit content.
// ─────────────────────────────────────────────────────────────

import m01 from "../assets/photos/memory-01.jpg";
import m02 from "../assets/photos/memory-02.jpg";
import m03 from "../assets/photos/memory-03.jpg";
import m04 from "../assets/photos/memory-04.jpg";
import m05 from "../assets/photos/memory-05.jpg";
import m06 from "../assets/photos/memory-06.jpg";
import m07 from "../assets/photos/memory-07.jpg";
import m08 from "../assets/photos/memory-08.jpg";
import m09 from "../assets/photos/memory-09.jpg";
import m10 from "../assets/photos/memory-10.jpg";
import m11 from "../assets/photos/memory-11.jpg"; // the illustrated one
import artTemple from "../assets/photos/ChatGPT Image Aug 24, 2026, 09_13_46 PM.png";
import artKite from "../assets/photos/ChatGPT Image Aug 24, 2026, 09_19_16 PM.png";
import artStation from "../assets/photos/ChatGPT Image Aug 24, 2026, 09_21_28 PM.png";
import artFood from "../assets/photos/ChatGPT Image Aug 24, 2026, 09_24_44 PM.png";
import artCamera from "../assets/photos/ChatGPT Image Aug 24, 2026, 09_27_05 PM.png";
import artBalcony from "../assets/photos/ChatGPT Image Aug 24, 2026, 11_41_29 PM.png";
import artCare from "../assets/photos/ChatGPT Image Aug 24, 2026, 11_43_41 PM.png";
import artPopcorn from "../assets/photos/ChatGPT Image Aug 24, 2026, 11_45_34 PM.png";
import artPlayful from "../assets/photos/ChatGPT Image Aug 24, 2026, 11_49_44 PM.png";
import artPark from "../assets/photos/Happy couple in a sunny park.png";
import artField from "../assets/photos/Playful moment in the field.png";

export const cover = {
  title: "Sherkhan nu Scrapbook",
  subtitle: "Rakhi card nathi. Aakhi vaat che.",
  hint: "open karje jyare ghar thodu miss thay",
  scrollCta: "thread kheench ↓",
};

export const chapters = [
  {
    id: "not-by-blood",
    tab: "01",
    tabLabel: "Blood Thi Nahi",
    title: "Saggi Ben Nathi",
    kicker: "pan aa vaat kyarey matter j nathi kari",
    body: [
      `Gujarati ma ek phrase che — saggi ben. Own sister. Same blood, same ghar, same badhu. Pan tu mari saggi ben nathi. Paper par toh bilkul nahi.`,
      `Pan honestly, aa difference kyare feel j nathi thayo. Tare mari ben banva mate koi rule, koi relation, koi explanation joiye j nahi. Tu bas hati. Every single time.`,
      `Etle rides, Rakhi ane badhi memories pehla aa clear kari dau: apdu relation blood thi nathi. Choice thi che. Mari pan, tari pan.`,
    ],
    photo: {
      src: m11,
      caption:
        "apdi ek photo je enough time sudhi still hati ke draw thai shake",
      rotate: -3,
    },
  },
  {
    id: "growing-up",
    tab: "02",
    tabLabel: "Tu Moti Thai",
    title: "Tane Moti Thai Jota",
    kicker: "aa vaat hu tane enough kehato j nathi",
    body: [
      `Big brother hovano ek alag j pride hoy che. Ek time tu evi nani hati ke tara par nazar rakhvi padti, ane have tu tari own opinions, tari own plans ane tari own life build kari rahi che. Hu aa badhu close-up joyu che.`,
      `Door thi nahi — ekdum front row ma. Kai stupid vaat par apdi argument, ena karta pan stupid vaat par apdu hasvu, ane vachche vachche tane aa person banta jovu.`,
      `Etle haan, hu tane enough kehato nathi: I am genuinely proud of you. Quietly, constantly. Hamesha.`,
    ],
    photo: {
      src: m02,
      caption: "apde apda j style ma, koi joi pan nathi rahyu",
      rotate: 2,
    },
  },
  {
    id: "the-distance",
    tab: "03",
    tabLabel: "Vachche Nu Distance",
    title: "Surat ↔ Ahmedabad",
    kicker: "map karta apde ghana closer chhiye",
    body: [
      `Paper par Surat thi Ahmedabad etlu door nathi. Bus, few hours, bas pachi mali gaya. Pan actual ma je gap che ne — "jaldi avish" ane kharekhar tya pahochva vachche na divaso — ema hu tane ghanu miss karu chu. Kahi pan nathi bolto, pan karu chu.`,
      `Ahmedabad pahochu tyare same feeling aave: jaane aakhi ride ma je weight lai ne avyo hato e finally muki didhu. Ane pachha avta? Same weight, reverse ma.`,
      `Aa page e badha vachche na divaso mate che. No visit, no photo, kai special pan nahi — bas distance, ane tu mind ma.`,
    ],
    photo: {
      src: m01,
      caption: "horizon alag, cities alag, pan apde same",
      rotate: -2,
    },
  },
  {
    id: "our-usual",
    tab: "04",
    tabLabel: "Apdu Usual",
    title: "Activa Rides & Endless Bakbak",
    kicker: "plan kyarey banavyo nahi, bas thai jaye che",
    body: [
      `Hu Ahmedabad ma hou etle script same: Activa bahar, koi specific destination nahi, je snack saras lage tya stop, ane joiye toh joiye — tran kalak gayab. Talking about everything, nothing, ane vachche random bakwas.`,
      `Mara life ni half best conversations e bike par thai che. Tari city ma circles ma farta, koi jagyae time par pahochvani tension vagar.`,
      `Bija loko hangout plan kare. Apde bas bike par besi jaiye. Bas aa j plan che. Ane sach kahu? Enough che.`,
    ],
    photo: { src: m07, caption: "vachche conversation, as always", rotate: 3 },
    photo2: {
      src: m04,
      caption: "nowhere ane everywhere ni vachche kyank",
      rotate: -4,
    },
  },
  {
    id: "that-day",
    tab: "05",
    tabLabel: "E Divas",
    title: "E Divas",
    kicker: "e divas aaje pan yaad aave che",
    body: [
      `Tane khabar che hu kaya divas ni vaat karu chu. Ride, accident, ane e das seconds — badhu ulatu thai gayu, samaj pade ena pehla j.`,
      `Pan pachhi je thayu e hu kyarey bhuli nahi shaku. Ghar par badha questions, koi ne blame karvani tayari, ane te sentence complete pan na thava didhu: "Moksh ni bhool nathi. Apde banne tya hata. Aa banne sathe thayu che."`,
      `Tare aa kehvu jaruri pan nathu. Pan te ek second pan vicharya vagar kahi didhu, because that's who you are with people you trust. Aa vaat hu kyarey nahi bhulu.`,
    ],
    photo: {
      src: m06,
      caption: "e divas pehla — ane pachhi pan, apde same",
      rotate: -1,
    },
  },
  {
    id: "the-threat",
    tab: "06",
    tabLabel: "Dhamki Vali Vaat",
    title: `"Have Pachhal Nahi Besu"`,
    kicker: "darek vaar kahe che. beshe pan darek vaar.",
    body: [
      `Darek ride pehla ek moment aave: tu pachhal besati hoy ane bolti hoy, "Bas aa last che. Have tari driving par trust nathi." Voice full serious. Pan banne ne khabar che ke drama che.`,
      `Aa warning nathi. Apdo running joke che. Ane joke etle chale che because andar thi trust kyarey gayu j nathi.`,
      `Tu pachhal bese che. Darek vaar. Vadhare answer joiye pan nahi.`,
    ],
    photo: {
      src: m03,
      caption: "boli ne pan pachhal besi jaye che",
      rotate: 2,
    },
  },
  {
    id: "big-brother",
    tab: "07",
    tabLabel: "Mota Bhai",
    title: "Tane Nahi JoiTu E Advice",
    kicker: "mota bhaage sambhalyu pan che",
    body: [
      `Thodu tu puchhe che. Baki nu toh hu j aapi dau chu — because ek divas me decide kari lidhu ke tu mari responsibility che. Koi e job assign kari nathi. Hu pote lai lidhi.`,
      `Next shu, shu worth che, shu nathi — aa badha topics par hu mara opinions ketli vaar aapi chukyo chu e apde count pan nahi kari shakiye. Hu better chu etle nahi. I just care enough to bolu.`,
      `Ane pachhi tu ema thi kai actually follow kare, grow kare — e joi ne je proud feel thay che ne, ena mate mara pase perfect word nathi.`,
    ],
    photo: {
      src: m10,
      caption: "jevi tu banvani hati, exactly evi",
      rotate: -3,
    },
  },
];

export const finale = {
  tab: "08",
  tabLabel: "Rakhi Vali Vaat",
  title: "To Aa Rakhi —",
  intro: [
    `Darek varse tu mara wrist par thread bandhe che, hu tane kai aapu chu, ane apde kahiye ke barabar thai gayu. Pan honestly? Kyarey barabar nathi thayu. Close pan nahi.`,
    `Etle aa varse thread pehla aa. Upar na badha pages, badhi vaat — aa actual gift che. Website toh bas e jagya che jya hu aakhir badhu lakhine kahi shakyo.`,
  ],
  letterTitle: "one more thing, Sherkhan —",
  letter: `Saggi ben nathi. E banvani jarur pan kyarey nathi padi. Tu mara mate tyarthi show up karti aavi che jyare apde banne pase aa relation mate words pan n hata — ane hu pan mari rite tari sathe ubho rehva try karto avyo chu. Rides, fights, e divas, badhu — apdu kai pan hu trade nahi karu.

Mane lage che aa j apda brother-sister relation ne real banave che. Apde badhi vaat ma agree kariye evu bilkul nathi. Actually, almost never. Pan argument kyarey story no end nathi banto. Tu mara thi irritate thai shake, mari driving ne worst kahi shake, promise kari shake ke have kyarey pachhal nahi bese — ane thodi vaar pachhi apde snacks leta ane badhi random vaat karta hoye.

Distance pan have apda relation no part bani gayu che. Surat ane Ahmedabad few hours j che, pan kai vaar e few hours ek alag life jeva lage. Pachhi hu tane mali jau, apde Activa par besi jaiye, ane normal feel thata ek minute pan nathi lagto. Jaane gap khali map par j hato.

E divas aaje pan mane yaad aave che. Accident na dar mate j nahi, pan ena pachhi te je karyu ena mate. Te koi ne blame karva nathi didhu. Koi ne aa mari mistake ke tari mistake banava nathi didhu. Te bas kahyu ke apde banne tya hata, apda banne sathe thayu, bas. E vaat hu tyarthi sathe lai ne faru chu. I hope tane khabar che ke e mara mate ketli important hati.

Etle hu tari permission vagar advice aapu, vadhare worry karu, athva looking out for you ne full-time job ni jem lau — toh aa reason che. Vachche kyank tu mari care karvani person bani gayi. Koi ceremony nahi, koi rule nahi, koi paper nahi joiye.

Happy Rakhi, Sherkhan. Haju ghani rides, ghana snacks, jaldi pati jata arguments, tari unwanted advice par mara comments, ane ghana varso sudhi apde exactly aava j rahiye — ena naam.

— your brother, always`,
  wishButtonIdle: "tie the rakhi",
  wishButtonDone: "tied. happy rakhi, Sherkhan 🧡",
  signOff: "— Moksh",
};

export const allPhotos = {
  m01,
  m02,
  m03,
  m04,
  m05,
  m06,
  m07,
  m08,
  m09,
  m10,
  m11,
};

export const illustratedMemories = {
  artTemple,
  artKite,
  artStation,
  artFood,
  artCamera,
  artBalcony,
  artCare,
  artPopcorn,
  artPlayful,
  artPark,
  artField,
};
