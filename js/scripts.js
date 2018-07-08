var synth = window.speechSynthesis;

var play = document.getElementById("#play");
var inputTxt = document.querySelector(".txt");

var voiceSelect = document.querySelector("select");

var pitch = 1;
var pitchValue = 1;
var rate = 1;
var rateValue = 1;

var voices = [];

hour = 0;
minute = 0;

$(document).ready(function() {
  console.log("readY");
  d = new Date();
  hour = d.getHours();
  minute = d.getMinutes();
  var faceMaker = () => {
    colors = complimentaries();
    eyewidthSizer = Math.random() + 0.2;
    eyeSpacer = Math.random();
    irisSpacer = Math.random();
    burnsLength = Math.random();
    noseSize = Math.random() + 0.1;
    faceFat = Math.random();
    faceLength = Math.random();
    mouthWidth = (Math.random()*30)-15;
    mouthMood=(Math.random()*60)-30;
     mouthCurl=(Math.random()*20)-10;
     browHeight = (Math.random()*30)-15;
     

    return (
      `<svg
    background="green"
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
      bordercolor="#000000"
      borderopacity="1.0"
      inkscape:pageopacity="1.0"
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
      <rect
      style="fill:rgb(` +
      colors.red[1] +
      `,` +
      colors.green[1] +
      `,` +
      colors.blue[1] +
      `,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
      id="rect5457"
      width="300"
      height="300"
      x="0"
      y="0" />
    <!--right ear-->
    
     <ellipse
        style="fill:rgb(` +
      colors.red[0] +
      `,` +
      colors.green[0] +
      `,` +
      colors.blue[0] +
      `,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
        id="path5347"
        cx="42.711311"
        cy="120"
        rx="10.961308"
        ry="20.032738" />
      <!--left ear-->
     <ellipse
        style="fill:rgb(` +
      colors.red[0] +
      `,` +
      colors.green[0] +
      `,` +
      colors.blue[0] +
      `,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
        id="path5347-3"
        cx="145.14285"
        cy="120"
        rx="10.961308"
        ry="20.032738" />
       <!--face-->
     <ellipse
        style="fill:rgb(` +
      colors.red[0] +
      `,` +
      colors.green[0] +
      `,` +
      colors.blue[0] +
      `,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
        id="path5366"
        cx="94.872017"
        cy="115.94939"
        rx="` +
      (40 + faceFat * 15) +
      `"
        ry="` +
      (80 + faceLength * 15) +
      `" />
  <!--right eye-->
     <ellipse
        style="fill:#ffffff;stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
        id="path5368"
        cx="` +
      (70 - 10 * eyeSpacer) +
      `"
        cy="120"
        rx="13.607142"
        ry="` +
      10 * eyewidthSizer +
      `" />
      <!--left eye-->
     <ellipse
        style="fill:#ffffff;stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
        id="path5368-8"
        cx="` +
      (120 + 10 * eyeSpacer) +
      `"
        cy="120"
        rx="13.607142"
        ry="` +
      10 * eyewidthSizer +
      `" />
      <!--nose-->
     <ellipse
        style="fill:rgb(` +
      colors.red[1] +
      `,` +
      colors.green[1] +
      `,` +
      colors.blue[1] +
      `,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
        id="path5387"
        cx="88.068459"
        cy="149.58928"
        rx="` +
      10 * noseSize +
      `"
        ry="` +
      5 * noseSize +
      `" />
     <ellipse
        style="fill:rgb(` +
      colors.red[1] +
      `,` +
      colors.green[1] +
      `,` +
      colors.blue[1] +
      `,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
        id="path5387-2"
        cx="102.05357"
        cy="149.58928"
        rx="` +
      10 * noseSize +
      `"
           ry="` +
      5 * noseSize +
      `" />
     <ellipse
        style="fill:rgb(` +
      colors.red[1] +
      `,` +
      colors.green[1] +
      `,` +
      colors.blue[1] +
      `,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
        id="path5404"
        cx="94.872017"
        cy="135.98213"
        rx="` +
      10 * noseSize +
      `"
           ry="` +
      (10 + noseSize * 10) +
      `" />
      <!--right iris-->
     <ellipse
     
        style="fill:rgb(` +
      colors.red[2] +
      `,` +
      colors.green[2] +
      `,` +
      colors.blue[2] +
      `,255);stroke:pink;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
        id="path5406"
        cx="` +
      (70 - 10 * irisSpacer) +
      `"
        cy="120"
        rx="4.9136906"
        ry="` +
      10 * eyewidthSizer +
      `" />
      <!--left iris-->
     <ellipse
        style="fill:rgb(` +
      colors.red[2] +
      `,` +
      colors.green[2] +
      `,` +
      colors.blue[2] +
      `,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
        id="path5406-5"
        cx="` +
      (120 + 10 * irisSpacer) +
      `"
        cy="120"
        rx="4.9136906"
        ry="` +
      10 * eyewidthSizer +
      `" />
      <!--brow-->
      <path d="M50 110 C 60 100, 80 100, 90 110" stroke="black" stroke-width="1" fill="none" />
       <path d="M100 110 C 110 100, 140 100, 140 110" stroke="black" stroke-width="1" fill="none" />
      <!--mouth-->
     <path
        style="fill:rgb(` +
      colors.red[1] +
      `,` +
      colors.green[1] +
      `,` +
      colors.blue[1] +
      `,255);stroke:rgb(` +
      colors.red[1] +
      `,` +
      colors.green[1] +
      `,` +
      colors.blue[1] +
      `,255);stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"
        d="M`+(70+mouthWidth)+` 168 C `+(90-mouthCurl)+` `+(180-mouthMood)+`, `+(100+mouthCurl)+` `+(180-mouthMood)+`, `+(120-mouthWidth)+`  168" stroke="black" stroke-width="0" fill="red" 
        d="m 123.9762,172.64583 a 30.238094,9.4494047 0 0 1 -29.578718,9.44716 30.238094,9.4494047 0 0 1 -30.868714,-9.03515 l 30.209338,-0.41201 z" />
    <!--hair--> 
     <path
        style="fill:rgb(` +
      colors.red[2] +
      `,` +
      colors.green[2] +
      `,` +
      colors.blue[2] +
      `,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
        id="path5443"
        
        d="M 38.148114,85.485949 A 57.220039,48.002975 0 0 1 63.65309,38.655035 57.220039,48.002975 0 0 1 125.0234,38.132562 57.220039,48.002975 0 0 1 151.65601,84.519605 L 94.828331,78.907738 Z" />
     <rect
        style="fill:rgb(` +
      colors.red[2] +
      `,` +
      colors.green[2] +
      `,` +
      colors.blue[2] +
      `,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
        id="rect5457"
        width="10.988791"
        height="` +
      100 * burnsLength +
      `"
        x="38.148113"
        y="81.706184" />
    <rect
        style="fill:rgb(` +
      colors.red[2] +
      `,` +
      colors.green[2] +
      `,` +
      colors.blue[2] +
      `,255);stroke:#241c1c;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
        id="rect5457-5"
        width="10.988791"
        height="` +
      100 * burnsLength +
      `"
        x="140.66722"
        y="79.227943" />
   </g>
  </svg>`
    );
  };

  faceArray = [];
  for (var i = 0; i < 500; i++) {
    faceArray.push(faceMaker());
  }
  document.getElementById("facePlace").innerHTML = faceArray.join(" ");
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
