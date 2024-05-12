"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sendEmail";
exports.ids = ["pages/api/sendEmail"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/sendEmail.js":
/*!********************************!*\
  !*** ./pages/api/sendEmail.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { fullName , email , mobile , message , service  } = req.body;\n        // Create a Nodemailer transporter\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n            // Configure your email provider here\n            // Example configuration for Gmail:\n            service: \"Gmail\",\n            auth: {\n                user: \"henicoach@gmail.com\",\n                pass: \"cmdr qtos pjfi gikz\"\n            }\n        });\n        try {\n            // Send email to client\n            await transporter.sendMail({\n                from: \"henicoach@gmail.com\",\n                to: email,\n                subject: `Thank you for choosing ${service} service`,\n                text: `Dear ${fullName},\\n\\nThank you for choosing our ${service} service. Your message has been received, and we will get back to you as soon as possible.\\n\\nBest regards,\\nHeni Coach HjarTeam`\n            });\n            // Send mail with defined transport object to recipient (you can keep this part unchanged)\n            await transporter.sendMail({\n                from: \"henicoach@gmail.com\",\n                to: \"henicoach@gmail.com\",\n                subject: \"New Message from Contact Form\",\n                text: `\r\n          Full Name: ${fullName}\r\n          Email: ${email}\r\n          Mobile: ${mobile}\r\n          Message: ${message}\r\n          Service: ${service}\r\n        `\n            });\n            res.status(200).json({\n                success: true\n            });\n        } catch (error) {\n            console.error(\"Error sending email:\", error);\n            res.status(500).json({\n                error: \"Error sending email\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZEVtYWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUVyQixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNLEVBQUVDLFNBQVEsRUFBRUMsTUFBSyxFQUFFQyxPQUFNLEVBQUVDLFFBQU8sRUFBRUMsUUFBTyxFQUFFLEdBQUdQLElBQUlRLElBQUk7UUFFOUQsa0NBQWtDO1FBQ2xDLE1BQU1DLGNBQWNYLGlFQUEwQixDQUFDO1lBQzdDLHFDQUFxQztZQUNyQyxtQ0FBbUM7WUFDbkNTLFNBQVM7WUFDVEksTUFBTTtnQkFDSkMsTUFBTTtnQkFDTkMsTUFBTTtZQUNSO1FBQ0Y7UUFFQSxJQUFJO1lBQ0YsdUJBQXVCO1lBQ3ZCLE1BQU1KLFlBQVlLLFFBQVEsQ0FBQztnQkFDekJDLE1BQU07Z0JBQ05DLElBQUlaO2dCQUNKYSxTQUFVLENBQUMsdUJBQXVCLEVBQUVWLFFBQVEsUUFBUSxDQUFDO2dCQUNyRFcsTUFBTSxDQUFDLEtBQUssRUFBRWYsU0FBUyxnQ0FBZ0MsRUFBRUksUUFBUSxnSUFBZ0ksQ0FBQztZQUNwTTtZQUVBLDBGQUEwRjtZQUMxRixNQUFNRSxZQUFZSyxRQUFRLENBQUM7Z0JBQ3pCQyxNQUFNO2dCQUNOQyxJQUFJO2dCQUNKQyxTQUFTO2dCQUNUQyxNQUFNLENBQUM7cUJBQ00sRUFBRWYsU0FBUztpQkFDZixFQUFFQyxNQUFNO2tCQUNQLEVBQUVDLE9BQU87bUJBQ1IsRUFBRUMsUUFBUTttQkFDVixFQUFFQyxRQUFRO1FBQ3JCLENBQUM7WUFDSDtZQUVBTixJQUFJa0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUyxJQUFJO1lBQUM7UUFDdkMsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3RDckIsSUFBSWtCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVFLE9BQU87WUFBc0I7UUFDdEQ7SUFDRixPQUFPO1FBQ0xyQixJQUFJa0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFRSxPQUFPO1FBQXFCO0lBQ3JELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJpbm8tbmV4dGpzLy4vcGFnZXMvYXBpL3NlbmRFbWFpbC5qcz8yMDMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGNvbnN0IHsgZnVsbE5hbWUsIGVtYWlsLCBtb2JpbGUsIG1lc3NhZ2UsIHNlcnZpY2UgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIC8vIENyZWF0ZSBhIE5vZGVtYWlsZXIgdHJhbnNwb3J0ZXJcclxuICAgIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgICAvLyBDb25maWd1cmUgeW91ciBlbWFpbCBwcm92aWRlciBoZXJlXHJcbiAgICAgIC8vIEV4YW1wbGUgY29uZmlndXJhdGlvbiBmb3IgR21haWw6XHJcbiAgICAgIHNlcnZpY2U6ICdHbWFpbCcsXHJcbiAgICAgIGF1dGg6IHtcclxuICAgICAgICB1c2VyOiAnaGVuaWNvYWNoQGdtYWlsLmNvbScsXHJcbiAgICAgICAgcGFzczogJ2NtZHIgcXRvcyBwamZpIGdpa3onLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gU2VuZCBlbWFpbCB0byBjbGllbnRcclxuICAgICAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwoe1xyXG4gICAgICAgIGZyb206ICdoZW5pY29hY2hAZ21haWwuY29tJyxcclxuICAgICAgICB0bzogZW1haWwsXHJcbiAgICAgICAgc3ViamVjdDogIGBUaGFuayB5b3UgZm9yIGNob29zaW5nICR7c2VydmljZX0gc2VydmljZWAsXHJcbiAgICAgICAgdGV4dDogYERlYXIgJHtmdWxsTmFtZX0sXFxuXFxuVGhhbmsgeW91IGZvciBjaG9vc2luZyBvdXIgJHtzZXJ2aWNlfSBzZXJ2aWNlLiBZb3VyIG1lc3NhZ2UgaGFzIGJlZW4gcmVjZWl2ZWQsIGFuZCB3ZSB3aWxsIGdldCBiYWNrIHRvIHlvdSBhcyBzb29uIGFzIHBvc3NpYmxlLlxcblxcbkJlc3QgcmVnYXJkcyxcXG5IZW5pIENvYWNoIEhqYXJUZWFtYCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBTZW5kIG1haWwgd2l0aCBkZWZpbmVkIHRyYW5zcG9ydCBvYmplY3QgdG8gcmVjaXBpZW50ICh5b3UgY2FuIGtlZXAgdGhpcyBwYXJ0IHVuY2hhbmdlZClcclxuICAgICAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwoe1xyXG4gICAgICAgIGZyb206ICdoZW5pY29hY2hAZ21haWwuY29tJyxcclxuICAgICAgICB0bzogJ2hlbmljb2FjaEBnbWFpbC5jb20nLFxyXG4gICAgICAgIHN1YmplY3Q6ICdOZXcgTWVzc2FnZSBmcm9tIENvbnRhY3QgRm9ybScsXHJcbiAgICAgICAgdGV4dDogYFxyXG4gICAgICAgICAgRnVsbCBOYW1lOiAke2Z1bGxOYW1lfVxyXG4gICAgICAgICAgRW1haWw6ICR7ZW1haWx9XHJcbiAgICAgICAgICBNb2JpbGU6ICR7bW9iaWxlfVxyXG4gICAgICAgICAgTWVzc2FnZTogJHttZXNzYWdlfVxyXG4gICAgICAgICAgU2VydmljZTogJHtzZXJ2aWNlfVxyXG4gICAgICAgIGAsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VuZGluZyBlbWFpbDonLCBlcnJvcik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdFcnJvciBzZW5kaW5nIGVtYWlsJyB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImZ1bGxOYW1lIiwiZW1haWwiLCJtb2JpbGUiLCJtZXNzYWdlIiwic2VydmljZSIsImJvZHkiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImF1dGgiLCJ1c2VyIiwicGFzcyIsInNlbmRNYWlsIiwiZnJvbSIsInRvIiwic3ViamVjdCIsInRleHQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/sendEmail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sendEmail.js"));
module.exports = __webpack_exports__;

})();