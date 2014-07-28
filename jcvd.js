/*
Jean Claude JS
Copyright (c) 2012 Matthew Teece

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

(function () {
    var karate = this, JeanClaude = JeanClaude || {};
	karate.JeanClaude = JeanClaude;
	JeanClaude.VERSION = '0.0.1';

	//TODO: documentation.
	JeanClaude.splits = function(str, separator, limit){
		return str.split(separator, limit);
	};
	
	//TODO: documentation.
	JeanClaude.dimMak = function() {
		window.open('', '_self', ''); 
		window.close();
	};
	
	JeanClaude.bloodSport = function(selector){
		selector = selector || '*'
		var victims = document.querySelectorAll(selector);
		if (victims) {
			for( var i = 0, l = victims.length; i < l; i++ ) {
				var victim = victims[i];
				victim.style.color = 'red';
				victim.style.backgroundColor = 'DarkRed';
			}
			return;
		}
		alert('You FAIL!!');
	};
		
})();
