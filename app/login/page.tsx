'use client';
import Form from '@/components/form/Form';
import React from 'react';
interface TitleFrom {
  title: string;
  pathUrl: string;
}

const page: React.FC<TitleFrom> = ({ title, pathUrl }) => {
  return (
    <div>
      <Form title={'Login'} pathUrl="login" />
    </div>
  );
};

export default page;
