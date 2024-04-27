var trees = [
	[
		'              _-_',
		'           /~~   ~~\\',
		'        /~~         _-_',
		'       _-_       /~~   ~~\\',
		'    /~~   ~~\\ /~~         ~~\\',
		' /~~         ~~\\             }',
		'{               }_-     -_  /',
		' \\  _-     -_  /~  \\\\ //  ~',
		'   ~  \\\\ //  ~ |    | |',
		'       | |  // \\\\   | |',
		'~      | | @       // \\\\',
		'      // \\\\          ~'
	],
	[
		'       _-_',
		'    /~~   ~~\\',
		' /~~       ~~~~\\  _-_',
		'{              /~~   ~~\\',
		' \\  _-      /~~~        ~~\\',
		'   ~  \\\\ //{           @   }',
		'       | |  \\  _-     -_  /',
		'       | |    ~  \\\\ //  ~',
		'      // \\\\       | |',
		'~                 | |',
		'                 // \\\\'
	],
	[
		'                        _-_',
		'       _-_           /~~   ~~\\',
		'    /~~   ~~\\      /~~       ~~\\',
		' /~~         ~~\\  _-_      ~~   \`\\',
		'{              /~~   ~~\\          }',
		' \\  _-      /~~         ~~\\/-_  /',
		'   ~  \\\\ //{     @         }  ~',
		'       | |  \\  _-     -_  /',
		'       | |    ~  \\\\ //  ~ |',
		'      // \\\\       | |   | |',
		'                  | |  // \\\\    ~',
		'                 // \\\\'
	]
];

function compileAsciiToString(ascii) {
	var resultString = "";
	for (let line in ascii) resultString += ascii[line].replace(/ /g, "\xa0") + "<br/>";
	return resultString;
}

function loadTrees() {
	let tree_id = "#tree";
	for (let i = 0; i < trees.length; i++) {
		console.log(tree_id + i);
		$(tree_id + i).html(compileAsciiToString(trees[i]))
	};
}