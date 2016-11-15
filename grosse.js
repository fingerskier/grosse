module.exports = {
	get tone() {
		return toneToNote(this._tone)
	}
	,
}


function freq_to_note( freq )
{
	var freq = freq || 440;

	var lnote = lognote( freq );
	var oct = Math.floor( lnote );
	var cents = 1200 * ( lnote - oct );

	var note_table = "A A#B C C#D D#E F F#G G#";

	var offset = 50.0;
	var x = 2;

	if ( cents < 50 ) {
		note = "A ";
	} else if ( cents >= 1150 ) {
		note = "A ";
		cents -= 1200;
		oct++;
	} else {
		for ( j = 1 ; j <= 11 ; j++ ) {
			if ( cents >= offset && cents < (offset + 100 ) ) {
				note = note_table.charAt( x ) + note_table.charAt( x + 1 );
				cents -= ( j * 100 );
				break;
			}
			offset += 100;
			x += 2;
		}
	}

	this.cents = Math.round ( cents, 2 );
	this.note = note + (oct + "" );	
	
	return;
}

function lognote( freq )
{
	var oct = ( Math.log ( freq ) - Math.log ( 440 ) ) / Math.log ( 2 ) + 4.0;

	return oct;
}


function converterism(note) {
	var note = note + '  '

	var notePos = notes.indexOf(note[0])

	

	if (Number.isInteger(note)) {
		if (note >= 10) {	// assume this to be a frequency

		} else {	// assume they've given the tone number
			this._tone = note
		}
	} else {
		var notePos = notes_old.indexOf(note[0])

	}
	return noteToTone()
}
