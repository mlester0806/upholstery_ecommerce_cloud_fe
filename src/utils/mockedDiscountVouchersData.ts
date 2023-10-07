import { subDays, subHours } from 'date-fns';

const now = new Date();

export const discountVouchersData = [
  {
    id: '5e887ac47eed253091be10cb',
    voucher_id: 'VOU-COD-0001',
    name: '30% Off No Minimum Spend',
    description: 'This is a 30% Off no minimum spend voucher.',
    price_discount: 30,
    price_discount_mode: '%',
    shipping_discount: 0,
    shipping_discount_mode: 'N/A',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    voucher_id: 'VOU-COD-0002',
    name: 'Free Shipping Nationwide',
    description: 'This is a free shipping nationwide voucher.',
    price_discount: 0,
    price_discount_mode: 'N/A',
    shipping_discount: 50,
    shipping_discount_mode: '₱',
    createdAt: subDays(subHours(now, 4), 2).getTime(),
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    voucher_id: 'VOU-COD-0003',
    name: '₱100 Off New User',
    description: 'This is a ₱100 Off New User voucher.',
    price_discount: 100,
    price_discount_mode: '₱',
    shipping_discount: 0,
    shipping_discount_mode: 'N/A',
    createdAt: subDays(subHours(now, 11), 2).getTime(),
  },
  {
    id: '5e86809283e28b96d2d38537',
    voucher_id: 'VOU-COD-0004',
    name: '₱50 Off New/Existing User',
    description: 'This is a ₱100 Off New User voucher.',
    price_discount: 50,
    price_discount_mode: '₱',
    shipping_discount: 0,
    shipping_discount_mode: 'N/A',
    createdAt: subDays(subHours(now, 7), 3).getTime(),
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    voucher_id: 'VOU-COD-0005',
    name: '₱200 Off Selected Items',
    description: 'This is a ₱200 Off Selected Items voucher.',
    price_discount: 200,
    price_discount_mode: '₱',
    shipping_discount: 0,
    shipping_discount_mode: 'N/A',
    createdAt: subDays(subHours(now, 5), 4).getTime(),
  },
  {
    id: '5e887a1fbefd7938eea9c981',
    voucher_id: 'VOU-COD-0006',
    name: '₱30 Off Free Shipping',
    description: 'This is a ₱30 Off Free Shipping voucher.',
    price_discount: 0,
    price_discount_mode: 'N/A',
    shipping_discount: 30,
    shipping_discount_mode: '₱',
    createdAt: subDays(subHours(now, 15), 4).getTime(),
  },
  {
    id: '120',
    voucher_id: 'VOU-COD-0007',
    name: '₱20 Off Free Shipping',
    description: 'This is a ₱20 Off Free Shipping voucher.',
    price_discount: 0,
    price_discount_mode: 'N/A',
    shipping_discount: 20,
    shipping_discount_mode: '₱',
    createdAt: subDays(subHours(now, 19), 4).getTime(),
  },
];