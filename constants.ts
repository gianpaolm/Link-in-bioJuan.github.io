import { MessageSquare, Globe, Instagram, Video } from 'lucide-react';
import { LinkItem, ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
  name: "Juan Pablo Angel",
  title: "ARQUITECTO CORPORAL",
  description: "Más de una década forjando físicos de élite. Atleta Men's Physique. No solo entreno cuerpos, reprogramo hábitos. Tu transformación comienza en la mente.",
  imageUrl: "https://instagram.fbog2-4.fna.fbcdn.net/v/t51.2885-19/590428433_18547707937052088_8752260166310000675_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby42NzAuYzIifQ&_nc_ht=instagram.fbog2-4.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QF_1OHMqI2M784HMninAEawv1t9QT13sHwmPelovqlXbIB_dOCwhX4C8ZxoGGzwDTo&_nc_ohc=9_uakNYXiqkQ7kNvwEpg61Y&_nc_gid=5eM6-xxun5u2CL4vO7vUfA&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfhBcvlY8RA9T_Ni17rPV1mqc8H8dY8Si13ty-Y0VS9CCQ&oe=69316A9D&_nc_sid=10d13b"
};

export const LINKS: LinkItem[] = [
  {
    id: 'whatsapp',
    label: 'Consultoría Inmediata',
    url: 'https://wa.me/573168281534', 
    icon: MessageSquare,
    color: 'hover:shadow-[0_0_20px_#FFC300] hover:border-[#FFC300] hover:text-[#FFC300]'
  },
  {
    id: 'website',
    label: 'Nuestros Servicios',
    url: '#', // Placeholder: "Aun no lo tengo"
    icon: Globe,
    color: 'hover:shadow-[0_0_20px_#003566] hover:border-[#003566] hover:text-[#003566]'
  },
  {
    id: 'instagram',
    label: 'Galería de Resultados',
    url: 'https://www.instagram.com/juan_angel97/', 
    icon: Instagram,
    color: 'hover:shadow-[0_0_20px_#FFD60A] hover:border-[#FFD60A] hover:text-[#FFD60A]'
  },
  {
    id: 'tiktok',
    label: 'Cápsulas de Conocimiento',
    url: '#', // Placeholder: "Aun no lo tengo"
    icon: Video,
    color: 'hover:shadow-[0_0_20px_#FFFFFF] hover:border-[#FFFFFF] hover:text-white'
  }
];