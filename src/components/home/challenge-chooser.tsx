"use client";

import { createElement } from 'react';
import { Link } from 'react-router-dom';
import { Tabs } from '@heroui/react';

import type { CallengeProps, DifficultyChooserProps } from '../challenge-config';
import { Difficulty, challengesDt } from '../challenge-config';

export function DifficultyChooser({currDifficulty, setDifficulty}: DifficultyChooserProps) {
  return (
    <div className="flex flex-col p-2">
      <Tabs className="w-full" selectedKey={currDifficulty} onSelectionChange={key => setDifficulty(key)}>
        <Tabs.ListContainer>
          <Tabs.List aria-label="Options">
            <Tabs.Tab id={Difficulty.easy} key={Difficulty.easy}>
              Easy
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab id={Difficulty.medium} key={Difficulty.medium}>
              Medium
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab id={Difficulty.hard} key={Difficulty.hard}>
              Hard
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab id={Difficulty.expert} key={Difficulty.expert}>
              Expert
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab id={Difficulty.custom} key={Difficulty.custom}>
              Custom
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>
      </Tabs>
    </div>
  );
}

function Callenge({label, desc, to, icon}: CallengeProps) {
  return (
    <>
      <Link className="menu-item" to={to}>
        <div className="menu-icon">
          {createElement(icon)}
        </div>
        <div className="menu-content">
          <span className="challenge-label">{label}</span>
          <span>{desc}</span>
        </div>
      </Link>
      <div className="h-border" />
    </>
  )
}

export function ChallengeChooser() {
  return (
    <div className="flex flex-col p-2">
      <div>
        Choose a challenge
      </div>
      <div className="h-border" />
      {
        challengesDt.map(
          ({name, label, desc, to, icon}) => Callenge({name, label, desc, to, icon})
        )
      }
    </div>
  );
}