const users = [
  { id: '1', username: 'maria_dev', avatar: 'https://i.pravatar.cc/150?u=maria' },
  { id: '2', username: 'carlos_art', avatar: 'https://i.pravatar.cc/150?u=carlos' },
  { id: '3', username: 'luna_photos', avatar: 'https://i.pravatar.cc/150?u=luna' },
  { id: '4', username: 'juan_99', avatar: 'https://i.pravatar.cc/150?u=juan' },
  { id: '5', username: 'ana_creativa', avatar: 'https://i.pravatar.cc/150?u=ana' },
  { id: '6', username: 'pedro_lens', avatar: 'https://i.pravatar.cc/150?u=pedro' },
  { id: '7', username: 'sofia_nature', avatar: 'https://i.pravatar.cc/150?u=sofia' },
  { id: '8', username: 'diego_m', avatar: 'https://i.pravatar.cc/150?u=diego' },
  { id: '9', username: 'vale_stories', avatar: 'https://i.pravatar.cc/150?u=vale' },
  { id: '10', username: 'tomas_r', avatar: 'https://i.pravatar.cc/150?u=tomas' },
  { id: '11', username: 'laura_mx', avatar: 'https://i.pravatar.cc/150?u=laura' },
  { id: '12', username: 'pablo_ph', avatar: 'https://i.pravatar.cc/150?u=pablo' },
];

const locations = [
  'Buenos Aires, Argentina', 'Barcelona, España', 'Ciudad de México, México',
  'Santiago, Chile', 'Lima, Perú', 'Bogotá, Colombia', 'Madrid, España',
  'Montevideo, Uruguay', 'São Paulo, Brasil', 'Quito, Ecuador', 'La Habana, Cuba',
  'San José, Costa Rica',
];

const captions = [
  'Disfrutando el día 🐱', 'Mi nuevo amigo 😻', 'La vida es mejor con gatos 🐈',
  'Momento de relax 🐾', 'Explorando nuevos lugares ✨', 'Amanecer con estilo 🌅',
  'Un lunes cualquiera 😸', 'Noche de películas 🎬', 'Aventuras del fin de semana 🚀',
  'Mi compañero fiel ❤️', 'Atardecer espectacular 🌇', 'Foto del día 📸',
];

const comments = [
  { id: 'c1', username: 'user_123', text: '¡Hermoso! 😍' },
  { id: 'c2', username: 'foto_amor', text: 'Qué lindo lugar' },
  { id: 'c3', username: 'viajero_ok', text: 'Wow, increíble' },
  { id: 'c4', username: 'art_gallery', text: 'Me encanta esta foto' },
  { id: 'c5', username: 'naturaleza_viva', text: 'Precioso 😊' },
  { id: 'c6', username: 'random_user', text: '¿Dónde es esto?' },
  { id: 'c7', username: 'amante_gatos', text: 'Qué ternura 🐱' },
  { id: 'c8', username: 'viajero_feliz', text: 'Agregado a mi lista' },
];

export const currentUser = {
  id: '0',
  username: 'tu_perfil',
  fullName: 'Tu Nombre',
  avatar: 'https://i.pravatar.cc/150?u=currentuser',
  bio: 'Desarrollador 📱 | Amante de los gatos 🐱',
  posts: 24,
  followers: 1250,
  following: 348,
};

export { users, locations, captions, comments };
