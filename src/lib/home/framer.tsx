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

const Tabs = ({
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
      className=" w-full flex flex-wrap px-10px "
      onPointerLeave={(e) => setHoveredTabIndex(null)}
    >
      {tabs.map((item, i) => {
        const isActive = hoveredTabIndex === i || selectedTabIndex === i;

        return (
          <motion.button
            key={i}
            className={classNames(
              'w-1/2 text-lg relative float-left',
              {
                'text-slate-900 ': !isActive, // Default color for non-active tabs
                'text-blue-600': isActive, // Color for active tabs
                'filter-none': !isActive,
              },
            )}
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
            <div className=" active:text-blue-600 absolute w-full h-full top-0 left-0 bg-transparent border border-solid border-transparent bg-slate-700 cursor-pointer py-10px px-5 align-baseline font-normal normal-case leading-normal "></div>
            <div className=" p-5 text-center border border-solid border-white m-2px bg-white ">
              <h4 className=" mb-25px text-sm ">{item.label}</h4>
              <img src={item.image} alt="icon" className={classNames('w-auto h-10 brightness-0 inline-block', { 'filter-none': isActive, },)} />
              <span className=" bg-transparent w-10px mx-auto cursor-pointer absolute bottom-10 right-25px "></span>
            </div>
          </motion.button>
        );
      })}

      {/* <AnimatePresence>
        {hoveredRect && navRect && (
          <motion.div
            key={'hover'}
            className="absolute p-1 mb-1 z-10 top-0 left-0 rounded-md bg-zinc-200 dark:bg-zinc-800 "
            initial={{
              x: hoveredRect.left - navRect.left,
              y: hoveredRect.top - navRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 0,
            }}
            animate={{
              x: hoveredRect.left - navRect.left,
              y: hoveredRect.top - navRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 1,
            }}
            exit={{
              x: hoveredRect.left - navRect.left,
              y: hoveredRect.top - navRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 0,
            }}
            transition={transition}
          />
        )}
      </AnimatePresence> */}

      {/* {selectedRect && navRect && (
        <motion.div
          className={
            'absolute z-10 bottom-0 left-0.5 h-[3px] bg-zinc-700 dark:bg-zinc-200'
          }
          initial={false}
          animate={{
            width: selectedRect.width * 0.8,
            x: `calc(${selectedRect.left - navRect.left}px + 10%)`,
            opacity: 1,
          }}
          transition={transition}
        />
      )} */}
    </nav>
  );
};

export const Framer = { Tabs };
