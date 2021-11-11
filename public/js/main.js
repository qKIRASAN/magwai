/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/db/db.json":
/*!************************!*\
  !*** ./src/db/db.json ***!
  \************************/
/*! exports provided: posts, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"posts\":[{\"id\":0,\"img\":\"./img/coins_01\",\"alt\":\"Монеты крупным планом\",\"title\":\"Bridge\",\"lead\":\"How to increase your productivity with a Music\",\"description\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…\",\"author\":\"Eugenia\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":1,\"img\":\"./img/coins_02\",\"alt\":\"Монеты крупным планом\",\"title\":\"Water\",\"lead\":\"How to increase your productivity with a Music\",\"description\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…\",\"author\":\"Eugenia\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":2,\"img\":\"./img/coins_03\",\"alt\":\"Одна монета крупным планом\",\"title\":\"Bridge\",\"lead\":\"How to increase your productivity with a Music\",\"description\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…\",\"author\":\"Eugenia\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":3,\"img\":\"./img/coins_04\",\"alt\":\"Монеты крупным планом\",\"title\":\"Bridge\",\"lead\":\"How to increase your productivity with a Music\",\"description\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…\",\"author\":\"Eugenia\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":4,\"img\":\"./img/coins_05\",\"alt\":\"Одна монета крупным планом\",\"title\":\"Bridge\",\"lead\":\"How to increase your productivity with a Music\",\"description\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…\",\"author\":\"Eugenia\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":5,\"img\":\"./img/coins_06\",\"alt\":\"Монеты крупным планом\",\"title\":\"Forest\",\"lead\":\"How to increase your productivity with a Music\",\"description\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…\",\"author\":\"Eugenia\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":6,\"img\":\"./img/coins_07\",\"alt\":\"Монеты крупным планом\",\"title\":\"Forest\",\"lead\":\"How to increase your productivity with a Music\",\"description\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…\",\"author\":\"Eugenia\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":7,\"img\":\"./img/coins_08\",\"alt\":\"Монеты крупным планом\",\"title\":\"Nature\",\"lead\":\"How to increase your productivity with a Music\",\"description\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…\",\"author\":\"Eugenia\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":8,\"img\":\"./img/coins_09\",\"alt\":\"Биткоин крупным планом\",\"title\":\"Nature\",\"lead\":\"How to increase your productivity with a Music\",\"description\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…\",\"author\":\"Eugenia\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":9,\"img\":\"./img/coins_10\",\"alt\":\"Монеты крупным планом\",\"title\":\"Nature\",\"lead\":\"How to increase your productivity with a Music\",\"description\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…\",\"author\":\"Eugenia\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":10,\"img\":\"./img/coins_01\",\"alt\":\"Quaerat facilis id libero velit.\",\"title\":\"sunt\",\"lead\":\"Voluptate dolore voluptates quisquam.\",\"description\":\"Molestias veniam perferendis animi nemo in in. Et magni vitae omnis aut non dolorem. Qui at architecto voluptatibus rem. Voluptatibus aut non cumque qui consequatur sed. Itaque ea ut rerum. Debitis voluptatum omnis impedit temporibus tempora vel.\",\"author\":\"Concepcion\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":11,\"img\":\"./img/coins_03\",\"alt\":\"Eveniet sed perferendis deserunt repellendus voluptas et nesciunt maiores ratione.\",\"title\":\"natus\",\"lead\":\"Iusto maxime dolor atque quia similique.\",\"description\":\"Voluptatem eveniet eius. Earum recusandae impedit rerum nisi magnam. Est aut omnis quas. Ut sit omnis. Eum facilis quaerat voluptates. Assumenda incidunt ipsam modi ab.\",\"author\":\"Demario\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":12,\"img\":\"./img/coins_10\",\"alt\":\"Dignissimos vel consectetur molestiae cumque repellat temporibus.\",\"title\":\"labore\",\"lead\":\"Sit corporis atque aut commodi vel voluptate.\",\"description\":\"Illo aut rerum ut rerum omnis maiores nemo soluta et. Sed tenetur ex pariatur eos sit voluptas quia reprehenderit provident. Reprehenderit sint voluptatem et fugiat dolorem aut. Et sint dolores ut recusandae.\",\"author\":\"Fermin\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":13,\"img\":\"./img/coins_06\",\"alt\":\"Tempora et sit id.\",\"title\":\"sint\",\"lead\":\"Iste in occaecati.\",\"description\":\"Quasi quibusdam id ut ratione. Blanditiis vitae aut vero. Error aut et non labore. Aut magni temporibus perferendis velit autem magnam esse voluptates aut. Laudantium sit tempora quo modi quis et inventore enim.\",\"author\":\"Theodora\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":14,\"img\":\"./img/coins_06\",\"alt\":\"Voluptatem accusantium deleniti.\",\"title\":\"provident\",\"lead\":\"Molestiae omnis laborum quasi inventore.\",\"description\":\"Qui vero cupiditate. Architecto commodi non. Quia quisquam officiis distinctio.\",\"author\":\"Adriel\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":15,\"img\":\"./img/coins_01\",\"alt\":\"Ipsa sint quas exercitationem quasi quis ullam laborum laudantium.\",\"title\":\"sit\",\"lead\":\"Enim et adipisci sapiente consequatur dignissimos iste.\",\"description\":\"Dicta ratione optio vitae. Voluptatem consequatur aut ut eaque aspernatur fugiat culpa. Quos aperiam id quia. Sunt odit dolore ratione tempora distinctio sapiente repellendus ullam. Culpa voluptas consequatur reiciendis iusto quibusdam sed autem illum aliquid.\",\"author\":\"Kane\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":16,\"img\":\"./img/coins_01\",\"alt\":\"Voluptatum tenetur occaecati nam minus velit est.\",\"title\":\"ducimus\",\"lead\":\"Ducimus similique dolor.\",\"description\":\"Reiciendis est exercitationem reprehenderit veniam beatae et reiciendis ratione. Accusamus vitae neque rerum repellat qui optio numquam. Tenetur omnis iure odio labore enim autem odio aperiam. Repellat architecto quo quibusdam occaecati. Sed quia ut magnam earum beatae alias. Enim dolorem id soluta quo ut voluptatem ut accusamus voluptatem.\",\"author\":\"Missouri\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":17,\"img\":\"./img/coins_10\",\"alt\":\"Veniam facilis culpa voluptatem fuga deleniti eos.\",\"title\":\"quas\",\"lead\":\"Architecto vero dolore qui velit quo enim.\",\"description\":\"Soluta inventore beatae. Et placeat officiis. Eum sequi quis aut itaque unde totam ab vitae. Voluptatem deleniti quos culpa veniam asperiores et praesentium.\",\"author\":\"Morgan\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":18,\"img\":\"./img/coins_06\",\"alt\":\"Asperiores est molestiae ipsa nulla tempora ex.\",\"title\":\"magni\",\"lead\":\"Laudantium adipisci voluptate sunt libero optio aut laudantium reprehenderit.\",\"description\":\"Beatae voluptas ut id. Vel aut aperiam id. Vel quisquam vel eaque nobis sit. Impedit consectetur qui vel facilis ut similique at nam accusantium. Praesentium maxime omnis nemo in rem dolores modi reiciendis.\",\"author\":\"Sid\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":19,\"img\":\"./img/coins_08\",\"alt\":\"Excepturi occaecati aut eos debitis nulla sint.\",\"title\":\"at\",\"lead\":\"Rerum explicabo consequuntur voluptatem qui est repudiandae quod vitae.\",\"description\":\"Reiciendis voluptatibus quia hic molestias perspiciatis reiciendis nobis qui. Porro odio adipisci. Veniam repudiandae sequi.\",\"author\":\"Eldora\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":20,\"img\":\"./img/coins_02\",\"alt\":\"Unde quis cupiditate vel dolor.\",\"title\":\"enim\",\"lead\":\"Vel quis eveniet quod recusandae sunt quia pariatur autem.\",\"description\":\"Odio quisquam illum nihil at voluptas non qui enim. Excepturi corporis quibusdam doloremque magni voluptatibus quidem cumque. Laboriosam eum consequatur maxime.\",\"author\":\"Mckenzie\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":21,\"img\":\"./img/coins_04\",\"alt\":\"Voluptatum et et minima officiis aliquam eius aut tempora itaque.\",\"title\":\"voluptatem\",\"lead\":\"Dolores sunt quibusdam.\",\"description\":\"Nulla ipsam corporis aut eos ullam sunt facilis deserunt. Iusto nihil culpa voluptatem amet similique aliquam. Odio occaecati cum deleniti et. Et ut aut eos ducimus sit quo est minima.\",\"author\":\"Robert\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":22,\"img\":\"./img/coins_01\",\"alt\":\"Accusamus molestiae est pariatur asperiores quia quis placeat molestiae.\",\"title\":\"doloribus\",\"lead\":\"Architecto debitis et iste ipsa omnis placeat.\",\"description\":\"Velit quam sit voluptatibus et ut. Alias id exercitationem pariatur ipsum quia quis ratione. Delectus tempora officia officiis ut minima sint. Et similique fugit vero.\",\"author\":\"Keely\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":23,\"img\":\"./img/coins_08\",\"alt\":\"Quae adipisci quia omnis molestias consectetur laboriosam quam rem iure.\",\"title\":\"quis\",\"lead\":\"Aut in soluta cum et ut temporibus error ut ad.\",\"description\":\"Mollitia voluptate numquam rerum incidunt dicta cumque blanditiis. Non ab est est nemo quam quidem. Est non quod eligendi amet. Dolor maxime qui earum ut voluptate repudiandae harum.\",\"author\":\"Kayley\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":24,\"img\":\"./img/coins_10\",\"alt\":\"Similique laboriosam modi in dolor aut animi ipsa.\",\"title\":\"ullam\",\"lead\":\"Nemo porro non nihil repellendus aliquid nulla ipsum.\",\"description\":\"Consectetur aut soluta dolore itaque vel fuga sint. Facere dolorem blanditiis. Ducimus iusto vel omnis voluptatem est rerum dolorum.\",\"author\":\"Marshall\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":25,\"img\":\"./img/coins_01\",\"alt\":\"Autem recusandae unde deleniti voluptatem modi saepe sed.\",\"title\":\"quas\",\"lead\":\"Explicabo maxime quis in magni et et.\",\"description\":\"Et minus omnis. Laborum nisi reprehenderit quia sequi voluptas sit aut. Quia ipsam aut aut. Blanditiis totam repudiandae quibusdam non temporibus eligendi omnis rerum itaque. Nisi omnis et et pariatur.\",\"author\":\"Zelda\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":26,\"img\":\"./img/coins_09\",\"alt\":\"Architecto repudiandae enim assumenda dolor neque.\",\"title\":\"vel\",\"lead\":\"Recusandae voluptas enim maxime officia.\",\"description\":\"Ut omnis et omnis quos qui ut vero sunt ut. Repellendus nobis velit molestiae delectus omnis rerum est. Accusantium accusamus quia accusantium explicabo dolor et. Neque sit aut in placeat. Illum quisquam qui veniam consequatur culpa. Quisquam rerum corporis sed aperiam consequatur.\",\"author\":\"Delphine\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":27,\"img\":\"./img/coins_03\",\"alt\":\"Nihil quasi sed rerum fugit temporibus.\",\"title\":\"illum\",\"lead\":\"Sit voluptas sit est sed voluptatem sequi deserunt et provident.\",\"description\":\"Voluptatum iure velit cum nihil illo vero ex quisquam ullam. Delectus ex accusantium sunt pariatur. Minus a quia voluptatibus. Beatae velit unde commodi magnam.\",\"author\":\"Percival\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":28,\"img\":\"./img/coins_01\",\"alt\":\"Omnis itaque rerum pariatur ut voluptates.\",\"title\":\"quam\",\"lead\":\"Repudiandae laborum quo iure et perferendis enim dolor similique ducimus.\",\"description\":\"Nulla odio qui similique rerum itaque voluptatem dolor earum dolorem. Ut nobis maiores voluptas aut est beatae qui. Temporibus sequi totam hic autem temporibus molestiae excepturi.\",\"author\":\"Malachi\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":29,\"img\":\"./img/coins_06\",\"alt\":\"Magnam quia laboriosam omnis odio et.\",\"title\":\"eaque\",\"lead\":\"Aut non enim et dolorem hic corporis blanditiis beatae consequuntur.\",\"description\":\"Reiciendis doloremque quia nemo animi autem sequi. Excepturi debitis earum non nihil amet impedit. Sit temporibus et facilis consequatur velit. Culpa voluptatem tenetur necessitatibus nihil suscipit esse. Consequatur totam hic delectus. Incidunt omnis eaque in sit quasi possimus.\",\"author\":\"Raegan\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":30,\"img\":\"./img/coins_09\",\"alt\":\"Quasi est optio recusandae atque sed.\",\"title\":\"pariatur\",\"lead\":\"Molestiae et nostrum ea eveniet voluptas eum.\",\"description\":\"Cumque qui aspernatur molestiae at nihil. Repellendus harum et fuga repudiandae praesentium blanditiis non. Deserunt quos qui adipisci autem eligendi. Unde ut vel sed amet deserunt minima.\",\"author\":\"Madaline\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":31,\"img\":\"./img/coins_01\",\"alt\":\"Optio deleniti error similique.\",\"title\":\"cupiditate\",\"lead\":\"Cum vel assumenda cum voluptatibus quam rerum sunt vel.\",\"description\":\"Impedit soluta repellat nostrum. Quia eveniet eveniet autem consectetur quis necessitatibus dolorem sed. Suscipit voluptatem rerum est magnam voluptas.\",\"author\":\"Valentin\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":32,\"img\":\"./img/coins_02\",\"alt\":\"Quidem voluptatem inventore dolorem qui.\",\"title\":\"sit\",\"lead\":\"Veniam cupiditate quasi facere veniam quia doloribus consequuntur ducimus repellat.\",\"description\":\"Et odio vitae enim aut deleniti quo est sint occaecati. Vitae adipisci eum. Modi recusandae ex corporis reiciendis ea dolorem nam sit nam. Soluta ea est quibusdam est autem. Sapiente ullam ut est nisi. Ipsa porro eaque sit asperiores numquam modi est vero expedita.\",\"author\":\"Hilbert\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":33,\"img\":\"./img/coins_08\",\"alt\":\"Iste ipsum dolorem temporibus sed similique deleniti ut.\",\"title\":\"laborum\",\"lead\":\"Autem qui error.\",\"description\":\"Reprehenderit voluptatibus est placeat cupiditate laborum sit consequatur ipsa quo. Cum et reiciendis illum eum ullam id asperiores autem. Ut cupiditate omnis quas quas incidunt. Eos esse quia delectus aut sit reprehenderit aliquam natus qui. Est porro et corporis dolor omnis.\",\"author\":\"Anthony\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":34,\"img\":\"./img/coins_06\",\"alt\":\"Enim quidem nihil.\",\"title\":\"enim\",\"lead\":\"Corporis cupiditate est dolorem.\",\"description\":\"Eligendi cum iusto molestiae ducimus rerum. Ipsum quo id odio non autem sint et ea ea. Sunt iste tempora ut sed labore aliquid vitae aliquid asperiores.\",\"author\":\"Ephraim\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":35,\"img\":\"./img/coins_01\",\"alt\":\"Quibusdam sequi commodi libero praesentium qui quis maiores qui.\",\"title\":\"assumenda\",\"lead\":\"Qui aspernatur vel.\",\"description\":\"Qui quos totam corporis. Eveniet consequatur qui delectus enim. Ab porro voluptates quis quis corporis maiores consectetur tenetur. Omnis numquam adipisci animi commodi perferendis voluptatem inventore ea. Enim fuga voluptatem. Et beatae illum placeat ullam assumenda nemo natus dolor modi.\",\"author\":\"Armand\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":36,\"img\":\"./img/coins_09\",\"alt\":\"Omnis vero voluptatem quia consectetur soluta nisi.\",\"title\":\"non\",\"lead\":\"Illo vitae modi id consequatur itaque est modi iusto.\",\"description\":\"Aperiam deleniti maxime consectetur expedita saepe voluptatem saepe et. Aliquid mollitia corrupti qui veniam aperiam voluptatum. Nostrum ratione dolorem quisquam ut. Velit odio blanditiis voluptatem iste molestiae. Qui cupiditate tempore sed aut perspiciatis a.\",\"author\":\"Alex\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":37,\"img\":\"./img/coins_01\",\"alt\":\"Provident voluptate ex quo vel exercitationem et velit error.\",\"title\":\"asperiores\",\"lead\":\"Enim sed accusamus.\",\"description\":\"Voluptatum ut quas tempora culpa. Exercitationem quo et veritatis ut voluptatem cupiditate impedit a. Quod et velit aut culpa ut. Qui similique ut harum animi nulla tempora esse voluptas. At sit vitae eius id rerum reiciendis quibusdam quo.\",\"author\":\"Wanda\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":38,\"img\":\"./img/coins_04\",\"alt\":\"Accusamus praesentium itaque necessitatibus cum corporis.\",\"title\":\"voluptatem\",\"lead\":\"Ipsam enim dolor veritatis nisi.\",\"description\":\"Vel eum labore sit dignissimos dolor debitis eaque. A iste omnis exercitationem suscipit consequatur est illum qui facilis. Nobis sed dolor beatae et reiciendis minus omnis. Optio fugiat molestiae est exercitationem eveniet maxime dignissimos laboriosam. Sunt consequatur aliquid harum.\",\"author\":\"Beulah\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":39,\"img\":\"./img/coins_10\",\"alt\":\"Voluptatem eos numquam quaerat debitis quia quis aut voluptas.\",\"title\":\"eveniet\",\"lead\":\"Vitae perspiciatis aut fuga sit quod voluptatem animi ut.\",\"description\":\"Delectus omnis quia tempore est accusantium maiores dolores et. Est accusantium ipsa. Possimus nulla exercitationem qui in quis architecto autem. Minus voluptatem dicta. Quaerat ut maxime quis error eius.\",\"author\":\"Graham\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":40,\"img\":\"./img/coins_05\",\"alt\":\"Et aut modi consequuntur facere debitis architecto error nobis.\",\"title\":\"ut\",\"lead\":\"Tempore exercitationem esse voluptas totam optio laboriosam assumenda distinctio.\",\"description\":\"Soluta ab consequatur inventore beatae quo officia modi quasi. Sit ut sit tempora. Similique animi autem exercitationem quia impedit laudantium. Dolore ea provident nesciunt eum sapiente distinctio pariatur harum. Quia sed suscipit mollitia. Vel voluptate exercitationem rerum voluptatibus iusto sit et repellat.\",\"author\":\"Marcella\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":41,\"img\":\"./img/coins_04\",\"alt\":\"Et vel omnis.\",\"title\":\"facilis\",\"lead\":\"Laudantium dolores eveniet inventore nobis.\",\"description\":\"Non tempora quo aut illum est nemo. Debitis dicta blanditiis dolore odio. Dolorum et deserunt ex corporis illo ratione sint nemo voluptatem. Voluptates nulla et libero et maxime odio molestiae nobis optio.\",\"author\":\"Angelita\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":42,\"img\":\"./img/coins_10\",\"alt\":\"Et et distinctio fugiat excepturi voluptatem.\",\"title\":\"voluptas\",\"lead\":\"Reprehenderit qui qui.\",\"description\":\"Dolor iure officia nulla assumenda quis voluptatibus vitae voluptatum. Sed delectus sint provident officiis quo necessitatibus est ut. Illo voluptatem debitis aut aut voluptas quaerat rerum omnis.\",\"author\":\"Christophe\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":43,\"img\":\"./img/coins_08\",\"alt\":\"Velit dignissimos odit sint deserunt culpa vel magni.\",\"title\":\"ullam\",\"lead\":\"Ut dolor quaerat quo est iste voluptatem sed.\",\"description\":\"Perspiciatis qui voluptatibus qui nihil eveniet occaecati. Provident odit dignissimos hic eum dolores voluptatem et. Aut nemo minus.\",\"author\":\"Tanner\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":44,\"img\":\"./img/coins_01\",\"alt\":\"Ad cumque molestiae impedit aut dolores fugit.\",\"title\":\"repellendus\",\"lead\":\"Molestias tempora sunt.\",\"description\":\"Voluptas minus dolores eligendi ut et laborum delectus. Itaque quidem minima eaque ullam id enim quo fugit beatae. Et ipsum non similique commodi facere. Laudantium cumque qui deserunt fugiat distinctio aut qui. Neque deleniti possimus nemo ut id.\",\"author\":\"Consuelo\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":45,\"img\":\"./img/coins_10\",\"alt\":\"Quaerat at dolore.\",\"title\":\"ducimus\",\"lead\":\"Repellat minima et quia eligendi.\",\"description\":\"Sint deleniti numquam mollitia eos unde. Quos non non molestiae ea. Autem officiis nam ut magnam magni mollitia. Eos molestias velit aliquid voluptatibus ut corporis harum necessitatibus asperiores.\",\"author\":\"Janie\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":46,\"img\":\"./img/coins_07\",\"alt\":\"Odio et non optio eum aut sed at.\",\"title\":\"debitis\",\"lead\":\"Tempora omnis dicta repudiandae.\",\"description\":\"Mollitia harum voluptatem quia sunt tenetur culpa. Nesciunt quas et cum corrupti quae. Ut sint ipsa doloribus minima aliquid laborum pariatur architecto.\",\"author\":\"Nico\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":47,\"img\":\"./img/coins_05\",\"alt\":\"Odit expedita ab molestias beatae sint sunt ab quidem.\",\"title\":\"repellendus\",\"lead\":\"Porro recusandae necessitatibus voluptatem totam.\",\"description\":\"Et id molestiae cumque aut corporis facilis dolore. Repellat eaque molestiae nostrum quia sed quod deleniti rerum veniam. Fuga rerum minima eos a dolor reprehenderit nesciunt.\",\"author\":\"Moses\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":48,\"img\":\"./img/coins_01\",\"alt\":\"Repellendus odit non vitae et voluptatem id et laborum reiciendis.\",\"title\":\"deleniti\",\"lead\":\"Dolores in laboriosam debitis eos et.\",\"description\":\"Sit a ut esse eum fugiat. Aut voluptatibus omnis ducimus ut consequuntur sint enim. Nihil expedita ad. Delectus rerum voluptas qui enim voluptatem error rerum explicabo aut. Veritatis vitae nobis soluta qui dolor omnis fuga deleniti odit.\",\"author\":\"Tristin\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":49,\"img\":\"./img/coins_02\",\"alt\":\"Corrupti numquam odio amet.\",\"title\":\"in\",\"lead\":\"Error laboriosam vel consequuntur cum.\",\"description\":\"Alias ipsam odit animi. Officia voluptatem voluptatem veritatis consequatur. Quisquam sint sapiente necessitatibus accusantium vel. Consequatur iure recusandae laudantium architecto quia ut aut tempora consequatur.\",\"author\":\"Tremaine\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":50,\"img\":\"./img/coins_04\",\"alt\":\"Quis delectus occaecati itaque quisquam expedita.\",\"title\":\"ut\",\"lead\":\"Est quia explicabo deserunt.\",\"description\":\"Eos consectetur velit architecto omnis voluptatem deserunt facere earum explicabo. Recusandae consectetur accusamus delectus dolor tempora. Sed ut tenetur voluptatem voluptatem.\",\"author\":\"Alexandrine\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":51,\"img\":\"./img/coins_09\",\"alt\":\"Non quia qui et minus explicabo molestiae.\",\"title\":\"earum\",\"lead\":\"Similique quasi libero laboriosam harum et.\",\"description\":\"Possimus qui excepturi eligendi saepe nihil officia. Consequatur optio ad voluptatem tenetur voluptatibus vel quaerat labore. Accusantium eum accusantium omnis ea fuga. Doloremque alias repudiandae.\",\"author\":\"Napoleon\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":52,\"img\":\"./img/coins_01\",\"alt\":\"Quos excepturi nihil quod nulla quod dolorum.\",\"title\":\"quibusdam\",\"lead\":\"Sed omnis ea voluptatem rerum.\",\"description\":\"Velit doloribus est maxime nemo. Dolor hic esse aut nihil ab sit id at consectetur. Veritatis earum facilis laudantium ipsa minus omnis ad.\",\"author\":\"Holly\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":53,\"img\":\"./img/coins_07\",\"alt\":\"Dolorum non aut quo.\",\"title\":\"magnam\",\"lead\":\"Id non non magnam enim.\",\"description\":\"Rerum in qui sunt. Dolor quasi architecto. Mollitia non aut quod. Architecto et quia suscipit maxime ex facilis consectetur.\",\"author\":\"Nichole\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":54,\"img\":\"./img/coins_04\",\"alt\":\"Est sint cupiditate est.\",\"title\":\"dolorem\",\"lead\":\"Quaerat architecto deserunt.\",\"description\":\"Quo et molestiae eius quidem quos qui culpa qui rerum. Maiores hic quis quam aut aut. Doloribus aut sint voluptas quia rerum cupiditate voluptatem laboriosam reprehenderit. At dolore in. Quia non iusto ad. Voluptas et est corporis et tempore praesentium quia.\",\"author\":\"Enid\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":55,\"img\":\"./img/coins_09\",\"alt\":\"Autem velit et recusandae quibusdam iusto voluptatum.\",\"title\":\"qui\",\"lead\":\"Beatae in adipisci libero modi ducimus voluptatem fugiat ducimus.\",\"description\":\"Labore aperiam dolor architecto eius aliquam reprehenderit. Laboriosam ut non magnam. Quia saepe quo voluptatem fuga cupiditate dolor nulla voluptatem. Vel nobis enim est ut dolor tempore. Ut praesentium minus tenetur blanditiis qui.\",\"author\":\"Pinkie\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":56,\"img\":\"./img/coins_05\",\"alt\":\"Fuga in minima deserunt necessitatibus laboriosam porro.\",\"title\":\"molestiae\",\"lead\":\"Facilis consequatur sequi totam reiciendis.\",\"description\":\"Voluptas architecto facere nemo perferendis error in nostrum voluptate odit. Delectus repellendus numquam. Animi id qui. Ea corporis consequuntur exercitationem nobis minima quidem in ratione.\",\"author\":\"Duncan\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":57,\"img\":\"./img/coins_09\",\"alt\":\"Non eos omnis quisquam ex quia modi ipsa aliquam voluptatibus.\",\"title\":\"asperiores\",\"lead\":\"Autem veritatis nemo dolores aperiam quia ea dolor distinctio dignissimos.\",\"description\":\"Rerum et quo laborum a. Maxime impedit libero voluptates. Vero autem voluptatem dolore.\",\"author\":\"Brenden\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":58,\"img\":\"./img/coins_05\",\"alt\":\"Ea hic aliquam quia debitis eius doloribus.\",\"title\":\"qui\",\"lead\":\"Quis perferendis dolores voluptatem.\",\"description\":\"Aperiam ut eveniet quo porro ea ut consequatur. Voluptatem doloremque aut esse. Consequatur modi et laboriosam est dicta placeat eveniet et et. Praesentium eius reiciendis inventore quisquam nihil enim dignissimos delectus.\",\"author\":\"Mitchel\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"},{\"id\":59,\"img\":\"./img/coins_04\",\"alt\":\"Non reiciendis quis voluptas.\",\"title\":\"qui\",\"lead\":\"Deleniti est voluptas et architecto.\",\"description\":\"Commodi in atque itaque ipsum eum. Ex molestiae adipisci vel vero fuga sunt occaecati. Ut rerum ipsam exercitationem harum.\",\"author\":\"Mac\",\"datetime\":\"2019-07-24\",\"date\":\"July 24, 2019\"}]}");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu.js */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-smooth.js */ "./src/js/modules/scroll-smooth.js");
/* harmony import */ var _modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popup.js */ "./src/js/modules/popup.js");
/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider.js */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_slider_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form.js */ "./src/js/modules/form.js");
/* harmony import */ var _modules_message_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/message.js */ "./src/js/modules/message.js");
/* harmony import */ var _modules_lazy_loading_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/lazy-loading.js */ "./src/js/modules/lazy-loading.js");









/***/ }),

/***/ "./src/js/modules/api.js":
/*!*******************************!*\
  !*** ./src/js/modules/api.js ***!
  \*******************************/
/*! exports provided: sendData, getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendData", function() { return sendData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony import */ var _db_db_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/db.json */ "./src/db/db.json");
var _db_db_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../db/db.json */ "./src/db/db.json", 1);


const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function checkStatus(response) {
  const {status, statusText} = response;
  if (!response.ok) {
    throw new Error(`${status} - ${statusText}`);
  }

  return response;
}

function sendData(onSuccess, onError, body) {
  fetch(API_URL, {
    method: 'POST',
    body
  })
  .then(checkStatus)
  .then(onSuccess)
  .catch(onError);
}

function getData(onSuccess, onError) {
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(_db_db_json__WEBPACK_IMPORTED_MODULE_0__),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(checkStatus)
  .then((response) => response.json())
  .then((data) => onSuccess(data))
  .catch(onError);
}


/***/ }),

/***/ "./src/js/modules/focus-area.js":
/*!**************************************!*\
  !*** ./src/js/modules/focus-area.js ***!
  \**************************************/
/*! exports provided: createFocusArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFocusArea", function() { return createFocusArea; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/js/modules/utils.js");


function createFocusArea(selector) {
  const elements = selector.querySelectorAll(`
    input:not([disabled]),
    textarea:not([disabled]),
    button:not([disabled]),
    a[href]:not([disabled])`
  );

  const firstElement = elements[0];
  const lastElement = elements[elements.length - 1];

  function lockFocus(evt) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["isTabEvent"])(evt)) {
      if (evt.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          evt.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          evt.preventDefault();
        }
      }
    }
  }

  return {
    lock() {
      selector.addEventListener(`keydown`, lockFocus);
    },
    unlock() {
      selector.removeEventListener(`keydown`, lockFocus);
    }
  }
}


/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: submitForm, focus, blur, validate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitForm", function() { return submitForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focus", function() { return focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blur", function() { return blur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./src/js/modules/store.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ "./src/js/modules/api.js");
/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.js */ "./src/js/modules/message.js");




const PLACEHOLDER = `placeholder`;
const USER_NAME = `user-name`;
const USER_EMAIL = `user-email`;
const USER_PHONE = `user-phone`;
const USER_MESSAGE = `user-message`;
const FORM = `form`;
const FORM_FIELD_CLASS = `form__field`;
const FORM_FIELD_INVALID_CLASS = `form__field--invalid`;
const FORM_FIELDS = `input, textarea`;

const store = Object(_store_js__WEBPACK_IMPORTED_MODULE_0__["createStorage"])();

const validityState = {
  name: false,
  email: false,
  phone: true,
  message: false
};

function checkValidityState() {
  return Object.values(validityState).every((value) => {
    return value === true;
  });
}

function submitForm(evt) {
  const isValid = checkValidityState();
  const form = evt.target;
  const formData = new FormData(form);
  const formFieldContainers = form.querySelectorAll(`.${FORM_FIELD_CLASS}`);
  const formFields = form.querySelectorAll(FORM_FIELDS);

  if (isValid) {
    Object(_api_js__WEBPACK_IMPORTED_MODULE_1__["sendData"])(_message_js__WEBPACK_IMPORTED_MODULE_2__["showSuccessMessage"], _message_js__WEBPACK_IMPORTED_MODULE_2__["showErrorMessage"], formData);
  } else {
    for (let i = 0, j = 0; i < formFieldContainers.length, j < formFields.length; i++, j++) {
      const isEmpty = formFields[j].value === ``;
      const typeTel = formFields[j].type === `tel`;

      if (isEmpty && !typeTel) {
        formFieldContainers[i].classList.add(FORM_FIELD_INVALID_CLASS);
      }
    }
  }

  evt.preventDefault();
}

function focus(evt) {
  const formField = evt.target;
  const formFieldContainer = evt.target.closest(`.${FORM_FIELD_CLASS}`);

  store.save(PLACEHOLDER, formField.placeholder);
  formField.focus();
  formField.placeholder = '';

  if (formFieldContainer.classList.contains(FORM_FIELD_INVALID_CLASS)) {
    formFieldContainer.classList.remove(FORM_FIELD_INVALID_CLASS);
  }
}

function blur(evt) {
  const formField = evt.target;

  formField.blur();
  formField.placeholder = store.get(PLACEHOLDER);
  validate(evt);
}

function validate(evt) {
  const formField = evt.target;
  const formFieldContainer = formField.closest(`.${FORM_FIELD_CLASS}`);
  const form = formField.closest(`.${FORM}`);

  if (formField.name === USER_NAME) {
    validityState.name = checkName(formField.value);
    if (!validityState.name) {
      formFieldContainer.classList.add(FORM_FIELD_INVALID_CLASS);
    } else {
      formFieldContainer.classList.remove(FORM_FIELD_INVALID_CLASS);
    }
  }

  if (formField.name === USER_EMAIL) {
    validityState.email = checkEmail(formField.value);
    if (!validityState.email) {
      formFieldContainer.classList.add(FORM_FIELD_INVALID_CLASS);
    } else {
      formFieldContainer.classList.remove(FORM_FIELD_INVALID_CLASS);
    }
  }

  if (formField.name === USER_PHONE) {
    validityState.phone = checkPhone(formField.value);
    if (!validityState.phone) {
      formFieldContainer.classList.add(FORM_FIELD_INVALID_CLASS);
    } else {
      formFieldContainer.classList.remove(FORM_FIELD_INVALID_CLASS);
    }
  }

  if (formField.name === USER_MESSAGE) {
    validityState.message = checkMessage(formField.value);
    if (!validityState.message) {
      formFieldContainer.classList.add(FORM_FIELD_INVALID_CLASS);
    } else {
      formFieldContainer.classList.remove(FORM_FIELD_INVALID_CLASS);
    }
  }

  form.noValidate = true;
}

function checkName(value) {
  const regExpName = /^[A-ZА-Я][A-ZА-Я\s]*[A-ZА-Я]$/i;

  return regExpName.test(value);
}

function checkEmail(value) {
  const regExpEmail = /^[A-Z0-9.,_%+\-!?]{2,20}@(?:[A-Z0-9-]{1,20}\.){1,3}[A-Z]{2,20}$/i;

  return regExpEmail.test(value);
}

function checkPhone(value) {
  const regExpPhone = /[0-9+\s()-]{18}/;

  if (value === '') {
    return true;
  }

  return regExpPhone.test(value);
}

function checkMessage(value) {
  const regExpMessage = /[A-ZА-Я\s().,!?]+/i;

  return regExpMessage.test(value);
}


/***/ }),

/***/ "./src/js/modules/lazy-loading.js":
/*!****************************************!*\
  !*** ./src/js/modules/lazy-loading.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/js/modules/api.js");
/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.js */ "./src/js/modules/message.js");



const REQUEST = `request`;
const POST_REQUEST_CLASS = `posts__request`;
const POST_INNER_CLASS = `posts__inner`;
const POST_POSITION = `beforeend`;
const COUNT = 6;
const INITIAL_COUNT = 10;

let storage = [];
let indexFrom = 0;
let indexTo = COUNT;

const postsContainer = document.querySelector(`.${POST_INNER_CLASS}`);

function loadPosts() {
  renderPosts(storage);
}

function renderPosts(data, isInitialLoading) {
  if (isInitialLoading) {
    indexTo = INITIAL_COUNT;
  }

  const posts = data.slice(indexFrom, indexTo);

  posts.forEach((post) => {
    const {
      img,
      alt,
      title,
      lead,
      description,
      author,
      datetime,
      date
    } = post;

    const template = `
      <article class="post">
        <picture>
          <source type="image/webp"
            srcset="${img}.webp 1x, ${img}@2x.webp 2x"
          >
          <!-- 1х: 320px; 2x: 640px -->
          <img src="${img}.jpg"
            srcset="${img}@2x.jpg 2x"
            width="320"
            height="185"
            alt="${alt}"
          >
        </picture>
        <div lang="en" class="post__content">
          <div class="post__title">
            <h3>${title}</h3>
            <p>${lead}</p>
          </div>
          <p>${description}</p>
          <div class="post__bottom">
            <p>Posted by
              <a class="post__author" href="#">
                <b>${author}</b>
              </a>, on
              <time datetime="${datetime}">${date}</time>
            </p>
            <a class="post__link" href="#">Continue reading</a>
          </div>
        </div>
      </article>
    `;

    postsContainer.insertAdjacentHTML(POST_POSITION, template);
  });

  indexFrom += (isInitialLoading) ? INITIAL_COUNT : COUNT;

  if (indexTo >= data.length) {
    indexTo = data.length;
  } else {
    indexTo += COUNT;
  }
}

function loadData(data) {
  storage = data.posts;
  postsContainer.innerHTML = ``;
  renderPosts(storage, true);
}

function showWarning() {
  Object(_message_js__WEBPACK_IMPORTED_MODULE_1__["showWarningMessage"])();
}

document.addEventListener('DOMContentLoaded', () => {
  (function init() {
    const requestButton = document.querySelector(`#${REQUEST}`);

    requestButton.classList.add(POST_REQUEST_CLASS);
    requestButton.addEventListener(`click`, loadPosts);
  })();

  Object(_api_js__WEBPACK_IMPORTED_MODULE_0__["getData"])(loadData, showWarning);
});


/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _focus_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focus-area.js */ "./src/js/modules/focus-area.js");
/* harmony import */ var _scroll_lock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll-lock.js */ "./src/js/modules/scroll-lock.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/js/modules/utils.js");




const LOGO_CLASS = `logo`;
const HEADER_CLASS = `header`;
const HEADER_FIXED_CLASS = `header--fixed`;
const HEADER_LOGO_CLASS = `header__logo`;
const HEADER_LOGO_NOJS_CLASS = `header__logo--no-js`;
const BURGER_BASE_CLASS = `burger`;
const BURGER_BUTTON_CLASS = `burger--button-burger`;
const BURGER_CROSS_CLASS = `burger--button-cross`;
const NAVLIST_CLASS = `nav__list`;
const NAVLIST_OPEN_CLASS = `nav__list--open`;
const NAVLINK_CLASS = `nav__link`;
const CONTACTS_CLASS = `contacts`;
const CONTACTS_VISIBLE_CLASS = `contacts--visible`;
const ARIA_LABEL_ATTRIBUTE = `aria-label`;
const ARIA_EXPANDED_ATTRIBUTE = `aria-expanded`;
const VALUE_SHOW = `показать меню`;
const VALUE_HIDE = `закрыть меню`;

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector(`.${HEADER_CLASS}`);
  const logo = header.querySelector(`.${LOGO_CLASS}`);
  const burgerButton = header.querySelector(`.${BURGER_BASE_CLASS}`);
  const navList = header.querySelector(`.${NAVLIST_CLASS}`);
  const contacts = header.querySelector(`.${CONTACTS_CLASS}`);
  const headerFocusArea = Object(_focus_area_js__WEBPACK_IMPORTED_MODULE_0__["createFocusArea"])(header);

  function addHandlers() {
    header.addEventListener(`click`, toggleMenu);
    header.addEventListener(`keydown`, hideMenu);
    burgerButton.removeEventListener(`click`, addHandlers);
  }

  function toggleMenu(evt) {
    if (evt.target.closest(`.${BURGER_BASE_CLASS}`) ||
      evt.target.closest(`.${HEADER_LOGO_CLASS}`) ||
      evt.target.closest(`.${NAVLINK_CLASS}`))
    {
      header.classList.toggle(HEADER_FIXED_CLASS);
      navList.classList.toggle(NAVLIST_OPEN_CLASS);
      contacts.classList.toggle(CONTACTS_VISIBLE_CLASS);
      burgerButton.classList.toggle(BURGER_BUTTON_CLASS);
      burgerButton.classList.toggle(BURGER_CROSS_CLASS);

      if (burgerButton.classList.contains(BURGER_CROSS_CLASS)) {
        Object(_scroll_lock_js__WEBPACK_IMPORTED_MODULE_1__["lockScroll"])();
        headerFocusArea.lock();

        burgerButton.setAttribute(ARIA_LABEL_ATTRIBUTE, VALUE_HIDE);
        burgerButton.setAttribute(ARIA_EXPANDED_ATTRIBUTE, true);
      } else {
        Object(_scroll_lock_js__WEBPACK_IMPORTED_MODULE_1__["unlockScroll"])();
        headerFocusArea.unlock();

        burgerButton.setAttribute(ARIA_LABEL_ATTRIBUTE, VALUE_SHOW);
        burgerButton.setAttribute(ARIA_EXPANDED_ATTRIBUTE, false);

        burgerButton.addEventListener(`click`, addHandlers);
        header.removeEventListener(`click`, toggleMenu);
        header.removeEventListener(`keydown`, hideMenu);
      }
    }
  }

  function hideMenu(evt) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isEscEvent"])(evt)) {
      header.classList.remove(HEADER_FIXED_CLASS);
      navList.classList.remove(NAVLIST_OPEN_CLASS);
      contacts.classList.remove(CONTACTS_VISIBLE_CLASS);
      burgerButton.classList.remove(BURGER_CROSS_CLASS);
      burgerButton.classList.add(BURGER_BUTTON_CLASS);

      if (burgerButton.classList.contains(BURGER_CROSS_CLASS)) {
        burgerButton.setAttribute(ARIA_LABEL_ATTRIBUTE, VALUE_HIDE);
        burgerButton.setAttribute(ARIA_EXPANDED_ATTRIBUTE, true);
      } else {
        burgerButton.setAttribute(ARIA_LABEL_ATTRIBUTE, VALUE_SHOW);
        burgerButton.setAttribute(ARIA_EXPANDED_ATTRIBUTE, false);
      }

      Object(_scroll_lock_js__WEBPACK_IMPORTED_MODULE_1__["unlockScroll"])();
      headerFocusArea.unlock();

      burgerButton.addEventListener(`click`, addHandlers);
      header.removeEventListener(`click`, toggleMenu);
      header.removeEventListener(`keydown`, hideMenu);
    }
  }

  (function init() {
    burgerButton.classList.add(BURGER_BUTTON_CLASS);
    logo.classList.remove(HEADER_LOGO_NOJS_CLASS);
    navList.classList.remove(NAVLIST_OPEN_CLASS);
    contacts.classList.remove(CONTACTS_VISIBLE_CLASS);

    burgerButton.addEventListener(`click`, addHandlers);
  })();
});


/***/ }),

/***/ "./src/js/modules/message.js":
/*!***********************************!*\
  !*** ./src/js/modules/message.js ***!
  \***********************************/
/*! exports provided: showSuccessMessage, showErrorMessage, showWarningMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSuccessMessage", function() { return showSuccessMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showErrorMessage", function() { return showErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showWarningMessage", function() { return showWarningMessage; });
/* harmony import */ var _scroll_lock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-lock.js */ "./src/js/modules/scroll-lock.js");
/* harmony import */ var _focus_area_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focus-area.js */ "./src/js/modules/focus-area.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/js/modules/utils.js");




const BODY = `body`;
const SUCCESS = `success`;
const FAIL = `error`;
const WARNING = `warning`;
const POPUP_CLASS = `popup`;
const MESSAGE_CLASS = `message`;
const DELAY = 850;

const body = document.querySelector(BODY);
const successMessageTemplate = document.querySelector(`#${SUCCESS}`).content.querySelector(`.${MESSAGE_CLASS}`);
const failMessageTemplate = document.querySelector(`#${FAIL}`).content.querySelector(`.${MESSAGE_CLASS}`);
const warningMessageTemplate = document.querySelector(`#${WARNING}`).content.querySelector(`.${MESSAGE_CLASS}`);

function createMessage(template) {
  const popup = document.querySelector(`.${POPUP_CLASS}`);
  const message = template.cloneNode(true);
  const messageFocusArea = Object(_focus_area_js__WEBPACK_IMPORTED_MODULE_1__["createFocusArea"])(message);

  body.appendChild(message);
  messageFocusArea.lock();
  Object(_scroll_lock_js__WEBPACK_IMPORTED_MODULE_0__["lockScroll"])();

  message.tabIndex = -1;
  message.focus();
  message.addEventListener(`keydown`, hideMessage);
  message.addEventListener(`click`, hideMessage);

  setTimeout(() => {
    message.remove();
    Object(_scroll_lock_js__WEBPACK_IMPORTED_MODULE_0__["unlockScroll"])();
    if (popup) {
      popup.remove();
    }
  }, DELAY);
}

function hideMessage(evt) {
  const popup = document.querySelector(`.${POPUP_CLASS}`);
  const message = evt.currentTarget;

  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isEscEvent"])(evt) || evt.type === `click`) {
    message.remove();
    Object(_scroll_lock_js__WEBPACK_IMPORTED_MODULE_0__["unlockScroll"])();
    popup.remove();
  }
}

function showSuccessMessage() {
  createMessage(successMessageTemplate);
}

function showErrorMessage() {
  createMessage(failMessageTemplate);
}

function showWarningMessage() {
  createMessage(warningMessageTemplate);
}


/***/ }),

/***/ "./src/js/modules/phone-mask.js":
/*!**************************************!*\
  !*** ./src/js/modules/phone-mask.js ***!
  \**************************************/
/*! exports provided: createPhoneMask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPhoneMask", function() { return createPhoneMask; });
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");


function createPhoneMask(selector) {
  const input = selector.querySelector(`input[type=tel]`);
  const maskPattern = {
    'mask': '{+7} (000) 000-00-00'
  };
  const mask = new imask__WEBPACK_IMPORTED_MODULE_0__["default"](input, maskPattern);

  return {
    init() {
      return mask;
    }
  }
}


/***/ }),

/***/ "./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _focus_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focus-area.js */ "./src/js/modules/focus-area.js");
/* harmony import */ var _scroll_lock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll-lock.js */ "./src/js/modules/scroll-lock.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/js/modules/utils.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.js */ "./src/js/modules/form.js");
/* harmony import */ var _phone_mask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./phone-mask.js */ "./src/js/modules/phone-mask.js");






const BODY = `body`;
const POPUP = `popup`;
const FORM_FIELDS = `input, textarea`;
const FORM_CLASS = `form`;
const BURGER_BASE_CLASS = `burger`;
const REQUEST_CONTACTS_CLASS = `contacts__request`;
const REQUEST_EVENT_CLASS = `event__request`;

document.addEventListener('DOMContentLoaded', () => {
  const requestButtons = document.querySelectorAll(`.${REQUEST_CONTACTS_CLASS}, .${REQUEST_EVENT_CLASS}`);

  if (requestButtons) {
    requestButtons.forEach((requestButton) => init(requestButton));
  }
});

function init(requestButton) {
  requestButton.addEventListener(`click`, showPopup);

  function showPopup(evt) {
    createPopup();
    evt.preventDefault();
  }

  function createPopup() {
    const body = document.querySelector(BODY);
    const template = document.querySelector(`#${POPUP}`).content.querySelector(`.${POPUP}`);
    const popup = template.cloneNode(true);
    const form = popup.querySelector(`.${FORM_CLASS}`);
    const formFields = popup.querySelectorAll(FORM_FIELDS);
    const closeButton = popup.querySelector(`.${BURGER_BASE_CLASS}`);
    const popupFocusArea = Object(_focus_area_js__WEBPACK_IMPORTED_MODULE_0__["createFocusArea"])(popup);
    const phoneMask = Object(_phone_mask_js__WEBPACK_IMPORTED_MODULE_4__["createPhoneMask"])(popup);

    body.appendChild(popup);
    popupFocusArea.lock();
    Object(_scroll_lock_js__WEBPACK_IMPORTED_MODULE_1__["lockScroll"])();
    phoneMask.init();

    if (formFields) {
      for (let i = 0; i < formFields.length; i++) {
        formFields[i].addEventListener(`focus`, _form_js__WEBPACK_IMPORTED_MODULE_3__["focus"]);
        formFields[i].addEventListener(`blur`, _form_js__WEBPACK_IMPORTED_MODULE_3__["blur"]);
        formFields[i].addEventListener(`keyup`, _form_js__WEBPACK_IMPORTED_MODULE_3__["validate"]);

        formFields[0].focus();
      }
    }

    form.addEventListener(`submit`, _form_js__WEBPACK_IMPORTED_MODULE_3__["submitForm"]);
    popup.addEventListener(`keydown`, hidePopup);
    closeButton.addEventListener(`click`, hidePopup);
  }

  function hidePopup(evt) {
    const popup = document.querySelector(`.${POPUP}`);

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isEscEvent"])(evt) || evt.type === `click`) {
      popup.remove();
      Object(_scroll_lock_js__WEBPACK_IMPORTED_MODULE_1__["unlockScroll"])();
      requestButton.focus();
    }
  }
}


/***/ }),

/***/ "./src/js/modules/scroll-lock.js":
/*!***************************************!*\
  !*** ./src/js/modules/scroll-lock.js ***!
  \***************************************/
/*! exports provided: lockScroll, unlockScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lockScroll", function() { return lockScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlockScroll", function() { return unlockScroll; });
const BODY = `body`;
const BODY_SCROLL_LOCK_CLASS = `page__body--scroll-lock`;
const STYLE_ATTRIBUTE = `style`;

const body = document.querySelector(BODY);

function lockScroll() {
  const scrollBarWidth = getScrollBarWidth();

  body.classList.add(BODY_SCROLL_LOCK_CLASS);
  body.style.paddingRight = `${scrollBarWidth}px`;
}

function unlockScroll() {
  body.classList.remove(BODY_SCROLL_LOCK_CLASS);
  body.removeAttribute(STYLE_ATTRIBUTE);
}

function getScrollBarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}


/***/ }),

/***/ "./src/js/modules/scroll-smooth.js":
/*!*****************************************!*\
  !*** ./src/js/modules/scroll-smooth.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const EVENT_LINK_CLASS = `event__link`;

const links = document.querySelectorAll(`.${EVENT_LINK_CLASS}`);

if (links) {
  links.forEach((link) => link.addEventListener(`click`, scrollPage));
}

function scrollPage(evt) {
  if (!evt.currentTarget.hasAttribute(`href`)) {
    return;
  }

  evt.preventDefault();
  scrollSmooth(evt.currentTarget.hash);
}

function scrollSmooth(hash) {
  const element = document.querySelector(hash);

  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: `smooth`,
    });
  }
}


/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const EVENTS_CLASS = `events`;
const EVENTS_LIST_CLASS = `events__list`;
const EVENT_ACTIVE_CLASS = `event--active`;
const EVENT_REQUEST_CLASS = `event__request`;
const SLIDER_CLASS = `slider`;
const SLIDER_REQUEST_CLASS = `slider__request`;
const SLIDES_CLASS = `slider__list`;
const SLIDE_CLASS = `slider__item`;
const SLIDE_ACTIVE_CLASS = `slider__item--active`;
const TOGGLES_BASE_CLASS = `toggles`;
const TOGGLES_CLASS = `slider__toggles`;
const TOGGLE_CLASS = `slider__toggle`;
const TOGGLE_ACTIVE_CLASS = `slider__toggle--active`;

const slider = document.querySelector(`.${EVENTS_CLASS}`);
let currentIndex = 0;
let currentTransform = 0;

(function init() {
  if (slider) {
    const requestButtons = slider.querySelectorAll(`.${EVENT_REQUEST_CLASS}`);
    const slidesContainer = slider.querySelector(`.${EVENTS_LIST_CLASS}`);
    const slides = Array.from(slidesContainer.children);
    const togglesContainer = slider.querySelector(`.${TOGGLES_BASE_CLASS}`);
    const toggles = Array.from(togglesContainer.children);

    if (requestButtons) {
      requestButtons.forEach((request) => {
        request.classList.add(SLIDER_REQUEST_CLASS);
      });
    }

    if (slides) {
      slides.forEach((slide, i) => {
        slide.classList.remove(EVENT_ACTIVE_CLASS);
        slide.classList.add(SLIDE_CLASS);
        slide.dataset.index = i.toString();
      });
      slides[0].classList.add(SLIDE_ACTIVE_CLASS);
    }

    if (slidesContainer) {
      slidesContainer.classList.add(SLIDES_CLASS);
    }

    if (toggles) {
      toggles.forEach((toggle, i) => {
        toggle.classList.add(TOGGLE_CLASS);
        toggle.dataset.showSlide = i.toString();
      });
      toggles[0].classList.add(TOGGLE_ACTIVE_CLASS);
    }

    if (togglesContainer) {
      togglesContainer.classList.add(TOGGLES_CLASS);
      togglesContainer.addEventListener(`click`, changeSlide);
    }

    slider.classList.add(SLIDER_CLASS);
  }
})();

function changeSlide(evt) {
  const toggle = evt.target.closest(`.${TOGGLE_CLASS}`);
  if (!toggle) {
    return;
  }

  const slidesContainer = slider.querySelector(`.${SLIDES_CLASS}`);
  currentIndex = parseInt(toggle.dataset.showSlide);
  currentTransform = setTransform(currentIndex);

  slidesContainer.style.transform = `translateY(${currentTransform}%)`;
  setActiveClass();
  evt.preventDefault();
}

function setTransform(i) {
  if (i === 0) {
    return 0;
  } else {
    return -100 * i;
  }
}

function setActiveClass() {
  const slides = slider.querySelectorAll(`.${SLIDE_CLASS}`);
  const toggles = slider.querySelectorAll(`.${TOGGLE_CLASS}`);

  if(slides) {
    slides.forEach((slide) => {
      const index = parseInt(slide.dataset.index);

      if (currentIndex === index) {
        slide.classList.add(SLIDE_ACTIVE_CLASS);
      } else {
        slide.classList.remove(SLIDE_ACTIVE_CLASS)
      }
    });
  }

  if(toggles) {
    toggles.forEach((toggle) => {
      const index = parseInt(toggle.dataset.showSlide);

      if (currentIndex === index) {
        toggle.classList.add(TOGGLE_ACTIVE_CLASS);
      } else {
        toggle.classList.remove(TOGGLE_ACTIVE_CLASS)
      }
    });
  }
}


/***/ }),

/***/ "./src/js/modules/store.js":
/*!*********************************!*\
  !*** ./src/js/modules/store.js ***!
  \*********************************/
/*! exports provided: createStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStorage", function() { return createStorage; });
// eslint-disable-next-line no-undef
const storage = new Map();

function createStorage() {
  function saveToStore(key, value) {
    storage.set(key, value);
  }

  function getFromStore(key) {
    return storage.get(key);
  }

  return {
    save(key, value) {
      saveToStore(key, value);
    },
    get(key) {
      return getFromStore(key);
    }
  }
}


/***/ }),

/***/ "./src/js/modules/utils.js":
/*!*********************************!*\
  !*** ./src/js/modules/utils.js ***!
  \*********************************/
/*! exports provided: isEscEvent, isTabEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEscEvent", function() { return isEscEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTabEvent", function() { return isTabEvent; });
function isEscEvent(evt) {
  return evt.key === `Escape`;
}

function isTabEvent(evt) {
  return evt.key === `Tab`;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2ZvY3VzLWFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9sYXp5LWxvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3Bob25lLW1hc2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvc2Nyb2xsLWxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvc2Nyb2xsLXNtb290aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxZQUFZO0FBQ3pELDhDQUE4QyxhQUFhOztBQUUzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hIQTtBQUFBO0FBQUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9qcy9tYWluLmpzXCIsXCJ2ZW5kb3J+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAnLi9tb2R1bGVzL21lbnUuanMnO1xuaW1wb3J0ICcuL21vZHVsZXMvc2Nyb2xsLXNtb290aC5qcydcbmltcG9ydCAnLi9tb2R1bGVzL3BvcHVwLmpzJztcbmltcG9ydCAnLi9tb2R1bGVzL3NsaWRlci5qcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9mb3JtLmpzJztcbmltcG9ydCAnLi9tb2R1bGVzL21lc3NhZ2UuanMnO1xuaW1wb3J0ICcuL21vZHVsZXMvbGF6eS1sb2FkaW5nLmpzJztcbiIsImltcG9ydCBwb3N0c0RCIGZyb20gJy4uLy4uL2RiL2RiLmpzb24nXG5cbmNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJztcblxuZnVuY3Rpb24gY2hlY2tTdGF0dXMocmVzcG9uc2UpIHtcbiAgY29uc3Qge3N0YXR1cywgc3RhdHVzVGV4dH0gPSByZXNwb25zZTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHtzdGF0dXN9IC0gJHtzdGF0dXNUZXh0fWApO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VuZERhdGEob25TdWNjZXNzLCBvbkVycm9yLCBib2R5KSB7XG4gIGZldGNoKEFQSV9VUkwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5XG4gIH0pXG4gIC50aGVuKGNoZWNrU3RhdHVzKVxuICAudGhlbihvblN1Y2Nlc3MpXG4gIC5jYXRjaChvbkVycm9yKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEob25TdWNjZXNzLCBvbkVycm9yKSB7XG4gIGZldGNoKEFQSV9VUkwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0c0RCKSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH1cbiAgfSlcbiAgLnRoZW4oY2hlY2tTdGF0dXMpXG4gIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbigoZGF0YSkgPT4gb25TdWNjZXNzKGRhdGEpKVxuICAuY2F0Y2gob25FcnJvcik7XG59XG4iLCJpbXBvcnQge2lzVGFiRXZlbnR9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9jdXNBcmVhKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbChgXG4gICAgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLFxuICAgIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSxcbiAgICBidXR0b246bm90KFtkaXNhYmxlZF0pLFxuICAgIGFbaHJlZl06bm90KFtkaXNhYmxlZF0pYFxuICApO1xuXG4gIGNvbnN0IGZpcnN0RWxlbWVudCA9IGVsZW1lbnRzWzBdO1xuICBjb25zdCBsYXN0RWxlbWVudCA9IGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aCAtIDFdO1xuXG4gIGZ1bmN0aW9uIGxvY2tGb2N1cyhldnQpIHtcbiAgICBpZiAoaXNUYWJFdmVudChldnQpKSB7XG4gICAgICBpZiAoZXZ0LnNoaWZ0S2V5KSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBmaXJzdEVsZW1lbnQpIHtcbiAgICAgICAgICBsYXN0RWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbGFzdEVsZW1lbnQpIHtcbiAgICAgICAgICBmaXJzdEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbG9jaygpIHtcbiAgICAgIHNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCBsb2NrRm9jdXMpO1xuICAgIH0sXG4gICAgdW5sb2NrKCkge1xuICAgICAgc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihga2V5ZG93bmAsIGxvY2tGb2N1cyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge2NyZWF0ZVN0b3JhZ2V9IGZyb20gJy4vc3RvcmUuanMnO1xuaW1wb3J0IHtzZW5kRGF0YX0gZnJvbSAnLi9hcGkuanMnO1xuaW1wb3J0IHtzaG93RXJyb3JNZXNzYWdlLCBzaG93U3VjY2Vzc01lc3NhZ2V9IGZyb20gJy4vbWVzc2FnZS5qcyc7XG5cbmNvbnN0IFBMQUNFSE9MREVSID0gYHBsYWNlaG9sZGVyYDtcbmNvbnN0IFVTRVJfTkFNRSA9IGB1c2VyLW5hbWVgO1xuY29uc3QgVVNFUl9FTUFJTCA9IGB1c2VyLWVtYWlsYDtcbmNvbnN0IFVTRVJfUEhPTkUgPSBgdXNlci1waG9uZWA7XG5jb25zdCBVU0VSX01FU1NBR0UgPSBgdXNlci1tZXNzYWdlYDtcbmNvbnN0IEZPUk0gPSBgZm9ybWA7XG5jb25zdCBGT1JNX0ZJRUxEX0NMQVNTID0gYGZvcm1fX2ZpZWxkYDtcbmNvbnN0IEZPUk1fRklFTERfSU5WQUxJRF9DTEFTUyA9IGBmb3JtX19maWVsZC0taW52YWxpZGA7XG5jb25zdCBGT1JNX0ZJRUxEUyA9IGBpbnB1dCwgdGV4dGFyZWFgO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JhZ2UoKTtcblxuY29uc3QgdmFsaWRpdHlTdGF0ZSA9IHtcbiAgbmFtZTogZmFsc2UsXG4gIGVtYWlsOiBmYWxzZSxcbiAgcGhvbmU6IHRydWUsXG4gIG1lc3NhZ2U6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBjaGVja1ZhbGlkaXR5U3RhdGUoKSB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKHZhbGlkaXR5U3RhdGUpLmV2ZXJ5KCh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdHJ1ZTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJtaXRGb3JtKGV2dCkge1xuICBjb25zdCBpc1ZhbGlkID0gY2hlY2tWYWxpZGl0eVN0YXRlKCk7XG4gIGNvbnN0IGZvcm0gPSBldnQudGFyZ2V0O1xuICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgY29uc3QgZm9ybUZpZWxkQ29udGFpbmVycyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbChgLiR7Rk9STV9GSUVMRF9DTEFTU31gKTtcbiAgY29uc3QgZm9ybUZpZWxkcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbChGT1JNX0ZJRUxEUyk7XG5cbiAgaWYgKGlzVmFsaWQpIHtcbiAgICBzZW5kRGF0YShzaG93U3VjY2Vzc01lc3NhZ2UsIHNob3dFcnJvck1lc3NhZ2UsIGZvcm1EYXRhKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBmb3JtRmllbGRDb250YWluZXJzLmxlbmd0aCwgaiA8IGZvcm1GaWVsZHMubGVuZ3RoOyBpKyssIGorKykge1xuICAgICAgY29uc3QgaXNFbXB0eSA9IGZvcm1GaWVsZHNbal0udmFsdWUgPT09IGBgO1xuICAgICAgY29uc3QgdHlwZVRlbCA9IGZvcm1GaWVsZHNbal0udHlwZSA9PT0gYHRlbGA7XG5cbiAgICAgIGlmIChpc0VtcHR5ICYmICF0eXBlVGVsKSB7XG4gICAgICAgIGZvcm1GaWVsZENvbnRhaW5lcnNbaV0uY2xhc3NMaXN0LmFkZChGT1JNX0ZJRUxEX0lOVkFMSURfQ0xBU1MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9jdXMoZXZ0KSB7XG4gIGNvbnN0IGZvcm1GaWVsZCA9IGV2dC50YXJnZXQ7XG4gIGNvbnN0IGZvcm1GaWVsZENvbnRhaW5lciA9IGV2dC50YXJnZXQuY2xvc2VzdChgLiR7Rk9STV9GSUVMRF9DTEFTU31gKTtcblxuICBzdG9yZS5zYXZlKFBMQUNFSE9MREVSLCBmb3JtRmllbGQucGxhY2Vob2xkZXIpO1xuICBmb3JtRmllbGQuZm9jdXMoKTtcbiAgZm9ybUZpZWxkLnBsYWNlaG9sZGVyID0gJyc7XG5cbiAgaWYgKGZvcm1GaWVsZENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoRk9STV9GSUVMRF9JTlZBTElEX0NMQVNTKSkge1xuICAgIGZvcm1GaWVsZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKEZPUk1fRklFTERfSU5WQUxJRF9DTEFTUyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsdXIoZXZ0KSB7XG4gIGNvbnN0IGZvcm1GaWVsZCA9IGV2dC50YXJnZXQ7XG5cbiAgZm9ybUZpZWxkLmJsdXIoKTtcbiAgZm9ybUZpZWxkLnBsYWNlaG9sZGVyID0gc3RvcmUuZ2V0KFBMQUNFSE9MREVSKTtcbiAgdmFsaWRhdGUoZXZ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlKGV2dCkge1xuICBjb25zdCBmb3JtRmllbGQgPSBldnQudGFyZ2V0O1xuICBjb25zdCBmb3JtRmllbGRDb250YWluZXIgPSBmb3JtRmllbGQuY2xvc2VzdChgLiR7Rk9STV9GSUVMRF9DTEFTU31gKTtcbiAgY29uc3QgZm9ybSA9IGZvcm1GaWVsZC5jbG9zZXN0KGAuJHtGT1JNfWApO1xuXG4gIGlmIChmb3JtRmllbGQubmFtZSA9PT0gVVNFUl9OQU1FKSB7XG4gICAgdmFsaWRpdHlTdGF0ZS5uYW1lID0gY2hlY2tOYW1lKGZvcm1GaWVsZC52YWx1ZSk7XG4gICAgaWYgKCF2YWxpZGl0eVN0YXRlLm5hbWUpIHtcbiAgICAgIGZvcm1GaWVsZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKEZPUk1fRklFTERfSU5WQUxJRF9DTEFTUyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1GaWVsZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKEZPUk1fRklFTERfSU5WQUxJRF9DTEFTUyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZvcm1GaWVsZC5uYW1lID09PSBVU0VSX0VNQUlMKSB7XG4gICAgdmFsaWRpdHlTdGF0ZS5lbWFpbCA9IGNoZWNrRW1haWwoZm9ybUZpZWxkLnZhbHVlKTtcbiAgICBpZiAoIXZhbGlkaXR5U3RhdGUuZW1haWwpIHtcbiAgICAgIGZvcm1GaWVsZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKEZPUk1fRklFTERfSU5WQUxJRF9DTEFTUyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1GaWVsZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKEZPUk1fRklFTERfSU5WQUxJRF9DTEFTUyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZvcm1GaWVsZC5uYW1lID09PSBVU0VSX1BIT05FKSB7XG4gICAgdmFsaWRpdHlTdGF0ZS5waG9uZSA9IGNoZWNrUGhvbmUoZm9ybUZpZWxkLnZhbHVlKTtcbiAgICBpZiAoIXZhbGlkaXR5U3RhdGUucGhvbmUpIHtcbiAgICAgIGZvcm1GaWVsZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKEZPUk1fRklFTERfSU5WQUxJRF9DTEFTUyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1GaWVsZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKEZPUk1fRklFTERfSU5WQUxJRF9DTEFTUyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZvcm1GaWVsZC5uYW1lID09PSBVU0VSX01FU1NBR0UpIHtcbiAgICB2YWxpZGl0eVN0YXRlLm1lc3NhZ2UgPSBjaGVja01lc3NhZ2UoZm9ybUZpZWxkLnZhbHVlKTtcbiAgICBpZiAoIXZhbGlkaXR5U3RhdGUubWVzc2FnZSkge1xuICAgICAgZm9ybUZpZWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoRk9STV9GSUVMRF9JTlZBTElEX0NMQVNTKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybUZpZWxkQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoRk9STV9GSUVMRF9JTlZBTElEX0NMQVNTKTtcbiAgICB9XG4gIH1cblxuICBmb3JtLm5vVmFsaWRhdGUgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBjaGVja05hbWUodmFsdWUpIHtcbiAgY29uc3QgcmVnRXhwTmFtZSA9IC9eW0EtWtCQLdCvXVtBLVrQkC3Qr1xcc10qW0EtWtCQLdCvXSQvaTtcblxuICByZXR1cm4gcmVnRXhwTmFtZS50ZXN0KHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tFbWFpbCh2YWx1ZSkge1xuICBjb25zdCByZWdFeHBFbWFpbCA9IC9eW0EtWjAtOS4sXyUrXFwtIT9dezIsMjB9QCg/OltBLVowLTktXXsxLDIwfVxcLil7MSwzfVtBLVpdezIsMjB9JC9pO1xuXG4gIHJldHVybiByZWdFeHBFbWFpbC50ZXN0KHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tQaG9uZSh2YWx1ZSkge1xuICBjb25zdCByZWdFeHBQaG9uZSA9IC9bMC05K1xccygpLV17MTh9LztcblxuICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gcmVnRXhwUGhvbmUudGVzdCh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTWVzc2FnZSh2YWx1ZSkge1xuICBjb25zdCByZWdFeHBNZXNzYWdlID0gL1tBLVrQkC3Qr1xccygpLiwhP10rL2k7XG5cbiAgcmV0dXJuIHJlZ0V4cE1lc3NhZ2UudGVzdCh2YWx1ZSk7XG59XG4iLCJpbXBvcnQge2dldERhdGF9IGZyb20gJy4vYXBpLmpzJztcbmltcG9ydCB7c2hvd1dhcm5pbmdNZXNzYWdlfSBmcm9tICcuL21lc3NhZ2UuanMnXG5cbmNvbnN0IFJFUVVFU1QgPSBgcmVxdWVzdGA7XG5jb25zdCBQT1NUX1JFUVVFU1RfQ0xBU1MgPSBgcG9zdHNfX3JlcXVlc3RgO1xuY29uc3QgUE9TVF9JTk5FUl9DTEFTUyA9IGBwb3N0c19faW5uZXJgO1xuY29uc3QgUE9TVF9QT1NJVElPTiA9IGBiZWZvcmVlbmRgO1xuY29uc3QgQ09VTlQgPSA2O1xuY29uc3QgSU5JVElBTF9DT1VOVCA9IDEwO1xuXG5sZXQgc3RvcmFnZSA9IFtdO1xubGV0IGluZGV4RnJvbSA9IDA7XG5sZXQgaW5kZXhUbyA9IENPVU5UO1xuXG5jb25zdCBwb3N0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke1BPU1RfSU5ORVJfQ0xBU1N9YCk7XG5cbmZ1bmN0aW9uIGxvYWRQb3N0cygpIHtcbiAgcmVuZGVyUG9zdHMoc3RvcmFnZSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBvc3RzKGRhdGEsIGlzSW5pdGlhbExvYWRpbmcpIHtcbiAgaWYgKGlzSW5pdGlhbExvYWRpbmcpIHtcbiAgICBpbmRleFRvID0gSU5JVElBTF9DT1VOVDtcbiAgfVxuXG4gIGNvbnN0IHBvc3RzID0gZGF0YS5zbGljZShpbmRleEZyb20sIGluZGV4VG8pO1xuXG4gIHBvc3RzLmZvckVhY2goKHBvc3QpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpbWcsXG4gICAgICBhbHQsXG4gICAgICB0aXRsZSxcbiAgICAgIGxlYWQsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGF1dGhvcixcbiAgICAgIGRhdGV0aW1lLFxuICAgICAgZGF0ZVxuICAgIH0gPSBwb3N0O1xuXG4gICAgY29uc3QgdGVtcGxhdGUgPSBgXG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cInBvc3RcIj5cbiAgICAgICAgPHBpY3R1cmU+XG4gICAgICAgICAgPHNvdXJjZSB0eXBlPVwiaW1hZ2Uvd2VicFwiXG4gICAgICAgICAgICBzcmNzZXQ9XCIke2ltZ30ud2VicCAxeCwgJHtpbWd9QDJ4LndlYnAgMnhcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8IS0tIDHRhTogMzIwcHg7IDJ4OiA2NDBweCAtLT5cbiAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1nfS5qcGdcIlxuICAgICAgICAgICAgc3Jjc2V0PVwiJHtpbWd9QDJ4LmpwZyAyeFwiXG4gICAgICAgICAgICB3aWR0aD1cIjMyMFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxODVcIlxuICAgICAgICAgICAgYWx0PVwiJHthbHR9XCJcbiAgICAgICAgICA+XG4gICAgICAgIDwvcGljdHVyZT5cbiAgICAgICAgPGRpdiBsYW5nPVwiZW5cIiBjbGFzcz1cInBvc3RfX2NvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zdF9fdGl0bGVcIj5cbiAgICAgICAgICAgIDxoMz4ke3RpdGxlfTwvaDM+XG4gICAgICAgICAgICA8cD4ke2xlYWR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwPiR7ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3N0X19ib3R0b21cIj5cbiAgICAgICAgICAgIDxwPlBvc3RlZCBieVxuICAgICAgICAgICAgICA8YSBjbGFzcz1cInBvc3RfX2F1dGhvclwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPGI+JHthdXRob3J9PC9iPlxuICAgICAgICAgICAgICA8L2E+LCBvblxuICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIiR7ZGF0ZXRpbWV9XCI+JHtkYXRlfTwvdGltZT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwicG9zdF9fbGlua1wiIGhyZWY9XCIjXCI+Q29udGludWUgcmVhZGluZzwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FydGljbGU+XG4gICAgYDtcblxuICAgIHBvc3RzQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChQT1NUX1BPU0lUSU9OLCB0ZW1wbGF0ZSk7XG4gIH0pO1xuXG4gIGluZGV4RnJvbSArPSAoaXNJbml0aWFsTG9hZGluZykgPyBJTklUSUFMX0NPVU5UIDogQ09VTlQ7XG5cbiAgaWYgKGluZGV4VG8gPj0gZGF0YS5sZW5ndGgpIHtcbiAgICBpbmRleFRvID0gZGF0YS5sZW5ndGg7XG4gIH0gZWxzZSB7XG4gICAgaW5kZXhUbyArPSBDT1VOVDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRGF0YShkYXRhKSB7XG4gIHN0b3JhZ2UgPSBkYXRhLnBvc3RzO1xuICBwb3N0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBgYDtcbiAgcmVuZGVyUG9zdHMoc3RvcmFnZSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHNob3dXYXJuaW5nKCkge1xuICBzaG93V2FybmluZ01lc3NhZ2UoKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgKGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3QgcmVxdWVzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke1JFUVVFU1R9YCk7XG5cbiAgICByZXF1ZXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoUE9TVF9SRVFVRVNUX0NMQVNTKTtcbiAgICByZXF1ZXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgbG9hZFBvc3RzKTtcbiAgfSkoKTtcblxuICBnZXREYXRhKGxvYWREYXRhLCBzaG93V2FybmluZyk7XG59KTtcbiIsImltcG9ydCB7Y3JlYXRlRm9jdXNBcmVhfSBmcm9tICcuL2ZvY3VzLWFyZWEuanMnO1xuaW1wb3J0IHtsb2NrU2Nyb2xsLCB1bmxvY2tTY3JvbGx9IGZyb20gJy4vc2Nyb2xsLWxvY2suanMnO1xuaW1wb3J0IHtpc0VzY0V2ZW50fSBmcm9tICcuL3V0aWxzLmpzJztcblxuY29uc3QgTE9HT19DTEFTUyA9IGBsb2dvYDtcbmNvbnN0IEhFQURFUl9DTEFTUyA9IGBoZWFkZXJgO1xuY29uc3QgSEVBREVSX0ZJWEVEX0NMQVNTID0gYGhlYWRlci0tZml4ZWRgO1xuY29uc3QgSEVBREVSX0xPR09fQ0xBU1MgPSBgaGVhZGVyX19sb2dvYDtcbmNvbnN0IEhFQURFUl9MT0dPX05PSlNfQ0xBU1MgPSBgaGVhZGVyX19sb2dvLS1uby1qc2A7XG5jb25zdCBCVVJHRVJfQkFTRV9DTEFTUyA9IGBidXJnZXJgO1xuY29uc3QgQlVSR0VSX0JVVFRPTl9DTEFTUyA9IGBidXJnZXItLWJ1dHRvbi1idXJnZXJgO1xuY29uc3QgQlVSR0VSX0NST1NTX0NMQVNTID0gYGJ1cmdlci0tYnV0dG9uLWNyb3NzYDtcbmNvbnN0IE5BVkxJU1RfQ0xBU1MgPSBgbmF2X19saXN0YDtcbmNvbnN0IE5BVkxJU1RfT1BFTl9DTEFTUyA9IGBuYXZfX2xpc3QtLW9wZW5gO1xuY29uc3QgTkFWTElOS19DTEFTUyA9IGBuYXZfX2xpbmtgO1xuY29uc3QgQ09OVEFDVFNfQ0xBU1MgPSBgY29udGFjdHNgO1xuY29uc3QgQ09OVEFDVFNfVklTSUJMRV9DTEFTUyA9IGBjb250YWN0cy0tdmlzaWJsZWA7XG5jb25zdCBBUklBX0xBQkVMX0FUVFJJQlVURSA9IGBhcmlhLWxhYmVsYDtcbmNvbnN0IEFSSUFfRVhQQU5ERURfQVRUUklCVVRFID0gYGFyaWEtZXhwYW5kZWRgO1xuY29uc3QgVkFMVUVfU0hPVyA9IGDQv9C+0LrQsNC30LDRgtGMINC80LXQvdGOYDtcbmNvbnN0IFZBTFVFX0hJREUgPSBg0LfQsNC60YDRi9GC0Ywg0LzQtdC90Y5gO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtIRUFERVJfQ0xBU1N9YCk7XG4gIGNvbnN0IGxvZ28gPSBoZWFkZXIucXVlcnlTZWxlY3RvcihgLiR7TE9HT19DTEFTU31gKTtcbiAgY29uc3QgYnVyZ2VyQnV0dG9uID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoYC4ke0JVUkdFUl9CQVNFX0NMQVNTfWApO1xuICBjb25zdCBuYXZMaXN0ID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoYC4ke05BVkxJU1RfQ0xBU1N9YCk7XG4gIGNvbnN0IGNvbnRhY3RzID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoYC4ke0NPTlRBQ1RTX0NMQVNTfWApO1xuICBjb25zdCBoZWFkZXJGb2N1c0FyZWEgPSBjcmVhdGVGb2N1c0FyZWEoaGVhZGVyKTtcblxuICBmdW5jdGlvbiBhZGRIYW5kbGVycygpIHtcbiAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCB0b2dnbGVNZW51KTtcbiAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihga2V5ZG93bmAsIGhpZGVNZW51KTtcbiAgICBidXJnZXJCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBhZGRIYW5kbGVycyk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVNZW51KGV2dCkge1xuICAgIGlmIChldnQudGFyZ2V0LmNsb3Nlc3QoYC4ke0JVUkdFUl9CQVNFX0NMQVNTfWApIHx8XG4gICAgICBldnQudGFyZ2V0LmNsb3Nlc3QoYC4ke0hFQURFUl9MT0dPX0NMQVNTfWApIHx8XG4gICAgICBldnQudGFyZ2V0LmNsb3Nlc3QoYC4ke05BVkxJTktfQ0xBU1N9YCkpXG4gICAge1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoSEVBREVSX0ZJWEVEX0NMQVNTKTtcbiAgICAgIG5hdkxpc3QuY2xhc3NMaXN0LnRvZ2dsZShOQVZMSVNUX09QRU5fQ0xBU1MpO1xuICAgICAgY29udGFjdHMuY2xhc3NMaXN0LnRvZ2dsZShDT05UQUNUU19WSVNJQkxFX0NMQVNTKTtcbiAgICAgIGJ1cmdlckJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKEJVUkdFUl9CVVRUT05fQ0xBU1MpO1xuICAgICAgYnVyZ2VyQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoQlVSR0VSX0NST1NTX0NMQVNTKTtcblxuICAgICAgaWYgKGJ1cmdlckJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoQlVSR0VSX0NST1NTX0NMQVNTKSkge1xuICAgICAgICBsb2NrU2Nyb2xsKCk7XG4gICAgICAgIGhlYWRlckZvY3VzQXJlYS5sb2NrKCk7XG5cbiAgICAgICAgYnVyZ2VyQnV0dG9uLnNldEF0dHJpYnV0ZShBUklBX0xBQkVMX0FUVFJJQlVURSwgVkFMVUVfSElERSk7XG4gICAgICAgIGJ1cmdlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoQVJJQV9FWFBBTkRFRF9BVFRSSUJVVEUsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdW5sb2NrU2Nyb2xsKCk7XG4gICAgICAgIGhlYWRlckZvY3VzQXJlYS51bmxvY2soKTtcblxuICAgICAgICBidXJnZXJCdXR0b24uc2V0QXR0cmlidXRlKEFSSUFfTEFCRUxfQVRUUklCVVRFLCBWQUxVRV9TSE9XKTtcbiAgICAgICAgYnVyZ2VyQnV0dG9uLnNldEF0dHJpYnV0ZShBUklBX0VYUEFOREVEX0FUVFJJQlVURSwgZmFsc2UpO1xuXG4gICAgICAgIGJ1cmdlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGFkZEhhbmRsZXJzKTtcbiAgICAgICAgaGVhZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgdG9nZ2xlTWVudSk7XG4gICAgICAgIGhlYWRlci5yZW1vdmVFdmVudExpc3RlbmVyKGBrZXlkb3duYCwgaGlkZU1lbnUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVNZW51KGV2dCkge1xuICAgIGlmIChpc0VzY0V2ZW50KGV2dCkpIHtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKEhFQURFUl9GSVhFRF9DTEFTUyk7XG4gICAgICBuYXZMaXN0LmNsYXNzTGlzdC5yZW1vdmUoTkFWTElTVF9PUEVOX0NMQVNTKTtcbiAgICAgIGNvbnRhY3RzLmNsYXNzTGlzdC5yZW1vdmUoQ09OVEFDVFNfVklTSUJMRV9DTEFTUyk7XG4gICAgICBidXJnZXJCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShCVVJHRVJfQ1JPU1NfQ0xBU1MpO1xuICAgICAgYnVyZ2VyQnV0dG9uLmNsYXNzTGlzdC5hZGQoQlVSR0VSX0JVVFRPTl9DTEFTUyk7XG5cbiAgICAgIGlmIChidXJnZXJCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKEJVUkdFUl9DUk9TU19DTEFTUykpIHtcbiAgICAgICAgYnVyZ2VyQnV0dG9uLnNldEF0dHJpYnV0ZShBUklBX0xBQkVMX0FUVFJJQlVURSwgVkFMVUVfSElERSk7XG4gICAgICAgIGJ1cmdlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoQVJJQV9FWFBBTkRFRF9BVFRSSUJVVEUsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnVyZ2VyQnV0dG9uLnNldEF0dHJpYnV0ZShBUklBX0xBQkVMX0FUVFJJQlVURSwgVkFMVUVfU0hPVyk7XG4gICAgICAgIGJ1cmdlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoQVJJQV9FWFBBTkRFRF9BVFRSSUJVVEUsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgdW5sb2NrU2Nyb2xsKCk7XG4gICAgICBoZWFkZXJGb2N1c0FyZWEudW5sb2NrKCk7XG5cbiAgICAgIGJ1cmdlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGFkZEhhbmRsZXJzKTtcbiAgICAgIGhlYWRlci5yZW1vdmVFdmVudExpc3RlbmVyKGBjbGlja2AsIHRvZ2dsZU1lbnUpO1xuICAgICAgaGVhZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCBoaWRlTWVudSk7XG4gICAgfVxuICB9XG5cbiAgKGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgYnVyZ2VyQnV0dG9uLmNsYXNzTGlzdC5hZGQoQlVSR0VSX0JVVFRPTl9DTEFTUyk7XG4gICAgbG9nby5jbGFzc0xpc3QucmVtb3ZlKEhFQURFUl9MT0dPX05PSlNfQ0xBU1MpO1xuICAgIG5hdkxpc3QuY2xhc3NMaXN0LnJlbW92ZShOQVZMSVNUX09QRU5fQ0xBU1MpO1xuICAgIGNvbnRhY3RzLmNsYXNzTGlzdC5yZW1vdmUoQ09OVEFDVFNfVklTSUJMRV9DTEFTUyk7XG5cbiAgICBidXJnZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBhZGRIYW5kbGVycyk7XG4gIH0pKCk7XG59KTtcbiIsImltcG9ydCB7bG9ja1Njcm9sbCwgdW5sb2NrU2Nyb2xsfSBmcm9tICcuL3Njcm9sbC1sb2NrLmpzJztcbmltcG9ydCB7Y3JlYXRlRm9jdXNBcmVhfSBmcm9tICcuL2ZvY3VzLWFyZWEuanMnO1xuaW1wb3J0IHtpc0VzY0V2ZW50fSBmcm9tICcuL3V0aWxzLmpzJztcblxuY29uc3QgQk9EWSA9IGBib2R5YDtcbmNvbnN0IFNVQ0NFU1MgPSBgc3VjY2Vzc2A7XG5jb25zdCBGQUlMID0gYGVycm9yYDtcbmNvbnN0IFdBUk5JTkcgPSBgd2FybmluZ2A7XG5jb25zdCBQT1BVUF9DTEFTUyA9IGBwb3B1cGA7XG5jb25zdCBNRVNTQUdFX0NMQVNTID0gYG1lc3NhZ2VgO1xuY29uc3QgREVMQVkgPSA4NTA7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEJPRFkpO1xuY29uc3Qgc3VjY2Vzc01lc3NhZ2VUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke1NVQ0NFU1N9YCkuY29udGVudC5xdWVyeVNlbGVjdG9yKGAuJHtNRVNTQUdFX0NMQVNTfWApO1xuY29uc3QgZmFpbE1lc3NhZ2VUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke0ZBSUx9YCkuY29udGVudC5xdWVyeVNlbGVjdG9yKGAuJHtNRVNTQUdFX0NMQVNTfWApO1xuY29uc3Qgd2FybmluZ01lc3NhZ2VUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke1dBUk5JTkd9YCkuY29udGVudC5xdWVyeVNlbGVjdG9yKGAuJHtNRVNTQUdFX0NMQVNTfWApO1xuXG5mdW5jdGlvbiBjcmVhdGVNZXNzYWdlKHRlbXBsYXRlKSB7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7UE9QVVBfQ0xBU1N9YCk7XG4gIGNvbnN0IG1lc3NhZ2UgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gIGNvbnN0IG1lc3NhZ2VGb2N1c0FyZWEgPSBjcmVhdGVGb2N1c0FyZWEobWVzc2FnZSk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgbWVzc2FnZUZvY3VzQXJlYS5sb2NrKCk7XG4gIGxvY2tTY3JvbGwoKTtcblxuICBtZXNzYWdlLnRhYkluZGV4ID0gLTE7XG4gIG1lc3NhZ2UuZm9jdXMoKTtcbiAgbWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKGBrZXlkb3duYCwgaGlkZU1lc3NhZ2UpO1xuICBtZXNzYWdlLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgaGlkZU1lc3NhZ2UpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1lc3NhZ2UucmVtb3ZlKCk7XG4gICAgdW5sb2NrU2Nyb2xsKCk7XG4gICAgaWYgKHBvcHVwKSB7XG4gICAgICBwb3B1cC5yZW1vdmUoKTtcbiAgICB9XG4gIH0sIERFTEFZKTtcbn1cblxuZnVuY3Rpb24gaGlkZU1lc3NhZ2UoZXZ0KSB7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7UE9QVVBfQ0xBU1N9YCk7XG4gIGNvbnN0IG1lc3NhZ2UgPSBldnQuY3VycmVudFRhcmdldDtcblxuICBpZiAoaXNFc2NFdmVudChldnQpIHx8IGV2dC50eXBlID09PSBgY2xpY2tgKSB7XG4gICAgbWVzc2FnZS5yZW1vdmUoKTtcbiAgICB1bmxvY2tTY3JvbGwoKTtcbiAgICBwb3B1cC5yZW1vdmUoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1N1Y2Nlc3NNZXNzYWdlKCkge1xuICBjcmVhdGVNZXNzYWdlKHN1Y2Nlc3NNZXNzYWdlVGVtcGxhdGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Vycm9yTWVzc2FnZSgpIHtcbiAgY3JlYXRlTWVzc2FnZShmYWlsTWVzc2FnZVRlbXBsYXRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dXYXJuaW5nTWVzc2FnZSgpIHtcbiAgY3JlYXRlTWVzc2FnZSh3YXJuaW5nTWVzc2FnZVRlbXBsYXRlKTtcbn1cbiIsImltcG9ydCBJTWFzayBmcm9tICdpbWFzayc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQaG9uZU1hc2soc2VsZWN0b3IpIHtcbiAgY29uc3QgaW5wdXQgPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKGBpbnB1dFt0eXBlPXRlbF1gKTtcbiAgY29uc3QgbWFza1BhdHRlcm4gPSB7XG4gICAgJ21hc2snOiAneys3fSAoMDAwKSAwMDAtMDAtMDAnXG4gIH07XG4gIGNvbnN0IG1hc2sgPSBuZXcgSU1hc2soaW5wdXQsIG1hc2tQYXR0ZXJuKTtcblxuICByZXR1cm4ge1xuICAgIGluaXQoKSB7XG4gICAgICByZXR1cm4gbWFzaztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7Y3JlYXRlRm9jdXNBcmVhfSBmcm9tICcuL2ZvY3VzLWFyZWEuanMnO1xuaW1wb3J0IHtsb2NrU2Nyb2xsLHVubG9ja1Njcm9sbH0gZnJvbSAnLi9zY3JvbGwtbG9jay5qcyc7XG5pbXBvcnQge2lzRXNjRXZlbnR9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHtmb2N1cywgYmx1ciwgdmFsaWRhdGUsIHN1Ym1pdEZvcm19IGZyb20gJy4vZm9ybS5qcyc7XG5pbXBvcnQge2NyZWF0ZVBob25lTWFza30gZnJvbSAnLi9waG9uZS1tYXNrLmpzJztcblxuY29uc3QgQk9EWSA9IGBib2R5YDtcbmNvbnN0IFBPUFVQID0gYHBvcHVwYDtcbmNvbnN0IEZPUk1fRklFTERTID0gYGlucHV0LCB0ZXh0YXJlYWA7XG5jb25zdCBGT1JNX0NMQVNTID0gYGZvcm1gO1xuY29uc3QgQlVSR0VSX0JBU0VfQ0xBU1MgPSBgYnVyZ2VyYDtcbmNvbnN0IFJFUVVFU1RfQ09OVEFDVFNfQ0xBU1MgPSBgY29udGFjdHNfX3JlcXVlc3RgO1xuY29uc3QgUkVRVUVTVF9FVkVOVF9DTEFTUyA9IGBldmVudF9fcmVxdWVzdGA7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHJlcXVlc3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7UkVRVUVTVF9DT05UQUNUU19DTEFTU30sIC4ke1JFUVVFU1RfRVZFTlRfQ0xBU1N9YCk7XG5cbiAgaWYgKHJlcXVlc3RCdXR0b25zKSB7XG4gICAgcmVxdWVzdEJ1dHRvbnMuZm9yRWFjaCgocmVxdWVzdEJ1dHRvbikgPT4gaW5pdChyZXF1ZXN0QnV0dG9uKSk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBpbml0KHJlcXVlc3RCdXR0b24pIHtcbiAgcmVxdWVzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHNob3dQb3B1cCk7XG5cbiAgZnVuY3Rpb24gc2hvd1BvcHVwKGV2dCkge1xuICAgIGNyZWF0ZVBvcHVwKCk7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQb3B1cCgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihCT0RZKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke1BPUFVQfWApLmNvbnRlbnQucXVlcnlTZWxlY3RvcihgLiR7UE9QVVB9YCk7XG4gICAgY29uc3QgcG9wdXAgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgZm9ybSA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoYC4ke0ZPUk1fQ0xBU1N9YCk7XG4gICAgY29uc3QgZm9ybUZpZWxkcyA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoRk9STV9GSUVMRFMpO1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gcG9wdXAucXVlcnlTZWxlY3RvcihgLiR7QlVSR0VSX0JBU0VfQ0xBU1N9YCk7XG4gICAgY29uc3QgcG9wdXBGb2N1c0FyZWEgPSBjcmVhdGVGb2N1c0FyZWEocG9wdXApO1xuICAgIGNvbnN0IHBob25lTWFzayA9IGNyZWF0ZVBob25lTWFzayhwb3B1cCk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgICBwb3B1cEZvY3VzQXJlYS5sb2NrKCk7XG4gICAgbG9ja1Njcm9sbCgpO1xuICAgIHBob25lTWFzay5pbml0KCk7XG5cbiAgICBpZiAoZm9ybUZpZWxkcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvcm1GaWVsZHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihgZm9jdXNgLCBmb2N1cyk7XG4gICAgICAgIGZvcm1GaWVsZHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihgYmx1cmAsIGJsdXIpO1xuICAgICAgICBmb3JtRmllbGRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoYGtleXVwYCwgdmFsaWRhdGUpO1xuXG4gICAgICAgIGZvcm1GaWVsZHNbMF0uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoYHN1Ym1pdGAsIHN1Ym1pdEZvcm0pO1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCBoaWRlUG9wdXApO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgaGlkZVBvcHVwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVQb3B1cChldnQpIHtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke1BPUFVQfWApO1xuXG4gICAgaWYgKGlzRXNjRXZlbnQoZXZ0KSB8fCBldnQudHlwZSA9PT0gYGNsaWNrYCkge1xuICAgICAgcG9wdXAucmVtb3ZlKCk7XG4gICAgICB1bmxvY2tTY3JvbGwoKTtcbiAgICAgIHJlcXVlc3RCdXR0b24uZm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0IEJPRFkgPSBgYm9keWA7XG5jb25zdCBCT0RZX1NDUk9MTF9MT0NLX0NMQVNTID0gYHBhZ2VfX2JvZHktLXNjcm9sbC1sb2NrYDtcbmNvbnN0IFNUWUxFX0FUVFJJQlVURSA9IGBzdHlsZWA7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEJPRFkpO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9ja1Njcm9sbCgpIHtcbiAgY29uc3Qgc2Nyb2xsQmFyV2lkdGggPSBnZXRTY3JvbGxCYXJXaWR0aCgpO1xuXG4gIGJvZHkuY2xhc3NMaXN0LmFkZChCT0RZX1NDUk9MTF9MT0NLX0NMQVNTKTtcbiAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtzY3JvbGxCYXJXaWR0aH1weGA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmxvY2tTY3JvbGwoKSB7XG4gIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShCT0RZX1NDUk9MTF9MT0NLX0NMQVNTKTtcbiAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoU1RZTEVfQVRUUklCVVRFKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsQmFyV2lkdGgoKSB7XG4gIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbn1cbiIsImNvbnN0IEVWRU5UX0xJTktfQ0xBU1MgPSBgZXZlbnRfX2xpbmtgO1xuXG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke0VWRU5UX0xJTktfQ0xBU1N9YCk7XG5cbmlmIChsaW5rcykge1xuICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgc2Nyb2xsUGFnZSkpO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxQYWdlKGV2dCkge1xuICBpZiAoIWV2dC5jdXJyZW50VGFyZ2V0Lmhhc0F0dHJpYnV0ZShgaHJlZmApKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIHNjcm9sbFNtb290aChldnQuY3VycmVudFRhcmdldC5oYXNoKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsU21vb3RoKGhhc2gpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGFzaCk7XG5cbiAgaWYgKGVsZW1lbnQpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICAgIGJlaGF2aW9yOiBgc21vb3RoYCxcbiAgICB9KTtcbiAgfVxufVxuIiwiY29uc3QgRVZFTlRTX0NMQVNTID0gYGV2ZW50c2A7XG5jb25zdCBFVkVOVFNfTElTVF9DTEFTUyA9IGBldmVudHNfX2xpc3RgO1xuY29uc3QgRVZFTlRfQUNUSVZFX0NMQVNTID0gYGV2ZW50LS1hY3RpdmVgO1xuY29uc3QgRVZFTlRfUkVRVUVTVF9DTEFTUyA9IGBldmVudF9fcmVxdWVzdGA7XG5jb25zdCBTTElERVJfQ0xBU1MgPSBgc2xpZGVyYDtcbmNvbnN0IFNMSURFUl9SRVFVRVNUX0NMQVNTID0gYHNsaWRlcl9fcmVxdWVzdGA7XG5jb25zdCBTTElERVNfQ0xBU1MgPSBgc2xpZGVyX19saXN0YDtcbmNvbnN0IFNMSURFX0NMQVNTID0gYHNsaWRlcl9faXRlbWA7XG5jb25zdCBTTElERV9BQ1RJVkVfQ0xBU1MgPSBgc2xpZGVyX19pdGVtLS1hY3RpdmVgO1xuY29uc3QgVE9HR0xFU19CQVNFX0NMQVNTID0gYHRvZ2dsZXNgO1xuY29uc3QgVE9HR0xFU19DTEFTUyA9IGBzbGlkZXJfX3RvZ2dsZXNgO1xuY29uc3QgVE9HR0xFX0NMQVNTID0gYHNsaWRlcl9fdG9nZ2xlYDtcbmNvbnN0IFRPR0dMRV9BQ1RJVkVfQ0xBU1MgPSBgc2xpZGVyX190b2dnbGUtLWFjdGl2ZWA7XG5cbmNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke0VWRU5UU19DTEFTU31gKTtcbmxldCBjdXJyZW50SW5kZXggPSAwO1xubGV0IGN1cnJlbnRUcmFuc2Zvcm0gPSAwO1xuXG4oZnVuY3Rpb24gaW5pdCgpIHtcbiAgaWYgKHNsaWRlcikge1xuICAgIGNvbnN0IHJlcXVlc3RCdXR0b25zID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke0VWRU5UX1JFUVVFU1RfQ0xBU1N9YCk7XG4gICAgY29uc3Qgc2xpZGVzQ29udGFpbmVyID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoYC4ke0VWRU5UU19MSVNUX0NMQVNTfWApO1xuICAgIGNvbnN0IHNsaWRlcyA9IEFycmF5LmZyb20oc2xpZGVzQ29udGFpbmVyLmNoaWxkcmVuKTtcbiAgICBjb25zdCB0b2dnbGVzQ29udGFpbmVyID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoYC4ke1RPR0dMRVNfQkFTRV9DTEFTU31gKTtcbiAgICBjb25zdCB0b2dnbGVzID0gQXJyYXkuZnJvbSh0b2dnbGVzQ29udGFpbmVyLmNoaWxkcmVuKTtcblxuICAgIGlmIChyZXF1ZXN0QnV0dG9ucykge1xuICAgICAgcmVxdWVzdEJ1dHRvbnMuZm9yRWFjaCgocmVxdWVzdCkgPT4ge1xuICAgICAgICByZXF1ZXN0LmNsYXNzTGlzdC5hZGQoU0xJREVSX1JFUVVFU1RfQ0xBU1MpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHNsaWRlcykge1xuICAgICAgc2xpZGVzLmZvckVhY2goKHNsaWRlLCBpKSA9PiB7XG4gICAgICAgIHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoRVZFTlRfQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgc2xpZGUuY2xhc3NMaXN0LmFkZChTTElERV9DTEFTUyk7XG4gICAgICAgIHNsaWRlLmRhdGFzZXQuaW5kZXggPSBpLnRvU3RyaW5nKCk7XG4gICAgICB9KTtcbiAgICAgIHNsaWRlc1swXS5jbGFzc0xpc3QuYWRkKFNMSURFX0FDVElWRV9DTEFTUyk7XG4gICAgfVxuXG4gICAgaWYgKHNsaWRlc0NvbnRhaW5lcikge1xuICAgICAgc2xpZGVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoU0xJREVTX0NMQVNTKTtcbiAgICB9XG5cbiAgICBpZiAodG9nZ2xlcykge1xuICAgICAgdG9nZ2xlcy5mb3JFYWNoKCh0b2dnbGUsIGkpID0+IHtcbiAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoVE9HR0xFX0NMQVNTKTtcbiAgICAgICAgdG9nZ2xlLmRhdGFzZXQuc2hvd1NsaWRlID0gaS50b1N0cmluZygpO1xuICAgICAgfSk7XG4gICAgICB0b2dnbGVzWzBdLmNsYXNzTGlzdC5hZGQoVE9HR0xFX0FDVElWRV9DTEFTUyk7XG4gICAgfVxuXG4gICAgaWYgKHRvZ2dsZXNDb250YWluZXIpIHtcbiAgICAgIHRvZ2dsZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChUT0dHTEVTX0NMQVNTKTtcbiAgICAgIHRvZ2dsZXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBjaGFuZ2VTbGlkZSk7XG4gICAgfVxuXG4gICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoU0xJREVSX0NMQVNTKTtcbiAgfVxufSkoKTtcblxuZnVuY3Rpb24gY2hhbmdlU2xpZGUoZXZ0KSB7XG4gIGNvbnN0IHRvZ2dsZSA9IGV2dC50YXJnZXQuY2xvc2VzdChgLiR7VE9HR0xFX0NMQVNTfWApO1xuICBpZiAoIXRvZ2dsZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHNsaWRlc0NvbnRhaW5lciA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKGAuJHtTTElERVNfQ0xBU1N9YCk7XG4gIGN1cnJlbnRJbmRleCA9IHBhcnNlSW50KHRvZ2dsZS5kYXRhc2V0LnNob3dTbGlkZSk7XG4gIGN1cnJlbnRUcmFuc2Zvcm0gPSBzZXRUcmFuc2Zvcm0oY3VycmVudEluZGV4KTtcblxuICBzbGlkZXNDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtjdXJyZW50VHJhbnNmb3JtfSUpYDtcbiAgc2V0QWN0aXZlQ2xhc3MoKTtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zZm9ybShpKSB7XG4gIGlmIChpID09PSAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC0xMDAgKiBpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUNsYXNzKCkge1xuICBjb25zdCBzbGlkZXMgPSBzbGlkZXIucXVlcnlTZWxlY3RvckFsbChgLiR7U0xJREVfQ0xBU1N9YCk7XG4gIGNvbnN0IHRvZ2dsZXMgPSBzbGlkZXIucXVlcnlTZWxlY3RvckFsbChgLiR7VE9HR0xFX0NMQVNTfWApO1xuXG4gIGlmKHNsaWRlcykge1xuICAgIHNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChzbGlkZS5kYXRhc2V0LmluZGV4KTtcblxuICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgc2xpZGUuY2xhc3NMaXN0LmFkZChTTElERV9BQ1RJVkVfQ0xBU1MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGUuY2xhc3NMaXN0LnJlbW92ZShTTElERV9BQ1RJVkVfQ0xBU1MpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZih0b2dnbGVzKSB7XG4gICAgdG9nZ2xlcy5mb3JFYWNoKCh0b2dnbGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQodG9nZ2xlLmRhdGFzZXQuc2hvd1NsaWRlKTtcblxuICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoVE9HR0xFX0FDVElWRV9DTEFTUyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZShUT0dHTEVfQUNUSVZFX0NMQVNTKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmNvbnN0IHN0b3JhZ2UgPSBuZXcgTWFwKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9yYWdlKCkge1xuICBmdW5jdGlvbiBzYXZlVG9TdG9yZShrZXksIHZhbHVlKSB7XG4gICAgc3RvcmFnZS5zZXQoa2V5LCB2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tU3RvcmUoa2V5KSB7XG4gICAgcmV0dXJuIHN0b3JhZ2UuZ2V0KGtleSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNhdmUoa2V5LCB2YWx1ZSkge1xuICAgICAgc2F2ZVRvU3RvcmUoa2V5LCB2YWx1ZSk7XG4gICAgfSxcbiAgICBnZXQoa2V5KSB7XG4gICAgICByZXR1cm4gZ2V0RnJvbVN0b3JlKGtleSk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNFc2NFdmVudChldnQpIHtcbiAgcmV0dXJuIGV2dC5rZXkgPT09IGBFc2NhcGVgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUYWJFdmVudChldnQpIHtcbiAgcmV0dXJuIGV2dC5rZXkgPT09IGBUYWJgO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==