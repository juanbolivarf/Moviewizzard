
import type { Movie } from '@/lib/types';

export const mockMovies: Movie[] = [
  {
    id: 'm1',
    title: 'The Shawshank Redemption',
    releaseDate: '1994-09-23',
    synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    posterUrl: 'https://picsum.photos/400/600?random=1',
    backdropUrl: 'https://picsum.photos/1280/720?random=101',
    cast: [
      { name: 'Tim Robbins', role: 'Andy Dufresne', imageUrl: 'https://picsum.photos/200/300?random=201' },
      { name: 'Morgan Freeman', role: 'Ellis Boyd Redding', imageUrl: 'https://picsum.photos/200/300?random=202' },
    ],
    genres: ['Drama'],
    director: 'Frank Darabont',
    averageRating: 4.65, // IMDb 9.3/2
    duration: "2h 22m",
    images: [
      'https://picsum.photos/600/400?random=301',
      'https://picsum.photos/600/400?random=302',
    ]
  },
  {
    id: 'm2',
    title: 'The Godfather',
    releaseDate: '1972-03-24',
    synopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    posterUrl: 'https://picsum.photos/400/600?random=2',
    backdropUrl: 'https://picsum.photos/1280/720?random=102',
    cast: [
      { name: 'Marlon Brando', role: 'Don Vito Corleone', imageUrl: 'https://picsum.photos/200/300?random=203' },
      { name: 'Al Pacino', role: 'Michael Corleone', imageUrl: 'https://picsum.photos/200/300?random=204' },
    ],
    genres: ['Crime', 'Drama'],
    director: 'Francis Ford Coppola',
    averageRating: 4.6, // IMDb 9.2/2
    duration: "2h 55m",
    images: [
      'https://picsum.photos/600/400?random=303',
      'https://picsum.photos/600/400?random=304',
    ]
  },
  {
    id: 'm3',
    title: 'The Dark Knight',
    releaseDate: '2008-07-18',
    synopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    posterUrl: 'https://picsum.photos/400/600?random=3',
    backdropUrl: 'https://picsum.photos/1280/720?random=103',
    cast: [
      { name: 'Christian Bale', role: 'Bruce Wayne / Batman', imageUrl: 'https://picsum.photos/200/300?random=205' },
      { name: 'Heath Ledger', role: 'Joker', imageUrl: 'https://picsum.photos/200/300?random=206' },
    ],
    genres: ['Action', 'Crime', 'Drama'],
    director: 'Christopher Nolan',
    averageRating: 4.5, // IMDb 9.0/2
    duration: "2h 32m",
    images: [
      'https://picsum.photos/600/400?random=305',
      'https://picsum.photos/600/400?random=306',
    ]
  },
  {
    id: 'm4',
    title: 'Pulp Fiction',
    releaseDate: '1994-10-14',
    synopsis: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    posterUrl: 'https://picsum.photos/400/600?random=4',
    backdropUrl: 'https://picsum.photos/1280/720?random=104',
    cast: [
      { name: 'John Travolta', role: 'Vincent Vega', imageUrl: 'https://picsum.photos/200/300?random=207' },
      { name: 'Samuel L. Jackson', role: 'Jules Winnfield', imageUrl: 'https://picsum.photos/200/300?random=208' },
    ],
    genres: ['Crime', 'Drama'],
    director: 'Quentin Tarantino',
    averageRating: 4.45, // IMDb 8.9/2
    duration: "2h 34m",
    images: [
      'https://picsum.photos/600/400?random=307',
      'https://picsum.photos/600/400?random=308',
    ]
  },
  {
    id: 'm5',
    title: 'Schindler\'s List',
    releaseDate: '1993-12-15',
    synopsis: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
    posterUrl: 'https://picsum.photos/400/600?random=5',
    backdropUrl: 'https://picsum.photos/1280/720?random=105',
    cast: [
      { name: 'Liam Neeson', role: 'Oskar Schindler', imageUrl: 'https://picsum.photos/200/300?random=209' },
      { name: 'Ben Kingsley', role: 'Itzhak Stern', imageUrl: 'https://picsum.photos/200/300?random=210' },
    ],
    genres: ['Biography', 'Drama', 'History'],
    director: 'Steven Spielberg',
    averageRating: 4.5, // IMDb 9.0/2 (was 8.9, rounded)
    duration: "3h 15m",
    images: [
      'https://picsum.photos/600/400?random=309',
      'https://picsum.photos/600/400?random=310',
    ]
  },
  {
    id: 'm6',
    title: 'The Lord of the Rings: The Return of the King',
    releaseDate: '2003-12-17',
    synopsis: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
    posterUrl: 'https://picsum.photos/400/600?random=6',
    backdropUrl: 'https://picsum.photos/1280/720?random=106',
    cast: [
      { name: 'Elijah Wood', role: 'Frodo Baggins', imageUrl: 'https://picsum.photos/200/300?random=211' },
      { name: 'Viggo Mortensen', role: 'Aragorn', imageUrl: 'https://picsum.photos/200/300?random=212' },
    ],
    genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
    director: 'Peter Jackson',
    averageRating: 4.5, // IMDb 9.0/2
    duration: "3h 21m",
    images: [
      'https://picsum.photos/600/400?random=311',
      'https://picsum.photos/600/400?random=312',
    ]
  },
  {
    id: 'm7',
    title: 'Forrest Gump',
    releaseDate: '1994-07-06',
    synopsis: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
    posterUrl: 'https://picsum.photos/400/600?random=7',
    backdropUrl: 'https://picsum.photos/1280/720?random=107',
    cast: [
      { name: 'Tom Hanks', role: 'Forrest Gump', imageUrl: 'https://picsum.photos/200/300?random=213' },
      { name: 'Robin Wright', role: 'Jenny Curran', imageUrl: 'https://picsum.photos/200/300?random=214' },
    ],
    genres: ['Drama', 'Romance'],
    director: 'Robert Zemeckis',
    averageRating: 4.4, // IMDb 8.8/2
    duration: "2h 22m",
    images: [
      'https://picsum.photos/600/400?random=313',
      'https://picsum.photos/600/400?random=314',
    ]
  },
  {
    id: 'm8',
    title: 'Fight Club',
    releaseDate: '1999-10-15',
    synopsis: 'An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more.',
    posterUrl: 'https://picsum.photos/400/600?random=8',
    backdropUrl: 'https://picsum.photos/1280/720?random=108',
    cast: [
      { name: 'Brad Pitt', role: 'Tyler Durden', imageUrl: 'https://picsum.photos/200/300?random=215' },
      { name: 'Edward Norton', role: 'The Narrator', imageUrl: 'https://picsum.photos/200/300?random=216' },
    ],
    genres: ['Drama'],
    director: 'David Fincher',
    averageRating: 4.4, // IMDb 8.8/2
    duration: "2h 19m",
    images: [
      'https://picsum.photos/600/400?random=315',
      'https://picsum.photos/600/400?random=316',
    ]
  },
  {
    id: 'm9',
    title: 'Inception',
    releaseDate: '2010-07-16',
    synopsis: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    posterUrl: 'https://picsum.photos/400/600?random=9',
    backdropUrl: 'https://picsum.photos/1280/720?random=109',
    cast: [
      { name: 'Leonardo DiCaprio', role: 'Cobb', imageUrl: 'https://picsum.photos/200/300?random=217' },
      { name: 'Joseph Gordon-Levitt', role: 'Arthur', imageUrl: 'https://picsum.photos/200/300?random=218' },
    ],
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    director: 'Christopher Nolan',
    averageRating: 4.4, // IMDb 8.8/2
    duration: "2h 28m",
    images: [
      'https://picsum.photos/600/400?random=317',
      'https://picsum.photos/600/400?random=318',
    ]
  },
  {
    id: 'm10',
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    releaseDate: '1980-05-21',
    synopsis: 'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and bounty hunter Boba Fett.',
    posterUrl: 'https://picsum.photos/400/600?random=10',
    backdropUrl: 'https://picsum.photos/1280/720?random=110',
    cast: [
      { name: 'Mark Hamill', role: 'Luke Skywalker', imageUrl: 'https://picsum.photos/200/300?random=219' },
      { name: 'Harrison Ford', role: 'Han Solo', imageUrl: 'https://picsum.photos/200/300?random=220' },
    ],
    genres: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
    director: 'Irvin Kershner',
    averageRating: 4.35, // IMDb 8.7/2
    duration: "2h 4m",
    images: [
      'https://picsum.photos/600/400?random=319',
      'https://picsum.photos/600/400?random=320',
    ]
  },
  {
    id: 'm11',
    title: 'The Matrix',
    releaseDate: '1999-03-31',
    synopsis: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    posterUrl: 'https://picsum.photos/400/600?random=11',
    backdropUrl: 'https://picsum.photos/1280/720?random=111',
    cast: [
      { name: 'Keanu Reeves', role: 'Neo', imageUrl: 'https://picsum.photos/200/300?random=221' },
      { name: 'Laurence Fishburne', role: 'Morpheus', imageUrl: 'https://picsum.photos/200/300?random=222' },
    ],
    genres: ['Action', 'Sci-Fi'],
    director: 'Lana Wachowski, Lilly Wachowski',
    averageRating: 4.35, // IMDb 8.7/2
    duration: "2h 16m",
    images: [
      'https://picsum.photos/600/400?random=321',
      'https://picsum.photos/600/400?random=322',
    ]
  },
  {
    id: 'm12',
    title: 'Goodfellas',
    releaseDate: '1990-09-19',
    synopsis: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
    posterUrl: 'https://picsum.photos/400/600?random=12',
    backdropUrl: 'https://picsum.photos/1280/720?random=112',
    cast: [
      { name: 'Robert De Niro', role: 'James Conway', imageUrl: 'https://picsum.photos/200/300?random=223' },
      { name: 'Ray Liotta', role: 'Henry Hill', imageUrl: 'https://picsum.photos/200/300?random=224' },
    ],
    genres: ['Biography', 'Crime', 'Drama'],
    director: 'Martin Scorsese',
    averageRating: 4.35, // IMDb 8.7/2
    duration: "2h 26m",
    images: [
      'https://picsum.photos/600/400?random=323',
      'https://picsum.photos/600/400?random=324',
    ]
  },
  {
    id: 'm13',
    title: 'One Flew Over the Cuckoo\'s Nest',
    releaseDate: '1975-11-19',
    synopsis: 'A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.',
    posterUrl: 'https://picsum.photos/400/600?random=13',
    backdropUrl: 'https://picsum.photos/1280/720?random=113',
    cast: [
      { name: 'Jack Nicholson', role: 'Randle McMurphy', imageUrl: 'https://picsum.photos/200/300?random=225' },
      { name: 'Louise Fletcher', role: 'Nurse Ratched', imageUrl: 'https://picsum.photos/200/300?random=226' },
    ],
    genres: ['Drama'],
    director: 'Milos Forman',
    averageRating: 4.35, // IMDb 8.7/2
    duration: "2h 13m",
    images: [
      'https://picsum.photos/600/400?random=325',
      'https://picsum.photos/600/400?random=326',
    ]
  },
  {
    id: 'm14',
    title: 'Seven Samurai',
    releaseDate: '1954-04-26',
    synopsis: 'A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.',
    posterUrl: 'https://picsum.photos/400/600?random=14',
    backdropUrl: 'https://picsum.photos/1280/720?random=114',
    cast: [
      { name: 'Toshirô Mifune', role: 'Kikuchiyo', imageUrl: 'https://picsum.photos/200/300?random=227' },
      { name: 'Takashi Shimura', role: 'Kambei Shimada', imageUrl: 'https://picsum.photos/200/300?random=228' },
    ],
    genres: ['Action', 'Adventure', 'Drama'],
    director: 'Akira Kurosawa',
    averageRating: 4.3, // IMDb 8.6/2
    duration: "3h 27m",
    images: [
      'https://picsum.photos/600/400?random=327',
      'https://picsum.photos/600/400?random=328',
    ]
  },
  {
    id: 'm15',
    title: 'Interstellar',
    releaseDate: '2014-11-07',
    synopsis: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    posterUrl: 'https://picsum.photos/400/600?random=15',
    backdropUrl: 'https://picsum.photos/1280/720?random=115',
    cast: [
      { name: 'Matthew McConaughey', role: 'Cooper', imageUrl: 'https://picsum.photos/200/300?random=229' },
      { name: 'Anne Hathaway', role: 'Brand', imageUrl: 'https://picsum.photos/200/300?random=230' },
    ],
    genres: ['Adventure', 'Drama', 'Sci-Fi'],
    director: 'Christopher Nolan',
    averageRating: 4.35, // IMDb 8.7/2 (was 8.6)
    duration: "2h 49m",
    images: [
      'https://picsum.photos/600/400?random=329',
      'https://picsum.photos/600/400?random=330',
    ]
  },
  {
    id: 'm16',
    title: 'City of God',
    releaseDate: '2002-08-30',
    synopsis: 'In the poverty-stricken favelas of Rio de Janeiro in the 1970s, two young men choose different paths: one becomes a photographer, the other a drug dealer.',
    posterUrl: 'https://picsum.photos/400/600?random=16',
    backdropUrl: 'https://picsum.photos/1280/720?random=116',
    cast: [
      { name: 'Alexandre Rodrigues', role: 'Rocket', imageUrl: 'https://picsum.photos/200/300?random=231' },
      { name: 'Leandro Firmino', role: 'Li\'l Zé', imageUrl: 'https://picsum.photos/200/300?random=232' },
    ],
    genres: ['Crime', 'Drama'],
    director: 'Fernando Meirelles, Kátia Lund',
    averageRating: 4.3, // IMDb 8.6/2
    duration: "2h 10m",
    images: [
      'https://picsum.photos/600/400?random=331',
      'https://picsum.photos/600/400?random=332',
    ]
  },
  {
    id: 'm17',
    title: 'Spirited Away',
    releaseDate: '2001-07-20',
    synopsis: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
    posterUrl: 'https://picsum.photos/400/600?random=17',
    backdropUrl: 'https://picsum.photos/1280/720?random=117',
    cast: [
      { name: 'Rumi Hiiragi', role: 'Chihiro Ogino (voice)', imageUrl: 'https://picsum.photos/200/300?random=233' },
      { name: 'Miyu Irino', role: 'Haku (voice)', imageUrl: 'https://picsum.photos/200/300?random=234' },
    ],
    genres: ['Animation', 'Adventure', 'Family', 'Fantasy', 'Mystery'],
    director: 'Hayao Miyazaki',
    averageRating: 4.3, // IMDb 8.6/2
    duration: "2h 5m",
    images: [
      'https://picsum.photos/600/400?random=333',
      'https://picsum.photos/600/400?random=334',
    ]
  },
  {
    id: 'm18',
    title: 'Saving Private Ryan',
    releaseDate: '1998-07-24',
    synopsis: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
    posterUrl: 'https://picsum.photos/400/600?random=18',
    backdropUrl: 'https://picsum.photos/1280/720?random=118',
    cast: [
      { name: 'Tom Hanks', role: 'Captain John H. Miller', imageUrl: 'https://picsum.photos/200/300?random=235' },
      { name: 'Matt Damon', role: 'Private James Francis Ryan', imageUrl: 'https://picsum.photos/200/300?random=236' },
    ],
    genres: ['Drama', 'War'],
    director: 'Steven Spielberg',
    averageRating: 4.3, // IMDb 8.6/2
    duration: "2h 49m",
    images: [
      'https://picsum.photos/600/400?random=335',
      'https://picsum.photos/600/400?random=336',
    ]
  },
  {
    id: 'm19',
    title: 'The Green Mile',
    releaseDate: '1999-12-10',
    synopsis: 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
    posterUrl: 'https://picsum.photos/400/600?random=19',
    backdropUrl: 'https://picsum.photos/1280/720?random=119',
    cast: [
      { name: 'Tom Hanks', role: 'Paul Edgecomb', imageUrl: 'https://picsum.photos/200/300?random=237' },
      { name: 'Michael Clarke Duncan', role: 'John Coffey', imageUrl: 'https://picsum.photos/200/300?random=238' },
    ],
    genres: ['Crime', 'Drama', 'Fantasy'],
    director: 'Frank Darabont',
    averageRating: 4.3, // IMDb 8.6/2
    duration: "3h 9m",
    images: [
      'https://picsum.photos/600/400?random=337',
      'https://picsum.photos/600/400?random=338',
    ]
  },
  {
    id: 'm20',
    title: 'Parasite',
    releaseDate: '2019-05-30',
    synopsis: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    posterUrl: 'https://picsum.photos/400/600?random=20',
    backdropUrl: 'https://picsum.photos/1280/720?random=120',
    cast: [
      { name: 'Song Kang-ho', role: 'Kim Ki-taek', imageUrl: 'https://picsum.photos/200/300?random=239' },
      { name: 'Choi Woo-shik', role: 'Kim Ki-woo', imageUrl: 'https://picsum.photos/200/300?random=240' },
    ],
    genres: ['Comedy', 'Drama', 'Thriller'],
    director: 'Bong Joon Ho',
    averageRating: 4.25, // IMDb 8.5/2
    duration: "2h 12m",
    images: [
      'https://picsum.photos/600/400?random=339',
      'https://picsum.photos/600/400?random=340',
    ]
  },
  {
    id: 'm21',
    title: 'The Silence of the Lambs',
    releaseDate: '1991-02-14',
    synopsis: 'A young F.B.I. trainee must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
    posterUrl: 'https://picsum.photos/400/600?random=21',
    backdropUrl: 'https://picsum.photos/1280/720?random=121',
    cast: [
      { name: 'Jodie Foster', role: 'Clarice Starling', imageUrl: 'https://picsum.photos/200/300?random=241' },
      { name: 'Anthony Hopkins', role: 'Dr. Hannibal Lecter', imageUrl: 'https://picsum.photos/200/300?random=242' },
    ],
    genres: ['Crime', 'Drama', 'Thriller'],
    director: 'Jonathan Demme',
    averageRating: 4.3, // IMDb 8.6/2
    duration: "1h 58m",
    images: [
      'https://picsum.photos/600/400?random=341',
      'https://picsum.photos/600/400?random=342',
    ]
  },
  {
    id: 'm22',
    title: 'Se7en',
    releaseDate: '1995-09-22',
    synopsis: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
    posterUrl: 'https://picsum.photos/400/600?random=22',
    backdropUrl: 'https://picsum.photos/1280/720?random=122',
    cast: [
      { name: 'Morgan Freeman', role: 'Detective Lt. William Somerset', imageUrl: 'https://picsum.photos/200/300?random=243' },
      { name: 'Brad Pitt', role: 'Detective David Mills', imageUrl: 'https://picsum.photos/200/300?random=244' },
    ],
    genres: ['Crime', 'Drama', 'Mystery', 'Thriller'],
    director: 'David Fincher',
    averageRating: 4.3, // IMDb 8.6/2
    duration: "2h 7m",
    images: [
      'https://picsum.photos/600/400?random=343',
      'https://picsum.photos/600/400?random=344',
    ]
  },
  {
    id: 'm23',
    title: 'The Usual Suspects',
    releaseDate: '1995-08-16',
    synopsis: 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.',
    posterUrl: 'https://picsum.photos/400/600?random=23',
    backdropUrl: 'https://picsum.photos/1280/720?random=123',
    cast: [
      { name: 'Kevin Spacey', role: 'Roger \'Verbal\' Kint', imageUrl: 'https://picsum.photos/200/300?random=245' },
      { name: 'Gabriel Byrne', role: 'Dean Keaton', imageUrl: 'https://picsum.photos/200/300?random=246' },
    ],
    genres: ['Crime', 'Drama', 'Mystery', 'Thriller'],
    director: 'Bryan Singer',
    averageRating: 4.25, // IMDb 8.5/2
    duration: "1h 46m",
    images: [
      'https://picsum.photos/600/400?random=345',
      'https://picsum.photos/600/400?random=346',
    ]
  },
  {
    id: 'm24',
    title: 'Léon: The Professional',
    releaseDate: '1994-09-14',
    synopsis: 'Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin\'s trade.',
    posterUrl: 'https://picsum.photos/400/600?random=24',
    backdropUrl: 'https://picsum.photos/1280/720?random=124',
    cast: [
      { name: 'Jean Reno', role: 'Léon', imageUrl: 'https://picsum.photos/200/300?random=247' },
      { name: 'Natalie Portman', role: 'Mathilda', imageUrl: 'https://picsum.photos/200/300?random=248' },
    ],
    genres: ['Action', 'Crime', 'Drama'],
    director: 'Luc Besson',
    averageRating: 4.25, // IMDb 8.5/2
    duration: "1h 50m",
    images: [
      'https://picsum.photos/600/400?random=347',
      'https://picsum.photos/600/400?random=348',
    ]
  },
  {
    id: 'm25',
    title: 'The Lion King',
    releaseDate: '1994-06-24',
    synopsis: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
    posterUrl: 'https://picsum.photos/400/600?random=25',
    backdropUrl: 'https://picsum.photos/1280/720?random=125',
    cast: [
      { name: 'Matthew Broderick', role: 'Simba (voice)', imageUrl: 'https://picsum.photos/200/300?random=249' },
      { name: 'Jeremy Irons', role: 'Scar (voice)', imageUrl: 'https://picsum.photos/200/300?random=250' },
    ],
    genres: ['Animation', 'Adventure', 'Drama', 'Family', 'Musical'],
    director: 'Roger Allers, Rob Minkoff',
    averageRating: 4.25, // IMDb 8.5/2
    duration: "1h 28m",
    images: [
      'https://picsum.photos/600/400?random=349',
      'https://picsum.photos/600/400?random=350',
    ]
  },
  {
    id: 'm26',
    title: 'Gladiator',
    releaseDate: '2000-05-05',
    synopsis: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
    posterUrl: 'https://picsum.photos/400/600?random=26',
    backdropUrl: 'https://picsum.photos/1280/720?random=126',
    cast: [
      { name: 'Russell Crowe', role: 'Maximus', imageUrl: 'https://picsum.photos/200/300?random=251' },
      { name: 'Joaquin Phoenix', role: 'Commodus', imageUrl: 'https://picsum.photos/200/300?random=252' },
    ],
    genres: ['Action', 'Adventure', 'Drama'],
    director: 'Ridley Scott',
    averageRating: 4.25, // IMDb 8.5/2
    duration: "2h 35m",
    images: [
      'https://picsum.photos/600/400?random=351',
      'https://picsum.photos/600/400?random=352',
    ]
  },
  {
    id: 'm27',
    title: 'Back to the Future',
    releaseDate: '1985-07-03',
    synopsis: 'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.',
    posterUrl: 'https://picsum.photos/400/600?random=27',
    backdropUrl: 'https://picsum.photos/1280/720?random=127',
    cast: [
      { name: 'Michael J. Fox', role: 'Marty McFly', imageUrl: 'https://picsum.photos/200/300?random=253' },
      { name: 'Christopher Lloyd', role: 'Dr. Emmett Brown', imageUrl: 'https://picsum.photos/200/300?random=254' },
    ],
    genres: ['Adventure', 'Comedy', 'Sci-Fi'],
    director: 'Robert Zemeckis',
    averageRating: 4.25, // IMDb 8.5/2
    duration: "1h 56m",
    images: [
      'https://picsum.photos/600/400?random=353',
      'https://picsum.photos/600/400?random=354',
    ]
  },
  {
    id: 'm28',
    title: 'Apocalypse Now',
    releaseDate: '1979-08-15',
    synopsis: 'A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.',
    posterUrl: 'https://picsum.photos/400/600?random=28',
    backdropUrl: 'https://picsum.photos/1280/720?random=128',
    cast: [
      { name: 'Martin Sheen', role: 'Captain Benjamin L. Willard', imageUrl: 'https://picsum.photos/200/300?random=255' },
      { name: 'Marlon Brando', role: 'Colonel Walter E. Kurtz', imageUrl: 'https://picsum.photos/200/300?random=256' },
    ],
    genres: ['Drama', 'Mystery', 'War'],
    director: 'Francis Ford Coppola',
    averageRating: 4.2, // IMDb 8.4/2
    duration: "2h 27m",
    images: [
      'https://picsum.photos/600/400?random=355',
      'https://picsum.photos/600/400?random=356',
    ]
  },
  {
    id: 'm29',
    title: 'Alien',
    releaseDate: '1979-05-25',
    synopsis: 'After a space merchant vessel perceives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.',
    posterUrl: 'https://picsum.photos/400/600?random=29',
    backdropUrl: 'https://picsum.photos/1280/720?random=129',
    cast: [
      { name: 'Sigourney Weaver', role: 'Ripley', imageUrl: 'https://picsum.photos/200/300?random=257' },
      { name: 'Tom Skerritt', role: 'Dallas', imageUrl: 'https://picsum.photos/200/300?random=258' },
    ],
    genres: ['Horror', 'Sci-Fi'],
    director: 'Ridley Scott',
    averageRating: 4.25, // IMDb 8.5/2
    duration: "1h 57m",
    images: [
      'https://picsum.photos/600/400?random=357',
      'https://picsum.photos/600/400?random=358',
    ]
  },
  {
    id: 'm30',
    title: 'Casablanca',
    releaseDate: '1943-01-23', // US release
    synopsis: 'A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.',
    posterUrl: 'https://picsum.photos/400/600?random=30',
    backdropUrl: 'https://picsum.photos/1280/720?random=130',
    cast: [
      { name: 'Humphrey Bogart', role: 'Rick Blaine', imageUrl: 'https://picsum.photos/200/300?random=259' },
      { name: 'Ingrid Bergman', role: 'Ilsa Lund', imageUrl: 'https://picsum.photos/200/300?random=260' },
    ],
    genres: ['Drama', 'Romance', 'War'],
    director: 'Michael Curtiz',
    averageRating: 4.25, // IMDb 8.5/2
    duration: "1h 42m",
    images: [
      'https://picsum.photos/600/400?random=359',
      'https://picsum.photos/600/400?random=360',
    ]
  },
];

export const getMovieById = (id: string): Movie | undefined => mockMovies.find(movie => movie.id === id);

export const getAllGenres = (): string[] => {
  const allGenres = new Set<string>();
  mockMovies.forEach(movie => movie.genres.forEach(genre => allGenres.add(genre)));
  return Array.from(allGenres).sort();
};

// Attaching data-ai-hint attributes to image URLs in the component that renders them is better.
// For example, in MovieCard.tsx:
// <Image src={movie.posterUrl} alt={movie.title} ... data-ai-hint="movie poster" />
// For cast images in MovieDetailsSection.tsx:
// <Image src={actor.imageUrl} alt={actor.name} ... data-ai-hint="actor portrait" />
// For gallery images in MovieDetailsSection.tsx:
// <Image src={src} ... data-ai-hint="movie scene" />

// The hints provided in comments above were for conceptualization and should be implemented in the respective components.
// For example:
// The Shawshank Redemption posterUrl: 'https://picsum.photos/400/600?random=1', // data-ai-hint="prison drama"
// The Shawshank Redemption backdropUrl: 'https://picsum.photos/1280/720?random=101', // data-ai-hint="prison escape"
// Tim Robbins imageUrl: 'https://picsum.photos/200/300?random=201' /* data-ai-hint="man portrait" */
// The Shawshank Redemption image1: 'https://picsum.photos/600/400?random=301', // data-ai-hint="prison cell"

// This file only contains the data. The rendering components will add the data-ai-hint attributes.
