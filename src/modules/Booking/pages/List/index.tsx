import PageHeader from '@commons/components/PageHeader';
import TableHeader from '@commons/components/TableHeader';
import { Table } from 'antd';
import React from 'react';
import FilterBooking from '@modules/Booking/containers/FilterBooking';
import { ColumnsType } from 'antd/lib/table/Table';
import useBookings from '@modules/Booking/hooks/useBookings';
import UserRowActions from './RowActions';
import { BookingFields } from '@modules/Booking/redux/action-types';
// import useDetailBookings from '@modules/Booking/hooks/useDetailBookings';

export default function ListBookingPage() {
  const { loading, items } = useBookings();
  // const { loadingDetail, data } = useDetailBookings('+84979353691', 'Jzo88PrImdQeAcXOmmHj');
  const rowKey = (item: any) => `${item.id}`;

  const columns: ColumnsType<BookingFields> = [
    {
      title: 'Người đặt',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'customerPhone',
      key: 'customerPhone',
    },
    {
      title: 'Thợ cắt',
      dataIndex: 'barberName',
      key: 'barberName',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'salonAddress',
      key: 'salonAddress',
    },
    {
      title: 'Slot',
      dataIndex: 'slot',
      key: 'slot',
    },
    {
      title: 'Thời gian',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Trạng thái',
      key: 'done',
      render: (record: BookingFields) => {
        if (record.done) {
          return 'Đã hoàn thành';
        } else {
          return 'Chưa hoàn thành';
        }
      },
    },
    {
      title: '',
      key: 'action',
      width: 60,
      render: (record: any) => <UserRowActions record={record} />,
    },
  ];

  const routes = [
    {
      path: '/',
      breadcrumbName: 'Trang chủ',
    },
    {
      path: '/booking',
      breadcrumbName: 'Quản lý lịch đã đặt',
    },
  ];

  return (
    <>
      <PageHeader title="Quản lý lịch đã đặt" breadcrumb={{ routes }} />
      <FilterBooking />
      <TableHeader title="Danh sách lịch đã đặt">
        <Table columns={columns} dataSource={[...items]} loading={loading} rowKey={rowKey}></Table>
      </TableHeader>
    </>
  );
}
