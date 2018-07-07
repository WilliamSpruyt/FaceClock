var synth = window.speechSynthesis;

var play= document.getElementById('#play');
var inputTxt = document.querySelector('.txt');

var voiceSelect = document.querySelector('select');

var pitch = 1
var pitchValue = 1
var rate = 1
var rateValue = 1

var voices = [];

hour=0;
	  minute=0;



$(document).ready(function() {
 console.log("readY")
	  d = new Date();
	  hour=d.getHours();
	  minute=d.getMinutes();
	   colors=complimentaries();
	  MINUTEWORDS=['bang on','just gone','about','nearly','just about']
	  MINUTETIMEWORDS=['','five past','ten past','a quarter past','twenty past','twenty-five past','half','twenty-five to',
	  'twenty to','a quarter to','ten to','five to','']
	  HOURWORDS=['midnight','one','two','three','four','five','six','seven','eight','nine','ten','eleven','noon',
	  'one','two','three','four','five','six','seven','eight','nine','ten','eleven'];
	  window.requestAnimationFrame(step);
});
function step(timestamp) {
  var d = new Date();
      
	  hour=d.getHours();
	 minute=d.getMinutes();
	   
  var theTime=wordTimeMaker(hour,minute);
 
  
if (document.getElementById("timeReadOut").innerHTML !== 'it\'s '+theTime){
	 
	$(timeReadOut).removeClass("animated pulse"),console.log(timestamp);
    setTimeout(function(){ $(timeReadOut).addClass("animated pulse"); }, 10);  
	
	 	 
	
	
	}
document.getElementById("timeReadOut").innerHTML = 'it\'s '+theTime;
document.getElementById("facePlace").innerHTML =`
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="128px"
   height="168px"
   viewBox="0 0 128 168"
   version="1.1"
   id="svg5341"
   inkscape:version="0.92.3 (2405546, 2018-03-11)"
   sodipodi:docname="face.svg">
  <defs
     id="defs5335" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="0.98994949"
     inkscape:cx="279.99999"
     inkscape:cy="188.57137"
     inkscape:document-units="mm"
     inkscape:current-layer="layer1"
     showgrid="false"
     inkscape:window-width="1366"
     inkscape:window-height="705"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1" />
  <metadata
     id="metadata5338">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(-31.750003,-30.904762)">
	 <!--right ear-->
    <ellipse
       style="fill:rgb(`+colors.red[0]+`,`+colors.green[0]+`,`+colors.blue[0]+`,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
       id="path5347"
       cx="42.711311"
       cy="120"
       rx="10.961308"
       ry="20.032738" />
	   <!--left ear-->
    <ellipse
       style="fill:rgb(`+colors.red[0]+`,`+colors.green[0]+`,`+colors.blue[0]+`,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
       id="path5347-3"
       cx="145.14285"
       cy="120"
       rx="10.961308"
       ry="20.032738" />
	    <!--face-->
    <ellipse
       style="fill:rgb(`+colors.red[0]+`,`+colors.green[0]+`,`+colors.blue[0]+`,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
       id="path5366"
       cx="94.872017"
       cy="115.94939"
       rx="56.318451"
       ry="82.776787" />
<!--right eye-->
    <ellipse
       style="fill:#ffffff;stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
       id="path5368"
       cx="68.791679"
       cy="120"
       rx="13.607142"
       ry="8.6934528" />
	   <!--left eye-->
    <ellipse
       style="fill:#ffffff;stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
       id="path5368-8"
       cx="120.19642"
       cy="120"
       rx="13.607142"
       ry="8.6934528" />
	   <!--nose-->
    <ellipse
       style="fill:rgb(`+colors.red[1]+`,`+colors.green[1]+`,`+colors.blue[1]+`,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
       id="path5387"
       cx="88.068459"
       cy="149.58928"
       rx="4.9136906"
       ry="3.0238097" />
    <ellipse
       style="fill:rgb(`+colors.red[1]+`,`+colors.green[1]+`,`+colors.blue[1]+`,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
       id="path5387-2"
       cx="102.05357"
       cy="149.58928"
       rx="4.9136906"
       ry="3.0238097" />
    <ellipse
       style="fill:rgb(`+colors.red[1]+`,`+colors.green[1]+`,`+colors.blue[1]+`,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
       id="path5404"
       cx="94.872017"
       cy="135.98213"
       rx="7.1815472"
       ry="16.630953" />
	   <!--right iris-->
    <ellipse
		
       style="fill:rgb(`+colors.red[2]+`,`+colors.green[2]+`,`+colors.blue[2]+`,255);stroke:pink;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
       id="path5406"
       cx="69.2155"
       cy="120"
       rx="4.9136906"
       ry="7.9375" />
	   <!--left iris-->
    <ellipse
       style="fill:rgb(`+colors.red[2]+`,`+colors.green[2]+`,`+colors.blue[2]+`,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
       id="path5406-5"
       cx="120.19642"
       cy="120"
       rx="4.9136906"
       ry="7.9375" />
	   <!--mouth-->
    <path
       style="fill:rgb(`+colors.red[1]+`,`+colors.green[1]+`,`+colors.blue[1]+`,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
       id="path5441"
       sodipodi:type="arc"
       sodipodi:cx="93.738106"
       sodipodi:cy="172.64583"
       sodipodi:rx="30.238094"
       sodipodi:ry="9.4494047"
       sodipodi:start="0"
       sodipodi:end="3.0979769"
       d="m 123.9762,172.64583 a 30.238094,9.4494047 0 0 1 -29.578718,9.44716 30.238094,9.4494047 0 0 1 -30.868714,-9.03515 l 30.209338,-0.41201 z" />
	 <!--hair-->  
    <path
       style="fill:rgb(`+colors.red[2]+`,`+colors.green[2]+`,`+colors.blue[2]+`,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
       id="path5443"
       sodipodi:type="arc"
       sodipodi:cx="94.828331"
       sodipodi:cy="78.907738"
       sodipodi:ry="48.002975"
       sodipodi:start="3.0041225"
       sodipodi:end="0.1171746"
       d="M 38.148114,85.485949 A 57.220039,48.002975 0 0 1 63.65309,38.655035 57.220039,48.002975 0 0 1 125.0234,38.132562 57.220039,48.002975 0 0 1 151.65601,84.519605 L 94.828331,78.907738 Z" />
    <rect
       style="fill:rgb(`+colors.red[2]+`,`+colors.green[2]+`,`+colors.blue[2]+`,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
       id="rect5457"
       width="10.988791"
       height="39.912861"
       x="38.148113"
       y="81.706184" />
   <rect
       style="fill:rgb(`+colors.red[2]+`,`+colors.green[2]+`,`+colors.blue[2]+`,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
       id="rect5457-5"
       width="10.988791"
       height="45.204529"
       x="140.66722"
       y="79.227943" />
  </g>
</svg>`
    window.requestAnimationFrame(step);
  
}
 function wordTimeMaker(hora,mins){
	 var wordTime='';
	 var h=hora;
	 
	 var handPos=Math.round(mins/5);
	 var handMod=mins%5;
	 if  (handPos>6){h++}
	 wordTime=MINUTEWORDS[handMod]+' '+MINUTETIMEWORDS[handPos]+' '+HOURWORDS[h] ;
	  
	return wordTime;
	 
 }
 function populateVoiceList() {
  voices = synth.getVoices();
  var selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
  voiceSelect.innerHTML = '';
  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    
    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
  voiceSelect.selectedIndex = selectedIndex;
}
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak(){
	 var d = new Date();
	  hour=d.getHours();
	  minute=d.getMinutes();
  inputTxt='its ' + wordTimeMaker(hour,minute);
  console.log(inputTxt.value);
  if(inputTxt.value !== ''){
    var utterThis = new SpeechSynthesisUtterance(inputTxt);
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    utterThis.pitch = pitch;
    utterThis.rate = rate;
    synth.speak(utterThis);
  }
}

i.onsubmit = function(event) {
  event.preventDefault();

  speak();

   
}

 
 
$( "#play" ).click(function() {
   
  speak();
}); 
 
function complimentaries() {
  var red1 = Math.floor(Math.random() * 256);
  var red2 = Math.floor(Math.random() * 256);
  var red3 = 256 - red1 - red2;
  var blu1 = Math.floor(Math.random() * 256);
  var blu2 = Math.floor(Math.random() * 256);
  var blu3 = 256 - blu1 - blu2;
  var gre1 = Math.floor(Math.random() * 256);
  var gre2 = Math.floor(Math.random() * 256);
  var gre3 = 256 - gre1 - gre2;

  return {
    red: [red1, red2, red3],
    blue: [blu1, blu2, blu3],
    green: [gre1, gre2, gre3]
  };
}
