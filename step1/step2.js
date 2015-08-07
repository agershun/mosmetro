var fs = require('fs');

var linesText = fs.readFileSync('lines.md').toString();
var lns = linesText.split('\n|-');
var lines = [];

lns.forEach(function(lt){
	var line = {};
	var ss = lt.split('| ');
	line.id = ss[1].split('|')[1].split('}')[0];
	line.name = ss[2].split('|')[1].split(']')[0];
	lines.push(line);
});

var stationsText = fs.readFileSync('stations.md').toString();
var sts = stationsText.split('\n|-');
var stations = [];

sts.forEach(function(st, idx){
	var station = {};
	var ss = st.split('\n|');
	station.id = idx;
	station.line = ss[0].split('bull|')[1].split('}')[0];
	station.name = ss[1].replace(/[\[\]\{\}]/g,'').replace(/mms\|/g,'');
	station.name = station.name.split('|')[0];
	station.opened = ss[4];
	station.elevation = eval(ss[5].split('|')[1].replace(' m','').replace('−','-')); 
	station.type = ss[6];
	station.latitude = +ss[7].split('|')[1];
	station.longitude = +ss[7].split('|')[2];

	station.transfer = ss[3].split('{{MOSMETRO-bull|');
	station.transfer.shift();

	station.transfer = station.transfer.map(function(st){
		var tr = {};
		tr.line = st.split('||')[0];
		tr.name = st.split('||')[1];
		tr.name = tr.name.split(' (')[0];
		tr.name = tr.name.split('}}')[0];
		return tr;
	});

	stations.push(station);
});

stations.forEach(function(st){
	st.transfer.forEach(function(tr){
		var foundid = undefined;
		var ast = stations.filter(function(stt){
			return stt.line == tr.line && stt.name == tr.name;
		});
		if(ast.length == 1) {
			tr.id = ast[0].id;
		};
	});
});

//console.log(stations);

// stations.filter(function(st){return st.transfer.length>0}).forEach(function(st){
// 	console.log(st);
// });

console.log('var stations =',JSON.stringify(stations));
