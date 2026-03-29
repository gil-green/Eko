"use client";

import Grid from '../grid-challenge/grid'

export default function ChallengeChooser() {
  return (
    <div className="flex flex-col p-2">
      {/* <div>
        Choose a challenge
      </div> */}
      <Grid size={5} />
    </div>
  );
}