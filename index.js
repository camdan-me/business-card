#!/usr/bin/env node

(async () => {
	const Chalk = await import('chalk');
	const Boxen = await import('boxen');

	const chalk = Chalk.default;
	const boxen = Boxen.default;

	const text = `
-------------------------
|                       |
|          ${chalk.hex('eb5951').bold('////')}         |
|      ${chalk.hex('eb5951').bold('////////////')}     |
|     ${chalk.hex('f8d878').bold('///')}${chalk.hex('eb5951').bold('////////')}       |
|    ${chalk.hex('f8d878').bold('///////')}            |
|      ${chalk.hex('f8d878').bold('///')}${chalk.hex('5ab4c7').bold('////////')}      |
|      ${chalk.hex('5ab4c7').bold('////////////')}     |
|          ${chalk.hex('5ab4c7').bold('////')}         |
|                       |
-------------------------


${chalk.hex('5ab4c7').bold('Creative.')} ${chalk.hex('f8d878').bold('Technical.')} ${chalk.hex('eb5951').bold('Problem Solver.')}
I make stuff.


${chalk.white('📧 hello@camdan.me')} | ${chalk.white('🌐 www.camdan.me')} | ${chalk.white('📞 (719) 4-CAMDAN')} | ${chalk.white('🌎 Denver, CO')}


github.com/${chalk.hex('5ab4c7').bold('camdan-me')}
youtube.com/${chalk.hex('5ab4c7').bold('@camdan-me')}
linkedin.com/in/${chalk.hex('5ab4c7').bold('camdan-me')}
facebook.com/${chalk.hex('5ab4c7 ').bold('camdan.m')}
discord.com/users/${chalk.hex('5ab4c7').bold('564859369951461406')}
imdb.com/name/${chalk.hex('5ab4c7').bold('nm13597539')}
codingame.com/profile/${chalk.hex('5ab4c7').bold('966b2676bd9575461fc114fe5c02e2406044334')}

${chalk.black.bgWhite(`
-------------------------------
|                             |
|  █▀▀▀▀▀█ ▄█ ▄▄█▄▄▄ █▀▀▀▀▀█  |
|  █ ███ █ ▄█▀█  ▀█▀ █ ███ █  |
|  █ ▀▀▀ █ ▄ █ ▀█▄▄█ █ ▀▀▀ █  |
|  ▀▀▀▀▀▀▀ ▀ ▀ █▄▀▄█ ▀▀▀▀▀▀▀  |
|  █▀█▀█ ▀▀▀█▀ ▀ ▀ ▄▀ █ ▀ █   |
|  █▀█▄▀▀▀▄ █▄█▀ ▄▀▄▄█▀▀▀ ▀█  |
|  █▀ ██▀▀▀▄█▄▀▄▄▄  ▀▀▄▀▄▀█▀  |
|  █  ▀█ ▀█▀ ▄ ▄█▀▀▄█▄██▀ ▀█  |
|  ▀ ▀▀▀▀▀ ██▀ ▀ ▀▄█▀▀▀█▄▀    |
|  █▀▀▀▀▀█ ▀  █▀ ▄ █ ▀ █▄▀▀▀  |
|  █ ███ █ █▄▀▀▄▄▄▀▀██▀█▄█▄█  |
|  █ ▀▀▀ █ █▄  ▄█▀█▄▄▄▄▄█▀ █  |
|  ▀▀▀▀▀▀▀ ▀▀▀ ▀ ▀   ▀▀▀▀▀▀▀  |
|                             |
-------------------------------
`)}
`

	console.log(chalk.hex('324055').bold(boxen(
		text,
		{
			padding: 1,
			margin: 1,
			borderStyle: 'round',
			title: chalk.hex('5ab4c7').bold('Camdan Mead'),
			titleAlignment: 'center',
			textAlignment: 'center',
		}
	)));
})();