// https://discourse.threejs.org/t/eternal-ride-infinite-terrain-in-three-js-with-no-lod-no-seams/91868

import * as THREE from "three";


// general setup, boring, skip to the next comment

console.clear( );

var scene = new THREE.Scene();
    scene.background = new THREE.Color( 'gainsboro' );

var camera = new THREE.PerspectiveCamera( 30, innerWidth/innerHeight );
    camera.position.set( 0, 0, 300 );
    camera.lookAt( scene.position );

var renderer = new THREE.WebGLRenderer( {antialias: true} );
    renderer.setSize( innerWidth, innerHeight );
    renderer.setAnimationLoop( animationLoop );
    document.body.appendChild( renderer.domElement );
      
window.addEventListener( "resize", (event) => {
    camera.aspect = innerWidth/innerHeight;
    camera.updateProjectionMatrix( );
    renderer.setSize( innerWidth, innerHeight );
});



// next comment

var geometry = new THREE.CircleGeometry( 1 ),
    material = new THREE.MeshBasicMaterial( {color:'black'} );


for( var i=0.1; i<3000; i++) {
  
  var object = new THREE.Mesh( geometry, material );
  
  var r = ( i**0.5 ) * ( 1.001**i ),
      a = 2*Math.PI*i*(1 - 2/(1+Math.sqrt(5)));
  
  object.position.set( r*Math.cos(a), r*Math.sin(a), 0 );
  scene.add( object );
}


function animationLoop( t )
{
    camera.position.set( 0, 0, 600+500*Math.sin( t/2700 ) );

    renderer.render( scene, camera );
}