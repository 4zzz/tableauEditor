
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_community$undo_redo$UndoList$toList = function (_p0) {
	var _p1 = _p0;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$List$reverse(_p1.past),
		A2(
			_elm_lang$core$Basics_ops['++'],
			{
				ctor: '::',
				_0: _p1.present,
				_1: {ctor: '[]'}
			},
			_p1.future));
};
var _elm_community$undo_redo$UndoList$view = F2(
	function (viewer, _p2) {
		var _p3 = _p2;
		return viewer(_p3.present);
	});
var _elm_community$undo_redo$UndoList$foldr = F3(
	function (reducer, initial, _p4) {
		var _p5 = _p4;
		return function (b) {
			return A3(_elm_lang$core$List$foldl, reducer, b, _p5.past);
		}(
			A2(
				reducer,
				_p5.present,
				A3(_elm_lang$core$List$foldr, reducer, initial, _p5.future)));
	});
var _elm_community$undo_redo$UndoList$foldl = F3(
	function (reducer, initial, _p6) {
		var _p7 = _p6;
		return function (b) {
			return A3(_elm_lang$core$List$foldl, reducer, b, _p7.future);
		}(
			A2(
				reducer,
				_p7.present,
				A3(_elm_lang$core$List$foldr, reducer, initial, _p7.past)));
	});
var _elm_community$undo_redo$UndoList$reduce = _elm_community$undo_redo$UndoList$foldl;
var _elm_community$undo_redo$UndoList$lengthFuture = function (_p8) {
	return _elm_lang$core$List$length(
		function (_) {
			return _.future;
		}(_p8));
};
var _elm_community$undo_redo$UndoList$lengthPast = function (_p9) {
	return _elm_lang$core$List$length(
		function (_) {
			return _.past;
		}(_p9));
};
var _elm_community$undo_redo$UndoList$length = function (undolist) {
	return (_elm_community$undo_redo$UndoList$lengthPast(undolist) + 1) + _elm_community$undo_redo$UndoList$lengthFuture(undolist);
};
var _elm_community$undo_redo$UndoList$hasFuture = function (_p10) {
	return !_elm_lang$core$List$isEmpty(
		function (_) {
			return _.future;
		}(_p10));
};
var _elm_community$undo_redo$UndoList$hasPast = function (_p11) {
	return !_elm_lang$core$List$isEmpty(
		function (_) {
			return _.past;
		}(_p11));
};
var _elm_community$undo_redo$UndoList$UndoList = F3(
	function (a, b, c) {
		return {past: a, present: b, future: c};
	});
var _elm_community$undo_redo$UndoList$undo = function (_p12) {
	var _p13 = _p12;
	var _p17 = _p13.present;
	var _p16 = _p13.past;
	var _p15 = _p13.future;
	var _p14 = _p16;
	if (_p14.ctor === '[]') {
		return A3(_elm_community$undo_redo$UndoList$UndoList, _p16, _p17, _p15);
	} else {
		return A3(
			_elm_community$undo_redo$UndoList$UndoList,
			_p14._1,
			_p14._0,
			{ctor: '::', _0: _p17, _1: _p15});
	}
};
var _elm_community$undo_redo$UndoList$redo = function (_p18) {
	var _p19 = _p18;
	var _p23 = _p19.present;
	var _p22 = _p19.past;
	var _p21 = _p19.future;
	var _p20 = _p21;
	if (_p20.ctor === '[]') {
		return A3(_elm_community$undo_redo$UndoList$UndoList, _p22, _p23, _p21);
	} else {
		return A3(
			_elm_community$undo_redo$UndoList$UndoList,
			{ctor: '::', _0: _p23, _1: _p22},
			_p20._0,
			_p20._1);
	}
};
var _elm_community$undo_redo$UndoList$fresh = function (state) {
	return A3(
		_elm_community$undo_redo$UndoList$UndoList,
		{ctor: '[]'},
		state,
		{ctor: '[]'});
};
var _elm_community$undo_redo$UndoList$new = F2(
	function (event, _p24) {
		var _p25 = _p24;
		return A3(
			_elm_community$undo_redo$UndoList$UndoList,
			{ctor: '::', _0: _p25.present, _1: _p25.past},
			event,
			{ctor: '[]'});
	});
var _elm_community$undo_redo$UndoList$forget = function (_p26) {
	var _p27 = _p26;
	return A3(
		_elm_community$undo_redo$UndoList$UndoList,
		{ctor: '[]'},
		_p27.present,
		_p27.future);
};
var _elm_community$undo_redo$UndoList$reset = function (_p28) {
	reset:
	while (true) {
		var _p29 = _p28;
		var _p30 = _p29.past;
		if (_p30.ctor === '[]') {
			return _elm_community$undo_redo$UndoList$fresh(_p29.present);
		} else {
			var _v12 = A3(
				_elm_community$undo_redo$UndoList$UndoList,
				_p30._1,
				_p30._0,
				{ctor: '[]'});
			_p28 = _v12;
			continue reset;
		}
	}
};
var _elm_community$undo_redo$UndoList$update = F3(
	function (updater, msg, undolist) {
		var _p31 = msg;
		switch (_p31.ctor) {
			case 'Reset':
				return _elm_community$undo_redo$UndoList$reset(undolist);
			case 'Redo':
				return _elm_community$undo_redo$UndoList$redo(undolist);
			case 'Undo':
				return _elm_community$undo_redo$UndoList$undo(undolist);
			case 'Forget':
				return _elm_community$undo_redo$UndoList$forget(undolist);
			default:
				return A2(
					_elm_community$undo_redo$UndoList$new,
					A2(updater, _p31._0, undolist.present),
					undolist);
		}
	});
var _elm_community$undo_redo$UndoList$map = F2(
	function (f, _p32) {
		var _p33 = _p32;
		return A3(
			_elm_community$undo_redo$UndoList$UndoList,
			A2(_elm_lang$core$List$map, f, _p33.past),
			f(_p33.present),
			A2(_elm_lang$core$List$map, f, _p33.future));
	});
var _elm_community$undo_redo$UndoList$map2 = F3(
	function (f, undoListA, undoListB) {
		return A3(
			_elm_community$undo_redo$UndoList$UndoList,
			A3(_elm_lang$core$List$map2, f, undoListA.past, undoListB.past),
			A2(f, undoListA.present, undoListB.present),
			A3(_elm_lang$core$List$map2, f, undoListA.future, undoListB.future));
	});
var _elm_community$undo_redo$UndoList$andMap = _elm_lang$core$Basics$flip(
	_elm_community$undo_redo$UndoList$map2(
		F2(
			function (x, y) {
				return x(y);
			})));
var _elm_community$undo_redo$UndoList$mapPresent = F2(
	function (f, _p34) {
		var _p35 = _p34;
		return A3(
			_elm_community$undo_redo$UndoList$UndoList,
			_p35.past,
			f(_p35.present),
			_p35.future);
	});
var _elm_community$undo_redo$UndoList$reverse = function (_p36) {
	var _p37 = _p36;
	return A3(_elm_community$undo_redo$UndoList$UndoList, _p37.future, _p37.present, _p37.past);
};
var _elm_community$undo_redo$UndoList$flatten = function (_p38) {
	var _p39 = _p38;
	var _p40 = _p39.present;
	return A3(
		_elm_community$undo_redo$UndoList$UndoList,
		A2(
			_elm_lang$core$Basics_ops['++'],
			_p40.past,
			_elm_lang$core$List$reverse(
				A2(_elm_lang$core$List$concatMap, _elm_community$undo_redo$UndoList$toList, _p39.past))),
		_p40.present,
		A2(
			_elm_lang$core$Basics_ops['++'],
			_p40.future,
			A2(_elm_lang$core$List$concatMap, _elm_community$undo_redo$UndoList$toList, _p39.future)));
};
var _elm_community$undo_redo$UndoList$flatMap = function (f) {
	return function (_p41) {
		return _elm_community$undo_redo$UndoList$flatten(
			A2(_elm_community$undo_redo$UndoList$map, f, _p41));
	};
};
var _elm_community$undo_redo$UndoList$andThen = _elm_community$undo_redo$UndoList$flatMap;
var _elm_community$undo_redo$UndoList$connect = F2(
	function (_p42, undolist) {
		var _p43 = _p42;
		return A3(
			_elm_community$undo_redo$UndoList$UndoList,
			_p43.past,
			_p43.present,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_p43.future,
				_elm_community$undo_redo$UndoList$toList(undolist)));
	});
var _elm_community$undo_redo$UndoList$fromList = F2(
	function (present, future) {
		return A3(
			_elm_community$undo_redo$UndoList$UndoList,
			{ctor: '[]'},
			present,
			future);
	});
var _elm_community$undo_redo$UndoList$New = function (a) {
	return {ctor: 'New', _0: a};
};
var _elm_community$undo_redo$UndoList$Forget = {ctor: 'Forget'};
var _elm_community$undo_redo$UndoList$Undo = {ctor: 'Undo'};
var _elm_community$undo_redo$UndoList$Redo = {ctor: 'Redo'};
var _elm_community$undo_redo$UndoList$Reset = {ctor: 'Reset'};
var _elm_community$undo_redo$UndoList$mapMsg = F2(
	function (f, msg) {
		var _p44 = msg;
		switch (_p44.ctor) {
			case 'Reset':
				return _elm_community$undo_redo$UndoList$Reset;
			case 'Redo':
				return _elm_community$undo_redo$UndoList$Redo;
			case 'Undo':
				return _elm_community$undo_redo$UndoList$Undo;
			case 'Forget':
				return _elm_community$undo_redo$UndoList$Forget;
			default:
				return _elm_community$undo_redo$UndoList$New(
					f(_p44._0));
		}
	});

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$http$Native_Http = function() {


// ENCODING AND DECODING

function encodeUri(string)
{
	return encodeURIComponent(string);
}

function decodeUri(string)
{
	try
	{
		return _elm_lang$core$Maybe$Just(decodeURIComponent(string));
	}
	catch(e)
	{
		return _elm_lang$core$Maybe$Nothing;
	}
}


// SEND REQUEST

function toTask(request, maybeProgress)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var xhr = new XMLHttpRequest();

		configureProgress(xhr, maybeProgress);

		xhr.addEventListener('error', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NetworkError' }));
		});
		xhr.addEventListener('timeout', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'Timeout' }));
		});
		xhr.addEventListener('load', function() {
			callback(handleResponse(xhr, request.expect.responseToResult));
		});

		try
		{
			xhr.open(request.method, request.url, true);
		}
		catch (e)
		{
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'BadUrl', _0: request.url }));
		}

		configureRequest(xhr, request);
		send(xhr, request.body);

		return function() { xhr.abort(); };
	});
}

function configureProgress(xhr, maybeProgress)
{
	if (maybeProgress.ctor === 'Nothing')
	{
		return;
	}

	xhr.addEventListener('progress', function(event) {
		if (!event.lengthComputable)
		{
			return;
		}
		_elm_lang$core$Native_Scheduler.rawSpawn(maybeProgress._0({
			bytes: event.loaded,
			bytesExpected: event.total
		}));
	});
}

function configureRequest(xhr, request)
{
	function setHeader(pair)
	{
		xhr.setRequestHeader(pair._0, pair._1);
	}

	A2(_elm_lang$core$List$map, setHeader, request.headers);
	xhr.responseType = request.expect.responseType;
	xhr.withCredentials = request.withCredentials;

	if (request.timeout.ctor === 'Just')
	{
		xhr.timeout = request.timeout._0;
	}
}

function send(xhr, body)
{
	switch (body.ctor)
	{
		case 'EmptyBody':
			xhr.send();
			return;

		case 'StringBody':
			xhr.setRequestHeader('Content-Type', body._0);
			xhr.send(body._1);
			return;

		case 'FormDataBody':
			xhr.send(body._0);
			return;
	}
}


// RESPONSES

function handleResponse(xhr, responseToResult)
{
	var response = toResponse(xhr);

	if (xhr.status < 200 || 300 <= xhr.status)
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadStatus',
			_0: response
		});
	}

	var result = responseToResult(response);

	if (result.ctor === 'Ok')
	{
		return _elm_lang$core$Native_Scheduler.succeed(result._0);
	}
	else
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadPayload',
			_0: result._0,
			_1: response
		});
	}
}

function toResponse(xhr)
{
	return {
		status: { code: xhr.status, message: xhr.statusText },
		headers: parseHeaders(xhr.getAllResponseHeaders()),
		url: xhr.responseURL,
		body: xhr.response
	};
}

function parseHeaders(rawHeaders)
{
	var headers = _elm_lang$core$Dict$empty;

	if (!rawHeaders)
	{
		return headers;
	}

	var headerPairs = rawHeaders.split('\u000d\u000a');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf('\u003a\u0020');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
				if (oldValue.ctor === 'Just')
				{
					return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
				}
				return _elm_lang$core$Maybe$Just(value);
			}, headers);
		}
	}

	return headers;
}


// EXPECTORS

function expectStringResponse(responseToResult)
{
	return {
		responseType: 'text',
		responseToResult: responseToResult
	};
}

function mapExpect(func, expect)
{
	return {
		responseType: expect.responseType,
		responseToResult: function(response) {
			var convertedResponse = expect.responseToResult(response);
			return A2(_elm_lang$core$Result$map, func, convertedResponse);
		}
	};
}


// BODY

function multipart(parts)
{
	var formData = new FormData();

	while (parts.ctor !== '[]')
	{
		var part = parts._0;
		formData.append(part._0, part._1);
		parts = parts._1;
	}

	return { ctor: 'FormDataBody', _0: formData };
}

return {
	toTask: F2(toTask),
	expectStringResponse: expectStringResponse,
	mapExpect: F2(mapExpect),
	multipart: multipart,
	encodeUri: encodeUri,
	decodeUri: decodeUri
};

}();

var _elm_lang$http$Http_Internal$map = F2(
	function (func, request) {
		return _elm_lang$core$Native_Utils.update(
			request,
			{
				expect: A2(_elm_lang$http$Native_Http.mapExpect, func, request.expect)
			});
	});
var _elm_lang$http$Http_Internal$RawRequest = F7(
	function (a, b, c, d, e, f, g) {
		return {method: a, headers: b, url: c, body: d, expect: e, timeout: f, withCredentials: g};
	});
var _elm_lang$http$Http_Internal$Request = function (a) {
	return {ctor: 'Request', _0: a};
};
var _elm_lang$http$Http_Internal$Expect = {ctor: 'Expect'};
var _elm_lang$http$Http_Internal$FormDataBody = {ctor: 'FormDataBody'};
var _elm_lang$http$Http_Internal$StringBody = F2(
	function (a, b) {
		return {ctor: 'StringBody', _0: a, _1: b};
	});
var _elm_lang$http$Http_Internal$EmptyBody = {ctor: 'EmptyBody'};
var _elm_lang$http$Http_Internal$Header = F2(
	function (a, b) {
		return {ctor: 'Header', _0: a, _1: b};
	});

var _elm_lang$http$Http$decodeUri = _elm_lang$http$Native_Http.decodeUri;
var _elm_lang$http$Http$encodeUri = _elm_lang$http$Native_Http.encodeUri;
var _elm_lang$http$Http$expectStringResponse = _elm_lang$http$Native_Http.expectStringResponse;
var _elm_lang$http$Http$expectJson = function (decoder) {
	return _elm_lang$http$Http$expectStringResponse(
		function (response) {
			return A2(_elm_lang$core$Json_Decode$decodeString, decoder, response.body);
		});
};
var _elm_lang$http$Http$expectString = _elm_lang$http$Http$expectStringResponse(
	function (response) {
		return _elm_lang$core$Result$Ok(response.body);
	});
var _elm_lang$http$Http$multipartBody = _elm_lang$http$Native_Http.multipart;
var _elm_lang$http$Http$stringBody = _elm_lang$http$Http_Internal$StringBody;
var _elm_lang$http$Http$jsonBody = function (value) {
	return A2(
		_elm_lang$http$Http_Internal$StringBody,
		'application/json',
		A2(_elm_lang$core$Json_Encode$encode, 0, value));
};
var _elm_lang$http$Http$emptyBody = _elm_lang$http$Http_Internal$EmptyBody;
var _elm_lang$http$Http$header = _elm_lang$http$Http_Internal$Header;
var _elm_lang$http$Http$request = _elm_lang$http$Http_Internal$Request;
var _elm_lang$http$Http$post = F3(
	function (url, body, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'POST',
				headers: {ctor: '[]'},
				url: url,
				body: body,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$get = F2(
	function (url, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'GET',
				headers: {ctor: '[]'},
				url: url,
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$getString = function (url) {
	return _elm_lang$http$Http$request(
		{
			method: 'GET',
			headers: {ctor: '[]'},
			url: url,
			body: _elm_lang$http$Http$emptyBody,
			expect: _elm_lang$http$Http$expectString,
			timeout: _elm_lang$core$Maybe$Nothing,
			withCredentials: false
		});
};
var _elm_lang$http$Http$toTask = function (_p0) {
	var _p1 = _p0;
	return A2(_elm_lang$http$Native_Http.toTask, _p1._0, _elm_lang$core$Maybe$Nothing);
};
var _elm_lang$http$Http$send = F2(
	function (resultToMessage, request) {
		return A2(
			_elm_lang$core$Task$attempt,
			resultToMessage,
			_elm_lang$http$Http$toTask(request));
	});
var _elm_lang$http$Http$Response = F4(
	function (a, b, c, d) {
		return {url: a, status: b, headers: c, body: d};
	});
var _elm_lang$http$Http$BadPayload = F2(
	function (a, b) {
		return {ctor: 'BadPayload', _0: a, _1: b};
	});
var _elm_lang$http$Http$BadStatus = function (a) {
	return {ctor: 'BadStatus', _0: a};
};
var _elm_lang$http$Http$NetworkError = {ctor: 'NetworkError'};
var _elm_lang$http$Http$Timeout = {ctor: 'Timeout'};
var _elm_lang$http$Http$BadUrl = function (a) {
	return {ctor: 'BadUrl', _0: a};
};
var _elm_lang$http$Http$StringPart = F2(
	function (a, b) {
		return {ctor: 'StringPart', _0: a, _1: b};
	});
var _elm_lang$http$Http$stringPart = _elm_lang$http$Http$StringPart;

var _elm_tools$parser_primitives$Native_ParserPrimitives = function() {


// STRINGS

function isSubString(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var bigLength = bigString.length - offset;

	if (bigLength < smallLength)
	{
		return tuple3(-1, row, col);
	}

	for (var i = 0; i < smallLength; i++)
	{
		var char = smallString[i];

		if (char !== bigString[offset + i])
		{
			return tuple3(-1, row, col);
		}

		// if it is a two word character
		if ((bigString.charCodeAt(offset) & 0xF800) === 0xD800)
		{
			i++
			if (smallString[i] !== bigString[offset + i])
			{
				return tuple3(-1, row, col);
			}
			col++;
			continue;
		}

		// if it is a newline
		if (char === '\n')
		{
			row++;
			col = 1;
			continue;
		}

		// if it is a one word character
		col++
	}

	return tuple3(offset + smallLength, row, col);
}

function tuple3(a, b, c)
{
	return { ctor: '_Tuple3', _0: a, _1: b, _2: c };
}


// CHARS

var mkChar = _elm_lang$core$Native_Utils.chr;

function isSubChar(predicate, offset, string)
{
	if (offset >= string.length)
	{
		return -1;
	}

	if ((string.charCodeAt(offset) & 0xF800) === 0xD800)
	{
		return predicate(mkChar(string.substr(offset, 2)))
			? offset + 2
			: -1;
	}

	var char = string[offset];

	return predicate(mkChar(char))
		? ((char === '\n') ? -2 : (offset + 1))
		: -1;
}


// FIND STRING

function findSubString(before, smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);

	if (newOffset === -1)
	{
		return tuple3(-1, row, col);
	}

	var scanTarget = before ? newOffset	: newOffset + smallString.length;

	while (offset < scanTarget)
	{
		var char = bigString[offset];

		if (char === '\n')
		{
			offset++;
			row++;
			col = 1;
			continue;
		}

		if ((bigString.charCodeAt(offset) & 0xF800) === 0xD800)
		{
			offset += 2;
			col++;
			continue;
		}

		offset++;
		col++;
	}

	return tuple3(offset, row, col);
}


return {
	isSubString: F5(isSubString),
	isSubChar: F3(isSubChar),
	findSubString: F6(findSubString)
};

}();

var _elm_tools$parser_primitives$ParserPrimitives$findSubString = _elm_tools$parser_primitives$Native_ParserPrimitives.findSubString;
var _elm_tools$parser_primitives$ParserPrimitives$isSubChar = _elm_tools$parser_primitives$Native_ParserPrimitives.isSubChar;
var _elm_tools$parser_primitives$ParserPrimitives$isSubString = _elm_tools$parser_primitives$Native_ParserPrimitives.isSubString;

var _elm_tools$parser$Parser_Internal$isPlusOrMinus = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('+')) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('-'));
};
var _elm_tools$parser$Parser_Internal$isZero = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('0'));
};
var _elm_tools$parser$Parser_Internal$isE = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('e')) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('E'));
};
var _elm_tools$parser$Parser_Internal$isDot = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('.'));
};
var _elm_tools$parser$Parser_Internal$isBadIntEnd = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (_elm_lang$core$Char$isUpper($char) || (_elm_lang$core$Char$isLower($char) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('.'))));
};
var _elm_tools$parser$Parser_Internal$chomp = F3(
	function (isGood, offset, source) {
		chomp:
		while (true) {
			var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, isGood, offset, source);
			if (_elm_lang$core$Native_Utils.cmp(newOffset, 0) < 0) {
				return offset;
			} else {
				var _v0 = isGood,
					_v1 = newOffset,
					_v2 = source;
				isGood = _v0;
				offset = _v1;
				source = _v2;
				continue chomp;
			}
		}
	});
var _elm_tools$parser$Parser_Internal$chompDigits = F3(
	function (isValidDigit, offset, source) {
		var newOffset = A3(_elm_tools$parser$Parser_Internal$chomp, isValidDigit, offset, source);
		return _elm_lang$core$Native_Utils.eq(newOffset, offset) ? _elm_lang$core$Result$Err(newOffset) : ((!_elm_lang$core$Native_Utils.eq(
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isBadIntEnd, newOffset, source),
			-1)) ? _elm_lang$core$Result$Err(newOffset) : _elm_lang$core$Result$Ok(newOffset));
	});
var _elm_tools$parser$Parser_Internal$chompExp = F2(
	function (offset, source) {
		var eOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isE, offset, source);
		if (_elm_lang$core$Native_Utils.eq(eOffset, -1)) {
			return _elm_lang$core$Result$Ok(offset);
		} else {
			var opOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isPlusOrMinus, eOffset, source);
			var expOffset = _elm_lang$core$Native_Utils.eq(opOffset, -1) ? eOffset : opOffset;
			return (!_elm_lang$core$Native_Utils.eq(
				A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isZero, expOffset, source),
				-1)) ? _elm_lang$core$Result$Err(expOffset) : (_elm_lang$core$Native_Utils.eq(
				A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_lang$core$Char$isDigit, expOffset, source),
				-1) ? _elm_lang$core$Result$Err(expOffset) : A3(_elm_tools$parser$Parser_Internal$chompDigits, _elm_lang$core$Char$isDigit, expOffset, source));
		}
	});
var _elm_tools$parser$Parser_Internal$chompDotAndExp = F2(
	function (offset, source) {
		var dotOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isDot, offset, source);
		return _elm_lang$core$Native_Utils.eq(dotOffset, -1) ? A2(_elm_tools$parser$Parser_Internal$chompExp, offset, source) : A2(
			_elm_tools$parser$Parser_Internal$chompExp,
			A3(_elm_tools$parser$Parser_Internal$chomp, _elm_lang$core$Char$isDigit, dotOffset, source),
			source);
	});
var _elm_tools$parser$Parser_Internal$State = F6(
	function (a, b, c, d, e, f) {
		return {source: a, offset: b, indent: c, context: d, row: e, col: f};
	});
var _elm_tools$parser$Parser_Internal$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _elm_tools$parser$Parser_Internal$Bad = F2(
	function (a, b) {
		return {ctor: 'Bad', _0: a, _1: b};
	});
var _elm_tools$parser$Parser_Internal$Good = F2(
	function (a, b) {
		return {ctor: 'Good', _0: a, _1: b};
	});

var _elm_tools$parser$Parser$changeContext = F2(
	function (newContext, _p0) {
		var _p1 = _p0;
		return {source: _p1.source, offset: _p1.offset, indent: _p1.indent, context: newContext, row: _p1.row, col: _p1.col};
	});
var _elm_tools$parser$Parser$sourceMap = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p4) {
				var _p5 = _p4;
				var _p6 = _p3._0(_p5);
				if (_p6.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p6._0, _p6._1);
				} else {
					var _p7 = _p6._1;
					var subString = A3(_elm_lang$core$String$slice, _p5.offset, _p7.offset, _p5.source);
					return A2(
						_elm_tools$parser$Parser_Internal$Good,
						A2(func, subString, _p6._0),
						_p7);
				}
			});
	});
var _elm_tools$parser$Parser$source = function (parser) {
	return A2(_elm_tools$parser$Parser$sourceMap, _elm_lang$core$Basics$always, parser);
};
var _elm_tools$parser$Parser$badFloatMsg = 'The `Parser.float` parser seems to have a bug.\nPlease report an SSCCE to <https://github.com/elm-tools/parser/issues>.';
var _elm_tools$parser$Parser$floatHelp = F3(
	function (offset, zeroOffset, source) {
		if (_elm_lang$core$Native_Utils.cmp(zeroOffset, 0) > -1) {
			return A2(_elm_tools$parser$Parser_Internal$chompDotAndExp, zeroOffset, source);
		} else {
			var dotOffset = A3(_elm_tools$parser$Parser_Internal$chomp, _elm_lang$core$Char$isDigit, offset, source);
			var result = A2(_elm_tools$parser$Parser_Internal$chompDotAndExp, dotOffset, source);
			var _p8 = result;
			if (_p8.ctor === 'Err') {
				return result;
			} else {
				var _p9 = _p8._0;
				return _elm_lang$core$Native_Utils.eq(_p9, offset) ? _elm_lang$core$Result$Err(_p9) : result;
			}
		}
	});
var _elm_tools$parser$Parser$badIntMsg = 'The `Parser.int` parser seems to have a bug.\nPlease report an SSCCE to <https://github.com/elm-tools/parser/issues>.';
var _elm_tools$parser$Parser$isX = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('x'));
};
var _elm_tools$parser$Parser$isO = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('o'));
};
var _elm_tools$parser$Parser$isZero = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('0'));
};
var _elm_tools$parser$Parser$intHelp = F3(
	function (offset, zeroOffset, source) {
		return _elm_lang$core$Native_Utils.eq(zeroOffset, -1) ? A3(_elm_tools$parser$Parser_Internal$chompDigits, _elm_lang$core$Char$isDigit, offset, source) : ((!_elm_lang$core$Native_Utils.eq(
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser$isX, zeroOffset, source),
			-1)) ? A3(_elm_tools$parser$Parser_Internal$chompDigits, _elm_lang$core$Char$isHexDigit, offset + 2, source) : (_elm_lang$core$Native_Utils.eq(
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isBadIntEnd, zeroOffset, source),
			-1) ? _elm_lang$core$Result$Ok(zeroOffset) : _elm_lang$core$Result$Err(zeroOffset)));
	});
var _elm_tools$parser$Parser$token = F2(
	function (makeProblem, str) {
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p10) {
				var _p11 = _p10;
				var _p13 = _p11.source;
				var _p12 = A5(_elm_tools$parser_primitives$ParserPrimitives$isSubString, str, _p11.offset, _p11.row, _p11.col, _p13);
				var newOffset = _p12._0;
				var newRow = _p12._1;
				var newCol = _p12._2;
				return _elm_lang$core$Native_Utils.eq(newOffset, -1) ? A2(
					_elm_tools$parser$Parser_Internal$Bad,
					makeProblem(str),
					_p11) : A2(
					_elm_tools$parser$Parser_Internal$Good,
					{ctor: '_Tuple0'},
					{source: _p13, offset: newOffset, indent: _p11.indent, context: _p11.context, row: newRow, col: newCol});
			});
	});
var _elm_tools$parser$Parser$delayedCommitMap = F3(
	function (func, _p15, _p14) {
		var _p16 = _p15;
		var _p17 = _p14;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p18 = _p16._0(state1);
				if (_p18.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p18._0, state1);
				} else {
					var _p22 = _p18._1;
					var _p19 = _p17._0(_p22);
					if (_p19.ctor === 'Good') {
						return A2(
							_elm_tools$parser$Parser_Internal$Good,
							A2(func, _p18._0, _p19._0),
							_p19._1);
					} else {
						var _p21 = _p19._0;
						var _p20 = _p19._1;
						return (_elm_lang$core$Native_Utils.eq(_p22.row, _p20.row) && _elm_lang$core$Native_Utils.eq(_p22.col, _p20.col)) ? A2(_elm_tools$parser$Parser_Internal$Bad, _p21, state1) : A2(_elm_tools$parser$Parser_Internal$Bad, _p21, _p20);
					}
				}
			});
	});
var _elm_tools$parser$Parser$delayedCommit = F2(
	function (filler, realStuff) {
		return A3(
			_elm_tools$parser$Parser$delayedCommitMap,
			F2(
				function (_p23, v) {
					return v;
				}),
			filler,
			realStuff);
	});
var _elm_tools$parser$Parser$lazy = function (thunk) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			var _p24 = thunk(
				{ctor: '_Tuple0'});
			var parse = _p24._0;
			return parse(state);
		});
};
var _elm_tools$parser$Parser$andThen = F2(
	function (callback, _p25) {
		var _p26 = _p25;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p27 = _p26._0(state1);
				if (_p27.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p27._0, _p27._1);
				} else {
					var _p28 = callback(_p27._0);
					var parseB = _p28._0;
					return parseB(_p27._1);
				}
			});
	});
var _elm_tools$parser$Parser$apply = F2(
	function (f, a) {
		return f(a);
	});
var _elm_tools$parser$Parser$map2 = F3(
	function (func, _p30, _p29) {
		var _p31 = _p30;
		var _p32 = _p29;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p33 = _p31._0(state1);
				if (_p33.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p33._0, _p33._1);
				} else {
					var _p34 = _p32._0(_p33._1);
					if (_p34.ctor === 'Bad') {
						return A2(_elm_tools$parser$Parser_Internal$Bad, _p34._0, _p34._1);
					} else {
						return A2(
							_elm_tools$parser$Parser_Internal$Good,
							A2(func, _p33._0, _p34._0),
							_p34._1);
					}
				}
			});
	});
var _elm_tools$parser$Parser_ops = _elm_tools$parser$Parser_ops || {};
_elm_tools$parser$Parser_ops['|='] = F2(
	function (parseFunc, parseArg) {
		return A3(_elm_tools$parser$Parser$map2, _elm_tools$parser$Parser$apply, parseFunc, parseArg);
	});
var _elm_tools$parser$Parser_ops = _elm_tools$parser$Parser_ops || {};
_elm_tools$parser$Parser_ops['|.'] = F2(
	function (keepParser, ignoreParser) {
		return A3(_elm_tools$parser$Parser$map2, _elm_lang$core$Basics$always, keepParser, ignoreParser);
	});
var _elm_tools$parser$Parser$map = F2(
	function (func, _p35) {
		var _p36 = _p35;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p37 = _p36._0(state1);
				if (_p37.ctor === 'Good') {
					return A2(
						_elm_tools$parser$Parser_Internal$Good,
						func(_p37._0),
						_p37._1);
				} else {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p37._0, _p37._1);
				}
			});
	});
var _elm_tools$parser$Parser$succeed = function (a) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			return A2(_elm_tools$parser$Parser_Internal$Good, a, state);
		});
};
var _elm_tools$parser$Parser$run = F2(
	function (_p38, source) {
		var _p39 = _p38;
		var initialState = {
			source: source,
			offset: 0,
			indent: 1,
			context: {ctor: '[]'},
			row: 1,
			col: 1
		};
		var _p40 = _p39._0(initialState);
		if (_p40.ctor === 'Good') {
			return _elm_lang$core$Result$Ok(_p40._0);
		} else {
			return _elm_lang$core$Result$Err(
				{row: _p40._1.row, col: _p40._1.col, source: source, problem: _p40._0, context: _p40._1.context});
		}
	});
var _elm_tools$parser$Parser$Error = F5(
	function (a, b, c, d, e) {
		return {row: a, col: b, source: c, problem: d, context: e};
	});
var _elm_tools$parser$Parser$Context = F3(
	function (a, b, c) {
		return {row: a, col: b, description: c};
	});
var _elm_tools$parser$Parser$inContext = F2(
	function (ctx, _p41) {
		var _p42 = _p41;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p43) {
				var _p44 = _p43;
				var _p46 = _p44.context;
				var state1 = A2(
					_elm_tools$parser$Parser$changeContext,
					{
						ctor: '::',
						_0: A3(_elm_tools$parser$Parser$Context, _p44.row, _p44.col, ctx),
						_1: _p46
					},
					_p44);
				var _p45 = _p42._0(state1);
				if (_p45.ctor === 'Good') {
					return A2(
						_elm_tools$parser$Parser_Internal$Good,
						_p45._0,
						A2(_elm_tools$parser$Parser$changeContext, _p46, _p45._1));
				} else {
					return _p45;
				}
			});
	});
var _elm_tools$parser$Parser$Fail = function (a) {
	return {ctor: 'Fail', _0: a};
};
var _elm_tools$parser$Parser$fail = function (message) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			return A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$Fail(message),
				state);
		});
};
var _elm_tools$parser$Parser$ExpectingClosing = function (a) {
	return {ctor: 'ExpectingClosing', _0: a};
};
var _elm_tools$parser$Parser$ignoreUntil = function (str) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (_p47) {
			var _p48 = _p47;
			var _p50 = _p48.source;
			var _p49 = A6(_elm_tools$parser_primitives$ParserPrimitives$findSubString, false, str, _p48.offset, _p48.row, _p48.col, _p50);
			var newOffset = _p49._0;
			var newRow = _p49._1;
			var newCol = _p49._2;
			return _elm_lang$core$Native_Utils.eq(newOffset, -1) ? A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$ExpectingClosing(str),
				_p48) : A2(
				_elm_tools$parser$Parser_Internal$Good,
				{ctor: '_Tuple0'},
				{source: _p50, offset: newOffset, indent: _p48.indent, context: _p48.context, row: newRow, col: newCol});
		});
};
var _elm_tools$parser$Parser$ExpectingVariable = {ctor: 'ExpectingVariable'};
var _elm_tools$parser$Parser$ExpectingKeyword = function (a) {
	return {ctor: 'ExpectingKeyword', _0: a};
};
var _elm_tools$parser$Parser$keyword = function (str) {
	return A2(_elm_tools$parser$Parser$token, _elm_tools$parser$Parser$ExpectingKeyword, str);
};
var _elm_tools$parser$Parser$ExpectingSymbol = function (a) {
	return {ctor: 'ExpectingSymbol', _0: a};
};
var _elm_tools$parser$Parser$symbol = function (str) {
	return A2(_elm_tools$parser$Parser$token, _elm_tools$parser$Parser$ExpectingSymbol, str);
};
var _elm_tools$parser$Parser$ExpectingEnd = {ctor: 'ExpectingEnd'};
var _elm_tools$parser$Parser$end = _elm_tools$parser$Parser_Internal$Parser(
	function (state) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$String$length(state.source),
			state.offset) ? A2(
			_elm_tools$parser$Parser_Internal$Good,
			{ctor: '_Tuple0'},
			state) : A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$ExpectingEnd, state);
	});
var _elm_tools$parser$Parser$BadRepeat = {ctor: 'BadRepeat'};
var _elm_tools$parser$Parser$repeatExactly = F4(
	function (n, parse, revList, state1) {
		repeatExactly:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					_elm_lang$core$List$reverse(revList),
					state1);
			} else {
				var _p51 = parse(state1);
				if (_p51.ctor === 'Good') {
					var _p52 = _p51._1;
					if (_elm_lang$core$Native_Utils.eq(state1.row, _p52.row) && _elm_lang$core$Native_Utils.eq(state1.col, _p52.col)) {
						return A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$BadRepeat, _p52);
					} else {
						var _v25 = n - 1,
							_v26 = parse,
							_v27 = {ctor: '::', _0: _p51._0, _1: revList},
							_v28 = _p52;
						n = _v25;
						parse = _v26;
						revList = _v27;
						state1 = _v28;
						continue repeatExactly;
					}
				} else {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p51._0, _p51._1);
				}
			}
		}
	});
var _elm_tools$parser$Parser$repeatAtLeast = F4(
	function (n, parse, revList, state1) {
		repeatAtLeast:
		while (true) {
			var _p53 = parse(state1);
			if (_p53.ctor === 'Good') {
				var _p54 = _p53._1;
				if (_elm_lang$core$Native_Utils.eq(state1.row, _p54.row) && _elm_lang$core$Native_Utils.eq(state1.col, _p54.col)) {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$BadRepeat, _p54);
				} else {
					var _v30 = n - 1,
						_v31 = parse,
						_v32 = {ctor: '::', _0: _p53._0, _1: revList},
						_v33 = _p54;
					n = _v30;
					parse = _v31;
					revList = _v32;
					state1 = _v33;
					continue repeatAtLeast;
				}
			} else {
				var _p55 = _p53._1;
				return (_elm_lang$core$Native_Utils.eq(state1.row, _p55.row) && (_elm_lang$core$Native_Utils.eq(state1.col, _p55.col) && (_elm_lang$core$Native_Utils.cmp(n, 0) < 1))) ? A2(
					_elm_tools$parser$Parser_Internal$Good,
					_elm_lang$core$List$reverse(revList),
					state1) : A2(_elm_tools$parser$Parser_Internal$Bad, _p53._0, _p55);
			}
		}
	});
var _elm_tools$parser$Parser$repeat = F2(
	function (count, _p56) {
		var _p57 = _p56;
		var _p59 = _p57._0;
		var _p58 = count;
		if (_p58.ctor === 'Exactly') {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (state) {
					return A4(
						_elm_tools$parser$Parser$repeatExactly,
						_p58._0,
						_p59,
						{ctor: '[]'},
						state);
				});
		} else {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (state) {
					return A4(
						_elm_tools$parser$Parser$repeatAtLeast,
						_p58._0,
						_p59,
						{ctor: '[]'},
						state);
				});
		}
	});
var _elm_tools$parser$Parser$ignoreExactly = F8(
	function (n, predicate, source, offset, indent, context, row, col) {
		ignoreExactly:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					{ctor: '_Tuple0'},
					{source: source, offset: offset, indent: indent, context: context, row: row, col: col});
			} else {
				var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, predicate, offset, source);
				if (_elm_lang$core$Native_Utils.eq(newOffset, -1)) {
					return A2(
						_elm_tools$parser$Parser_Internal$Bad,
						_elm_tools$parser$Parser$BadRepeat,
						{source: source, offset: offset, indent: indent, context: context, row: row, col: col});
				} else {
					if (_elm_lang$core$Native_Utils.eq(newOffset, -2)) {
						var _v36 = n - 1,
							_v37 = predicate,
							_v38 = source,
							_v39 = offset + 1,
							_v40 = indent,
							_v41 = context,
							_v42 = row + 1,
							_v43 = 1;
						n = _v36;
						predicate = _v37;
						source = _v38;
						offset = _v39;
						indent = _v40;
						context = _v41;
						row = _v42;
						col = _v43;
						continue ignoreExactly;
					} else {
						var _v44 = n - 1,
							_v45 = predicate,
							_v46 = source,
							_v47 = newOffset,
							_v48 = indent,
							_v49 = context,
							_v50 = row,
							_v51 = col + 1;
						n = _v44;
						predicate = _v45;
						source = _v46;
						offset = _v47;
						indent = _v48;
						context = _v49;
						row = _v50;
						col = _v51;
						continue ignoreExactly;
					}
				}
			}
		}
	});
var _elm_tools$parser$Parser$ignoreAtLeast = F8(
	function (n, predicate, source, offset, indent, context, row, col) {
		ignoreAtLeast:
		while (true) {
			var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, predicate, offset, source);
			if (_elm_lang$core$Native_Utils.eq(newOffset, -1)) {
				var state = {source: source, offset: offset, indent: indent, context: context, row: row, col: col};
				return (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) ? A2(
					_elm_tools$parser$Parser_Internal$Good,
					{ctor: '_Tuple0'},
					state) : A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$BadRepeat, state);
			} else {
				if (_elm_lang$core$Native_Utils.eq(newOffset, -2)) {
					var _v52 = n - 1,
						_v53 = predicate,
						_v54 = source,
						_v55 = offset + 1,
						_v56 = indent,
						_v57 = context,
						_v58 = row + 1,
						_v59 = 1;
					n = _v52;
					predicate = _v53;
					source = _v54;
					offset = _v55;
					indent = _v56;
					context = _v57;
					row = _v58;
					col = _v59;
					continue ignoreAtLeast;
				} else {
					var _v60 = n - 1,
						_v61 = predicate,
						_v62 = source,
						_v63 = newOffset,
						_v64 = indent,
						_v65 = context,
						_v66 = row,
						_v67 = col + 1;
					n = _v60;
					predicate = _v61;
					source = _v62;
					offset = _v63;
					indent = _v64;
					context = _v65;
					row = _v66;
					col = _v67;
					continue ignoreAtLeast;
				}
			}
		}
	});
var _elm_tools$parser$Parser$ignore = F2(
	function (count, predicate) {
		var _p60 = count;
		if (_p60.ctor === 'Exactly') {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (_p61) {
					var _p62 = _p61;
					return A8(_elm_tools$parser$Parser$ignoreExactly, _p60._0, predicate, _p62.source, _p62.offset, _p62.indent, _p62.context, _p62.row, _p62.col);
				});
		} else {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (_p63) {
					var _p64 = _p63;
					return A8(_elm_tools$parser$Parser$ignoreAtLeast, _p60._0, predicate, _p64.source, _p64.offset, _p64.indent, _p64.context, _p64.row, _p64.col);
				});
		}
	});
var _elm_tools$parser$Parser$keep = F2(
	function (count, predicate) {
		return _elm_tools$parser$Parser$source(
			A2(_elm_tools$parser$Parser$ignore, count, predicate));
	});
var _elm_tools$parser$Parser$BadFloat = {ctor: 'BadFloat'};
var _elm_tools$parser$Parser$float = _elm_tools$parser$Parser_Internal$Parser(
	function (_p65) {
		var _p66 = _p65;
		var _p77 = _p66.source;
		var _p76 = _p66.row;
		var _p75 = _p66.offset;
		var _p74 = _p66.indent;
		var _p73 = _p66.context;
		var _p72 = _p66.col;
		var _p67 = A3(
			_elm_tools$parser$Parser$floatHelp,
			_p75,
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser$isZero, _p75, _p77),
			_p77);
		if (_p67.ctor === 'Err') {
			var _p68 = _p67._0;
			return A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$BadFloat,
				{source: _p77, offset: _p68, indent: _p74, context: _p73, row: _p76, col: _p72 + (_p68 - _p75)});
		} else {
			var _p71 = _p67._0;
			var _p69 = _elm_lang$core$String$toFloat(
				A3(_elm_lang$core$String$slice, _p75, _p71, _p77));
			if (_p69.ctor === 'Err') {
				return _elm_lang$core$Native_Utils.crashCase(
					'Parser',
					{
						start: {line: 795, column: 21},
						end: {line: 807, column: 34}
					},
					_p69)(_elm_tools$parser$Parser$badFloatMsg);
			} else {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					_p69._0,
					{source: _p77, offset: _p71, indent: _p74, context: _p73, row: _p76, col: _p72 + (_p71 - _p75)});
			}
		}
	});
var _elm_tools$parser$Parser$BadInt = {ctor: 'BadInt'};
var _elm_tools$parser$Parser$int = _elm_tools$parser$Parser_Internal$Parser(
	function (_p78) {
		var _p79 = _p78;
		var _p90 = _p79.source;
		var _p89 = _p79.row;
		var _p88 = _p79.offset;
		var _p87 = _p79.indent;
		var _p86 = _p79.context;
		var _p85 = _p79.col;
		var _p80 = A3(
			_elm_tools$parser$Parser$intHelp,
			_p88,
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser$isZero, _p88, _p90),
			_p90);
		if (_p80.ctor === 'Err') {
			var _p81 = _p80._0;
			return A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$BadInt,
				{source: _p90, offset: _p81, indent: _p87, context: _p86, row: _p89, col: _p85 + (_p81 - _p88)});
		} else {
			var _p84 = _p80._0;
			var _p82 = _elm_lang$core$String$toInt(
				A3(_elm_lang$core$String$slice, _p88, _p84, _p90));
			if (_p82.ctor === 'Err') {
				return _elm_lang$core$Native_Utils.crashCase(
					'Parser',
					{
						start: {line: 702, column: 21},
						end: {line: 714, column: 34}
					},
					_p82)(_elm_tools$parser$Parser$badIntMsg);
			} else {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					_p82._0,
					{source: _p90, offset: _p84, indent: _p87, context: _p86, row: _p89, col: _p85 + (_p84 - _p88)});
			}
		}
	});
var _elm_tools$parser$Parser$BadOneOf = function (a) {
	return {ctor: 'BadOneOf', _0: a};
};
var _elm_tools$parser$Parser$oneOfHelp = F3(
	function (state, problems, parsers) {
		oneOfHelp:
		while (true) {
			var _p91 = parsers;
			if (_p91.ctor === '[]') {
				return A2(
					_elm_tools$parser$Parser_Internal$Bad,
					_elm_tools$parser$Parser$BadOneOf(
						_elm_lang$core$List$reverse(problems)),
					state);
			} else {
				var _p92 = _p91._0._0(state);
				if (_p92.ctor === 'Good') {
					return _p92;
				} else {
					if (_elm_lang$core$Native_Utils.eq(state.row, _p92._1.row) && _elm_lang$core$Native_Utils.eq(state.col, _p92._1.col)) {
						var _v79 = state,
							_v80 = {ctor: '::', _0: _p92._0, _1: problems},
							_v81 = _p91._1;
						state = _v79;
						problems = _v80;
						parsers = _v81;
						continue oneOfHelp;
					} else {
						return _p92;
					}
				}
			}
		}
	});
var _elm_tools$parser$Parser$oneOf = function (parsers) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			return A3(
				_elm_tools$parser$Parser$oneOfHelp,
				state,
				{ctor: '[]'},
				parsers);
		});
};
var _elm_tools$parser$Parser$Exactly = function (a) {
	return {ctor: 'Exactly', _0: a};
};
var _elm_tools$parser$Parser$AtLeast = function (a) {
	return {ctor: 'AtLeast', _0: a};
};
var _elm_tools$parser$Parser$zeroOrMore = _elm_tools$parser$Parser$AtLeast(0);
var _elm_tools$parser$Parser$oneOrMore = _elm_tools$parser$Parser$AtLeast(1);

var _elm_tools$parser$Parser_LanguageKit$isChar = function ($char) {
	return true;
};
var _elm_tools$parser$Parser_LanguageKit$isTab = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('\t'));
};
var _elm_tools$parser$Parser_LanguageKit$isSpace = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr(' ')) || (_elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('\n')) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('\r')));
};
var _elm_tools$parser$Parser_LanguageKit$chompSpaces = A2(_elm_tools$parser$Parser$ignore, _elm_tools$parser$Parser$zeroOrMore, _elm_tools$parser$Parser_LanguageKit$isSpace);
var _elm_tools$parser$Parser_LanguageKit$revAlways = F2(
	function (_p0, keep) {
		return keep;
	});
var _elm_tools$parser$Parser_LanguageKit$ignore = F2(
	function (ignoreParser, keepParser) {
		return A3(_elm_tools$parser$Parser$map2, _elm_tools$parser$Parser_LanguageKit$revAlways, ignoreParser, keepParser);
	});
var _elm_tools$parser$Parser_LanguageKit_ops = _elm_tools$parser$Parser_LanguageKit_ops || {};
_elm_tools$parser$Parser_LanguageKit_ops['|-'] = _elm_tools$parser$Parser_LanguageKit$ignore;
var _elm_tools$parser$Parser_LanguageKit$sequenceEndMandatory = F5(
	function (end, spaces, parseItem, sep, revItems) {
		var chompRest = function (item) {
			return A5(
				_elm_tools$parser$Parser_LanguageKit$sequenceEndMandatory,
				end,
				spaces,
				parseItem,
				sep,
				{ctor: '::', _0: item, _1: revItems});
		};
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$andThen,
					chompRest,
					A2(
						_elm_tools$parser$Parser_ops['|.'],
						A2(
							_elm_tools$parser$Parser_ops['|.'],
							A2(_elm_tools$parser$Parser_ops['|.'], parseItem, spaces),
							_elm_tools$parser$Parser$symbol(sep)),
						spaces)),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser_LanguageKit_ops['|-'],
						_elm_tools$parser$Parser$symbol(end),
						_elm_tools$parser$Parser$succeed(
							_elm_lang$core$List$reverse(revItems))),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_tools$parser$Parser_LanguageKit$sequenceEndForbidden = F5(
	function (end, spaces, parseItem, sep, revItems) {
		var chompRest = function (item) {
			return A5(
				_elm_tools$parser$Parser_LanguageKit$sequenceEndForbidden,
				end,
				spaces,
				parseItem,
				sep,
				{ctor: '::', _0: item, _1: revItems});
		};
		return A2(
			_elm_tools$parser$Parser_LanguageKit$ignore,
			spaces,
			_elm_tools$parser$Parser$oneOf(
				{
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser_LanguageKit_ops['|-'],
						A2(
							_elm_tools$parser$Parser_LanguageKit_ops['|-'],
							_elm_tools$parser$Parser$symbol(sep),
							spaces),
						A2(_elm_tools$parser$Parser$andThen, chompRest, parseItem)),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_tools$parser$Parser_LanguageKit_ops['|-'],
							_elm_tools$parser$Parser$symbol(end),
							_elm_tools$parser$Parser$succeed(
								_elm_lang$core$List$reverse(revItems))),
						_1: {ctor: '[]'}
					}
				}));
	});
var _elm_tools$parser$Parser_LanguageKit$sequenceEndOptional = F5(
	function (end, spaces, parseItem, sep, revItems) {
		var chompRest = function (item) {
			return A5(
				_elm_tools$parser$Parser_LanguageKit$sequenceEndOptional,
				end,
				spaces,
				parseItem,
				sep,
				{ctor: '::', _0: item, _1: revItems});
		};
		var parseEnd = A2(
			_elm_tools$parser$Parser$andThen,
			function (_p1) {
				return _elm_tools$parser$Parser$succeed(
					_elm_lang$core$List$reverse(revItems));
			},
			_elm_tools$parser$Parser$symbol(end));
		return A2(
			_elm_tools$parser$Parser_LanguageKit$ignore,
			spaces,
			_elm_tools$parser$Parser$oneOf(
				{
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser_LanguageKit_ops['|-'],
						A2(
							_elm_tools$parser$Parser_LanguageKit_ops['|-'],
							_elm_tools$parser$Parser$symbol(sep),
							spaces),
						_elm_tools$parser$Parser$oneOf(
							{
								ctor: '::',
								_0: A2(_elm_tools$parser$Parser$andThen, chompRest, parseItem),
								_1: {
									ctor: '::',
									_0: parseEnd,
									_1: {ctor: '[]'}
								}
							})),
					_1: {
						ctor: '::',
						_0: parseEnd,
						_1: {ctor: '[]'}
					}
				}));
	});
var _elm_tools$parser$Parser_LanguageKit$sequenceEnd = F5(
	function (end, spaces, parseItem, sep, trailing) {
		var chompRest = function (item) {
			var _p2 = trailing;
			switch (_p2.ctor) {
				case 'Forbidden':
					return A5(
						_elm_tools$parser$Parser_LanguageKit$sequenceEndForbidden,
						end,
						spaces,
						parseItem,
						sep,
						{
							ctor: '::',
							_0: item,
							_1: {ctor: '[]'}
						});
				case 'Optional':
					return A5(
						_elm_tools$parser$Parser_LanguageKit$sequenceEndOptional,
						end,
						spaces,
						parseItem,
						sep,
						{
							ctor: '::',
							_0: item,
							_1: {ctor: '[]'}
						});
				default:
					return A2(
						_elm_tools$parser$Parser_LanguageKit_ops['|-'],
						A2(
							_elm_tools$parser$Parser_LanguageKit_ops['|-'],
							A2(
								_elm_tools$parser$Parser_LanguageKit_ops['|-'],
								spaces,
								_elm_tools$parser$Parser$symbol(sep)),
							spaces),
						A5(
							_elm_tools$parser$Parser_LanguageKit$sequenceEndMandatory,
							end,
							spaces,
							parseItem,
							sep,
							{
								ctor: '::',
								_0: item,
								_1: {ctor: '[]'}
							}));
			}
		};
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(_elm_tools$parser$Parser$andThen, chompRest, parseItem),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser_LanguageKit_ops['|-'],
						_elm_tools$parser$Parser$symbol(end),
						_elm_tools$parser$Parser$succeed(
							{ctor: '[]'})),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_tools$parser$Parser_LanguageKit$whitespaceHelp = function (parser) {
	return A2(
		_elm_tools$parser$Parser_LanguageKit$ignore,
		_elm_tools$parser$Parser_LanguageKit$chompSpaces,
		_elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$andThen,
					function (_p3) {
						return _elm_tools$parser$Parser_LanguageKit$whitespaceHelp(parser);
					},
					parser),
				_1: {
					ctor: '::',
					_0: _elm_tools$parser$Parser$succeed(
						{ctor: '_Tuple0'}),
					_1: {ctor: '[]'}
				}
			}));
};
var _elm_tools$parser$Parser_LanguageKit$nestableCommentHelp = F4(
	function (isNotRelevant, start, end, nestLevel) {
		return _elm_tools$parser$Parser$lazy(
			function (_p4) {
				return A2(
					_elm_tools$parser$Parser_LanguageKit$ignore,
					A2(_elm_tools$parser$Parser$ignore, _elm_tools$parser$Parser$zeroOrMore, isNotRelevant),
					_elm_tools$parser$Parser$oneOf(
						{
							ctor: '::',
							_0: A2(
								_elm_tools$parser$Parser_LanguageKit$ignore,
								_elm_tools$parser$Parser$symbol(end),
								_elm_lang$core$Native_Utils.eq(nestLevel, 1) ? _elm_tools$parser$Parser$succeed(
									{ctor: '_Tuple0'}) : A4(_elm_tools$parser$Parser_LanguageKit$nestableCommentHelp, isNotRelevant, start, end, nestLevel - 1)),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_tools$parser$Parser_LanguageKit$ignore,
									_elm_tools$parser$Parser$symbol(start),
									A4(_elm_tools$parser$Parser_LanguageKit$nestableCommentHelp, isNotRelevant, start, end, nestLevel + 1)),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_tools$parser$Parser_LanguageKit$ignore,
										A2(
											_elm_tools$parser$Parser$ignore,
											_elm_tools$parser$Parser$Exactly(1),
											_elm_tools$parser$Parser_LanguageKit$isChar),
										A4(_elm_tools$parser$Parser_LanguageKit$nestableCommentHelp, isNotRelevant, start, end, nestLevel)),
									_1: {ctor: '[]'}
								}
							}
						}));
			});
	});
var _elm_tools$parser$Parser_LanguageKit$nestableComment = F2(
	function (start, end) {
		var _p5 = {
			ctor: '_Tuple2',
			_0: _elm_lang$core$String$uncons(start),
			_1: _elm_lang$core$String$uncons(end)
		};
		if (_p5._0.ctor === 'Nothing') {
			return _elm_tools$parser$Parser$fail('Trying to parse a multi-line comment, but the start token cannot be the empty string!');
		} else {
			if (_p5._1.ctor === 'Nothing') {
				return _elm_tools$parser$Parser$fail('Trying to parse a multi-line comment, but the end token cannot be the empty string!');
			} else {
				var isNotRelevant = function ($char) {
					return (!_elm_lang$core$Native_Utils.eq($char, _p5._0._0._0)) && (!_elm_lang$core$Native_Utils.eq($char, _p5._1._0._0));
				};
				return A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$symbol(start),
					A4(_elm_tools$parser$Parser_LanguageKit$nestableCommentHelp, isNotRelevant, start, end, 1));
			}
		}
	});
var _elm_tools$parser$Parser_LanguageKit$whitespace = function (_p6) {
	var _p7 = _p6;
	var multiParser = function () {
		var _p8 = _p7.multiComment;
		switch (_p8.ctor) {
			case 'NoMultiComment':
				return {ctor: '[]'};
			case 'UnnestableComment':
				return {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser_ops['|.'],
						_elm_tools$parser$Parser$symbol(_p8._0),
						_elm_tools$parser$Parser$ignoreUntil(_p8._1)),
					_1: {ctor: '[]'}
				};
			default:
				return {
					ctor: '::',
					_0: A2(_elm_tools$parser$Parser_LanguageKit$nestableComment, _p8._0, _p8._1),
					_1: {ctor: '[]'}
				};
		}
	}();
	var lineParser = function () {
		var _p9 = _p7.lineComment;
		if (_p9.ctor === 'NoLineComment') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$symbol(_p9._0),
					_elm_tools$parser$Parser$ignoreUntil('\n')),
				_1: {ctor: '[]'}
			};
		}
	}();
	var tabParser = _p7.allowTabs ? {
		ctor: '::',
		_0: A2(_elm_tools$parser$Parser$ignore, _elm_tools$parser$Parser$zeroOrMore, _elm_tools$parser$Parser_LanguageKit$isTab),
		_1: {ctor: '[]'}
	} : {ctor: '[]'};
	return _elm_tools$parser$Parser_LanguageKit$whitespaceHelp(
		_elm_tools$parser$Parser$oneOf(
			A2(
				_elm_lang$core$Basics_ops['++'],
				tabParser,
				A2(_elm_lang$core$Basics_ops['++'], lineParser, multiParser))));
};
var _elm_tools$parser$Parser_LanguageKit$sequence = function (_p10) {
	var _p11 = _p10;
	var _p12 = _p11.spaces;
	return A2(
		_elm_tools$parser$Parser_LanguageKit_ops['|-'],
		A2(
			_elm_tools$parser$Parser_LanguageKit_ops['|-'],
			_elm_tools$parser$Parser$symbol(_p11.start),
			_p12),
		A5(_elm_tools$parser$Parser_LanguageKit$sequenceEnd, _p11.end, _p12, _p11.item, _p11.separator, _p11.trailing));
};
var _elm_tools$parser$Parser_LanguageKit$varHelp = F7(
	function (isGood, offset, row, col, source, indent, context) {
		varHelp:
		while (true) {
			var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, isGood, offset, source);
			if (_elm_lang$core$Native_Utils.eq(newOffset, -1)) {
				return {source: source, offset: offset, indent: indent, context: context, row: row, col: col};
			} else {
				if (_elm_lang$core$Native_Utils.eq(newOffset, -2)) {
					var _v6 = isGood,
						_v7 = offset + 1,
						_v8 = row + 1,
						_v9 = 1,
						_v10 = source,
						_v11 = indent,
						_v12 = context;
					isGood = _v6;
					offset = _v7;
					row = _v8;
					col = _v9;
					source = _v10;
					indent = _v11;
					context = _v12;
					continue varHelp;
				} else {
					var _v13 = isGood,
						_v14 = newOffset,
						_v15 = row,
						_v16 = col + 1,
						_v17 = source,
						_v18 = indent,
						_v19 = context;
					isGood = _v13;
					offset = _v14;
					row = _v15;
					col = _v16;
					source = _v17;
					indent = _v18;
					context = _v19;
					continue varHelp;
				}
			}
		}
	});
var _elm_tools$parser$Parser_LanguageKit$variable = F3(
	function (isFirst, isOther, keywords) {
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p13) {
				var _p14 = _p13;
				var _p20 = _p14;
				var _p19 = _p14.source;
				var _p18 = _p14.row;
				var _p17 = _p14.offset;
				var _p16 = _p14.indent;
				var _p15 = _p14.context;
				var firstOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, isFirst, _p17, _p19);
				if (_elm_lang$core$Native_Utils.eq(firstOffset, -1)) {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$ExpectingVariable, _p20);
				} else {
					var state2 = _elm_lang$core$Native_Utils.eq(firstOffset, -2) ? A7(_elm_tools$parser$Parser_LanguageKit$varHelp, isOther, _p17 + 1, _p18 + 1, 1, _p19, _p16, _p15) : A7(_elm_tools$parser$Parser_LanguageKit$varHelp, isOther, firstOffset, _p18, _p14.col + 1, _p19, _p16, _p15);
					var name = A3(_elm_lang$core$String$slice, _p17, state2.offset, _p19);
					return A2(_elm_lang$core$Set$member, name, keywords) ? A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$ExpectingVariable, _p20) : A2(_elm_tools$parser$Parser_Internal$Good, name, state2);
				}
			});
	});
var _elm_tools$parser$Parser_LanguageKit$Mandatory = {ctor: 'Mandatory'};
var _elm_tools$parser$Parser_LanguageKit$Optional = {ctor: 'Optional'};
var _elm_tools$parser$Parser_LanguageKit$Forbidden = {ctor: 'Forbidden'};
var _elm_tools$parser$Parser_LanguageKit$list = F2(
	function (spaces, item) {
		return _elm_tools$parser$Parser_LanguageKit$sequence(
			{start: '[', separator: ',', end: ']', spaces: spaces, item: item, trailing: _elm_tools$parser$Parser_LanguageKit$Forbidden});
	});
var _elm_tools$parser$Parser_LanguageKit$record = F2(
	function (spaces, item) {
		return _elm_tools$parser$Parser_LanguageKit$sequence(
			{start: '{', separator: ',', end: '}', spaces: spaces, item: item, trailing: _elm_tools$parser$Parser_LanguageKit$Forbidden});
	});
var _elm_tools$parser$Parser_LanguageKit$tuple = F2(
	function (spaces, item) {
		return _elm_tools$parser$Parser_LanguageKit$sequence(
			{start: '(', separator: ',', end: ')', spaces: spaces, item: item, trailing: _elm_tools$parser$Parser_LanguageKit$Forbidden});
	});
var _elm_tools$parser$Parser_LanguageKit$LineComment = function (a) {
	return {ctor: 'LineComment', _0: a};
};
var _elm_tools$parser$Parser_LanguageKit$NoLineComment = {ctor: 'NoLineComment'};
var _elm_tools$parser$Parser_LanguageKit$UnnestableComment = F2(
	function (a, b) {
		return {ctor: 'UnnestableComment', _0: a, _1: b};
	});
var _elm_tools$parser$Parser_LanguageKit$NestableComment = F2(
	function (a, b) {
		return {ctor: 'NestableComment', _0: a, _1: b};
	});
var _elm_tools$parser$Parser_LanguageKit$NoMultiComment = {ctor: 'NoMultiComment'};

var _evancz$elm_markdown$Native_Markdown = function() {


// VIRTUAL-DOM WIDGETS

function toHtml(options, factList, rawMarkdown)
{
	var model = {
		options: options,
		markdown: rawMarkdown
	};
	return _elm_lang$virtual_dom$Native_VirtualDom.custom(factList, model, implementation);
}


// WIDGET IMPLEMENTATION

var implementation = {
	render: render,
	diff: diff
};

function render(model)
{
	var html = marked(model.markdown, formatOptions(model.options));
	var div = document.createElement('div');
	div.innerHTML = html;
	return div;
}

function diff(a, b)
{
	
	if (a.model.markdown === b.model.markdown && a.model.options === b.model.options)
	{
		return null;
	}

	return {
		applyPatch: applyPatch,
		data: marked(b.model.markdown, formatOptions(b.model.options))
	};
}

function applyPatch(domNode, data)
{
	domNode.innerHTML = data;
	return domNode;
}


// ACTUAL MARKDOWN PARSER

var marked = function() {
	// catch the `marked` object regardless of the outer environment.
	// (ex. a CommonJS module compatible environment.)
	// note that this depends on marked's implementation of environment detection.
	var module = {};
	var exports = module.exports = {};

	/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 * commit cd2f6f5b7091154c5526e79b5f3bfb4d15995a51
	 */
	(function(){var block={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:noop,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:noop,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:noop,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};block.bullet=/(?:[*+-]|\d+\.)/;block.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;block.item=replace(block.item,"gm")(/bull/g,block.bullet)();block.list=replace(block.list)(/bull/g,block.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+block.def.source+")")();block.blockquote=replace(block.blockquote)("def",block.def)();block._tag="(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code"+"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo"+"|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";block.html=replace(block.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,block._tag)();block.paragraph=replace(block.paragraph)("hr",block.hr)("heading",block.heading)("lheading",block.lheading)("blockquote",block.blockquote)("tag","<"+block._tag)("def",block.def)();block.normal=merge({},block);block.gfm=merge({},block.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/});block.gfm.paragraph=replace(block.paragraph)("(?!","(?!"+block.gfm.fences.source.replace("\\1","\\2")+"|"+block.list.source.replace("\\1","\\3")+"|")();block.tables=merge({},block.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function Lexer(options){this.tokens=[];this.tokens.links={};this.options=options||marked.defaults;this.rules=block.normal;if(this.options.gfm){if(this.options.tables){this.rules=block.tables}else{this.rules=block.gfm}}}Lexer.rules=block;Lexer.lex=function(src,options){var lexer=new Lexer(options);return lexer.lex(src)};Lexer.prototype.lex=function(src){src=src.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n");return this.token(src,true)};Lexer.prototype.token=function(src,top,bq){var src=src.replace(/^ +$/gm,""),next,loose,cap,bull,b,item,space,i,l;while(src){if(cap=this.rules.newline.exec(src)){src=src.substring(cap[0].length);if(cap[0].length>1){this.tokens.push({type:"space"})}}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);cap=cap[0].replace(/^ {4}/gm,"");this.tokens.push({type:"code",text:!this.options.pedantic?cap.replace(/\n+$/,""):cap});continue}if(cap=this.rules.fences.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"code",lang:cap[2],text:cap[3]||""});continue}if(cap=this.rules.heading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[1].length,text:cap[2]});continue}if(top&&(cap=this.rules.nptable.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].split(/ *\| */)}this.tokens.push(item);continue}if(cap=this.rules.lheading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[2]==="="?1:2,text:cap[1]});continue}if(cap=this.rules.hr.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"hr"});continue}if(cap=this.rules.blockquote.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"blockquote_start"});cap=cap[0].replace(/^ *> ?/gm,"");this.token(cap,top,true);this.tokens.push({type:"blockquote_end"});continue}if(cap=this.rules.list.exec(src)){src=src.substring(cap[0].length);bull=cap[2];this.tokens.push({type:"list_start",ordered:bull.length>1});cap=cap[0].match(this.rules.item);next=false;l=cap.length;i=0;for(;i<l;i++){item=cap[i];space=item.length;item=item.replace(/^ *([*+-]|\d+\.) +/,"");if(~item.indexOf("\n ")){space-=item.length;item=!this.options.pedantic?item.replace(new RegExp("^ {1,"+space+"}","gm"),""):item.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&i!==l-1){b=block.bullet.exec(cap[i+1])[0];if(bull!==b&&!(bull.length>1&&b.length>1)){src=cap.slice(i+1).join("\n")+src;i=l-1}}loose=next||/\n\n(?!\s*$)/.test(item);if(i!==l-1){next=item.charAt(item.length-1)==="\n";if(!loose)loose=next}this.tokens.push({type:loose?"loose_item_start":"list_item_start"});this.token(item,false,bq);this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"});continue}if(cap=this.rules.html.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&(cap[1]==="pre"||cap[1]==="script"||cap[1]==="style"),text:cap[0]});continue}if(!bq&&top&&(cap=this.rules.def.exec(src))){src=src.substring(cap[0].length);this.tokens.links[cap[1].toLowerCase()]={href:cap[2],title:cap[3]};continue}if(top&&(cap=this.rules.table.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)}this.tokens.push(item);continue}if(top&&(cap=this.rules.paragraph.exec(src))){src=src.substring(cap[0].length);this.tokens.push({type:"paragraph",text:cap[1].charAt(cap[1].length-1)==="\n"?cap[1].slice(0,-1):cap[1]});continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"text",text:cap[0]});continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return this.tokens};var inline={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:noop,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:noop,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};inline._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;inline._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;inline.link=replace(inline.link)("inside",inline._inside)("href",inline._href)();inline.reflink=replace(inline.reflink)("inside",inline._inside)();inline.normal=merge({},inline);inline.pedantic=merge({},inline.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});inline.gfm=merge({},inline.normal,{escape:replace(inline.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:replace(inline.text)("]|","~]|")("|","|https?://|")()});inline.breaks=merge({},inline.gfm,{br:replace(inline.br)("{2,}","*")(),text:replace(inline.gfm.text)("{2,}","*")()});function InlineLexer(links,options){this.options=options||marked.defaults;this.links=links;this.rules=inline.normal;this.renderer=this.options.renderer||new Renderer;this.renderer.options=this.options;if(!this.links){throw new Error("Tokens array requires a `links` property.")}if(this.options.gfm){if(this.options.breaks){this.rules=inline.breaks}else{this.rules=inline.gfm}}else if(this.options.pedantic){this.rules=inline.pedantic}}InlineLexer.rules=inline;InlineLexer.output=function(src,links,options){var inline=new InlineLexer(links,options);return inline.output(src)};InlineLexer.prototype.output=function(src){var out="",link,text,href,cap;while(src){if(cap=this.rules.escape.exec(src)){src=src.substring(cap[0].length);out+=cap[1];continue}if(cap=this.rules.autolink.exec(src)){src=src.substring(cap[0].length);if(cap[2]==="@"){text=cap[1].charAt(6)===":"?this.mangle(cap[1].substring(7)):this.mangle(cap[1]);href=this.mangle("mailto:")+text}else{text=escape(cap[1]);href=text}out+=this.renderer.link(href,null,text);continue}if(!this.inLink&&(cap=this.rules.url.exec(src))){src=src.substring(cap[0].length);text=escape(cap[1]);href=text;out+=this.renderer.link(href,null,text);continue}if(cap=this.rules.tag.exec(src)){if(!this.inLink&&/^<a /i.test(cap[0])){this.inLink=true}else if(this.inLink&&/^<\/a>/i.test(cap[0])){this.inLink=false}src=src.substring(cap[0].length);out+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(cap[0]):escape(cap[0]):cap[0];continue}if(cap=this.rules.link.exec(src)){src=src.substring(cap[0].length);this.inLink=true;out+=this.outputLink(cap,{href:cap[2],title:cap[3]});this.inLink=false;continue}if((cap=this.rules.reflink.exec(src))||(cap=this.rules.nolink.exec(src))){src=src.substring(cap[0].length);link=(cap[2]||cap[1]).replace(/\s+/g," ");link=this.links[link.toLowerCase()];if(!link||!link.href){out+=cap[0].charAt(0);src=cap[0].substring(1)+src;continue}this.inLink=true;out+=this.outputLink(cap,link);this.inLink=false;continue}if(cap=this.rules.strong.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.strong(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.em.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.em(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.codespan(escape(cap[2],true));continue}if(cap=this.rules.br.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.br();continue}if(cap=this.rules.del.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.del(this.output(cap[1]));continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.text(escape(this.smartypants(cap[0])));continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return out};InlineLexer.prototype.outputLink=function(cap,link){var href=escape(link.href),title=link.title?escape(link.title):null;return cap[0].charAt(0)!=="!"?this.renderer.link(href,title,this.output(cap[1])):this.renderer.image(href,title,escape(cap[1]))};InlineLexer.prototype.smartypants=function(text){if(!this.options.smartypants)return text;return text.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")};InlineLexer.prototype.mangle=function(text){if(!this.options.mangle)return text;var out="",l=text.length,i=0,ch;for(;i<l;i++){ch=text.charCodeAt(i);if(Math.random()>.5){ch="x"+ch.toString(16)}out+="&#"+ch+";"}return out};function Renderer(options){this.options=options||{}}Renderer.prototype.code=function(code,lang,escaped){if(this.options.highlight){var out=this.options.highlight(code,lang);if(out!=null&&out!==code){escaped=true;code=out}}if(!lang){return"<pre><code>"+(escaped?code:escape(code,true))+"\n</code></pre>"}return'<pre><code class="'+this.options.langPrefix+escape(lang,true)+'">'+(escaped?code:escape(code,true))+"\n</code></pre>\n"};Renderer.prototype.blockquote=function(quote){return"<blockquote>\n"+quote+"</blockquote>\n"};Renderer.prototype.html=function(html){return html};Renderer.prototype.heading=function(text,level,raw){return"<h"+level+' id="'+this.options.headerPrefix+raw.toLowerCase().replace(/[^\w]+/g,"-")+'">'+text+"</h"+level+">\n"};Renderer.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"};Renderer.prototype.list=function(body,ordered){var type=ordered?"ol":"ul";return"<"+type+">\n"+body+"</"+type+">\n"};Renderer.prototype.listitem=function(text){return"<li>"+text+"</li>\n"};Renderer.prototype.paragraph=function(text){return"<p>"+text+"</p>\n"};Renderer.prototype.table=function(header,body){return"<table>\n"+"<thead>\n"+header+"</thead>\n"+"<tbody>\n"+body+"</tbody>\n"+"</table>\n"};Renderer.prototype.tablerow=function(content){return"<tr>\n"+content+"</tr>\n"};Renderer.prototype.tablecell=function(content,flags){var type=flags.header?"th":"td";var tag=flags.align?"<"+type+' style="text-align:'+flags.align+'">':"<"+type+">";return tag+content+"</"+type+">\n"};Renderer.prototype.strong=function(text){return"<strong>"+text+"</strong>"};Renderer.prototype.em=function(text){return"<em>"+text+"</em>"};Renderer.prototype.codespan=function(text){return"<code>"+text+"</code>"};Renderer.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"};Renderer.prototype.del=function(text){return"<del>"+text+"</del>"};Renderer.prototype.link=function(href,title,text){if(this.options.sanitize){try{var prot=decodeURIComponent(unescape(href)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(prot.indexOf("javascript:")===0||prot.indexOf("vbscript:")===0||prot.indexOf("data:")===0){return""}}var out='<a href="'+href+'"';if(title){out+=' title="'+title+'"'}out+=">"+text+"</a>";return out};Renderer.prototype.image=function(href,title,text){var out='<img src="'+href+'" alt="'+text+'"';if(title){out+=' title="'+title+'"'}out+=this.options.xhtml?"/>":">";return out};Renderer.prototype.text=function(text){return text};function Parser(options){this.tokens=[];this.token=null;this.options=options||marked.defaults;this.options.renderer=this.options.renderer||new Renderer;this.renderer=this.options.renderer;this.renderer.options=this.options}Parser.parse=function(src,options,renderer){var parser=new Parser(options,renderer);return parser.parse(src)};Parser.prototype.parse=function(src){this.inline=new InlineLexer(src.links,this.options,this.renderer);this.tokens=src.reverse();var out="";while(this.next()){out+=this.tok()}return out};Parser.prototype.next=function(){return this.token=this.tokens.pop()};Parser.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};Parser.prototype.parseText=function(){var body=this.token.text;while(this.peek().type==="text"){body+="\n"+this.next().text}return this.inline.output(body)};Parser.prototype.tok=function(){switch(this.token.type){case"space":{return""}case"hr":{return this.renderer.hr()}case"heading":{return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text)}case"code":{return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)}case"table":{var header="",body="",i,row,cell,flags,j;cell="";for(i=0;i<this.token.header.length;i++){flags={header:true,align:this.token.align[i]};cell+=this.renderer.tablecell(this.inline.output(this.token.header[i]),{header:true,align:this.token.align[i]})}header+=this.renderer.tablerow(cell);for(i=0;i<this.token.cells.length;i++){row=this.token.cells[i];cell="";for(j=0;j<row.length;j++){cell+=this.renderer.tablecell(this.inline.output(row[j]),{header:false,align:this.token.align[j]})}body+=this.renderer.tablerow(cell)}return this.renderer.table(header,body)}case"blockquote_start":{var body="";while(this.next().type!=="blockquote_end"){body+=this.tok()}return this.renderer.blockquote(body)}case"list_start":{var body="",ordered=this.token.ordered;while(this.next().type!=="list_end"){body+=this.tok()}return this.renderer.list(body,ordered)}case"list_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.token.type==="text"?this.parseText():this.tok()}return this.renderer.listitem(body)}case"loose_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.tok()}return this.renderer.listitem(body)}case"html":{var html=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(html)}case"paragraph":{return this.renderer.paragraph(this.inline.output(this.token.text))}case"text":{return this.renderer.paragraph(this.parseText())}}};function escape(html,encode){return html.replace(!encode?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function unescape(html){return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(_,n){n=n.toLowerCase();if(n==="colon")return":";if(n.charAt(0)==="#"){return n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1))}return""})}function replace(regex,opt){regex=regex.source;opt=opt||"";return function self(name,val){if(!name)return new RegExp(regex,opt);val=val.source||val;val=val.replace(/(^|[^\[])\^/g,"$1");regex=regex.replace(name,val);return self}}function noop(){}noop.exec=noop;function merge(obj){var i=1,target,key;for(;i<arguments.length;i++){target=arguments[i];for(key in target){if(Object.prototype.hasOwnProperty.call(target,key)){obj[key]=target[key]}}}return obj}function marked(src,opt,callback){if(callback||typeof opt==="function"){if(!callback){callback=opt;opt=null}opt=merge({},marked.defaults,opt||{});var highlight=opt.highlight,tokens,pending,i=0;try{tokens=Lexer.lex(src,opt)}catch(e){return callback(e)}pending=tokens.length;var done=function(err){if(err){opt.highlight=highlight;return callback(err)}var out;try{out=Parser.parse(tokens,opt)}catch(e){err=e}opt.highlight=highlight;return err?callback(err):callback(null,out)};if(!highlight||highlight.length<3){return done()}delete opt.highlight;if(!pending)return done();for(;i<tokens.length;i++){(function(token){if(token.type!=="code"){return--pending||done()}return highlight(token.text,token.lang,function(err,code){if(err)return done(err);if(code==null||code===token.text){return--pending||done()}token.text=code;token.escaped=true;--pending||done()})})(tokens[i])}return}try{if(opt)opt=merge({},marked.defaults,opt);return Parser.parse(Lexer.lex(src,opt),opt)}catch(e){e.message+="\nPlease report this to https://github.com/chjj/marked.";if((opt||marked.defaults).silent){return"<p>An error occured:</p><pre>"+escape(e.message+"",true)+"</pre>"}throw e}}marked.options=marked.setOptions=function(opt){merge(marked.defaults,opt);return marked};marked.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,sanitizer:null,mangle:true,smartLists:false,silent:false,highlight:null,langPrefix:"lang-",smartypants:false,headerPrefix:"",renderer:new Renderer,xhtml:false};marked.Parser=Parser;marked.parser=Parser.parse;marked.Renderer=Renderer;marked.Lexer=Lexer;marked.lexer=Lexer.lex;marked.InlineLexer=InlineLexer;marked.inlineLexer=InlineLexer.output;marked.parse=marked;if(typeof module!=="undefined"&&typeof exports==="object"){module.exports=marked}else if(typeof define==="function"&&define.amd){define(function(){return marked})}else{this.marked=marked}}).call(function(){return this||(typeof window!=="undefined"?window:global)}());

	return module.exports;
}();


// FORMAT OPTIONS FOR MARKED IMPLEMENTATION

function formatOptions(options)
{
	function toHighlight(code, lang)
	{
		if (!lang && options.defaultHighlighting.ctor === 'Just')
		{
			lang = options.defaultHighlighting._0;
		}

		if (typeof hljs !== 'undefined' && lang && hljs.listLanguages().indexOf(lang) >= 0)
		{
			return hljs.highlight(lang, code, true).value;
		}

		return code;
	}

	var gfm = options.githubFlavored;
	if (gfm.ctor === 'Just')
	{
		return {
			highlight: toHighlight,
			gfm: true,
			tables: gfm._0.tables,
			breaks: gfm._0.breaks,
			sanitize: options.sanitize,
			smartypants: options.smartypants
		};
	}

	return {
		highlight: toHighlight,
		gfm: false,
		tables: false,
		breaks: false,
		sanitize: options.sanitize,
		smartypants: options.smartypants
	};
}


// EXPORTS

return {
	toHtml: F3(toHtml)
};

}();

var _evancz$elm_markdown$Markdown$toHtmlWith = _evancz$elm_markdown$Native_Markdown.toHtml;
var _evancz$elm_markdown$Markdown$defaultOptions = {
	githubFlavored: _elm_lang$core$Maybe$Just(
		{tables: false, breaks: false}),
	defaultHighlighting: _elm_lang$core$Maybe$Nothing,
	sanitize: false,
	smartypants: false
};
var _evancz$elm_markdown$Markdown$toHtml = F2(
	function (attrs, string) {
		return A3(_evancz$elm_markdown$Native_Markdown.toHtml, _evancz$elm_markdown$Markdown$defaultOptions, attrs, string);
	});
var _evancz$elm_markdown$Markdown$Options = F4(
	function (a, b, c, d) {
		return {githubFlavored: a, defaultHighlighting: b, sanitize: c, smartypants: d};
	});

var _moarwick$elm_webpack_starter$Errors$map = F2(
	function (f, result) {
		var _p0 = result;
		if (_p0.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p0._0);
		} else {
			return _elm_lang$core$Result$Err(
				A2(_elm_lang$core$List$map, f, _p0._0));
		}
	});
var _moarwick$elm_webpack_starter$Errors$errors = function (r) {
	var _p1 = r;
	if (_p1.ctor === 'Err') {
		return _p1._0;
	} else {
		return {ctor: '[]'};
	}
};
var _moarwick$elm_webpack_starter$Errors$merge3 = F4(
	function (func, ra, rb, rc) {
		var _p2 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if ((((_p2.ctor === '_Tuple3') && (_p2._0.ctor === 'Ok')) && (_p2._1.ctor === 'Ok')) && (_p2._2.ctor === 'Ok')) {
			return _elm_lang$core$Result$Ok(
				A3(func, _p2._0._0, _p2._1._0, _p2._2._0));
		} else {
			return _elm_lang$core$Result$Err(
				A2(
					_elm_lang$core$Basics_ops['++'],
					_moarwick$elm_webpack_starter$Errors$errors(ra),
					A2(
						_elm_lang$core$Basics_ops['++'],
						_moarwick$elm_webpack_starter$Errors$errors(rb),
						_moarwick$elm_webpack_starter$Errors$errors(rc))));
		}
	});
var _moarwick$elm_webpack_starter$Errors$merge2 = F3(
	function (func, ra, rb) {
		var _p3 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p3._0.ctor === 'Ok') {
			if (_p3._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p3._0._0, _p3._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p3._1._0);
			}
		} else {
			if (_p3._1.ctor === 'Err') {
				return _elm_lang$core$Result$Err(
					A2(_elm_lang$core$Basics_ops['++'], _p3._0._0, _p3._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p3._0._0);
			}
		}
	});

var _moarwick$elm_webpack_starter$Formula$strArgs = function (ts) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'(',
		A2(
			_elm_lang$core$Basics_ops['++'],
			A2(
				_elm_lang$core$String$join,
				',',
				A2(_elm_lang$core$List$map, _moarwick$elm_webpack_starter$Formula$strTerm, ts)),
			')'));
};
var _moarwick$elm_webpack_starter$Formula$strTerm = function (t) {
	var _p0 = t;
	if (_p0.ctor === 'Var') {
		return _p0._0;
	} else {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_p0._0,
			_moarwick$elm_webpack_starter$Formula$strArgs(_p0._1));
	}
};
var _moarwick$elm_webpack_starter$Formula$strFormula = function (f) {
	var atomSpace = function (f) {
		var _p1 = f;
		if (_p1.ctor === 'Atom') {
			return ' ';
		} else {
			return '';
		}
	};
	var strQF = F3(
		function (q, bv, f) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				q,
				A2(
					_elm_lang$core$Basics_ops['++'],
					bv,
					A2(
						_elm_lang$core$Basics_ops['++'],
						atomSpace(f),
						_moarwick$elm_webpack_starter$Formula$strFormula(f))));
		});
	var strBinF = F3(
		function (lf, c, rf) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_moarwick$elm_webpack_starter$Formula$strFormula(lf),
					A2(
						_elm_lang$core$Basics_ops['++'],
						c,
						A2(
							_elm_lang$core$Basics_ops['++'],
							_moarwick$elm_webpack_starter$Formula$strFormula(rf),
							')'))));
		});
	var _p2 = f;
	switch (_p2.ctor) {
		case 'FT':
			return 'True';
		case 'FF':
			return 'False';
		case 'Atom':
			if (_p2._1.ctor === '[]') {
				return _p2._0;
			} else {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_p2._0,
					_moarwick$elm_webpack_starter$Formula$strArgs(_p2._1));
			}
		case 'Neg':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'¬',
				_moarwick$elm_webpack_starter$Formula$strFormula(_p2._0));
		case 'Conj':
			return A3(strBinF, _p2._0, '∧', _p2._1);
		case 'Disj':
			return A3(strBinF, _p2._0, '∨', _p2._1);
		case 'Impl':
			return A3(strBinF, _p2._0, '→', _p2._1);
		case 'ForAll':
			return A3(strQF, '∀', _p2._0, _p2._1);
		default:
			return A3(strQF, '∃', _p2._0, _p2._1);
	}
};
var _moarwick$elm_webpack_starter$Formula$strSigned = function (sf) {
	var _p3 = sf;
	if (_p3.ctor === 'T') {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'T ',
			_moarwick$elm_webpack_starter$Formula$strFormula(_p3._0));
	} else {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'F ',
			_moarwick$elm_webpack_starter$Formula$strFormula(_p3._0));
	}
};
var _moarwick$elm_webpack_starter$Formula$strSubstitution = function (s) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'(',
		A2(
			_elm_lang$core$Basics_ops['++'],
			A2(
				_elm_lang$core$String$join,
				',',
				A2(
					_elm_lang$core$List$map,
					function (_p4) {
						var _p5 = _p4;
						return A2(
							_elm_lang$core$Basics_ops['++'],
							_p5._0,
							A2(
								_elm_lang$core$Basics_ops['++'],
								'->',
								_moarwick$elm_webpack_starter$Formula$strTerm(_p5._1)));
					},
					_elm_lang$core$Dict$toList(s))),
			')'));
};
var _moarwick$elm_webpack_starter$Formula$spaces = A2(
	_elm_tools$parser$Parser$ignore,
	_elm_tools$parser$Parser$zeroOrMore,
	function ($char) {
		return _elm_lang$core$Native_Utils.eq(
			$char,
			_elm_lang$core$Native_Utils.chr(' '));
	});
var _moarwick$elm_webpack_starter$Formula$isLetter = function ($char) {
	return _elm_lang$core$Char$isLower($char) || _elm_lang$core$Char$isUpper($char);
};
var _moarwick$elm_webpack_starter$Formula$isIdentChar = function ($char) {
	return _moarwick$elm_webpack_starter$Formula$isLetter($char) || (_elm_lang$core$Char$isDigit($char) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('_')));
};
var _moarwick$elm_webpack_starter$Formula$oneOfSymbols = function (syms) {
	return _elm_tools$parser$Parser$oneOf(
		A2(_elm_lang$core$List$map, _elm_tools$parser$Parser$symbol, syms));
};
var _moarwick$elm_webpack_starter$Formula$identifier = A3(_elm_tools$parser$Parser_LanguageKit$variable, _moarwick$elm_webpack_starter$Formula$isLetter, _moarwick$elm_webpack_starter$Formula$isIdentChar, _elm_lang$core$Set$empty);
var _moarwick$elm_webpack_starter$Formula$errorString = function (e) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'Invalid formula: ',
		_elm_lang$core$Basics$toString(e));
};
var _moarwick$elm_webpack_starter$Formula$signedGetFormula = function (sf) {
	var _p6 = sf;
	if (_p6.ctor === 'T') {
		return _p6._0;
	} else {
		return _p6._0;
	}
};
var _moarwick$elm_webpack_starter$Formula$isSignedComplementary = F2(
	function (a, b) {
		var _p7 = {ctor: '_Tuple2', _0: a, _1: b};
		_v6_2:
		do {
			if (_p7.ctor === '_Tuple2') {
				if (_p7._0.ctor === 'T') {
					if (_p7._1.ctor === 'F') {
						return _elm_lang$core$Native_Utils.eq(_p7._0._0, _p7._1._0);
					} else {
						break _v6_2;
					}
				} else {
					if (_p7._1.ctor === 'T') {
						return _elm_lang$core$Native_Utils.eq(_p7._0._0, _p7._1._0);
					} else {
						break _v6_2;
					}
				}
			} else {
				break _v6_2;
			}
		} while(false);
		return false;
	});
var _moarwick$elm_webpack_starter$Formula$mapResult = function (f) {
	return A2(
		_elm_lang$core$List$foldr,
		function (_p8) {
			return A2(
				_elm_lang$core$Result$map2,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				f(_p8));
		},
		_elm_lang$core$Result$Ok(
			{ctor: '[]'}));
};
var _moarwick$elm_webpack_starter$Formula$freeTermA = F2(
	function (t, fvs) {
		var _p9 = t;
		if (_p9.ctor === 'Var') {
			return A2(_elm_lang$core$Set$insert, _p9._0, fvs);
		} else {
			return A3(_elm_lang$core$List$foldl, _moarwick$elm_webpack_starter$Formula$freeTermA, fvs, _p9._1);
		}
	});
var _moarwick$elm_webpack_starter$Formula$freeTerm = function (t) {
	return A2(_moarwick$elm_webpack_starter$Formula$freeTermA, t, _elm_lang$core$Set$empty);
};
var _moarwick$elm_webpack_starter$Formula$subformulas = function (f) {
	var _p10 = f;
	switch (_p10.ctor) {
		case 'Neg':
			return {
				ctor: '::',
				_0: _p10._0,
				_1: {ctor: '[]'}
			};
		case 'Disj':
			return {
				ctor: '::',
				_0: _p10._0,
				_1: {
					ctor: '::',
					_0: _p10._1,
					_1: {ctor: '[]'}
				}
			};
		case 'Conj':
			return {
				ctor: '::',
				_0: _p10._0,
				_1: {
					ctor: '::',
					_0: _p10._1,
					_1: {ctor: '[]'}
				}
			};
		case 'Impl':
			return {
				ctor: '::',
				_0: _p10._0,
				_1: {
					ctor: '::',
					_0: _p10._1,
					_1: {ctor: '[]'}
				}
			};
		case 'ForAll':
			return {
				ctor: '::',
				_0: _p10._1,
				_1: {ctor: '[]'}
			};
		case 'Exists':
			return {
				ctor: '::',
				_0: _p10._1,
				_1: {ctor: '[]'}
			};
		default:
			return {ctor: '[]'};
	}
};
var _moarwick$elm_webpack_starter$Formula$isSubformulaOf = F2(
	function (a, b) {
		return A2(
			_elm_lang$core$List$member,
			a,
			_moarwick$elm_webpack_starter$Formula$subformulas(b));
	});
var _moarwick$elm_webpack_starter$Formula$freeFormula = function (f) {
	var freeFormulaA = F2(
		function (f, fvs) {
			var _p11 = f;
			switch (_p11.ctor) {
				case 'Atom':
					return A3(_elm_lang$core$List$foldl, _moarwick$elm_webpack_starter$Formula$freeTermA, fvs, _p11._1);
				case 'ForAll':
					return A2(
						_elm_lang$core$Set$remove,
						_p11._0,
						A2(freeFormulaA, _p11._1, fvs));
				case 'Exists':
					return A2(
						_elm_lang$core$Set$remove,
						_p11._0,
						A2(freeFormulaA, _p11._1, fvs));
				default:
					return A3(
						_elm_lang$core$List$foldl,
						freeFormulaA,
						fvs,
						_moarwick$elm_webpack_starter$Formula$subformulas(f));
			}
		});
	return A2(freeFormulaA, f, _elm_lang$core$Set$empty);
};
var _moarwick$elm_webpack_starter$Formula$predicates = function (f) {
	var predicatesA = F2(
		function (f, ps) {
			var _p12 = f;
			if (_p12.ctor === 'Atom') {
				return A2(_elm_lang$core$Set$insert, _p12._0, ps);
			} else {
				return A3(
					_elm_lang$core$List$foldl,
					predicatesA,
					ps,
					_moarwick$elm_webpack_starter$Formula$subformulas(f));
			}
		});
	return A2(predicatesA, f, _elm_lang$core$Set$empty);
};
var _moarwick$elm_webpack_starter$Formula$functions = function (f) {
	var functionsTA = F2(
		function (t, fs) {
			var _p13 = t;
			if (_p13.ctor === 'Fun') {
				return A2(
					_elm_lang$core$Set$insert,
					_p13._0,
					A3(_elm_lang$core$List$foldl, functionsTA, fs, _p13._1));
			} else {
				return fs;
			}
		});
	var functionsA = F2(
		function (f, fs) {
			var _p14 = f;
			if (_p14.ctor === 'Atom') {
				return A3(_elm_lang$core$List$foldl, functionsTA, fs, _p14._1);
			} else {
				return A3(
					_elm_lang$core$List$foldl,
					functionsA,
					fs,
					_moarwick$elm_webpack_starter$Formula$subformulas(f));
			}
		});
	return A2(functionsA, f, _elm_lang$core$Set$empty);
};
var _moarwick$elm_webpack_starter$Formula$variables = function (f) {
	var variablesTA = F2(
		function (t, vs) {
			var _p15 = t;
			if (_p15.ctor === 'Fun') {
				return A3(_elm_lang$core$List$foldl, variablesTA, vs, _p15._1);
			} else {
				return A2(_elm_lang$core$Set$insert, _p15._0, vs);
			}
		});
	var variablesA = F2(
		function (f, vs) {
			var _p16 = f;
			if (_p16.ctor === 'Atom') {
				return A3(_elm_lang$core$List$foldl, variablesTA, vs, _p16._1);
			} else {
				return A3(
					_elm_lang$core$List$foldl,
					variablesA,
					vs,
					_moarwick$elm_webpack_starter$Formula$subformulas(f));
			}
		});
	return A2(variablesA, f, _elm_lang$core$Set$empty);
};
var _moarwick$elm_webpack_starter$Formula$Fun = F2(
	function (a, b) {
		return {ctor: 'Fun', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Formula$substTerm = F2(
	function (sigma, t) {
		var _p17 = t;
		if (_p17.ctor === 'Var') {
			var _p18 = A2(_elm_lang$core$Dict$get, _p17._0, sigma);
			if (_p18.ctor === 'Just') {
				return _p18._0;
			} else {
				return t;
			}
		} else {
			return A2(
				_moarwick$elm_webpack_starter$Formula$Fun,
				_p17._0,
				A2(
					_elm_lang$core$List$map,
					_moarwick$elm_webpack_starter$Formula$substTerm(sigma),
					_p17._1));
		}
	});
var _moarwick$elm_webpack_starter$Formula$Var = function (a) {
	return {ctor: 'Var', _0: a};
};
var _moarwick$elm_webpack_starter$Formula$term = A2(
	_elm_tools$parser$Parser$andThen,
	function (name) {
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser_ops['|='],
					_elm_tools$parser$Parser$succeed(
						function (args) {
							return A2(_moarwick$elm_webpack_starter$Formula$Fun, name, args);
						}),
					_elm_tools$parser$Parser$lazy(
						function (_p19) {
							return A2(_elm_tools$parser$Parser$inContext, 'function arguments', _moarwick$elm_webpack_starter$Formula$args);
						})),
				_1: {
					ctor: '::',
					_0: _elm_tools$parser$Parser$succeed(
						_moarwick$elm_webpack_starter$Formula$Var(name)),
					_1: {ctor: '[]'}
				}
			});
	},
	_moarwick$elm_webpack_starter$Formula$identifier);
var _moarwick$elm_webpack_starter$Formula$args = A2(
	_elm_tools$parser$Parser_ops['|.'],
	A2(
		_elm_tools$parser$Parser_ops['|='],
		A2(
			_elm_tools$parser$Parser_ops['|.'],
			A2(
				_elm_tools$parser$Parser_ops['|='],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					A2(
						_elm_tools$parser$Parser_ops['|.'],
						_elm_tools$parser$Parser$succeed(
							F2(
								function (x, y) {
									return {ctor: '::', _0: x, _1: y};
								})),
						_elm_tools$parser$Parser$symbol('(')),
					_moarwick$elm_webpack_starter$Formula$spaces),
				_elm_tools$parser$Parser$lazy(
					function (_p20) {
						return _moarwick$elm_webpack_starter$Formula$term;
					})),
			_moarwick$elm_webpack_starter$Formula$spaces),
		_elm_tools$parser$Parser$lazy(
			function (_p21) {
				return A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _moarwick$elm_webpack_starter$Formula$nextArg);
			})),
	_elm_tools$parser$Parser$symbol(')'));
var _moarwick$elm_webpack_starter$Formula$nextArg = A2(
	_elm_tools$parser$Parser_ops['|.'],
	A2(
		_elm_tools$parser$Parser_ops['|='],
		A2(
			_elm_tools$parser$Parser_ops['|.'],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
				_elm_tools$parser$Parser$symbol(',')),
			_moarwick$elm_webpack_starter$Formula$spaces),
		_moarwick$elm_webpack_starter$Formula$term),
	_moarwick$elm_webpack_starter$Formula$spaces);
var _moarwick$elm_webpack_starter$Formula$parseTerm = _elm_tools$parser$Parser$run(
	A2(
		_elm_tools$parser$Parser_ops['|.'],
		A2(
			_elm_tools$parser$Parser_ops['|.'],
			A2(
				_elm_tools$parser$Parser_ops['|='],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
					_moarwick$elm_webpack_starter$Formula$spaces),
				_moarwick$elm_webpack_starter$Formula$term),
			_moarwick$elm_webpack_starter$Formula$spaces),
		_elm_tools$parser$Parser$end));
var _moarwick$elm_webpack_starter$Formula$FT = {ctor: 'FT'};
var _moarwick$elm_webpack_starter$Formula$FF = {ctor: 'FF'};
var _moarwick$elm_webpack_starter$Formula$Exists = F2(
	function (a, b) {
		return {ctor: 'Exists', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Formula$ForAll = F2(
	function (a, b) {
		return {ctor: 'ForAll', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Formula$Impl = F2(
	function (a, b) {
		return {ctor: 'Impl', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Formula$Conj = F2(
	function (a, b) {
		return {ctor: 'Conj', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Formula$Disj = F2(
	function (a, b) {
		return {ctor: 'Disj', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Formula$Neg = function (a) {
	return {ctor: 'Neg', _0: a};
};
var _moarwick$elm_webpack_starter$Formula$Atom = F2(
	function (a, b) {
		return {ctor: 'Atom', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Formula$substitute = F2(
	function (σ, f) {
		var canSubst = F3(
			function (x, t, bound) {
				var strVars = function (xs) {
					return A2(_elm_lang$core$String$join, ', ', xs);
				};
				var varsToBe = function (xs) {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'variable',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Native_Utils.eq(
								_elm_lang$core$Set$size(xs),
								1) ? '' : 's',
							A2(
								_elm_lang$core$Basics_ops['++'],
								' ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									strVars(
										_elm_lang$core$Set$toList(xs)),
									_elm_lang$core$Native_Utils.eq(
										_elm_lang$core$Set$size(xs),
										1) ? ' is' : ' are'))));
				};
				var clashing = A2(
					_elm_lang$core$Set$intersect,
					bound,
					_moarwick$elm_webpack_starter$Formula$freeTerm(t));
				return _elm_lang$core$Set$isEmpty(clashing) ? _elm_lang$core$Result$Ok(t) : _elm_lang$core$Result$Err(
					A2(
						_elm_lang$core$String$join,
						' ',
						{
							ctor: '::',
							_0: 'Cannot substitute',
							_1: {
								ctor: '::',
								_0: _moarwick$elm_webpack_starter$Formula$strTerm(t),
								_1: {
									ctor: '::',
									_0: 'for',
									_1: {
										ctor: '::',
										_0: A2(_elm_lang$core$Basics_ops['++'], x, ';'),
										_1: {
											ctor: '::',
											_0: varsToBe(clashing),
											_1: {
												ctor: '::',
												_0: 'bound',
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}));
			});
		var substT = F3(
			function (σ, bound, t) {
				var subst = function (t) {
					var _p22 = t;
					if (_p22.ctor === 'Var') {
						var _p24 = _p22._0;
						var _p23 = A2(_elm_lang$core$Dict$get, _p24, σ);
						if (_p23.ctor === 'Just') {
							return A3(canSubst, _p24, _p23._0, bound);
						} else {
							return _elm_lang$core$Result$Ok(t);
						}
					} else {
						return A2(
							_elm_lang$core$Result$map,
							_moarwick$elm_webpack_starter$Formula$Fun(_p22._0),
							A3(substTs, σ, bound, _p22._1));
					}
				};
				return subst(t);
			});
		var substTs = F3(
			function (σ, bound, lst) {
				return A2(
					_moarwick$elm_webpack_starter$Formula$mapResult,
					A2(substT, σ, bound),
					lst);
			});
		var substF = F3(
			function (σ, bound, f) {
				var subst = A2(substF, σ, bound);
				var _p25 = f;
				switch (_p25.ctor) {
					case 'Atom':
						return A2(
							_elm_lang$core$Result$map,
							_moarwick$elm_webpack_starter$Formula$Atom(_p25._0),
							A3(substTs, σ, bound, _p25._1));
					case 'ForAll':
						var _p26 = _p25._0;
						return A2(
							_elm_lang$core$Result$map,
							_moarwick$elm_webpack_starter$Formula$ForAll(_p26),
							A3(
								substF,
								A2(_elm_lang$core$Dict$remove, _p26, σ),
								A2(_elm_lang$core$Set$insert, _p26, bound),
								_p25._1));
					case 'Exists':
						var _p27 = _p25._0;
						return A2(
							_elm_lang$core$Result$map,
							_moarwick$elm_webpack_starter$Formula$Exists(_p27),
							A3(
								substF,
								A2(_elm_lang$core$Dict$remove, _p27, σ),
								A2(_elm_lang$core$Set$insert, _p27, bound),
								_p25._1));
					case 'Disj':
						return A3(
							_elm_lang$core$Result$map2,
							_moarwick$elm_webpack_starter$Formula$Disj,
							subst(_p25._0),
							subst(_p25._1));
					case 'Conj':
						return A3(
							_elm_lang$core$Result$map2,
							_moarwick$elm_webpack_starter$Formula$Conj,
							subst(_p25._0),
							subst(_p25._1));
					case 'Impl':
						return A3(
							_elm_lang$core$Result$map2,
							_moarwick$elm_webpack_starter$Formula$Impl,
							subst(_p25._0),
							subst(_p25._1));
					case 'Neg':
						return A2(
							_elm_lang$core$Result$map,
							_moarwick$elm_webpack_starter$Formula$Neg,
							subst(_p25._0));
					default:
						return _elm_lang$core$Result$Ok(f);
				}
			});
		return A3(substF, σ, _elm_lang$core$Set$empty, f);
	});
var _moarwick$elm_webpack_starter$Formula$removeQuantifierAndSubstitute = F2(
	function (substitution, original) {
		if (_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$Dict$size(substitution),
			1) > 0) {
			return _elm_lang$core$Result$Err('there is more than one substitution pair');
		} else {
			var _p28 = original;
			switch (_p28.ctor) {
				case 'ForAll':
					return A2(
						_elm_lang$core$List$member,
						_p28._0,
						_elm_lang$core$Dict$keys(substitution)) ? A2(_moarwick$elm_webpack_starter$Formula$substitute, substitution, _p28._1) : _elm_lang$core$Result$Err('substituted variable isn\'t in substitution');
				case 'Exists':
					return A2(
						_elm_lang$core$List$member,
						_p28._0,
						_elm_lang$core$Dict$keys(substitution)) ? A2(_moarwick$elm_webpack_starter$Formula$substitute, substitution, _p28._1) : _elm_lang$core$Result$Err('substituted variable isn\'t in substitution');
				default:
					return _elm_lang$core$Result$Err('formula doesn\'t start with quantifier');
			}
		}
	});
var _moarwick$elm_webpack_starter$Formula$formula = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: A2(
			_elm_tools$parser$Parser_ops['|='],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				A2(
					_elm_tools$parser$Parser_ops['|='],
					_elm_tools$parser$Parser$succeed(_moarwick$elm_webpack_starter$Formula$Atom),
					_moarwick$elm_webpack_starter$Formula$identifier),
				_moarwick$elm_webpack_starter$Formula$spaces),
			_elm_tools$parser$Parser$oneOf(
				{
					ctor: '::',
					_0: A2(_elm_tools$parser$Parser$inContext, 'predicate arguments', _moarwick$elm_webpack_starter$Formula$args),
					_1: {
						ctor: '::',
						_0: _elm_tools$parser$Parser$succeed(
							{ctor: '[]'}),
						_1: {ctor: '[]'}
					}
				})),
		_1: {
			ctor: '::',
			_0: _elm_tools$parser$Parser$lazy(
				function (_p29) {
					return A2(
						_moarwick$elm_webpack_starter$Formula$quantified,
						{
							ctor: '::',
							_0: '∀',
							_1: {
								ctor: '::',
								_0: '\\A',
								_1: {
									ctor: '::',
									_0: '\\forall',
									_1: {
										ctor: '::',
										_0: '\\a',
										_1: {ctor: '[]'}
									}
								}
							}
						},
						_moarwick$elm_webpack_starter$Formula$ForAll);
				}),
			_1: {
				ctor: '::',
				_0: _elm_tools$parser$Parser$lazy(
					function (_p30) {
						return A2(
							_moarwick$elm_webpack_starter$Formula$quantified,
							{
								ctor: '::',
								_0: '∃',
								_1: {
									ctor: '::',
									_0: '\\E',
									_1: {
										ctor: '::',
										_0: '\\exists',
										_1: {
											ctor: '::',
											_0: '\\e',
											_1: {ctor: '[]'}
										}
									}
								}
							},
							_moarwick$elm_webpack_starter$Formula$Exists);
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser_ops['|='],
						A2(
							_elm_tools$parser$Parser_ops['|.'],
							A2(
								_elm_tools$parser$Parser_ops['|.'],
								_elm_tools$parser$Parser$succeed(_moarwick$elm_webpack_starter$Formula$Neg),
								_moarwick$elm_webpack_starter$Formula$oneOfSymbols(
									{
										ctor: '::',
										_0: '-',
										_1: {
											ctor: '::',
											_0: '¬',
											_1: {
												ctor: '::',
												_0: '~',
												_1: {ctor: '[]'}
											}
										}
									})),
							_moarwick$elm_webpack_starter$Formula$spaces),
						_elm_tools$parser$Parser$lazy(
							function (_p31) {
								return _moarwick$elm_webpack_starter$Formula$formula;
							})),
					_1: {
						ctor: '::',
						_0: _elm_tools$parser$Parser$lazy(
							function (_p32) {
								return A2(
									_moarwick$elm_webpack_starter$Formula$binary,
									{
										ctor: '::',
										_0: '&',
										_1: {
											ctor: '::',
											_0: '∧',
											_1: {
												ctor: '::',
												_0: '/\\',
												_1: {ctor: '[]'}
											}
										}
									},
									_moarwick$elm_webpack_starter$Formula$Conj);
							}),
						_1: {
							ctor: '::',
							_0: _elm_tools$parser$Parser$lazy(
								function (_p33) {
									return A2(
										_moarwick$elm_webpack_starter$Formula$binary,
										{
											ctor: '::',
											_0: '|',
											_1: {
												ctor: '::',
												_0: '∨',
												_1: {
													ctor: '::',
													_0: '\\/',
													_1: {ctor: '[]'}
												}
											}
										},
										_moarwick$elm_webpack_starter$Formula$Disj);
								}),
							_1: {
								ctor: '::',
								_0: _elm_tools$parser$Parser$lazy(
									function (_p34) {
										return A2(
											_moarwick$elm_webpack_starter$Formula$binary,
											{
												ctor: '::',
												_0: '->',
												_1: {
													ctor: '::',
													_0: '→',
													_1: {ctor: '[]'}
												}
											},
											_moarwick$elm_webpack_starter$Formula$Impl);
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_tools$parser$Parser_ops['|.'],
										A2(
											_elm_tools$parser$Parser_ops['|.'],
											A2(
												_elm_tools$parser$Parser_ops['|='],
												A2(
													_elm_tools$parser$Parser_ops['|.'],
													A2(
														_elm_tools$parser$Parser_ops['|.'],
														_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
														_elm_tools$parser$Parser$symbol('(')),
													_moarwick$elm_webpack_starter$Formula$spaces),
												_elm_tools$parser$Parser$lazy(
													function (_p35) {
														return _moarwick$elm_webpack_starter$Formula$formula;
													})),
											_moarwick$elm_webpack_starter$Formula$spaces),
										_elm_tools$parser$Parser$symbol(')')),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}
		}
	});
var _moarwick$elm_webpack_starter$Formula$binary = F2(
	function (conn, constructor) {
		return A3(
			_elm_tools$parser$Parser$delayedCommitMap,
			constructor,
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				A2(
					_elm_tools$parser$Parser_ops['|='],
					A2(
						_elm_tools$parser$Parser_ops['|.'],
						A2(
							_elm_tools$parser$Parser_ops['|.'],
							_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
							_elm_tools$parser$Parser$symbol('(')),
						_moarwick$elm_webpack_starter$Formula$spaces),
					_elm_tools$parser$Parser$lazy(
						function (_p36) {
							return _moarwick$elm_webpack_starter$Formula$formula;
						})),
				_moarwick$elm_webpack_starter$Formula$spaces),
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					A2(
						_elm_tools$parser$Parser_ops['|='],
						A2(
							_elm_tools$parser$Parser_ops['|.'],
							A2(
								_elm_tools$parser$Parser_ops['|.'],
								_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
								_moarwick$elm_webpack_starter$Formula$oneOfSymbols(conn)),
							_moarwick$elm_webpack_starter$Formula$spaces),
						_elm_tools$parser$Parser$lazy(
							function (_p37) {
								return _moarwick$elm_webpack_starter$Formula$formula;
							})),
					_moarwick$elm_webpack_starter$Formula$spaces),
				_elm_tools$parser$Parser$symbol(')')));
	});
var _moarwick$elm_webpack_starter$Formula$quantified = F2(
	function (symbols, constructor) {
		return A2(
			_elm_tools$parser$Parser_ops['|='],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				A2(
					_elm_tools$parser$Parser_ops['|='],
					A2(
						_elm_tools$parser$Parser_ops['|.'],
						A2(
							_elm_tools$parser$Parser_ops['|.'],
							_elm_tools$parser$Parser$succeed(constructor),
							_moarwick$elm_webpack_starter$Formula$oneOfSymbols(symbols)),
						_moarwick$elm_webpack_starter$Formula$spaces),
					_elm_tools$parser$Parser$lazy(
						function (_p38) {
							return _moarwick$elm_webpack_starter$Formula$identifier;
						})),
				_moarwick$elm_webpack_starter$Formula$spaces),
			_elm_tools$parser$Parser$lazy(
				function (_p39) {
					return _moarwick$elm_webpack_starter$Formula$formula;
				}));
	});
var _moarwick$elm_webpack_starter$Formula$parse = _elm_tools$parser$Parser$run(
	A2(
		_elm_tools$parser$Parser_ops['|.'],
		A2(
			_elm_tools$parser$Parser_ops['|.'],
			A2(
				_elm_tools$parser$Parser_ops['|='],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
					_moarwick$elm_webpack_starter$Formula$spaces),
				_moarwick$elm_webpack_starter$Formula$formula),
			_moarwick$elm_webpack_starter$Formula$spaces),
		_elm_tools$parser$Parser$end));
var _moarwick$elm_webpack_starter$Formula$f = function (_p40) {
	return A2(
		_elm_lang$core$Result$withDefault,
		_moarwick$elm_webpack_starter$Formula$FF,
		_moarwick$elm_webpack_starter$Formula$parse(_p40));
};
var _moarwick$elm_webpack_starter$Formula$F = function (a) {
	return {ctor: 'F', _0: a};
};
var _moarwick$elm_webpack_starter$Formula$T = function (a) {
	return {ctor: 'T', _0: a};
};
var _moarwick$elm_webpack_starter$Formula$negSigned = function (sf) {
	var _p41 = sf;
	if (_p41.ctor === 'T') {
		return _moarwick$elm_webpack_starter$Formula$F(_p41._0);
	} else {
		return _moarwick$elm_webpack_starter$Formula$T(_p41._0);
	}
};
var _moarwick$elm_webpack_starter$Formula$signedSubformulas = function (sf) {
	var _p42 = sf;
	if (_p42.ctor === 'T') {
		switch (_p42._0.ctor) {
			case 'Neg':
				return {
					ctor: '::',
					_0: _moarwick$elm_webpack_starter$Formula$F(_p42._0._0),
					_1: {ctor: '[]'}
				};
			case 'Conj':
				return {
					ctor: '::',
					_0: _moarwick$elm_webpack_starter$Formula$T(_p42._0._0),
					_1: {
						ctor: '::',
						_0: _moarwick$elm_webpack_starter$Formula$T(_p42._0._1),
						_1: {ctor: '[]'}
					}
				};
			case 'Disj':
				return {
					ctor: '::',
					_0: _moarwick$elm_webpack_starter$Formula$T(_p42._0._0),
					_1: {
						ctor: '::',
						_0: _moarwick$elm_webpack_starter$Formula$T(_p42._0._1),
						_1: {ctor: '[]'}
					}
				};
			case 'Impl':
				return {
					ctor: '::',
					_0: _moarwick$elm_webpack_starter$Formula$F(_p42._0._0),
					_1: {
						ctor: '::',
						_0: _moarwick$elm_webpack_starter$Formula$T(_p42._0._1),
						_1: {ctor: '[]'}
					}
				};
			case 'ForAll':
				return {
					ctor: '::',
					_0: _moarwick$elm_webpack_starter$Formula$T(_p42._0._1),
					_1: {ctor: '[]'}
				};
			case 'Exists':
				return {
					ctor: '::',
					_0: _moarwick$elm_webpack_starter$Formula$T(_p42._0._1),
					_1: {ctor: '[]'}
				};
			default:
				return {ctor: '[]'};
		}
	} else {
		return A2(
			_elm_lang$core$List$map,
			_moarwick$elm_webpack_starter$Formula$negSigned,
			_moarwick$elm_webpack_starter$Formula$signedSubformulas(
				_moarwick$elm_webpack_starter$Formula$T(_p42._0)));
	}
};
var _moarwick$elm_webpack_starter$Formula$isSignedSubformulaOf = F2(
	function (a, b) {
		return A2(
			_elm_lang$core$List$member,
			a,
			_moarwick$elm_webpack_starter$Formula$signedSubformulas(b));
	});
var _moarwick$elm_webpack_starter$Formula$signedFormula = A2(
	_elm_tools$parser$Parser_ops['|='],
	A2(
		_elm_tools$parser$Parser_ops['|.'],
		_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
		_moarwick$elm_webpack_starter$Formula$spaces),
	_elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser_ops['|='],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					A2(
						_elm_tools$parser$Parser_ops['|.'],
						_elm_tools$parser$Parser$succeed(_moarwick$elm_webpack_starter$Formula$T),
						_elm_tools$parser$Parser$keyword('T')),
					_moarwick$elm_webpack_starter$Formula$spaces),
				_moarwick$elm_webpack_starter$Formula$formula),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser_ops['|='],
					A2(
						_elm_tools$parser$Parser_ops['|.'],
						A2(
							_elm_tools$parser$Parser_ops['|.'],
							_elm_tools$parser$Parser$succeed(_moarwick$elm_webpack_starter$Formula$F),
							_elm_tools$parser$Parser$keyword('F')),
						_moarwick$elm_webpack_starter$Formula$spaces),
					_moarwick$elm_webpack_starter$Formula$formula),
				_1: {ctor: '[]'}
			}
		}));
var _moarwick$elm_webpack_starter$Formula$parseSigned = _elm_tools$parser$Parser$run(
	A2(
		_elm_tools$parser$Parser_ops['|.'],
		A2(
			_elm_tools$parser$Parser_ops['|.'],
			A2(
				_elm_tools$parser$Parser_ops['|='],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
					_moarwick$elm_webpack_starter$Formula$spaces),
				_moarwick$elm_webpack_starter$Formula$signedFormula),
			_moarwick$elm_webpack_starter$Formula$spaces),
		_elm_tools$parser$Parser$end));
var _moarwick$elm_webpack_starter$Formula$sf = function (_p43) {
	return A2(
		_elm_lang$core$Result$withDefault,
		_moarwick$elm_webpack_starter$Formula$T(_moarwick$elm_webpack_starter$Formula$FF),
		_moarwick$elm_webpack_starter$Formula$parseSigned(_p43));
};
var _moarwick$elm_webpack_starter$Formula$Delta = {ctor: 'Delta'};
var _moarwick$elm_webpack_starter$Formula$Gamma = {ctor: 'Gamma'};
var _moarwick$elm_webpack_starter$Formula$Beta = {ctor: 'Beta'};
var _moarwick$elm_webpack_starter$Formula$Alpha = {ctor: 'Alpha'};
var _moarwick$elm_webpack_starter$Formula$negType = function (t) {
	var _p44 = t;
	switch (_p44.ctor) {
		case 'Alpha':
			return _moarwick$elm_webpack_starter$Formula$Beta;
		case 'Beta':
			return _moarwick$elm_webpack_starter$Formula$Alpha;
		case 'Gamma':
			return _moarwick$elm_webpack_starter$Formula$Delta;
		default:
			return _moarwick$elm_webpack_starter$Formula$Gamma;
	}
};
var _moarwick$elm_webpack_starter$Formula$signedType = function (sf) {
	var _p45 = sf;
	if (_p45.ctor === 'T') {
		switch (_p45._0.ctor) {
			case 'FF':
				return _moarwick$elm_webpack_starter$Formula$Alpha;
			case 'FT':
				return _moarwick$elm_webpack_starter$Formula$Alpha;
			case 'Atom':
				return _moarwick$elm_webpack_starter$Formula$Alpha;
			case 'Neg':
				return _moarwick$elm_webpack_starter$Formula$Alpha;
			case 'Conj':
				return _moarwick$elm_webpack_starter$Formula$Alpha;
			case 'Disj':
				return _moarwick$elm_webpack_starter$Formula$Beta;
			case 'Impl':
				return _moarwick$elm_webpack_starter$Formula$Beta;
			case 'ForAll':
				return _moarwick$elm_webpack_starter$Formula$Gamma;
			default:
				return _moarwick$elm_webpack_starter$Formula$Delta;
		}
	} else {
		switch (_p45._0.ctor) {
			case 'Atom':
				return _moarwick$elm_webpack_starter$Formula$Alpha;
			case 'Neg':
				return _moarwick$elm_webpack_starter$Formula$Alpha;
			default:
				return _moarwick$elm_webpack_starter$Formula$negType(
					_moarwick$elm_webpack_starter$Formula$signedType(
						_moarwick$elm_webpack_starter$Formula$T(_p45._0)));
		}
	}
};
var _moarwick$elm_webpack_starter$Formula$isBeta = function (x) {
	return _elm_lang$core$Native_Utils.eq(
		_moarwick$elm_webpack_starter$Formula$Beta,
		_moarwick$elm_webpack_starter$Formula$signedType(x));
};
var _moarwick$elm_webpack_starter$Formula$isGamma = function (x) {
	return _elm_lang$core$Native_Utils.eq(
		_moarwick$elm_webpack_starter$Formula$Gamma,
		_moarwick$elm_webpack_starter$Formula$signedType(x));
};
var _moarwick$elm_webpack_starter$Formula$isDelta = function (x) {
	return _elm_lang$core$Native_Utils.eq(
		_moarwick$elm_webpack_starter$Formula$Delta,
		_moarwick$elm_webpack_starter$Formula$signedType(x));
};
var _moarwick$elm_webpack_starter$Formula$isAlpha = function (x) {
	return _elm_lang$core$Native_Utils.eq(
		_moarwick$elm_webpack_starter$Formula$Alpha,
		_moarwick$elm_webpack_starter$Formula$signedType(x));
};

var _moarwick$elm_webpack_starter$Tableau$defGUI = {controlsShown: true};
var _moarwick$elm_webpack_starter$Tableau$defRef = {str: '', up: _elm_lang$core$Maybe$Nothing};
var _moarwick$elm_webpack_starter$Tableau$defNode = {
	id: 1,
	value: '',
	reference: _moarwick$elm_webpack_starter$Tableau$defRef,
	formula: _moarwick$elm_webpack_starter$Formula$parseSigned(''),
	gui: _moarwick$elm_webpack_starter$Tableau$defGUI
};
var _moarwick$elm_webpack_starter$Tableau$defSubstitution = {what: '', forWhat: ''};
var _moarwick$elm_webpack_starter$Tableau$Tableau = F2(
	function (a, b) {
		return {node: a, ext: b};
	});
var _moarwick$elm_webpack_starter$Tableau$Node = F5(
	function (a, b, c, d, e) {
		return {id: a, value: b, reference: c, formula: d, gui: e};
	});
var _moarwick$elm_webpack_starter$Tableau$GUI = function (a) {
	return {controlsShown: a};
};
var _moarwick$elm_webpack_starter$Tableau$Ref = F2(
	function (a, b) {
		return {str: a, up: b};
	});
var _moarwick$elm_webpack_starter$Tableau$Substitution = F2(
	function (a, b) {
		return {what: a, forWhat: b};
	});
var _moarwick$elm_webpack_starter$Tableau$Delta = F2(
	function (a, b) {
		return {ctor: 'Delta', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Tableau$Gamma = F2(
	function (a, b) {
		return {ctor: 'Gamma', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Tableau$Beta = F2(
	function (a, b) {
		return {ctor: 'Beta', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Tableau$Alpha = function (a) {
	return {ctor: 'Alpha', _0: a};
};
var _moarwick$elm_webpack_starter$Tableau$Closed = F2(
	function (a, b) {
		return {ctor: 'Closed', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Tableau$Open = {ctor: 'Open'};

var _moarwick$elm_webpack_starter$Zipper$closeControls = function (oldNode) {
	return _elm_lang$core$Native_Utils.update(
		oldNode,
		{
			gui: {controlsShown: false}
		});
};
var _moarwick$elm_webpack_starter$Zipper$renumberJustInRef = F3(
	function (ref, func, lengthOfPathFromFather) {
		var _p0 = ref.up;
		if (_p0.ctor === 'Just') {
			if (_p0._0 === 0) {
				return ref;
			} else {
				var _p1 = _p0._0;
				return (_elm_lang$core$Native_Utils.cmp(_p1, lengthOfPathFromFather) > -1) ? A2(
					_moarwick$elm_webpack_starter$Tableau$Ref,
					ref.str,
					_elm_lang$core$Maybe$Just(
						func(_p1))) : ref;
			}
		} else {
			return ref;
		}
	});
var _moarwick$elm_webpack_starter$Zipper$renumberJust = F3(
	function (t, f, lengthOfPathFromFather) {
		var _p2 = t.node.reference.up;
		if (_p2.ctor === 'Just') {
			if (_p2._0 === 0) {
				return t;
			} else {
				var oldNode = t.node;
				var oldReference = t.node.reference;
				var newNode = _elm_lang$core$Native_Utils.update(
					oldNode,
					{
						reference: A3(_moarwick$elm_webpack_starter$Zipper$renumberJustInRef, oldReference, f, lengthOfPathFromFather)
					});
				var newTableau = _elm_lang$core$Native_Utils.update(
					t,
					{node: newNode});
				return newTableau;
			}
		} else {
			return t;
		}
	});
var _moarwick$elm_webpack_starter$Zipper$renumberJusts = F3(
	function (tableau, f, lengthOfPathFromFather) {
		var _p3 = tableau.ext;
		switch (_p3.ctor) {
			case 'Alpha':
				return A2(
					_moarwick$elm_webpack_starter$Tableau$Tableau,
					tableau.node,
					_moarwick$elm_webpack_starter$Tableau$Alpha(
						A3(
							_moarwick$elm_webpack_starter$Zipper$renumberJusts,
							A3(_moarwick$elm_webpack_starter$Zipper$renumberJust, _p3._0, f, lengthOfPathFromFather),
							f,
							lengthOfPathFromFather + 1)));
			case 'Beta':
				return A2(
					_moarwick$elm_webpack_starter$Tableau$Tableau,
					tableau.node,
					A2(
						_moarwick$elm_webpack_starter$Tableau$Beta,
						A3(
							_moarwick$elm_webpack_starter$Zipper$renumberJusts,
							A3(_moarwick$elm_webpack_starter$Zipper$renumberJust, _p3._0, f, lengthOfPathFromFather),
							f,
							lengthOfPathFromFather + 1),
						A3(
							_moarwick$elm_webpack_starter$Zipper$renumberJusts,
							A3(_moarwick$elm_webpack_starter$Zipper$renumberJust, _p3._1, f, lengthOfPathFromFather),
							f,
							lengthOfPathFromFather + 1)));
			case 'Gamma':
				return A2(
					_moarwick$elm_webpack_starter$Tableau$Tableau,
					tableau.node,
					A2(
						_moarwick$elm_webpack_starter$Tableau$Gamma,
						A3(
							_moarwick$elm_webpack_starter$Zipper$renumberJusts,
							A3(_moarwick$elm_webpack_starter$Zipper$renumberJust, _p3._0, f, lengthOfPathFromFather),
							f,
							lengthOfPathFromFather + 1),
						_p3._1));
			case 'Delta':
				return A2(
					_moarwick$elm_webpack_starter$Tableau$Tableau,
					tableau.node,
					A2(
						_moarwick$elm_webpack_starter$Tableau$Delta,
						A3(
							_moarwick$elm_webpack_starter$Zipper$renumberJusts,
							A3(_moarwick$elm_webpack_starter$Zipper$renumberJust, _p3._0, f, lengthOfPathFromFather),
							f,
							lengthOfPathFromFather + 1),
						_p3._1));
			case 'Open':
				return tableau;
			default:
				return A2(
					_moarwick$elm_webpack_starter$Tableau$Tableau,
					tableau.node,
					A2(
						_moarwick$elm_webpack_starter$Tableau$Closed,
						A3(_moarwick$elm_webpack_starter$Zipper$renumberJustInRef, _p3._0, f, lengthOfPathFromFather + 1),
						A3(_moarwick$elm_webpack_starter$Zipper$renumberJustInRef, _p3._1, f, lengthOfPathFromFather + 1)));
		}
	});
var _moarwick$elm_webpack_starter$Zipper$setPair = F4(
	function (which, ref, r1, r2) {
		var _p4 = which;
		if (_p4 === 0) {
			return {ctor: '_Tuple2', _0: ref, _1: r2};
		} else {
			return {ctor: '_Tuple2', _0: r1, _1: ref};
		}
	});
var _moarwick$elm_webpack_starter$Zipper$renumber2 = F2(
	function (tableau, num) {
		var _p5 = tableau.ext;
		switch (_p5.ctor) {
			case 'Open':
				var ext = tableau.ext;
				var node = tableau.node;
				return {
					ctor: '_Tuple2',
					_0: A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_elm_lang$core$Native_Utils.update(
							node,
							{id: num + 1}),
						ext),
					_1: num + 1
				};
			case 'Alpha':
				var node = tableau.node;
				var _p6 = A2(_moarwick$elm_webpack_starter$Zipper$renumber2, _p5._0, num + 1);
				var new_tableau = _p6._0;
				var num1 = _p6._1;
				return {
					ctor: '_Tuple2',
					_0: A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_elm_lang$core$Native_Utils.update(
							node,
							{id: num + 1}),
						_moarwick$elm_webpack_starter$Tableau$Alpha(new_tableau)),
					_1: num1
				};
			case 'Beta':
				var node = tableau.node;
				var _p7 = A2(_moarwick$elm_webpack_starter$Zipper$renumber2, _p5._0, num + 1);
				var new_left = _p7._0;
				var num1 = _p7._1;
				var _p8 = A2(_moarwick$elm_webpack_starter$Zipper$renumber2, _p5._1, num1);
				var new_right = _p8._0;
				var num2 = _p8._1;
				return {
					ctor: '_Tuple2',
					_0: A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_elm_lang$core$Native_Utils.update(
							node,
							{id: num + 1}),
						A2(_moarwick$elm_webpack_starter$Tableau$Beta, new_left, new_right)),
					_1: num2
				};
			case 'Gamma':
				var node = tableau.node;
				var _p9 = A2(_moarwick$elm_webpack_starter$Zipper$renumber2, _p5._0, num + 1);
				var new_tableau = _p9._0;
				var num1 = _p9._1;
				return {
					ctor: '_Tuple2',
					_0: A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_elm_lang$core$Native_Utils.update(
							node,
							{id: num + 1}),
						A2(_moarwick$elm_webpack_starter$Tableau$Gamma, new_tableau, _p5._1)),
					_1: num1
				};
			case 'Delta':
				var node = tableau.node;
				var _p10 = A2(_moarwick$elm_webpack_starter$Zipper$renumber2, _p5._0, num + 1);
				var new_tableau = _p10._0;
				var num1 = _p10._1;
				return {
					ctor: '_Tuple2',
					_0: A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_elm_lang$core$Native_Utils.update(
							node,
							{id: num + 1}),
						A2(_moarwick$elm_webpack_starter$Tableau$Delta, new_tableau, _p5._1)),
					_1: num1
				};
			default:
				var ext = tableau.ext;
				var node = tableau.node;
				return {
					ctor: '_Tuple2',
					_0: A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_elm_lang$core$Native_Utils.update(
							node,
							{id: num + 1}),
						ext),
					_1: num + 1
				};
		}
	});
var _moarwick$elm_webpack_starter$Zipper$zSubstitution = function (_p11) {
	var _p12 = _p11;
	var _p13 = _p12._0.ext;
	switch (_p13.ctor) {
		case 'Gamma':
			return _elm_lang$core$Maybe$Just(_p13._1);
		case 'Delta':
			return _elm_lang$core$Maybe$Just(_p13._1);
		default:
			return _elm_lang$core$Maybe$Nothing;
	}
};
var _moarwick$elm_webpack_starter$Zipper$zTableau = function (_p14) {
	var _p15 = _p14;
	return _p15._0;
};
var _moarwick$elm_webpack_starter$Zipper$zNode = function (z) {
	return _moarwick$elm_webpack_starter$Zipper$zTableau(z).node;
};
var _moarwick$elm_webpack_starter$Zipper$modifyNode = F2(
	function (f, _p16) {
		var _p17 = _p16;
		return {
			ctor: '_Tuple2',
			_0: f(_p17._0),
			_1: _p17._1
		};
	});
var _moarwick$elm_webpack_starter$Zipper$modifyRef = F2(
	function (ref, z) {
		return A2(
			_moarwick$elm_webpack_starter$Zipper$modifyNode,
			function (tableau) {
				var nodetmp = tableau.node;
				return _elm_lang$core$Native_Utils.update(
					tableau,
					{
						node: _elm_lang$core$Native_Utils.update(
							nodetmp,
							{reference: ref})
					});
			},
			z);
	});
var _moarwick$elm_webpack_starter$Zipper$renumberJustInReferences = F2(
	function (f, z) {
		return A2(
			_moarwick$elm_webpack_starter$Zipper$modifyNode,
			function (tableau) {
				return A3(_moarwick$elm_webpack_starter$Zipper$renumberJusts, tableau, f, 0);
			},
			z);
	});
var _moarwick$elm_webpack_starter$Zipper$setFormula = function (text) {
	return _moarwick$elm_webpack_starter$Zipper$modifyNode(
		function (tableau) {
			var oldNode = tableau.node;
			return _elm_lang$core$Native_Utils.update(
				tableau,
				{
					node: _elm_lang$core$Native_Utils.update(
						oldNode,
						{
							value: text,
							formula: _moarwick$elm_webpack_starter$Formula$parseSigned(text)
						})
				});
		});
};
var _moarwick$elm_webpack_starter$Zipper$extendAlpha = function (z) {
	return A2(
		_moarwick$elm_webpack_starter$Zipper$modifyNode,
		function (tableau) {
			var _p18 = tableau.ext;
			switch (_p18.ctor) {
				case 'Open':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						_moarwick$elm_webpack_starter$Tableau$Alpha(
							A2(_moarwick$elm_webpack_starter$Tableau$Tableau, _moarwick$elm_webpack_starter$Tableau$defNode, _moarwick$elm_webpack_starter$Tableau$Open)));
				case 'Alpha':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						_moarwick$elm_webpack_starter$Tableau$Alpha(
							A2(
								_moarwick$elm_webpack_starter$Tableau$Tableau,
								_moarwick$elm_webpack_starter$Tableau$defNode,
								_moarwick$elm_webpack_starter$Tableau$Alpha(_p18._0))));
				case 'Beta':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						_moarwick$elm_webpack_starter$Tableau$Alpha(
							A2(
								_moarwick$elm_webpack_starter$Tableau$Tableau,
								_moarwick$elm_webpack_starter$Tableau$defNode,
								A2(_moarwick$elm_webpack_starter$Tableau$Beta, _p18._0, _p18._1))));
				case 'Gamma':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						_moarwick$elm_webpack_starter$Tableau$Alpha(
							A2(
								_moarwick$elm_webpack_starter$Tableau$Tableau,
								_moarwick$elm_webpack_starter$Tableau$defNode,
								A2(_moarwick$elm_webpack_starter$Tableau$Gamma, _p18._0, _p18._1))));
				case 'Delta':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						_moarwick$elm_webpack_starter$Tableau$Alpha(
							A2(
								_moarwick$elm_webpack_starter$Tableau$Tableau,
								_moarwick$elm_webpack_starter$Tableau$defNode,
								A2(_moarwick$elm_webpack_starter$Tableau$Delta, _p18._0, _p18._1))));
				default:
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						_moarwick$elm_webpack_starter$Tableau$Alpha(
							A2(
								_moarwick$elm_webpack_starter$Tableau$Tableau,
								_moarwick$elm_webpack_starter$Tableau$defNode,
								A2(_moarwick$elm_webpack_starter$Tableau$Closed, _p18._0, _p18._1))));
			}
		},
		z);
};
var _moarwick$elm_webpack_starter$Zipper$extendBeta = function (z) {
	return A2(
		_moarwick$elm_webpack_starter$Zipper$modifyNode,
		function (tableau) {
			var _p19 = tableau.ext;
			switch (_p19.ctor) {
				case 'Open':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						A2(
							_moarwick$elm_webpack_starter$Tableau$Beta,
							A2(_moarwick$elm_webpack_starter$Tableau$Tableau, _moarwick$elm_webpack_starter$Tableau$defNode, _moarwick$elm_webpack_starter$Tableau$Open),
							A2(_moarwick$elm_webpack_starter$Tableau$Tableau, _moarwick$elm_webpack_starter$Tableau$defNode, _moarwick$elm_webpack_starter$Tableau$Open)));
				case 'Alpha':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						A2(
							_moarwick$elm_webpack_starter$Tableau$Beta,
							A2(
								_moarwick$elm_webpack_starter$Tableau$Tableau,
								_moarwick$elm_webpack_starter$Tableau$defNode,
								_moarwick$elm_webpack_starter$Tableau$Alpha(_p19._0)),
							A2(_moarwick$elm_webpack_starter$Tableau$Tableau, _moarwick$elm_webpack_starter$Tableau$defNode, _moarwick$elm_webpack_starter$Tableau$Open)));
				case 'Beta':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						A2(
							_moarwick$elm_webpack_starter$Tableau$Beta,
							A2(
								_moarwick$elm_webpack_starter$Tableau$Tableau,
								_moarwick$elm_webpack_starter$Tableau$defNode,
								A2(_moarwick$elm_webpack_starter$Tableau$Beta, _p19._0, _p19._1)),
							A2(_moarwick$elm_webpack_starter$Tableau$Tableau, _moarwick$elm_webpack_starter$Tableau$defNode, _moarwick$elm_webpack_starter$Tableau$Open)));
				case 'Gamma':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						A2(
							_moarwick$elm_webpack_starter$Tableau$Beta,
							A2(
								_moarwick$elm_webpack_starter$Tableau$Tableau,
								_moarwick$elm_webpack_starter$Tableau$defNode,
								A2(_moarwick$elm_webpack_starter$Tableau$Gamma, _p19._0, _p19._1)),
							A2(_moarwick$elm_webpack_starter$Tableau$Tableau, _moarwick$elm_webpack_starter$Tableau$defNode, _moarwick$elm_webpack_starter$Tableau$Open)));
				case 'Delta':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						A2(
							_moarwick$elm_webpack_starter$Tableau$Beta,
							A2(
								_moarwick$elm_webpack_starter$Tableau$Tableau,
								_moarwick$elm_webpack_starter$Tableau$defNode,
								A2(_moarwick$elm_webpack_starter$Tableau$Delta, _p19._0, _p19._1)),
							A2(_moarwick$elm_webpack_starter$Tableau$Tableau, _moarwick$elm_webpack_starter$Tableau$defNode, _moarwick$elm_webpack_starter$Tableau$Open)));
				default:
					return tableau;
			}
		},
		z);
};
var _moarwick$elm_webpack_starter$Zipper$extendGamma = function (z) {
	return A2(
		_moarwick$elm_webpack_starter$Zipper$modifyNode,
		function (tableau) {
			var _p20 = tableau.ext;
			switch (_p20.ctor) {
				case 'Open':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						A2(
							_moarwick$elm_webpack_starter$Tableau$Gamma,
							A2(_moarwick$elm_webpack_starter$Tableau$Tableau, _moarwick$elm_webpack_starter$Tableau$defNode, _moarwick$elm_webpack_starter$Tableau$Open),
							_moarwick$elm_webpack_starter$Tableau$defSubstitution));
				case 'Alpha':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						A2(
							_moarwick$elm_webpack_starter$Tableau$Gamma,
							A2(
								_moarwick$elm_webpack_starter$Tableau$Tableau,
								_moarwick$elm_webpack_starter$Tableau$defNode,
								_moarwick$elm_webpack_starter$Tableau$Alpha(_p20._0)),
							_moarwick$elm_webpack_starter$Tableau$defSubstitution));
				case 'Beta':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						A2(
							_moarwick$elm_webpack_starter$Tableau$Gamma,
							A2(
								_moarwick$elm_webpack_starter$Tableau$Tableau,
								_moarwick$elm_webpack_starter$Tableau$defNode,
								A2(_moarwick$elm_webpack_starter$Tableau$Beta, _p20._0, _p20._1)),
							_moarwick$elm_webpack_starter$Tableau$defSubstitution));
				case 'Gamma':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						A2(
							_moarwick$elm_webpack_starter$Tableau$Gamma,
							A2(
								_moarwick$elm_webpack_starter$Tableau$Tableau,
								_moarwick$elm_webpack_starter$Tableau$defNode,
								A2(_moarwick$elm_webpack_starter$Tableau$Gamma, _p20._0, _p20._1)),
							_moarwick$elm_webpack_starter$Tableau$defSubstitution));
				case 'Delta':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						A2(
							_moarwick$elm_webpack_starter$Tableau$Gamma,
							A2(
								_moarwick$elm_webpack_starter$Tableau$Tableau,
								_moarwick$elm_webpack_starter$Tableau$defNode,
								A2(_moarwick$elm_webpack_starter$Tableau$Delta, _p20._0, _p20._1)),
							_moarwick$elm_webpack_starter$Tableau$defSubstitution));
				default:
					return tableau;
			}
		},
		z);
};
var _moarwick$elm_webpack_starter$Zipper$extendDelta = function (z) {
	return A2(
		_moarwick$elm_webpack_starter$Zipper$modifyNode,
		function (tableau) {
			var _p21 = tableau.ext;
			switch (_p21.ctor) {
				case 'Open':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						A2(
							_moarwick$elm_webpack_starter$Tableau$Delta,
							A2(_moarwick$elm_webpack_starter$Tableau$Tableau, _moarwick$elm_webpack_starter$Tableau$defNode, _moarwick$elm_webpack_starter$Tableau$Open),
							_moarwick$elm_webpack_starter$Tableau$defSubstitution));
				case 'Alpha':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						A2(
							_moarwick$elm_webpack_starter$Tableau$Delta,
							A2(
								_moarwick$elm_webpack_starter$Tableau$Tableau,
								_moarwick$elm_webpack_starter$Tableau$defNode,
								_moarwick$elm_webpack_starter$Tableau$Alpha(_p21._0)),
							_moarwick$elm_webpack_starter$Tableau$defSubstitution));
				case 'Beta':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						A2(
							_moarwick$elm_webpack_starter$Tableau$Delta,
							A2(
								_moarwick$elm_webpack_starter$Tableau$Tableau,
								_moarwick$elm_webpack_starter$Tableau$defNode,
								A2(_moarwick$elm_webpack_starter$Tableau$Beta, _p21._0, _p21._1)),
							_moarwick$elm_webpack_starter$Tableau$defSubstitution));
				case 'Gamma':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						A2(
							_moarwick$elm_webpack_starter$Tableau$Delta,
							A2(
								_moarwick$elm_webpack_starter$Tableau$Tableau,
								_moarwick$elm_webpack_starter$Tableau$defNode,
								A2(_moarwick$elm_webpack_starter$Tableau$Gamma, _p21._0, _p21._1)),
							_moarwick$elm_webpack_starter$Tableau$defSubstitution));
				case 'Delta':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_moarwick$elm_webpack_starter$Zipper$closeControls(tableau.node),
						A2(
							_moarwick$elm_webpack_starter$Tableau$Delta,
							A2(
								_moarwick$elm_webpack_starter$Tableau$Tableau,
								_moarwick$elm_webpack_starter$Tableau$defNode,
								A2(_moarwick$elm_webpack_starter$Tableau$Delta, _p21._0, _p21._1)),
							_moarwick$elm_webpack_starter$Tableau$defSubstitution));
				default:
					return tableau;
			}
		},
		z);
};
var _moarwick$elm_webpack_starter$Zipper$delete = function (z) {
	return A2(
		_moarwick$elm_webpack_starter$Zipper$modifyNode,
		function (tableau) {
			return A2(_moarwick$elm_webpack_starter$Tableau$Tableau, tableau.node, _moarwick$elm_webpack_starter$Tableau$Open);
		},
		z);
};
var _moarwick$elm_webpack_starter$Zipper$makeClosed = function (z) {
	return A2(
		_moarwick$elm_webpack_starter$Zipper$modifyNode,
		function (tableau) {
			var _p22 = tableau.ext;
			return A2(
				_moarwick$elm_webpack_starter$Tableau$Tableau,
				tableau.node,
				A2(_moarwick$elm_webpack_starter$Tableau$Closed, _moarwick$elm_webpack_starter$Tableau$defRef, _moarwick$elm_webpack_starter$Tableau$defRef));
		},
		z);
};
var _moarwick$elm_webpack_starter$Zipper$makeOpen = function (z) {
	return A2(
		_moarwick$elm_webpack_starter$Zipper$modifyNode,
		function (tableau) {
			var _p23 = tableau.ext;
			if (_p23.ctor === 'Closed') {
				return A2(_moarwick$elm_webpack_starter$Tableau$Tableau, tableau.node, _moarwick$elm_webpack_starter$Tableau$Open);
			} else {
				return tableau;
			}
		},
		z);
};
var _moarwick$elm_webpack_starter$Zipper$switchBetas = function (z) {
	return A2(
		_moarwick$elm_webpack_starter$Zipper$modifyNode,
		function (tableau) {
			var _p24 = tableau.ext;
			if (_p24.ctor === 'Beta') {
				return A2(
					_moarwick$elm_webpack_starter$Tableau$Tableau,
					tableau.node,
					A2(_moarwick$elm_webpack_starter$Tableau$Beta, _p24._1, _p24._0));
			} else {
				return tableau;
			}
		},
		z);
};
var _moarwick$elm_webpack_starter$Zipper$changeButtonAppearance = function (z) {
	return A2(
		_moarwick$elm_webpack_starter$Zipper$modifyNode,
		function (tableau) {
			var oldGUI = tableau.node.gui;
			var newGUI = _elm_lang$core$Native_Utils.update(
				oldGUI,
				{controlsShown: !oldGUI.controlsShown});
			var oldNode = tableau.node;
			var newNode = _elm_lang$core$Native_Utils.update(
				oldNode,
				{gui: newGUI});
			return _elm_lang$core$Native_Utils.update(
				tableau,
				{node: newNode});
		},
		z);
};
var _moarwick$elm_webpack_starter$Zipper$up = function (_p25) {
	var _p26 = _p25;
	var _p29 = _p26._0;
	var _p28 = _p26._1;
	var _p27 = _p28;
	if (_p27.ctor === '::') {
		switch (_p27._0.ctor) {
			case 'AlphaCrumb':
				return {
					ctor: '_Tuple2',
					_0: A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_p27._0._0,
						_moarwick$elm_webpack_starter$Tableau$Alpha(_p29)),
					_1: _p27._1
				};
			case 'BetaLeftCrumb':
				return {
					ctor: '_Tuple2',
					_0: A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_p27._0._0,
						A2(_moarwick$elm_webpack_starter$Tableau$Beta, _p29, _p27._0._1)),
					_1: _p27._1
				};
			case 'BetaRightCrumb':
				return {
					ctor: '_Tuple2',
					_0: A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_p27._0._0,
						A2(_moarwick$elm_webpack_starter$Tableau$Beta, _p27._0._1, _p29)),
					_1: _p27._1
				};
			case 'GammaCrumb':
				return {
					ctor: '_Tuple2',
					_0: A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_p27._0._0,
						A2(_moarwick$elm_webpack_starter$Tableau$Gamma, _p29, _p27._0._1)),
					_1: _p27._1
				};
			default:
				return {
					ctor: '_Tuple2',
					_0: A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						_p27._0._0,
						A2(_moarwick$elm_webpack_starter$Tableau$Delta, _p29, _p27._0._1)),
					_1: _p27._1
				};
		}
	} else {
		return {ctor: '_Tuple2', _0: _p29, _1: _p28};
	}
};
var _moarwick$elm_webpack_starter$Zipper$top = function (_p30) {
	top:
	while (true) {
		var _p31 = _p30;
		var _p34 = _p31._0;
		var _p33 = _p31._1;
		var _p32 = _p33;
		if (_p32.ctor === '[]') {
			return {ctor: '_Tuple2', _0: _p34, _1: _p33};
		} else {
			var _v20 = _moarwick$elm_webpack_starter$Zipper$up(
				{ctor: '_Tuple2', _0: _p34, _1: _p33});
			_p30 = _v20;
			continue top;
		}
	}
};
var _moarwick$elm_webpack_starter$Zipper$above = F2(
	function (n, z) {
		above:
		while (true) {
			var _p35 = n;
			if (_p35 === 0) {
				return z;
			} else {
				var _v22 = _p35 - 1,
					_v23 = _moarwick$elm_webpack_starter$Zipper$up(z);
				n = _v22;
				z = _v23;
				continue above;
			}
		}
	});
var _moarwick$elm_webpack_starter$Zipper$getFixedRef = F2(
	function (_p36, z) {
		var _p37 = _p36;
		var _p39 = _p37;
		var _p38 = _p37.up;
		if (_p38.ctor === 'Nothing') {
			return _elm_lang$core$Native_Utils.update(
				_p39,
				{str: ''});
		} else {
			return _elm_lang$core$Native_Utils.update(
				_p39,
				{
					str: _elm_lang$core$Basics$toString(
						function (_) {
							return _.id;
						}(
							_moarwick$elm_webpack_starter$Zipper$zNode(
								A2(_moarwick$elm_webpack_starter$Zipper$above, _p38._0, z))))
				});
		}
	});
var _moarwick$elm_webpack_starter$Zipper$fixNodeRef = function (z) {
	return A2(
		_moarwick$elm_webpack_starter$Zipper$modifyNode,
		function (t) {
			var nodetmp = t.node;
			return _elm_lang$core$Native_Utils.update(
				t,
				{
					node: _elm_lang$core$Native_Utils.update(
						nodetmp,
						{
							reference: A2(_moarwick$elm_webpack_starter$Zipper$getFixedRef, nodetmp.reference, z)
						})
				});
		},
		z);
};
var _moarwick$elm_webpack_starter$Zipper$fixClosedRefs = function (z) {
	return A2(
		_moarwick$elm_webpack_starter$Zipper$modifyNode,
		function (t) {
			var node = t.node;
			var ext = t.ext;
			var _p40 = ext;
			if (_p40.ctor === 'Closed') {
				return A2(
					_moarwick$elm_webpack_starter$Tableau$Tableau,
					node,
					A2(
						_moarwick$elm_webpack_starter$Tableau$Closed,
						A2(_moarwick$elm_webpack_starter$Zipper$getFixedRef, _p40._0, z),
						A2(_moarwick$elm_webpack_starter$Zipper$getFixedRef, _p40._1, z)));
			} else {
				return t;
			}
		},
		z);
};
var _moarwick$elm_webpack_starter$Zipper$getReffed = F2(
	function (r, z) {
		return A2(
			_elm_lang$core$Maybe$map,
			A2(_elm_lang$core$Basics$flip, _moarwick$elm_webpack_starter$Zipper$above, z),
			r.up);
	});
var _moarwick$elm_webpack_starter$Zipper$findAbove = F2(
	function (ref, _p41) {
		var _p42 = _p41;
		var _p45 = _p42._0;
		var _p44 = _p42._1;
		var node = _p45.node;
		if (_elm_lang$core$Native_Utils.eq(node.id, ref)) {
			return _elm_lang$core$Maybe$Just(0);
		} else {
			var _p43 = _p44;
			if (_p43.ctor === '::') {
				return A2(
					_elm_lang$core$Maybe$map,
					F2(
						function (x, y) {
							return x + y;
						})(1),
					A2(
						_moarwick$elm_webpack_starter$Zipper$findAbove,
						ref,
						_moarwick$elm_webpack_starter$Zipper$up(
							{ctor: '_Tuple2', _0: _p45, _1: _p44})));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		}
	});
var _moarwick$elm_webpack_starter$Zipper$getRef = F2(
	function (ref, z) {
		return {
			str: ref,
			up: A2(
				_elm_lang$core$Maybe$andThen,
				A2(_elm_lang$core$Basics$flip, _moarwick$elm_webpack_starter$Zipper$findAbove, z),
				_elm_lang$core$Result$toMaybe(
					_elm_lang$core$String$toInt(ref)))
		};
	});
var _moarwick$elm_webpack_starter$Zipper$setRef = F2(
	function ($new, z) {
		return A2(
			_moarwick$elm_webpack_starter$Zipper$modifyRef,
			A2(_moarwick$elm_webpack_starter$Zipper$getRef, $new, z),
			z);
	});
var _moarwick$elm_webpack_starter$Zipper$setClosed = F3(
	function (which, newRefStr, z) {
		return A2(
			_moarwick$elm_webpack_starter$Zipper$modifyNode,
			function (tableau) {
				var _p46 = tableau.ext;
				if (_p46.ctor === 'Closed') {
					var newRef = A4(
						_moarwick$elm_webpack_starter$Zipper$setPair,
						which,
						A2(_moarwick$elm_webpack_starter$Zipper$getRef, newRefStr, z),
						_p46._0,
						_p46._1);
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						A2(
							_moarwick$elm_webpack_starter$Tableau$Closed,
							_elm_lang$core$Tuple$first(newRef),
							_elm_lang$core$Tuple$second(newRef)));
				} else {
					return tableau;
				}
			},
			z);
	});
var _moarwick$elm_webpack_starter$Zipper$deleteMe = function (z) {
	return _elm_lang$core$Native_Utils.eq(
		_moarwick$elm_webpack_starter$Zipper$up(z),
		z) ? A2(
		_moarwick$elm_webpack_starter$Zipper$modifyNode,
		function (tableau) {
			var _p47 = tableau.ext;
			switch (_p47.ctor) {
				case 'Open':
					return A2(_moarwick$elm_webpack_starter$Tableau$Tableau, _moarwick$elm_webpack_starter$Tableau$defNode, _moarwick$elm_webpack_starter$Tableau$Open);
				case 'Closed':
					return A2(_moarwick$elm_webpack_starter$Tableau$Tableau, _moarwick$elm_webpack_starter$Tableau$defNode, _moarwick$elm_webpack_starter$Tableau$Open);
				case 'Alpha':
					return _p47._0;
				case 'Beta':
					var _p49 = _p47._1;
					var _p48 = _p47._0;
					return _elm_lang$core$Native_Utils.eq(_p48.node.value, '') ? _p49 : (_elm_lang$core$Native_Utils.eq(_p49.node.value, '') ? _p48 : tableau);
				case 'Gamma':
					return _p47._0;
				default:
					return _p47._0;
			}
		},
		z) : A2(
		_moarwick$elm_webpack_starter$Zipper$modifyNode,
		function (tableau) {
			var _p50 = tableau.ext;
			switch (_p50.ctor) {
				case 'Open':
					return tableau;
				case 'Closed':
					return A2(_moarwick$elm_webpack_starter$Tableau$Tableau, tableau.node, _moarwick$elm_webpack_starter$Tableau$Open);
				case 'Alpha':
					return A2(_moarwick$elm_webpack_starter$Tableau$Tableau, tableau.node, _p50._0.ext);
				case 'Beta':
					var _p52 = _p50._1;
					var _p51 = _p50._0;
					return _elm_lang$core$Native_Utils.eq(_p51.node.value, '') ? A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						_moarwick$elm_webpack_starter$Tableau$Alpha(_p52)) : (_elm_lang$core$Native_Utils.eq(_p52.node.value, '') ? A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						_moarwick$elm_webpack_starter$Tableau$Alpha(_p51)) : A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						A2(_moarwick$elm_webpack_starter$Tableau$Beta, _p51, _p52)));
				case 'Gamma':
					return A2(_moarwick$elm_webpack_starter$Tableau$Tableau, tableau.node, _p50._0.ext);
				default:
					return A2(_moarwick$elm_webpack_starter$Tableau$Tableau, tableau.node, _p50._0.ext);
			}
		},
		_moarwick$elm_webpack_starter$Zipper$up(z));
};
var _moarwick$elm_webpack_starter$Zipper$changeVariable = F2(
	function (newVariable, z) {
		return A2(
			_moarwick$elm_webpack_starter$Zipper$modifyNode,
			function (tableau) {
				var _p53 = tableau.ext;
				switch (_p53.ctor) {
					case 'Gamma':
						return A2(
							_moarwick$elm_webpack_starter$Tableau$Tableau,
							tableau.node,
							A2(
								_moarwick$elm_webpack_starter$Tableau$Gamma,
								_p53._0,
								_elm_lang$core$Native_Utils.update(
									_p53._1,
									{forWhat: newVariable})));
					case 'Delta':
						return A2(
							_moarwick$elm_webpack_starter$Tableau$Tableau,
							tableau.node,
							A2(
								_moarwick$elm_webpack_starter$Tableau$Delta,
								_p53._0,
								_elm_lang$core$Native_Utils.update(
									_p53._1,
									{forWhat: newVariable})));
					default:
						return tableau;
				}
			},
			_moarwick$elm_webpack_starter$Zipper$up(z));
	});
var _moarwick$elm_webpack_starter$Zipper$changeTerm = F2(
	function (newTerm, z) {
		return A2(
			_moarwick$elm_webpack_starter$Zipper$modifyNode,
			function (tableau) {
				var _p54 = tableau.ext;
				switch (_p54.ctor) {
					case 'Gamma':
						return A2(
							_moarwick$elm_webpack_starter$Tableau$Tableau,
							tableau.node,
							A2(
								_moarwick$elm_webpack_starter$Tableau$Gamma,
								_p54._0,
								_elm_lang$core$Native_Utils.update(
									_p54._1,
									{what: newTerm})));
					case 'Delta':
						return A2(
							_moarwick$elm_webpack_starter$Tableau$Tableau,
							tableau.node,
							A2(
								_moarwick$elm_webpack_starter$Tableau$Delta,
								_p54._0,
								_elm_lang$core$Native_Utils.update(
									_p54._1,
									{what: newTerm})));
					default:
						return tableau;
				}
			},
			_moarwick$elm_webpack_starter$Zipper$up(z));
	});
var _moarwick$elm_webpack_starter$Zipper$changeToAlpha = function (z) {
	return _elm_lang$core$Native_Utils.eq(
		_moarwick$elm_webpack_starter$Zipper$up(z),
		z) ? z : A2(
		_moarwick$elm_webpack_starter$Zipper$modifyNode,
		function (tableau) {
			var _p55 = tableau.ext;
			switch (_p55.ctor) {
				case 'Beta':
					var _p57 = _p55._1;
					var _p56 = _p55._0;
					return _elm_lang$core$Native_Utils.eq(_p56.node.value, '') ? A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						_moarwick$elm_webpack_starter$Tableau$Alpha(_p57)) : (_elm_lang$core$Native_Utils.eq(_p57.node.value, '') ? A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						_moarwick$elm_webpack_starter$Tableau$Alpha(_p56)) : A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						A2(_moarwick$elm_webpack_starter$Tableau$Beta, _p56, _p57)));
				case 'Gamma':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						_moarwick$elm_webpack_starter$Tableau$Alpha(_p55._0));
				case 'Delta':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						_moarwick$elm_webpack_starter$Tableau$Alpha(_p55._0));
				default:
					return tableau;
			}
		},
		_moarwick$elm_webpack_starter$Zipper$up(z));
};
var _moarwick$elm_webpack_starter$Zipper$changeToBeta = function (z) {
	return _elm_lang$core$Native_Utils.eq(
		_moarwick$elm_webpack_starter$Zipper$up(z),
		z) ? z : A2(
		_moarwick$elm_webpack_starter$Zipper$modifyNode,
		function (tableau) {
			var _p58 = tableau.ext;
			switch (_p58.ctor) {
				case 'Alpha':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						A2(
							_moarwick$elm_webpack_starter$Tableau$Beta,
							_p58._0,
							A2(_moarwick$elm_webpack_starter$Tableau$Tableau, _moarwick$elm_webpack_starter$Tableau$defNode, _moarwick$elm_webpack_starter$Tableau$Open)));
				case 'Gamma':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						A2(
							_moarwick$elm_webpack_starter$Tableau$Beta,
							_p58._0,
							A2(_moarwick$elm_webpack_starter$Tableau$Tableau, _moarwick$elm_webpack_starter$Tableau$defNode, _moarwick$elm_webpack_starter$Tableau$Open)));
				case 'Delta':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						A2(
							_moarwick$elm_webpack_starter$Tableau$Beta,
							_p58._0,
							A2(_moarwick$elm_webpack_starter$Tableau$Tableau, _moarwick$elm_webpack_starter$Tableau$defNode, _moarwick$elm_webpack_starter$Tableau$Open)));
				default:
					return tableau;
			}
		},
		_moarwick$elm_webpack_starter$Zipper$up(z));
};
var _moarwick$elm_webpack_starter$Zipper$changeToGamma = function (z) {
	return _elm_lang$core$Native_Utils.eq(
		_moarwick$elm_webpack_starter$Zipper$up(z),
		z) ? z : A2(
		_moarwick$elm_webpack_starter$Zipper$modifyNode,
		function (tableau) {
			var _p59 = tableau.ext;
			switch (_p59.ctor) {
				case 'Alpha':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						A2(_moarwick$elm_webpack_starter$Tableau$Gamma, _p59._0, _moarwick$elm_webpack_starter$Tableau$defSubstitution));
				case 'Beta':
					var _p61 = _p59._1;
					var _p60 = _p59._0;
					return _elm_lang$core$Native_Utils.eq(_p60.node.value, '') ? A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						A2(_moarwick$elm_webpack_starter$Tableau$Gamma, _p61, _moarwick$elm_webpack_starter$Tableau$defSubstitution)) : (_elm_lang$core$Native_Utils.eq(_p61.node.value, '') ? A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						A2(_moarwick$elm_webpack_starter$Tableau$Gamma, _p60, _moarwick$elm_webpack_starter$Tableau$defSubstitution)) : A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						A2(_moarwick$elm_webpack_starter$Tableau$Beta, _p60, _p61)));
				case 'Delta':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						A2(_moarwick$elm_webpack_starter$Tableau$Gamma, _p59._0, _p59._1));
				default:
					return tableau;
			}
		},
		_moarwick$elm_webpack_starter$Zipper$up(z));
};
var _moarwick$elm_webpack_starter$Zipper$changeToDelta = function (z) {
	return _elm_lang$core$Native_Utils.eq(
		_moarwick$elm_webpack_starter$Zipper$up(z),
		z) ? z : A2(
		_moarwick$elm_webpack_starter$Zipper$modifyNode,
		function (tableau) {
			var _p62 = tableau.ext;
			switch (_p62.ctor) {
				case 'Alpha':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						A2(_moarwick$elm_webpack_starter$Tableau$Delta, _p62._0, _moarwick$elm_webpack_starter$Tableau$defSubstitution));
				case 'Beta':
					var _p64 = _p62._1;
					var _p63 = _p62._0;
					return _elm_lang$core$Native_Utils.eq(_p63.node.value, '') ? A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						A2(_moarwick$elm_webpack_starter$Tableau$Delta, _p64, _moarwick$elm_webpack_starter$Tableau$defSubstitution)) : (_elm_lang$core$Native_Utils.eq(_p64.node.value, '') ? A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						A2(_moarwick$elm_webpack_starter$Tableau$Delta, _p63, _moarwick$elm_webpack_starter$Tableau$defSubstitution)) : A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						A2(_moarwick$elm_webpack_starter$Tableau$Beta, _p63, _p64)));
				case 'Gamma':
					return A2(
						_moarwick$elm_webpack_starter$Tableau$Tableau,
						tableau.node,
						A2(_moarwick$elm_webpack_starter$Tableau$Delta, _p62._0, _p62._1));
				default:
					return tableau;
			}
		},
		_moarwick$elm_webpack_starter$Zipper$up(z));
};
var _moarwick$elm_webpack_starter$Zipper$zipper = function (t) {
	return {
		ctor: '_Tuple2',
		_0: t,
		_1: {ctor: '[]'}
	};
};
var _moarwick$elm_webpack_starter$Zipper$prettify = function (t) {
	var prettifyNode = function (n) {
		var newValue = function () {
			var _p65 = _moarwick$elm_webpack_starter$Formula$parseSigned(n.value);
			if (_p65.ctor === 'Ok') {
				return _moarwick$elm_webpack_starter$Formula$strSigned(_p65._0);
			} else {
				return n.value;
			}
		}();
		return _elm_lang$core$Native_Utils.update(
			n,
			{value: newValue});
	};
	var z = _moarwick$elm_webpack_starter$Zipper$zipper(t);
	return _moarwick$elm_webpack_starter$Zipper$zTableau(
		A2(
			_moarwick$elm_webpack_starter$Zipper$modifyNode,
			function (tableau) {
				var _p66 = tableau.ext;
				switch (_p66.ctor) {
					case 'Alpha':
						return A2(
							_moarwick$elm_webpack_starter$Tableau$Tableau,
							prettifyNode(tableau.node),
							_moarwick$elm_webpack_starter$Tableau$Alpha(
								_moarwick$elm_webpack_starter$Zipper$prettify(_p66._0)));
					case 'Beta':
						return A2(
							_moarwick$elm_webpack_starter$Tableau$Tableau,
							prettifyNode(tableau.node),
							A2(
								_moarwick$elm_webpack_starter$Tableau$Beta,
								_moarwick$elm_webpack_starter$Zipper$prettify(_p66._0),
								_moarwick$elm_webpack_starter$Zipper$prettify(_p66._1)));
					case 'Gamma':
						return A2(
							_moarwick$elm_webpack_starter$Tableau$Tableau,
							prettifyNode(tableau.node),
							A2(
								_moarwick$elm_webpack_starter$Tableau$Gamma,
								_moarwick$elm_webpack_starter$Zipper$prettify(_p66._0),
								_p66._1));
					case 'Delta':
						return A2(
							_moarwick$elm_webpack_starter$Tableau$Tableau,
							prettifyNode(tableau.node),
							A2(
								_moarwick$elm_webpack_starter$Tableau$Delta,
								_moarwick$elm_webpack_starter$Zipper$prettify(_p66._0),
								_p66._1));
					case 'Open':
						return A2(
							_moarwick$elm_webpack_starter$Tableau$Tableau,
							prettifyNode(tableau.node),
							_moarwick$elm_webpack_starter$Tableau$Open);
					default:
						return A2(
							_moarwick$elm_webpack_starter$Tableau$Tableau,
							prettifyNode(tableau.node),
							A2(_moarwick$elm_webpack_starter$Tableau$Closed, _p66._0, _p66._1));
				}
			},
			z));
};
var _moarwick$elm_webpack_starter$Zipper$DeltaCrumb = F2(
	function (a, b) {
		return {ctor: 'DeltaCrumb', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Zipper$GammaCrumb = F2(
	function (a, b) {
		return {ctor: 'GammaCrumb', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Zipper$BetaRightCrumb = F2(
	function (a, b) {
		return {ctor: 'BetaRightCrumb', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Zipper$right = function (_p67) {
	var _p68 = _p67;
	var _p71 = _p68._0;
	var _p70 = _p68._1;
	var _p69 = _p71.ext;
	if (_p69.ctor === 'Beta') {
		return {
			ctor: '_Tuple2',
			_0: _p69._1,
			_1: {
				ctor: '::',
				_0: A2(_moarwick$elm_webpack_starter$Zipper$BetaRightCrumb, _p71.node, _p69._0),
				_1: _p70
			}
		};
	} else {
		return {ctor: '_Tuple2', _0: _p71, _1: _p70};
	}
};
var _moarwick$elm_webpack_starter$Zipper$BetaLeftCrumb = F2(
	function (a, b) {
		return {ctor: 'BetaLeftCrumb', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Zipper$left = function (_p72) {
	var _p73 = _p72;
	var _p76 = _p73._0;
	var _p75 = _p73._1;
	var _p74 = _p76.ext;
	if (_p74.ctor === 'Beta') {
		return {
			ctor: '_Tuple2',
			_0: _p74._0,
			_1: {
				ctor: '::',
				_0: A2(_moarwick$elm_webpack_starter$Zipper$BetaLeftCrumb, _p76.node, _p74._1),
				_1: _p75
			}
		};
	} else {
		return {ctor: '_Tuple2', _0: _p76, _1: _p75};
	}
};
var _moarwick$elm_webpack_starter$Zipper$AlphaCrumb = function (a) {
	return {ctor: 'AlphaCrumb', _0: a};
};
var _moarwick$elm_webpack_starter$Zipper$down = function (_p77) {
	var _p78 = _p77;
	var _p81 = _p78._0;
	var _p80 = _p78._1;
	var _p79 = _p81.ext;
	switch (_p79.ctor) {
		case 'Alpha':
			return {
				ctor: '_Tuple2',
				_0: _p79._0,
				_1: {
					ctor: '::',
					_0: _moarwick$elm_webpack_starter$Zipper$AlphaCrumb(_p81.node),
					_1: _p80
				}
			};
		case 'Gamma':
			return {
				ctor: '_Tuple2',
				_0: _p79._0,
				_1: {
					ctor: '::',
					_0: A2(_moarwick$elm_webpack_starter$Zipper$GammaCrumb, _p81.node, _p79._1),
					_1: _p80
				}
			};
		case 'Delta':
			return {
				ctor: '_Tuple2',
				_0: _p79._0,
				_1: {
					ctor: '::',
					_0: A2(_moarwick$elm_webpack_starter$Zipper$DeltaCrumb, _p81.node, _p79._1),
					_1: _p80
				}
			};
		default:
			return {ctor: '_Tuple2', _0: _p81, _1: _p80};
	}
};
var _moarwick$elm_webpack_starter$Zipper$children = function (z) {
	var _p82 = z;
	var t = _p82._0;
	var bs = _p82._1;
	var _p83 = t.ext;
	switch (_p83.ctor) {
		case 'Open':
			return {ctor: '[]'};
		case 'Closed':
			return {ctor: '[]'};
		case 'Alpha':
			return {
				ctor: '::',
				_0: _moarwick$elm_webpack_starter$Zipper$down(z),
				_1: {ctor: '[]'}
			};
		case 'Beta':
			return {
				ctor: '::',
				_0: _moarwick$elm_webpack_starter$Zipper$left(z),
				_1: {
					ctor: '::',
					_0: _moarwick$elm_webpack_starter$Zipper$right(z),
					_1: {ctor: '[]'}
				}
			};
		case 'Gamma':
			return {
				ctor: '::',
				_0: _moarwick$elm_webpack_starter$Zipper$down(z),
				_1: {ctor: '[]'}
			};
		default:
			return {
				ctor: '::',
				_0: _moarwick$elm_webpack_starter$Zipper$down(z),
				_1: {ctor: '[]'}
			};
	}
};
var _moarwick$elm_webpack_starter$Zipper$zWalkPost = F2(
	function (f, _p84) {
		var _p85 = _p84;
		var _p87 = _p85;
		var _p86 = _p85._0.ext;
		switch (_p86.ctor) {
			case 'Open':
				return f(_p87);
			case 'Closed':
				return f(_p87);
			case 'Alpha':
				return f(
					_moarwick$elm_webpack_starter$Zipper$up(
						A2(
							_moarwick$elm_webpack_starter$Zipper$zWalkPost,
							f,
							_moarwick$elm_webpack_starter$Zipper$down(_p87))));
			case 'Beta':
				return f(
					_moarwick$elm_webpack_starter$Zipper$up(
						A2(
							_moarwick$elm_webpack_starter$Zipper$zWalkPost,
							f,
							_moarwick$elm_webpack_starter$Zipper$right(
								_moarwick$elm_webpack_starter$Zipper$up(
									A2(
										_moarwick$elm_webpack_starter$Zipper$zWalkPost,
										f,
										_moarwick$elm_webpack_starter$Zipper$left(_p87)))))));
			case 'Gamma':
				return f(
					_moarwick$elm_webpack_starter$Zipper$up(
						A2(
							_moarwick$elm_webpack_starter$Zipper$zWalkPost,
							f,
							_moarwick$elm_webpack_starter$Zipper$down(_p87))));
			default:
				return f(
					_moarwick$elm_webpack_starter$Zipper$up(
						A2(
							_moarwick$elm_webpack_starter$Zipper$zWalkPost,
							f,
							_moarwick$elm_webpack_starter$Zipper$down(_p87))));
		}
	});
var _moarwick$elm_webpack_starter$Zipper$fixRefs = _moarwick$elm_webpack_starter$Zipper$zWalkPost(
	function (_p88) {
		return _moarwick$elm_webpack_starter$Zipper$fixClosedRefs(
			_moarwick$elm_webpack_starter$Zipper$fixNodeRef(_p88));
	});
var _moarwick$elm_webpack_starter$Zipper$renumber = function (tableau) {
	return _moarwick$elm_webpack_starter$Zipper$zTableau(
		_moarwick$elm_webpack_starter$Zipper$top(
			_moarwick$elm_webpack_starter$Zipper$fixRefs(
				_moarwick$elm_webpack_starter$Zipper$zipper(
					_elm_lang$core$Tuple$first(
						A2(_moarwick$elm_webpack_starter$Zipper$renumber2, tableau, 0))))));
};

var _moarwick$elm_webpack_starter$Validate$checkNewVariable = F3(
	function (pred, x, z) {
		var _p0 = pred(
			A2(
				_elm_lang$core$Maybe$withDefault,
				'',
				A2(
					_elm_lang$core$Maybe$map,
					function (_) {
						return _.what;
					},
					_moarwick$elm_webpack_starter$Zipper$zSubstitution(
						_moarwick$elm_webpack_starter$Zipper$up(z)))));
		if (_p0 === true) {
			return _elm_lang$core$Result$Ok(z);
		} else {
			return _elm_lang$core$Result$Err(x);
		}
	});
var _moarwick$elm_webpack_starter$Validate$isSubstituable = F3(
	function (s, $new, original) {
		var trySubs = F2(
			function (s, f) {
				var _p1 = A2(_moarwick$elm_webpack_starter$Formula$substitute, s, f);
				if (_p1.ctor === 'Ok') {
					return true;
				} else {
					return false;
				}
			});
		var removeQuantifierAndSubstitute = F2(
			function (substitution, original) {
				removeQuantifierAndSubstitute:
				while (true) {
					var _p2 = original;
					switch (_p2.ctor) {
						case 'ForAll':
							if (A2(
								_elm_lang$core$List$member,
								_p2._0,
								_elm_lang$core$Dict$keys(substitution))) {
								var _v3 = substitution,
									_v4 = _p2._1;
								substitution = _v3;
								original = _v4;
								continue removeQuantifierAndSubstitute;
							} else {
								return A2(trySubs, substitution, original);
							}
						case 'Exists':
							if (A2(
								_elm_lang$core$List$member,
								_p2._0,
								_elm_lang$core$Dict$keys(substitution))) {
								var _v5 = substitution,
									_v6 = _p2._1;
								substitution = _v5;
								original = _v6;
								continue removeQuantifierAndSubstitute;
							} else {
								return A2(trySubs, substitution, original);
							}
						default:
							return A2(trySubs, substitution, original);
					}
				}
			});
		var removeSign = F2(
			function (s, sf) {
				var _p3 = sf;
				if (_p3.ctor === 'T') {
					return A2(removeQuantifierAndSubstitute, s, _p3._0);
				} else {
					return A2(removeQuantifierAndSubstitute, s, _p3._0);
				}
			});
		return A2(removeSign, s, original);
	});
var _moarwick$elm_webpack_starter$Validate$substitutionIsValid = F3(
	function (substitution, $new, original) {
		var checkSubstitution = function (r) {
			var _p4 = r;
			if (_p4.ctor === 'Ok') {
				return _p4._0;
			} else {
				return A2(
					_moarwick$elm_webpack_starter$Formula$Atom,
					'default',
					{ctor: '[]'});
			}
		};
		var applyToSigned = F3(
			function ($function, substitution, sf) {
				var _p5 = sf;
				if (_p5.ctor === 'T') {
					return _moarwick$elm_webpack_starter$Formula$T(
						checkSubstitution(
							A2($function, substitution, _p5._0)));
				} else {
					return _moarwick$elm_webpack_starter$Formula$F(
						checkSubstitution(
							A2($function, substitution, _p5._0)));
				}
			});
		return _elm_lang$core$Native_Utils.eq(
			$new,
			A3(applyToSigned, _moarwick$elm_webpack_starter$Formula$removeQuantifierAndSubstitute, substitution, original));
	});
var _moarwick$elm_webpack_starter$Validate$getTermFromResult = function (r) {
	var _p6 = r;
	if (_p6.ctor === 'Ok') {
		return _p6._0;
	} else {
		return A2(
			_moarwick$elm_webpack_starter$Formula$Fun,
			'default',
			{ctor: '[]'});
	}
};
var _moarwick$elm_webpack_starter$Validate$makeS = function (subs) {
	var newTerm = _moarwick$elm_webpack_starter$Validate$getTermFromResult(
		_moarwick$elm_webpack_starter$Formula$parseTerm(subs.what));
	return _elm_lang$core$Dict$fromList(
		{
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: subs.forWhat, _1: newTerm},
			_1: {ctor: '[]'}
		});
};
var _moarwick$elm_webpack_starter$Validate$isNewVariableFunction = function (variable) {
	var _p7 = _moarwick$elm_webpack_starter$Validate$getTermFromResult(
		_moarwick$elm_webpack_starter$Formula$parseTerm(variable));
	if (_p7.ctor === 'Var') {
		return true;
	} else {
		return false;
	}
};
var _moarwick$elm_webpack_starter$Validate$isNewVariableVariable = F2(
	function (variable, _p8) {
		var _p9 = _moarwick$elm_webpack_starter$Validate$getTermFromResult(
			_moarwick$elm_webpack_starter$Formula$parseTerm(variable));
		if (_p9.ctor === 'Var') {
			return true;
		} else {
			return false;
		}
	});
var _moarwick$elm_webpack_starter$Validate$isSimilarAbove = F2(
	function (variable, z) {
		var maybeParsed = _moarwick$elm_webpack_starter$Formula$parseSigned(
			function (_) {
				return _.value;
			}(
				_moarwick$elm_webpack_starter$Zipper$zNode(z)));
		var _p10 = maybeParsed;
		if (_p10.ctor === 'Ok') {
			return A2(
				_elm_lang$core$Set$member,
				variable,
				_moarwick$elm_webpack_starter$Formula$freeFormula(
					_moarwick$elm_webpack_starter$Formula$signedGetFormula(_p10._0))) || (_elm_lang$core$Native_Utils.eq(
				_moarwick$elm_webpack_starter$Zipper$up(z),
				z) ? false : A2(
				_moarwick$elm_webpack_starter$Validate$isSimilarAbove,
				variable,
				_moarwick$elm_webpack_starter$Zipper$up(z)));
		} else {
			return false;
		}
	});
var _moarwick$elm_webpack_starter$Validate$isNewVariableValid = F2(
	function (variable, z) {
		var _p11 = _moarwick$elm_webpack_starter$Validate$getTermFromResult(
			_moarwick$elm_webpack_starter$Formula$parseTerm(variable));
		if (_p11.ctor === 'Var') {
			return !A2(
				_moarwick$elm_webpack_starter$Validate$isSimilarAbove,
				variable,
				_moarwick$elm_webpack_starter$Zipper$up(z));
		} else {
			return false;
		}
	});
var _moarwick$elm_webpack_starter$Validate$checkPredicate = F3(
	function (pred, x, a) {
		return pred(a) ? _elm_lang$core$Result$Ok(a) : _elm_lang$core$Result$Err(x);
	});
var _moarwick$elm_webpack_starter$Validate$resultFromBool = F3(
	function (a, x, b) {
		return b ? _elm_lang$core$Result$Ok(a) : _elm_lang$core$Result$Err(x);
	});
var _moarwick$elm_webpack_starter$Validate$always2 = F3(
	function (r, _p13, _p12) {
		return r;
	});
var _moarwick$elm_webpack_starter$Validate$always3 = F4(
	function (r, _p16, _p15, _p14) {
		return r;
	});
var _moarwick$elm_webpack_starter$Validate$second = _elm_lang$core$Basics$curry(_elm_lang$core$Tuple$second);
var _moarwick$elm_webpack_starter$Validate_ops = _moarwick$elm_webpack_starter$Validate_ops || {};
_moarwick$elm_webpack_starter$Validate_ops['<++'] = F2(
	function (_p17, f) {
		var _p18 = _p17;
		var _p19 = _p18._1;
		return {
			ctor: '_Tuple2',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				_p18._0,
				f(_p19)),
			_1: _p19
		};
	});
var _moarwick$elm_webpack_starter$Validate$error = F2(
	function (def, r) {
		var _p20 = r;
		if (_p20.ctor === 'Err') {
			return _p20._0;
		} else {
			return def;
		}
	});
var _moarwick$elm_webpack_starter$Validate_ops = _moarwick$elm_webpack_starter$Validate_ops || {};
_moarwick$elm_webpack_starter$Validate_ops['<++?'] = F2(
	function (_p21, f) {
		var _p22 = _p21;
		var _p23 = _p22._1;
		return {
			ctor: '_Tuple2',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				_p22._0,
				A2(
					_moarwick$elm_webpack_starter$Validate$error,
					{ctor: '[]'},
					f(_p23))),
			_1: _p23
		};
	});
var _moarwick$elm_webpack_starter$Validate$Problem = F3(
	function (a, b, c) {
		return {typ: a, msg: b, zip: c};
	});
var _moarwick$elm_webpack_starter$Validate$Semantics = {ctor: 'Semantics'};
var _moarwick$elm_webpack_starter$Validate$semanticsProblem = F2(
	function (z, s) {
		return {
			ctor: '::',
			_0: {typ: _moarwick$elm_webpack_starter$Validate$Semantics, msg: s, zip: z},
			_1: {ctor: '[]'}
		};
	});
var _moarwick$elm_webpack_starter$Validate$validateReffedFormula = function (z) {
	return A2(
		_elm_lang$core$Result$mapError,
		function (e) {
			return A2(_moarwick$elm_webpack_starter$Validate$semanticsProblem, z, 'Referenced formula is invalid');
		},
		function (_) {
			return _.formula;
		}(
			_moarwick$elm_webpack_starter$Zipper$zNode(z)));
};
var _moarwick$elm_webpack_starter$Validate$checkFormula = F2(
	function (str, z) {
		return A2(
			_elm_lang$core$Result$mapError,
			function (_p24) {
				return A2(
					_moarwick$elm_webpack_starter$Validate$semanticsProblem,
					z,
					A2(_elm_lang$core$Basics_ops['++'], str, ' is invalid.'));
			},
			function (_) {
				return _.formula;
			}(
				_moarwick$elm_webpack_starter$Zipper$zNode(z)));
	});
var _moarwick$elm_webpack_starter$Validate$checkReffedFormula = F3(
	function (str, r, z) {
		return A2(
			_elm_lang$core$Result$andThen,
			_moarwick$elm_webpack_starter$Validate$checkFormula(
				A2(_elm_lang$core$Basics_ops['++'], str, ' referenced formula')),
			A2(
				_elm_lang$core$Result$fromMaybe,
				A2(
					_moarwick$elm_webpack_starter$Validate$semanticsProblem,
					z,
					A2(_elm_lang$core$Basics_ops['++'], str, ' reference is invalid.')),
				A2(_moarwick$elm_webpack_starter$Zipper$getReffed, r, z)));
	});
var _moarwick$elm_webpack_starter$Validate$areCloseRefsComplementary = F3(
	function (r1, r2, z) {
		return A2(
			_elm_lang$core$Result$andThen,
			A2(
				_moarwick$elm_webpack_starter$Validate$resultFromBool,
				z,
				A2(_moarwick$elm_webpack_starter$Validate$semanticsProblem, z, 'Closing formulas are not complementary.')),
			A3(
				_moarwick$elm_webpack_starter$Errors$merge2,
				_moarwick$elm_webpack_starter$Formula$isSignedComplementary,
				A3(_moarwick$elm_webpack_starter$Validate$checkReffedFormula, 'First close', r1, z),
				A3(_moarwick$elm_webpack_starter$Validate$checkReffedFormula, 'Second close', r2, z)));
	});
var _moarwick$elm_webpack_starter$Validate$areCorrectCloseRefs = function (z) {
	var _p25 = _moarwick$elm_webpack_starter$Zipper$zTableau(z).ext;
	if (_p25.ctor === 'Closed') {
		return A2(
			_elm_lang$core$Result$map,
			_elm_lang$core$Basics$always(z),
			A3(_moarwick$elm_webpack_starter$Validate$areCloseRefsComplementary, _p25._0, _p25._1, z));
	} else {
		return _elm_lang$core$Result$Ok(z);
	}
};
var _moarwick$elm_webpack_starter$Validate$validateAlphaRule = function (z) {
	return A2(
		_elm_lang$core$Result$map,
		_elm_lang$core$Basics$always(z),
		A2(
			_elm_lang$core$Result$andThen,
			A2(
				_moarwick$elm_webpack_starter$Validate$checkPredicate,
				_elm_lang$core$Basics$uncurry(_moarwick$elm_webpack_starter$Formula$isSignedSubformulaOf),
				A2(
					_moarwick$elm_webpack_starter$Validate$semanticsProblem,
					z,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'Is not an α-subformula of (',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(
								A2(
									_elm_lang$core$Maybe$withDefault,
									0,
									A2(
										_elm_lang$core$Maybe$map,
										function (_p26) {
											return function (_) {
												return _.id;
											}(
												_moarwick$elm_webpack_starter$Zipper$zNode(_p26));
										},
										A2(
											_moarwick$elm_webpack_starter$Zipper$getReffed,
											_moarwick$elm_webpack_starter$Zipper$zNode(z).reference,
											z)))),
							').')))),
			A3(
				_elm_lang$core$Result$map2,
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				A2(_moarwick$elm_webpack_starter$Validate$checkFormula, 'Formula', z),
				A2(
					_elm_lang$core$Result$andThen,
					A2(
						_moarwick$elm_webpack_starter$Validate$checkPredicate,
						_moarwick$elm_webpack_starter$Formula$isAlpha,
						A2(_moarwick$elm_webpack_starter$Validate$semanticsProblem, z, 'Referenced formula is not α')),
					A2(
						_elm_lang$core$Result$andThen,
						_moarwick$elm_webpack_starter$Validate$validateReffedFormula,
						A2(
							_elm_lang$core$Result$fromMaybe,
							A2(_moarwick$elm_webpack_starter$Validate$semanticsProblem, z, 'Invalid reference.'),
							A2(
								_moarwick$elm_webpack_starter$Zipper$getReffed,
								_moarwick$elm_webpack_starter$Zipper$zNode(z).reference,
								z)))))));
};
var _moarwick$elm_webpack_starter$Validate$betasHaveSameRef = F2(
	function ($this, other) {
		var getRef = function (_p27) {
			return A2(
				_elm_lang$core$Result$fromMaybe,
				{ctor: '[]'},
				function (_) {
					return _.up;
				}(
					function (_) {
						return _.reference;
					}(
						_moarwick$elm_webpack_starter$Zipper$zNode(_p27))));
		};
		var rt = getRef($this);
		var ro = getRef(other);
		return A2(
			_elm_lang$core$Result$andThen,
			A2(
				_moarwick$elm_webpack_starter$Validate$resultFromBool,
				$this,
				A2(_moarwick$elm_webpack_starter$Validate$semanticsProblem, $this, 'β references are not the same')),
			A3(
				_moarwick$elm_webpack_starter$Errors$merge2,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					}),
				rt,
				ro));
	});
var _moarwick$elm_webpack_starter$Validate$validateBeta = F2(
	function ($this, other) {
		var reffed = A2(
			_elm_lang$core$Result$map,
			_elm_lang$core$List$sortBy(_moarwick$elm_webpack_starter$Formula$strSigned),
			A2(
				_elm_lang$core$Result$map,
				_moarwick$elm_webpack_starter$Formula$signedSubformulas,
				A2(
					_elm_lang$core$Result$andThen,
					A2(
						_moarwick$elm_webpack_starter$Validate$checkPredicate,
						_moarwick$elm_webpack_starter$Formula$isBeta,
						A2(_moarwick$elm_webpack_starter$Validate$semanticsProblem, $this, 'Referenced formula is not β')),
					A2(
						_elm_lang$core$Result$andThen,
						_moarwick$elm_webpack_starter$Validate$validateReffedFormula,
						A2(
							_elm_lang$core$Result$fromMaybe,
							A2(_moarwick$elm_webpack_starter$Validate$semanticsProblem, $this, 'Invalid reference'),
							A2(
								_moarwick$elm_webpack_starter$Zipper$getReffed,
								_moarwick$elm_webpack_starter$Zipper$zNode($this).reference,
								$this))))));
		var fo = A2(_moarwick$elm_webpack_starter$Validate$checkFormula, 'The other β subformula', other);
		var ft = A2(_moarwick$elm_webpack_starter$Validate$checkFormula, 'Formula', $this);
		var children = A2(
			_elm_lang$core$Result$map,
			_elm_lang$core$List$sortBy(_moarwick$elm_webpack_starter$Formula$strSigned),
			A3(
				_elm_lang$core$Result$map2,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				fo,
				A2(_elm_lang$core$Result$map, _elm_lang$core$List$singleton, ft)));
		return A3(
			_moarwick$elm_webpack_starter$Errors$merge2,
			_moarwick$elm_webpack_starter$Validate$always2($this),
			A2(_moarwick$elm_webpack_starter$Validate$betasHaveSameRef, $this, other),
			A2(
				_elm_lang$core$Result$andThen,
				A2(
					_moarwick$elm_webpack_starter$Validate$resultFromBool,
					$this,
					A2(_moarwick$elm_webpack_starter$Validate$semanticsProblem, $this, 'Wrong β subformulas.')),
				A3(
					_moarwick$elm_webpack_starter$Errors$merge2,
					F2(
						function (x, y) {
							return _elm_lang$core$Native_Utils.eq(x, y);
						}),
					children,
					reffed)));
	});
var _moarwick$elm_webpack_starter$Validate$validateBetaRuleLeft = function (z) {
	return A2(
		_moarwick$elm_webpack_starter$Validate$validateBeta,
		z,
		_moarwick$elm_webpack_starter$Zipper$right(
			_moarwick$elm_webpack_starter$Zipper$up(z)));
};
var _moarwick$elm_webpack_starter$Validate$validateBetaRuleRight = function (z) {
	return A2(
		_moarwick$elm_webpack_starter$Validate$validateBeta,
		z,
		_moarwick$elm_webpack_starter$Zipper$left(
			_moarwick$elm_webpack_starter$Zipper$up(z)));
};
var _moarwick$elm_webpack_starter$Validate$validateGammaRule = function (z) {
	return A2(
		_elm_lang$core$Result$map,
		_elm_lang$core$Basics$always(z),
		A2(
			_elm_lang$core$Result$andThen,
			A2(
				_moarwick$elm_webpack_starter$Validate$checkPredicate,
				_elm_lang$core$Basics$uncurry(
					_moarwick$elm_webpack_starter$Validate$substitutionIsValid(
						A2(
							_elm_lang$core$Maybe$withDefault,
							_elm_lang$core$Dict$fromList(
								{ctor: '[]'}),
							A2(
								_elm_lang$core$Maybe$map,
								_moarwick$elm_webpack_starter$Validate$makeS,
								_moarwick$elm_webpack_starter$Zipper$zSubstitution(
									_moarwick$elm_webpack_starter$Zipper$up(z)))))),
				A2(
					_moarwick$elm_webpack_starter$Validate$semanticsProblem,
					z,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'This isn\'t valid γ-subformula created by substituting \'',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(
								_elm_lang$core$Maybe$withDefault,
								'',
								A2(
									_elm_lang$core$Maybe$map,
									function (s) {
										return _elm_lang$core$Native_Utils.eq(s, '') ? '_' : s;
									},
									A2(
										_elm_lang$core$Maybe$map,
										function (_) {
											return _.what;
										},
										_moarwick$elm_webpack_starter$Zipper$zSubstitution(
											_moarwick$elm_webpack_starter$Zipper$up(z))))),
							A2(
								_elm_lang$core$Basics_ops['++'],
								'\' for \'',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A2(
										_elm_lang$core$Maybe$withDefault,
										'',
										A2(
											_elm_lang$core$Maybe$map,
											function (s) {
												return _elm_lang$core$Native_Utils.eq(s, '') ? '_' : s;
											},
											A2(
												_elm_lang$core$Maybe$map,
												function (_) {
													return _.forWhat;
												},
												_moarwick$elm_webpack_starter$Zipper$zSubstitution(
													_moarwick$elm_webpack_starter$Zipper$up(z))))),
									A2(
										_elm_lang$core$Basics_ops['++'],
										'\' from (',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(
												A2(
													_elm_lang$core$Maybe$withDefault,
													0,
													A2(
														_elm_lang$core$Maybe$map,
														function (_p28) {
															return function (_) {
																return _.id;
															}(
																_moarwick$elm_webpack_starter$Zipper$zNode(_p28));
														},
														A2(
															_moarwick$elm_webpack_starter$Zipper$getReffed,
															_moarwick$elm_webpack_starter$Zipper$zNode(z).reference,
															z)))),
											').')))))))),
			A2(
				_elm_lang$core$Result$andThen,
				A2(
					_moarwick$elm_webpack_starter$Validate$checkPredicate,
					_elm_lang$core$Basics$uncurry(
						_moarwick$elm_webpack_starter$Validate$isSubstituable(
							A2(
								_elm_lang$core$Maybe$withDefault,
								_elm_lang$core$Dict$fromList(
									{ctor: '[]'}),
								A2(
									_elm_lang$core$Maybe$map,
									_moarwick$elm_webpack_starter$Validate$makeS,
									_moarwick$elm_webpack_starter$Zipper$zSubstitution(
										_moarwick$elm_webpack_starter$Zipper$up(z)))))),
					A2(
						_moarwick$elm_webpack_starter$Validate$semanticsProblem,
						z,
						A2(
							_elm_lang$core$Basics_ops['++'],
							'This is not substituable. Variable \'',
							A2(
								_elm_lang$core$Basics_ops['++'],
								A2(
									_elm_lang$core$Maybe$withDefault,
									'',
									A2(
										_elm_lang$core$Maybe$map,
										function (s) {
											return _elm_lang$core$Native_Utils.eq(s, '') ? '_' : s;
										},
										A2(
											_elm_lang$core$Maybe$map,
											function (_) {
												return _.what;
											},
											_moarwick$elm_webpack_starter$Zipper$zSubstitution(
												_moarwick$elm_webpack_starter$Zipper$up(z))))),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'\' is bound in referrenced formula (',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(
											A2(
												_elm_lang$core$Maybe$withDefault,
												0,
												A2(
													_elm_lang$core$Maybe$map,
													function (_p29) {
														return function (_) {
															return _.id;
														}(
															_moarwick$elm_webpack_starter$Zipper$zNode(_p29));
													},
													A2(
														_moarwick$elm_webpack_starter$Zipper$getReffed,
														_moarwick$elm_webpack_starter$Zipper$zNode(z).reference,
														z)))),
										'). Choose another variable.')))))),
				A3(
					_elm_lang$core$Result$map2,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					A2(_moarwick$elm_webpack_starter$Validate$checkFormula, 'Formula', z),
					A2(
						_elm_lang$core$Result$andThen,
						A2(
							_moarwick$elm_webpack_starter$Validate$checkPredicate,
							_moarwick$elm_webpack_starter$Formula$isGamma,
							A2(_moarwick$elm_webpack_starter$Validate$semanticsProblem, z, 'Referenced formula is not γ')),
						A2(
							_elm_lang$core$Result$andThen,
							_moarwick$elm_webpack_starter$Validate$validateReffedFormula,
							A2(
								_elm_lang$core$Result$fromMaybe,
								A2(_moarwick$elm_webpack_starter$Validate$semanticsProblem, z, 'Invalid reference.'),
								A2(
									_moarwick$elm_webpack_starter$Zipper$getReffed,
									_moarwick$elm_webpack_starter$Zipper$zNode(z).reference,
									z))))))));
};
var _moarwick$elm_webpack_starter$Validate$makeSemantic = _elm_lang$core$List$map(
	function (p) {
		return _elm_lang$core$Native_Utils.update(
			p,
			{typ: _moarwick$elm_webpack_starter$Validate$Semantics});
	});
var _moarwick$elm_webpack_starter$Validate$Syntax = {ctor: 'Syntax'};
var _moarwick$elm_webpack_starter$Validate$syntaxProblem = F2(
	function (z, s) {
		return {
			ctor: '::',
			_0: {typ: _moarwick$elm_webpack_starter$Validate$Syntax, msg: s, zip: z},
			_1: {ctor: '[]'}
		};
	});
var _moarwick$elm_webpack_starter$Validate$isValidRef = F3(
	function (str, r, z) {
		return A2(
			_elm_lang$core$Result$map,
			_elm_lang$core$Basics$always(z),
			A2(
				_elm_lang$core$Result$fromMaybe,
				A2(
					_moarwick$elm_webpack_starter$Validate$syntaxProblem,
					z,
					A2(_elm_lang$core$Basics_ops['++'], str, ' reference is invalid.')),
				r.up));
	});
var _moarwick$elm_webpack_starter$Validate$isValidNodeRef = function (z) {
	return A3(
		_moarwick$elm_webpack_starter$Validate$isValidRef,
		'The',
		_moarwick$elm_webpack_starter$Zipper$zNode(z).reference,
		z);
};
var _moarwick$elm_webpack_starter$Validate$areValidCloseRefs = function (z) {
	var _p30 = _moarwick$elm_webpack_starter$Zipper$zTableau(z).ext;
	if (_p30.ctor === 'Closed') {
		return A3(
			_moarwick$elm_webpack_starter$Errors$merge2,
			_moarwick$elm_webpack_starter$Validate$always2(z),
			A3(_moarwick$elm_webpack_starter$Validate$isValidRef, 'First close', _p30._0, z),
			A3(_moarwick$elm_webpack_starter$Validate$isValidRef, 'Second close', _p30._1, z));
	} else {
		return _elm_lang$core$Result$Ok(z);
	}
};
var _moarwick$elm_webpack_starter$Validate$parseProblem = function (z) {
	return function (_p31) {
		return A2(
			_moarwick$elm_webpack_starter$Validate$syntaxProblem,
			z,
			_moarwick$elm_webpack_starter$Formula$errorString(_p31));
	};
};
var _moarwick$elm_webpack_starter$Validate$isValidFormula = function (z) {
	return A2(
		_elm_lang$core$Result$map,
		_elm_lang$core$Basics$always(z),
		A2(
			_elm_lang$core$Result$mapError,
			_moarwick$elm_webpack_starter$Validate$parseProblem(z),
			function (_) {
				return _.formula;
			}(
				_moarwick$elm_webpack_starter$Zipper$zNode(z))));
};
var _moarwick$elm_webpack_starter$Validate$isValidNode = function (z) {
	return A4(
		_moarwick$elm_webpack_starter$Errors$merge3,
		_moarwick$elm_webpack_starter$Validate$always3(z),
		_moarwick$elm_webpack_starter$Validate$isValidFormula(z),
		_moarwick$elm_webpack_starter$Validate$isValidNodeRef(z),
		_moarwick$elm_webpack_starter$Validate$areValidCloseRefs(z));
};
var _moarwick$elm_webpack_starter$Validate$validateFormula = function (z) {
	return A2(
		_elm_lang$core$Result$mapError,
		_moarwick$elm_webpack_starter$Validate$parseProblem(z),
		function (_) {
			return _.formula;
		}(
			_moarwick$elm_webpack_starter$Zipper$zNode(z)));
};
var _moarwick$elm_webpack_starter$Validate$validateRef = F3(
	function (str, r, z) {
		var _p32 = r.up;
		if (_p32.ctor === 'Nothing') {
			return A2(_moarwick$elm_webpack_starter$Validate$syntaxProblem, z, str);
		} else {
			return {ctor: '[]'};
		}
	});
var _moarwick$elm_webpack_starter$Validate$validateNodeRef = function (z) {
	return A3(
		_moarwick$elm_webpack_starter$Validate$validateRef,
		'Invalid reference',
		_moarwick$elm_webpack_starter$Zipper$zNode(z).reference,
		z);
};
var _moarwick$elm_webpack_starter$Validate$getReffedSignedFormula = function (z) {
	var _p33 = A2(
		_moarwick$elm_webpack_starter$Zipper$getReffed,
		_moarwick$elm_webpack_starter$Zipper$zNode(z).reference,
		z);
	if (_p33.ctor === 'Just') {
		var _p34 = function (_) {
			return _.formula;
		}(
			_moarwick$elm_webpack_starter$Zipper$zNode(_p33._0));
		if (_p34.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p34._0);
		} else {
			return _elm_lang$core$Result$Err(
				A2(_moarwick$elm_webpack_starter$Validate$syntaxProblem, z, 'reffed formula incorrectly parsed'));
		}
	} else {
		return _elm_lang$core$Result$Err(
			A2(_moarwick$elm_webpack_starter$Validate$semanticsProblem, z, 'no reffed formula'));
	}
};
var _moarwick$elm_webpack_starter$Validate$validateDeltaRule = function (z) {
	return A2(
		_elm_lang$core$Result$map,
		_elm_lang$core$Basics$always(z),
		A2(
			_elm_lang$core$Result$andThen,
			A2(
				_moarwick$elm_webpack_starter$Validate$checkPredicate,
				_moarwick$elm_webpack_starter$Validate$isNewVariableValid(
					_moarwick$elm_webpack_starter$Formula$strTerm(
						A2(
							_elm_lang$core$Maybe$withDefault,
							_moarwick$elm_webpack_starter$Formula$Var('default'),
							_elm_lang$core$List$head(
								_elm_lang$core$Dict$values(
									A2(
										_elm_lang$core$Maybe$withDefault,
										_elm_lang$core$Dict$fromList(
											{ctor: '[]'}),
										A2(
											_elm_lang$core$Maybe$map,
											_moarwick$elm_webpack_starter$Validate$makeS,
											_moarwick$elm_webpack_starter$Zipper$zSubstitution(
												_moarwick$elm_webpack_starter$Zipper$up(z))))))))),
				A2(
					_moarwick$elm_webpack_starter$Validate$semanticsProblem,
					z,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'Substituting variable \'',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(
								_elm_lang$core$Maybe$withDefault,
								'',
								A2(
									_elm_lang$core$Maybe$map,
									function (s) {
										return _elm_lang$core$Native_Utils.eq(s, '') ? '_' : s;
									},
									A2(
										_elm_lang$core$Maybe$map,
										function (_) {
											return _.what;
										},
										_moarwick$elm_webpack_starter$Zipper$zSubstitution(
											_moarwick$elm_webpack_starter$Zipper$up(z))))),
							'\' was located above as free. Please choose another, not used yet. ')))),
			A2(
				_elm_lang$core$Result$map,
				_elm_lang$core$Basics$always(z),
				A2(
					_elm_lang$core$Result$andThen,
					A2(
						_moarwick$elm_webpack_starter$Validate$checkPredicate,
						_elm_lang$core$Basics$uncurry(
							_moarwick$elm_webpack_starter$Validate$substitutionIsValid(
								A2(
									_elm_lang$core$Maybe$withDefault,
									_elm_lang$core$Dict$fromList(
										{ctor: '[]'}),
									A2(
										_elm_lang$core$Maybe$map,
										_moarwick$elm_webpack_starter$Validate$makeS,
										_moarwick$elm_webpack_starter$Zipper$zSubstitution(
											_moarwick$elm_webpack_starter$Zipper$up(z)))))),
						A2(
							_moarwick$elm_webpack_starter$Validate$semanticsProblem,
							z,
							A2(
								_elm_lang$core$Basics_ops['++'],
								'This isn\'t valid delta-subformula created by substituting \'',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A2(
										_elm_lang$core$Maybe$withDefault,
										'',
										A2(
											_elm_lang$core$Maybe$map,
											function (s) {
												return _elm_lang$core$Native_Utils.eq(s, '') ? '_' : s;
											},
											A2(
												_elm_lang$core$Maybe$map,
												function (_) {
													return _.what;
												},
												_moarwick$elm_webpack_starter$Zipper$zSubstitution(
													_moarwick$elm_webpack_starter$Zipper$up(z))))),
									A2(
										_elm_lang$core$Basics_ops['++'],
										'\' for \'',
										A2(
											_elm_lang$core$Basics_ops['++'],
											A2(
												_elm_lang$core$Maybe$withDefault,
												'',
												A2(
													_elm_lang$core$Maybe$map,
													function (s) {
														return _elm_lang$core$Native_Utils.eq(s, '') ? '_' : s;
													},
													A2(
														_elm_lang$core$Maybe$map,
														function (_) {
															return _.forWhat;
														},
														_moarwick$elm_webpack_starter$Zipper$zSubstitution(
															_moarwick$elm_webpack_starter$Zipper$up(z))))),
											A2(
												_elm_lang$core$Basics_ops['++'],
												'\' from (',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_elm_lang$core$Basics$toString(
														A2(
															_elm_lang$core$Maybe$withDefault,
															0,
															A2(
																_elm_lang$core$Maybe$map,
																function (_p35) {
																	return function (_) {
																		return _.id;
																	}(
																		_moarwick$elm_webpack_starter$Zipper$zNode(_p35));
																},
																A2(
																	_moarwick$elm_webpack_starter$Zipper$getReffed,
																	_moarwick$elm_webpack_starter$Zipper$zNode(z).reference,
																	z)))),
													').')))))))),
					A2(
						_elm_lang$core$Result$andThen,
						A2(
							_moarwick$elm_webpack_starter$Validate$checkPredicate,
							_elm_lang$core$Basics$uncurry(
								_moarwick$elm_webpack_starter$Validate$isSubstituable(
									A2(
										_elm_lang$core$Maybe$withDefault,
										_elm_lang$core$Dict$fromList(
											{ctor: '[]'}),
										A2(
											_elm_lang$core$Maybe$map,
											_moarwick$elm_webpack_starter$Validate$makeS,
											_moarwick$elm_webpack_starter$Zipper$zSubstitution(
												_moarwick$elm_webpack_starter$Zipper$up(z)))))),
							A2(
								_moarwick$elm_webpack_starter$Validate$semanticsProblem,
								z,
								A2(
									_elm_lang$core$Basics_ops['++'],
									'This is not substituable. Variable \'',
									A2(
										_elm_lang$core$Basics_ops['++'],
										A2(
											_elm_lang$core$Maybe$withDefault,
											'',
											A2(
												_elm_lang$core$Maybe$map,
												function (s) {
													return _elm_lang$core$Native_Utils.eq(s, '') ? '_' : s;
												},
												A2(
													_elm_lang$core$Maybe$map,
													function (_) {
														return _.what;
													},
													_moarwick$elm_webpack_starter$Zipper$zSubstitution(
														_moarwick$elm_webpack_starter$Zipper$up(z))))),
										A2(
											_elm_lang$core$Basics_ops['++'],
											'\' is bound in referrenced formula (',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(
													A2(
														_elm_lang$core$Maybe$withDefault,
														0,
														A2(
															_elm_lang$core$Maybe$map,
															function (_p36) {
																return function (_) {
																	return _.id;
																}(
																	_moarwick$elm_webpack_starter$Zipper$zNode(_p36));
															},
															A2(
																_moarwick$elm_webpack_starter$Zipper$getReffed,
																_moarwick$elm_webpack_starter$Zipper$zNode(z).reference,
																z)))),
												'). Choose another variable.')))))),
						A3(
							_elm_lang$core$Result$map2,
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								}),
							A2(_moarwick$elm_webpack_starter$Validate$checkFormula, 'Formula', z),
							A2(
								_elm_lang$core$Result$andThen,
								function (z) {
									return _moarwick$elm_webpack_starter$Validate$getReffedSignedFormula(z);
								},
								A2(
									_elm_lang$core$Result$andThen,
									A2(
										_moarwick$elm_webpack_starter$Validate$checkNewVariable,
										_moarwick$elm_webpack_starter$Validate$isNewVariableFunction,
										A2(_moarwick$elm_webpack_starter$Validate$semanticsProblem, z, 'Your new variable can\'t be empty or function.')),
									A2(
										_elm_lang$core$Result$map,
										_elm_lang$core$Basics$always(z),
										A2(
											_elm_lang$core$Result$andThen,
											A2(
												_moarwick$elm_webpack_starter$Validate$checkPredicate,
												_moarwick$elm_webpack_starter$Formula$isDelta,
												A2(_moarwick$elm_webpack_starter$Validate$semanticsProblem, z, 'Referenced formula is not delta')),
											A2(
												_elm_lang$core$Result$andThen,
												_moarwick$elm_webpack_starter$Validate$validateReffedFormula,
												A2(
													_elm_lang$core$Result$fromMaybe,
													A2(_moarwick$elm_webpack_starter$Validate$semanticsProblem, z, 'Invalid reference.'),
													A2(
														_moarwick$elm_webpack_starter$Zipper$getReffed,
														_moarwick$elm_webpack_starter$Zipper$zNode(z).reference,
														z)))))))))))));
};
var _moarwick$elm_webpack_starter$Validate$isCorrectRule = function (_p37) {
	var _p38 = _p37;
	var _p41 = _p38;
	var _p39 = _p38._0.node.reference.up;
	if ((_p39.ctor === 'Just') && (_p39._0 === 0)) {
		return _elm_lang$core$Result$Ok(_p41);
	} else {
		var _p40 = _p38._1;
		if (_p40.ctor === '::') {
			switch (_p40._0.ctor) {
				case 'AlphaCrumb':
					return _moarwick$elm_webpack_starter$Validate$validateAlphaRule(_p41);
				case 'BetaLeftCrumb':
					return _moarwick$elm_webpack_starter$Validate$validateBetaRuleLeft(_p41);
				case 'BetaRightCrumb':
					return _moarwick$elm_webpack_starter$Validate$validateBetaRuleRight(_p41);
				case 'GammaCrumb':
					return _moarwick$elm_webpack_starter$Validate$validateGammaRule(_p41);
				default:
					return _moarwick$elm_webpack_starter$Validate$validateDeltaRule(_p41);
			}
		} else {
			return _elm_lang$core$Result$Ok(_p41);
		}
	}
};
var _moarwick$elm_webpack_starter$Validate$isCorrectNode = function (z) {
	return A2(
		_elm_lang$core$Result$andThen,
		function (_p42) {
			return A3(
				_moarwick$elm_webpack_starter$Errors$merge2,
				_moarwick$elm_webpack_starter$Validate$second,
				_moarwick$elm_webpack_starter$Validate$isCorrectRule(z),
				_moarwick$elm_webpack_starter$Validate$areCorrectCloseRefs(z));
		},
		_moarwick$elm_webpack_starter$Validate$isValidNode(z));
};
var _moarwick$elm_webpack_starter$Validate$isCorrectTableau = function (z) {
	return A3(
		_moarwick$elm_webpack_starter$Errors$merge2,
		_moarwick$elm_webpack_starter$Validate$always2(z),
		_moarwick$elm_webpack_starter$Validate$isCorrectNode(z),
		A3(
			_elm_lang$core$List$foldl,
			_moarwick$elm_webpack_starter$Errors$merge2(
				_moarwick$elm_webpack_starter$Validate$always2(z)),
			_elm_lang$core$Result$Ok(z),
			A2(
				_elm_lang$core$List$map,
				_moarwick$elm_webpack_starter$Validate$isCorrectTableau,
				_moarwick$elm_webpack_starter$Zipper$children(z))));
};
var _moarwick$elm_webpack_starter$Validate$isCorrectFormula = function (z) {
	return A2(
		_elm_lang$core$Result$andThen,
		_moarwick$elm_webpack_starter$Validate$isCorrectRule,
		_moarwick$elm_webpack_starter$Validate$isValidFormula(z));
};

var _moarwick$elm_webpack_starter$Helper$second = _elm_lang$core$Basics$curry(_elm_lang$core$Tuple$second);
var _moarwick$elm_webpack_starter$Helper$assumptions = function (z) {
	return A2(
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '[]'},
			A2(
				_elm_lang$core$Maybe$map,
				_elm_lang$core$List$singleton,
				A3(
					_elm_lang$core$Maybe$map2,
					_moarwick$elm_webpack_starter$Helper$second,
					A2(
						_elm_lang$core$Maybe$andThen,
						function (x) {
							return _elm_lang$core$Native_Utils.eq(x, 0) ? _elm_lang$core$Maybe$Just(
								{ctor: '_Tuple0'}) : _elm_lang$core$Maybe$Nothing;
						},
						_moarwick$elm_webpack_starter$Zipper$zNode(z).reference.up),
					_elm_lang$core$Result$toMaybe(
						function (_) {
							return _.formula;
						}(
							_moarwick$elm_webpack_starter$Zipper$zNode(z)))))),
		A2(
			_elm_lang$core$List$concatMap,
			_moarwick$elm_webpack_starter$Helper$assumptions,
			_moarwick$elm_webpack_starter$Zipper$children(z)));
};
var _moarwick$elm_webpack_starter$Helper$errors = function (r) {
	var _p0 = r;
	if (_p0.ctor === 'Err') {
		return _p0._0;
	} else {
		return {ctor: '[]'};
	}
};
var _moarwick$elm_webpack_starter$Helper$merge3 = F4(
	function (func, ra, rb, rc) {
		var _p1 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if ((((_p1.ctor === '_Tuple3') && (_p1._0.ctor === 'Ok')) && (_p1._1.ctor === 'Ok')) && (_p1._2.ctor === 'Ok')) {
			return _elm_lang$core$Result$Ok(
				A3(func, _p1._0._0, _p1._1._0, _p1._2._0));
		} else {
			return _elm_lang$core$Result$Err(
				A2(
					_elm_lang$core$Basics_ops['++'],
					_moarwick$elm_webpack_starter$Helper$errors(ra),
					A2(
						_elm_lang$core$Basics_ops['++'],
						_moarwick$elm_webpack_starter$Helper$errors(rb),
						_moarwick$elm_webpack_starter$Helper$errors(rc))));
		}
	});
var _moarwick$elm_webpack_starter$Helper$merge2 = F3(
	function (func, ra, rb) {
		var _p2 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p2._0.ctor === 'Ok') {
			if (_p2._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p2._0._0, _p2._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p2._1._0);
			}
		} else {
			if (_p2._1.ctor === 'Err') {
				return _elm_lang$core$Result$Err(
					A2(_elm_lang$core$Basics_ops['++'], _p2._0._0, _p2._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p2._0._0);
			}
		}
	});
var _moarwick$elm_webpack_starter$Helper$isClosed = function (z) {
	var _p3 = _moarwick$elm_webpack_starter$Zipper$zTableau(z).ext;
	switch (_p3.ctor) {
		case 'Alpha':
			return A3(
				_moarwick$elm_webpack_starter$Helper$merge2,
				_moarwick$elm_webpack_starter$Helper$second,
				_moarwick$elm_webpack_starter$Validate$isCorrectNode(z),
				_moarwick$elm_webpack_starter$Helper$isClosed(
					_moarwick$elm_webpack_starter$Zipper$down(z)));
		case 'Beta':
			return A4(
				_moarwick$elm_webpack_starter$Helper$merge3,
				F3(
					function (_p4, b, c) {
						return b && c;
					}),
				_moarwick$elm_webpack_starter$Validate$isCorrectNode(z),
				_moarwick$elm_webpack_starter$Helper$isClosed(
					_moarwick$elm_webpack_starter$Zipper$left(z)),
				_moarwick$elm_webpack_starter$Helper$isClosed(
					_moarwick$elm_webpack_starter$Zipper$right(z)));
		case 'Gamma':
			return A3(
				_moarwick$elm_webpack_starter$Helper$merge2,
				_moarwick$elm_webpack_starter$Helper$second,
				_moarwick$elm_webpack_starter$Validate$isCorrectNode(z),
				_moarwick$elm_webpack_starter$Helper$isClosed(
					_moarwick$elm_webpack_starter$Zipper$down(z)));
		case 'Delta':
			return A3(
				_moarwick$elm_webpack_starter$Helper$merge2,
				_moarwick$elm_webpack_starter$Helper$second,
				_moarwick$elm_webpack_starter$Validate$isCorrectNode(z),
				_moarwick$elm_webpack_starter$Helper$isClosed(
					_moarwick$elm_webpack_starter$Zipper$down(z)));
		case 'Open':
			return A2(
				_elm_lang$core$Result$map,
				_elm_lang$core$Basics$always(false),
				_moarwick$elm_webpack_starter$Validate$isCorrectNode(z));
		default:
			return A2(
				_elm_lang$core$Result$map,
				_elm_lang$core$Basics$always(true),
				_moarwick$elm_webpack_starter$Validate$isCorrectNode(z));
	}
};
var _moarwick$elm_webpack_starter$Helper$isPremise = function (z) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Basics$toString(
			_moarwick$elm_webpack_starter$Zipper$zNode(z).id),
		_moarwick$elm_webpack_starter$Zipper$zNode(z).reference.str);
};
var _moarwick$elm_webpack_starter$Helper$hasReference = function (z) {
	return _elm_lang$core$Native_Utils.eq(
		_moarwick$elm_webpack_starter$Zipper$zNode(z).reference.str,
		'') && (!_elm_lang$core$Native_Utils.eq(
		_moarwick$elm_webpack_starter$Zipper$zNode(z).value,
		''));
};

var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$reRef = function (z) {
	return A2(
		_moarwick$elm_webpack_starter$Zipper$modifyNode,
		function (t) {
			var _p0 = t.ext;
			if (_p0.ctor === 'Closed') {
				return A2(
					_moarwick$elm_webpack_starter$Tableau$Tableau,
					t.node,
					A2(
						_moarwick$elm_webpack_starter$Tableau$Closed,
						A2(_moarwick$elm_webpack_starter$Zipper$getRef, _p0._0.str, z),
						A2(_moarwick$elm_webpack_starter$Zipper$getRef, _p0._1.str, z)));
			} else {
				return t;
			}
		},
		A2(
			_moarwick$elm_webpack_starter$Zipper$setRef,
			function (_) {
				return _.str;
			}(
				function (_) {
					return _.reference;
				}(
					_moarwick$elm_webpack_starter$Zipper$zNode(z))),
			z));
};
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$reRefTableau = function (t) {
	return _moarwick$elm_webpack_starter$Zipper$zTableau(
		A2(
			_moarwick$elm_webpack_starter$Zipper$zWalkPost,
			_moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$reRef,
			_moarwick$elm_webpack_starter$Zipper$zipper(t)));
};
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$substitution = A3(
	_elm_lang$core$Json_Decode$map2,
	_moarwick$elm_webpack_starter$Tableau$Substitution,
	A2(_elm_lang$core$Json_Decode$field, 'what', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode$field, 'forWhat', _elm_lang$core$Json_Decode$string));
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$mkRef = function (str) {
	return {str: str, up: _elm_lang$core$Maybe$Nothing};
};
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$ref = A2(_elm_lang$core$Json_Decode$map, _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$mkRef, _elm_lang$core$Json_Decode$string);
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$closedRefs = A3(
	_elm_lang$core$Json_Decode$map2,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}),
	A2(_elm_lang$core$Json_Decode$index, 0, _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$ref),
	A2(_elm_lang$core$Json_Decode$index, 1, _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$ref));
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$node = A6(
	_elm_lang$core$Json_Decode$map5,
	_moarwick$elm_webpack_starter$Tableau$Node,
	A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode$field, 'value', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode$field, 'reference', _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$ref),
	A2(
		_elm_lang$core$Json_Decode$map,
		_moarwick$elm_webpack_starter$Formula$parseSigned,
		A2(_elm_lang$core$Json_Decode$field, 'value', _elm_lang$core$Json_Decode$string)),
	_elm_lang$core$Json_Decode$succeed(
		{controlsShown: false}));
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$open = A3(
	_elm_lang$core$Json_Decode$map2,
	_moarwick$elm_webpack_starter$Tableau$Tableau,
	A2(_elm_lang$core$Json_Decode$field, 'node', _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$node),
	_elm_lang$core$Json_Decode$succeed(_moarwick$elm_webpack_starter$Tableau$Open));
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$closed = A3(
	_elm_lang$core$Json_Decode$map2,
	_moarwick$elm_webpack_starter$Tableau$Tableau,
	A2(_elm_lang$core$Json_Decode$field, 'node', _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$node),
	A3(
		_elm_lang$core$Json_Decode$map2,
		_moarwick$elm_webpack_starter$Tableau$Closed,
		A2(
			_elm_lang$core$Json_Decode$map,
			_elm_lang$core$Tuple$first,
			A2(_elm_lang$core$Json_Decode$field, 'closed', _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$closedRefs)),
		A2(
			_elm_lang$core$Json_Decode$map,
			_elm_lang$core$Tuple$second,
			A2(_elm_lang$core$Json_Decode$field, 'closed', _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$closedRefs))));
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$gamma = A3(
	_elm_lang$core$Json_Decode$map2,
	_moarwick$elm_webpack_starter$Tableau$Tableau,
	A2(_elm_lang$core$Json_Decode$field, 'node', _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$node),
	A3(
		_elm_lang$core$Json_Decode$map2,
		_moarwick$elm_webpack_starter$Tableau$Gamma,
		A2(
			_elm_lang$core$Json_Decode$field,
			'child',
			_elm_lang$core$Json_Decode$lazy(
				function (_p1) {
					return _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$tableau;
				})),
		A2(_elm_lang$core$Json_Decode$field, 'substitution', _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$substitution)));
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$tableau = _elm_lang$core$Json_Decode$lazy(
	function (_p2) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			_moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$tblTypeDecoder,
			A2(_elm_lang$core$Json_Decode$field, 'type', _elm_lang$core$Json_Decode$string));
	});
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$tblTypeDecoder = function (typ) {
	var _p3 = typ;
	switch (_p3) {
		case 'open':
			return _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$open;
		case 'closed':
			return _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$closed;
		case 'alpha':
			return _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$alpha;
		case 'beta':
			return _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$beta;
		case 'gamma':
			return _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$gamma;
		case 'delta':
			return _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$delta;
		default:
			return _elm_lang$core$Json_Decode$fail(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'\'',
					A2(_elm_lang$core$Basics_ops['++'], typ, '\' is not a correct tableau node type')));
	}
};
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$alpha = A3(
	_elm_lang$core$Json_Decode$map2,
	_moarwick$elm_webpack_starter$Tableau$Tableau,
	A2(_elm_lang$core$Json_Decode$field, 'node', _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$node),
	A2(
		_elm_lang$core$Json_Decode$map,
		_moarwick$elm_webpack_starter$Tableau$Alpha,
		A2(
			_elm_lang$core$Json_Decode$field,
			'child',
			_elm_lang$core$Json_Decode$lazy(
				function (_p4) {
					return _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$tableau;
				}))));
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$beta = A3(
	_elm_lang$core$Json_Decode$map2,
	_moarwick$elm_webpack_starter$Tableau$Tableau,
	A2(_elm_lang$core$Json_Decode$field, 'node', _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$node),
	A3(
		_elm_lang$core$Json_Decode$map2,
		_moarwick$elm_webpack_starter$Tableau$Beta,
		A2(
			_elm_lang$core$Json_Decode$field,
			'leftChild',
			_elm_lang$core$Json_Decode$lazy(
				function (_p5) {
					return _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$tableau;
				})),
		A2(
			_elm_lang$core$Json_Decode$field,
			'rightChild',
			_elm_lang$core$Json_Decode$lazy(
				function (_p6) {
					return _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$tableau;
				}))));
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$delta = A3(
	_elm_lang$core$Json_Decode$map2,
	_moarwick$elm_webpack_starter$Tableau$Tableau,
	A2(_elm_lang$core$Json_Decode$field, 'node', _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$node),
	A3(
		_elm_lang$core$Json_Decode$map2,
		_moarwick$elm_webpack_starter$Tableau$Delta,
		A2(
			_elm_lang$core$Json_Decode$field,
			'child',
			_elm_lang$core$Json_Decode$lazy(
				function (_p7) {
					return _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$tableau;
				})),
		A2(_elm_lang$core$Json_Decode$field, 'substitution', _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$substitution)));
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$decode = function (s) {
	var fn = function (_p8) {
		return A2(
			_elm_lang$core$Result$map,
			_moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$reRefTableau,
			A2(_elm_lang$core$Json_Decode$decodeString, _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$tableau, _p8));
	};
	return fn(s);
};

var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonSubstitution = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'what',
				_1: _elm_lang$core$Json_Encode$string(_p1.what)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'forWhat',
					_1: _elm_lang$core$Json_Encode$string(_p1.forWhat)
				},
				_1: {ctor: '[]'}
			}
		});
};
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$encodeSubstitution = function (s) {
	return {
		ctor: '::',
		_0: {
			ctor: '_Tuple2',
			_0: 'substitution',
			_1: _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonSubstitution(s)
		},
		_1: {ctor: '[]'}
	};
};
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonRef = function (r) {
	return _elm_lang$core$Json_Encode$string(r.str);
};
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonNode = function (_p2) {
	var _p3 = _p2;
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'id',
				_1: _elm_lang$core$Json_Encode$int(_p3.id)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'value',
					_1: _elm_lang$core$Json_Encode$string(_p3.value)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'reference',
						_1: _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonRef(_p3.reference)
					},
					_1: {ctor: '[]'}
				}
			}
		});
};
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonNodeList = function (n) {
	return {
		ctor: '::',
		_0: {
			ctor: '_Tuple2',
			_0: 'node',
			_1: _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonNode(n)
		},
		_1: {ctor: '[]'}
	};
};
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonTblList = function (tableau) {
	var _p4 = tableau.ext;
	switch (_p4.ctor) {
		case 'Open':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'type',
						_1: _elm_lang$core$Json_Encode$string('open')
					},
					_1: {ctor: '[]'}
				},
				_moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonNodeList(tableau.node));
		case 'Closed':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'type',
						_1: _elm_lang$core$Json_Encode$string('closed')
					},
					_1: {ctor: '[]'}
				},
				A2(
					_elm_lang$core$Basics_ops['++'],
					_moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonNodeList(tableau.node),
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'closed',
							_1: _elm_lang$core$Json_Encode$list(
								{
									ctor: '::',
									_0: _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonRef(_p4._0),
									_1: {
										ctor: '::',
										_0: _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonRef(_p4._1),
										_1: {ctor: '[]'}
									}
								})
						},
						_1: {ctor: '[]'}
					}));
		case 'Alpha':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'type',
						_1: _elm_lang$core$Json_Encode$string('alpha')
					},
					_1: {ctor: '[]'}
				},
				A2(
					_elm_lang$core$Basics_ops['++'],
					_moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonNodeList(tableau.node),
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'child',
							_1: _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonTableau(_p4._0)
						},
						_1: {ctor: '[]'}
					}));
		case 'Beta':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'type',
						_1: _elm_lang$core$Json_Encode$string('beta')
					},
					_1: {ctor: '[]'}
				},
				A2(
					_elm_lang$core$Basics_ops['++'],
					_moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonNodeList(tableau.node),
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'leftChild',
							_1: _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonTableau(_p4._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'rightChild',
								_1: _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonTableau(_p4._1)
							},
							_1: {ctor: '[]'}
						}
					}));
		case 'Gamma':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'type',
						_1: _elm_lang$core$Json_Encode$string('gamma')
					},
					_1: {ctor: '[]'}
				},
				A2(
					_elm_lang$core$Basics_ops['++'],
					_moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonNodeList(tableau.node),
					A2(
						_elm_lang$core$Basics_ops['++'],
						{
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'child',
								_1: _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonTableau(_p4._0)
							},
							_1: {ctor: '[]'}
						},
						_moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$encodeSubstitution(_p4._1))));
		default:
			return A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'type',
						_1: _elm_lang$core$Json_Encode$string('delta')
					},
					_1: {ctor: '[]'}
				},
				A2(
					_elm_lang$core$Basics_ops['++'],
					_moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonNodeList(tableau.node),
					A2(
						_elm_lang$core$Basics_ops['++'],
						{
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'child',
								_1: _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonTableau(_p4._0)
							},
							_1: {ctor: '[]'}
						},
						_moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$encodeSubstitution(_p4._1))));
	}
};
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonTableau = function (t) {
	return _elm_lang$core$Json_Encode$object(
		_moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonTblList(t));
};
var _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$encode = F2(
	function (ind, t) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			A2(
				_elm_lang$core$Json_Encode$encode,
				ind,
				_moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$jsonTableau(t)),
			'\n');
	});

var _moarwick$elm_webpack_starter$Helpers_Exporting_Ports$fileSelected = _elm_lang$core$Native_Platform.outgoingPort(
	'fileSelected',
	function (v) {
		return v;
	});
var _moarwick$elm_webpack_starter$Helpers_Exporting_Ports$fileContentRead = _elm_lang$core$Native_Platform.incomingPort(
	'fileContentRead',
	A2(
		_elm_lang$core$Json_Decode$andThen,
		function (contents) {
			return A2(
				_elm_lang$core$Json_Decode$andThen,
				function (filename) {
					return A2(
						_elm_lang$core$Json_Decode$andThen,
						function (jsonImporting) {
							return A2(
								_elm_lang$core$Json_Decode$andThen,
								function (jsonImportError) {
									return A2(
										_elm_lang$core$Json_Decode$andThen,
										function (jsonImportId) {
											return _elm_lang$core$Json_Decode$succeed(
												{contents: contents, filename: filename, jsonImporting: jsonImporting, jsonImportError: jsonImportError, jsonImportId: jsonImportId});
										},
										A2(_elm_lang$core$Json_Decode$field, 'jsonImportId', _elm_lang$core$Json_Decode$string));
								},
								A2(_elm_lang$core$Json_Decode$field, 'jsonImportError', _elm_lang$core$Json_Decode$string));
						},
						A2(_elm_lang$core$Json_Decode$field, 'jsonImporting', _elm_lang$core$Json_Decode$bool));
				},
				A2(_elm_lang$core$Json_Decode$field, 'filename', _elm_lang$core$Json_Decode$string));
		},
		A2(_elm_lang$core$Json_Decode$field, 'contents', _elm_lang$core$Json_Decode$string)));
var _moarwick$elm_webpack_starter$Helpers_Exporting_Ports$FileReaderPortData = F5(
	function (a, b, c, d, e) {
		return {contents: a, filename: b, jsonImporting: c, jsonImportError: d, jsonImportId: e};
	});

var _moarwick$elm_webpack_starter$Rules$renderDelta = function (d) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('rule'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$table,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('tableau'),
					_1: {ctor: '[]'}
				},
				A2(
					_elm_lang$core$Basics_ops['++'],
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$tr,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$td,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('alpha'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(
											_moarwick$elm_webpack_starter$Formula$strSigned(d)),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					},
					A2(
						_elm_lang$core$List$map,
						function (f) {
							return A2(
								_elm_lang$html$Html$tr,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$td,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(
												_moarwick$elm_webpack_starter$Formula$strSigned(f)),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								});
						},
						_moarwick$elm_webpack_starter$Formula$signedSubformulas(d)))),
			_1: {ctor: '[]'}
		});
};
var _moarwick$elm_webpack_starter$Rules$renderGamma = function (g) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('rule'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$table,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('tableau'),
					_1: {ctor: '[]'}
				},
				A2(
					_elm_lang$core$Basics_ops['++'],
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$tr,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$td,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('alpha'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(
											_moarwick$elm_webpack_starter$Formula$strSigned(g)),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					},
					A2(
						_elm_lang$core$List$map,
						function (f) {
							return A2(
								_elm_lang$html$Html$tr,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$td,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(
												_moarwick$elm_webpack_starter$Formula$strSigned(f)),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								});
						},
						_moarwick$elm_webpack_starter$Formula$signedSubformulas(g)))),
			_1: {ctor: '[]'}
		});
};
var _moarwick$elm_webpack_starter$Rules$renderBeta = function (b) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('rule'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$table,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('tableau'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$tr,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$td,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('beta'),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$colspan(2),
										_1: {ctor: '[]'}
									}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(
										_moarwick$elm_webpack_starter$Formula$strSigned(b)),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$tr,
							{ctor: '[]'},
							A2(
								_elm_lang$core$List$map,
								function (f) {
									return A2(
										_elm_lang$html$Html$td,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(
												_moarwick$elm_webpack_starter$Formula$strSigned(f)),
											_1: {ctor: '[]'}
										});
								},
								_moarwick$elm_webpack_starter$Formula$signedSubformulas(b))),
						_1: {ctor: '[]'}
					}
				}),
			_1: {ctor: '[]'}
		});
};
var _moarwick$elm_webpack_starter$Rules$renderAlpha = function (a) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('rule'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$table,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('tableau'),
					_1: {ctor: '[]'}
				},
				A2(
					_elm_lang$core$Basics_ops['++'],
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$tr,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$td,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('beta'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(
											_moarwick$elm_webpack_starter$Formula$strSigned(a)),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					},
					A2(
						_elm_lang$core$List$map,
						function (f) {
							return A2(
								_elm_lang$html$Html$tr,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$td,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(
												_moarwick$elm_webpack_starter$Formula$strSigned(f)),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								});
						},
						_moarwick$elm_webpack_starter$Formula$signedSubformulas(a)))),
			_1: {ctor: '[]'}
		});
};
var _moarwick$elm_webpack_starter$Rules$fD = A2(
	_moarwick$elm_webpack_starter$Formula$Atom,
	'P',
	{
		ctor: '::',
		_0: _moarwick$elm_webpack_starter$Formula$Var('x'),
		_1: {ctor: '[]'}
	});
var _moarwick$elm_webpack_starter$Rules$deltas = {
	ctor: '::',
	_0: _moarwick$elm_webpack_starter$Formula$T(
		A2(_moarwick$elm_webpack_starter$Formula$ForAll, 'x', _moarwick$elm_webpack_starter$Rules$fD)),
	_1: {
		ctor: '::',
		_0: _moarwick$elm_webpack_starter$Formula$F(
			A2(_moarwick$elm_webpack_starter$Formula$Exists, 'x', _moarwick$elm_webpack_starter$Rules$fD)),
		_1: {ctor: '[]'}
	}
};
var _moarwick$elm_webpack_starter$Rules$fG = A2(
	_moarwick$elm_webpack_starter$Formula$Atom,
	'P',
	{
		ctor: '::',
		_0: _moarwick$elm_webpack_starter$Formula$Var('x'),
		_1: {ctor: '[]'}
	});
var _moarwick$elm_webpack_starter$Rules$gammas = {
	ctor: '::',
	_0: _moarwick$elm_webpack_starter$Formula$F(
		A2(_moarwick$elm_webpack_starter$Formula$ForAll, 'x', _moarwick$elm_webpack_starter$Rules$fG)),
	_1: {
		ctor: '::',
		_0: _moarwick$elm_webpack_starter$Formula$T(
			A2(_moarwick$elm_webpack_starter$Formula$Exists, 'x', _moarwick$elm_webpack_starter$Rules$fD)),
		_1: {ctor: '[]'}
	}
};
var _moarwick$elm_webpack_starter$Rules$fB = A2(
	_moarwick$elm_webpack_starter$Formula$Atom,
	'B',
	{ctor: '[]'});
var _moarwick$elm_webpack_starter$Rules$fA = A2(
	_moarwick$elm_webpack_starter$Formula$Atom,
	'A',
	{ctor: '[]'});
var _moarwick$elm_webpack_starter$Rules$alphas = {
	ctor: '::',
	_0: _moarwick$elm_webpack_starter$Formula$T(
		A2(_moarwick$elm_webpack_starter$Formula$Conj, _moarwick$elm_webpack_starter$Rules$fA, _moarwick$elm_webpack_starter$Rules$fB)),
	_1: {
		ctor: '::',
		_0: _moarwick$elm_webpack_starter$Formula$F(
			A2(_moarwick$elm_webpack_starter$Formula$Disj, _moarwick$elm_webpack_starter$Rules$fA, _moarwick$elm_webpack_starter$Rules$fB)),
		_1: {
			ctor: '::',
			_0: _moarwick$elm_webpack_starter$Formula$F(
				A2(_moarwick$elm_webpack_starter$Formula$Impl, _moarwick$elm_webpack_starter$Rules$fA, _moarwick$elm_webpack_starter$Rules$fB)),
			_1: {
				ctor: '::',
				_0: _moarwick$elm_webpack_starter$Formula$T(
					_moarwick$elm_webpack_starter$Formula$Neg(_moarwick$elm_webpack_starter$Rules$fA)),
				_1: {
					ctor: '::',
					_0: _moarwick$elm_webpack_starter$Formula$F(
						_moarwick$elm_webpack_starter$Formula$Neg(_moarwick$elm_webpack_starter$Rules$fA)),
					_1: {ctor: '[]'}
				}
			}
		}
	}
};
var _moarwick$elm_webpack_starter$Rules$betas = {
	ctor: '::',
	_0: _moarwick$elm_webpack_starter$Formula$F(
		A2(_moarwick$elm_webpack_starter$Formula$Conj, _moarwick$elm_webpack_starter$Rules$fA, _moarwick$elm_webpack_starter$Rules$fB)),
	_1: {
		ctor: '::',
		_0: _moarwick$elm_webpack_starter$Formula$T(
			A2(_moarwick$elm_webpack_starter$Formula$Disj, _moarwick$elm_webpack_starter$Rules$fA, _moarwick$elm_webpack_starter$Rules$fB)),
		_1: {
			ctor: '::',
			_0: _moarwick$elm_webpack_starter$Formula$T(
				A2(_moarwick$elm_webpack_starter$Formula$Impl, _moarwick$elm_webpack_starter$Rules$fA, _moarwick$elm_webpack_starter$Rules$fB)),
			_1: {ctor: '[]'}
		}
	}
};
var _moarwick$elm_webpack_starter$Rules$help = A2(
	_elm_lang$html$Html$div,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('rulesHelp'),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: A2(
			_elm_lang$html$Html$h2,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('Help'),
				_1: {ctor: '[]'}
			}),
		_1: {
			ctor: '::',
			_0: A2(
				_evancz$elm_markdown$Markdown$toHtml,
				{ctor: '[]'},
				'\nUse `&`, `/\\` or `∧` for conjunction, `|`, `\\/` or `∨` for disjunction, `->` or `→` for implication,\nand `-`, `~` or `¬` for negation. Conjunction and disjunction are strictly binary. Each node of\nthe tableau contains a signed formula, i.e. it must be prefixed by `T` or `F`.\n\nTo write first order logic terms use \'∀\', \'\\A\', \'\\forall\', \'\\a\' and \'∃\', \'\\E\', \'\\exists\', \'\\e\' quantifiers.\n\n'),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$p,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('To enter a premise / assumption (which you want to prove), make it reference itself'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text(' (i.e. \"(1) F ... [1]\").'),
							_1: {ctor: '[]'}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('rules'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('rule-wrapper'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$h3,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('α-rules'),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$div,
											{ctor: '[]'},
											A2(_elm_lang$core$List$map, _moarwick$elm_webpack_starter$Rules$renderAlpha, _moarwick$elm_webpack_starter$Rules$alphas)),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$h3,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('β-rules'),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$div,
													{ctor: '[]'},
													A2(_elm_lang$core$List$map, _moarwick$elm_webpack_starter$Rules$renderBeta, _moarwick$elm_webpack_starter$Rules$betas)),
												_1: {ctor: '[]'}
											}
										}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('rule-wrapper'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$h3,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('γ-rules'),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$div,
												{ctor: '[]'},
												A2(_elm_lang$core$List$map, _moarwick$elm_webpack_starter$Rules$renderDelta, _moarwick$elm_webpack_starter$Rules$deltas)),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$h3,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('δ-rules - use completely new variable x in subformula'),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$div,
														{ctor: '[]'},
														A2(_elm_lang$core$List$map, _moarwick$elm_webpack_starter$Rules$renderGamma, _moarwick$elm_webpack_starter$Rules$gammas)),
													_1: {ctor: '[]'}
												}
											}
										}
									}),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}
			}
		}
	});

var _moarwick$elm_webpack_starter$Editor$textVerdict = function (t) {
	var _p0 = _moarwick$elm_webpack_starter$Helper$isClosed(t);
	if (_p0.ctor === 'Ok') {
		if (_p0._0 === true) {
			return 'proves';
		} else {
			return 'does not prove';
		}
	} else {
		return 'might be proving (once correct)';
	}
};
var _moarwick$elm_webpack_starter$Editor$verdict = function (t) {
	var ass = _moarwick$elm_webpack_starter$Helper$assumptions(
		_moarwick$elm_webpack_starter$Zipper$zipper(t));
	var _p1 = A2(
		_elm_lang$core$List$partition,
		function (sf) {
			var _p2 = sf;
			if (_p2.ctor === 'T') {
				return true;
			} else {
				return false;
			}
		},
		ass);
	var premises = _p1._0;
	var conclusions = _p1._1;
	return _elm_lang$core$List$isEmpty(ass) ? A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('verdict'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$p,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('This tableau doesn\'t prove anything.'),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		}) : A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('verdict'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$p,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('This tableau '),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							_moarwick$elm_webpack_starter$Editor$textVerdict(
								_moarwick$elm_webpack_starter$Zipper$zipper(t))),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text(':'),
							_1: {ctor: '[]'}
						}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$p,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							A2(
								_elm_lang$core$String$join,
								' , ',
								A2(
									_elm_lang$core$List$map,
									function (_p3) {
										return _moarwick$elm_webpack_starter$Formula$strFormula(
											_moarwick$elm_webpack_starter$Formula$signedGetFormula(_p3));
									},
									premises))),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text(' ⊦ '),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html$text(
									A2(
										_elm_lang$core$String$join,
										' , ',
										A2(
											_elm_lang$core$List$map,
											function (_p4) {
												return _moarwick$elm_webpack_starter$Formula$strFormula(
													_moarwick$elm_webpack_starter$Formula$signedGetFormula(_p4));
											},
											conclusions))),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _moarwick$elm_webpack_starter$Editor$jsonImportError = function (model) {
	var _p5 = model.jsonImportError;
	if (_p5 === '') {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{ctor: '[]'});
	} else {
		return A2(
			_elm_lang$html$Html$p,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('jsonImportError'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'Error importing tableau: ',
						_elm_lang$core$Basics$toString(model.jsonImportError))),
				_1: {ctor: '[]'}
			});
	}
};
var _moarwick$elm_webpack_starter$Editor$jsonDataUri = function (json) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'data:application/json;charset=utf-8,',
		_elm_lang$http$Http$encodeUri(json));
};
var _moarwick$elm_webpack_starter$Editor$jsonExportControl = function (t) {
	return A2(
		_elm_lang$html$Html$a,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$type_('button'),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$href(
					_moarwick$elm_webpack_starter$Editor$jsonDataUri(
						A2(_moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$encode, 2, t))),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$downloadAs('tableau.json'),
					_1: {ctor: '[]'}
				}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$button,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('button'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Export as JSON'),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};
var _moarwick$elm_webpack_starter$Editor$problemClass = function (_p6) {
	var _p7 = _p6;
	var _p8 = _p7.typ;
	if (_p8.ctor === 'Syntax') {
		return 'syntaxProblem';
	} else {
		return 'semanticsProblem';
	}
};
var _moarwick$elm_webpack_starter$Editor$problemsClass = function (pl) {
	var _p9 = pl;
	if (_p9.ctor === '[]') {
		return '';
	} else {
		return _moarwick$elm_webpack_starter$Editor$problemClass(_p9._0);
	}
};
var _moarwick$elm_webpack_starter$Editor$problemItem = function (pi) {
	return A2(
		_elm_lang$html$Html$li,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class(
				_moarwick$elm_webpack_starter$Editor$problemClass(pi)),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('('),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html$text(
					_elm_lang$core$Basics$toString(
						function (_) {
							return _.id;
						}(
							_moarwick$elm_webpack_starter$Zipper$zNode(pi.zip)))),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html$text(') '),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html$text(pi.msg),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _moarwick$elm_webpack_starter$Editor$problemList = function (pl) {
	return A2(
		_elm_lang$html$Html$ul,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('problemList'),
			_1: {ctor: '[]'}
		},
		A2(_elm_lang$core$List$map, _moarwick$elm_webpack_starter$Editor$problemItem, pl));
};
var _moarwick$elm_webpack_starter$Editor$problems = function (t) {
	var errors = _moarwick$elm_webpack_starter$Errors$errors(
		_moarwick$elm_webpack_starter$Validate$isCorrectTableau(
			_moarwick$elm_webpack_starter$Zipper$zipper(t)));
	return _elm_lang$core$List$isEmpty(errors) ? A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('problems'),
			_1: {ctor: '[]'}
		},
		{ctor: '[]'}) : A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('problems'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$p,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Problems'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: _moarwick$elm_webpack_starter$Editor$problemList(errors),
				_1: {ctor: '[]'}
			}
		});
};
var _moarwick$elm_webpack_starter$Editor$singleNodeProblems = function (z) {
	var errors = _moarwick$elm_webpack_starter$Errors$errors(
		_moarwick$elm_webpack_starter$Validate$isCorrectNode(z));
	return _elm_lang$core$List$isEmpty(errors) ? A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('nodeProblems'),
			_1: {ctor: '[]'}
		},
		{ctor: '[]'}) : A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('nodeProblems'),
			_1: {ctor: '[]'}
		},
		A2(
			_elm_lang$core$List$map,
			function (pr) {
				return A2(
					_elm_lang$html$Html$small,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('nodeProblemsText'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(pr.msg),
						_1: {ctor: '[]'}
					});
			},
			errors));
};
var _moarwick$elm_webpack_starter$Editor$viewClosed = function (z) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{ctor: '[]'});
};
var _moarwick$elm_webpack_starter$Editor$viewOpen = function (z) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{ctor: '[]'});
};
var _moarwick$elm_webpack_starter$Editor$top = function (_p10) {
	return _moarwick$elm_webpack_starter$Zipper$zTableau(
		_moarwick$elm_webpack_starter$Zipper$top(_p10));
};
var _moarwick$elm_webpack_starter$Editor$topRenumbered = function (_p11) {
	return _moarwick$elm_webpack_starter$Zipper$renumber(
		_moarwick$elm_webpack_starter$Editor$top(_p11));
};
var _moarwick$elm_webpack_starter$Editor$simpleUpdate = F2(
	function (msg, model) {
		return A2(
			_elm_lang$core$Debug$log,
			'model',
			function () {
				var _p12 = msg;
				switch (_p12.ctor) {
					case 'ChangeText':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$top(
									A2(_moarwick$elm_webpack_starter$Zipper$setFormula, _p12._1, _p12._0))
							});
					case 'ExpandAlpha':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$topRenumbered(
									A2(
										_moarwick$elm_webpack_starter$Zipper$renumberJustInReferences,
										F2(
											function (x, y) {
												return x + y;
											})(1),
										_moarwick$elm_webpack_starter$Zipper$extendAlpha(_p12._0)))
							});
					case 'ExpandBeta':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$topRenumbered(
									A2(
										_moarwick$elm_webpack_starter$Zipper$renumberJustInReferences,
										F2(
											function (x, y) {
												return x + y;
											})(1),
										_moarwick$elm_webpack_starter$Zipper$extendBeta(_p12._0)))
							});
					case 'ExpandGamma':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$topRenumbered(
									A2(
										_moarwick$elm_webpack_starter$Zipper$renumberJustInReferences,
										F2(
											function (x, y) {
												return x + y;
											})(1),
										_moarwick$elm_webpack_starter$Zipper$extendGamma(_p12._0)))
							});
					case 'ExpandDelta':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$topRenumbered(
									A2(
										_moarwick$elm_webpack_starter$Zipper$renumberJustInReferences,
										F2(
											function (x, y) {
												return x + y;
											})(1),
										_moarwick$elm_webpack_starter$Zipper$extendDelta(_p12._0)))
							});
					case 'ChangeRef':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$top(
									A2(_moarwick$elm_webpack_starter$Zipper$setRef, _p12._1, _p12._0))
							});
					case 'Delete':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$topRenumbered(
									_moarwick$elm_webpack_starter$Zipper$delete(_p12._0))
							});
					case 'DeleteMe':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$topRenumbered(
									A2(
										_moarwick$elm_webpack_starter$Zipper$renumberJustInReferences,
										A2(
											_elm_lang$core$Basics$flip,
											F2(
												function (x, y) {
													return x - y;
												}),
											1),
										_moarwick$elm_webpack_starter$Zipper$deleteMe(_p12._0)))
							});
					case 'MakeClosed':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$top(
									_moarwick$elm_webpack_starter$Zipper$makeClosed(_p12._0))
							});
					case 'SetClosed':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$top(
									A3(_moarwick$elm_webpack_starter$Zipper$setClosed, _p12._0, _p12._2, _p12._1))
							});
					case 'MakeOpen':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$top(
									_moarwick$elm_webpack_starter$Zipper$makeOpen(_p12._0))
							});
					case 'ChangeVariable':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$top(
									A2(_moarwick$elm_webpack_starter$Zipper$changeVariable, _p12._1, _p12._0))
							});
					case 'ChangeTerm':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$top(
									A2(_moarwick$elm_webpack_starter$Zipper$changeTerm, _p12._1, _p12._0))
							});
					case 'SwitchBetas':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$topRenumbered(
									_moarwick$elm_webpack_starter$Zipper$switchBetas(_p12._0))
							});
					case 'ChangeToAlpha':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$topRenumbered(
									_moarwick$elm_webpack_starter$Zipper$changeToAlpha(_p12._0))
							});
					case 'ChangeToBeta':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$topRenumbered(
									_moarwick$elm_webpack_starter$Zipper$changeToBeta(_p12._0))
							});
					case 'ChangeToGamma':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$topRenumbered(
									_moarwick$elm_webpack_starter$Zipper$changeToGamma(_p12._0))
							});
					case 'ChangeToDelta':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$topRenumbered(
									_moarwick$elm_webpack_starter$Zipper$changeToDelta(_p12._0))
							});
					case 'Prettify':
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Zipper$prettify(model.tableau)
							});
					case 'JsonSelected':
						return model;
					case 'Undo':
						return model;
					case 'Redo':
						return model;
					case 'JsonRead':
						var _p13 = _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$decode(_p12._0.contents);
						if (_p13.ctor === 'Ok') {
							return _elm_lang$core$Native_Utils.update(
								model,
								{jsonImporting: false, tableau: _p13._0});
						} else {
							return _elm_lang$core$Native_Utils.update(
								model,
								{
									jsonImporting: false,
									jsonImportError: _elm_lang$core$Basics$toString(_p13._0)
								});
						}
					default:
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								tableau: _moarwick$elm_webpack_starter$Editor$top(
									_moarwick$elm_webpack_starter$Zipper$changeButtonAppearance(_p12._0))
							});
				}
			}());
	});
var _moarwick$elm_webpack_starter$Editor$update = F2(
	function (msg, _p14) {
		var _p15 = _p14;
		var _p18 = _p15.present;
		var _p17 = _p15;
		var _p16 = msg;
		switch (_p16.ctor) {
			case 'JsonSelected':
				return {
					ctor: '_Tuple2',
					_0: A2(
						_elm_community$undo_redo$UndoList$new,
						_elm_lang$core$Native_Utils.update(
							_p18,
							{jsonImportError: '', jsonImporting: true}),
						_p17),
					_1: _moarwick$elm_webpack_starter$Helpers_Exporting_Ports$fileSelected(_p18.jsonImportId)
				};
			case 'Undo':
				return {
					ctor: '_Tuple2',
					_0: _elm_community$undo_redo$UndoList$undo(_p17),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'Redo':
				return {
					ctor: '_Tuple2',
					_0: _elm_community$undo_redo$UndoList$redo(_p17),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			default:
				return {
					ctor: '_Tuple2',
					_0: A2(
						_elm_community$undo_redo$UndoList$new,
						A2(
							_moarwick$elm_webpack_starter$Editor$simpleUpdate,
							msg,
							_elm_lang$core$Native_Utils.update(
								_p18,
								{jsonImportError: ''})),
						_p17),
					_1: _elm_lang$core$Platform_Cmd$none
				};
		}
	});
var _moarwick$elm_webpack_starter$Editor$init = {
	ctor: '_Tuple2',
	_0: _elm_community$undo_redo$UndoList$fresh(
		{
			tableau: {
				node: {
					id: 1,
					value: '',
					reference: {
						str: '1',
						up: _elm_lang$core$Maybe$Just(0)
					},
					formula: _moarwick$elm_webpack_starter$Formula$parseSigned(''),
					gui: _moarwick$elm_webpack_starter$Tableau$defGUI
				},
				ext: _moarwick$elm_webpack_starter$Tableau$Open
			},
			jsonImporting: false,
			jsonImportError: '',
			jsonImportId: 'importJson'
		}),
	_1: _elm_lang$core$Platform_Cmd$none
};
var _moarwick$elm_webpack_starter$Editor$ChangeButtonsAppearance = function (a) {
	return {ctor: 'ChangeButtonsAppearance', _0: a};
};
var _moarwick$elm_webpack_starter$Editor$viewButtonsAppearanceControlls = function (z) {
	return A2(
		_elm_lang$html$Html$button,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('button'),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(
					_moarwick$elm_webpack_starter$Editor$ChangeButtonsAppearance(z)),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('E'),
			_1: {ctor: '[]'}
		});
};
var _moarwick$elm_webpack_starter$Editor$JsonRead = function (a) {
	return {ctor: 'JsonRead', _0: a};
};
var _moarwick$elm_webpack_starter$Editor$subscriptions = function (model) {
	return _moarwick$elm_webpack_starter$Helpers_Exporting_Ports$fileContentRead(_moarwick$elm_webpack_starter$Editor$JsonRead);
};
var _moarwick$elm_webpack_starter$Editor$JsonSelected = {ctor: 'JsonSelected'};
var _moarwick$elm_webpack_starter$Editor$jsonImportControl = F2(
	function (jsonImporting, jsonImportId) {
		var _p19 = jsonImporting;
		if (_p19 === true) {
			return _elm_lang$html$Html$text('Loading file...');
		} else {
			return A2(
				_elm_lang$html$Html$label,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$for(jsonImportId),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$button,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html_Attributes$attribute,
								'onClick',
								A2(
									_elm_lang$core$Basics_ops['++'],
									'javascript:document.getElementById(\'',
									A2(_elm_lang$core$Basics_ops['++'], jsonImportId, '\').click();'))),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('button'),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Import from JSON'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$input,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$type_('file'),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$id(jsonImportId),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$accept('application/json'),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html_Events$on,
												'change',
												_elm_lang$core$Json_Decode$succeed(_moarwick$elm_webpack_starter$Editor$JsonSelected)),
											_1: {ctor: '[]'}
										}
									}
								}
							},
							{ctor: '[]'}),
						_1: {ctor: '[]'}
					}
				});
		}
	});
var _moarwick$elm_webpack_starter$Editor$Prettify = {ctor: 'Prettify'};
var _moarwick$elm_webpack_starter$Editor$Redo = {ctor: 'Redo'};
var _moarwick$elm_webpack_starter$Editor$Undo = {ctor: 'Undo'};
var _moarwick$elm_webpack_starter$Editor$ChangeToDelta = function (a) {
	return {ctor: 'ChangeToDelta', _0: a};
};
var _moarwick$elm_webpack_starter$Editor$ChangeToGamma = function (a) {
	return {ctor: 'ChangeToGamma', _0: a};
};
var _moarwick$elm_webpack_starter$Editor$ChangeToBeta = function (a) {
	return {ctor: 'ChangeToBeta', _0: a};
};
var _moarwick$elm_webpack_starter$Editor$ChangeToAlpha = function (a) {
	return {ctor: 'ChangeToAlpha', _0: a};
};
var _moarwick$elm_webpack_starter$Editor$SwitchBetas = function (a) {
	return {ctor: 'SwitchBetas', _0: a};
};
var _moarwick$elm_webpack_starter$Editor$ChangeTerm = F2(
	function (a, b) {
		return {ctor: 'ChangeTerm', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Editor$ChangeVariable = F2(
	function (a, b) {
		return {ctor: 'ChangeVariable', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Editor$ExpandDelta = function (a) {
	return {ctor: 'ExpandDelta', _0: a};
};
var _moarwick$elm_webpack_starter$Editor$ExpandGamma = function (a) {
	return {ctor: 'ExpandGamma', _0: a};
};
var _moarwick$elm_webpack_starter$Editor$MakeOpen = function (a) {
	return {ctor: 'MakeOpen', _0: a};
};
var _moarwick$elm_webpack_starter$Editor$SetClosed = F3(
	function (a, b, c) {
		return {ctor: 'SetClosed', _0: a, _1: b, _2: c};
	});
var _moarwick$elm_webpack_starter$Editor$MakeClosed = function (a) {
	return {ctor: 'MakeClosed', _0: a};
};
var _moarwick$elm_webpack_starter$Editor$DeleteMe = function (a) {
	return {ctor: 'DeleteMe', _0: a};
};
var _moarwick$elm_webpack_starter$Editor$Delete = function (a) {
	return {ctor: 'Delete', _0: a};
};
var _moarwick$elm_webpack_starter$Editor$ExpandBeta = function (a) {
	return {ctor: 'ExpandBeta', _0: a};
};
var _moarwick$elm_webpack_starter$Editor$ExpandAlpha = function (a) {
	return {ctor: 'ExpandAlpha', _0: a};
};
var _moarwick$elm_webpack_starter$Editor$viewControls = function (z) {
	var _p20 = z;
	var t = _p20._0;
	var bs = _p20._1;
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('expandControls'),
			_1: {ctor: '[]'}
		},
		function () {
			var _p21 = t.ext;
			switch (_p21.ctor) {
				case 'Closed':
					var _p23 = _p21._1;
					var _p22 = _p21._0;
					var compl = _moarwick$elm_webpack_starter$Errors$errors(
						A3(_moarwick$elm_webpack_starter$Validate$areCloseRefsComplementary, _p22, _p23, z));
					var ref1Cls = _moarwick$elm_webpack_starter$Editor$problemsClass(
						A2(
							_elm_lang$core$Basics_ops['++'],
							A3(_moarwick$elm_webpack_starter$Validate$validateRef, 'Invalid close ref. #1', _p22, z),
							compl));
					var ref2Cls = _moarwick$elm_webpack_starter$Editor$problemsClass(
						A2(
							_elm_lang$core$Basics_ops['++'],
							A3(_moarwick$elm_webpack_starter$Validate$validateRef, 'Invalid close ref. #1', _p23, z),
							compl));
					return {
						ctor: '::',
						_0: _elm_lang$html$Html$text('* '),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$input,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class(
										A2(_elm_lang$core$Basics_ops['++'], 'closed button ', ref1Cls)),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$type_('text'),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$placeholder('Ref'),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$size(1),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$value(_p22.str),
													_1: {
														ctor: '::',
														_0: _elm_lang$html$Html_Events$onInput(
															A2(_moarwick$elm_webpack_starter$Editor$SetClosed, 0, z)),
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								},
								{ctor: '[]'}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$input,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class(
											A2(_elm_lang$core$Basics_ops['++'], 'closed button ', ref2Cls)),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$type_('text'),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$placeholder('Ref'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$size(1),
													_1: {
														ctor: '::',
														_0: _elm_lang$html$Html_Attributes$value(_p23.str),
														_1: {
															ctor: '::',
															_0: _elm_lang$html$Html_Events$onInput(
																A2(_moarwick$elm_webpack_starter$Editor$SetClosed, 1, z)),
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$button,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('button'),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Events$onClick(
													_moarwick$elm_webpack_starter$Editor$MakeOpen(z)),
												_1: {ctor: '[]'}
											}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('o'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}
						}
					};
				case 'Beta':
					var _p24 = t.node.gui.controlsShown;
					if (_p24 === true) {
						return {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('onclick-menu add'),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$tabindex(0),
										_1: {ctor: '[]'}
									}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$ul,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('onclick-menu-content'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$li,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$button,
														{
															ctor: '::',
															_0: _elm_lang$html$Html_Events$onClick(
																_moarwick$elm_webpack_starter$Editor$ExpandAlpha(z)),
															_1: {ctor: '[]'}
														},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text('α'),
															_1: {ctor: '[]'}
														}),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$li,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$button,
															{
																ctor: '::',
																_0: _elm_lang$html$Html_Events$onClick(
																	_moarwick$elm_webpack_starter$Editor$ExpandBeta(z)),
																_1: {ctor: '[]'}
															},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('β'),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$li,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$button,
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html_Events$onClick(
																		_moarwick$elm_webpack_starter$Editor$ExpandGamma(z)),
																	_1: {ctor: '[]'}
																},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('γ'),
																	_1: {ctor: '[]'}
																}),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$li,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$button,
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html_Events$onClick(
																			_moarwick$elm_webpack_starter$Editor$ExpandDelta(z)),
																		_1: {ctor: '[]'}
																	},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('δ'),
																		_1: {ctor: '[]'}
																	}),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												}
											}
										}),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('onclick-menu change'),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$tabindex(0),
											_1: {ctor: '[]'}
										}
									},
									{
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$ul,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('onclick-menu-content'),
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$li,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$button,
															{
																ctor: '::',
																_0: _elm_lang$html$Html_Events$onClick(
																	_moarwick$elm_webpack_starter$Editor$ChangeToAlpha(z)),
																_1: {ctor: '[]'}
															},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('α'),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$li,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$button,
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html_Events$onClick(
																		_moarwick$elm_webpack_starter$Editor$ChangeToBeta(z)),
																	_1: {ctor: '[]'}
																},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('β'),
																	_1: {ctor: '[]'}
																}),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$li,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$button,
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html_Events$onClick(
																			_moarwick$elm_webpack_starter$Editor$ChangeToGamma(z)),
																		_1: {ctor: '[]'}
																	},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('γ'),
																		_1: {ctor: '[]'}
																	}),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$li,
																{ctor: '[]'},
																{
																	ctor: '::',
																	_0: A2(
																		_elm_lang$html$Html$button,
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html_Events$onClick(
																				_moarwick$elm_webpack_starter$Editor$ChangeToDelta(z)),
																			_1: {ctor: '[]'}
																		},
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html$text('δ'),
																			_1: {ctor: '[]'}
																		}),
																	_1: {ctor: '[]'}
																}),
															_1: {ctor: '[]'}
														}
													}
												}
											}),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$div,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('onclick-menu del'),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$tabindex(0),
												_1: {ctor: '[]'}
											}
										},
										{
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$ul,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$class('onclick-menu-content'),
													_1: {ctor: '[]'}
												},
												{
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$li,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$button,
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html_Events$onClick(
																		_moarwick$elm_webpack_starter$Editor$DeleteMe(z)),
																	_1: {ctor: '[]'}
																},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('node'),
																	_1: {ctor: '[]'}
																}),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$li,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$button,
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html_Events$onClick(
																			_moarwick$elm_webpack_starter$Editor$Delete(z)),
																		_1: {ctor: '[]'}
																	},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('subtree'),
																		_1: {ctor: '[]'}
																	}),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												}),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$button,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('button'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onClick(
														_moarwick$elm_webpack_starter$Editor$MakeClosed(z)),
													_1: {ctor: '[]'}
												}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('*'),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$button,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$class('button'),
													_1: {
														ctor: '::',
														_0: _elm_lang$html$Html_Events$onClick(
															_moarwick$elm_webpack_starter$Editor$SwitchBetas(z)),
														_1: {ctor: '[]'}
													}
												},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('->|<-'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						};
					} else {
						return {ctor: '[]'};
					}
				default:
					var _p25 = t.node.gui.controlsShown;
					if (_p25 === true) {
						return {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('onclick-menu add'),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$tabindex(0),
										_1: {ctor: '[]'}
									}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$ul,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('onclick-menu-content'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$li,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$button,
														{
															ctor: '::',
															_0: _elm_lang$html$Html_Events$onClick(
																_moarwick$elm_webpack_starter$Editor$ExpandAlpha(z)),
															_1: {ctor: '[]'}
														},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text('α'),
															_1: {ctor: '[]'}
														}),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$li,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$button,
															{
																ctor: '::',
																_0: _elm_lang$html$Html_Events$onClick(
																	_moarwick$elm_webpack_starter$Editor$ExpandBeta(z)),
																_1: {ctor: '[]'}
															},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('β'),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$li,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$button,
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html_Events$onClick(
																		_moarwick$elm_webpack_starter$Editor$ExpandGamma(z)),
																	_1: {ctor: '[]'}
																},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('γ'),
																	_1: {ctor: '[]'}
																}),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$li,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$button,
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html_Events$onClick(
																			_moarwick$elm_webpack_starter$Editor$ExpandDelta(z)),
																		_1: {ctor: '[]'}
																	},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('δ'),
																		_1: {ctor: '[]'}
																	}),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												}
											}
										}),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('onclick-menu change'),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$tabindex(0),
											_1: {ctor: '[]'}
										}
									},
									{
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$ul,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('onclick-menu-content'),
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$li,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$button,
															{
																ctor: '::',
																_0: _elm_lang$html$Html_Events$onClick(
																	_moarwick$elm_webpack_starter$Editor$ChangeToAlpha(z)),
																_1: {ctor: '[]'}
															},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('α'),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$li,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$button,
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html_Events$onClick(
																		_moarwick$elm_webpack_starter$Editor$ChangeToBeta(z)),
																	_1: {ctor: '[]'}
																},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('β'),
																	_1: {ctor: '[]'}
																}),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$li,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$button,
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html_Events$onClick(
																			_moarwick$elm_webpack_starter$Editor$ChangeToGamma(z)),
																		_1: {ctor: '[]'}
																	},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('γ'),
																		_1: {ctor: '[]'}
																	}),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$li,
																{ctor: '[]'},
																{
																	ctor: '::',
																	_0: A2(
																		_elm_lang$html$Html$button,
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html_Events$onClick(
																				_moarwick$elm_webpack_starter$Editor$ChangeToDelta(z)),
																			_1: {ctor: '[]'}
																		},
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html$text('δ'),
																			_1: {ctor: '[]'}
																		}),
																	_1: {ctor: '[]'}
																}),
															_1: {ctor: '[]'}
														}
													}
												}
											}),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$div,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('onclick-menu del'),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$tabindex(0),
												_1: {ctor: '[]'}
											}
										},
										{
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$ul,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$class('onclick-menu-content'),
													_1: {ctor: '[]'}
												},
												{
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$li,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$button,
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html_Events$onClick(
																		_moarwick$elm_webpack_starter$Editor$DeleteMe(z)),
																	_1: {ctor: '[]'}
																},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('node'),
																	_1: {ctor: '[]'}
																}),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$li,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$button,
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html_Events$onClick(
																			_moarwick$elm_webpack_starter$Editor$Delete(z)),
																		_1: {ctor: '[]'}
																	},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('subtree'),
																		_1: {ctor: '[]'}
																	}),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												}),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$button,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('button'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onClick(
														_moarwick$elm_webpack_starter$Editor$MakeClosed(z)),
													_1: {ctor: '[]'}
												}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('*'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}
							}
						};
					} else {
						return {ctor: '[]'};
					}
			}
		}());
};
var _moarwick$elm_webpack_starter$Editor$ChangeRef = F2(
	function (a, b) {
		return {ctor: 'ChangeRef', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Editor$ChangeText = F2(
	function (a, b) {
		return {ctor: 'ChangeText', _0: a, _1: b};
	});
var _moarwick$elm_webpack_starter$Editor$viewSubsNode = function (z) {
	var _p26 = z;
	var tableau = _p26._0;
	var bs = _p26._1;
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('formula'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(
							_moarwick$elm_webpack_starter$Zipper$zNode(z).id),
						')'))),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$classList(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'formulaInputSubst', _1: true},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'semanticsProblem',
										_1: _moarwick$elm_webpack_starter$Helper$hasReference(z)
									},
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$value(
								_moarwick$elm_webpack_starter$Zipper$zNode(z).value),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$type_('text'),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onInput(
										_moarwick$elm_webpack_starter$Editor$ChangeText(z)),
									_1: {ctor: '[]'}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html$text('substituting'),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$input,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$classList(
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'substitutedVariable', _1: true},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 'semanticsProblem',
												_1: _moarwick$elm_webpack_starter$Helper$hasReference(z)
											},
											_1: {ctor: '[]'}
										}
									}),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$value(
										A2(
											_elm_lang$core$Maybe$withDefault,
											'',
											A2(
												_elm_lang$core$Maybe$map,
												function (_) {
													return _.what;
												},
												_moarwick$elm_webpack_starter$Zipper$zSubstitution(
													_moarwick$elm_webpack_starter$Zipper$up(z))))),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$type_('text'),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onInput(
												_moarwick$elm_webpack_starter$Editor$ChangeTerm(z)),
											_1: {ctor: '[]'}
										}
									}
								}
							},
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text('for'),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$input,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$classList(
											{
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'substitutedConstant', _1: true},
												_1: {
													ctor: '::',
													_0: {
														ctor: '_Tuple2',
														_0: 'semanticsProblem',
														_1: _moarwick$elm_webpack_starter$Helper$hasReference(z)
													},
													_1: {ctor: '[]'}
												}
											}),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$value(
												A2(
													_elm_lang$core$Maybe$withDefault,
													'',
													A2(
														_elm_lang$core$Maybe$map,
														function (_) {
															return _.forWhat;
														},
														_moarwick$elm_webpack_starter$Zipper$zSubstitution(
															_moarwick$elm_webpack_starter$Zipper$up(z))))),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$type_('text'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onInput(
														_moarwick$elm_webpack_starter$Editor$ChangeVariable(z)),
													_1: {ctor: '[]'}
												}
											}
										}
									},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html$text('['),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$input,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('formulaReference'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$value(
														_moarwick$elm_webpack_starter$Zipper$zNode(z).reference.str),
													_1: {
														ctor: '::',
														_0: _elm_lang$html$Html_Events$onInput(
															_moarwick$elm_webpack_starter$Editor$ChangeRef(z)),
														_1: {ctor: '[]'}
													}
												}
											},
											{ctor: '[]'}),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html$text(']'),
											_1: {
												ctor: '::',
												_0: _moarwick$elm_webpack_starter$Editor$viewButtonsAppearanceControlls(z),
												_1: {
													ctor: '::',
													_0: _moarwick$elm_webpack_starter$Editor$singleNodeProblems(z),
													_1: {
														ctor: '::',
														_0: _moarwick$elm_webpack_starter$Editor$viewControls(z),
														_1: {
															ctor: '::',
															_0: _moarwick$elm_webpack_starter$Editor$viewChildren(z),
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		});
};
var _moarwick$elm_webpack_starter$Editor$viewChildren = function (z) {
	var _p27 = _moarwick$elm_webpack_starter$Zipper$zTableau(z).ext;
	switch (_p27.ctor) {
		case 'Open':
			return _moarwick$elm_webpack_starter$Editor$viewOpen(z);
		case 'Closed':
			return _moarwick$elm_webpack_starter$Editor$viewClosed(z);
		case 'Alpha':
			return _moarwick$elm_webpack_starter$Editor$viewAlpha(z);
		case 'Beta':
			return _moarwick$elm_webpack_starter$Editor$viewBeta(z);
		case 'Gamma':
			return _moarwick$elm_webpack_starter$Editor$viewGamma(z);
		default:
			return _moarwick$elm_webpack_starter$Editor$viewDelta(z);
	}
};
var _moarwick$elm_webpack_starter$Editor$viewAlpha = function (z) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('alpha'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _moarwick$elm_webpack_starter$Editor$viewNode(
				_moarwick$elm_webpack_starter$Zipper$down(z)),
			_1: {ctor: '[]'}
		});
};
var _moarwick$elm_webpack_starter$Editor$viewNode = function (z) {
	var _p28 = z;
	var tableau = _p28._0;
	var bs = _p28._1;
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('formula'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(
							_moarwick$elm_webpack_starter$Zipper$zNode(z).id),
						')'))),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$classList(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'formulaInput', _1: true},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'premise',
										_1: _moarwick$elm_webpack_starter$Helper$isPremise(z)
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'semanticsProblem',
											_1: _moarwick$elm_webpack_starter$Helper$hasReference(z)
										},
										_1: {ctor: '[]'}
									}
								}
							}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$value(
								_moarwick$elm_webpack_starter$Zipper$zNode(z).value),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$type_('text'),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onInput(
										_moarwick$elm_webpack_starter$Editor$ChangeText(z)),
									_1: {ctor: '[]'}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html$text('['),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$input,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('formulaReference'),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$value(
										_moarwick$elm_webpack_starter$Zipper$zNode(z).reference.str),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onInput(
											_moarwick$elm_webpack_starter$Editor$ChangeRef(z)),
										_1: {ctor: '[]'}
									}
								}
							},
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text(']'),
							_1: {
								ctor: '::',
								_0: _moarwick$elm_webpack_starter$Editor$viewButtonsAppearanceControlls(z),
								_1: {
									ctor: '::',
									_0: _moarwick$elm_webpack_starter$Editor$singleNodeProblems(z),
									_1: {
										ctor: '::',
										_0: _moarwick$elm_webpack_starter$Editor$viewControls(z),
										_1: {
											ctor: '::',
											_0: _moarwick$elm_webpack_starter$Editor$viewChildren(z),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			}
		});
};
var _moarwick$elm_webpack_starter$Editor$viewBeta = function (z) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('beta'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _moarwick$elm_webpack_starter$Editor$viewNode(
				_moarwick$elm_webpack_starter$Zipper$left(z)),
			_1: {
				ctor: '::',
				_0: _moarwick$elm_webpack_starter$Editor$viewNode(
					_moarwick$elm_webpack_starter$Zipper$right(z)),
				_1: {ctor: '[]'}
			}
		});
};
var _moarwick$elm_webpack_starter$Editor$viewDelta = function (z) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('delta'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _moarwick$elm_webpack_starter$Editor$viewSubsNode(
				_moarwick$elm_webpack_starter$Zipper$down(z)),
			_1: {ctor: '[]'}
		});
};
var _moarwick$elm_webpack_starter$Editor$viewGamma = function (z) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('gamma'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _moarwick$elm_webpack_starter$Editor$viewSubsNode(
				_moarwick$elm_webpack_starter$Zipper$down(z)),
			_1: {ctor: '[]'}
		});
};
var _moarwick$elm_webpack_starter$Editor$view = function (_p29) {
	var _p30 = _p29;
	var _p31 = _p30.present;
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('tableau'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('actions'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$button,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('button'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onClick(_moarwick$elm_webpack_starter$Editor$Prettify),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Prettify formulas'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$button,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('button'),
								_1: {
									ctor: '::',
									_0: A2(_elm_lang$html$Html_Attributes$attribute, 'onClick', 'javascript:window.print()'),
									_1: {ctor: '[]'}
								}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Print'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: _moarwick$elm_webpack_starter$Editor$jsonExportControl(_p31.tableau),
							_1: {
								ctor: '::',
								_0: A2(_moarwick$elm_webpack_starter$Editor$jsonImportControl, _p31.jsonImporting, _p31.jsonImportId),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$button,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('button'),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Events$onClick(_moarwick$elm_webpack_starter$Editor$Undo),
												_1: {ctor: '[]'}
											}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Undo'),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$button,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('button'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onClick(_moarwick$elm_webpack_starter$Editor$Redo),
													_1: {ctor: '[]'}
												}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Redo'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}),
			_1: {
				ctor: '::',
				_0: _moarwick$elm_webpack_starter$Editor$jsonImportError(_p31),
				_1: {
					ctor: '::',
					_0: _moarwick$elm_webpack_starter$Editor$viewNode(
						_moarwick$elm_webpack_starter$Zipper$zipper(_p31.tableau)),
					_1: {
						ctor: '::',
						_0: _moarwick$elm_webpack_starter$Editor$verdict(_p31.tableau),
						_1: {
							ctor: '::',
							_0: _moarwick$elm_webpack_starter$Editor$problems(_p31.tableau),
							_1: {
								ctor: '::',
								_0: _moarwick$elm_webpack_starter$Rules$help,
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		});
};
var _moarwick$elm_webpack_starter$Editor$main = _elm_lang$html$Html$program(
	{init: _moarwick$elm_webpack_starter$Editor$init, update: _moarwick$elm_webpack_starter$Editor$update, view: _moarwick$elm_webpack_starter$Editor$view, subscriptions: _moarwick$elm_webpack_starter$Editor$subscriptions})();

var Elm = {};
Elm['Editor'] = Elm['Editor'] || {};
if (typeof _moarwick$elm_webpack_starter$Editor$main !== 'undefined') {
    _moarwick$elm_webpack_starter$Editor$main(Elm['Editor'], 'Editor', undefined);
}
Elm['Errors'] = Elm['Errors'] || {};
if (typeof _moarwick$elm_webpack_starter$Errors$main !== 'undefined') {
    _moarwick$elm_webpack_starter$Errors$main(Elm['Errors'], 'Errors', undefined);
}
Elm['Helper'] = Elm['Helper'] || {};
if (typeof _moarwick$elm_webpack_starter$Helper$main !== 'undefined') {
    _moarwick$elm_webpack_starter$Helper$main(Elm['Helper'], 'Helper', undefined);
}
Elm['Helpers'] = Elm['Helpers'] || {};
Elm['Helpers']['Exporting'] = Elm['Helpers']['Exporting'] || {};
Elm['Helpers']['Exporting']['Json'] = Elm['Helpers']['Exporting']['Json'] || {};
Elm['Helpers']['Exporting']['Json']['Decode'] = Elm['Helpers']['Exporting']['Json']['Decode'] || {};
if (typeof _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$main !== 'undefined') {
    _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Decode$main(Elm['Helpers']['Exporting']['Json']['Decode'], 'Helpers.Exporting.Json.Decode', undefined);
}
Elm['Helpers'] = Elm['Helpers'] || {};
Elm['Helpers']['Exporting'] = Elm['Helpers']['Exporting'] || {};
Elm['Helpers']['Exporting']['Json'] = Elm['Helpers']['Exporting']['Json'] || {};
Elm['Helpers']['Exporting']['Json']['Encode'] = Elm['Helpers']['Exporting']['Json']['Encode'] || {};
if (typeof _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$main !== 'undefined') {
    _moarwick$elm_webpack_starter$Helpers_Exporting_Json_Encode$main(Elm['Helpers']['Exporting']['Json']['Encode'], 'Helpers.Exporting.Json.Encode', undefined);
}
Elm['Helpers'] = Elm['Helpers'] || {};
Elm['Helpers']['Exporting'] = Elm['Helpers']['Exporting'] || {};
Elm['Helpers']['Exporting']['Ports'] = Elm['Helpers']['Exporting']['Ports'] || {};
if (typeof _moarwick$elm_webpack_starter$Helpers_Exporting_Ports$main !== 'undefined') {
    _moarwick$elm_webpack_starter$Helpers_Exporting_Ports$main(Elm['Helpers']['Exporting']['Ports'], 'Helpers.Exporting.Ports', undefined);
}
Elm['Rules'] = Elm['Rules'] || {};
if (typeof _moarwick$elm_webpack_starter$Rules$main !== 'undefined') {
    _moarwick$elm_webpack_starter$Rules$main(Elm['Rules'], 'Rules', undefined);
}
Elm['Tableau'] = Elm['Tableau'] || {};
if (typeof _moarwick$elm_webpack_starter$Tableau$main !== 'undefined') {
    _moarwick$elm_webpack_starter$Tableau$main(Elm['Tableau'], 'Tableau', undefined);
}
Elm['Validate'] = Elm['Validate'] || {};
if (typeof _moarwick$elm_webpack_starter$Validate$main !== 'undefined') {
    _moarwick$elm_webpack_starter$Validate$main(Elm['Validate'], 'Validate', undefined);
}
Elm['Zipper'] = Elm['Zipper'] || {};
if (typeof _moarwick$elm_webpack_starter$Zipper$main !== 'undefined') {
    _moarwick$elm_webpack_starter$Zipper$main(Elm['Zipper'], 'Zipper', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

