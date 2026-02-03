
import { Room } from './types';

export const ROOMS: Room[] = [
  {
    id: '1',
    name: 'Executive Deluxe Suite',
    description: 'Spacious and elegant with a stunning city view and premium mahogany furnishings.',
    price: 145000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCBCLl5aXk0GYfRAHlssNkSmPsG65tqjUIILWaVeYmp3Q0Ij9AwE0yvwx5xIN4rwdQiRJAGp0jnBaZgpimjAAxjzAm3clcZVOM1we6uesqucdmJVVRPigUcq49cc6ENIm3YcY7d3Ng2K0Jv38ld4-JpC4pjCBMJSlTGYfwPYfeNS_LFx3JvoAnQGU3TC152rcYvGb4To7wyeWnzymP-u0gXK1VJHoEcbq4lA8hVObCltgAgeWZ5MJ6Vy-3E34RJZBiRvDyCt8JhrF2',
    category: 'Executive',
    amenities: ['FREE WIFI', 'SMART TV', 'SPA'],
    capacity: '2 Adults, 1 Child',
    status: 'Available'
  },
  {
    id: '2',
    name: 'Diplomatic Lounge',
    description: 'Perfect for business travelers, featuring a separate living area and executive workstation.',
    price: 250000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAhEPcCWoYlg2f38mDDodVrkUfuAAB2QhJejro0o3AfL5zMVUrZ39YSxLDVFL1fjrMA8eegYxTrSgaywcvxs3r3Kt25_nBWH-Iy13Ji1qczdUrnu3aNFZtelZWxumCy9amBr0AZT7IhP8kyUoum-xUMWg-vLDP2MVLXQE83uu3uXNfdsGy1kvZ6XpNwdyK42qxqHtYKm5Ea1rdhXgL6TufTtJKhz5S3FoWYHMARGQZViNraXJ-E6Epo0KdaKJRrrevTDyAjMFkWzOL',
    category: 'Executive',
    amenities: ['AC', 'BREAKFAST', 'GYM'],
    capacity: '2 Adults',
    status: 'Available'
  },
  {
    id: '3',
    name: 'Presidential Suite',
    description: 'Our most luxurious offering. Hand-crafted decor, private terrace, and 24/7 butler service.',
    price: 450000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTw4z5nIdTnxK5dfGTHQKmxI-f1t0IbhUPfclXlHRvOd1BCERBnXlp-87Mnd08f1-nl7DlNobzh48fYmFQ40zEmbM4ZQlcPlTIsskgYs_MS-bCjwYQM6TqaxkODG5LmApHXU6LN76v-bZ21DFZLoD9Nmw7zL0bkFGmF4N8az6r2HtV-oO-KvMPwxqwXm0fN3dp7JPUHsHUyAcUnHvS_HTAr9hC0zKAbhxxWYboTrG-dqROoheyqlflrxicCHIEFF2RjVBXjdzH4W4v',
    category: 'Presidential',
    amenities: ['MINI BAR', 'JACUZZI', 'BUTLER'],
    capacity: '4 Adults',
    status: 'Available'
  },
  {
    id: '4',
    name: 'Classic King Room',
    description: 'A perfect blend of comfort and utility, featuring premium linens and a dedicated workspace.',
    price: 95000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxk0evbq8PQd3KeSIQY7V3DgbRyDFa3R0LPUTToPATLXKpVW4MuHbX-iRKlzn4nJ72w2ZMmgalXCsG0dRqsukvJge-bYyMCEHtu-PAecboFpbiohUcy5Yxj79kTG-1vc6L6_lxFYcMsq9Us7NiK8wSmlz5uZb6-0DgZXIstb_3r_vk8lr1Ga7Pu1PKBHX-m_UTh_hGHHel16vTOmK0BlO_CW9edUSeLozbdJui6qbfYu429uL9BLISo0x6BjBmW9csIVctGYP32ucz',
    category: 'Standard',
    amenities: ['FREE WIFI', 'AC', 'BREAKFAST'],
    capacity: '2 Adults',
    status: 'Available'
  }
];
