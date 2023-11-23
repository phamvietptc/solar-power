import React, { useEffect, useRef, useState } from 'react';

import { Tab } from '@/hooks/useTabs';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

const transition = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.15,
};

type Props = {
  selectedTabIndex: number;
  tabs: Tab[];
  setSelectedTab: (input: [number, number]) => void;
};

const TabsProject = ({
  tabs,
  selectedTabIndex,
  setSelectedTab,
}: Props): JSX.Element => {
  const [buttonRefs, setButtonRefs] = useState<Array<HTMLButtonElement | null>>(
    [],
  );

  useEffect(() => {
    setButtonRefs((prev) => prev.slice(0, tabs.length));
  }, [tabs.length]);

  const navRef = useRef<HTMLDivElement>(null);
  const navRect = navRef.current?.getBoundingClientRect();

  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
  const hoveredRect =
    buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect();

  return (
    <nav
      ref={navRef}
      className=" text-center mb-30px "
      onPointerLeave={(e) => setHoveredTabIndex(null)}
    >
      {tabs.map((item, i) => {
        const isActive = hoveredTabIndex === i || selectedTabIndex === i;

        return (
          <motion.button
            key={i}
            ref={(el) => (buttonRefs[i] = el)}
            onPointerEnter={() => {
              setHoveredTabIndex(i);
            }}
            onFocus={() => {
              setHoveredTabIndex(i);
            }}
            onClick={() => {
              setSelectedTab([i, i > selectedTabIndex ? 1 : -1]);
            }}
          >
            <div className=" flex flex-wrap justify-center ">
              <div className=" float-left mx-2 mb-10px ">
                <div className={classNames(
                  'min-w-auto py-5px px-10px text-xs rounded-23px border border-solid border-transparent cursor-pointer',
                  {
                    'bg-blue-600 shadow-rgba': !isActive, // Default color for non-active tabs
                    'bg-orange': isActive, // Color for active tabs
                  },
                )}>{item.label}</div>
              </div>
            </div>
          </motion.button>
        );
      })}
    </nav>
  );
};

export const FramerProject = { TabsProject };
