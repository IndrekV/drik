var heroes = [
  {
    name: "SUPERMAN",
    img: "https://static.comicvine.com/uploads/scale_small/8/80111/5766160-actioncomics976-gary-frank.jpg",
    text: "Sa oskad lennata, oled purustamatu ja saad silmadega tulistada",
    gender: "m"
  },
  {
    name: "BATMAN",
    img: "https://static.comicvine.com/uploads/scale_small/10/100647/6198653-batman+12.jpg",
    text: "Sa oled lahe, sul on äge auto ja sa oskad hästi võidelda",
    gender: "M"
  },
  {
    name: "ÄMBLIKMEES",
    img: "https://static.comicvine.com/uploads/scale_small/3/31666/4688877-asm2015002cov-288e0.jpg",
    text: "Sa suudad võrku lasta ja majade vahel liuelda",
    gender: "M"
  },
  {
    name: "THOR",
    img: "https://static.comicvine.com/uploads/scale_small/3/31666/5396930-thorunworth2016001-cov-38b58.jpg",
    text: "Sul on piksehaamer ja suudad juhtida välku",
    gender: "M"
  },
  {
    name: "IMENAINE",
    img: "https://static.comicvine.com/uploads/scale_small/11133/111334773/6111219-ahr0cdovl3d3dy5uzxdzyxjhbweuy29tl2ltywdlcy9plzawmc8xodqvmdc2l29yawdpbmfsl3d3mtj2yxiuanbn+%281%29.jpg",
    text: "Sa oled rahu saadik. Oskad hästi võidelda ja ei karda mitte midagi",
    gender: "N"
  },
  {
    name: "KAPTEN AMEERIKA",
    img: "https://static.comicvine.com/uploads/scale_small/3/31666/5052983-capasr2016001-eptingvar-18bdb.jpg",
    text: "Sa oled Ameerika lemmikkangelane, sul on purustamatu kilp ja lõputu julgus.",
    gender: "M"
  },
  {
    name: "VÄLK",
    img: "https://static.comicvine.com/uploads/scale_small/10/100647/5514053-cquihjqxyae4ohk.jpg",
    text: "Sa oled ülikiire ja suudad teha tuhat asja enne kui inimene jõuab silma pilgutada",
    gender: "M"
  },
  {
    name: "KIVIMEES",
    img: "https://static.comicvine.com/uploads/scale_small/14/149570/4171373-4171069-fanfour015_char_var.jpg",
    text: "Sa oled kivist, tugev ja hävitamatu. Teiste rünnakud on sulle kui kerge aevastus.",
    gender: "M"
  },
  {
    name: "HÄRRA FANTASTILINE",
    img: "https://static.comicvine.com/uploads/scale_small/10/100647/4240402-ff0643-samnee-var-2181a.jpg",
    text: "Sa venid väga palju. Võid vabalt külmkapist limonaadi võtta ilma, et diivanilt tõuseks",
    gender: "M"
  },
  {
    name: "NÄHTAMATU NAINE",
    img: "https://static.comicvine.com/uploads/scale_small/10/100647/4446651-4312381-4277754-57b%2Bff_644_variant.jpg",
    text: "Sa oled nähtamatu ja mitte keegi ei saa sind mitte kunagi kätte",
    gender: "N"
  },
  {
    name: "INIMTÕRVIK",
    img: "https://static.comicvine.com/uploads/scale_small/10/100647/4531254-1b0a9cbfa1742bdebed2449fc7a3d63e.jpg",
    text: "Sa oled tulikuum ja saad lennata. Saad igahetk enda peal vahukomme grillida",
    gender: "M"
  },
  {
    name: "RAUDMEES",
    img: "https://static.comicvine.com/uploads/scale_small/3/31666/4956367-invim2015001-maleevvar-d8a38.jpg",
    text: "Sul on väga võimas raudrüü, millega saad lennata kas või kosmosesse",
    gender: "M"
  },
  {
    name: "SUPERNAINE",
    img: "https://static.comicvine.com/uploads/scale_small/11127/111275907/6072145-5834742148-8rcec.jpg",
    text: "Oled tugev, väga tugev, sind ei peata ei kuulid ega nooled. Isegi SUPERMEES kardab sind vahest.",
    gender: "N"
  },
  {
    name: "HULK",
    img: "https://static.comicvine.com/uploads/scale_small/14/140903/4127149-11.jpg",
    text: "Oled suur, tugev ja roheline. Kui sa pahane oled siis parem, kui keegi sulle ette ei jää",
    gender: "M"
  },
  {
    name: "AQUAMEES",
    img: "https://static.comicvine.com/uploads/scale_small/10/100647/6198659-dprxkvjwaaa9eni.jpg",
    text: "Oled merede kuningas. Ujud kiiremini kui mootorpaat ja kalad on sinu sõbrad",
    gender: "M"
  },
  {
    name: "ZATANNA",
    img: "https://static.comicvine.com/uploads/scale_small/6/66303/3841872-justice-league-dark-18-a-580-580-537e9705814090-93603481-e908e.jpg",
    text: "Oled võimas võlur. Ükski võlutrikk pole sulle liiga raske",
    gender: "N"
  },
  {
    name: "Michelangelo",
    img: "https://static.comicvine.com/uploads/scale_small/6/67602/2986154-tmnt+mike+cover.jpg",
    text: "Sa ole kõige lahedam ninja kilpkonn, kes armastab maailmas kõige rohkem pitsat",
    gender: "M"
  },
  {
    name: "BATGIRL",
    img: "https://static.comicvine.com/uploads/scale_small/11121/111217258/4696624-batgirl_of_burnside_by_eloelo-d808qzr.jpg",
    text: "Sa oled sama osav kui BATMAN, aga sul on ka naiselikku kavalust.",
    gender: "N"
  },
  {
    name: "VAPSIK",
    img: "https://static.comicvine.com/uploads/scale_small/10/100647/6039335-wasp.jpg",
    text: "Sul on herilase võimed. Sa suudad oma keha suurust muuta ja lennata ülikiirelt",
    gender: "N"
  },
  {
    name: "KOTKATÜDRUK",
    img: "https://static.comicvine.com/uploads/scale_small/6/65423/2334403-hawkgirl.jpg",
    text: "Sul on võimsad kotkatiivad ja sa suudad lennata pilvede vahel",
    gender: "N"
  },
  {
    name: "TÄHETÜDRUK",
    img: "https://static.comicvine.com/uploads/scale_small/6/66303/3651801-jlu-cv1-col-solicits-rev-006a4.jpg",
    text: "Sa oled Kapten Ameerika kõige tähtsam abiline. Kui Kapten enam hakkama ei saa oled sina ainus, kes ülesande suudab lõpule viia",
    gender: "N"
  },



  
  

];


/*

{
    name: "",
    img: "",
    text: "",
    gender: ""
  },
  */
