var _dec, _dec2, _init_getCache;
function applyDecs2203RFactory() { function createAddInitializerMethod(e, t) { return function (r) { !function (e, t) { if (e.v) throw new Error("attempted to call " + t + " after decoration was finished"); }(t, "addInitializer"), assertCallable(r, "An initializer"), e.push(r); }; } function memberDec(e, t, r, n, a, i, s, o) { var c; switch (a) { case 1: c = "accessor"; break; case 2: c = "method"; break; case 3: c = "getter"; break; case 4: c = "setter"; break; default: c = "field"; } var l, u, f = { kind: c, name: s ? "#" + t : t, static: i, private: s }, p = { v: !1 }; 0 !== a && (f.addInitializer = createAddInitializerMethod(n, p)), 0 === a ? s ? (l = r.get, u = r.set) : (l = function () { return this[t]; }, u = function (e) { this[t] = e; }) : 2 === a ? l = function () { return r.value; } : (1 !== a && 3 !== a || (l = function () { return r.get.call(this); }), 1 !== a && 4 !== a || (u = function (e) { r.set.call(this, e); })), f.access = l && u ? { get: l, set: u } : l ? { get: l } : { set: u }; try { return e(o, f); } finally { p.v = !0; } } function assertCallable(e, t) { if ("function" != typeof e) throw new TypeError(t + " must be a function"); } function assertValidReturnValue(e, t) { var r = typeof t; if (1 === e) { if ("object" !== r || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0"); void 0 !== t.get && assertCallable(t.get, "accessor.get"), void 0 !== t.set && assertCallable(t.set, "accessor.set"), void 0 !== t.init && assertCallable(t.init, "accessor.init"); } else if ("function" !== r) { var n; throw n = 0 === e ? "field" : 10 === e ? "class" : "method", new TypeError(n + " decorators must return a function or void 0"); } } function applyMemberDec(e, t, r, n, a, i, s, o) { var c, l, u, f, p, d, h = r[0]; if (s ? c = 0 === a || 1 === a ? { get: r[3], set: r[4] } : 3 === a ? { get: r[3] } : 4 === a ? { set: r[3] } : { value: r[3] } : 0 !== a && (c = Object.getOwnPropertyDescriptor(t, n)), 1 === a ? u = { get: c.get, set: c.set } : 2 === a ? u = c.value : 3 === a ? u = c.get : 4 === a && (u = c.set), "function" == typeof h) void 0 !== (f = memberDec(h, n, c, o, a, i, s, u)) && (assertValidReturnValue(a, f), 0 === a ? l = f : 1 === a ? (l = f.init, p = f.get || u.get, d = f.set || u.set, u = { get: p, set: d }) : u = f);else for (var v = h.length - 1; v >= 0; v--) { var g; if (void 0 !== (f = memberDec(h[v], n, c, o, a, i, s, u))) assertValidReturnValue(a, f), 0 === a ? g = f : 1 === a ? (g = f.init, p = f.get || u.get, d = f.set || u.set, u = { get: p, set: d }) : u = f, void 0 !== g && (void 0 === l ? l = g : "function" == typeof l ? l = [l, g] : l.push(g)); } if (0 === a || 1 === a) { if (void 0 === l) l = function (e, t) { return t; };else if ("function" != typeof l) { var y = l; l = function (e, t) { for (var r = t, n = 0; n < y.length; n++) r = y[n].call(e, r); return r; }; } else { var m = l; l = function (e, t) { return m.call(e, t); }; } e.push(l); } 0 !== a && (1 === a ? (c.get = u.get, c.set = u.set) : 2 === a ? c.value = u : 3 === a ? c.get = u : 4 === a && (c.set = u), s ? 1 === a ? (e.push(function (e, t) { return u.get.call(e, t); }), e.push(function (e, t) { return u.set.call(e, t); })) : 2 === a ? e.push(u) : e.push(function (e, t) { return u.call(e, t); }) : Object.defineProperty(t, n, c)); } function applyMemberDecs(e, t) { for (var r, n, a = [], i = new Map(), s = new Map(), o = 0; o < t.length; o++) { var c = t[o]; if (Array.isArray(c)) { var l, u, f = c[1], p = c[2], d = c.length > 3, h = f >= 5; if (h ? (l = e, 0 !== (f -= 5) && (u = n = n || [])) : (l = e.prototype, 0 !== f && (u = r = r || [])), 0 !== f && !d) { var v = h ? s : i, g = v.get(p) || 0; if (!0 === g || 3 === g && 4 !== f || 4 === g && 3 !== f) throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + p); !g && f > 2 ? v.set(p, f) : v.set(p, !0); } applyMemberDec(a, l, c, p, f, h, d, u); } } return pushInitializers(a, r), pushInitializers(a, n), a; } function pushInitializers(e, t) { t && e.push(function (e) { for (var r = 0; r < t.length; r++) t[r].call(e); return e; }); } return function (e, t, r) { return { e: applyMemberDecs(e, t), get c() { return function (e, t) { if (t.length > 0) { for (var r = [], n = e, a = e.name, i = t.length - 1; i >= 0; i--) { var s = { v: !1 }; try { var o = t[i](n, { kind: "class", name: a, addInitializer: createAddInitializerMethod(r, s) }); } finally { s.v = !0; } void 0 !== o && (assertValidReturnValue(10, o), n = o); } return [n, function () { for (var e = 0; e < r.length; e++) r[e].call(n); }]; } }(e, r); } }; }; }
function _applyDecs2203R(e, t, r) { return (_applyDecs2203R = applyDecs2203RFactory())(e, t, r); }
const cacheStub = require("suitecloud-unit-testing-stubs/stubs/cache");
const SuiteScriptMocks = require("../../index.cjs");
const {
  options,
  required
} = require("../../helpers.cjs");
const Cache = require("./Cache.cjs");
_dec = options("name", "scope");
_dec2 = required("name");
class CacheModule {
  static {
    [_init_getCache] = _applyDecs2203R(this, [[[_dec, _dec2], 0, "getCache"]], []).e;
  }
  Cache = Cache;
  Scope = cacheStub.Scope;
  getCache = _init_getCache(this, options => {
    if (!options.scope) {
      options.scope = this.Scope.PRIVATE;
    }
    if (!SuiteScriptMocks.caches.has(options)) {
      SuiteScriptMocks.caches.set(new Cache(options));
    }
    return SuiteScriptMocks.caches.get(options);
  });
}
module.exports = new CacheModule();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjYWNoZVN0dWIiLCJyZXF1aXJlIiwiU3VpdGVTY3JpcHRNb2NrcyIsIm9wdGlvbnMiLCJyZXF1aXJlZCIsIkNhY2hlIiwiX2RlYyIsIl9kZWMyIiwiQ2FjaGVNb2R1bGUiLCJfaW5pdF9nZXRDYWNoZSIsIl9hcHBseURlY3MyMjAzUiIsImUiLCJTY29wZSIsImdldENhY2hlIiwic2NvcGUiLCJQUklWQVRFIiwiY2FjaGVzIiwiaGFzIiwic2V0IiwiZ2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2Nrcy9jYWNoZS9pbmRleC5janMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FjaGVTdHViID0gcmVxdWlyZShcInN1aXRlY2xvdWQtdW5pdC10ZXN0aW5nLXN0dWJzL3N0dWJzL2NhY2hlXCIpO1xuY29uc3QgU3VpdGVTY3JpcHRNb2NrcyA9IHJlcXVpcmUoXCIuLi8uLi9pbmRleC5janNcIik7XG5jb25zdCB7IG9wdGlvbnMsIHJlcXVpcmVkIH0gPSByZXF1aXJlKFwiLi4vLi4vaGVscGVycy5janNcIik7XG5jb25zdCBDYWNoZSA9IHJlcXVpcmUoXCIuL0NhY2hlLmNqc1wiKTtcblxuY2xhc3MgQ2FjaGVNb2R1bGUge1xuXHRDYWNoZSA9IENhY2hlO1xuXG5cdFNjb3BlID0gY2FjaGVTdHViLlNjb3BlO1xuXG5cdEBvcHRpb25zKFwibmFtZVwiLCBcInNjb3BlXCIpXG5cdEByZXF1aXJlZChcIm5hbWVcIilcblx0Z2V0Q2FjaGUgPSAob3B0aW9ucykgPT4ge1xuXHRcdGlmICghb3B0aW9ucy5zY29wZSkge1xuXHRcdFx0b3B0aW9ucy5zY29wZSA9IHRoaXMuU2NvcGUuUFJJVkFURTtcblx0XHR9XG5cdFx0aWYgKCFTdWl0ZVNjcmlwdE1vY2tzLmNhY2hlcy5oYXMob3B0aW9ucykpIHtcblx0XHRcdFN1aXRlU2NyaXB0TW9ja3MuY2FjaGVzLnNldChuZXcgQ2FjaGUob3B0aW9ucykpO1xuXHRcdH1cblx0XHRyZXR1cm4gU3VpdGVTY3JpcHRNb2Nrcy5jYWNoZXMuZ2V0KG9wdGlvbnMpO1xuXHR9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBDYWNoZU1vZHVsZSgpO1xuIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQywyQ0FBMkMsQ0FBQztBQUN0RSxNQUFNQyxnQkFBZ0IsR0FBR0QsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0FBQ25ELE1BQU07RUFBRUUsT0FBTztFQUFFQztBQUFTLENBQUMsR0FBR0gsT0FBTyxDQUFDLG1CQUFtQixDQUFDO0FBQzFELE1BQU1JLEtBQUssR0FBR0osT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUFDSyxJQUFBLEdBT25DSCxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUFBSSxLQUFBLEdBQ3hCSCxRQUFRLENBQUMsTUFBTSxDQUFDO0FBTmxCLE1BQU1JLFdBQVcsQ0FBQztFQUFBO0lBQUEsQ0FBQUMsY0FBQSxJQUFBQyxlQUFBLFVBQUFKLElBQUEsRUFBQUMsS0FBQSx3QkFBQUksQ0FBQTtFQUFBO0VBQ2pCTixLQUFLLEdBQUdBLEtBQUs7RUFFYk8sS0FBSyxHQUFHWixTQUFTLENBQUNZLEtBQUs7RUFJdkJDLFFBQVEsR0FBQUosY0FBQSxPQUFJTixPQUFPLElBQUs7SUFDdkIsSUFBSSxDQUFDQSxPQUFPLENBQUNXLEtBQUssRUFBRTtNQUNuQlgsT0FBTyxDQUFDVyxLQUFLLEdBQUcsSUFBSSxDQUFDRixLQUFLLENBQUNHLE9BQU87SUFDbkM7SUFDQSxJQUFJLENBQUNiLGdCQUFnQixDQUFDYyxNQUFNLENBQUNDLEdBQUcsQ0FBQ2QsT0FBTyxDQUFDLEVBQUU7TUFDMUNELGdCQUFnQixDQUFDYyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxJQUFJYixLQUFLLENBQUNGLE9BQU8sQ0FBQyxDQUFDO0lBQ2hEO0lBQ0EsT0FBT0QsZ0JBQWdCLENBQUNjLE1BQU0sQ0FBQ0csR0FBRyxDQUFDaEIsT0FBTyxDQUFDO0VBQzVDLENBQUM7QUFDRjtBQUVBaUIsTUFBTSxDQUFDQyxPQUFPLEdBQUcsSUFBSWIsV0FBVyxDQUFDLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=