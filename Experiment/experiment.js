var mySceneTLX;
var mySceneTLY;
var mySceneBRX;
var mySceneBRY;
var mySceneW;
var mySceneH;
var myCenterX;
var myCenterY;

var arrow1;
var arrow1A;
var arrow2;
var arrow3;
var arrow4;
var arrow5;
var arrow6;
var arrow2A;

var arrow3A;
var arrow4A;
var arrow5A;
var arrow6A;

var helpContent;


///////////////////////////////////////

var box1;
var box2;
var box3;
var mesh1;
var mesh2;
var mesh3;
var mesh4;
var mesh5;
var mesh6;
var mesh7;
var mesh8;
var mesh9;
var mesh10;
var mesh11;
var mesh12;

var choice;
var hasChosen=0;
function initialiseHelp() {
    helpContent = "";
    helpContent = helpContent + "<h2>Magnetic Direction help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>Shown how the freely suspended magnet points itself to earth's geometric north.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>Select shape of the magnet.</p>";
    helpContent = helpContent + "<p>Click on start button to push(rotate) the selected magnet.</p>";
    helpContent = helpContent + "<p>Click on pause button to pause the animation.</p>";
    helpContent = helpContent + "<p>Click on stop button to set the selected magnet to its original position.</p>";
    helpContent = helpContent + "<p>Click on Reset button to reset animation.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var conceptContent;

var PIEconceptModal;
var PIEconceptContent;
var PIEconceptSpan;
function learnMore() {
    conceptContent = "";
    conceptContent = conceptContent + "<h2>About Magnetic Direction</h2>";
    conceptContent = conceptContent + "<h3>A magnetic compass points to the earth's magnetic poles, which are not the same as earth's geographic poles.</h3>";
    conceptContent = conceptContent + "<h3>Furthermore, the magnetic pole near earth's geographic north pole is actually the south magnetic pole.</p>";
    conceptContent = conceptContent + "<h3>When it comes to magnets, opposites attract. This fact means that the north end of a magnet in a compass is attracted to the south magnetic pole, which lies close to the geographic north pole. </h3>";
    conceptContent = conceptContent + "<h3>Magnetic field lines outside of a permanent magnet always run from the north magnetic pole to the south magnetic pole.</p>";
    conceptContent = conceptContent + "<h3>Therefore, the magnetic field lines of the earth run from the southern geographic hemisphere towards the northern geographic hemisphere.</p>";
    conceptContent = conceptContent + "<center><img src='./poles.png' width='300px' height='183px'></center>";
    PIEupdateConcept(conceptContent);
}

function PIEaddModalWindows() {
    var a;
    var b;
    a = "display: none; position: fixed; z-index: 1; padding-top: 100px; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); color:#000;";
    ImodalContentStyle = "background-color:rgb(236,236,236); background-color:rgba(236,236,236,0.95); margin: auto auto 200px; padding: 20px; border: 10px solid #008000; width: 80%;";
    HmodalContentStyle = "background-color:rgb(236,236,236); background-color:rgba(236,236,236,0.95); margin: auto auto 200px; padding: 20px; border: 10px solid #F0F000; width: 80%;";
    PIEhelpModal = document.createElement("div");
    PIEhelpModal.style = a;
    PIEhelpModal.onclick = function () {
        PIEhelpModal.style.display = "none"
    };
    PIEhelpContent = document.createElement("div");
    PIEhelpContent.style = HmodalContentStyle;
    PIEhelpSpan = document.createElement("span");
    PIEhelpSpan.className = "close";
    PIEhelpSpan.style = "color: #000000; float: right; font-size: 28px; font-weight: bold;";
    PIEhelpSpan.innerHTML = "&times;";
    PIEhelpSpan.onclick = function () {
        PIEhelpModal.style.display = "none"
    };
    PIEhelpSpan.onmouseover = function () {
        PIEhelpSpan.style = "color: #000; text-decoration: none; cursor: pointer;"
    };
    PIEhelpSpan.onmouseout = function () {
        PIEhelpSpan.style = "color: #000000; cursor: auto;"
    };
    PIEhelpContent.appendChild(PIEhelpSpan);
    PIEhelpModal.appendChild(PIEhelpContent);
    PIEscreenElem.appendChild(PIEhelpModal);


    PIEinfoModal = document.createElement("div");
    PIEinfoModal.style = a;
    PIEinfoModal.onclick = function () {
        PIEinfoModal.style.display = "none"
    };
    PIEinfoContent = document.createElement("div");
    PIEinfoContent.style = ImodalContentStyle;
    PIEinfoSpan = document.createElement("span");
    PIEinfoSpan.className = "close";
    PIEinfoSpan.style = "color: #008000; float: right; font-size: 28px; font-weight: bold;";
    PIEinfoSpan.innerHTML = "&times;";
    PIEinfoSpan.onclick = function () {
        PIEinfoModal.style.display = "none"
    };
    PIEinfoSpan.onmouseover = function () {
        PIEinfoSpan.style = "color: #000; text-decoration: none; cursor: pointer;"
    };
    PIEinfoSpan.onmouseout = function () {
        PIEinfoSpan.style = "color: #008000; cursor: auto;"
    };
    PIEinfoContent.appendChild(PIEinfoSpan);
    PIEinfoModal.appendChild(PIEinfoContent);
    PIEscreenElem.appendChild(PIEinfoModal);


//==concept=================//
    PIEconceptModal = document.createElement("div");
    PIEconceptModal.style = a;
    PIEconceptModal.onclick = function () {
        PIEconceptModal.style.display = "none"
    };
    PIEconceptContent = document.createElement("div");
    PIEconceptContent.style = ImodalContentStyle;
    PIEconceptSpan = document.createElement("span");
    PIEconceptSpan.className = "close";
    PIEconceptSpan.style = "color: #008000; float: right; font-size: 28px; font-weight: bold;";
    PIEconceptSpan.innerHTML = "&times;";
    PIEconceptSpan.onclick = function () {
        PIEconceptModal.style.display = "none"
    };
    PIEconceptSpan.onmouseover = function () {
        PIEconceptSpan.style = "color: #000; text-decoration: none; cursor: pointer;"
    };
    PIEconceptSpan.onmouseout = function () {
        PIEconceptSpan.style = "color: #008000; cursor: auto;"
    };
    PIEconceptContent.appendChild(PIEconceptSpan);
    PIEconceptModal.appendChild(PIEconceptContent);
    PIEscreenElem.appendChild(PIEconceptModal);


}


function PIEupdateConcept(a) {
    var b;
    PIEconceptContent.innerHTML = "";
    PIEconceptContent.appendChild(PIEinfoSpan);
    b = PIEconceptContent.innerHTML;
    PIEconceptContent.innerHTML = b + a
}

function PIEappendConcept(a) {
    var b;
    b = PIEconceptContent.innerHTML;
    PIEconceptContent.innerHTML = b + a
}

function PIEshowConcept() {
    PIEconceptModal.style.display = "block"
}


var infoContent;
function initialiseInfo() {
    infoContent = "";
    infoContent = infoContent + "<h2>Magnetic Direction concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>Shown how the freely suspended magnet points itself to earth's geometric north.</p>";
    infoContent = infoContent + "<p>When the start button is clicked, the magnet starts rotating.</p>";
    infoContent = infoContent + "<p>The magnet's north pole is attracted by the earth's magnetic south pole. </p>";
    infoContent = infoContent + "<p>The magnet's south pole is attracted by the earth's magnetic north pole. </p>";
    infoContent = infoContent + "<p>As the earth's magnetic south pole is situated at earth's geometric north, therefore the magnet slowly aligns itself in the direction of earth's geometric north and hence points towards the true north.</p>";
    infoContent = infoContent + "<p>The same concept is used in compass where the magnetic needle points towards the true north.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene() {
    mySceneTLX = -16;
    mySceneTLY = 27;
    mySceneBRX = 16;
    mySceneBRY = 12;
    mySceneW = (mySceneBRX - mySceneTLX);
    mySceneH = (mySceneTLY - mySceneBRY);
    myCenterX = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY = (mySceneTLY + mySceneBRY) / 2.0;

    var light = new THREE.PointLight(0xff0000, 7, 200);
    PIEaddElement(light);
    // light.position.set(-50, 50, 50);
    light.position.set(-50, 50, 50);

    PIEscene.background = new THREE.Color(0x00BFFF);
    //PIEscene.background = new THREE.Color( 0xFCEDB2 );
    var ambient = new THREE.AmbientLight(0x555555);
    PIEaddElement(ambient);

    var light = new THREE.DirectionalLight(0x123456);
    light.position = PIEcamera.position;
    PIEaddElement(light);

    var ambient = new THREE.AmbientLight(0x555555);
    PIEaddElement(ambient);

    var light = new THREE.DirectionalLight(0x123456);
    light.position = PIEcamera.position;
    PIEaddElement(light);

    //Set up shadow properties for the light
    light.shadow.mapSize.width = 512;  // default
    light.shadow.mapSize.height = 512; // default
    light.shadow.camera.near = 0.5;       // default
    light.shadow.camera.far = 500      // default

    var groundMaterial = new THREE.MeshPhongMaterial({ color: 0x37e2c3, specular: 0xffffff });
    var mesh233 = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000, 2000), groundMaterial);
    mesh233.position.y = -25;
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);



    //PIEadjustDisplayScene();
    PIErenderer.shadowMapEnabled = false;
    PIErenderer.shadowMap.type = THREE.PCFSoftShadowMap;
        // PIEcamera.position.set(0,0,50);
        // PIEcamera.up = new THREE.Vector3(,25,70);; 


        // PIEcamera.lookAt(new THREE.Vector3(0,0,0));

 // camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );
 // camera.lookAt(light.position);
 // camera.up
       

}

var controls;
function startOrbitalControls() {
    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
    controls.enabled = false;
}


//////////////////////////////////////////////////////////////////
var tableTop;
function addTable() {
    var tableGeom = new THREE.BoxGeometry(20, 0.5, 20, 4, 4, 1);
    tableTop = new THREE.Mesh(tableGeom, new THREE.MeshPhongMaterial({ color: 0x8B4513,specular:0x181201,shininess:100.0 }));
    tableTop.position.y -= 7;
    PIEaddElement(tableTop);
    tableTop.rotation.x=-Math.PI/6; //top of table

    var edges = new THREE.EdgesGeometry(tableGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));

    tableTop.add(line) //black line on the table;

    var tablelegGeom = new THREE.CubeGeometry(0.5, 10, 0.5, 4, 4, 1);
    var tableleg = new THREE.Mesh(tablelegGeom, new THREE.MeshPhongMaterial({ color: 0x8B4513,specular:0x181201,shininess:100.0 }));
    tableleg.position.set(-9.5, -5, 9.5); //left leg of table

    var edges2 = new THREE.EdgesGeometry(tablelegGeom);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));

    tableleg.add(line2);
    tableTop.add(tableleg);  //to add left tabl;e leg


    var tablelegGeom2 = new THREE.CubeGeometry(0.5, 10, 0.5, 4, 4, 1);
    var tableleg2 = new THREE.Mesh(tablelegGeom2, new THREE.MeshPhongMaterial({ color: 0x8B4513,specular:0x181201,shininess:100.0 }));
    tableleg2.position.set(9.5, -5, 9.5);

    var edges3 = new THREE.EdgesGeometry(tablelegGeom2);
    var line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial({ color: 0x000 }));

    tableleg2.add(line3);
    tableTop.add(tableleg2);  //right leg of table


    var tablelegGeom3 = new THREE.CubeGeometry(0.5, 10, 0.5, 4, 4, 1);
    var tableleg3 = new THREE.Mesh(tablelegGeom3, new THREE.MeshPhongMaterial({ color: 0x8B4513,specular:0x181201,shininess:100.0 }));
    tableleg3.position.set(-9.5, -5, -9.5);

    var edges4 = new THREE.EdgesGeometry(tablelegGeom3);
    var line4 = new THREE.LineSegments(edges4, new THREE.LineBasicMaterial({ color: 0x000 }));

    tableleg3.add(line4);
    tableTop.add(tableleg3);


    var tablelegGeom4 = new THREE.CubeGeometry(0.5, 10, 0.5, 4, 4, 1);
    var tableleg4 = new THREE.Mesh(tablelegGeom4, new THREE.MeshPhongMaterial({ color: 0x8B4513,specular:0x181201,shininess:100.0 }));
    tableleg4.position.set(9.5, -5, -9.5);

    var edges5 = new THREE.EdgesGeometry(tablelegGeom4);
    var line5 = new THREE.LineSegments(edges5, new THREE.LineBasicMaterial({ color: 0x000 }));

    tableleg4.add(line5);
    tableTop.add(tableleg4);
}
////////////////////////////////////////////////////////////////////



var circle = new Array(50);
var circle2 = new Array(50);
var dirprism1, dirprism2, dirprism12, dirprism22;

var distfromrod1, distfromrod2;
var centercoilx = 0;
var centercoilz = 4.5;

///////////////////////////////////////////////////////

function mydragf(element, newpos) {
    //console.log("x = " + newpos.x);
    //console.log("z = " + newpos.z);

    if (newpos.x < -3) {
        newpos.x = -3;
    }

    if (newpos.x > 3) {
        newpos.x = 3;
    }

    if (newpos.y != 1.85) {
        newpos.y = 1.85;
    }

    if (newpos.z < 4.5 - 3) {
        newpos.z = 4.5 - 3;
    }

    if (newpos.z > 3 + 4.5) {
        newpos.z = 3 + 4.5;
    }

    var theta1 = Math.atan2((newpos.z - centercoilz), Math.abs(newpos.x - (centercoilx - 2)));
    if (newpos.x > centercoilx - 2) {
        theta1 = -Math.PI - theta1;
    }

    var theta2 = Math.atan2((newpos.z - centercoilz), Math.abs(newpos.x - (centercoilx + 2)));
    if (newpos.x > centercoilx + 2) {
        theta2 = -Math.PI - theta2;
    }

    distfromrod1 = Math.sqrt(((newpos.x - (centercoilx - 2)) * (newpos.x - (centercoilx - 2))) + ((newpos.z - centercoilz) * (newpos.z - centercoilz)));

    distfromrod2 = Math.sqrt(((newpos.x - (centercoilx + 2)) * (newpos.x - (centercoilx + 2))) + ((newpos.z - centercoilz) * (newpos.z - centercoilz)));

    meterTop.position.set(newpos.x, newpos.y, newpos.z);
    needprism1.position.set(newpos.x, newpos.y + 0.1, newpos.z);
    if (flag == 1) {
        if (distfromrod1 < (9 / (8 - currentVoltage + 1.6)) + 0.5) {
            if (currdir == 0) {
                needprism1.rotation.z = theta1;
            }
            else {
                needprism1.rotation.z = -Math.PI + theta1;
            }
        } else if (distfromrod2 < (9 / (8 - currentVoltage + 1.6)) + 0.5) {
            if (currdir == 1) {
                needprism1.rotation.z = theta2;
            }
            else {
                needprism1.rotation.z = -Math.PI + theta2;
            }
        } else {
            needprism1.rotation.z = 0;
        }
        PIErender();
    }
;}

/////////////////////////////////////////////////////////////////

function mydragf2(element, newpos) {
    if (newpos.x < -1.7) {
        newpos.x = -1.7;
    }

    if (newpos.x > 1.7) {
        newpos.x = 1.7;
    }

    if (newpos.y != 1.85) {
        newpos.y = 1.85;
    }

    if (newpos.z < 4.5 - 2) {
        newpos.z = 4.5 - 2;
        
    }

    if (newpos.z > 1.3 + 4.5) {
        newpos.z = 1.5 + 4.5;
    }
    torus.position.set(newpos.x, newpos.y, newpos.z);
    centercoilx = newpos.x;
    centercoilz = newpos.z;
    if (flag == 1) {
        // removeFieldlines();
        // addFieldLines();
    }
    mydragf(meterTop, new THREE.Vector3(meterTop.position.x, meterTop.position.y, meterTop.position.z));
    PIErender();
}


/////////////////////////////////////////////////////////


var base;
var meshS;
function addRod() {
   

    var baseGeom = new THREE.BoxGeometry(4, .3, 4);
    base = new THREE.Mesh(baseGeom, new THREE.MeshPhongMaterial({       color: 0x2b1d0e ,specular: 0x2b1d0e}));

    var edges = new THREE.EdgesGeometry(baseGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));

    base.add(line);
    tableTop.add(base);

    // base.rotation.y += Math.PI / 6;
    base.position.set(-5,0.8,2);
    
    // PIEaddElement(base); //base of switch

    var rodGeom = new THREE.BoxGeometry( .4, 14,.4);
    var rodTop =  new THREE.Mesh( rodGeom,new THREE.MeshPhongMaterial({color: 0xa8835a, specular:0x675624 ,shininess:0.0 }));
    // rodTop.position.y +=1.6;
    // rodTop.position.z +=4.5;
    // rodTop.position.x +=1.55;
    rodTop.position.set(0,5,0);
    base.add(rodTop); //for making a rod

    rodTop.castShadow = true; //default is false
    rodTop.receiveShadow = true; //default

    var edges = new THREE.EdgesGeometry( rodGeom );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );

    rodTop.add(line);
    //=====================Horizontal rod================//

    var rodGeom = new THREE.BoxGeometry( 5, .4,.4);
    var horRod =  new THREE.Mesh( rodGeom,new THREE.MeshPhongMaterial({color: 0xa8835a,specular:0x675624 ,shininess:0.0 }));
    // rodTop.position.y +=1.6;
    // rodTop.position.z +=4.5;
    // rodTop.position.x +=1.55;
   
    rodTop.add(horRod);
    horRod.position.set(1.7,6,0);
     //for making a rod

    horRod.castShadow       = true; //default is false
    horRod.receiveShadow    = true; //default

    var edges = new THREE.EdgesGeometry( rodGeom );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );

    horRod.add(line);

    //===============addHook=================//

    var curveS = new THREE.CubicBezierCurve3(
        new THREE.Vector3(3.05, 0 ,0),
        new THREE.Vector3(3.4, -.8 ,0),
        new THREE.Vector3(3.9, -.8 ,0),
        new THREE.Vector3(4.1, 0,0)
    );

    var tubeS = new THREE.TubeGeometry(curveS, 40, 0.07, 20, false);
    meshS = new THREE.Mesh(tubeS, new THREE.MeshPhongMaterial({ color: 0x061329, specular:0xffffff}));

    horRod.add(meshS);  

    var curve1 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(0, 0 ,0),
        new THREE.Vector3(0, 0,0),
        new THREE.Vector3(3.1, 0 ,0),
        new THREE.Vector3(3.1, 0,0)
    );

    var tube1 = new THREE.TubeGeometry(curve1, 40, 0.07, 20, false);
    var mesh1 = new THREE.Mesh(tube1, new THREE.MeshPhongMaterial({ color: 0x061329, specular:0xffffff}));

    horRod.add(mesh1); 

// var geometry = new THREE.Geometry();
// geometry.vertices.push(new THREE.Vector3( -4, 1, 20) );
// geometry.vertices.push(new THREE.Vector3( 0, 1, 20) );
// geometry.vertices.push(new THREE.Vector3( 1, 1, 20) );

// var material = new THREE.LineDashedMaterial( {
//     color: 0xffffff,
//     linewidth: 5,
//     scale: 5,
//     dashSize: 1,
//     gapSize: 2,
// } );


// var line2 = new THREE.Line( geometry, material );
// line2.position.set(0,0,0);
// PIEaddElement(line2);

    // var curve2 = new THREE.CubicBezierCurve3(
    //     new THREE.Vector3(4.4, 0.8, 1.5),
    //     new THREE.Vector3(4.6, 1.6, 1),
    //     new THREE.Vector3(4.9, 1.3, 0.6),
    //     new THREE.Vector3(5, 0.5, 0.6)
    // );

    // var tube2 = new THREE.TubeGeometry(curve2, 40, 0.05, 20, false);
    // var mesh2 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    // PIEaddElement(mesh2); //curved wire connecting to black switch part

      var lampBulbGeom = new THREE.BoxGeometry(12, .1, .1);
    
        line2 = new THREE.Mesh(lampBulbGeom, new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true, opacity: 0.7,color:0x0d979b,specular: 0xffffff }));

        line2.position.set(0,2 ,10);
        tableTop.add(line2);


     var lampBulbGeom2 = new THREE.BoxGeometry(5, .1, .1);
    
        line3 = new THREE.Mesh(lampBulbGeom2, new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true, opacity: 0.7,color:0x0d979b,specular: 0xffffff }));

        line3.position.set(0,2 ,10);
        tableTop.add(line3);






        var geometry = new THREE.ConeGeometry( .1, .5, 30 );
        var material = new THREE.MeshPhongMaterial( {color: 0xff0000,specular:0xffffff,shininess:100.0} );
        var cone = new THREE.Mesh( geometry, material );
        

        var edges = new THREE.EdgesGeometry( geometry );
        var line55 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: "red" } ) );

        cone.add(line55);
        cone.rotation.z=Math.PI/2;
        cone.position.set(-6,0,0);

        line2.add( cone );

        var geometry2 = new THREE.ConeGeometry( .1, .5, 30 );
        var material2 = new THREE.MeshPhongMaterial( {color: 0xff0000,specular:0xffffff,shininess:100.0} );
        var cone2 = new THREE.Mesh( geometry2, material2 );
        

        var edges = new THREE.EdgesGeometry( geometry2 );
        var line57 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: "red" } ) );

        cone2.add(line57);
        cone2.rotation.z=Math.PI/2;
        cone2.rotation.z=Math.PI+Math.PI/2;
        cone2.position.set(6,0,0);

        line2.add( cone2 );






        var geometry3 = new THREE.ConeGeometry( .1, .5, 30 );
        var material3 = new THREE.MeshPhongMaterial( {color: 0xff0000,specular:0xffffff,shininess:100.0} );
        var cone3 = new THREE.Mesh( geometry3, material3 );
        

        var edges = new THREE.EdgesGeometry( geometry3 );
        var line55 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: "red" } ) );

        cone3.add(line55);
        cone3.rotation.z=Math.PI/2;
        cone3.position.set(-2.5,0,0);

        line3.add( cone3 );

        var geometry4 = new THREE.ConeGeometry( .1, .5, 30 );
        var material4 = new THREE.MeshPhongMaterial( {color: 0xff0000,specular:0xffffff,shininess:100.0} );
        var cone4 = new THREE.Mesh( geometry4, material4 );
        

        var edges = new THREE.EdgesGeometry( geometry4 );
        var line58 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: "red" } ) );

        cone4.add(line58);
        cone4.rotation.z=Math.PI/2;
        cone4.rotation.z=Math.PI+Math.PI/2;
        cone4.position.set(2.5,0,0);

        line3.add( cone4 );















// line2.rotation.x=-Math.PI/6;
        line2.rotation.y=Math.PI/6;
        line3.rotation.y=Math.PI/6+Math.PI/2;




            var loader = new THREE.FontLoader();
            loader.load("./optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("N", {
                    font: font,
                    size:.3,
                    height: .02,
                    curveSegments: 3
                });

                var thevel55 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xfff }));


                thevel55.position.set(-6, .3, 0);
                // thevel1.rotation.x = -Math.PI/2 ;
                // thevel55.rotation.y = -Math.PI/4 ;
                line2.add(thevel55);
                // base5.rotation.y=Math.PI;
                // PIEaddElement(thevel1);

            


        });


            var loader = new THREE.FontLoader();
            loader.load("./optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("S", {
                    font: font,
                    size:.3,
                    height: .02,
                    curveSegments: 3
                });

                var thevel56 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xfff }));


                thevel56.position.set(5.8, .3, 0);
                // thevel1.rotation.x = -Math.PI/2 ;
                // thevel55.rotation.y = -Math.PI/4 ;
                line2.add(thevel56);
                // base5.rotation.y=Math.PI;
                // PIEaddElement(thevel1);

            


        });

            var loader = new THREE.FontLoader();
            loader.load("./optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("E", {
                    font: font,
                    size:.3,
                    height: .02,
                    curveSegments: 3
                });

                var thevel57 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xfff }));


                thevel57.position.set(2.5, .3, 0);
                thevel57.rotation.y=Math.PI;
                // thevel1.rotation.x = -Math.PI/2 ;
                // thevel55.rotation.y = -Math.PI/4 ;
                line3.add(thevel57);
                // base5.rotation.y=Math.PI;
                // PIEaddElement(thevel1);

            


        });

            var loader = new THREE.FontLoader();
            loader.load("./optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("W", {
                    font: font,
                    size:.3,
                    height: .02,
                    curveSegments: 3
                });

                var thevel58 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xfff }));


                thevel58.position.set(-2.5, .3, 0);
                thevel58.rotation.y=Math.PI;
                // thevel1.rotation.x = -Math.PI/2 ;
                // thevel55.rotation.y = -Math.PI/4 ;
                line3.add(thevel58);
                // base5.rotation.y=Math.PI;
                // PIEaddElement(thevel1);

            


        });


//    var arrow1 = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.45, 32), new THREE.MeshBasicMaterial({ color: "red" }));
//     PIEaddElement(arrow1);
//     arrow1.position.set(-8, -3.8, 2);
//     // arrow1.rotation.y -= 0.3;
//     // arrow1.rotation.z += 1.2;
// arrow1.rotation.x=-Math.PI/6;
// arrow1.rotation.y=Math.PI/6;

//     var arrow1A = new THREE.Mesh(new THREE.tubeGeometry(0.035, 0.035, 0.45, 32), new THREE.MeshBasicMaterial({ color: "red" }));
//     PIEaddElement(arrow1A);
//     arrow1A.position.set(-8, -3.8, 2);
//     // arrow1A.rotation.y += 0.3;
//     arrow1A.rotation.x += 0.3;
    // arrow1A.rotation.z -= 1.2;

    // addHorseShoeMagnet();
    // showBarMagnet();
    // addRingMagnet();
    // addButtonMagnet();
     // showHorseShoeMagnet();
    // showBarMagnet();
    // showRingMagnet();
    // showButtonMagnet();


    // rodTop.rotation.x +=Math.PI/2;

    // var geometry = new THREE.TorusGeometry(2, 0.1, 16, 100);
    // var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    // torus = new THREE.Mesh(geometry, material);
    // torus.position.set(0, 1.8, 4.5);
    // PIEaddElement(torus); //the wire loop

    // for(var i =0 ;i<3; i++){
    //     var geometry = new THREE.TorusGeometry( 2, 0.1, 16, 100 );
    //     var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    //     var torus = new THREE.Mesh( geometry, material );
    //     torus.position.set(0,1.8,4.5+i); 
    //     PIEaddElement( torus );
    // }

    // var squareGeometry4 = new THREE.Geometry();
    // squareGeometry4.vertices.push(new THREE.Vector3(-13, 4.5, -10.5));
    // squareGeometry4.vertices.push(new THREE.Vector3(-13, 4.5, -3.5));
    // squareGeometry4.vertices.push(new THREE.Vector3(-13, -2.5, -3.5));
    // squareGeometry4.vertices.push(new THREE.Vector3(-13, -2.5, -10.5));
    // squareGeometry4.faces.push(new THREE.Face3(0, 1, 2));
    // squareGeometry4.faces.push(new THREE.Face3(0, 2, 3));

    // var squareMaterial4 = new THREE.MeshBasicMaterial({
    //     color: "brown",
    //     side: THREE.DoubleSide,
    //     emissive: 0x111111, envMap: PIEcamera.renderTarget
    // });

    // squareMesh4 = new THREE.Mesh(squareGeometry4, squareMaterial4);
    // squareMesh4.position.set(1, 14.6, 11.5);
    // squareMesh4.rotation.z += Math.PI / 2;
    // PIEaddElement(squareMesh4); //pink box

    PIErender();
}


var horseShoeMagnet;
var sphere1;
var dummy2;
var cube1;
var h;
var u;
function addHorseShoeMagnet(){

//     // var baseGeom = new THREE.BoxGeometry(1, .3, .6);
//     //     sphere1 = new THREE.Mesh(baseGeom, new THREE.MeshBasicMaterial({/*color: 0xd3d3d3*/color: "yellow" }));

//     //     var edges = new THREE.EdgesGeometry(baseGeom);
//     //     var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x8B0000 }));

//     //     sphere1.add(line);


//     //     sphere1.position.set(0,0,0); 

//     // var material = new THREE.LineBasicMaterial( { color: 0x000000 } );
//     // var geometry = new THREE.Geometry();
//     // geometry.vertices.push(new THREE.Vector3( 0, 5.2, 0) );
//     // // geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
//     // geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
//     // // geometry.translate(0,-5,0);

//     // line= new THREE.Line( geometry, material );
//     // // line.rotation.z=Math.PI;
//     // line.position.y=5.2;
//     // line.rotation.z=Math.PI;
    
// //     var axesHelper = new THREE.AxesHelper( 5 );
// // PIEscene.add( axesHelper );
    

//     // dummy2 = new THREE.Object3D();
//     // // dummy2.position.x = 7;
//     // // dummy2.position.z = 5;
//     // PIEaddElement( dummy2 );
//     // dummy2.position.set(0,0,0);

// // var g=new THREE.BoxGeometry( 1, 1, 1);
// //     cube1 = new THREE.Mesh( g, new THREE.MeshBasicMaterial({color:"yellow"}) );
// //     var edges = new THREE.EdgesGeometry( g );
// //     var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x8B0000 } ) );
// //     cube1.add(line);

    
//     // cube1.position.z = - 5;
//     // dummy2.add(cube1);

//      // var lampBulbGeom = new THREE.BoxGeometry(10, 10, 10);
//      var lampBulbGeom = new THREE.SphereGeometry(5, 32, 32);
    
//         h = new THREE.Mesh(lampBulbGeom, new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 }));
//     var edges = new THREE.EdgesGeometry( lampBulbGeom );
//     var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x8B0000 } ) );
//     h.add(line);
//         // h.position.set(-1, -1, -.3);
//         // h.position.set(-1, -1, -.3);
        

//     var curve2 = new THREE.CubicBezierCurve3(
//     new THREE.Vector3(0, 0 ,0),
//     new THREE.Vector3(0, 3.5,0),
//     new THREE.Vector3(2, 3.5 ,0),
//     new THREE.Vector3(2,0, 0)
//     );

//     var tube2 = new THREE.TubeGeometry(curve2, 100, 0.3, 4, false);
//     horseShoeMagnet= new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "red" }));

//     var edges = new THREE.EdgesGeometry( tube2 );
//     var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x8B0000 } ) );

//     // horseShoeMagnet.position.x= 0;
//     // 
//     // horseShoeMagnet.position.set(-.6,-1.8,2);
//     // horseShoeMagnet.rotation.x=-Math.PI/6;
//     // horseShoeMagnet.rotation.y=Math.PI/6;
//     horseShoeMagnet.add(line);
//     h.add(horseShoeMagnet);
//     h.rotation.x=-Math.PI/6+Math.PI/5;
//     h.rotation.z=-Math.PI/100;
//     // h.rotation.y=Math.PI/6;

//     // tube2.applyMatrix( new THREE.Matrix4().makeTranslation(0, 10, 0) );
//     // dummy2.add(horseShoeMagnet);
//    // var a= horseShoeMagnet.getcenter;
//    // console.log(a);

//     // horseShoeMagnet.rotation.y=Math.PI; 
    
//     // tube2.translate(1,4,0);
//     // horseShoeMagnet.position.set(1,4,0); 

//     // sphere1.add(horseShoeMagnet);
//     // sphere1.position.set(1,3,0);

//     // PIEaddElement(horseShoeMagnet);

//     //================Pole 1====================//

//     var curve3 = new THREE.CubicBezierCurve3(
//     new THREE.Vector3(0, 0 ,0),
//     new THREE.Vector3(0, 0,0),
//     new THREE.Vector3(0,-1,0),
//     new THREE.Vector3(0,-1, 0)
//     );

//     var tube3 = new THREE.TubeGeometry(curve3, 100, 0.3, 4, false);
//     var pole1= new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "yellow" }));

//     var edges = new THREE.EdgesGeometry( tube3 );
//     var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: "gray" } ) );

//     pole1.add(line);
//     pole1.rotation.y=Math.PI; 

//     horseShoeMagnet.add(pole1);

    
//     //=======================pole 1==========================//

//   var curve4 = new THREE.CubicBezierCurve3(
//     new THREE.Vector3(-2, 0 ,0),
//     new THREE.Vector3(-2, 0,0),
//     new THREE.Vector3(-2,-1,0),
//     new THREE.Vector3(-2,-1, 0)
//     );

//     var tube4 = new THREE.TubeGeometry(curve4, 100, 0.3, 4, false);
//     var pole2= new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "white" }));

//     var edges =new THREE.EdgesGeometry( tube4 );
//     var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: "gray" } ) );

//     pole2.add(line);
//     pole2.rotation.y=Math.PI; 

//     horseShoeMagnet.add(pole2);




//     //add text of north and south poles


//             var loader = new THREE.FontLoader();
//             loader.load("./optimer.json", function (response) {
//                 font = response;

//                 var geometry = new THREE.TextGeometry("N", {
//                     font: font,
//                     size:.3,
//                     height: .2,
//                     curveSegments: 3
//                 });

//                 var thevel1 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x000 }));


//                 thevel1.position.set(-.12, -.6, -.1);
//                 // thevel1.rotation.x = -Math.PI/2 ;
//                 thevel1.rotation.y = -Math.PI/4 ;
//                 pole1.add(thevel1);
//                 // base5.rotation.y=Math.PI;
//                 // PIEaddElement(thevel1);

            


//         });


//             var loader = new THREE.FontLoader();
//             loader.load("./optimer.json", function (response) {
//                 font = response;

//                 var geometry = new THREE.TextGeometry("S", {
//                     font: font,
//                     size:.3,
//                     height: .2,
//                     curveSegments: 3
//                 });

//                 var thevel2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x000 }));


//                 thevel2.position.set(-.12-2, -.6, -.1);
//                 // thevel1.rotation.x = -Math.PI/2 ;
//                 thevel2.rotation.y = -Math.PI/4 ;
//                 pole2.add(thevel2);
//                 // base5.rotation.y=Math.PI;
//                 // PIEaddElement(thevel1);

            


//         });

//       var loader = new THREE.FontLoader();
//             loader.load("./optimer.json", function (response) {
//                 font = response;

//                 var geometry = new THREE.TextGeometry("N", {
//                     font: font,
//                     size:.3,
//                     height: .05,
//                     curveSegments: 3
//                 });

//                 var thevel3 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x000 }));

                 
//                 thevel3.position.set(0.2, -.6, -.0298);
//                 // thevel1.rotation.x = -Math.PI/2 ;
//                 thevel3.rotation.y = Math.PI/2+Math.PI/4 ;
//                 pole2.add(thevel3);              // thevel1.rotation.x = -Ma-.3h.PI/2 ;
               
//                 pole1.add(thevel3);
//                 // base5.rotation.y=Math.PI;
                

            


//         });


//             var loader = new THREE.FontLoader();
//             loader.load("./optimer.json", function (response) {
//                 font = response;

//                 var geometry = new THREE.TextGeometry("S", {
//                     font: font,
//                     size:.3,
//                     height: .05,
//                     curveSegments: 3
//                 });

//                 var thevel4 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x000 }));


              
//                 thevel4.position.set(0.2-2, -.6, -.0298);
//                 // thevel1.rotation.x = -Math.PI/2 ;
//                 thevel4.rotation.y = Math.PI/2+Math.PI/4 ;
//                 pole2.add(thevel4);
//                 // base5.rotation.y=Math.PI;
//                 // PIEaddElement(thevel1);

//         });

// //==================add horse shoe magnet=======================//
// // horseShoeMagnet.rotation.y=0;
// // console.log("hii");




//=====================================changed=============================================//


        var path = new THREE.Shape(); // create a U-shape with its parts
        path.moveTo(-1, 1);
        path.absarc(0, 0, 1, Math.PI, Math.PI * 2);
        path.lineTo(1, 1);
        path.lineTo(.8, 1);
        path.absarc(0, 0, .8, Math.PI * 2, Math.PI, true);
        path.lineTo(-.8,1);
        path.lineTo(-1, 1);

        var extOpt = { // options of extrusion
            curveSegments: 15,
            steps: 1,
            amount: .2,
            bevelEnabled: false
        }

        var uGeom = new THREE.ExtrudeGeometry(path, extOpt); // create a geometry
        uGeom.center(); // center the geometry
        var average = new THREE.Vector3(); // this variable for re-use
        uGeom.faces.forEach(function(face){
          average.addVectors(uGeom.vertices[face.a], uGeom.vertices[face.b]).add(uGeom.vertices[face.c]).divideScalar(3); // find the average vector of a face
          face.color.setHex(average.x > 0 ? 0xFF0000 : 0x0000FF); // set color of faces, depends on x-coortinate of the average vector
        });




        var uMat = new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors }); // we'll use face colors

        u = new THREE.Mesh(uGeom, uMat);
        var edges = new THREE.EdgesGeometry(uGeom);
        var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x8B0000 }));
        u.add(line);

        u.rotation.x=Math.PI-Math.PI/6;
        u.rotation.y=-Math.PI/6+Math.PI;
        u.position.set(.25,0.3,2);
        





//=====================================poles text=============================================//




            var loader = new THREE.FontLoader();
            loader.load("./optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("N", {
                    font: font,
                    size:.2,
                    height: .02,
                    curveSegments: 3
                });

                var thevel1 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


                // thevel1.position.set(-.12, -.6, -.1);
                thevel1.position.set(.8, .5, .1);
                // thevel1.rotation.x = -Math.PI/2 ;
                // thevel1.rotation.y = -Math.PI/4 ;
                u.add(thevel1);
                // base5.rotation.y=Math.PI;
                // PIEaddElement(thevel1);

            


        });


            var loader = new THREE.FontLoader();
            loader.load("./optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("S", {
                    font: font,
                    size:.2,
                    height: .02,
                    curveSegments: 3
                });

                var thevel2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));

                thevel2.position.set(-1, .5, .1);
                // thevel2.rotation.y = -Math.PI/4 ;
                u.add(thevel2);
                // base5.rotation.y=Math.PI;
                // PIEaddElement(thevel1);

            


        });

      var loader = new THREE.FontLoader();
            loader.load("./optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("N", {
                    font: font,
                    size:.2,
                    height: .02,
                    curveSegments: 3
                });

                var thevel3 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));

                thevel3.position.set(1, .5, -.1);
                thevel3.rotation.y=Math.PI;
                u.add(thevel3);
                // base5.rotation.y=Math.PI;
                

            


        });


            var loader = new THREE.FontLoader();
            loader.load("./optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("S", {
                    font: font,
                    size:.2,
                    height: .02,
                    curveSegments: 3
                });

                var thevel4 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


                thevel4.position.set(-.82, .5, -.1);
                thevel4.rotation.y=Math.PI;
                u.add(thevel4);
              
                // base5.rotation.y=Math.PI;
                // PIEaddElement(thevel1);

        });


}

function showHorseShoeMagnet(){

    // PIEaddElement(horseShoeMagnet); 
    PIEaddElement(u);

}

var base5;
var bar;

function addBarMagnet(){


           var lampBulbGeom = new THREE.BoxGeometry(2, .3, .6);
    
        bar = new THREE.Mesh(lampBulbGeom, new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true, opacity: 0 }));

        bar.position.set(.3, 0, 0);
        
        //North pole
        var baseGeom = new THREE.BoxGeometry(1, .3, .6);
        base5 = new THREE.Mesh(baseGeom, new THREE.MeshBasicMaterial({/*color: 0xd3d3d3*/color: "red" }));

        var edges = new THREE.EdgesGeometry(baseGeom);
        var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x8B0000 }));

        base5.add(line);


        base5.position.set(-.5,0,0); 
        bar.add(base5);
        // bar.rotation.x=-Math.PI/6-Math.PI/2;
         bar.rotation.y=-Math.PI/6;
         // base5.rotation.x=Math.PI/6;
         // base5.rotation.x=-Math.PI;
         // base5.rotation.y=Math.PI/6;

        //south pole
        var baseGeom = new THREE.BoxGeometry(1, .32, .6);
        base6 = new THREE.Mesh(baseGeom, new THREE.MeshBasicMaterial({/*color: 0xd3d3d3*/color: "black" }));

        var edges = new THREE.EdgesGeometry(baseGeom);
        var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x696969 }));

        base6.add(line);


        base6.position.set(1,0,0);

        base5.add(base6);
        // base5.rotation.x=Math.PI/2;
// 


        // PIEaddElement(base5);

        //add text of north and south poles


            var loader = new THREE.FontLoader();
            loader.load("./optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("N", {
                    font: font,
                    size: .3,
                    height: .2,
                    curveSegments: 3
                });

                var thevel1 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


                thevel1.position.set(-.15, .01, 0.15);
                thevel1.rotation.x = -Math.PI / 2;
                base5.add(thevel1);
                // base5.rotation.y=Math.PI;
                // PIEaddElement(thevel1);

            


        });

        loader.load("./optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("S", {
                    font: font,
                    size: .3,
                    height: .2,
                    curveSegments: 3
                });

                var thevel2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


                thevel2.position.set(-.15, -.02, 0.15);
                thevel2.rotation.x = -Math.PI / 2;
                base6.add(thevel2);
                // base5.rotation.x=Math.PI;
                // PIEaddElement(thevel1);

            


        });

            var loader = new THREE.FontLoader();
            loader.load("./optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("N", {
                    font: font,
                    size: .3,
                    height: .05,
                    curveSegments: 3
                });

                var thevel3 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


                thevel3.position.set(-.15, -0.12, -0.1);
                thevel3.rotation.x = Math.PI/2;
                base5.add(thevel3);
                // base5.rotation.y=Math.PI;
                // PIEaddElement(thevel1);

            


        });

        loader.load("./optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("S", {
                    font: font,
                    size: .3,
                    height: .05,
                    curveSegments: 3
                });

                var thevel4 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


                thevel4.position.set(-0.15, -0.12, -0.1);
                thevel4.rotation.x = Math.PI / 2;
                base6.add(thevel4);
                // base5.rotation.x=Math.PI;
                // PIEaddElement(thevel1);

            


        });

           // base5.rotation.x=Math.PI;


}


function showBarMagnet()
{
    // console.log(base5);
    // PIEaddElement(base5);
    PIEaddElement(bar);
}


var buttonMagnet;
function addButtonMagnet(){



    var lampBottomGeom = new THREE.CylinderGeometry(.8, .8, 0.2, 100);//bottom of bulb
    buttonMagnet = new THREE.Mesh(lampBottomGeom, new THREE.MeshBasicMaterial({ color: "gray"/*, shininess: 0 */}));
    

    var edges = new THREE.EdgesGeometry(lampBottomGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: "black" }));

    buttonMagnet.add(line);
    buttonMagnet.position.set(.2, .5, 2);

    buttonMagnet.rotation.x=-Math.PI/2-Math.PI/6;
    buttonMagnet.rotation.z=-Math.PI/6+Math.PI;
 
     //add text of north and south poles


            var loader = new THREE.FontLoader();
            loader.load("./optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("N", {
                    font: font,
                    size: .3,
                    height: .05,
                    curveSegments: 3
                });

                var thevel1 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xff0000 }));


                thevel1.position.set(-.12, .1, .2);
                thevel1.rotation.x = -Math.PI / 2;
                buttonMagnet.add(thevel1);
                // base5.rotation.y=Math.PI;
                // PIEaddElement(thevel1);
        });
            

        loader.load("./optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("S", {
                    font: font,
                    size: .3,
                    height: .05,
                    curveSegments: 3
                });

                var thevel2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x000 }));


                thevel2.position.set(-.12, -.1, -.2);      
                thevel2.rotation.x = Math.PI/2;
                buttonMagnet.add(thevel2);
                base5.rotation.x=Math.PI/2;
                // PIEaddElement(thevel1);

            


        });


    
}


function showButtonMagnet(){
    PIEaddElement(buttonMagnet);
}



var ringMagnet;
function addRingMagnet(){

    var lampBottomGeom = new THREE.CylinderGeometry(.8, .8, .20, 100,1,true);//bottom of bulb

    ringMagnet = new THREE.Mesh(lampBottomGeom, new THREE.MeshLambertMaterial({ color: "silver"/*, shininess: 0 */}));
    
    var edges = new THREE.EdgesGeometry(lampBottomGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: "gray" }));

    ringMagnet.add(line);
    ringMagnet.position.set(.2, .5, 2);

    ringMagnet.rotation.x=-Math.PI/2-Math.PI/6;
    ringMagnet.rotation.z=-Math.PI/6+Math.PI;
    // buttonMagnet.rotation.x=Math.PI/4;


    var lampBottomGeom = new THREE.CylinderGeometry(.4, .4, 0.2, 100, 1,true);//bottom of bulb
    var ringMagnet2 = new THREE.Mesh(lampBottomGeom, new THREE.MeshBasicMaterial({ color: "silver",/*, shininess: 0 */}));
    
    var edges = new THREE.EdgesGeometry(lampBottomGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: "gray" }));

    ringMagnet2.add(line);
    ringMagnet2.position.set(0, 0,0);
    
    ringMagnet.add(ringMagnet2);

    //circular rings

    var ringGeometry = new THREE.RingGeometry( .4, .8,100,100);
    var material = new THREE.MeshBasicMaterial( { color: "red", side: THREE.DoubleSide } );
    var ring1 = new THREE.Mesh( ringGeometry, material );
    
    ring1.position.set(0,.1,0);
    ring1.rotation.x=-Math.PI/2;
    ringMagnet.add(ring1);


    var ringGeometry1 = new THREE.RingGeometry( .4, .8,100,100);
    var material1 = new THREE.MeshBasicMaterial( { color: "black", side: THREE.DoubleSide } )
    
    var ring2 = new THREE.Mesh( ringGeometry1, material1);
    
    ring2.position.set(0,-0.1,0);
    ring2.rotation.x=-Math.PI/2;
    ringMagnet.add(ring2);



       //add text of north and south poles


            var loader = new THREE.FontLoader();
            loader.load("./optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("N", {
                    font: font,
                    size: .2,
                    height: .05,
                    curveSegments: 3
                });

                var thevel1 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


                thevel1.position.set(-.65, -.01, 0);
                // thevel1.rotation.x = Math.PI / 2;
                ring1.add(thevel1);
                // base5.rotation.y=Math.PI;
                // PIEaddElement(thevel1);
        });


        loader.load("./optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("S", {
                    font: font,
                    size: .2,
                    height: .05,
                    curveSegments: 3
                });

                var thevel2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


                thevel2.position.set(-.65, -.01, 0);       
                thevel2.rotation.x = -Math.PI;
                ring2.add(thevel2);
                // base5.rotation.x=Math.PI;
                // PIEaddElement(thevel1);

            


        });



    // PIEaddElement(ringMagnet);
        // ringMagnet.rotation.x=Math.PI/2;


        



}


function showRingMagnet(){
    PIEaddElement(ringMagnet);
}

var torusKnot;
var line;
function addString(){

    var geometry = new THREE.TorusKnotGeometry( .19, .03, 300, 100,1,1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x000 } );
    torusKnot = new THREE.Mesh( geometry, material );
    torusKnot.position.set(3.6,-.6,0);
    torusKnot.rotation.y=Math.PI/6;
    meshS.add(torusKnot );

// how to rotate an object around the different point here its 5.2, 0, 0
    dummy = new THREE.Object3D();

    var material = new THREE.LineBasicMaterial( { color: 0x000000 } );
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3( -0.3, 5.4, 0) );
    // geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
    geometry.vertices.push(new THREE.Vector3( -0.3, 0, 0) );
    // geometry.translate(0,-5,0);

    line= new THREE.Line( geometry, material );
    // line.rotation.z=Math.PI;
    line.position.y=5.4;
    line.rotation.z=Math.PI;
    
    dummy.add(line);
    PIEaddElement(dummy);

    // meshS.add(line);
    

    // var cuboidOrange = new THREE.Mesh(new THREE.BoxGeometry(.1, .1, .1, 4, 4, 1), new THREE.MeshBasicMaterial({ color: "white" }));
    // cuboidOrange.position.set(0, 0, 0);
    // PIEaddElement(cuboidOrange);//battery

    // var cuboidOrange1 = new THREE.Mesh(new THREE.BoxGeometry(.1, .1, .1, 4, 4, 1), new THREE.MeshBasicMaterial({ color: "white" }));
    // cuboidOrange1.position.set(0, 5, 0);
    // PIEaddElement(cuboidOrange1);//battery

    // var cuboidOrange2 = new THREE.Mesh(new THREE.BoxGeometry(.1, .1, .1, 4, 4, 1), new THREE.MeshBasicMaterial({ color: "white" }));
    // cuboidOrange2.position.set(0, -5, 0);
    // PIEaddElement(cuboidOrange2);//battery


    // line.rotation.z=Math.PI;

    //     var curve = new THREE.CubicBezierCurve3(
    //     new THREE.Vector3(0,0, 0),
    //     new THREE.Vector3(0,0, 0),
    //     new THREE.Vector3(0, -5, 0),
    //     new THREE.Vector3(0,-5, 0)
    // );

    // var tube = new THREE.TubeGeometry(curve, 40, 0.05, 20, false);
    // line = new THREE.Mesh(tube, new THREE.MeshBasicMaterial({ color: "black" }));
    // tube.translate(0,5,0);
    // // line.position.set(0,0,0);
    // PIEaddElement(line);
    
    // // line.rotation.z=Math.PI;

    }

// var north, west, east, meshS;
// function addDirecLetters() {
//     north = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.35, 32), new THREE.MeshBasicMaterial({ color: "red" }));
//     //PIEaddElement(north);
//     north.geometry.translate(0.1, 0, 0);
//     north.rotation.x += Math.PI / 2;

//     var north2 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.4, 32), new THREE.MeshBasicMaterial({ color: "red" }));
//     //PIEaddElement(north2);
//     north2.geometry.translate(0.17, 0.1, 0);
//     //north2.rotation.x += Math.PI/2;
//     north2.rotation.z -= Math.PI / 6;
//     north.add(north2);

//     var north3 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.35, 32), new THREE.MeshBasicMaterial({ color: "red" }));
//     //PIEaddElement(north3);
//     north3.geometry.translate(0.3, 0, 0);
//     //north3.rotation.x += Math.PI/2;
//     north.add(north3);

//     west = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.35, 32), new THREE.MeshBasicMaterial({ color: "red" }));
//     //PIEaddElement(west);
//     //west.position.set(-11.4,-0.4,3);
//     west.rotation.x += Math.PI / 2;

//     var west2 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.15, 32), new THREE.MeshBasicMaterial({ color: "red" }));
//     //PIEaddElement(west2);
//     west2.geometry.translate(0.1, 0.05, 0);
//     //west2.rotation.x += Math.PI/2;
//     west2.rotation.z += Math.PI / 5.2;
//     west.add(west2);

//     var west3 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.15, 32), new THREE.MeshBasicMaterial({ color: "red" }));
//     //PIEaddElement(west3);
//     west3.geometry.translate(0.06, 0.18, 0);
//     //west3.rotation.x += Math.PI/2;
//     west3.rotation.z -= Math.PI / 5.2;
//     west.add(west3);

//     var west4 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.35, 32), new THREE.MeshBasicMaterial({ color: "red" }));
//     //PIEaddElement(west4);
//     west4.geometry.translate(0.2, 0, 0);
//     //west4.rotation.x += Math.PI/2;
//     west.add(west4);

//     east = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.35, 32), new THREE.MeshBasicMaterial({ color: "red" }));
//     //PIEaddElement(east);
//     //east.position.set(10.4,-0.4,3);
//     east.rotation.x += Math.PI / 2;

//     var east2 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.15, 32), new THREE.MeshBasicMaterial({ color: "red" }));
//     //PIEaddElement(east2);
//     east2.geometry.translate(0, -0.08, 0);
//     //east2.rotation.x += Math.PI/2;
//     east2.rotation.z += Math.PI / 2;
//     east.add(east2);

//     var east3 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.15, 32), new THREE.MeshBasicMaterial({ color: "red" }));
//     //PIEaddElement(east3);
//     east3.geometry.translate(0.18, 0.08, 0);
//     //east3.rotation.x += Math.PI/2;
//     east3.rotation.z -= Math.PI / 2;
//     east.add(east3);

//     var east4 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.15, 32), new THREE.MeshBasicMaterial({ color: "red" }));
//     //PIEaddElement(east4);
//     east4.geometry.translate(-0.18, 0.08, 0);
//     //east4.rotation.x += Math.PI/2;
//     east4.rotation.z -= Math.PI / 2;
//     east.add(east4);

//     var curveS = new THREE.CubicBezierCurve3(
//         new THREE.Vector3(0.2, -0.4, 11),
//         new THREE.Vector3(-0.5, -0.4, 11.4),
//         new THREE.Vector3(0.1, -0.4, 11.7),
//         new THREE.Vector3(0.1, -0.4, 11.7)
//     );

//     var tubeS = new THREE.TubeGeometry(curveS, 40, 0.07, 20, false);
//     meshS = new THREE.Mesh(tubeS, new THREE.MeshBasicMaterial({ color: "red" }));

//     // PIEaddElement(meshS);	

//     var curveS2 = new THREE.CubicBezierCurve3(
//         new THREE.Vector3(0.1, -0.4, 11.7),
//         new THREE.Vector3(0.5, -0.4, 12.1),
//         new THREE.Vector3(-0.2, -0.4, 12.2),
//         new THREE.Vector3(-0.2, -0.4, 12.2)
//     );

//     var tubeS2 = new THREE.TubeGeometry(curveS2, 40, 0.07, 20, false);
//     var meshS2 = new THREE.Mesh(tubeS2, new THREE.MeshBasicMaterial({ color: "red" }));

//     meshS.add(meshS2);
// }
/////////////////////////////////////////////
function addElementsToScene() {
    // addCurvedWire();
    // addBulb();
    // addSwitch();
    // mybattery(0, 0, 0);
    addTable();
    // addMeter();
    // addArrows();
    addBarMagnet();
    addButtonMagnet();
    addHorseShoeMagnet();
    addRingMagnet();
    addRod();
    addString();
    // addDirecLetters();
}
//////////////////////////////////////////////////////////////////
//shows th e loops 
var currentrotation;
function startAnimation() {
    console.log("in start animation");    // flag = 1;
    // if (currdir == 0) {
    //     if (needprism1.position.x - 0.7 < (9 / (8 - currentVoltage))) {
    //         mydragf(meterTop, new THREE.Vector3(meterTop.position.x, meterTop.position.y, meterTop.position.z));
    //     }
    //     // showClockArrows();
    // }
    // else {
    //     if (needprism1.position.x - 0.7 < (9 / (8 - currentVoltage))) {
    //         mydragf(meterTop, new THREE.Vector3(meterTop.position.x, meterTop.position.y, meterTop.position.z));
    //     }
    //     // showAntiArrows();
    // }
    // // addFieldLines();
    // mydragf2(torus, new THREE.Vector3(torus.position.x, torus.position.y, torus.position.z));
    // prism1.rotation.z += Math.PI / 8;
    // prism1.position.y += -0.25;
    // prism2.rotation.z += -Math.PI / 8;
    // prism2.position.y += +0.25;
    // lampBulb.material.color.set("yellow");
    // isStart = 0;
    //  var curveS2 = new THREE.CubicBezierCurve3(
    //     new THREE.Vector3(0.1, -0.4, 11.7),
    //     new THREE.Vector3(0.5, -0.4, 12.1),
    //     new THREE.Vector3(-0.2, -0.4, 12.2),
    //     new THREE.Vector3(-0.2, -0.4, 12.2)
    // );

    // var tubeS2 = new THREE.TubeGeometry(curveS2, 40, 0.07, 20, false);
    // var meshS2 = new THREE.Mesh(tubeS2, new THREE.MeshBasicMaterial({ color: "red" }));

    // meshS.add(meshS2);
   
    // PIEstartAnimation();
    // startOrbitalControls();
    // level2Case3();
    PIErender();
    // removeElements();

}

////////////////////////////////////////////////////////////////////
//animation stops due to this func
function stopAnimation() {
    // flag = 0;
    // needprism1.rotation.z = 0;
    // prism1.rotation.z += -Math.PI / 8;
    // prism1.position.y += +0.25;
    // prism2.rotation.z += +Math.PI / 8;
    // prism2.position.y += -0.25;
    // lampBulb.material.color.set("white");
    // showNoArrows();
    // removeFieldlines();
    // removeElements();
    // PIEstopAnimation(); //removes the field lines and the arrows on it at the stop button 
    
    PIErender();
    console.log("at end stop anim");
    hasChosen=1;
    
    // PIEchangeInputCheckbox("Bar Magnet",false);
    // PIEchangeInputCheckbox("Button Magnet",false);
    // PIEchangeInputCheckbox("Ring Magnet",false);
    // PIEchangeInputCheckbox("Horse Shoe Magnet",false);

    flag1=1;
    flag2=1;
    flag3=1;
    flag4=1;


    //set all the magnets  to their orignal positions

        bar.position.set(.3, 0, 0);
        bar.rotation.y=Math.PI/6;

        
        // horseShoeMagnet.position.set(-.6,-1.8,2);
        // horseShoeMagnet.rotation.x=-Math.PI/6;
        // horseShoeMagnet.rotation.y=Math.PI/6;

        u.rotation.x=Math.PI-Math.PI/6;
        u.rotation.y=-Math.PI/6+Math.PI;
        u.position.set(.25,0.3,2);

        ringMagnet.position.set(.2, .5, 2);
        ringMagnet.rotation.x=-Math.PI/2-Math.PI/6;
        ringMagnet.rotation.z=-Math.PI/6+Math.PI;

        buttonMagnet.position.set(.2, .5, 2);
        buttonMagnet.rotation.x=-Math.PI/2-Math.PI/6;
        buttonMagnet.rotation.z=-Math.PI/6+Math.PI;

        PIErender();



    
}

/////////////////////////////////////////////////////////
var objects = [];
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var flag = 0;
// function PIEmouseMove(event) {
//     var intersects;     // to hold return array of ray intersects

//     event.defaultPrevented = true;

//     PIEmouseP.x = (event.clientX / PIEcanvasW) * 2 - 1;
//     PIEmouseP.y = - (event.clientY / PIEcanvasH) * 2 + 1;

//     /* Cast the ray to find intersectsing objects */
//     PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);

//     if (PIEselectedDrag != null) {   /* Drag the element */
//         PIEraycaster.ray.intersectPlane(PIEdragPlane, PIEdragIntersect);
//         PIEdefaultDrag(PIEselectedDrag, PIEdragIntersect.sub(PIEdragOffset));
//     }
//     else {   /* If possible Call hoveron method of the nearest element */
//         intersects = PIEraycaster.intersectObjects([prism2, prism1, meterTop, torus]);
//         if (intersects.length > 0) {
//             PIEdragPlane.setFromNormalAndCoplanarPoint(PIEcamera.getWorldDirection(PIEdragPlane.normal), intersects[0].object.position);
//             if (PIEselectedHover != intersects[0].object) {
//                 PIEdefaultHoverOFF(PIEselectedHover);
//                 PIEselectedHover = intersects[0].object;
//                 PIEdefaultHoverON(PIEselectedHover);
//             }
//             PIEscreenElem.style.cursor = 'pointer';
//         }
//         else if (PIEselectedHover != null) {
//             PIEdefaultHoverOFF(PIEselectedHover);
//             PIEselectedHover = null;
//             PIEscreenElem.style.cursor = 'auto';
//         }
//     }
// }

////////////////////////////////////////////////////////////////

function PIEmouseDown(event) {

    // var intersects;     // to hold return array of ray intersects

    // // console.log("Mouse Down at ", PIEmouseP);
    // event.defaultPrevented = true;
    // PIEselectedDrag = null;

    // PIEmouseP.x = (event.clientX / PIEcanvasW) * 2 - 1;
    // PIEmouseP.y = - (event.clientY / PIEcanvasH) * 2 + 1;

    // PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);
    // intersects = PIEraycaster.intersectObjects(PIEdragElements);
    // if (intersects.length > 0) {
    //     PIEselectedDrag = intersects[0].object;
    //     if (PIEraycaster.ray.intersectPlane(PIEdragPlane, PIEdragIntersect)) {
    //         PIEdragOffset.copy(PIEdragIntersect).sub(PIEselectedDrag.position);
    //     }
    //     PIEscreenElem.style.cursor = 'move';
    //     PIEdefaultDragStart(PIEselectedDrag);
    // }

    // intersects = PIEraycaster.intersectObjects([prism2, prism1]);
    // if (intersects.length > 0) {
    //     if (flag == 0) {
    //         startAnimation();
    //     } else {
    //         stopAnimation();
    //     }
    // }
    // PIErender();
}

/////////////////////////////////////////////

// function test() {
// }
// /////////////////////////////////////////////

// var currentVoltage = 4;
// function test2(volt) {
//     PIEchangeDisplayCommand("Voltage : " + currentVoltage + "V", "Voltage : " + volt + "V", test);
//     currentVoltage = volt;
// }
//////////////////////////////////////////////

// function showClockArrows() {
//     arrow1.visible = true;
//     arrow2.visible = true;
//     arrow1A.visible = false;
//     arrow2A.visible = false;


//     arrow3.visible = false;
//     arrow4.visible = false;
//     arrow5.visible = true;
//     arrow6.visible = true;

//     arrow3A.visible = true;
//     arrow4A.visible = true;
//     arrow5A.visible = false;
//     arrow6A.visible = false;
// }

// function showAntiArrows() {
//     arrow1.visible = false;
//     arrow2.visible = false;
//     arrow1A.visible = true;
//     arrow2A.visible = true;


//     arrow3.visible = true;
//     arrow4.visible = true;
//     arrow5.visible = false;
//     arrow6.visible = false;

//     arrow3A.visible = false;
//     arrow4A.visible = false;
//     arrow5A.visible = true;
//     arrow6A.visible = true;
// }

// function showNoArrows() {
//     arrow1.visible = false;
//     arrow2.visible = false;
//     arrow1A.visible = false;
//     arrow2A.visible = false;


//     arrow3.visible = false;
//     arrow4.visible = false;
//     arrow5.visible = false;
//     arrow6.visible = false;

//     arrow3A.visible = false;
//     arrow4A.visible = false;
//     arrow5A.visible = false;
//     arrow6A.visible = false;
// }


/////////////////////////////////////////////////////////////////

function loadExperimentElements() {

    PIEsetExperimentTitle("Magnetic Direction");
    PIEsetDeveloperName("Diwakar");

    initialiseHelp();
    initialiseInfo();
    initialiseScene();
    learnMore();
    var learnmore=PIEaddButton("Learn More");
    learnmore.addEventListener("click",PIEshowConcept);
    addElementsToScene();

    // PIEadjustCamera(-2,5,5);
    // PIEsetCameraFOV(1.414);
    // PIEturnCamera(100,5,0)
    PIEadjustDisplayScene();
    // PIEcamera.rotation.x=-Math.PI/2


    // var geometry = new THREE.CircleGeometry(0.75, 32);
    // var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    // var circle = new THREE.Mesh(geometry, material);
    // geometry.translate(0, 0, 0.21);
    // circle.rotation.x += -Math.PI / 2;
    // meterTop.add(circle);

    // north.position.set(-0.2, 0.2, -0.5);
    // meterTop.add(north);
    // west.position.set(-0.6, 0.2, 0);
    // meterTop.add(west);
    // east.position.set(0.4, 0.2, 0);
    // meterTop.add(east);
    // meshS.position.set(0, 0.6, -3);
    // meshS.scale.x -= 0.7;
    // meshS.scale.z -= 0.7;
    // meterTop.add(meshS);
    // PrismGeometry = function (vertices, height) {
    //     var Shape = new THREE.Shape();

    //     (function f(ctx) {

    //         ctx.moveTo(vertices[0].x, vertices[0].y);
    //         for (var i = 1; i < vertices.length; i++) {
    //             ctx.lineTo(vertices[i].x, vertices[i].y);
    //         }

    //         ctx.lineTo(vertices[0].x, vertices[0].y);

    //     })(Shape);

    //     var settings = {};
    //     settings.amount = height;
    //     settings.bevelEnabled = false;
    //     THREE.ExtrudeGeometry.call(this, Shape, settings);

    // };

    // PrismGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype);

    // var A = new THREE.Vector2(-0.15, 0);
    // var B = new THREE.Vector2(0.15, 0);
    // var C = new THREE.Vector2(0, 0.7);

    // var height1 = 0.2;

    // var geometry1 = new PrismGeometry([A, B, C], height1);

    // var material1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });

    // needprism1 = new THREE.Mesh(geometry1, material1);
    // // PIEaddElement(needprism1); //compass needle
    // needprism1.position.set(0.8, 0.6, 5.05);


    // var A1 = new THREE.Vector2(-0.15, 0);
    // var B1 = new THREE.Vector2(0.15, 0);
    // var C1 = new THREE.Vector2(0, 0.7);

    // var height2 = 0.2;

    // var geometry2 = new PrismGeometry([A1, B1, C1], height2);

    // var material2 = new THREE.MeshBasicMaterial({ color: 0x000 });

    // needprism2 = new THREE.Mesh(geometry2, material2);
    // needprism2.rotation.z = Math.PI;
    // needprism1.add(needprism2);
    // meterTop.rotation.x += -Math.PI / 2;
    // needprism1.rotation.x += -Math.PI / 2;
    // meterTop.position.y += 1.35;
    // needprism1.position.y += 1.35;
    // needprism1.position.x -= 0.8;
    // meterTop.position.x -= 0.8;
    // needprism1.position.z += 1.6;
    // meterTop.position.z += 1.6;
    // PIEaddElement(meterTop);
    //it is for adding the compass

    // PIEdragElement(meterTop);
    // PIEsetDrag(meterTop, mydragf);//makes the compass draggable

    // PIEdragElement(torus); //makes the wire loop draggable
    // PIEsetDrag(torus, mydragf2); //sets ther boundary to drag

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    // tlX 		The top left x coordinate of the scene(area of interest)
    // tlY 		The top left y coordinate of the scene(area of interest)
    // brX 		The bottom right x coordinate of the scene(area of interest)
    // brY 		The bottom right y coordinate of the scene(area of interest)

    startOrbitalControls();
    //dom manip
    document.getElementById("start").addEventListener("click", startAnimation);
    document.getElementById("stop").addEventListener("click", stopAnimation);

    // PIEaddInputSlider("Voltage", 4, test2, 1, 5, 0.5);
    //The label to appear on the input element
    // value 		The initial value of the slider
    // notify 		The callback function to be called on slider change completion
    // min 		The Minimum value in slider
    // max 		The Maximum value in slider
    // step 		The The step by which slider should change
    // PIEaddInputSlider("Number of turns", 1, test3, 1, 5, 1);


    // PIEaddInputCommand("Current Direction :", test);
    // label 		The label to appear on the command
    // notify 		The command function to be called
    // PIEaddInputCheckbox("Clockwise", true, checkClock);
    // label 		The label to appear on the checkbox element
    // value 		The initial value of the checkbox element
    // notify 		The callback function to be called on click
    // PIEaddInputCheckbox("Anti-Clockwise", false, checkAntiClock);
    PIEinputGUI.width = 280; //sets the width of input panel
    // var a = "Voltage : " + currentVoltage + "V";

    // PIEaddDisplayCommand(a, test);
    //PIEaddDisplayCommand(, test);
    PIEaddInputCheckbox("Bar Magnet",false,chooseBarMagnet);
    PIEaddInputCheckbox("Button Magnet",false,chooseButtonMagnet);
    PIEaddInputCheckbox("Ring Magnet",false,chooseRingMagnet);
    PIEaddInputCheckbox("Horse Shoe Magnet",false,chooseHsMagnet);

    PIEaddInputCommand("Change Poles",changePoles);

    //==================to start the experiment with bar magnet======================================//

    chooseBarMagnet();
    // This function adds a command element to the Display panel

    // The label is the id(label) appearing on the command button.

    //     Parameters:
    // Name 	Type 	Description
    // label 		The label to appear on the command
    // notify 		The command function to be called

    // showNoArrows();
    PIErender();
    

    // objects.push(prism2);
    //  objects.push(prism1);

    //PIEdragElement(prism1);
    //PIEdragElement(prism2);
    //PIEsetDrag(prism1, test);
    //PIEsetDrag(prism2, test);
    //   document.addEventListener('mousedown', onDocumentMouseDown, false );
}

var originalPolesBar=true;
var originalPolesRing=true;
var originalPolesHs=true;
var originalPolesButton=true;


function changePoles(){

    // console.log("hi");
    PIEstopAnimation();
    if(hasChosen){
        if(choice=="barmagnet"){
            if(originalPolesBar){
                originalPolesBar=false;
                changeStart=1;
                bar.position.set(.3, 0, 0);
                bar.rotation.y = Math.PI / 6 + Math.PI;
                PIErender();
            }
            else{
                originalPolesBar=true;
                bar.position.set(.3, 0, 0);
                bar.rotation.y = Math.PI / 6;
                PIErender();
            }
           
        }
        else if(choice=="ringmagnet"){
            if (originalPolesRing) {
                originalPolesRing=false;
                changeStart=1;
                ringMagnet.position.set(.2, .5, 2);
                ringMagnet.rotation.x=-Math.PI/2-Math.PI/6;
                ringMagnet.rotation.z = -Math.PI / 6 ;
                PIErender();
            }
            else {
                originalPolesRing=true;
                ringMagnet.position.set(.2, .5, 2);
                ringMagnet.rotation.x=-Math.PI/2-Math.PI/6;
                ringMagnet.rotation.z=-Math.PI/6+Math.PI;
                PIErender();
            }
            
        }
        else if(choice=="buttonmagnet"){
            if (originalPolesButton) {
                originalPolesButton=false;
                changeStart=1;
                buttonMagnet.position.set(.2, .5, 2);
                buttonMagnet.rotation.x=-Math.PI/2-Math.PI/6;
                buttonMagnet.rotation.z = -Math.PI / 6;
                PIErender();
            }
            else {
                originalPolesButton=true;
                buttonMagnet.position.set(.2, .5, 2);
                buttonMagnet.rotation.x=-Math.PI/2-Math.PI/6;
                buttonMagnet.rotation.z=-Math.PI/6+Math.PI;
                PIErender();
            }

        }
        else if(choice=="horseshoemagnet"){
            if (originalPolesHs) {
                originalPolesHs = false;
                changeStart=1;
                u.rotation.x=Math.PI-Math.PI/6;
                u.rotation.y=-Math.PI/6+Math.PI+Math.PI;
                u.position.set(.25,0.3,2);
                PIErender();
            }
            else {
                originalPolesHs = true;
                 
                u.rotation.x=Math.PI-Math.PI/6;
                u.rotation.y=-Math.PI/6+Math.PI;
                u.position.set(.25,0.3,2);
                PIErender();
            }

        }

    }
}
        // bar.position.set(.3, 0, 0);
        // bar.rotation.y=Math.PI/6;

        
        // horseShoeMagnet.position.set(-.6,-1.8,2);
        // horseShoeMagnet.rotation.x=-Math.PI/6;
        // horseShoeMagnet.rotation.y=Math.PI/6;

        // ringMagnet.position.set(.2, .5, 2);
        // ringMagnet.rotation.x=-Math.PI/2-Math.PI/6;
        // ringMagnet.rotation.z=-Math.PI/6+Math.PI;

        // buttonMagnet.position.set(.2, .5, 2);
        // buttonMagnet.rotation.x=-Math.PI/2-Math.PI/6;
        // buttonMagnet.rotation.z=-Math.PI/6+Math.PI;
var flag1=1;
var flag2=1;
var flag3=1;
var flag4=1;

function chooseBarMagnet(){
    if(flag1==1){
    // alert("hi");
    stopAnimation();
    PIEstopAnimation();
    flag1=0;
    flag2=1;
    flag3=1;
    flag4=1;
    removePrevMagnets();
    PIEchangeInputCheckbox("Bar Magnet",true);
    PIEchangeInputCheckbox("Button Magnet",false);
    PIEchangeInputCheckbox("Ring Magnet",false);
    PIEchangeInputCheckbox("Horse Shoe Magnet",false);
   choice="barmagnet";
   hasChosen=1;
   showBarMagnet();
   PIErender();
}


}
function chooseHsMagnet(){

   if(flag2==1){
    flag1=1;
    flag2=0;
    flag3=1;
    flag4=1;
   stopAnimation();
   PIEstopAnimation();
   removePrevMagnets();
    PIEchangeInputCheckbox("Bar Magnet",false);
    PIEchangeInputCheckbox("Button Magnet",false);
    PIEchangeInputCheckbox("Ring Magnet",false);
    PIEchangeInputCheckbox("Horse Shoe Magnet",true);
   choice="horseshoemagnet";
   hasChosen=1;
   showHorseShoeMagnet();
   PIErender();
}

}
function chooseButtonMagnet(){

   if(flag3==1){
    flag1=1;
    flag2=1;
    flag3=0;
    flag4=1;
   stopAnimation();
   PIEstopAnimation();
   removePrevMagnets();
    PIEchangeInputCheckbox("Bar Magnet",false);
    PIEchangeInputCheckbox("Button Magnet",true);
    PIEchangeInputCheckbox("Ring Magnet",false);
    PIEchangeInputCheckbox("Horse Shoe Magnet",false);
   choice="buttonmagnet";
   hasChosen=1;
   showButtonMagnet();
   PIErender();

}
}
function chooseRingMagnet(){

   if(flag4==1){
    flag1=1;
    flag2=1;
    flag3=1;
    flag4=0;
   stopAnimation();
   PIEstopAnimation();
   removePrevMagnets();
    PIEchangeInputCheckbox("Bar Magnet",false);
    PIEchangeInputCheckbox("Button Magnet",false);
    PIEchangeInputCheckbox("Ring Magnet",true);
    PIEchangeInputCheckbox("Horse Shoe Magnet",false);
   choice="ringmagnet";
   hasChosen=1;
   showRingMagnet();
   PIErender();
}


}


function removePrevMagnets(){

    PIEremoveElement(bar);
    PIEremoveElement(u);
    PIEremoveElement(ringMagnet);
    PIEremoveElement(buttonMagnet);
    PIErender();


}


function resetExperiment() {


}




var tita;
var titaline;
var x=0;
var ang;
var changeStart=1;

function updateExperimentElements(t, dt) {
   if(t==0)
    ang=Math.PI/180;

    if(hasChosen==1)
   {
    tita = -0.2*(t/1000);
    titaline = -0.06*(t/1000);
    titaline2 = -0.03*(t/1000);
    
    if(choice=="barmagnet"){
        // bar.position.set(.3, 0, 0);
        // bar.rotation.y = Math.PI / 6;
        if (Math.floor(t / 1000) < 50&&t>0){
            if(!originalPolesBar){
                if (bar.rotation.y > 0.525&&changeStart==1)
                    bar.rotation.y -= Math.PI / 100;
                else{
                    // console.log("hello");
                    changeStart=0;
                    // bar.position.set(.3, 0, 0);
                    // bar.rotation.y = Math.PI / 6;
                    bar.rotation.y+=Math.PI/100*Math.pow(2.7, titaline)*Math.cos((2*Math.PI/5)*(t/1000));
                    // console.log(t / 1000);
                }
            }
            else{
                // console.log("hiiiii");
                bar.rotation.y -= Math.PI / 50 * Math.pow(2.7, titaline) * Math.cos((2 * Math.PI / 7) * (t / 1000));
                // console.log(t / 1000);

            }
           

            // console.log(bar.rotation.y);
           
        }
        else{
            bar.position.set(.3, 0, 0);
            bar.rotation.y = Math.PI / 6;
            // console.log(t / 1000);
        }
    }
    else if(choice=="horseshoemagnet"){
        // tita = -0.05*(t/1000);
        // u.rotation.y+=Math.PI/100*Math.pow(2.7, tita)*Math.cos(t/1000);
        if (Math.floor(t / 1000)<50&&t>0){
                if(!originalPolesHs){

                if (u.rotation.y > 2.614&&changeStart==1)
                    u.rotation.y -= Math.PI / 100;
                else{
                    // console.log("hello");
                    changeStart=0;
                    // bar.position.set(.3, 0, 0);
                    // bar.rotation.y = Math.PI / 6;
                    u.rotation.y-=Math.PI/100*Math.pow(2.7, titaline)*Math.cos((2*Math.PI/5)*(t/1000));
                    // console.log(t / 1000);
                }
            }
            else{
                u.rotation.y -= Math.PI / 50 * Math.pow(2.7, titaline) * Math.cos((2 * Math.PI / 7) * (t / 1000));
                // console.log(t / 1000);
            }



            
        }
        else{
            u.rotation.x = Math.PI - Math.PI / 6;
            u.rotation.y = -Math.PI / 6 + Math.PI;
            u.position.set(.25, 0.3, 2);
            // console.log(t / 1000);
        }
         // h.rotation.z-=Math.PI/1000*Math.pow(2.7, titaline)*Math.cos(t/1000);
         // h.rotation.x-=Math.PI/2000*Math.pow(2.7, titaline)*Math.cos(t/1000); 


         // changes
        
         // u.rotation.y+=Math.PI/180;
         // h.rotation.z-=Math.PI/1000*Math.pow(2.7, titaline)*Math.cos(t/1000);
         // h.rotation.x-=Math.PI/2000*Math.pow(2.7, titaline)*Math.cos(t/1000);
         // console.log(u.rotation.y);
    }
    else if(choice=="buttonmagnet"){
        if (Math.floor(t / 1000) < 50 && t>0){
        
                if(!originalPolesButton){

                if (buttonMagnet.rotation.z > -3.965&&changeStart==1)
                    buttonMagnet.rotation.z -= Math.PI / 100;
                else{
                    // console.log("hello");
                    changeStart=0;
                    // bar.position.set(.3, 0, 0);
                    // bar.rotation.y = Math.PI / 6;
                    buttonMagnet.rotation.z-=Math.PI/130*Math.pow(2.7, titaline2)*Math.cos((2*Math.PI/5)*(t/1000));
                    // console.log(t / 1000);
                }
            }
            else{
                buttonMagnet.rotation.z -= Math.PI / 50 * Math.pow(2.7, titaline) * Math.cos((2 * Math.PI / 7) * (t / 1000));
                // console.log(t / 1000);
            }
            
        }
        else{
            buttonMagnet.position.set(.2, .5, 2);
            buttonMagnet.rotation.x = -Math.PI / 2 - Math.PI / 6;
            buttonMagnet.rotation.z = -Math.PI / 6 + Math.PI;
            // console.log(t / 1000);
        }

        // console.log(buttonMagnet.rotation.z);
    }  
    else if(choice=="ringmagnet"){
             if (Math.floor(t / 1000) < 50 && t>0){
        
                if(!originalPolesRing){

                if (ringMagnet.rotation.z > -3.965&&changeStart==1)
                    ringMagnet.rotation.z -= Math.PI / 100;
                else{
                    // console.log("hello");
                    changeStart=0;
                    // bar.position.set(.3, 0, 0);
                    // bar.rotation.y = Math.PI / 6;
                    ringMagnet.rotation.z-=Math.PI/130*Math.pow(2.7, titaline2)*Math.cos((2*Math.PI/5)*(t/1000));
                    // console.log(t / 1000);
                }
            }
            else{
                ringMagnet.rotation.z -= Math.PI / 50 * Math.pow(2.7, titaline) * Math.cos((2 * Math.PI / 7) * (t / 1000));
                // console.log(t / 1000);
            }
            
        }
        else{
            ringMagnet.position.set(.2, .5, 2);
            ringMagnet.rotation.x = -Math.PI / 2 - Math.PI / 6;
            ringMagnet.rotation.z = -Math.PI / 6 + Math.PI;
            // console.log(t / 1000);
        }

        // console.log(ringMagnet.rotation.z);
    }


    PIEshowInputPanel();


    // buttonMagnet.rotation.y+=Math.PI/180;
    // horseShoeMagnet.rotation.y+=Math. PI/180;
    // dummy2.rotation.y+=Math. PI/180;

    // horseShoeMagnet.rotateOnAxis(new THREE.Vector3(0,1,0) , Math.PI/180);
    // sphere1.rotation.y+=Math.PI/180;
    // base.rotation.x-=Math.PI/1800;
 
    // PIEcamera.rotation.x-=Math.PI/1800;
    // PIEcamera.rotation.y-=Math.PI/1800;
    // PIEcamera.rotation.z-=Math.PI/1800;

    }
    PIErender();
}


function PIEremoveElement(b) {
    var a;
    var c;
    PIEscene.remove(b);
    c = false;
    for (a = PIEsceneElements.length - 1;
        (c == false) && (a >= 0); a--) {
        if (b == PIEsceneElements[a]) {
            while (a < PIEsceneElements.length - 1) {
                PIEsceneElements[a] = PIEsceneElements[a + 1];
                a++
            }
            PIEsceneElements.pop();
            c = true
        }
    }
}

