'use client';

import React, { useState } from 'react';

import { useTabs } from '@/src/components/Hooks/useTabs';
import { FramerProduct } from '@/src/components/Home/lib/framerProduct';

import SolarPanel from './solar_panel';
import Inverter from './inverter';
import HybridInverter from './hybrid_inverter';
import SolarLight from './solar_light'

const TabsProduct = () => {
  const [hookProps] = useState({
    tabs: [
      {
        label: 'Solar Panel',
        children: <SolarPanel />,
        id: 'SolarPanel',
        image: "/images/home/solar_panel.png",
      },
      {
        label: 'Inverter',
        children: <Inverter />,
        id: 'Inverter',
        image: "/images/home/inverter.png",
      },
      {
        label: 'Hybrid Inverter',
        children: <HybridInverter />,
        id: 'HybridInverter',
        image: "/images/home/hybrid_inverter.png",
      },
      {
        label: 'Solar Light',
        children: <SolarLight />,
        id: 'SolarLight',
        image: "/images/home/solar_light.png",
      },
    ],
    initialTabId: 'Matches',
  });
  const framerProduct = useTabs(hookProps);

  return (
    <>
      <FramerProduct.Tabs {...framerProduct.tabProps} />
      <div className=" w-full md:w-70% max-h-300px md:max-h-400px relative overflow-hidden float-left px-10px before:content-['.'] before:overflow-hidden before:invisible before:w-0 before:h-0 after:clear-both ">
        {framerProduct.selectedTab.children}
      </div>
    </>
  );
};

export default TabsProduct;