KISSY.add("gallery/kcharts/1.1/ratiochart/index",function(d,e,c,b){var f=c.all;function a(h){var g=this;g.init(h)}d.augment(a,{version:"1.0",CONFIG:{},TEMPLATE:{START:'<div style="{{containerStyles}}">',END:"</div>",PERSON:"",ITEM:'<div style="overflow:hidden;position: relative; {{itemStyles}}"><div style="float:left;text-align:center; {{titleStyles}}">{{titleHTML}}</div><div style="float:left;position: relative;"><div style="{{backStyles}} position: absolute; top:0;left:0;"></div><div style="{{frontStyles}} position: absolute; top:0;left:0;"></div></div><div style="position: absolute; top:0;left:0; {{introStyles}}">{{introHTML}}</div></div>',ITEM2:""},init:function(i){var g=this;this.CONFIG=i;g.countCenter();var h=g.drawCol(g.CONFIG.colsData);g.paint(i.container,h)},countCenter:function(){var h=this,j=[],g="";cfg=h.CONFIG,cs=cfg.styles.containerStyles,is=cfg.styles.itemStyles,ts=cfg.styles.titleStyles,bs=cfg.styles.backStyles,fs=cfg.styles.frontStyles,ins=cfg.styles.introStyles;d.each(cfg.cols,function(o){var k="",s="",p="",n="",l="",r="",m="";for(var q in cs){k+=h.utils.parseCssName(q,cs[q])}for(var q in is){s+=h.utils.parseCssName(q,is[q])}p+="line-height: "+ts.height+"px;";for(var q in ts){p+=h.utils.parseCssName(q,ts[q])}for(var q in bs){n+=h.utils.parseCssName(q,bs[q])}l+="width:"+bs.width*o.graph.per/100+"px;";for(var q in fs){l+=h.utils.parseCssName(q,fs[q])}r+="top: "+(bs.height+10)+"px; left: "+ts.width+"px;";for(var q in ins){r+=h.utils.parseCssName(q,ins[q])}for(var q in o.title.styles){p+=h.utils.parseCssName(q,o.title.styles[q])}for(var q in o.graph.styles){l+=h.utils.parseCssName(q,o.graph.styles[q])}for(var q in o.intro.styles){r+=h.utils.parseCssName(q,o.intro.styles[q])}j.push({containerStyles:k,itemStyles:s,titleStyles:p,backStyles:n,frontStyles:l,introStyles:r,titleHTML:o.title.text,introHTML:o.intro.text,person:o.graph.per*20/100})});for(var i in cs){g+=h.utils.parseCssName(i,cs[i])}h.TEMPLATE.PERSON='<div style="height: '+fs.height+"px; width: 12px;float:left; margin-right:15px; background:url(http://img04.taobaocdn.com/tps/i4/T1vUQ1XkJbXXcJuKk.-12-32.gif) 0 "+(fs.height-32)/2+'px no-repeat;"></div>';h.CONFIG.colsData=j;h.CONFIG.containerStyles=g},drawCol:function(g){var h=this,j=h.CONFIG.type,k=(j==1)?h.TEMPLATE.ITEM:h.TEMPLATE.ITEM2,i="";d.each(g,function(o){if(j==2){var m=o.person,n=h.TEMPLATE.PERSON,q="";while(m>0){q+=n;m--}h.TEMPLATE.ITEM2='<div style="overflow:hidden;position: relative; {{itemStyles}}"><div style="float:left;text-align:center; {{titleStyles}}">{{titleHTML}}</div><div style="float:left;position: relative;overflow:hidden;">'+q+'</div><div style="position: absolute; top:0;left:0; {{introStyles}}">{{introHTML}}</div></div>';i+=new b(h.TEMPLATE.ITEM2).render(o)}else{i+=new b(h.TEMPLATE.ITEM).render(o)}});return i},utils:{parseCssName:function(i,l){var j=/[A-Z]/,g,h="px";if(i.match(/[A-Z]/)){g=i.replace(j,"-"+(i.match(/[A-Z]/).toString()).toLowerCase());return""+g+": "+l+(isNaN(l)?"":"px")+";"}else{return""+i+": "+l+(isNaN(l)?"":"px")+";"}}},paint:function(i,k){var j=this,h=j.TEMPLATE,k=k||"",g="";g=new b(h.START).render(j.CONFIG);g+=k;g+=h.END;f(i).html(g)}});return a},{requires:["ua","node","xtemplate"]});