note = {
	constructor(Hz) {
		this.freq = Hz
	}
	,
	get note() {

	}
	,
	set note() {
		
	}
}


function freq_to_note()
{
	init(Hz) {
		this.freq = Hz
	}
	,
	update() {
		var lnote = lognote( this.freq );
		var oct = Math.floor( lnote );
		var this.cents = 1200 * ( lnote - oct );

		var note_table = "A A#B C C#D D#E F F#G G#";

		var offset = 50.0;
		var x = 2;

		if ( this.cents < 50 ) {
			this.note = "A ";
		} else if ( this.cents >= 1150 ) {
			this.note = "A ";
			this.cents -= 1200;
			oct++;
		} else {
			for ( j = 1 ; j <= 11 ; j++ ) {
				if ( this.cents >= offset && this.cents < (offset + 100 ) ) {
					this.note = note_table.charAt( x ) + note_table.charAt( x + 1 );
					this.cents -= ( j * 100 );
					break;
				}
				offset += 100;
				x += 2;
			}
		}

		this.cents = Math.round ( this.cents, 2 );
		this.note = this.note + (oct + "" );	
		
		return;
	}
}

function lognote( freq )
{
	var oct = ( Math.log ( freq ) - Math.log ( 440 ) ) / Math.log ( 2 ) + 4.0;

	return oct;
}

function note(freq) {
	this.freq
}