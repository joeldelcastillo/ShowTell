

angular.module('tareasApp', ['firebase'])
.controller('TareasController', function($firebaseObject){
    // const rojoRef = firebase.database().ref('Rojo');
    // const azulRef = firebase.database().ref('Azul');
    const rootRef = firebase.database().ref();
    // const ref = rootRef.child('object');
    this.object = $firebaseObject(rootRef);
    
    var listaTareas = this;

    listaTareas.incrementRojo = function(){
        const updates = {};
        updates[`Rojo`] =
          firebase.database.ServerValue.increment(1);
        // updates[`user-posts/${key}/stars/${uid}`] = true;
        firebase.database().ref().update(updates);
    }

    listaTareas.incrementAzul = function(){
        const updates = {};
        updates[`Azul`] =
          firebase.database.ServerValue.increment(1);
        // updates[`user-posts/${key}/stars/${uid}`] = true;
        firebase.database().ref().update(updates);
    }
});