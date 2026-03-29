"use client";

import { Checkbox, Label } from "@heroui/react";

function Cell() {
  return (
    <Checkbox name="cell1" className="justify-center w-fit">
        <Checkbox.Control className="size-10">
          <Checkbox.Indicator>
            {({isSelected}) =>
              isSelected ? (
                <></>
              ) : null
            }
          </Checkbox.Indicator>
        </Checkbox.Control>
      </Checkbox>
  )
}

export default function Grid({size}) {
  const items = Array.from({length: size});
  const gridClassName = `grid grid-cols-${size} gap-2 w-fit`

  return (
    <div className="flex flex-col gap-2 w-fit">
      {
        items.map(
          () => (
            <div className="flex flex-row gap-2 w-fit">
              {
                items.map(
                  () => <Cell />
                )
              }
            </div>
          )
        )
      }
    </div>
  );
}