/**
 *
 *  Copyright (c) "Neo4j"
 *  Neo4j Sweden AB [http://neo4j.com]
 *
 *  This file is part of Neo4j.
 *
 *  Neo4j is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { TABLE_DEMO_DATA } from './staticData';
import { TableOptions } from '@tanstack/table-core';

export type TestDataFormat = {
  name: string;
  age: number;
  cypherCommand: string;
};

export const CommonTableParam = {
  backgrounds: {
    default: 'neo4jBlue',
    values: [
      {
        name: 'neo4jBlue',
        value: 'rgb(var(--colors-primary-40))',
        default: true,
      },
    ],
  },
};

const columnHelper = createColumnHelper<TestDataFormat>();

export const COMMON_COLUMNS = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    minSize: 180,
  }),
  columnHelper.accessor('age', {
    cell: (info) => info.getValue(),
    minSize: 80,
  }),
  columnHelper.accessor('cypherCommand', {
    cell: (info) => info.getValue(),
    minSize: 400,
    size: 400,
  }),
];

export const COMMON_TABLE_PROPS = {
  data: TABLE_DEMO_DATA,
  columns: COMMON_COLUMNS,
  initialState: {
    pagination: {
      pageSize: 5,
    },
  },
  // https://tanstack.com/table/v8/docs/guide/column-sizing#overview
  defaultColumn: {
    minSize: 80,
  },
  enableSorting: false,
  columnResizeMode: 'onChange',
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
} as TableOptions<TestDataFormat>;