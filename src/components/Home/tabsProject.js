'use client';

import React, { useState } from 'react';

import { useTabs } from '@/components/Hooks/useTabs';
import { FramerProject } from '@/components/Home/lib/framerProject';

import Industry from './industry_project';
import Family from './family_project';
import Agriculture from './agriculture_project';

const TabsProject = () => {
  const [hookProps] = useState({
    tabs: [
      {
        label: 'Công nghiệp',
        children: <Industry />,
        id: 'Industry',
        image: "",
      },
      {
        label: 'Hộ gia đình',
        children: <Family />,
        id: 'Family',
        image: "",
      },
      {
        label: 'Nông nghiệp',
        children: <Agriculture />,
        id: 'Agriculture',
        image: "",
      },
    ],
    initialTabId: 'Matches',
  });
  const framerProject = useTabs(hookProps);

  return (
    <>
      <FramerProject.TabsProject {...framerProject.tabProps} />
      <div className=" text-center text-white ">
        {framerProject.selectedTab.children}
      </div>
    </>
  );
};

export default TabsProject;