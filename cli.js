#!/usr/bin/env node
'use strict';
const meow = require('meow');
const plur = require('plur');

const cli = meow(`
			Usage
				$ plur <word>
			Example
				$ plur puppy
				puppies
`);

if (cli.input.length === 0) {
	console.error('Please specify a word');
	process.exit(1);
}

console.log(plur(cli.input[0]));
