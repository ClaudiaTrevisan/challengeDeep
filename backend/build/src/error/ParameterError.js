"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterError = void 0;
const BaseError_1 = require("./BaseError");
class ParameterError extends BaseError_1.BaseError {
    constructor(message, code) {
        super(message, code);
    }
}
exports.ParameterError = ParameterError;
