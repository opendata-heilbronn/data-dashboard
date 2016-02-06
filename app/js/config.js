//-----------------------------------------------------------------------

var config = config || {
	city: "Berlin",
	menu: {
		'cards': true,
		'build': true,
		'mail': 'thomas@tursics.de',
		'twitter': 'https://twitter.com/tursics/',
		'github': 'https://github.com/tursics/data-dashboard/'
	},
	data: {
//		'feed': 'http://daten.berlin.de/datensaetze/rss.xml'
		'feed': 'http://tursics.de/sample/data-dashboard/berlin/rss.php'
	},
	cards: [
		'berlin/berlin-opendata.json',
		'berlin/code-for-berlin.json',
		'berlin/help.json',

		// datasets from http://daten.berlin.de/datensaetze

		// January 2016
		'berlin/doppelhaushalt-20162017.json',
		'berlin/angebote-zur-unterstuetzung-von-fluechtlingen.json',
		'berlin/aktuelle-ausschreibungen-nach-vol-vob-vof-oder-fuer-interessenbekundungsverfahren-0.json',
		'berlin/bezirksamtsbeschluesse.json',
		'berlin/angebote-fuer-kinder-jugend-und-familie.json',
		'berlin/kamerale-monatsdaten-bezirk-lichtenberg-2015.json',
		'berlin/haushaltsplan-des-bezirksamtes-lichtenberg-von-berlin-fuer-20162017.json',
		'berlin/wochen-und-troedelmaerkte.json',
		'berlin/daten-zur-arbeitslosigkeit-fuer-opendata.json',
		'berlin/beschaeftigungsdaten-fuer-opendata.json',

		// and many more data from 2015 and older
	]
};

//-----------------------------------------------------------------------
