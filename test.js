// converter = {
// 	toAscii() {
// 		return this.C.charCodeAt(0)
// 	}
// 	,
// 	toChar() {
// 		return String.fromCharCode(this.N)
// }

// module.exports = function test(C, N) {
// 	this.C = this.C || C
// 	this.N = this.N || N

// 	this.toAscii = ()=>{
// 		return this.C.charCodeAt(0)
// 	}

// 	this.toChar = ()=>{
// 		return String.fromCharCode(this.N)
// 	}
// }


module.exports = function seq(thing) {
	this._seq = this._seq || []

	if (thing) this._seq.push(thing)

	this.rewind = ()=>{
		return this._seq.pop()
	}

	if (!this.current) {
		Object.defineProperty(this, 'current', {
			get: function () { return this._seq[this._seq.length-1] }
		});
	}

	return this
}
