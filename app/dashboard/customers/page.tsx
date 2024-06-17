import CustomersTable from '@/app/ui/customers/table';
import { fetchCustomers } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer',
};

export default async function Page() {
  const customerData = await fetchCustomers();
  console.log('customerdata', customerData);
}
