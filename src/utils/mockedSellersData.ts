import { subDays, subHours } from 'date-fns';

const now = new Date();

export const sellersData = [
  {
    id: '121',
    address: {
      city: 'Mandaluyong City',
      country: 'Philippines',
      state: 'Metro Manila',
      street: '1111 Boni Avenue',
    },
    createdAt: new Date().getTime(),
    email: 'juanito.santos@gmail.com',
    name: 'Juanito Santos',
    phone: '0912-345-6789',
  },
  {
    id: '122',
    address: {
      city: 'Makati City',
      country: 'Philippines',
      state: 'Metro Manila',
      street: '2222 Chino Roces Avenue',
    },
    createdAt: new Date().getTime(),
    email: 'rosario.gonzales@gmail.com',
    name: 'Rosario Gonzales',
    phone: '0917-890-1234',
  },
  {
    id: '123',
    address: {
      city: 'Davao City',
      country: 'Philippines',
      state: 'Davao',
      street: '3333 Davao Street',
    },
    createdAt: new Date().getTime(),
    email: 'joseph.tan@gmail.com',
    name: 'Joseph Tan',
    phone: '0922-987-6543',
  },
  {
    id: '124',
    address: {
      city: 'Cebu City',
      country: 'Philippines',
      state: 'Cebu',
      street: '4444 Osmeña Boulevard',
    },
    createdAt: new Date().getTime(),
    email: 'carmencita.delacruz@gmail.com',
    name: 'Carmencita dela Cruz',
    phone: '0918-765-4321',
  },
  {
    id: '125',
    address: {
      city: 'Quezon City',
      country: 'Philippines',
      state: 'Metro Manila',
      street: '5555 EDSA',
    },
    createdAt: new Date().getTime(),
    email: 'carlos.garcia@gmail.com',
    name: 'Carlos Garcia',
    phone: '0920-123-4567',
  },
  {
    id: '126',
    address: {
      city: 'Cagayan de Oro',
      country: 'Philippines',
      state: 'Misamis Oriental',
      street: '6666 Xavier Estates',
    },
    createdAt: new Date().getTime(),
    email: 'cristina.rodriguez@gmail.com',
    name: 'Cristina Rodriguez',
    phone: '0915-678-2345',
  },
  {
    id: '127',
    address: {
      city: 'Mandaluyong City',
      country: 'Philippines',
      state: 'Metro Manila',
      street: '7777 Pioneer Street',
    },
    createdAt: new Date().getTime(),
    email: 'eduardo.santos@gmail.com',
    name: 'Eduardo Santos',
    phone: '0921-345-6789',
  },
  {
    id: '128',
    address: {
      city: 'Makati City',
      country: 'Philippines',
      state: 'Metro Manila',
      street: '8888 Jupiter Street',
    },
    createdAt: new Date().getTime(),
    email: 'filomeno.gonzales@gmail.com',
    name: 'Filomeno Gonzales',
    phone: '0916-456-7890',
  },
  {
    id: '129',
    address: {
      city: 'Davao City',
      country: 'Philippines',
      state: 'Davao',
      street: '9999 Roxas Avenue',
    },
    createdAt: new Date().getTime(),
    email: 'gabriela.tan@gmail.com',
    name: 'Gabriela Tan',
    phone: '0925-567-8901',
  },
  {
    id: '130',
    address: {
      city: 'Cebu City',
      country: 'Philippines',
      state: 'Cebu',
      street: '1010 Capitol Site',
    },
    createdAt: new Date().getTime(),
    email: 'helena.delacruz@gmail.com',
    name: 'Helena dela Cruz',
    phone: '0913-567-8901',
  },
  {
    id: '131',
    address: {
      city: 'Quezon City',
      country: 'Philippines',
      state: 'Metro Manila',
      street: '2020 Commonwealth Avenue',
    },
    createdAt: new Date().getTime(),
    email: 'ignatius.garcia@gmail.com',
    name: 'Ignatius Garcia',
    phone: '0912-456-7890',
  },
  {
    id: '132',
    address: {
      city: 'Cagayan de Oro',
      country: 'Philippines',
      state: 'Misamis Oriental',
      street: '3030 LKK Building',
    },
    createdAt: new Date().getTime(),
    email: 'isidro.rodriguez@gmail.com',
    name: 'Isidro Rodriguez',
    phone: '0917-890-1234',
  },
  {
    id: '133',
    address: {
      city: 'Mandaluyong City',
      country: 'Philippines',
      state: 'Metro Manila',
      street: '4040 Boni Avenue',
    },
    createdAt: new Date().getTime(),
    email: 'josephine.santos@gmail.com',
    name: 'Josephine Santos',
    phone: '0922-987-6543',
  },
  {
    id: '134',
    address: {
      city: 'Makati City',
      country: 'Philippines',
      state: 'Metro Manila',
      street: '5050 Paseo de Roxas',
    },
    createdAt: new Date().getTime(),
    email: 'karlo.gonzales@gmail.com',
    name: 'Karlo Gonzales',
    phone: '0918-765-4321',
  },
  {
    id: '135',
    address: {
      city: 'Davao City',
      country: 'Philippines',
      state: 'Davao',
      street: '6060 Davao Street',
    },
    createdAt: new Date().getTime(),
    email: 'lucinda.tan@gmail.com',
    name: 'Lucinda Tan',
    phone: '0920-123-4567',
  },
  {
    id: '136',
    address: {
      city: 'Cebu City',
      country: 'Philippines',
      state: 'Cebu',
      street: '7070 Osmeña Boulevard',
    },
    createdAt: new Date().getTime(),
    email: 'marcial.delacruz@gmail.com',
    name: 'Marcial dela Cruz',
    phone: '0915-678-9012',
  },
  {
    id: '137',
    address: {
      city: 'Quezon City',
      country: 'Philippines',
      state: 'Metro Manila',
      street: '8080 Katipunan Avenue',
    },
    createdAt: new Date().getTime(),
    email: 'natalia.garcia@gmail.com',
    name: 'Natalia Garcia',
    phone: '0921-234-5678',
  },
  {
    id: '138',
    address: {
      city: 'Cagayan de Oro',
      country: 'Philippines',
      state: 'Misamis Oriental',
      street: '9090 Carmen Market',
    },
    createdAt: new Date().getTime(),
    email: 'octavio.rodriguez@gmail.com',
    name: 'Octavio Rodriguez',
    phone: '0916-345-6789',
  },
  {
    id: '139',
    address: {
      city: 'Mandaluyong City',
      country: 'Philippines',
      state: 'Metro Manila',
      street: '1010 Shaw Boulevard',
    },
    createdAt: new Date().getTime(),
    email: 'patricia.santos@gmail.com',
    name: 'Patricia Santos',
    phone: '0925-678-9012',
  },
  {
    id: '140',
    address: {
      city: 'Makati City',
      country: 'Philippines',
      state: 'Metro Manila',
      street: '1212 Ayala Avenue',
    },
    createdAt: new Date().getTime(),
    email: 'quintin.gonzales@gmail.com',
    name: 'Quintin Gonzales',
    phone: '0913-456-7890',
  },
  {
    id: '141',
    address: {
      city: 'Mandaluyong City',
      country: 'Philippines',
      state: 'Metro Manila',
      street: '1313 Shaw Boulevard',
    },
    createdAt: new Date().getTime(),
    email: 'ramona.santos@gmail.com',
    name: 'Ramona Santos',
    phone: '0912-345-6789',
  },
  {
    id: '142',
    address: {
      city: 'Makati City',
      country: 'Philippines',
      state: 'Metro Manila',
      street: '1414 Pasong Tamo Avenue',
    },
    createdAt: new Date().getTime(),
    email: 'rodrigo.gonzales@gmail.com',
    name: 'Rodrigo Gonzales',
    phone: '0917-890-1234',
  },
  {
    id: '143',
    address: {
      city: 'Davao City',
      country: 'Philippines',
      state: 'Davao',
      street: '1515 Durian Avenue',
    },
    createdAt: new Date().getTime(),
    email: 'susana.tan@gmail.com',
    name: 'Susana Tan',
    phone: '0922-987-6543',
  },
  {
    id: '144',
    address: {
      city: 'Cebu City',
      country: 'Philippines',
      state: 'Cebu',
      street: '1616 Osmeña Boulevard',
    },
    createdAt: new Date().getTime(),
    email: 'ciriaco.delacruz@gmail.com',
    name: 'Ciriaco dela Cruz',
    phone: '0918-765-4321',
  },
  {
    id: '145',
    address: {
      city: 'Quezon City',
      country: 'Philippines',
      state: 'Metro Manila',
      street: '1717 EDSA',
    },
    createdAt: new Date().getTime(),
    email: 'cassandra.garcia@gmail.com',
    name: 'Cassandra Garcia',
    phone: '0920-123-4567',
  },
  {
    id: '146',
    address: {
      city: 'Cagayan de Oro',
      country: 'Philippines',
      state: 'Misamis Oriental',
      street: '1818 LKK Street',
    },
    createdAt: new Date().getTime(),
    email: 'camilo.rodriguez@gmail.com',
    name: 'Camilo Rodriguez',
    phone: '0915-678-2345',
  },
  {
    id: '147',
    address: {
      city: 'Mandaluyong City',
      country: 'Philippines',
      state: 'Metro Manila',
      street: '1919 Pioneer Street',
    },
    createdAt: new Date().getTime(),
    email: 'romina.santos@gmail.com',
    name: 'Romina Santos',
    phone: '0921-345-6789',
  },
  {
    id: '148',
    address: {
      city: 'Makati City',
      country: 'Philippines',
      state: 'Metro Manila',
      street: '2020 Pasay Road',
    },
    createdAt: new Date().getTime(),
    email: 'reynaldo.gonzales@gmail.com',
    name: 'Reynaldo Gonzales',
    phone: '0916-456-7890',
  },
  {
    id: '149',
    address: {
      city: 'Davao City',
      country: 'Philippines',
      state: 'Davao',
      street: '2121 Roxas Avenue',
    },
    createdAt: new Date().getTime(),
    email: 'salvador.tan@gmail.com',
    name: 'Salvador Tan',
    phone: '0925-567-8901',
  },
  {
    id: '150',
    address: {
      city: 'Cebu City',
      country: 'Philippines',
      state: 'Cebu',
      street: '2222 Capitol Site',
    },
    createdAt: new Date().getTime(),
    email: 'celeste.delacruz@gmail.com',
    name: 'Celeste dela Cruz',
    phone: '0913-567-8901',
  },
];
