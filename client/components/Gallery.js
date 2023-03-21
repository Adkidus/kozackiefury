"use client"

import { Grid, GridItem, Box } from "@chakra-ui/react"
import Image from "next/image"
import Slider from "react-slick";
import CarCard from "./Car/CarCard";

const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
  };

  const cars = [
    {
        "_id": "640511d75f4ee43d5e4553d5",
        "pathName": "maserati-gran-turismo-sport-ftwv",
        "brand": "MASERATI",
        "model": "GRAN TURISMO SPORT",
        "horse_power": "460",
        "engine": "4.7L V8",
        "to_100": "4,5",
        "description": "Złote Maserati GTS to niezwykła fura, która zachwyci każdego miłośnika luksusowych samochodów. Z pewnością rozbudzi wyobraźnię i zapewni niezapomniane wrażenia, zarówno kierowcy, jak i pasażerom.\nJego 460-konny silnik V8 brzmi niesamowicie i z pewnością przyciągnie uwagę niejednej osoby. Dodatkowo, przyspieszenie od 0 do 100 km/h w zaledwie 4,7 sekundy sprawia, że poczujesz adrenalinę w żyłach, kierując tym wyjątkowym samochodem.\nJako, że jest to jedyne złote Maserati GTS w Polsce z pewnością pozwoli wyróżnić się z tłumu. Jest bardzo szybki i zwrotny, co pozwala na dynamiczną jazdę i poczucie pełnej kontroli nad pojazdem.\nTen czteroosobowy samochód jest idealny na wyjątkowe okazje.\n\nDlaczego akurat powinieneś wybrać złote Maserati GTS? To proste - ten samochód to kwintesencja luksusu i prestiżu, który na pewno zrobi wrażenie na Twoich gościach i pozwoli Ci poczuć się wyjątkowo. Złote Maserati GTS to nie tylko samochód, to prawdziwe dzieło sztuki na kołach, które zapewni Ci niezapomniane wrażenia i uczucie wyjątkowości.",
        "category": "Fast&Furious",
        "services": [
            {
                "time": "4-6H",
                "price": "",
                "title": "WYNAJEM NA ŚLUBY",
                "description": "",
                "_id": "640511d75f4ee43d5e4553d6"
            }
        ],
        "active": false,
        "canceled": false,
        "userId": "640511d55f4ee43d5e45539d",
        "photos": [
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/83729038-AE2C-453B-8A21-39317C884928-1678053865972.webp",
                "_id": "640511eb5f4ee43d5e4553d8"
            }
        ],
        "createdAt": "2023-03-05T22:04:07.723Z",
        "updatedAt": "2023-03-05T22:04:27.859Z",
        "__v": 0,
        "main_photo": "https://api.kozackiefury.pl/./public/uploads/cars/83729038-AE2C-453B-8A21-39317C884928-1678053865972.webp"
    },
    {
        "_id": "6405d2905f4ee43d5e45596a",
        "pathName": "mercedes-benz-a45-amg-petronas-awjf",
        "brand": "MERCEDES-BENZ",
        "model": "A45 AMG PETRONAS",
        "horse_power": "405",
        "engine": "2.0 R4 Turbo",
        "to_100": "4",
        "description": "Mercedes A45 AMG Petronas World Champion Edition - wersja specjalna z okazji drugiego zwycięstwa z rzędu mistrzostwa Formuły 1 konstruktorów. To wyjątkowy i nietuzinkowy samochód, który na całym świecie jest dostępny tylko w 250 egzemplarzach. \nSpecjalna wersja Mercedesa AMG A 45 została pokryta dodatkowym malowaniem w kolorach czarnym i Petrol Green, by przypominać barwami zwycięskie bolidy. Auto dostało także agresywny pakiet aerodynamiczny z dużym spojlerem i wyróżniającym się spliterem. Wewnątrz Mercedesa-AMG A45 Petronas World Champion Edition znajdziemy sportowe, czarne regulowane fotele AMG z zielonymi stylizowanymi przeszyciami Petronas, pokryte skórą Dinamica, które dodają mu stylu i elegancji. Ten sam materiał znajduje się na wieńcu koła kierowniczego. Czarne wnętrze samochodu przeszyto nicią w kolorze petrol green, co idealnie komponuje się z jego unikatowym zewnętrznym malowaniem Petronas. Bez wątpienia dodaje mu to rasowego charakteru i sprawia, że wyróżnia się na drodze. \nZ imponującą maksymalną prędkością 295km/h oraz przyspieszeniem do 100km/h w zaledwie 4 sekundy, ten mały samochód z 405 konnym silnikiem pod maską jest prawdziwym pogromcą szos.\nJednym z wyróżniających cech Mercedes A45 AMG Petronas jest jego błyskawiczna reakcja po wciśnięciu pedału gazu, co natychmiast wciska kierowcę w fotel. Napęd 4Matic w pełni dopełnia całość.\nMercedes A45 AMG Petronas może pomieścić do pięciu osób, co czyni go doskonałym wyborem na różnego rodzaju uroczystości. Jeśli ktoś ceni sobie oryginalność i chce wyróżnić się na drodze, to Mercedes A45 AMG Petronas z pewnością mu to umożliwi.",
        "category": "Fast&Furious",
        "services": [],
        "active": false,
        "canceled": false,
        "userId": "6405d2905f4ee43d5e455968",
        "photos": [
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/4ECC06A5-C787-4CF5-BBB3-5017A0847F5E-1678103185304.webp",
                "_id": "6405d2915f4ee43d5e45596c"
            }
        ],
        "createdAt": "2023-03-06T11:46:24.749Z",
        "updatedAt": "2023-03-06T11:46:42.390Z",
        "__v": 0,
        "main_photo": "https://api.kozackiefury.pl/./public/uploads/cars/4ECC06A5-C787-4CF5-BBB3-5017A0847F5E-1678103185304.webp"
    },
    {
        "_id": "6405e75a5f4ee43d5e45597d",
        "pathName": "porsche-panamera-turbo-8mjs",
        "brand": "Porsche",
        "model": "Panamera Turbo",
        "horse_power": "730",
        "engine": "4.0 V8 Turbo",
        "to_100": "2,9",
        "description": "Bandyta w przebraniu, \nczyli Porsche Panamera Turbo, doładowana aż 730 KM to nie tylko sportowy, ale także niezwykle piękny samochód, który przyciąga uwagę swoim agresywnym i stylowym wyglądem. Groźny mimo eleganckiego opakowania. Trudno, żeby go za takiego nie uważać. W końcu to najmocniejsza spalinowa wersja w gamie. \nTo prawdziwa Fura na drodze, która zapewnia dużą dawkę adrenaliny oraz nieprawdopodobną dynamikę podczas jazdy. Rozpędza się do 100 km/h w zaledwie 2.9 sekundy i osiąga prędkość maksymalną 350 km/h, co czyni go jednym z najbardziej imponujących i szybkich samochodów na rynku tego segmentu. Serce auta stanowi potężny 4.0 V8 TURBO, który zapewnia fenomenalną moc, generując przy tym symfonię melodii dla uszu podczas każdej z chwil za jego kółkiem. \nKolor karoserii idealnie oddaje charakter samochodu, który emanuje klasą. Wnętrze auta to prawdziwy rarytas, przedstawia, jak powinna wyglądać sportowa elegancja, wspaniale wykończone detale, gdzie w komfortowych skórzanych fotelach można cieszyć się niezapomnianymi wrażeniami z jazdy. Fotele nie mają miliona przeszyć i zdobień, nie wyglądają jak ze statku kosmicznego, a są jednocześnie i wygodne i sportowe. \n\nPorsche Panamera Turbo to połączenie doskonałego wykonania, niesamowitej frajdy z jazdy  i pięknego designu, co czyni go jednym z najbardziej pożądanych samochodów na rynku.\n\nJeśli szukasz Samochodu klasy premium i chcesz przeżyć niezapomniane wrażenia z jazdy, to Porsche Panamera Turbo jest idealnym wyborem dla Ciebie.",
        "category": "Fast&Furious",
        "services": [],
        "active": false,
        "canceled": false,
        "userId": "6405e7595f4ee43d5e45597b",
        "photos": [
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/614AB4AE-DF80-4249-8810-2CF0ABCB4215-1678108514282.webp",
                "_id": "6405e7655f4ee43d5e455980"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/6C51C6CD-DD83-49CB-85E4-F629B2B792FE-1678108514305.webp",
                "_id": "6405e7655f4ee43d5e455981"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/B44066B8-1754-4DA7-AAE2-0DD0988E96BE-1678108514311.webp",
                "_id": "6405e7655f4ee43d5e455982"
            }
        ],
        "createdAt": "2023-03-06T13:15:06.263Z",
        "updatedAt": "2023-03-06T13:15:17.790Z",
        "__v": 0,
        "main_photo": "https://api.kozackiefury.pl/./public/uploads/cars/614AB4AE-DF80-4249-8810-2CF0ABCB4215-1678108514282.webp"
    },
    {
        "_id": "640602965f4ee43d5e45598f",
        "pathName": "audi--s3-sportback-yote",
        "brand": "Audi ",
        "model": "S3 Sportback",
        "horse_power": "310",
        "engine": "2.0 R4 TFSI quattro",
        "to_100": "4,6",
        "description": "Audi S3 Sportback to prawdziwy król dróg, który zapewnia niezapomniane doznania z jazdy. Samochód jest zwinny i zgrabny, co przy jego niewielkiej masie przekłada się na wyjątkowo szybką jazdę. Silnik o mocy 310 KM pozwala na rozpędzenie auta do 100 km/h w niespełna 4,6 sekundy, a licznik zatrzymuje się dopiero przy 250 km/h. Jednak, to nie tylko moc silnika, ale również napęd quattro, który pomaga kierowcy i pasażerom czuć się bezpiecznie, nawet na krętych drogach.\n\nWykończenie w kolorze czerni idealnie kontrastuje ze śnieżną bielą na karoserii, wraz z połączeniem nowoczesnych rozwiązań technologicznych dodaje autu elegancji i stylu. Jednak to wrażenia z jazdy stanowią największy atut S3. Układ kierowniczy działa precyzyjnie i pozwala intuicyjnie operować kierownicą. Elektronika stoi za samochodem, ale jazda wydaje się naturalna, niezależnie od prędkości. S3 zachowuje się nienagannie na drodze, co sprawia, że kierowca może poczuć się pewnie i bezpiecznie.\n\nAudi S3 Sportback to samochód dla osób ceniących sobie sportowe osiągi, dynamiczną jazdę oraz elegancki styl. To idealne auto dla TYCH, którzy szukają czegoś więcej niż tylko przemieszczenia się z punktu A do B.",
        "category": "Fast&Furious",
        "services": [],
        "active": false,
        "canceled": false,
        "userId": "640602965f4ee43d5e45598d",
        "photos": [
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/745B7AF2-E31B-418F-A0AD-5C5A11852F45-1678115479036.webp",
                "_id": "640602975f4ee43d5e455991"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/4196F85C-394D-41DC-82F4-90EB18704D83-1678115479037.webp",
                "_id": "640602975f4ee43d5e455992"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/2701406E-3621-4006-921D-D23945B87559-1678115479039.webp",
                "_id": "640602975f4ee43d5e455993"
            }
        ],
        "createdAt": "2023-03-06T15:11:18.503Z",
        "updatedAt": "2023-03-06T15:11:19.246Z",
        "__v": 0,
        "main_photo": "https://api.kozackiefury.pl/./public/uploads/cars/745B7AF2-E31B-418F-A0AD-5C5A11852F45-1678115479036.webp"
    },
    {
        "_id": "640627985f4ee43d5e4559a2",
        "pathName": "ferrari-f430-x6pd",
        "brand": "FERRARI",
        "model": "F430",
        "horse_power": "495",
        "engine": "4.3 V8",
        "to_100": "3,6",
        "description": "Ferrari F430 to prawdziwy klejnot w koronie włoskiej motoryzacji - Przeszywająco czarny, zwinny a w dodatku wyjątkowo szyyyybki.\n\nJeśli szukasz samochodu, który zapewni Ci niesamowite doznania z jazdy, to Ferrari F430 jest właśnie dla Ciebie. To jedno z najlepszych Ferrari w historii, charakteryzujące się niebywałą czystością i szybkością reakcji na komendy kierowcy. Układ kierowniczy F430 działa jak zegarek, umożliwiając delikatne i precyzyjne sterowanie autem. Wolnossący silnik V8 zapewnia niezwykle szybką reakcję na gaz, a jego donośne brzmienie dostarcza niezapomnianych dla zmysłów wrażeń, dokładnie tak jak można byłoby sobie to wymarzyć. \n\nW lusterku wstecznym widok jest zachwycający. Powód jest banalnie prosty.\nFurę napędza 4,3 litrowy silnik V8, który generuje 495 KM przy 8300 obr./min i 465 Nm momentu obrotowego a sportowe nadwozie waży nieco ponad 1500 kg. To wystarczy, by F430 osiągnęło pierwszą „setkę” w zaledwie 3,6 sekundy i rozpędziło się do prędkości nawet 319 km/h. To naprawdę imponujące!\n\nLiniowe, przewidywalne reakcje F430 to cechy, którym nie dorówna żaden samochód z silnikiem turbo.\n\nPonadto, wnętrze samochodu wykonane jest z najlepszych materiałów, a prosty, ponadczasowy design z czarną skórą wprowadza elegancką atmosferę. Nie ma wątpliwości, że posiadanie F430 może dać entuzjaście sportowej jazdy sporo zadowolenia. W końcu to nie tylko samochód, ale również legenda.\n\nCzy maksymalna prędkość 319 km/h jest dla Ciebie wystarczająca by dotrzeć z przytupem na każde wydarzenie ? Czego chcieć więcej ? Idealny by towarzyszyć Ci wiernie w najbardziej wymagających wydarzeniach. ",
        "category": "Fast&Furious",
        "services": [],
        "active": false,
        "canceled": false,
        "userId": "640627975f4ee43d5e4559a0",
        "photos": [
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/5BCBBD86-F304-4136-83D2-0FB23CA327AE-1678124953093.webp",
                "_id": "640627995f4ee43d5e4559a4"
            }
        ],
        "createdAt": "2023-03-06T17:49:12.208Z",
        "updatedAt": "2023-03-06T17:49:13.897Z",
        "__v": 0,
        "main_photo": "https://api.kozackiefury.pl/./public/uploads/cars/5BCBBD86-F304-4136-83D2-0FB23CA327AE-1678124953093.webp"
    },
    {
        "_id": "6407a5475f4ee43d5e4559b7",
        "pathName": "mercedes-benz-c63-amg-z3m1",
        "brand": "Mercedes-Benz",
        "model": "C63 AMG",
        "horse_power": "487",
        "engine": "V8 6.2 L",
        "to_100": "4.4",
        "description": "6. MERCEDES C63 AMG - ostatni z silnikiem wolnossącym\n\nSą tylko trzy takie litery w alfabecie, które stojąc obok siebie wzniecają ogień. A mowa oczywiście o AMG. Właśnie tym skrótem naznaczane są modele marki Mercedes-Benz, które cechuje diabelska moc, wybitne osiągi i zdecydowany brak pokory. To, o czym warto wspomnieć, to fakt, że każdy silnik AMG był, i nadal jest składany ręcznie. Na dowód tego na silniku zawsze znajduje się metalowa tabliczka z imieniem i nazwiskiem oraz podpisem mechanika, który był odpowiedzialny za jego złożenie.\n\nMercedes C63 AMG z pakietem Performance Package Plus, został wyposażony m.im. w kompozytowe tarcze hamulcowe, czerwone zaciski, małą karbonową listwę na tylnej klapie czy sportową kierownicę serii AMG Performance wykonaną ze skóry nappa oraz alcantary. Jego czarne wnętrze pięknie dopełnia śnieżnobiała karoseria. Napędza go wolnossąca V8 o pojemności 6,2 l i mocy 487KM. Za sprawą osiągów Mercedes C63 AMG W204 okrył się chwałą na wieki, a konkurencję skutecznie zapędził w kąt. Niemiecki brutal przyspiesza do pierwszej setki w 4,4 sekundy mimo, że jego masa jest spora, wynosi bowiem ponad 1700 kg. Uruchamiając silnik można zaobserwować, jak roślinność wokół nas drży. Z poczwórnej końcówki układu wydechowego wydobywa się prawdziwa symfonia, której na próżno dziś szukać w sportowych samochodach. \n\nPowiedzieć o nim, że się rozpędza, jest sporym nietaktem. Bo ten samochód po prostu wgryza się w otaczającą go rzeczywistość. Każdorazowe, mocniejsze naciśnięcie gazu sprawia, że tylna oś zaczyna tętnić swoim własnym życiem.\n\nMercedes C63 AMG - ostatni z silnikiem wolnossącym.\n\nTa Fura to idealna propozycja dla miłośników sportowych aut, ceniących sobie ducha prawdziwej motoryzacji, która przemija…niestety. Idealny by towarzyszyć Ci w specjalnych, niepowtarzalnych okazjach. ",
        "category": "Fast&Furious",
        "services": [],
        "active": false,
        "canceled": false,
        "userId": "640627975f4ee43d5e4559a0",
        "photos": [
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/671D3888-49A7-4803-89D8-0529BF013F9B-1678222663967.webp",
                "_id": "6407a5485f4ee43d5e4559b9"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/11402F58-97DC-4E1D-AF0D-7200FF53CD85-1678222663967.webp",
                "_id": "6407a5485f4ee43d5e4559ba"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/E1E67178-5117-4D86-96A3-5B40BFF770BC-1678222663968.webp",
                "_id": "6407a5485f4ee43d5e4559bb"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/EAB18210-32BA-445B-BE4D-DD8664E6C579-1678222663969.webp",
                "_id": "6407a5485f4ee43d5e4559bc"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/4F832A9D-EB84-4040-9373-69731E958B39-1678222663970.webp",
                "_id": "6407a5485f4ee43d5e4559bd"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/ED599E5C-50A0-4449-B34B-9C96891AA1D1-1678222663971.webp",
                "_id": "6407a5485f4ee43d5e4559be"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/FE90B7F5-3109-42B8-B9EA-2A6D4E181FC5-1678222663972.webp",
                "_id": "6407a5485f4ee43d5e4559bf"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/0A4830C0-0988-4779-A8D2-8B6454B41FAE-1678222663972.webp",
                "_id": "6407a5485f4ee43d5e4559c0"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/B4F343F5-CA97-441A-8FCA-06090DF9C681-1678222663973.webp",
                "_id": "6407a5485f4ee43d5e4559c1"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/96917E6C-6831-4793-8B41-E204AE563303-1678222663974.webp",
                "_id": "6407a5485f4ee43d5e4559c2"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/25B049B8-927F-420E-9FA5-258135741A24-1678222663975.webp",
                "_id": "6407a5485f4ee43d5e4559c3"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/86A087C3-9692-40BB-9BB5-30E400502681-1678222663976.webp",
                "_id": "6407a5485f4ee43d5e4559c4"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/EAD4FAB1-CE3B-47E1-BEB9-072F2E035645-1678222663977.webp",
                "_id": "6407a5485f4ee43d5e4559c5"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/C19C8648-69BE-40E5-9731-35B8688943A9-1678222663978.webp",
                "_id": "6407a5485f4ee43d5e4559c6"
            }
        ],
        "createdAt": "2023-03-07T20:57:43.173Z",
        "updatedAt": "2023-03-07T20:57:44.440Z",
        "__v": 0,
        "main_photo": "https://api.kozackiefury.pl/./public/uploads/cars/671D3888-49A7-4803-89D8-0529BF013F9B-1678222663967.webp"
    },
    {
        "_id": "6416cc295fb768052509fe58",
        "pathName": "mercedes-benz-cla-35-amg-rnv9",
        "brand": "MERCEDES-BENZ",
        "model": "CLA 35 AMG",
        "horse_power": "306",
        "engine": "2.0 L Turbo R4",
        "to_100": "4.9",
        "description": "Mercedes-Benz CLA35 AMG 4Matic to najmocniejsze wydanie kompaktowego modelu ze Stuttgartu. Fura ta sprawia frajdę zarówno za sprawą świetnych osiągów i perfekcyjnego prowadzenia, jak i dzięki efektownej stylistyce. Jego sercem jest turbodoładowany, czterocylindrowy silnik o pojemności dwóch litrów. Maszyneria ta oferuje maksymalną moc 306 koni mechanicznych i pokaźny moment obrotowy, sięgający maksymalnie 400 niutonometrów.\n\nNapęd przekazywany jest tu na wszystkie cztery koła, za pośrednictwem siedmiostopniowej, dwusprzęgłowej przekładni automatycznej. O jak najlepszą trakcję dba układ AMG Performance 4MATIC, który w ułamku sekundy ocenia przyczepność i przenosi odpowiednio więcej momentu obrotowego na koła o lepszej przyczepności.\n\nW idealnych warunkach ten stylowy sedan, czy raczej czterodrzwiowe coupe, rozpędza się od 0 do 100 km/h w czasie 4,9 sekundy. Maksymalna prędkość sięga 250 km/h.\n\nW odmianie sygnowanej logo AMG uwagę zwraca przedni pas w stylu AMG, tylny dyfuzor, subtelny spoiler na klapie bagażnika czy dwie duże końcówki sportowego wydechu, rozstawione szeroko pod zderzakiem.\n\nOpcjonalne zawieszenie AMG RIDE CONTROL z systemem adaptacyjnego tłumienia pozwala kierowcy na wybór spośród trzech różnych trybów pracy zawieszenia. Ich zakres sięga od konfiguracji zorientowanej na komfort aż do sportowej.\nSystem działa w pełni automatycznie, dostosowując siłę tłumienia każdego z kół do sytuacji na drodze oraz warunków jazdy. Zasiądź wygodnie w sportowych siedzeniach, szczelnie do Ciebie przylegających, zapewniających Ci idealne boczne podparcie. Absolutnie rewelacyjne wnętrze niech przeniesie Cię myślami na każdą jedyną w swoim rodzaju Kozacką trasę. \n\nElegancki i agresywny wygląd auta na pewno przyciągnie za sobą tylko najlepsze powody do niepowtarzalnych wspólnych przeżyć z jego towarzystwem.",
        "category": "Fast&Furious",
        "services": [],
        "active": false,
        "canceled": false,
        "userId": "62874901a3b91396c1447d3c",
        "photos": [
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/284BD112-7F39-40F6-AB25-F1501A11345C-1679215657489.webp",
                "_id": "6416cc295fb768052509fe5a"
            }
        ],
        "createdAt": "2023-03-19T08:47:37.163Z",
        "updatedAt": "2023-03-19T08:47:37.710Z",
        "__v": 0,
        "main_photo": "https://api.kozackiefury.pl/./public/uploads/cars/284BD112-7F39-40F6-AB25-F1501A11345C-1679215657489.webp"
    },
    {
        "_id": "6416cf345fb768052509fe92",
        "pathName": "lamborghini-urus-375h",
        "brand": "Lamborghini",
        "model": "Urus",
        "horse_power": "650",
        "engine": "4.0 L V8",
        "to_100": "3.6",
        "description": "Urus jest „mocny jak byk, szybki jak matador i lekki jak muleta”.\n\nTen Lamborghini Urus to prawdziwy klejnot wśród samochodów - z wyjątkowym czerwonym lakierem, który swym blaskiem rozjaśnia przed nami ulice i aerodynamicznymi kształtami nadwozia zdecydowanie przyciągają uwagę KAŻDEGO - bez wyjątku. \nWewnątrz znajdziesz przestronne wnętrze, zaprojektowane z myślą o wygodzie, stylu i komforcie podróży. Kozacko wygodne fotele, kokpit nie do podrobienia, panoramiczny dach i wiele innych dodatków sprawiają, że jazda tą Bestią jest prawdziwą przyjemnością.\n\nAle to nie wszystko - pod maską drzemie 4-litrowe V8 z podwójnym turbodoładowaniem, osiągające 650 KM mocy przy 6000 obr./min. i 850 Nm momentu obrotowego, który przyspiesza z 0 do 100 km/h w zaledwie 3,6 sekundy a do 200km/h w jakże krótkie 12,8 sekundy! Budzik zatrzyma się nam dopiero przy 305 km/h. \nJuż odpalanie jest wydarzeniem. Kozacką Furę budzimy przyciskiem startera, ukrytego pod kojarzącą się z samolotami czerwoną klapką a do wyboru mamy aż 6 trybów jazdy.\n\nTa Fura nieprzerwanie wzbudza wiele emocji, a osiągi pobudzają wyobraźnię. \nZ pewnością sprawi Ci wiele radości prowadzenie go po drodze, a dźwięk silnika będzie muzycznym akompaniamentem Twojej jazdy. \nSwym niebanalnym wyglądem skupia na sobie całą uwagę. \nTen elegancki SUV pozwoli Ci poczuć się wyjątkowo i stworzyć niezapomniane wspomnienia…tylko te na zawsze.\nJeśli jesteś gotów na niezapomnianą przygodę, to właśnie z nim.\n",
        "category": "Fast&Furious",
        "services": [],
        "active": false,
        "canceled": false,
        "userId": "62874901a3b91396c1447d3c",
        "photos": [
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/3960F32E-A498-4DC1-AE78-9FFEB28EBC5A-1679216437108.webp",
                "_id": "6416cf355fb768052509fe94"
            }
        ],
        "createdAt": "2023-03-19T09:00:36.082Z",
        "updatedAt": "2023-03-19T09:00:37.379Z",
        "__v": 0,
        "main_photo": "https://api.kozackiefury.pl/./public/uploads/cars/3960F32E-A498-4DC1-AE78-9FFEB28EBC5A-1679216437108.webp"
    },
    {
        "_id": "6416d0255fb768052509feb1",
        "pathName": "bmw-m8-competition-1eoj",
        "brand": "BMW",
        "model": "M8 Competition",
        "horse_power": "625",
        "engine": "4.4 L V8 Biturbo ",
        "to_100": "3.2",
        "description": "Królestwo M ma nowego przywódcę: BMW M8 Competition to bawarskie supercoupé.\nOsiągami i emocjami wpisuje się na listę „wszelkiego najlepszego”.\n\nNieprzeciętne osiągi, luksusowe wnętrze, i design idealnie dopasowany do marki - pewny siebie, bezprecedensowy, bardzo statyczny. zaprojektowany z myślą o miłośnikach sportowych osiągów, którzy oczekują maksymalnej dynamiki, zwinności i precyzji prowadzenia. Silnik V8 z technologią M TwinPower Turbo o mocy 625 KM i maksymalnym momencie obrotowym 750 Nm gwarantuje imponujące przyspieszenie od 0 do 100 km/h w czasie 3,2 sekundy.\nWnętrze M8 zostało zaprojektowane z myślą o funkcjonalności i sportowym charakterze. Kierowca może cieszyć się wygodnymi karbonowymi fotelami kubełkowymi z tapicerką z skóry Merino i alcantary, a całość utrzymana jest w ciemnej kolorystyce, wzbogaconej o pomarańczowe akcenty.\nDodatkowo, M8 posiada 8-stopniową skrzynię M Steptonic z systemem Drivelogic oraz napęd na wszystkie koła MxDrive, co zapewnia jeszcze lepszą kontrolę nad pojazdem i doskonałą przyczepność na każdym podłożu.\nMatowy czarny wygląd z pewnością dodaje samochodowi niepowtarzalnego charakteru i podkreśla jego sportową duszę.\n\nPrzód BMW M8 Competition niesamowicie „klei” i pozwala na absurdalnie szybkie jak na przedniosilnikowe coupé pokonywanie łuków. Zastosowano napęd w systemie 4x4, który potrafi pracować też w trybie tylnego napędu. \n\nTym wozem można solidnie przewieźć nasze lub bliskiej nam osoby cztery litery. Chwile, tylko te na długo zapamiętane - gwarantowane. \n\nJeśli „mroczne brzemię” w Tobie drzemie to ta Fura jest właśnie dla Ciebie.",
        "category": "Fast&Furious",
        "services": [],
        "active": false,
        "canceled": false,
        "userId": "62874901a3b91396c1447d3c",
        "photos": [
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/1819B7A5-05D6-47B7-B9B2-8F933E263B0D-1679216680812.webp",
                "_id": "6416d0295fb768052509feb3"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/FB391A76-20A9-4B35-AA2E-5720185C62EE-1679216680813.webp",
                "_id": "6416d0295fb768052509feb4"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/17DDFE66-05D4-440B-BF19-0317A745A49C-1679216680815.webp",
                "_id": "6416d0295fb768052509feb5"
            },
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/70C1043A-7CBD-4C9E-80BD-EE00EBBDEA0B-1679216680816.webp",
                "_id": "6416d0295fb768052509feb6"
            }
        ],
        "createdAt": "2023-03-19T09:04:37.476Z",
        "updatedAt": "2023-03-19T09:04:41.149Z",
        "__v": 0,
        "main_photo": "https://api.kozackiefury.pl/./public/uploads/cars/1819B7A5-05D6-47B7-B9B2-8F933E263B0D-1679216680812.webp"
    },
    {
        "_id": "6416d08a5fb768052509fed7",
        "pathName": "bmw-8-gran-coupé-745n",
        "brand": "BMW",
        "model": "8 Gran Coupé",
        "horse_power": "320",
        "engine": "3.0 L R6",
        "to_100": "7.8",
        "description": "BMW 8 Gran Coupé, drugiej generacji to luksusowe coupe o sportowym charakterze.\n\nWnętrze samochodu zostało zaprojektowane w stylu nowoczesnym, z wykorzystaniem wysokiej jakości materiałów, takich jak skóra, drewno czy aluminium. Kokpit został zaprojektowany w sposób ergonomiczny, z wykorzystaniem cyfrowego wyświetlacza oraz systemu multimedialnego z dotykowym ekranem.\nCzerwony kolor skóry wewnątrz samochodu idealnie komponuje się z czarną karoserią, dodając elegancji i solidnego pazura. Całość prezentuje się stylowo, z gustem i klasą, co z pewnością zadowoli wymagających kierowców.",
        "category": "Luxury&Business",
        "services": [],
        "active": false,
        "canceled": false,
        "userId": "625f307690c50e28a4ec1ee0",
        "photos": [
            {
                "location": "https://api.kozackiefury.pl/./public/uploads/cars/C27A09C1-98B1-4058-8B7E-D2C13F76866C-1679216778698.webp",
                "_id": "6416d08a5fb768052509fed9"
            }
        ],
        "createdAt": "2023-03-19T09:06:18.300Z",
        "updatedAt": "2023-03-19T09:06:18.830Z",
        "__v": 0,
        "main_photo": "https://api.kozackiefury.pl/./public/uploads/cars/C27A09C1-98B1-4058-8B7E-D2C13F76866C-1679216778698.webp"
    }
]

export default function Gallery() {

    return <Box
        mt={12}
        position={'relative'}
        height={'550px'}
        width={'full'}
        overflow={'hidden'}>
        <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Slider {...settings}>
            {cars.map(car => <CarCard key={car._id} car={car} />)}
        </Slider>
    </Box>
}