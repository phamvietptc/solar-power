'use client';

import React, { useState } from 'react';

import { useTabs } from '@/hooks/useTabs';
import { Framer } from '@/lib/home/framer';

import Industry from './industry';
import Family from './family';
import Agriculture from './agriculture';

const Tabs = () => {
  const [hookProps] = useState({
    tabs: [
      {
        label: 'Công nghiệp',
        children: <Industry />,
        id: 'Industry',
        image: "/images/home/enterprise.png",
      },
      {
        label: 'Hộ gia đình',
        children: <Family />,
        id: 'Family',
        image: "/images/home/family.png",
      },
      {
        label: 'Nông nghiệp',
        children: <Agriculture />,
        id: 'Agriculture',
        image: "/images/home/agriculture.png",
      },
    ],
    initialTabId: 'Matches',
  });
  const framer = useTabs(hookProps);

  return (
    <>
      <Framer.Tabs {...framer.tabProps} />
      <div className=" pt-10 w-full text-left float-left before:content-['.'] before:overflow-hidden before:invisible before:w-0 before:h-0 after:clear-both ">
        {framer.selectedTab.children}
      </div>
    </>
  );
};

export default Tabs;