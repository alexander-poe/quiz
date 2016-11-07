/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var lb = '</br>';

	var q1 = 'what is a great bike?';
	var q2 = 'what\'s hardest trick on a bike?';
	var q3 = 'who is cam mccual?';

	var a1 = q1 + lb + 'a:fixie' + lb + 'b:hardtail' + lb + 'c: motobecane';
	var a2 = q2 + lb + 'a:fixie' + lb + 'b:hardtail' + lb + 'c: motobecane';
	var a3 = q3 + lb + 'a:fixie' + lb + 'b:hardtail' + lb + 'c: motobecane';

	export {lb, a1, a2, a3, q1, q2, q3};

/***/ }
/******/ ]);