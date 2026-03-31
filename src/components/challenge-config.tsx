import type { Dispatch, SetStateAction } from 'react';
import type { IconType } from 'react-icons';
import { TbCircleDashedNumber6 } from 'react-icons/tb';

import { range } from '../utils';

export type CallengeProps = {
  name: string,
  label: string,
  desc: string,
  to: string,
  icon: IconType,
}

export const challengesDt: Array<CallengeProps> = [
  {name: "digits",   label: "Digits",   desc: "Memorize single digits",                              to: "/digits",   icon: TbCircleDashedNumber6},
  {name: "numbers",  label: "Numbers",  desc: "Memorize multi-digit numbers",                        to: "/numbers",  icon: TbCircleDashedNumber6},
  {name: "words",    label: "Words",    desc: "Memorize words",                                      to: "/words",    icon: TbCircleDashedNumber6},
  {name: "grid",     label: "Grid",     desc: "Memorize cells on a grid",                            to: "/grid",     icon: TbCircleDashedNumber6},
  {name: "shapes",   label: "Shapes",   desc: "Memorize shapes and colors",                          to: "/shapes",   icon: TbCircleDashedNumber6},
  {name: "marathon", label: "Marathon", desc: "Memorize digits, numbers and words",                  to: "/marathon", icon: TbCircleDashedNumber6},
  {name: "map",      label: "Map",      desc: "Memorize a path on a map and walk the path",          to: "/map",      icon: TbCircleDashedNumber6},
  {name: "faces",    label: "Faces",    desc: "Memorize facial features and match them to names",    to: "/faces",    icon: TbCircleDashedNumber6},
]

export const Difficulty = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
  expert: "Expert",
  custom: "Custom",
} as const

export type DifficultyType = typeof Difficulty[keyof typeof Difficulty]

export const Order = {
  inOrder: "InOrder",
  reversed: "Reversed",
  ascending: "Ascending",
  descending: "Descending"
} as const

export type DifficultyChooserProps = {
  currDifficulty: DifficultyType,
  setDifficulty: Dispatch<SetStateAction<DifficultyType>>
}

const orders = [Order.inOrder, Order.reversed, Order.ascending, Order.descending] as const
const notInOrder = [Order.reversed, Order.ascending, Order.descending] as const

export const WordStructre = {
  atomic: "Atomic",
  withAffixes: "WithAffixes"
} as const

export const Colors = {
  red: "red",
  green: "green",
  blue: "blue",
  yellow: "yellow",
  orange: "orange",
  pink: "pink",
  cyan: "cyan",
  purple: "purple",
  brown: "brown",
  gray: "gray"
} as const

export const ShapeType = {
  regular: "regular",
  irregular: "irregular"
} as const

export const digitsParams = {
  [Difficulty.easy]:   [5, Order.inOrder],
  [Difficulty.medium]: [7, Order.inOrder],
  [Difficulty.hard]:   [
    [range(7, 10), Order.inOrder],
    [range(5, 6), notInOrder]
  ],
  [Difficulty.expert]: [range(7, 10), orders],
  [Difficulty.custom]: [range(5, 10), orders]
} as const

export const numbersParams = {
  [Difficulty.easy]:   [3, 2, Order.inOrder],
  [Difficulty.medium]: [
    [3, 3, Order.inOrder],
    [range(4, 5), 2, Order.inOrder]
  ],
  [Difficulty.hard]:   [
    [3, 4, Order.inOrder],
    [4, 3, Order.inOrder],
    [6, 2, Order.inOrder]
  ],
  [Difficulty.expert]: [
    [3, 5, Order.inOrder],
    [4, 4, Order.inOrder],
    [5, 3, Order.inOrder],
    [8, 2, Order.inOrder],
    [4, 3, notInOrder],
    [3, 4, notInOrder]
  ],
  [Difficulty.custom]: [range(3, 10), range(2, 5), orders]
} as const

export const wordsParams = {
  [Difficulty.easy]:   [5, range(3, 5), WordStructre.atomic],
  [Difficulty.medium]: [7, range(3, 7), WordStructre.atomic],
  [Difficulty.hard]:   [10, range(3, 8), WordStructre.atomic],
  [Difficulty.expert]: [12, range(3, 8), [WordStructre.atomic, WordStructre.withAffixes]],
  [Difficulty.custom]: [range(5, 12), range(3, 8), [WordStructre.atomic, WordStructre.withAffixes]]
} as const

export const gridParams = {
  [Difficulty.easy]:   [5, 5, 0, 1],
  [Difficulty.medium]: [7, 10, 0.1, 1],
  [Difficulty.hard]:   [8, 16, 0.1, 1],
  [Difficulty.expert]: [9, 8, 0.1, 4],
  [Difficulty.custom]: [range(5, 10), range(5, 20), range(0, 1, 0.01), range(1, 4)]
} as const

export const shapesParams = {
  [Difficulty.easy]:   [],
  [Difficulty.medium]: [],
  [Difficulty.hard]:   [],
  [Difficulty.expert]: [],
  [Difficulty.custom]: [range(3, 10), range(0, 10), range(4, 10), [ShapeType.regular, ShapeType.irregular]]
} as const

export const marathonParams = {
  [Difficulty.easy]:   [],
  [Difficulty.medium]: [],
  [Difficulty.hard]:   [],
  [Difficulty.expert]: [],
  [Difficulty.custom]: [range(5, 20), range(1, 5)]
} as const

export const mapParams = {
  [Difficulty.easy]:   [],
  [Difficulty.medium]: [],
  [Difficulty.hard]:   [],
  [Difficulty.expert]: [],
  [Difficulty.custom]: []
} as const

export const facesParams = {
  [Difficulty.easy]:   [],
  [Difficulty.medium]: [],
  [Difficulty.hard]:   [],
  [Difficulty.expert]: [],
  [Difficulty.custom]: []
} as const