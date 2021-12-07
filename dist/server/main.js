/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/App.tsx":
/*!****************************!*\
  !*** ./src/client/App.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Main */ \"./src/client/pages/Main.tsx\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ \"./src/client/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Main__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n}\n\n//# sourceURL=webpack://react-ssr-node/./src/client/App.tsx?");

/***/ }),

/***/ "./src/client/api.ts":
/*!***************************!*\
  !*** ./src/client/api.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiGetTasks\": () => (/* binding */ apiGetTasks),\n/* harmony export */   \"apiAddTask\": () => (/* binding */ apiAddTask),\n/* harmony export */   \"apiUpdateTask\": () => (/* binding */ apiUpdateTask),\n/* harmony export */   \"apiDeleteTask\": () => (/* binding */ apiDeleteTask),\n/* harmony export */   \"apiGetAltTemplate\": () => (/* binding */ apiGetAltTemplate),\n/* harmony export */   \"apiUpdateAltTemplate\": () => (/* binding */ apiUpdateAltTemplate)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable implicit-arrow-linebreak */\n\nvar HOST = process.env.REACT_APP_HOST;\nvar BASE_URL = \"http://\".concat(HOST, \":5000/api\");\nvar TASKS_URL = \"\".concat(BASE_URL, \"/tasks\");\nvar SETTINGS_URL = \"\".concat(BASE_URL, \"/settings\");\nvar apiGetTasks = function apiGetTasks() {\n  console.log(HOST, process.env);\n  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(TASKS_URL).then(function (resp) {\n    return resp.data;\n  });\n};\nvar apiAddTask = function apiAddTask(description) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(TASKS_URL, {\n    description: description\n  }).then(function (resp) {\n    return resp.data;\n  });\n};\nvar apiUpdateTask = function apiUpdateTask(task) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default().put(TASKS_URL, task).then(function (resp) {\n    return resp.data;\n  });\n};\nvar apiDeleteTask = function apiDeleteTask(id) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()[\"delete\"](\"\".concat(TASKS_URL, \"/\").concat(id)).then(function (resp) {\n    return resp.data;\n  });\n};\nvar apiGetAltTemplate = function apiGetAltTemplate() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(SETTINGS_URL).then(function (resp) {\n    return resp.data;\n  });\n};\nvar apiUpdateAltTemplate = function apiUpdateAltTemplate(settings) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default().put(SETTINGS_URL, settings).then(function (resp) {\n    return resp.data;\n  });\n};\n\n//# sourceURL=webpack://react-ssr-node/./src/client/api.ts?");

/***/ }),

/***/ "./src/client/components/atoms/Button/Button.tsx":
/*!*******************************************************!*\
  !*** ./src/client/components/atoms/Button/Button.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.css */ \"./src/client/components/atoms/Button/Button.css\");\n/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Button(_ref) {\n  var caption = _ref.caption,\n      onClick = _ref.onClick;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"button\",\n    type: \"button\",\n    onClick: onClick\n  }, caption);\n}\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/atoms/Button/Button.tsx?");

/***/ }),

/***/ "./src/client/components/atoms/Input/Input.tsx":
/*!*****************************************************!*\
  !*** ./src/client/components/atoms/Input/Input.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Input)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Input_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.css */ \"./src/client/components/atoms/Input/Input.css\");\n/* harmony import */ var _Input_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Input_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Input(_ref) {\n  var inputId = _ref.inputId,\n      onChange = _ref.onChange,\n      _ref$placeholder = _ref.placeholder,\n      placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,\n      value = _ref.value;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    id: inputId,\n    value: value,\n    className: \"input\",\n    type: \"text\",\n    placeholder: placeholder,\n    onChange: onChange\n  });\n}\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/atoms/Input/Input.tsx?");

/***/ }),

/***/ "./src/client/components/atoms/Label/Label.tsx":
/*!*****************************************************!*\
  !*** ./src/client/components/atoms/Label/Label.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Label)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Label_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label.css */ \"./src/client/components/atoms/Label/Label.css\");\n/* harmony import */ var _Label_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Label_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Label(_ref) {\n  var caption = _ref.caption,\n      inputId = _ref.inputId;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    className: \"input\",\n    htmlFor: inputId\n  }, caption);\n}\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/atoms/Label/Label.tsx?");

/***/ }),

/***/ "./src/client/components/atoms/Switch/Switch.tsx":
/*!*******************************************************!*\
  !*** ./src/client/components/atoms/Switch/Switch.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Switch_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Switch.css */ \"./src/client/components/atoms/Switch/Switch.css\");\n/* harmony import */ var _Switch_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Switch_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Switch(_ref) {\n  var checked = _ref.checked,\n      toggle = _ref.toggle;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"toggle\",\n    id: \"toggle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    className: \"switch\",\n    type: \"checkbox\",\n    checked: checked,\n    onChange: toggle\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"label label__on\"\n  }, \"Alt\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"label label__off\"\n  }, \"Main\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Switch);\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/atoms/Switch/Switch.tsx?");

/***/ }),

/***/ "./src/client/components/molecules/TextInput/TextInput.tsx":
/*!*****************************************************************!*\
  !*** ./src/client/components/molecules/TextInput/TextInput.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TextInput)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _atoms_Input_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/Input/Input */ \"./src/client/components/atoms/Input/Input.tsx\");\n/* harmony import */ var _atoms_Label_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/Label/Label */ \"./src/client/components/atoms/Label/Label.tsx\");\n/* harmony import */ var _TextInput_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextInput.css */ \"./src/client/components/molecules/TextInput/TextInput.css\");\n/* harmony import */ var _TextInput_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TextInput_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction TextInput(_ref) {\n  var id = _ref.inputId,\n      onChange = _ref.onChange,\n      placeholder = _ref.placeholder,\n      label = _ref.label,\n      value = _ref.value;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_atoms_Label_Label__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    caption: label,\n    inputId: id\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    inputId: id,\n    value: value,\n    placeholder: placeholder,\n    onChange: onChange\n  }));\n}\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/molecules/TextInput/TextInput.tsx?");

/***/ }),

/***/ "./src/client/components/organisms/Form/Form.tsx":
/*!*******************************************************!*\
  !*** ./src/client/components/organisms/Form/Form.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/Button/Button */ \"./src/client/components/atoms/Button/Button.tsx\");\n/* harmony import */ var _molecules_TextInput_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/TextInput/TextInput */ \"./src/client/components/molecules/TextInput/TextInput.tsx\");\n/* harmony import */ var _Form_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Form.css */ \"./src/client/components/organisms/Form/Form.css\");\n/* harmony import */ var _Form_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Form_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Form(_ref) {\n  var addTask = _ref.addTask;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      task = _useState2[0],\n      setTask = _useState2[1];\n\n  var handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {\n    e.preventDefault();\n    addTask(task);\n    setTask('');\n  }, [task]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"form\", {\n    className: \"form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_molecules_TextInput_TextInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    inputId: \"new-task-form\",\n    value: task,\n    onChange: function onChange(e) {\n      return setTask(e.target.value);\n    },\n    placeholder: \"Enter description\",\n    label: \"New task\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    caption: \"Add\",\n    onClick: handleSubmit\n  }));\n}\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/organisms/Form/Form.tsx?");

/***/ }),

/***/ "./src/client/components/organisms/TaskItem/TaskItem.tsx":
/*!***************************************************************!*\
  !*** ./src/client/components/organisms/TaskItem/TaskItem.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskItem)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/Button/Button */ \"./src/client/components/atoms/Button/Button.tsx\");\n/* harmony import */ var _atoms_Input_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/Input/Input */ \"./src/client/components/atoms/Input/Input.tsx\");\n/* harmony import */ var _TaskItem_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskItem.css */ \"./src/client/components/organisms/TaskItem/TaskItem.css\");\n/* harmony import */ var _TaskItem_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TaskItem_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction TaskItem(_ref) {\n  var task = _ref.task,\n      updateTask = _ref.updateTask,\n      deleteTask = _ref.deleteTask;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      editMode = _useState2[0],\n      setEditMode = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(task.description),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),\n      description = _useState4[0],\n      setDescription = _useState4[1];\n\n  var editTaskValue = function editTaskValue(e) {\n    setDescription(e.target.value);\n  };\n\n  var update = function update() {\n    if (editMode) updateTask(_objectSpread(_objectSpread({}, task), {}, {\n      description: description\n    }));\n    setEditMode(!editMode);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"li\", {\n    className: \"task\"\n  }, editMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    inputId: \"task-\".concat(task),\n    value: description,\n    placeholder: \"\",\n    onChange: editTaskValue\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", null, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: \"buttons\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    caption: editMode ? 'Save' : 'Edit',\n    onClick: update\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    caption: \"Delete\",\n    onClick: function onClick() {\n      return deleteTask(task._id);\n    }\n  })));\n}\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/organisms/TaskItem/TaskItem.tsx?");

/***/ }),

/***/ "./src/client/components/organisms/TaskList/TaskList.tsx":
/*!***************************************************************!*\
  !*** ./src/client/components/organisms/TaskList/TaskList.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TaskItem_TaskItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TaskItem/TaskItem */ \"./src/client/components/organisms/TaskItem/TaskItem.tsx\");\n/* harmony import */ var _TaskList_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskList.css */ \"./src/client/components/organisms/TaskList/TaskList.css\");\n/* harmony import */ var _TaskList_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TaskList_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar TaskList = function TaskList(_ref) {\n  var tasks = _ref.tasks,\n      updateTask = _ref.updateTask,\n      deleteTask = _ref.deleteTask;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"task-list\"\n  }, tasks.map(function (task) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TaskItem_TaskItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      key: task._id,\n      task: task,\n      updateTask: updateTask,\n      deleteTask: deleteTask\n    });\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskList);\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/organisms/TaskList/TaskList.tsx?");

/***/ }),

/***/ "./src/client/components/templates/AltTemplate/AltTemplate.tsx":
/*!*********************************************************************!*\
  !*** ./src/client/components/templates/AltTemplate/AltTemplate.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_MainPageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pages/MainPageContext */ \"./src/client/pages/MainPageContext.ts\");\n/* harmony import */ var _organisms_Form_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../organisms/Form/Form */ \"./src/client/components/organisms/Form/Form.tsx\");\n/* harmony import */ var _organisms_TaskList_TaskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../organisms/TaskList/TaskList */ \"./src/client/components/organisms/TaskList/TaskList.tsx\");\n/* harmony import */ var _AltTemplate_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AltTemplate.css */ \"./src/client/components/templates/AltTemplate/AltTemplate.css\");\n/* harmony import */ var _AltTemplate_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AltTemplate_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar AltTemplate = function AltTemplate() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_pages_MainPageContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n      tasks = _useContext.tasks,\n      createTask = _useContext.createTask,\n      updateTask = _useContext.updateTask,\n      deleteTask = _useContext.deleteTask;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"alt-template\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_organisms_TaskList_TaskList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    tasks: tasks,\n    updateTask: updateTask,\n    deleteTask: deleteTask\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_organisms_Form_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    addTask: createTask\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AltTemplate);\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/templates/AltTemplate/AltTemplate.tsx?");

/***/ }),

/***/ "./src/client/components/templates/TaskTemplate.tsx":
/*!**********************************************************!*\
  !*** ./src/client/components/templates/TaskTemplate.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_MainPageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/MainPageContext */ \"./src/client/pages/MainPageContext.ts\");\n/* harmony import */ var _organisms_Form_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../organisms/Form/Form */ \"./src/client/components/organisms/Form/Form.tsx\");\n/* harmony import */ var _organisms_TaskList_TaskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../organisms/TaskList/TaskList */ \"./src/client/components/organisms/TaskList/TaskList.tsx\");\n/* harmony import */ var _TaskTemplate_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskTemplate.css */ \"./src/client/components/templates/TaskTemplate.css\");\n/* harmony import */ var _TaskTemplate_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TaskTemplate_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar TaskTemplate = function TaskTemplate() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_pages_MainPageContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n      tasks = _useContext.tasks,\n      createTask = _useContext.createTask,\n      updateTask = _useContext.updateTask,\n      deleteTask = _useContext.deleteTask;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"template\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_organisms_Form_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    addTask: createTask\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_organisms_TaskList_TaskList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    tasks: tasks,\n    updateTask: updateTask,\n    deleteTask: deleteTask\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskTemplate);\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/templates/TaskTemplate.tsx?");

/***/ }),

/***/ "./src/client/pages/Main.tsx":
/*!***********************************!*\
  !*** ./src/client/pages/Main.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ \"./src/client/api.ts\");\n/* harmony import */ var _components_atoms_Switch_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/atoms/Switch/Switch */ \"./src/client/components/atoms/Switch/Switch.tsx\");\n/* harmony import */ var _components_templates_AltTemplate_AltTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/templates/AltTemplate/AltTemplate */ \"./src/client/components/templates/AltTemplate/AltTemplate.tsx\");\n/* harmony import */ var _components_templates_TaskTemplate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/templates/TaskTemplate */ \"./src/client/components/templates/TaskTemplate.tsx\");\n/* harmony import */ var _MainPageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MainPageContext */ \"./src/client/pages/MainPageContext.ts\");\n\n\n\n\n\n\n\n\n\nvar Main = function Main() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      tasks = _useState2[0],\n      setTasks = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),\n      altTemplate = _useState4[0],\n      setAltTemplate = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,_api__WEBPACK_IMPORTED_MODULE_3__.apiGetTasks)().then(function (data) {\n      return setTasks(data);\n    });\n    (0,_api__WEBPACK_IMPORTED_MODULE_3__.apiGetAltTemplate)().then(function (data) {\n      return setAltTemplate(data.altTemplate);\n    });\n  }, []);\n  var createTask = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (newTask) {\n    (0,_api__WEBPACK_IMPORTED_MODULE_3__.apiAddTask)(newTask).then(function (data) {\n      return setTasks([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(tasks), [data]));\n    });\n  }, [tasks]);\n  var updateTask = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (updatedTask) {\n    (0,_api__WEBPACK_IMPORTED_MODULE_3__.apiUpdateTask)(updatedTask).then(function () {\n      return setTasks(tasks.map(function (task) {\n        return task.id === updatedTask._id ? updatedTask : task;\n      }));\n    });\n  }, [tasks]);\n  var deleteTask = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (id) {\n    (0,_api__WEBPACK_IMPORTED_MODULE_3__.apiDeleteTask)(id).then(function () {\n      return setTasks(tasks.filter(function (task) {\n        return task._id !== id;\n      }));\n    });\n  }, [tasks]);\n  var toggleTemplate = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {\n    (0,_api__WEBPACK_IMPORTED_MODULE_3__.apiUpdateAltTemplate)({\n      altTemplate: !altTemplate\n    });\n    setAltTemplate(!altTemplate);\n  }, [altTemplate]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_atoms_Switch_Switch__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    checked: altTemplate,\n    toggle: toggleTemplate\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_MainPageContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Provider, {\n    value: {\n      tasks: tasks,\n      createTask: createTask,\n      updateTask: updateTask,\n      deleteTask: deleteTask\n    }\n  }, altTemplate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_templates_AltTemplate_AltTemplate__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_templates_TaskTemplate__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);\n\n//# sourceURL=webpack://react-ssr-node/./src/client/pages/Main.tsx?");

/***/ }),

/***/ "./src/client/pages/MainPageContext.ts":
/*!*********************************************!*\
  !*** ./src/client/pages/MainPageContext.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar defaultContext = {};\nvar MainPageContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPageContext);\n\n//# sourceURL=webpack://react-ssr-node/./src/client/pages/MainPageContext.ts?");

/***/ }),

/***/ "./src/server/index.tsx":
/*!******************************!*\
  !*** ./src/server/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/App */ \"./src/client/App.tsx\");\n/* harmony import */ var _settings_router_settings_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/router/settings-router */ \"./src/server/settings/router/settings-router.ts\");\n/* harmony import */ var _settings_controller_settings_controller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/controller/settings-controller */ \"./src/server/settings/controller/settings-controller.ts\");\n/* harmony import */ var _settings_services_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/services/settings-service */ \"./src/server/settings/services/settings-service.ts\");\n/* harmony import */ var _settings_repository_settings_repository_pg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/repository/settings-repository-pg */ \"./src/server/settings/repository/settings-repository-pg.ts\");\n/* harmony import */ var _tasks_repository_tasks_repository_mongo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tasks/repository/tasks-repository-mongo */ \"./src/server/tasks/repository/tasks-repository-mongo.ts\");\n/* harmony import */ var _tasks_services_tasks_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tasks/services/tasks-service */ \"./src/server/tasks/services/tasks-service.ts\");\n/* harmony import */ var _tasks_controller_tasks_controller__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tasks/controller/tasks-controller */ \"./src/server/tasks/controller/tasks-controller.ts\");\n/* harmony import */ var _tasks_router_tasks_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tasks/router/tasks-router */ \"./src/server/tasks/router/tasks-router.ts\");\n/* harmony import */ var _logs_logger_repository_file__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./logs/logger-repository-file */ \"./src/server/logs/logger-repository-file.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar PORT = 5000;\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nvar pgSettings = {\n  user: process.env.PG_USER,\n  password: process.env.PG_PASSWORD,\n  host: process.env.PG_HOST,\n  database: process.env.PG_DATABASE,\n  port: Number(process.env.PG_PORT)\n};\nvar settingsRepository = new _settings_repository_settings_repository_pg__WEBPACK_IMPORTED_MODULE_11__.SettingsRepositoryPG(pgSettings);\nvar settingsService = new _settings_services_settings_service__WEBPACK_IMPORTED_MODULE_10__.SettingsService(settingsRepository);\nvar settingsController = new _settings_controller_settings_controller__WEBPACK_IMPORTED_MODULE_9__.SettingsController(settingsService);\nvar settingsRouter = (0,_settings_router_settings_router__WEBPACK_IMPORTED_MODULE_8__.createSettingsRouter)(settingsController);\nvar logsRepository = new _logs_logger_repository_file__WEBPACK_IMPORTED_MODULE_16__.FileLoggerRepository(process.env.HISTORY_FILENAME);\nvar mongoConnString = \"mongodb://\".concat(process.env.MONGO_HOST, \":\").concat(process.env.MONGO_PORT);\nvar tasksRepository = new _tasks_repository_tasks_repository_mongo__WEBPACK_IMPORTED_MODULE_12__.TasksRepositoryMongo(mongoConnString, process.env.MONGO_DATABASE, process.env.TASKS_COLLECTION_NAME);\nvar tasksService = new _tasks_services_tasks_service__WEBPACK_IMPORTED_MODULE_13__.TasksService(tasksRepository, logsRepository);\nvar tasksController = new _tasks_controller_tasks_controller__WEBPACK_IMPORTED_MODULE_14__.TasksController(tasksService);\nvar tasksRouter = (0,_tasks_router_tasks_router__WEBPACK_IMPORTED_MODULE_15__.createTasksRouter)(tasksController);\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"]('dist/client'));\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\napp.use('/api/settings', settingsRouter);\napp.use('/api/tasks', tasksRouter);\napp.use('*', function (req, res) {\n  var indexHTML = fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_6___default().resolve('./dist/client/index.html'), {\n    encoding: 'utf8'\n  });\n  indexHTML = indexHTML.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat((0,react_dom_server__WEBPACK_IMPORTED_MODULE_4__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_client_App__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)), \"</div>\"));\n  return res.contentType('text/html').status(200).send(indexHTML);\n});\napp.listen(PORT, function () {\n  console.log(\"Server started at http://localhost:\".concat(PORT));\n});\n\n//# sourceURL=webpack://react-ssr-node/./src/server/index.tsx?");

/***/ }),

/***/ "./src/server/logs/logger-repository-file.ts":
/*!***************************************************!*\
  !*** ./src/server/logs/logger-repository-file.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FileLoggerRepository\": () => (/* binding */ FileLoggerRepository)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar FileLoggerRepository = /*#__PURE__*/function () {\n  function FileLoggerRepository(logFileName) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, FileLoggerRepository);\n\n    this.logFileName = logFileName;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(FileLoggerRepository, [{\n    key: \"writeLog\",\n    value: function () {\n      var _writeLog = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(action) {\n        var record;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                record = \"\".concat(action.time, \"\\t\").concat(action.message, \"\\n\");\n                fs__WEBPACK_IMPORTED_MODULE_4___default().writeFile(this.logFileName, record, {\n                  flag: 'a+'\n                }, function (err) {\n                  if (err) console.error('Writting to log file failed');\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function writeLog(_x) {\n        return _writeLog.apply(this, arguments);\n      }\n\n      return writeLog;\n    }()\n  }]);\n\n  return FileLoggerRepository;\n}();\n\n//# sourceURL=webpack://react-ssr-node/./src/server/logs/logger-repository-file.ts?");

/***/ }),

/***/ "./src/server/settings/controller/settings-controller.ts":
/*!***************************************************************!*\
  !*** ./src/server/settings/controller/settings-controller.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsController\": () => (/* binding */ SettingsController)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar SettingsController = /*#__PURE__*/function () {\n  function SettingsController(settingsService) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SettingsController);\n\n    this.settingsService = settingsService;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SettingsController, [{\n    key: \"getSettings\",\n    value: function () {\n      var _getSettings = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(req, res) {\n        var value;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return this.settingsService.getSettings();\n\n              case 3:\n                value = _context.sent;\n                res.status(200).send(value);\n                _context.next = 10;\n                break;\n\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                res.status(500).send(_context.t0.message);\n\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[0, 7]]);\n      }));\n\n      function getSettings(_x, _x2) {\n        return _getSettings.apply(this, arguments);\n      }\n\n      return getSettings;\n    }()\n  }, {\n    key: \"updateSettings\",\n    value: function () {\n      var _updateSettings = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(req, res) {\n        var settings;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                settings = req.body;\n                _context2.prev = 1;\n                _context2.next = 4;\n                return this.settingsService.updateSettings(settings);\n\n              case 4:\n                res.status(200).send();\n                _context2.next = 10;\n                break;\n\n              case 7:\n                _context2.prev = 7;\n                _context2.t0 = _context2[\"catch\"](1);\n                res.status(500).send(_context2.t0.message);\n\n              case 10:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this, [[1, 7]]);\n      }));\n\n      function updateSettings(_x3, _x4) {\n        return _updateSettings.apply(this, arguments);\n      }\n\n      return updateSettings;\n    }()\n  }]);\n\n  return SettingsController;\n}();\n\n//# sourceURL=webpack://react-ssr-node/./src/server/settings/controller/settings-controller.ts?");

/***/ }),

/***/ "./src/server/settings/repository/settings-repository-pg.ts":
/*!******************************************************************!*\
  !*** ./src/server/settings/repository/settings-repository-pg.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsRepositoryPG\": () => (/* binding */ SettingsRepositoryPG)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar INIT_QUERY = \"\\nCREATE TABLE IF NOT EXISTS settings (\\n  name VARCHAR(30) NOT NULL UNIQUE,\\n  value BOOLEAN NOT NULL\\n);\\nINSERT INTO settings VALUES (\\n  'altTemplate',\\n  false\\n) ON CONFLICT DO NOTHING;\\n\";\nvar SettingsRepositoryPG = /*#__PURE__*/function () {\n  function SettingsRepositoryPG(config) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, SettingsRepositoryPG);\n\n    this.config = config;\n    console.log(this.config);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(SettingsRepositoryPG, [{\n    key: \"getClient\",\n    value: function () {\n      var _getClient = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (this.client) {\n                  _context.next = 6;\n                  break;\n                }\n\n                this.client = new pg__WEBPACK_IMPORTED_MODULE_6__.Client(this.config);\n                _context.next = 4;\n                return this.client.connect();\n\n              case 4:\n                _context.next = 6;\n                return this.client.query(INIT_QUERY);\n\n              case 6:\n                return _context.abrupt(\"return\", this.client);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function getClient() {\n        return _getClient.apply(this, arguments);\n      }\n\n      return getClient;\n    }()\n  }, {\n    key: \"getSettings\",\n    value: function () {\n      var _getSettings = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2() {\n        var field, client, res;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                field = 'altTemplate';\n                _context2.next = 3;\n                return this.getClient();\n\n              case 3:\n                client = _context2.sent;\n                _context2.next = 6;\n                return client.query('SELECT value FROM settings WHERE name=$1', [field]);\n\n              case 6:\n                res = _context2.sent;\n                return _context2.abrupt(\"return\", _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, field, res.rows[0].value));\n\n              case 8:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function getSettings() {\n        return _getSettings.apply(this, arguments);\n      }\n\n      return getSettings;\n    }()\n  }, {\n    key: \"updateSettings\",\n    value: function () {\n      var _updateSettings = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee3(newSettings) {\n        var client, _Object$entries$, name, value;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return this.getClient();\n\n              case 2:\n                client = _context3.sent;\n                _Object$entries$ = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(Object.entries(newSettings)[0], 2), name = _Object$entries$[0], value = _Object$entries$[1];\n                _context3.next = 6;\n                return client.query('UPDATE settings SET value=$1 WHERE name=$2', [value, name]);\n\n              case 6:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function updateSettings(_x) {\n        return _updateSettings.apply(this, arguments);\n      }\n\n      return updateSettings;\n    }()\n  }]);\n\n  return SettingsRepositoryPG;\n}();\n\n//# sourceURL=webpack://react-ssr-node/./src/server/settings/repository/settings-repository-pg.ts?");

/***/ }),

/***/ "./src/server/settings/router/settings-router.ts":
/*!*******************************************************!*\
  !*** ./src/server/settings/router/settings-router.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSettingsRouter\": () => (/* binding */ createSettingsRouter)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nvar createSettingsRouter = function createSettingsRouter(controller) {\n  var settingsRouter = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n  settingsRouter.get('/', controller.getSettings.bind(controller));\n  settingsRouter.put('/', controller.updateSettings.bind(controller));\n  return settingsRouter;\n};\n\n//# sourceURL=webpack://react-ssr-node/./src/server/settings/router/settings-router.ts?");

/***/ }),

/***/ "./src/server/settings/services/settings-service.ts":
/*!**********************************************************!*\
  !*** ./src/server/settings/services/settings-service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsService\": () => (/* binding */ SettingsService)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar SettingsService = /*#__PURE__*/function () {\n  function SettingsService(settingsRepository) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SettingsService);\n\n    this.settingsRepository = settingsRepository;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SettingsService, [{\n    key: \"getSettings\",\n    value: function () {\n      var _getSettings = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                return _context.abrupt(\"return\", this.settingsRepository.getSettings());\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function getSettings() {\n        return _getSettings.apply(this, arguments);\n      }\n\n      return getSettings;\n    }()\n  }, {\n    key: \"updateSettings\",\n    value: function () {\n      var _updateSettings = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(newSettings) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return this.settingsRepository.updateSettings(newSettings);\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function updateSettings(_x) {\n        return _updateSettings.apply(this, arguments);\n      }\n\n      return updateSettings;\n    }()\n  }]);\n\n  return SettingsService;\n}();\n\n//# sourceURL=webpack://react-ssr-node/./src/server/settings/services/settings-service.ts?");

/***/ }),

/***/ "./src/server/tasks/controller/tasks-controller.ts":
/*!*********************************************************!*\
  !*** ./src/server/tasks/controller/tasks-controller.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TasksController\": () => (/* binding */ TasksController)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar TasksController = /*#__PURE__*/function () {\n  function TasksController(tasksService) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TasksController);\n\n    this.tasksService = tasksService;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TasksController, [{\n    key: \"getTasks\",\n    value: function () {\n      var _getTasks = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(req, res) {\n        var tasks;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this.tasksService.getTasks();\n\n              case 2:\n                tasks = _context.sent;\n                res.status(200).send(tasks);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function getTasks(_x, _x2) {\n        return _getTasks.apply(this, arguments);\n      }\n\n      return getTasks;\n    }()\n  }, {\n    key: \"createTask\",\n    value: function () {\n      var _createTask = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(req, res) {\n        var task, created;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                task = req.body;\n                _context2.next = 3;\n                return this.tasksService.createTask(task);\n\n              case 3:\n                created = _context2.sent;\n                res.status(201).send(created);\n\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function createTask(_x3, _x4) {\n        return _createTask.apply(this, arguments);\n      }\n\n      return createTask;\n    }()\n  }, {\n    key: \"updateTask\",\n    value: function () {\n      var _updateTask = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(req, res) {\n        var task, updated;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                task = req.body;\n                _context3.next = 3;\n                return this.tasksService.updateTask(task);\n\n              case 3:\n                updated = _context3.sent;\n                res.status(202).send(updated);\n\n              case 5:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function updateTask(_x5, _x6) {\n        return _updateTask.apply(this, arguments);\n      }\n\n      return updateTask;\n    }()\n  }, {\n    key: \"deleteTask\",\n    value: function () {\n      var _deleteTask = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(req, res) {\n        var _req$params;\n\n        var id;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                id = req === null || req === void 0 ? void 0 : (_req$params = req.params) === null || _req$params === void 0 ? void 0 : _req$params.id;\n                _context4.next = 3;\n                return this.tasksService.deleteTask(id);\n\n              case 3:\n                res.status(204).send();\n\n              case 4:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, this);\n      }));\n\n      function deleteTask(_x7, _x8) {\n        return _deleteTask.apply(this, arguments);\n      }\n\n      return deleteTask;\n    }()\n  }]);\n\n  return TasksController;\n}();\n\n//# sourceURL=webpack://react-ssr-node/./src/server/tasks/controller/tasks-controller.ts?");

/***/ }),

/***/ "./src/server/tasks/repository/tasks-repository-mongo.ts":
/*!***************************************************************!*\
  !*** ./src/server/tasks/repository/tasks-repository-mongo.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TasksRepositoryMongo\": () => (/* binding */ TasksRepositoryMongo)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar TasksRepositoryMongo = /*#__PURE__*/function () {\n  function TasksRepositoryMongo(connectionString, dbName, collectionName) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TasksRepositoryMongo);\n\n    this.connectionString = connectionString;\n    this.dbName = dbName;\n    this.collectionName = collectionName;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TasksRepositoryMongo, [{\n    key: \"getCollection\",\n    value: function () {\n      var _getCollection = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {\n        var client, db;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (this.collection) {\n                  _context.next = 6;\n                  break;\n                }\n\n                client = new mongodb__WEBPACK_IMPORTED_MODULE_4__.MongoClient(this.connectionString);\n                _context.next = 4;\n                return client.connect();\n\n              case 4:\n                db = client.db(this.dbName);\n                this.collection = db.collection(this.collectionName);\n\n              case 6:\n                return _context.abrupt(\"return\", this.collection);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function getCollection() {\n        return _getCollection.apply(this, arguments);\n      }\n\n      return getCollection;\n    }()\n  }, {\n    key: \"getTasks\",\n    value: function () {\n      var _getTasks = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {\n        var collection;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return this.getCollection();\n\n              case 2:\n                collection = _context2.sent;\n                _context2.next = 5;\n                return collection.find({}).toArray();\n\n              case 5:\n                return _context2.abrupt(\"return\", _context2.sent);\n\n              case 6:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function getTasks() {\n        return _getTasks.apply(this, arguments);\n      }\n\n      return getTasks;\n    }()\n  }, {\n    key: \"createTask\",\n    value: function () {\n      var _createTask = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(task) {\n        var collection, result;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return this.getCollection();\n\n              case 2:\n                collection = _context3.sent;\n                _context3.next = 5;\n                return collection.insertOne(task);\n\n              case 5:\n                result = _context3.sent;\n                _context3.next = 8;\n                return this.collection.findOne({\n                  _id: result.insertedId\n                });\n\n              case 8:\n                return _context3.abrupt(\"return\", _context3.sent);\n\n              case 9:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function createTask(_x) {\n        return _createTask.apply(this, arguments);\n      }\n\n      return createTask;\n    }()\n  }, {\n    key: \"updateTask\",\n    value: function () {\n      var _updateTask = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(task) {\n        var collection, _ref, _id, description;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return this.getCollection();\n\n              case 2:\n                collection = _context4.sent;\n                _ref = task, _id = _ref._id, description = _ref.description;\n                _context4.next = 6;\n                return collection.updateOne({\n                  _id: new mongodb__WEBPACK_IMPORTED_MODULE_4__.ObjectId(_id)\n                }, {\n                  $set: {\n                    description: description\n                  }\n                });\n\n              case 6:\n                return _context4.abrupt(\"return\", task);\n\n              case 7:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, this);\n      }));\n\n      function updateTask(_x2) {\n        return _updateTask.apply(this, arguments);\n      }\n\n      return updateTask;\n    }()\n  }, {\n    key: \"deleteTask\",\n    value: function () {\n      var _deleteTask = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5(id) {\n        var collection, query;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                _context5.next = 2;\n                return this.getCollection();\n\n              case 2:\n                collection = _context5.sent;\n                query = {\n                  _id: new mongodb__WEBPACK_IMPORTED_MODULE_4__.ObjectId(id)\n                };\n                _context5.next = 6;\n                return collection.deleteOne(query);\n\n              case 6:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5, this);\n      }));\n\n      function deleteTask(_x3) {\n        return _deleteTask.apply(this, arguments);\n      }\n\n      return deleteTask;\n    }()\n  }]);\n\n  return TasksRepositoryMongo;\n}();\n\n//# sourceURL=webpack://react-ssr-node/./src/server/tasks/repository/tasks-repository-mongo.ts?");

/***/ }),

/***/ "./src/server/tasks/router/tasks-router.ts":
/*!*************************************************!*\
  !*** ./src/server/tasks/router/tasks-router.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTasksRouter\": () => (/* binding */ createTasksRouter)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nvar createTasksRouter = function createTasksRouter(controller) {\n  var tasksRouter = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n  tasksRouter.get('/', controller.getTasks.bind(controller));\n  tasksRouter.post('/', controller.createTask.bind(controller));\n  tasksRouter.put('/', controller.updateTask.bind(controller));\n  tasksRouter[\"delete\"]('/:id', controller.deleteTask.bind(controller));\n  return tasksRouter;\n};\n\n//# sourceURL=webpack://react-ssr-node/./src/server/tasks/router/tasks-router.ts?");

/***/ }),

/***/ "./src/server/tasks/services/tasks-service.ts":
/*!****************************************************!*\
  !*** ./src/server/tasks/services/tasks-service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TasksService\": () => (/* binding */ TasksService)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar TasksService = /*#__PURE__*/function () {\n  function TasksService(tasksRepository, loggerRepository) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TasksService);\n\n    this.tasksRepository = tasksRepository;\n    this.loggerRepository = loggerRepository;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TasksService, [{\n    key: \"getTasks\",\n    value: function () {\n      var _getTasks = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {\n        var tasks, message;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return this.tasksRepository.getTasks();\n\n              case 3:\n                tasks = _context.sent;\n                message = \"Fetched \".concat(tasks.length, \" task(s)\");\n                _context.next = 10;\n                break;\n\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                message = _context.t0.message;\n\n              case 10:\n                this.loggerRepository.writeLog({\n                  time: new Date(),\n                  message: message\n                });\n                return _context.abrupt(\"return\", tasks);\n\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[0, 7]]);\n      }));\n\n      function getTasks() {\n        return _getTasks.apply(this, arguments);\n      }\n\n      return getTasks;\n    }()\n  }, {\n    key: \"createTask\",\n    value: function () {\n      var _createTask = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(task) {\n        var created, message;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.prev = 0;\n                _context2.next = 3;\n                return this.tasksRepository.createTask(task);\n\n              case 3:\n                created = _context2.sent;\n                message = 'Created new task';\n                _context2.next = 10;\n                break;\n\n              case 7:\n                _context2.prev = 7;\n                _context2.t0 = _context2[\"catch\"](0);\n                message = _context2.t0.message;\n\n              case 10:\n                this.loggerRepository.writeLog({\n                  time: new Date(),\n                  message: message\n                });\n                return _context2.abrupt(\"return\", created);\n\n              case 12:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this, [[0, 7]]);\n      }));\n\n      function createTask(_x) {\n        return _createTask.apply(this, arguments);\n      }\n\n      return createTask;\n    }()\n  }, {\n    key: \"updateTask\",\n    value: function () {\n      var _updateTask = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(task) {\n        var updated, message;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.prev = 0;\n                _context3.next = 3;\n                return this.tasksRepository.updateTask(task);\n\n              case 3:\n                updated = _context3.sent;\n                message = 'Updated task';\n                _context3.next = 10;\n                break;\n\n              case 7:\n                _context3.prev = 7;\n                _context3.t0 = _context3[\"catch\"](0);\n                message = _context3.t0.message;\n\n              case 10:\n                this.loggerRepository.writeLog({\n                  time: new Date(),\n                  message: message\n                });\n                return _context3.abrupt(\"return\", updated);\n\n              case 12:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this, [[0, 7]]);\n      }));\n\n      function updateTask(_x2) {\n        return _updateTask.apply(this, arguments);\n      }\n\n      return updateTask;\n    }()\n  }, {\n    key: \"deleteTask\",\n    value: function () {\n      var _deleteTask = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(id) {\n        var message;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.prev = 0;\n                _context4.next = 3;\n                return this.tasksRepository.deleteTask(id);\n\n              case 3:\n                message = 'Deleted task';\n                _context4.next = 9;\n                break;\n\n              case 6:\n                _context4.prev = 6;\n                _context4.t0 = _context4[\"catch\"](0);\n                message = _context4.t0.message;\n\n              case 9:\n                this.loggerRepository.writeLog({\n                  time: new Date(),\n                  message: message\n                });\n\n              case 10:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, this, [[0, 6]]);\n      }));\n\n      function deleteTask(_x3) {\n        return _deleteTask.apply(this, arguments);\n      }\n\n      return deleteTask;\n    }()\n  }]);\n\n  return TasksService;\n}();\n\n//# sourceURL=webpack://react-ssr-node/./src/server/tasks/services/tasks-service.ts?");

/***/ }),

/***/ "./src/client/App.css":
/*!****************************!*\
  !*** ./src/client/App.css ***!
  \****************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://react-ssr-node/./src/client/App.css?");

/***/ }),

/***/ "./src/client/components/atoms/Button/Button.css":
/*!*******************************************************!*\
  !*** ./src/client/components/atoms/Button/Button.css ***!
  \*******************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/atoms/Button/Button.css?");

/***/ }),

/***/ "./src/client/components/atoms/Input/Input.css":
/*!*****************************************************!*\
  !*** ./src/client/components/atoms/Input/Input.css ***!
  \*****************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/atoms/Input/Input.css?");

/***/ }),

/***/ "./src/client/components/atoms/Label/Label.css":
/*!*****************************************************!*\
  !*** ./src/client/components/atoms/Label/Label.css ***!
  \*****************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/atoms/Label/Label.css?");

/***/ }),

/***/ "./src/client/components/atoms/Switch/Switch.css":
/*!*******************************************************!*\
  !*** ./src/client/components/atoms/Switch/Switch.css ***!
  \*******************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/atoms/Switch/Switch.css?");

/***/ }),

/***/ "./src/client/components/molecules/TextInput/TextInput.css":
/*!*****************************************************************!*\
  !*** ./src/client/components/molecules/TextInput/TextInput.css ***!
  \*****************************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/molecules/TextInput/TextInput.css?");

/***/ }),

/***/ "./src/client/components/organisms/Form/Form.css":
/*!*******************************************************!*\
  !*** ./src/client/components/organisms/Form/Form.css ***!
  \*******************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/organisms/Form/Form.css?");

/***/ }),

/***/ "./src/client/components/organisms/TaskItem/TaskItem.css":
/*!***************************************************************!*\
  !*** ./src/client/components/organisms/TaskItem/TaskItem.css ***!
  \***************************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/organisms/TaskItem/TaskItem.css?");

/***/ }),

/***/ "./src/client/components/organisms/TaskList/TaskList.css":
/*!***************************************************************!*\
  !*** ./src/client/components/organisms/TaskList/TaskList.css ***!
  \***************************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/organisms/TaskList/TaskList.css?");

/***/ }),

/***/ "./src/client/components/templates/AltTemplate/AltTemplate.css":
/*!*********************************************************************!*\
  !*** ./src/client/components/templates/AltTemplate/AltTemplate.css ***!
  \*********************************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/templates/AltTemplate/AltTemplate.css?");

/***/ }),

/***/ "./src/client/components/templates/TaskTemplate.css":
/*!**********************************************************!*\
  !*** ./src/client/components/templates/TaskTemplate.css ***!
  \**********************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://react-ssr-node/./src/client/components/templates/TaskTemplate.css?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("pg");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.tsx");
/******/ 	
/******/ })()
;