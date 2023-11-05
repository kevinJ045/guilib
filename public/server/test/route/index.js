"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
function GET(req, route, paths) {
    return JSON.stringify({ route, paths });
}
exports.GET = GET;
