import {
  MapPin,
  Users,
  Mountain,
  Car,
  Utensils,
  Shield,
  Camera,
  Calendar,
  Ticket,
  Apple,
  Gift,
  Hotel,
  Shirt,
  Bike,
  GlassWater,
  Droplets,
  Landmark,
  Sandwich,
  Luggage,
  Waves,
  Wrench,
  Bus,
  CircleDot,
  LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  Users,
  Mountain,
  Car,
  Utensils,
  Shield,
  Camera,
  Calendar,
  Ticket,
  Apple,
  Gift,
  Hotel,
  Shirt,
  Bike,
  GlassWater,
  Droplets,
  Landmark,
  Sandwich,
  Luggage,
  Waves,
  Wrench,
  Bus,
};

export function getIconComponent(name?: string): LucideIcon {
  if (!name) return CircleDot;
  return iconMap[name] || CircleDot;
}
