var scene, camera, renderer;

var cube;

var canvasHolder = document.getElementById('canvas-holder');

var initScene = function () {
    scene = new THREE.Scene();
    
    var width = canvasHolder.clientWidth;
    var height = width * 0.67;

    camera = new THREE.PerspectiveCamera( 75, width/height, 0.1, 1000 );    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    
    canvasHolder.appendChild( renderer.domElement );
    
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    
    camera.position.z = 3;
};

var animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

initScene();
animate();
