KISSY.add("gallery/kcharts/1.1/tools/color/index",function(b){var c=function(d){this.init(d)};function a(d,i){var h=parseInt(d.substring(1,3),16);var g=parseInt(d.substring(3,5),16);var k=parseInt(d.substring(5,7),16);h=parseInt(h*(100+i)/100);g=parseInt(g*(100+i)/100);k=parseInt(k*(100+i)/100);h=(h<255)?h:255;g=(g<255)?g:255;k=(k<255)?k:255;var f=((h.toString(16).length==1)?"0"+h.toString(16):h.toString(16));var e=((g.toString(16).length==1)?"0"+g.toString(16):g.toString(16));var j=((k.toString(16).length==1)?"0"+k.toString(16):k.toString(16));return"#"+f+e+j}b.augment(c,{init:function(d){var e=d&&d.themeCls||"ks-chart-default";this._colors=this.colorCfg[e]||this.colorCfg["ks-chart-default"];this.len=this._colors.length||0},colorCfg:{"ks-chart-default":[{DEFAULT:"#00adef",HOVER:"#1176ba"},{DEFAULT:"#8cc63e",HOVER:"#066839"},{DEFAULT:"#f7941d",HOVER:"#ef3e38"},{DEFAULT:"#ee217e",HOVER:"#cd7db2"},{DEFAULT:"#603814",HOVER:"#8a5e3b"},{DEFAULT:"#662e91",HOVER:"#492062"},{DEFAULT:"#bf1e2d",HOVER:"#ec1d23"}],"ks-chart-analytiks":[{DEFAULT:"#48BAF4",HOVER:"#48BAF4"},{DEFAULT:"#ff7b6c",HOVER:"#ff7b6c"},{DEFAULT:"#999",HOVER:"#999"},{DEFAULT:"#c17e7e",HOVER:"#c17e7e"}],"ks-chart-rainbow":[{DEFAULT:"#4573a7",HOVER:"#5E8BC0"},{DEFAULT:"#aa4644",HOVER:"#C35F5C"},{DEFAULT:"#89a54e",HOVER:"#A2BE67"},{DEFAULT:"#806a9b",HOVER:"#9982B4"},{DEFAULT:"#3e96ae",HOVER:"#56AFC7"},{DEFAULT:"#d9853f",HOVER:"#F49D56"},{DEFAULT:"#808080",HOVER:"#A2A2A2"},{DEFAULT:"#188AD7",HOVER:"#299BE8"},{DEFAULT:"#90902C",HOVER:"#B7B738"},{DEFAULT:"#AFE65D",HOVER:"#C5ED89"}]},removeAllColors:function(){this._colors=[];return this._colors},setColor:function(d){if(!d||!d.DEFAULT||!d.HOVER){b.log('\u7487\u75af\ue195\u7f03\ue1bd\ue11c\u7ead\ue1be\u6b91\u68f0\u6ec6\u58ca\u9359\u509b\u669f\u951b\u5c7d\ue6e7\u951b\u6b7fDEFAULT:"#4573a7",HOVER:"#5E8BC0"}')}else{this._colors.push(d)}},getColor:function(d){return this._colors[d%this.len]},getColors:function(){var h=0,f=this,e=[],d;if(arguments[1]){h=arguments[0];d=arguments[1]}else{d=arguments[0]}for(var g=h;g<d-h;g++){e.push(f.getColor(g))}return e}});return c});