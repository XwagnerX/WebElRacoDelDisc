import { Product, Review } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Kind of Blue',
    artist: 'Miles Davis',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1681148773098-1460911e25a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwdmlueWwlMjByZWNvcmR8ZW58MXx8fHwxNzcxMzQ0Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Jazz',
    year: 1959,
    condition: 'new',
    description: 'Considerado una obra maestra del jazz modal, este álbum es esencial en cualquier colección. Grabado en 1959, incluye los legendarios "So What" y "All Blues".',
    stock: 15,
    isNew: true,
    category: 'vinyl'
  },
  {
    id: '2',
    title: 'Abbey Road',
    artist: 'The Beatles',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1769090327906-210d10654db1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwcm9jayUyMHZpbnlsJTIwYWxidW18ZW58MXx8fHwxNzcxNDI4MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Rock',
    year: 1969,
    condition: 'new',
    description: 'El icónico álbum final de The Beatles, con la famosa portada del paso de cebra. Incluye clásicos como "Come Together" y "Here Comes the Sun".',
    stock: 8,
    isNew: true,
    category: 'vinyl'
  },
  {
    id: '3',
    title: 'Thriller',
    artist: 'Michael Jackson',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1681148772801-2bb2097c1b5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3AlMjBtdXNpYyUyMHZpbnlsfGVufDF8fHx8MTc3MTM5Nzk0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Pop',
    year: 1982,
    condition: 'new',
    description: 'El álbum más vendido de todos los tiempos. Una obra maestra del pop con hits inolvidables como "Billie Jean", "Beat It" y la canción que da título al álbum.',
    stock: 12,
    isNew: true,
    category: 'vinyl'
  },
  {
    id: '4',
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    price: 36.99,
    image: 'https://images.unsplash.com/photo-1616663395403-2e0052b8e595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGFsYnVtJTIwY292ZXJ8ZW58MXx8fHwxNzcxNDIxMTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Rock Progresivo',
    year: 1973,
    condition: 'new',
    description: 'Una obra conceptual legendaria sobre los temas de la vida, el tiempo y la locura. Con su icónica portada del prisma.',
    stock: 10,
    isNew: true,
    category: 'vinyl'
  },
  {
    id: '5',
    title: 'Rumours',
    artist: 'Fleetwood Mac',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1625140233675-912059ebd5f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZHMlMjBjb2xsZWN0aW9uJTIwc3RvcmV8ZW58MXx8fHwxNzcxNDI4MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Rock',
    year: 1977,
    condition: 'new',
    description: 'Uno de los álbumes más exitosos de todos los tiempos, con clásicos como "Go Your Own Way" y "Dreams".',
    stock: 6,
    isNew: true,
    category: 'vinyl'
  },
  {
    id: '6',
    title: 'Back in Black',
    artist: 'AC/DC',
    price: 31.99,
    image: 'https://images.unsplash.com/photo-1616663395403-2e0052b8e595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGFsYnVtJTIwY292ZXJ8ZW58MXx8fHwxNzcxNDIxMTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Hard Rock',
    year: 1980,
    condition: 'new',
    description: 'Un tributo al fallecido vocalista Bon Scott, este álbum catapultó a AC/DC a la fama mundial con su sonido de rock duro.',
    stock: 14,
    isNew: false,
    category: 'vinyl'
  },
  {
    id: '7',
    title: 'Led Zeppelin IV',
    artist: 'Led Zeppelin',
    price: 33.99,
    image: 'https://images.unsplash.com/photo-1769090327906-210d10654db1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwcm9jayUyMHZpbnlsJTIwYWxidW18ZW58MXx8fHwxNzcxNDI4MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Rock',
    year: 1971,
    condition: 'used',
    description: 'Incluye "Stairway to Heaven", considerada una de las mejores canciones de rock de todos los tiempos.',
    stock: 3,
    isNew: false,
    category: 'vinyl'
  },
  {
    id: '8',
    title: 'What\'s Going On',
    artist: 'Marvin Gaye',
    price: 27.99,
    image: 'https://images.unsplash.com/photo-1681148773098-1460911e25a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwdmlueWwlMjByZWNvcmR8ZW58MXx8fHwxNzcxMzQ0Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Soul',
    year: 1971,
    condition: 'used',
    description: 'Un álbum conceptual que aborda temas sociales y políticos con elegancia y soul.',
    stock: 5,
    isNew: false,
    category: 'vinyl'
  },
  // CDs
  {
    id: 'cd1',
    title: 'Random Access Memories',
    artist: 'Daft Punk',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1760931657888-87514a4e6c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZCUyMG11c2ljJTIwYWxidW0lMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc3MTQzMDE4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Electronic',
    year: 2013,
    condition: 'new',
    description: 'El cuarto álbum de estudio de Daft Punk, ganador de múltiples premios Grammy.',
    stock: 20,
    isNew: true,
    category: 'cd'
  },
  {
    id: 'cd2',
    title: '21',
    artist: 'Adele',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1650209887378-d222a0519524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZCUyMGFsYnVtJTIwamV3ZWwlMjBjYXNlfGVufDF8fHx8MTc3MTQzMDE4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Soul',
    year: 2011,
    condition: 'new',
    description: 'Incluye los éxitos "Rolling in the Deep" y "Someone Like You".',
    stock: 18,
    isNew: true,
    category: 'cd'
  },
  {
    id: 'cd3',
    title: 'The Eminem Show',
    artist: 'Eminem',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1760931657888-87514a4e6c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZCUyMG11c2ljJTIwYWxidW0lMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc3MTQzMDE4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Hip Hop',
    year: 2002,
    condition: 'used',
    description: 'Uno de los álbumes más vendidos de Eminem, con clásicos como "Without Me".',
    stock: 7,
    isNew: false,
    category: 'cd'
  },
  // Tocadiscos
  {
    id: 'player1',
    title: 'Audio-Technica AT-LP120X',
    artist: 'Audio-Technica',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1701374929875-37125c54cb29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmQlMjBwbGF5ZXIlMjB0dXJudGFibGV8ZW58MXx8fHwxNzcxNDMwMTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Electrónica',
    year: 2023,
    condition: 'new',
    description: 'Tocadiscos profesional de tracción directa con motor de alto torque y diseño clásico.',
    stock: 5,
    isNew: true,
    category: 'player'
  },
  {
    id: 'player2',
    title: 'Pro-Ject Debut Carbon EVO',
    artist: 'Pro-Ject',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1698074890098-63d01b33ccfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwdHVybnRhYmxlJTIwdmlueWwlMjBwbGF5ZXJ8ZW58MXx8fHwxNzcxMzU5ODIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Audiófilo',
    year: 2023,
    condition: 'new',
    description: 'Tocadiscos de alta fidelidad con brazo de fibra de carbono y cápsula Sumiko.',
    stock: 3,
    isNew: true,
    category: 'player'
  },
  {
    id: 'player3',
    title: 'Sony PS-LX310BT',
    artist: 'Sony',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1701374929875-37125c54cb29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmQlMjBwbGF5ZXIlMjB0dXJudGFibGV8ZW58MXx8fHwxNzcxNDMwMTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Consumer',
    year: 2022,
    condition: 'new',
    description: 'Tocadiscos con conectividad Bluetooth y USB, perfecto para principiantes.',
    stock: 8,
    isNew: false,
    category: 'player'
  }
];

export const reviews: Review[] = [
  {
    id: 'r1',
    productId: '1',
    userName: 'Carlos M.',
    rating: 5,
    comment: 'Una obra maestra absoluta. La calidad del vinilo es excepcional.',
    date: '2026-02-10'
  },
  {
    id: 'r2',
    productId: '1',
    userName: 'Ana García',
    rating: 5,
    comment: 'Miles Davis en su máxima expresión. Imprescindible.',
    date: '2026-02-05'
  },
  {
    id: 'r3',
    productId: '2',
    userName: 'Pedro López',
    rating: 5,
    comment: 'El mejor álbum de The Beatles. Llegó en perfectas condiciones.',
    date: '2026-02-08'
  },
  {
    id: 'r4',
    productId: '2',
    userName: 'Laura Sánchez',
    rating: 4,
    comment: 'Excelente calidad de audio. Solo le falta un poco de volumen.',
    date: '2026-02-12'
  },
  {
    id: 'r5',
    productId: '3',
    userName: 'Javier Torres',
    rating: 5,
    comment: 'Thriller nunca pasa de moda. Perfecto para mi colección.',
    date: '2026-02-15'
  },
  {
    id: 'r6',
    productId: '4',
    userName: 'María Fernández',
    rating: 5,
    comment: 'Pink Floyd es magistral. La remasterización es increíble.',
    date: '2026-02-11'
  },
  {
    id: 'r7',
    productId: 'cd1',
    userName: 'Luis Martínez',
    rating: 5,
    comment: 'El mejor álbum de Daft Punk. El CD suena impecable.',
    date: '2026-02-13'
  },
  {
    id: 'r8',
    productId: 'player1',
    userName: 'Elena Ruiz',
    rating: 5,
    comment: 'Excelente tocadiscos, calidad de sonido increíble. Muy recomendado.',
    date: '2026-02-14'
  }
];
