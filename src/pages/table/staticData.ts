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

import { TestDataFormat } from './common';

export const NO_DATA: TestDataFormat[] = [];

export const TABLE_DEMO_DATA: TestDataFormat[] = [
  {
    name: 'Alicia Sanford',
    age: 51,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Dallas Kuhn',
    age: 12,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Susan Daugherty MD',
    age: 39,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'PersonWithReallyLongNameToTestLongCells',
    age: 32,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Karen Huel',
    age: 37,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Dustin Hudson PhD',
    age: 83,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Ken Kessler',
    age: 60,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Jonathon Graham',
    age: 10,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Joanne Schinner',
    age: 68,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Tony Runolfsson',
    age: 86,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Courtney McClure',
    age: 21,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Casey Rippin',
    age: 98,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Ms. Renee Sawayn',
    age: 49,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Glenn Grady V',
    age: 88,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Virginia Marvin Jr.',
    age: 13,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Blanca Rutherford',
    age: 37,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Amy Kuphal',
    age: 22,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Wesley Kessler',
    age: 11,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Benjamin Buckridge',
    age: 91,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: "Doreen O'Reilly",
    age: 60,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Beth Kihn',
    age: 14,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Tara Heathcote',
    age: 49,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Geraldine Walsh',
    age: 20,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Mr. Jennie Will',
    age: 11,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Theodore Metz',
    age: 68,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Josefina Nikolaus',
    age: 63,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Allan Schimmel',
    age: 52,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Donald Weissnat',
    age: 59,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Ms. Travis Lemke',
    age: 18,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Eddie Nolan',
    age: 43,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Shawna Kassulke',
    age: 52,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Simon Brekke',
    age: 51,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Cynthia Rodriguez',
    age: 77,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Celia Casper',
    age: 33,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Virginia Harber',
    age: 48,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Marcos Johns',
    age: 13,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Felix Hauck',
    age: 34,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Ismael Moore',
    age: 17,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Jerry Conn',
    age: 62,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Cody Lowe',
    age: 37,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Angela Runte III',
    age: 97,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Todd Hammes',
    age: 49,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Marguerite Grant',
    age: 31,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Melinda Davis',
    age: 55,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Mamie Mante DVM',
    age: 96,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Angelo Johns',
    age: 89,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Kelli Wilderman',
    age: 100,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Catherine McClure',
    age: 69,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Ms. Justin Zboncak',
    age: 10,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Alonzo Leuschke',
    age: 54,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Fredrick Hagenes',
    age: 25,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Gertrude Konopelski',
    age: 30,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Shawn Mosciski',
    age: 13,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Mack Gibson',
    age: 57,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Mrs. Joann Ward',
    age: 98,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Sheldon Jakubowski',
    age: 37,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Lorena Runte',
    age: 13,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Al Gerhold',
    age: 35,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Lori MacGyver',
    age: 37,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Dominic Kris',
    age: 88,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Lynn Kuvalis',
    age: 9,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Virginia Walter',
    age: 92,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Antonia Nolan',
    age: 17,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Cheryl Quitzon',
    age: 43,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Ismael Harris',
    age: 72,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Mr. Jim Cole',
    age: 92,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Melvin Baumbach',
    age: 38,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Marcus King',
    age: 72,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Miss Courtney Nienow',
    age: 64,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Lorenzo Marks',
    age: 25,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Claire Torp',
    age: 20,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Robyn Mitchell',
    age: 86,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Austin Ankunding',
    age: 42,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Peggy Sauer',
    age: 98,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Mike Nikolaus',
    age: 15,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Matthew Russel',
    age: 45,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Lewis Ruecker DDS',
    age: 56,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Dave Abbott',
    age: 34,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Timothy Blanda',
    age: 79,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Emily Ullrich',
    age: 52,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Ebony Ward',
    age: 46,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Jacquelyn Goodwin',
    age: 49,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Moses Ryan',
    age: 96,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Raymond Little',
    age: 34,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Shawn Haley',
    age: 53,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Celia Ritchie',
    age: 83,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: "Wendy O'Connell V",
    age: 91,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Marcos Runolfsson',
    age: 33,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Gladys Pagac',
    age: 91,
    cypherCommand: 'MATCH (n) RETURN n LIMIT 5',
  },
  {
    name: 'Marta Stokes',
    age: 87,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: "Kathryn O'Connell",
    age: 99,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Edwin Bailey',
    age: 36,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Delia Gutkowski',
    age: 82,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
  {
    name: 'Stella Aufderhar',
    age: 55,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Lucy Botsford',
    age: 31,
    cypherCommand: 'CALL dbms.showCurrentUser()',
  },
  {
    name: 'Faye Sanford',
    age: 36,
    cypherCommand: 'MATCH (n:Person) WHERE n.born=1964 RETURN n.name AS name',
  },
];

// To be used for non-paginated Table instances
export const PRUNED_TABLE_DEMO_DATA = TABLE_DEMO_DATA.slice(0, 10);