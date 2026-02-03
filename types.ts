
export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Standard' | 'Deluxe' | 'Executive' | 'Presidential' | 'Penthouse';
  amenities: string[];
  capacity: string;
  status: 'Available' | 'Sold Out';
}

export interface BookingDetails {
  roomId: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  totalNights: number;
  totalPrice: number;
}

export interface GuestInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
