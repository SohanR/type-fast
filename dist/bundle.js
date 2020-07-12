/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const word = document.getElementById('word')\nconst text = document.getElementById('text')\nconst scoreEl = document.getElementById('score')\nconst timeEl = document.getElementById('time')\nconst endgameEl = document.getElementById('end-game-container')\nconst settingBtn = document.getElementById('settings-btn')\nconst settings = document.getElementById('settings')\nconst settingsForm = document.getElementById('settings-form')\nconst difficultySelect = document.getElementById('difficulty')\n\n\n// word list\nconst words = [\n    'developer',\n    'javascript',\n    'firefox',\n    'pink floyd',\n    'comfortable',\n    'moon',\n    'dark',\n    'money',\n    'react',\n    'love',\n    'nothing',\n    'damage',\n    'programming',\n    'affiliate',\n    'digital',\n    'freelancing',\n    'marketplace',\n    'atom',\n    'time'\n];\n\nlet randomword;\n\nlet score = 0;\nscoreEl.innerHTML = score;\n\nlet time = 10;\ntimeEl.innerHTML = time + 's';\n\nlet difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';\n\ndifficultySelect.value = difficulty;\n\ntext.focus();\n\nconst timeInterval = setInterval(updateTime, 1000);\n\nfunction getRandomWord() {\n    return words[Math.floor(Math.random() * words.length)];\n}\n\n\nfunction addWord() {\n    randomword = getRandomWord()\n    word.innerHTML = randomword;\n}\n\nfunction updateScore() {\n    score++;\n    scoreEl.innerHTML = score;\n}\n\nfunction updateTime() {\n    time--;\n\n    timeEl.innerHTML = time + 's';\n\n    if (time === 0) {\n        clearInterval(timeInterval);\n        gameOver();\n    }\n}\n\nfunction gameOver() {\n    endgameEl.innerHTML = `\n        <h1>Time Ran Out</h1>\n        <p>You Final Score is ${score} at ${difficulty} Level!</p>\n        <button onclick=\"location.reload()\">Reload</button>\n    `;\n\n    endgameEl.style.display = 'flex'\n}\n\n\n\ntext.addEventListener('input', e => {\n\n    const insertedText = e.target.value;\n\n    if (insertedText == randomword) {\n        addWord();\n        updateScore();\n        e.target.value = '';\n\n        if (difficulty === 'hard') {\n            time += 2;\n        } else if (difficulty === 'medium') {\n            time += 3\n        } else {\n            time += 5;\n        }\n\n        updateTime();\n    }\n})\n\n\nsettingBtn.addEventListener('click', () => {\n    settings.classList.toggle('hide')\n})\n\nsettingsForm.addEventListener('change', e => {\n    difficulty = e.target.value;\n    localStorage.setItem('difficulty', difficulty);\n})\n\n\n\naddWord();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmQnKVxuY29uc3QgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JylcbmNvbnN0IHNjb3JlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKVxuY29uc3QgdGltZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKVxuY29uc3QgZW5kZ2FtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZC1nYW1lLWNvbnRhaW5lcicpXG5jb25zdCBzZXR0aW5nQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWJ0bicpXG5jb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncycpXG5jb25zdCBzZXR0aW5nc0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtZm9ybScpXG5jb25zdCBkaWZmaWN1bHR5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpZmZpY3VsdHknKVxuXG5cbi8vIHdvcmQgbGlzdFxuY29uc3Qgd29yZHMgPSBbXG4gICAgJ2RldmVsb3BlcicsXG4gICAgJ2phdmFzY3JpcHQnLFxuICAgICdmaXJlZm94JyxcbiAgICAncGluayBmbG95ZCcsXG4gICAgJ2NvbWZvcnRhYmxlJyxcbiAgICAnbW9vbicsXG4gICAgJ2RhcmsnLFxuICAgICdtb25leScsXG4gICAgJ3JlYWN0JyxcbiAgICAnbG92ZScsXG4gICAgJ25vdGhpbmcnLFxuICAgICdkYW1hZ2UnLFxuICAgICdwcm9ncmFtbWluZycsXG4gICAgJ2FmZmlsaWF0ZScsXG4gICAgJ2RpZ2l0YWwnLFxuICAgICdmcmVlbGFuY2luZycsXG4gICAgJ21hcmtldHBsYWNlJyxcbiAgICAnYXRvbScsXG4gICAgJ3RpbWUnXG5dO1xuXG5sZXQgcmFuZG9td29yZDtcblxubGV0IHNjb3JlID0gMDtcbnNjb3JlRWwuaW5uZXJIVE1MID0gc2NvcmU7XG5cbmxldCB0aW1lID0gMTA7XG50aW1lRWwuaW5uZXJIVE1MID0gdGltZSArICdzJztcblxubGV0IGRpZmZpY3VsdHkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGlmZmljdWx0eScpICE9PSBudWxsID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RpZmZpY3VsdHknKSA6ICdtZWRpdW0nO1xuXG5kaWZmaWN1bHR5U2VsZWN0LnZhbHVlID0gZGlmZmljdWx0eTtcblxudGV4dC5mb2N1cygpO1xuXG5jb25zdCB0aW1lSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lLCAxMDAwKTtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tV29yZCgpIHtcbiAgICByZXR1cm4gd29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd29yZHMubGVuZ3RoKV07XG59XG5cblxuZnVuY3Rpb24gYWRkV29yZCgpIHtcbiAgICByYW5kb213b3JkID0gZ2V0UmFuZG9tV29yZCgpXG4gICAgd29yZC5pbm5lckhUTUwgPSByYW5kb213b3JkO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTY29yZSgpIHtcbiAgICBzY29yZSsrO1xuICAgIHNjb3JlRWwuaW5uZXJIVE1MID0gc2NvcmU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRpbWUoKSB7XG4gICAgdGltZS0tO1xuXG4gICAgdGltZUVsLmlubmVySFRNTCA9IHRpbWUgKyAncyc7XG5cbiAgICBpZiAodGltZSA9PT0gMCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVJbnRlcnZhbCk7XG4gICAgICAgIGdhbWVPdmVyKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnYW1lT3ZlcigpIHtcbiAgICBlbmRnYW1lRWwuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDE+VGltZSBSYW4gT3V0PC9oMT5cbiAgICAgICAgPHA+WW91IEZpbmFsIFNjb3JlIGlzICR7c2NvcmV9IGF0ICR7ZGlmZmljdWx0eX0gTGV2ZWwhPC9wPlxuICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJsb2NhdGlvbi5yZWxvYWQoKVwiPlJlbG9hZDwvYnV0dG9uPlxuICAgIGA7XG5cbiAgICBlbmRnYW1lRWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xufVxuXG5cblxudGV4dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4ge1xuXG4gICAgY29uc3QgaW5zZXJ0ZWRUZXh0ID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAoaW5zZXJ0ZWRUZXh0ID09IHJhbmRvbXdvcmQpIHtcbiAgICAgICAgYWRkV29yZCgpO1xuICAgICAgICB1cGRhdGVTY29yZSgpO1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9ICcnO1xuXG4gICAgICAgIGlmIChkaWZmaWN1bHR5ID09PSAnaGFyZCcpIHtcbiAgICAgICAgICAgIHRpbWUgKz0gMjtcbiAgICAgICAgfSBlbHNlIGlmIChkaWZmaWN1bHR5ID09PSAnbWVkaXVtJykge1xuICAgICAgICAgICAgdGltZSArPSAzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lICs9IDU7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVUaW1lKCk7XG4gICAgfVxufSlcblxuXG5zZXR0aW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldHRpbmdzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKVxufSlcblxuc2V0dGluZ3NGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgIGRpZmZpY3VsdHkgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGlmZmljdWx0eScsIGRpZmZpY3VsdHkpO1xufSlcblxuXG5cbmFkZFdvcmQoKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });