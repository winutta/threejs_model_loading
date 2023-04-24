import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


export function loadModel(scene){

    const manager = new THREE.LoadingManager();

    manager.onStart = function (url, itemsLoaded, itemsTotal) {
        console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
    };

    manager.onLoad = function () {
        console.log('Loading complete!');
    };

    manager.onProgress = function (url, itemsLoaded, itemsTotal) {
        console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
    };

    manager.onError = function (url) {
        console.log('There was an error loading ' + url);
    };

    const gltfLoader = new GLTFLoader(manager);

    var textureLoader = new THREE.TextureLoader(manager);

    // Load textures

    // ex: const texture0 = textureLoader.load("./path/to/texture.png");


    // Load Model, edit materials with a texture, and add to the scene

    // ex:

    // gltfLoader.load(
    //     "./path/to/model.glb",
    //     function(model){

    //         // call back once model gets loaded



    //         // take meshes from model

    //         // create new materials and apply textures to materials

    //         // add meshes to the scene

    //         scene.add(model.scene);

    //     }
    // )

    function updateScene(){
        // Apply any changes to the meshes that needs to be applied every frame
    }

    return updateScene;

}