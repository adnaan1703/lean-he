'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var encodeMap = exports.encodeMap = { '\xAD': 'shy', '\u200C': 'zwnj', '\u200D': 'zwj', '\u200E': 'lrm', '\u2063': 'ic', '\u2062': 'it', '\u2061': 'af', '\u200F': 'rlm', '\u200B': 'ZeroWidthSpace', '\u2060': 'NoBreak', '\u0311': 'DownBreve', '\u20DB': 'tdot', '\u20DC': 'DotDot', '\t': 'Tab', '\n': 'NewLine', '\u2008': 'puncsp', '\u205F': 'MediumSpace', '\u2009': 'thinsp', '\u200A': 'hairsp', '\u2004': 'emsp13', '\u2002': 'ensp', '\u2005': 'emsp14', '\u2003': 'emsp', '\u2007': 'numsp', '\xA0': 'nbsp', '\u205F\u200A': 'ThickSpace', '\u203E': 'oline', '_': 'lowbar', '\u2010': 'dash', '\u2013': 'ndash', '\u2014': 'mdash', '\u2015': 'horbar', ',': 'comma', ';': 'semi', '\u204F': 'bsemi', ':': 'colon', '\u2A74': 'Colone', '!': 'excl', '\xA1': 'iexcl', '?': 'quest', '\xBF': 'iquest', '.': 'period', '\u2025': 'nldr', '\u2026': 'mldr', '\xB7': 'middot', '\'': 'apos', '\u2018': 'lsquo', '\u2019': 'rsquo', '\u201A': 'sbquo', '\u2039': 'lsaquo', '\u203A': 'rsaquo', '"': 'quot', '\u201C': 'ldquo', '\u201D': 'rdquo', '\u201E': 'bdquo', '\xAB': 'laquo', '\xBB': 'raquo', '(': 'lpar', ')': 'rpar', '[': 'lsqb', ']': 'rsqb', '{': 'lcub', '}': 'rcub', '\u2308': 'lceil', '\u2309': 'rceil', '\u230A': 'lfloor', '\u230B': 'rfloor', '\u2985': 'lopar', '\u2986': 'ropar', '\u298B': 'lbrke', '\u298C': 'rbrke', '\u298D': 'lbrkslu', '\u298E': 'rbrksld', '\u298F': 'lbrksld', '\u2990': 'rbrkslu', '\u2991': 'langd', '\u2992': 'rangd', '\u2993': 'lparlt', '\u2994': 'rpargt', '\u2995': 'gtlPar', '\u2996': 'ltrPar', '\u27E6': 'lobrk', '\u27E7': 'robrk', '\u27E8': 'lang', '\u27E9': 'rang', '\u27EA': 'Lang', '\u27EB': 'Rang', '\u27EC': 'loang', '\u27ED': 'roang', '\u2772': 'lbbrk', '\u2773': 'rbbrk', '\u2016': 'Vert', '\xA7': 'sect', '\xB6': 'para', '@': 'commat', '*': 'ast', '/': 'sol', 'undefined': null, '&': 'amp', '#': 'num', '%': 'percnt', '\u2030': 'permil', '\u2031': 'pertenk', '\u2020': 'dagger', '\u2021': 'Dagger', '\u2022': 'bull', '\u2043': 'hybull', '\u2032': 'prime', '\u2033': 'Prime', '\u2034': 'tprime', '\u2057': 'qprime', '\u2035': 'bprime', '\u2041': 'caret', '`': 'grave', '\xB4': 'acute', '\u02DC': 'tilde', '^': 'Hat', '\xAF': 'macr', '\u02D8': 'breve', '\u02D9': 'dot', '\xA8': 'die', '\u02DA': 'ring', '\u02DD': 'dblac', '\xB8': 'cedil', '\u02DB': 'ogon', '\u02C6': 'circ', '\u02C7': 'caron', '\xB0': 'deg', '\xA9': 'copy', '\xAE': 'reg', '\u2117': 'copysr', '\u2118': 'wp', '\u211E': 'rx', '\u2127': 'mho', '\u2129': 'iiota', '\u2190': 'larr', '\u219A': 'nlarr', '\u2192': 'rarr', '\u219B': 'nrarr', '\u2191': 'uarr', '\u2193': 'darr', '\u2194': 'harr', '\u21AE': 'nharr', '\u2195': 'varr', '\u2196': 'nwarr', '\u2197': 'nearr', '\u2198': 'searr', '\u2199': 'swarr', '\u219D': 'rarrw', '\u219D\u0338': 'nrarrw', '\u219E': 'Larr', '\u219F': 'Uarr', '\u21A0': 'Rarr', '\u21A1': 'Darr', '\u21A2': 'larrtl', '\u21A3': 'rarrtl', '\u21A4': 'mapstoleft', '\u21A5': 'mapstoup', '\u21A6': 'map', '\u21A7': 'mapstodown', '\u21A9': 'larrhk', '\u21AA': 'rarrhk', '\u21AB': 'larrlp', '\u21AC': 'rarrlp', '\u21AD': 'harrw', '\u21B0': 'lsh', '\u21B1': 'rsh', '\u21B2': 'ldsh', '\u21B3': 'rdsh', '\u21B5': 'crarr', '\u21B6': 'cularr', '\u21B7': 'curarr', '\u21BA': 'olarr', '\u21BB': 'orarr', '\u21BC': 'lharu', '\u21BD': 'lhard', '\u21BE': 'uharr', '\u21BF': 'uharl', '\u21C0': 'rharu', '\u21C1': 'rhard', '\u21C2': 'dharr', '\u21C3': 'dharl', '\u21C4': 'rlarr', '\u21C5': 'udarr', '\u21C6': 'lrarr', '\u21C7': 'llarr', '\u21C8': 'uuarr', '\u21C9': 'rrarr', '\u21CA': 'ddarr', '\u21CB': 'lrhar', '\u21CC': 'rlhar', '\u21D0': 'lArr', '\u21CD': 'nlArr', '\u21D1': 'uArr', '\u21D2': 'rArr', '\u21CF': 'nrArr', '\u21D3': 'dArr', '\u21D4': 'iff', '\u21CE': 'nhArr', '\u21D5': 'vArr', '\u21D6': 'nwArr', '\u21D7': 'neArr', '\u21D8': 'seArr', '\u21D9': 'swArr', '\u21DA': 'lAarr', '\u21DB': 'rAarr', '\u21DD': 'zigrarr', '\u21E4': 'larrb', '\u21E5': 'rarrb', '\u21F5': 'duarr', '\u21FD': 'loarr', '\u21FE': 'roarr', '\u21FF': 'hoarr', '\u2200': 'forall', '\u2201': 'comp', '\u2202': 'part', '\u2202\u0338': 'npart', '\u2203': 'exist', '\u2204': 'nexist', '\u2205': 'empty', '\u2207': 'Del', '\u2208': 'in', '\u2209': 'notin', '\u220B': 'ni', '\u220C': 'notni', '\u03F6': 'bepsi', '\u220F': 'prod', '\u2210': 'coprod', '\u2211': 'sum', '+': 'plus', '\xB1': 'pm', '\xF7': 'div', '\xD7': 'times', '<': 'lt', '\u226E': 'nlt', '<\u20D2': 'nvlt', '=': 'equals', '\u2260': 'ne', '=\u20E5': 'bne', '\u2A75': 'Equal', '>': 'gt', '\u226F': 'ngt', '>\u20D2': 'nvgt', '\xAC': 'not', '|': 'vert', '\xA6': 'brvbar', '\u2212': 'minus', '\u2213': 'mp', '\u2214': 'plusdo', '\u2044': 'frasl', '\u2216': 'setmn', '\u2217': 'lowast', '\u2218': 'compfn', '\u221A': 'Sqrt', '\u221D': 'prop', '\u221E': 'infin', '\u221F': 'angrt', '\u2220': 'ang', '\u2220\u20D2': 'nang', '\u2221': 'angmsd', '\u2222': 'angsph', '\u2223': 'mid', '\u2224': 'nmid', '\u2225': 'par', '\u2226': 'npar', '\u2227': 'and', '\u2228': 'or', '\u2229': 'cap', '\u2229\uFE00': 'caps', '\u222A': 'cup', '\u222A\uFE00': 'cups', '\u222B': 'int', '\u222C': 'Int', '\u222D': 'tint', '\u2A0C': 'qint', '\u222E': 'oint', '\u222F': 'Conint', '\u2230': 'Cconint', '\u2231': 'cwint', '\u2232': 'cwconint', '\u2233': 'awconint', '\u2234': 'there4', '\u2235': 'becaus', '\u2236': 'ratio', '\u2237': 'Colon', '\u2238': 'minusd', '\u223A': 'mDDot', '\u223B': 'homtht', '\u223C': 'sim', '\u2241': 'nsim', '\u223C\u20D2': 'nvsim', '\u223D': 'bsim', '\u223D\u0331': 'race', '\u223E': 'ac', '\u223E\u0333': 'acE', '\u223F': 'acd', '\u2240': 'wr', '\u2242': 'esim', '\u2242\u0338': 'nesim', '\u2243': 'sime', '\u2244': 'nsime', '\u2245': 'cong', '\u2247': 'ncong', '\u2246': 'simne', '\u2248': 'ap', '\u2249': 'nap', '\u224A': 'ape', '\u224B': 'apid', '\u224B\u0338': 'napid', '\u224C': 'bcong', '\u224D': 'CupCap', '\u226D': 'NotCupCap', '\u224D\u20D2': 'nvap', '\u224E': 'bump', '\u224E\u0338': 'nbump', '\u224F': 'bumpe', '\u224F\u0338': 'nbumpe', '\u2250': 'doteq', '\u2250\u0338': 'nedot', '\u2251': 'eDot', '\u2252': 'efDot', '\u2253': 'erDot', '\u2254': 'colone', '\u2255': 'ecolon', '\u2256': 'ecir', '\u2257': 'cire', '\u2259': 'wedgeq', '\u225A': 'veeeq', '\u225C': 'trie', '\u225F': 'equest', '\u2261': 'equiv', '\u2262': 'nequiv', '\u2261\u20E5': 'bnequiv', '\u2264': 'le', '\u2270': 'nle', '\u2264\u20D2': 'nvle', '\u2265': 'ge', '\u2271': 'nge', '\u2265\u20D2': 'nvge', '\u2266': 'lE', '\u2266\u0338': 'nlE', '\u2267': 'gE', '\u2267\u0338': 'ngE', '\u2268\uFE00': 'lvnE', '\u2268': 'lnE', '\u2269': 'gnE', '\u2269\uFE00': 'gvnE', '\u226A': 'll', '\u226A\u0338': 'nLtv', '\u226A\u20D2': 'nLt', '\u226B': 'gg', '\u226B\u0338': 'nGtv', '\u226B\u20D2': 'nGt', '\u226C': 'twixt', '\u2272': 'lsim', '\u2274': 'nlsim', '\u2273': 'gsim', '\u2275': 'ngsim', '\u2276': 'lg', '\u2278': 'ntlg', '\u2277': 'gl', '\u2279': 'ntgl', '\u227A': 'pr', '\u2280': 'npr', '\u227B': 'sc', '\u2281': 'nsc', '\u227C': 'prcue', '\u22E0': 'nprcue', '\u227D': 'sccue', '\u22E1': 'nsccue', '\u227E': 'prsim', '\u227F': 'scsim', '\u227F\u0338': 'NotSucceedsTilde', '\u2282': 'sub', '\u2284': 'nsub', '\u2282\u20D2': 'vnsub', '\u2283': 'sup', '\u2285': 'nsup', '\u2283\u20D2': 'vnsup', '\u2286': 'sube', '\u2288': 'nsube', '\u2287': 'supe', '\u2289': 'nsupe', '\u228A\uFE00': 'vsubne', '\u228A': 'subne', '\u228B\uFE00': 'vsupne', '\u228B': 'supne', '\u228D': 'cupdot', '\u228E': 'uplus', '\u228F': 'sqsub', '\u228F\u0338': 'NotSquareSubset', '\u2290': 'sqsup', '\u2290\u0338': 'NotSquareSuperset', '\u2291': 'sqsube', '\u22E2': 'nsqsube', '\u2292': 'sqsupe', '\u22E3': 'nsqsupe', '\u2293': 'sqcap', '\u2293\uFE00': 'sqcaps', '\u2294': 'sqcup', '\u2294\uFE00': 'sqcups', '\u2295': 'oplus', '\u2296': 'ominus', '\u2297': 'otimes', '\u2298': 'osol', '\u2299': 'odot', '\u229A': 'ocir', '\u229B': 'oast', '\u229D': 'odash', '\u229E': 'plusb', '\u229F': 'minusb', '\u22A0': 'timesb', '\u22A1': 'sdotb', '\u22A2': 'vdash', '\u22AC': 'nvdash', '\u22A3': 'dashv', '\u22A4': 'top', '\u22A5': 'bot', '\u22A7': 'models', '\u22A8': 'vDash', '\u22AD': 'nvDash', '\u22A9': 'Vdash', '\u22AE': 'nVdash', '\u22AA': 'Vvdash', '\u22AB': 'VDash', '\u22AF': 'nVDash', '\u22B0': 'prurel', '\u22B2': 'vltri', '\u22EA': 'nltri', '\u22B3': 'vrtri', '\u22EB': 'nrtri', '\u22B4': 'ltrie', '\u22EC': 'nltrie', '\u22B4\u20D2': 'nvltrie', '\u22B5': 'rtrie', '\u22ED': 'nrtrie', '\u22B5\u20D2': 'nvrtrie', '\u22B6': 'origof', '\u22B7': 'imof', '\u22B8': 'mumap', '\u22B9': 'hercon', '\u22BA': 'intcal', '\u22BB': 'veebar', '\u22BD': 'barvee', '\u22BE': 'angrtvb', '\u22BF': 'lrtri', '\u22C0': 'Wedge', '\u22C1': 'Vee', '\u22C2': 'xcap', '\u22C3': 'xcup', '\u22C4': 'diam', '\u22C5': 'sdot', '\u22C6': 'Star', '\u22C7': 'divonx', '\u22C8': 'bowtie', '\u22C9': 'ltimes', '\u22CA': 'rtimes', '\u22CB': 'lthree', '\u22CC': 'rthree', '\u22CD': 'bsime', '\u22CE': 'cuvee', '\u22CF': 'cuwed', '\u22D0': 'Sub', '\u22D1': 'Sup', '\u22D2': 'Cap', '\u22D3': 'Cup', '\u22D4': 'fork', '\u22D5': 'epar', '\u22D6': 'ltdot', '\u22D7': 'gtdot', '\u22D8': 'Ll', '\u22D8\u0338': 'nLl', '\u22D9': 'Gg', '\u22D9\u0338': 'nGg', '\u22DA\uFE00': 'lesg', '\u22DA': 'leg', '\u22DB': 'gel', '\u22DB\uFE00': 'gesl', '\u22DE': 'cuepr', '\u22DF': 'cuesc', '\u22E6': 'lnsim', '\u22E7': 'gnsim', '\u22E8': 'prnsim', '\u22E9': 'scnsim', '\u22EE': 'vellip', '\u22EF': 'ctdot', '\u22F0': 'utdot', '\u22F1': 'dtdot', '\u22F2': 'disin', '\u22F3': 'isinsv', '\u22F4': 'isins', '\u22F5': 'isindot', '\u22F5\u0338': 'notindot', '\u22F6': 'notinvc', '\u22F7': 'notinvb', '\u22F9': 'isinE', '\u22F9\u0338': 'notinE', '\u22FA': 'nisd', '\u22FB': 'xnis', '\u22FC': 'nis', '\u22FD': 'notnivc', '\u22FE': 'notnivb', '\u2305': 'barwed', '\u2306': 'Barwed', '\u230C': 'drcrop', '\u230D': 'dlcrop', '\u230E': 'urcrop', '\u230F': 'ulcrop', '\u2310': 'bnot', '\u2312': 'profline', '\u2313': 'profsurf', '\u2315': 'telrec', '\u2316': 'target', '\u231C': 'ulcorn', '\u231D': 'urcorn', '\u231E': 'dlcorn', '\u231F': 'drcorn', '\u2322': 'frown', '\u2323': 'smile', '\u232D': 'cylcty', '\u232E': 'profalar', '\u2336': 'topbot', '\u233D': 'ovbar', '\u233F': 'solbar', '\u237C': 'angzarr', '\u23B0': 'lmoust', '\u23B1': 'rmoust', '\u23B4': 'tbrk', '\u23B5': 'bbrk', '\u23B6': 'bbrktbrk', '\u23DC': 'OverParenthesis', '\u23DD': 'UnderParenthesis', '\u23DE': 'OverBrace', '\u23DF': 'UnderBrace', '\u23E2': 'trpezium', '\u23E7': 'elinters', '\u2423': 'blank', '\u2500': 'boxh', '\u2502': 'boxv', '\u250C': 'boxdr', '\u2510': 'boxdl', '\u2514': 'boxur', '\u2518': 'boxul', '\u251C': 'boxvr', '\u2524': 'boxvl', '\u252C': 'boxhd', '\u2534': 'boxhu', '\u253C': 'boxvh', '\u2550': 'boxH', '\u2551': 'boxV', '\u2552': 'boxdR', '\u2553': 'boxDr', '\u2554': 'boxDR', '\u2555': 'boxdL', '\u2556': 'boxDl', '\u2557': 'boxDL', '\u2558': 'boxuR', '\u2559': 'boxUr', '\u255A': 'boxUR', '\u255B': 'boxuL', '\u255C': 'boxUl', '\u255D': 'boxUL', '\u255E': 'boxvR', '\u255F': 'boxVr', '\u2560': 'boxVR', '\u2561': 'boxvL', '\u2562': 'boxVl', '\u2563': 'boxVL', '\u2564': 'boxHd', '\u2565': 'boxhD', '\u2566': 'boxHD', '\u2567': 'boxHu', '\u2568': 'boxhU', '\u2569': 'boxHU', '\u256A': 'boxvH', '\u256B': 'boxVh', '\u256C': 'boxVH', '\u2580': 'uhblk', '\u2584': 'lhblk', '\u2588': 'block', '\u2591': 'blk14', '\u2592': 'blk12', '\u2593': 'blk34', '\u25A1': 'squ', '\u25AA': 'squf', '\u25AB': 'EmptyVerySmallSquare', '\u25AD': 'rect', '\u25AE': 'marker', '\u25B1': 'fltns', '\u25B3': 'xutri', '\u25B4': 'utrif', '\u25B5': 'utri', '\u25B8': 'rtrif', '\u25B9': 'rtri', '\u25BD': 'xdtri', '\u25BE': 'dtrif', '\u25BF': 'dtri', '\u25C2': 'ltrif', '\u25C3': 'ltri', '\u25CA': 'loz', '\u25CB': 'cir', '\u25EC': 'tridot', '\u25EF': 'xcirc', '\u25F8': 'ultri', '\u25F9': 'urtri', '\u25FA': 'lltri', '\u25FB': 'EmptySmallSquare', '\u25FC': 'FilledSmallSquare', '\u2605': 'starf', '\u2606': 'star', '\u260E': 'phone', '\u2640': 'female', '\u2642': 'male', '\u2660': 'spades', '\u2663': 'clubs', '\u2665': 'hearts', '\u2666': 'diams', '\u266A': 'sung', '\u2713': 'check', '\u2717': 'cross', '\u2720': 'malt', '\u2736': 'sext', '\u2758': 'VerticalSeparator', '\u27C8': 'bsolhsub', '\u27C9': 'suphsol', '\u27F5': 'xlarr', '\u27F6': 'xrarr', '\u27F7': 'xharr', '\u27F8': 'xlArr', '\u27F9': 'xrArr', '\u27FA': 'xhArr', '\u27FC': 'xmap', '\u27FF': 'dzigrarr', '\u2902': 'nvlArr', '\u2903': 'nvrArr', '\u2904': 'nvHarr', '\u2905': 'Map', '\u290C': 'lbarr', '\u290D': 'rbarr', '\u290E': 'lBarr', '\u290F': 'rBarr', '\u2910': 'RBarr', '\u2911': 'DDotrahd', '\u2912': 'UpArrowBar', '\u2913': 'DownArrowBar', '\u2916': 'Rarrtl', '\u2919': 'latail', '\u291A': 'ratail', '\u291B': 'lAtail', '\u291C': 'rAtail', '\u291D': 'larrfs', '\u291E': 'rarrfs', '\u291F': 'larrbfs', '\u2920': 'rarrbfs', '\u2923': 'nwarhk', '\u2924': 'nearhk', '\u2925': 'searhk', '\u2926': 'swarhk', '\u2927': 'nwnear', '\u2928': 'toea', '\u2929': 'tosa', '\u292A': 'swnwar', '\u2933': 'rarrc', '\u2933\u0338': 'nrarrc', '\u2935': 'cudarrr', '\u2936': 'ldca', '\u2937': 'rdca', '\u2938': 'cudarrl', '\u2939': 'larrpl', '\u293C': 'curarrm', '\u293D': 'cularrp', '\u2945': 'rarrpl', '\u2948': 'harrcir', '\u2949': 'Uarrocir', '\u294A': 'lurdshar', '\u294B': 'ldrushar', '\u294E': 'LeftRightVector', '\u294F': 'RightUpDownVector', '\u2950': 'DownLeftRightVector', '\u2951': 'LeftUpDownVector', '\u2952': 'LeftVectorBar', '\u2953': 'RightVectorBar', '\u2954': 'RightUpVectorBar', '\u2955': 'RightDownVectorBar', '\u2956': 'DownLeftVectorBar', '\u2957': 'DownRightVectorBar', '\u2958': 'LeftUpVectorBar', '\u2959': 'LeftDownVectorBar', '\u295A': 'LeftTeeVector', '\u295B': 'RightTeeVector', '\u295C': 'RightUpTeeVector', '\u295D': 'RightDownTeeVector', '\u295E': 'DownLeftTeeVector', '\u295F': 'DownRightTeeVector', '\u2960': 'LeftUpTeeVector', '\u2961': 'LeftDownTeeVector', '\u2962': 'lHar', '\u2963': 'uHar', '\u2964': 'rHar', '\u2965': 'dHar', '\u2966': 'luruhar', '\u2967': 'ldrdhar', '\u2968': 'ruluhar', '\u2969': 'rdldhar', '\u296A': 'lharul', '\u296B': 'llhard', '\u296C': 'rharul', '\u296D': 'lrhard', '\u296E': 'udhar', '\u296F': 'duhar', '\u2970': 'RoundImplies', '\u2971': 'erarr', '\u2972': 'simrarr', '\u2973': 'larrsim', '\u2974': 'rarrsim', '\u2975': 'rarrap', '\u2976': 'ltlarr', '\u2978': 'gtrarr', '\u2979': 'subrarr', '\u297B': 'suplarr', '\u297C': 'lfisht', '\u297D': 'rfisht', '\u297E': 'ufisht', '\u297F': 'dfisht', '\u299A': 'vzigzag', '\u299C': 'vangrt', '\u299D': 'angrtvbd', '\u29A4': 'ange', '\u29A5': 'range', '\u29A6': 'dwangle', '\u29A7': 'uwangle', '\u29A8': 'angmsdaa', '\u29A9': 'angmsdab', '\u29AA': 'angmsdac', '\u29AB': 'angmsdad', '\u29AC': 'angmsdae', '\u29AD': 'angmsdaf', '\u29AE': 'angmsdag', '\u29AF': 'angmsdah', '\u29B0': 'bemptyv', '\u29B1': 'demptyv', '\u29B2': 'cemptyv', '\u29B3': 'raemptyv', '\u29B4': 'laemptyv', '\u29B5': 'ohbar', '\u29B6': 'omid', '\u29B7': 'opar', '\u29B9': 'operp', '\u29BB': 'olcross', '\u29BC': 'odsold', '\u29BE': 'olcir', '\u29BF': 'ofcir', '\u29C0': 'olt', '\u29C1': 'ogt', '\u29C2': 'cirscir', '\u29C3': 'cirE', '\u29C4': 'solb', '\u29C5': 'bsolb', '\u29C9': 'boxbox', '\u29CD': 'trisb', '\u29CE': 'rtriltri', '\u29CF': 'LeftTriangleBar', '\u29CF\u0338': 'NotLeftTriangleBar', '\u29D0': 'RightTriangleBar', '\u29D0\u0338': 'NotRightTriangleBar', '\u29DC': 'iinfin', '\u29DD': 'infintie', '\u29DE': 'nvinfin', '\u29E3': 'eparsl', '\u29E4': 'smeparsl', '\u29E5': 'eqvparsl', '\u29EB': 'lozf', '\u29F4': 'RuleDelayed', '\u29F6': 'dsol', '\u2A00': 'xodot', '\u2A01': 'xoplus', '\u2A02': 'xotime', '\u2A04': 'xuplus', '\u2A06': 'xsqcup', '\u2A0D': 'fpartint', '\u2A10': 'cirfnint', '\u2A11': 'awint', '\u2A12': 'rppolint', '\u2A13': 'scpolint', '\u2A14': 'npolint', '\u2A15': 'pointint', '\u2A16': 'quatint', '\u2A17': 'intlarhk', '\u2A22': 'pluscir', '\u2A23': 'plusacir', '\u2A24': 'simplus', '\u2A25': 'plusdu', '\u2A26': 'plussim', '\u2A27': 'plustwo', '\u2A29': 'mcomma', '\u2A2A': 'minusdu', '\u2A2D': 'loplus', '\u2A2E': 'roplus', '\u2A2F': 'Cross', '\u2A30': 'timesd', '\u2A31': 'timesbar', '\u2A33': 'smashp', '\u2A34': 'lotimes', '\u2A35': 'rotimes', '\u2A36': 'otimesas', '\u2A37': 'Otimes', '\u2A38': 'odiv', '\u2A39': 'triplus', '\u2A3A': 'triminus', '\u2A3B': 'tritime', '\u2A3C': 'iprod', '\u2A3F': 'amalg', '\u2A40': 'capdot', '\u2A42': 'ncup', '\u2A43': 'ncap', '\u2A44': 'capand', '\u2A45': 'cupor', '\u2A46': 'cupcap', '\u2A47': 'capcup', '\u2A48': 'cupbrcap', '\u2A49': 'capbrcup', '\u2A4A': 'cupcup', '\u2A4B': 'capcap', '\u2A4C': 'ccups', '\u2A4D': 'ccaps', '\u2A50': 'ccupssm', '\u2A53': 'And', '\u2A54': 'Or', '\u2A55': 'andand', '\u2A56': 'oror', '\u2A57': 'orslope', '\u2A58': 'andslope', '\u2A5A': 'andv', '\u2A5B': 'orv', '\u2A5C': 'andd', '\u2A5D': 'ord', '\u2A5F': 'wedbar', '\u2A66': 'sdote', '\u2A6A': 'simdot', '\u2A6D': 'congdot', '\u2A6D\u0338': 'ncongdot', '\u2A6E': 'easter', '\u2A6F': 'apacir', '\u2A70': 'apE', '\u2A70\u0338': 'napE', '\u2A71': 'eplus', '\u2A72': 'pluse', '\u2A73': 'Esim', '\u2A77': 'eDDot', '\u2A78': 'equivDD', '\u2A79': 'ltcir', '\u2A7A': 'gtcir', '\u2A7B': 'ltquest', '\u2A7C': 'gtquest', '\u2A7D': 'les', '\u2A7D\u0338': 'nles', '\u2A7E': 'ges', '\u2A7E\u0338': 'nges', '\u2A7F': 'lesdot', '\u2A80': 'gesdot', '\u2A81': 'lesdoto', '\u2A82': 'gesdoto', '\u2A83': 'lesdotor', '\u2A84': 'gesdotol', '\u2A85': 'lap', '\u2A86': 'gap', '\u2A87': 'lne', '\u2A88': 'gne', '\u2A89': 'lnap', '\u2A8A': 'gnap', '\u2A8B': 'lEg', '\u2A8C': 'gEl', '\u2A8D': 'lsime', '\u2A8E': 'gsime', '\u2A8F': 'lsimg', '\u2A90': 'gsiml', '\u2A91': 'lgE', '\u2A92': 'glE', '\u2A93': 'lesges', '\u2A94': 'gesles', '\u2A95': 'els', '\u2A96': 'egs', '\u2A97': 'elsdot', '\u2A98': 'egsdot', '\u2A99': 'el', '\u2A9A': 'eg', '\u2A9D': 'siml', '\u2A9E': 'simg', '\u2A9F': 'simlE', '\u2AA0': 'simgE', '\u2AA1': 'LessLess', '\u2AA1\u0338': 'NotNestedLessLess', '\u2AA2': 'GreaterGreater', '\u2AA2\u0338': 'NotNestedGreaterGreater', '\u2AA4': 'glj', '\u2AA5': 'gla', '\u2AA6': 'ltcc', '\u2AA7': 'gtcc', '\u2AA8': 'lescc', '\u2AA9': 'gescc', '\u2AAA': 'smt', '\u2AAB': 'lat', '\u2AAC': 'smte', '\u2AAC\uFE00': 'smtes', '\u2AAD': 'late', '\u2AAD\uFE00': 'lates', '\u2AAE': 'bumpE', '\u2AAF': 'pre', '\u2AAF\u0338': 'npre', '\u2AB0': 'sce', '\u2AB0\u0338': 'nsce', '\u2AB3': 'prE', '\u2AB4': 'scE', '\u2AB5': 'prnE', '\u2AB6': 'scnE', '\u2AB7': 'prap', '\u2AB8': 'scap', '\u2AB9': 'prnap', '\u2ABA': 'scnap', '\u2ABB': 'Pr', '\u2ABC': 'Sc', '\u2ABD': 'subdot', '\u2ABE': 'supdot', '\u2ABF': 'subplus', '\u2AC0': 'supplus', '\u2AC1': 'submult', '\u2AC2': 'supmult', '\u2AC3': 'subedot', '\u2AC4': 'supedot', '\u2AC5': 'subE', '\u2AC5\u0338': 'nsubE', '\u2AC6': 'supE', '\u2AC6\u0338': 'nsupE', '\u2AC7': 'subsim', '\u2AC8': 'supsim', '\u2ACB\uFE00': 'vsubnE', '\u2ACB': 'subnE', '\u2ACC\uFE00': 'vsupnE', '\u2ACC': 'supnE', '\u2ACF': 'csub', '\u2AD0': 'csup', '\u2AD1': 'csube', '\u2AD2': 'csupe', '\u2AD3': 'subsup', '\u2AD4': 'supsub', '\u2AD5': 'subsub', '\u2AD6': 'supsup', '\u2AD7': 'suphsub', '\u2AD8': 'supdsub', '\u2AD9': 'forkv', '\u2ADA': 'topfork', '\u2ADB': 'mlcp', '\u2AE4': 'Dashv', '\u2AE6': 'Vdashl', '\u2AE7': 'Barv', '\u2AE8': 'vBar', '\u2AE9': 'vBarv', '\u2AEB': 'Vbar', '\u2AEC': 'Not', '\u2AED': 'bNot', '\u2AEE': 'rnmid', '\u2AEF': 'cirmid', '\u2AF0': 'midcir', '\u2AF1': 'topcir', '\u2AF2': 'nhpar', '\u2AF3': 'parsim', '\u2AFD': 'parsl', '\u2AFD\u20E5': 'nparsl', '\u266D': 'flat', '\u266E': 'natur', '\u266F': 'sharp', '\xA4': 'curren', '\xA2': 'cent', '$': 'dollar', '\xA3': 'pound', '\xA5': 'yen', '\u20AC': 'euro', '\xB9': 'sup1', '\xBD': 'half', '\u2153': 'frac13', '\xBC': 'frac14', '\u2155': 'frac15', '\u2159': 'frac16', '\u215B': 'frac18', '\xB2': 'sup2', '\u2154': 'frac23', '\u2156': 'frac25', '\xB3': 'sup3', '\xBE': 'frac34', '\u2157': 'frac35', '\u215C': 'frac38', '\u2158': 'frac45', '\u215A': 'frac56', '\u215D': 'frac58', '\u215E': 'frac78', '\uD835\uDCB6': 'ascr', '\uD835\uDD52': 'aopf', '\uD835\uDD1E': 'afr', '\uD835\uDD38': 'Aopf', '\uD835\uDD04': 'Afr', '\uD835\uDC9C': 'Ascr', '\xAA': 'ordf', '\xE1': 'aacute', '\xC1': 'Aacute', '\xE0': 'agrave', '\xC0': 'Agrave', '\u0103': 'abreve', '\u0102': 'Abreve', '\xE2': 'acirc', '\xC2': 'Acirc', '\xE5': 'aring', '\xC5': 'angst', '\xE4': 'auml', '\xC4': 'Auml', '\xE3': 'atilde', '\xC3': 'Atilde', '\u0105': 'aogon', '\u0104': 'Aogon', '\u0101': 'amacr', '\u0100': 'Amacr', '\xE6': 'aelig', '\xC6': 'AElig', '\uD835\uDCB7': 'bscr', '\uD835\uDD53': 'bopf', '\uD835\uDD1F': 'bfr', '\uD835\uDD39': 'Bopf', '\u212C': 'Bscr', '\uD835\uDD05': 'Bfr', '\uD835\uDD20': 'cfr', '\uD835\uDCB8': 'cscr', '\uD835\uDD54': 'copf', '\u212D': 'Cfr', '\uD835\uDC9E': 'Cscr', '\u2102': 'Copf', '\u0107': 'cacute', '\u0106': 'Cacute', '\u0109': 'ccirc', '\u0108': 'Ccirc', '\u010D': 'ccaron', '\u010C': 'Ccaron', '\u010B': 'cdot', '\u010A': 'Cdot', '\xE7': 'ccedil', '\xC7': 'Ccedil', '\u2105': 'incare', '\uD835\uDD21': 'dfr', '\u2146': 'dd', '\uD835\uDD55': 'dopf', '\uD835\uDCB9': 'dscr', '\uD835\uDC9F': 'Dscr', '\uD835\uDD07': 'Dfr', '\u2145': 'DD', '\uD835\uDD3B': 'Dopf', '\u010F': 'dcaron', '\u010E': 'Dcaron', '\u0111': 'dstrok', '\u0110': 'Dstrok', '\xF0': 'eth', '\xD0': 'ETH', '\u2147': 'ee', '\u212F': 'escr', '\uD835\uDD22': 'efr', '\uD835\uDD56': 'eopf', '\u2130': 'Escr', '\uD835\uDD08': 'Efr', '\uD835\uDD3C': 'Eopf', '\xE9': 'eacute', '\xC9': 'Eacute', '\xE8': 'egrave', '\xC8': 'Egrave', '\xEA': 'ecirc', '\xCA': 'Ecirc', '\u011B': 'ecaron', '\u011A': 'Ecaron', '\xEB': 'euml', '\xCB': 'Euml', '\u0117': 'edot', '\u0116': 'Edot', '\u0119': 'eogon', '\u0118': 'Eogon', '\u0113': 'emacr', '\u0112': 'Emacr', '\uD835\uDD23': 'ffr', '\uD835\uDD57': 'fopf', '\uD835\uDCBB': 'fscr', '\uD835\uDD09': 'Ffr', '\uD835\uDD3D': 'Fopf', '\u2131': 'Fscr', '\uFB00': 'fflig', '\uFB03': 'ffilig', '\uFB04': 'ffllig', '\uFB01': 'filig', 'fj': 'fjlig', '\uFB02': 'fllig', '\u0192': 'fnof', '\u210A': 'gscr', '\uD835\uDD58': 'gopf', '\uD835\uDD24': 'gfr', '\uD835\uDCA2': 'Gscr', '\uD835\uDD3E': 'Gopf', '\uD835\uDD0A': 'Gfr', '\u01F5': 'gacute', '\u011F': 'gbreve', '\u011E': 'Gbreve', '\u011D': 'gcirc', '\u011C': 'Gcirc', '\u0121': 'gdot', '\u0120': 'Gdot', '\u0122': 'Gcedil', '\uD835\uDD25': 'hfr', '\u210E': 'planckh', '\uD835\uDCBD': 'hscr', '\uD835\uDD59': 'hopf', '\u210B': 'Hscr', '\u210C': 'Hfr', '\u210D': 'Hopf', '\u0125': 'hcirc', '\u0124': 'Hcirc', '\u210F': 'hbar', '\u0127': 'hstrok', '\u0126': 'Hstrok', '\uD835\uDD5A': 'iopf', '\uD835\uDD26': 'ifr', '\uD835\uDCBE': 'iscr', '\u2148': 'ii', '\uD835\uDD40': 'Iopf', '\u2110': 'Iscr', '\u2111': 'Im', '\xED': 'iacute', '\xCD': 'Iacute', '\xEC': 'igrave', '\xCC': 'Igrave', '\xEE': 'icirc', '\xCE': 'Icirc', '\xEF': 'iuml', '\xCF': 'Iuml', '\u0129': 'itilde', '\u0128': 'Itilde', '\u0130': 'Idot', '\u012F': 'iogon', '\u012E': 'Iogon', '\u012B': 'imacr', '\u012A': 'Imacr', '\u0133': 'ijlig', '\u0132': 'IJlig', '\u0131': 'imath', '\uD835\uDCBF': 'jscr', '\uD835\uDD5B': 'jopf', '\uD835\uDD27': 'jfr', '\uD835\uDCA5': 'Jscr', '\uD835\uDD0D': 'Jfr', '\uD835\uDD41': 'Jopf', '\u0135': 'jcirc', '\u0134': 'Jcirc', '\u0237': 'jmath', '\uD835\uDD5C': 'kopf', '\uD835\uDCC0': 'kscr', '\uD835\uDD28': 'kfr', '\uD835\uDCA6': 'Kscr', '\uD835\uDD42': 'Kopf', '\uD835\uDD0E': 'Kfr', '\u0137': 'kcedil', '\u0136': 'Kcedil', '\uD835\uDD29': 'lfr', '\uD835\uDCC1': 'lscr', '\u2113': 'ell', '\uD835\uDD5D': 'lopf', '\u2112': 'Lscr', '\uD835\uDD0F': 'Lfr', '\uD835\uDD43': 'Lopf', '\u013A': 'lacute', '\u0139': 'Lacute', '\u013E': 'lcaron', '\u013D': 'Lcaron', '\u013C': 'lcedil', '\u013B': 'Lcedil', '\u0142': 'lstrok', '\u0141': 'Lstrok', '\u0140': 'lmidot', '\u013F': 'Lmidot', '\uD835\uDD2A': 'mfr', '\uD835\uDD5E': 'mopf', '\uD835\uDCC2': 'mscr', '\uD835\uDD10': 'Mfr', '\uD835\uDD44': 'Mopf', '\u2133': 'Mscr', '\uD835\uDD2B': 'nfr', '\uD835\uDD5F': 'nopf', '\uD835\uDCC3': 'nscr', '\u2115': 'Nopf', '\uD835\uDCA9': 'Nscr', '\uD835\uDD11': 'Nfr', '\u0144': 'nacute', '\u0143': 'Nacute', '\u0148': 'ncaron', '\u0147': 'Ncaron', '\xF1': 'ntilde', '\xD1': 'Ntilde', '\u0146': 'ncedil', '\u0145': 'Ncedil', '\u2116': 'numero', '\u014B': 'eng', '\u014A': 'ENG', '\uD835\uDD60': 'oopf', '\uD835\uDD2C': 'ofr', '\u2134': 'oscr', '\uD835\uDCAA': 'Oscr', '\uD835\uDD12': 'Ofr', '\uD835\uDD46': 'Oopf', '\xBA': 'ordm', '\xF3': 'oacute', '\xD3': 'Oacute', '\xF2': 'ograve', '\xD2': 'Ograve', '\xF4': 'ocirc', '\xD4': 'Ocirc', '\xF6': 'ouml', '\xD6': 'Ouml', '\u0151': 'odblac', '\u0150': 'Odblac', '\xF5': 'otilde', '\xD5': 'Otilde', '\xF8': 'oslash', '\xD8': 'Oslash', '\u014D': 'omacr', '\u014C': 'Omacr', '\u0153': 'oelig', '\u0152': 'OElig', '\uD835\uDD2D': 'pfr', '\uD835\uDCC5': 'pscr', '\uD835\uDD61': 'popf', '\u2119': 'Popf', '\uD835\uDD13': 'Pfr', '\uD835\uDCAB': 'Pscr', '\uD835\uDD62': 'qopf', '\uD835\uDD2E': 'qfr', '\uD835\uDCC6': 'qscr', '\uD835\uDCAC': 'Qscr', '\uD835\uDD14': 'Qfr', '\u211A': 'Qopf', '\u0138': 'kgreen', '\uD835\uDD2F': 'rfr', '\uD835\uDD63': 'ropf', '\uD835\uDCC7': 'rscr', '\u211B': 'Rscr', '\u211C': 'Re', '\u211D': 'Ropf', '\u0155': 'racute', '\u0154': 'Racute', '\u0159': 'rcaron', '\u0158': 'Rcaron', '\u0157': 'rcedil', '\u0156': 'Rcedil', '\uD835\uDD64': 'sopf', '\uD835\uDCC8': 'sscr', '\uD835\uDD30': 'sfr', '\uD835\uDD4A': 'Sopf', '\uD835\uDD16': 'Sfr', '\uD835\uDCAE': 'Sscr', '\u24C8': 'oS', '\u015B': 'sacute', '\u015A': 'Sacute', '\u015D': 'scirc', '\u015C': 'Scirc', '\u0161': 'scaron', '\u0160': 'Scaron', '\u015F': 'scedil', '\u015E': 'Scedil', '\xDF': 'szlig', '\uD835\uDD31': 'tfr', '\uD835\uDCC9': 'tscr', '\uD835\uDD65': 'topf', '\uD835\uDCAF': 'Tscr', '\uD835\uDD17': 'Tfr', '\uD835\uDD4B': 'Topf', '\u0165': 'tcaron', '\u0164': 'Tcaron', '\u0163': 'tcedil', '\u0162': 'Tcedil', '\u2122': 'trade', '\u0167': 'tstrok', '\u0166': 'Tstrok', '\uD835\uDCCA': 'uscr', '\uD835\uDD66': 'uopf', '\uD835\uDD32': 'ufr', '\uD835\uDD4C': 'Uopf', '\uD835\uDD18': 'Ufr', '\uD835\uDCB0': 'Uscr', '\xFA': 'uacute', '\xDA': 'Uacute', '\xF9': 'ugrave', '\xD9': 'Ugrave', '\u016D': 'ubreve', '\u016C': 'Ubreve', '\xFB': 'ucirc', '\xDB': 'Ucirc', '\u016F': 'uring', '\u016E': 'Uring', '\xFC': 'uuml', '\xDC': 'Uuml', '\u0171': 'udblac', '\u0170': 'Udblac', '\u0169': 'utilde', '\u0168': 'Utilde', '\u0173': 'uogon', '\u0172': 'Uogon', '\u016B': 'umacr', '\u016A': 'Umacr', '\uD835\uDD33': 'vfr', '\uD835\uDD67': 'vopf', '\uD835\uDCCB': 'vscr', '\uD835\uDD19': 'Vfr', '\uD835\uDD4D': 'Vopf', '\uD835\uDCB1': 'Vscr', '\uD835\uDD68': 'wopf', '\uD835\uDCCC': 'wscr', '\uD835\uDD34': 'wfr', '\uD835\uDCB2': 'Wscr', '\uD835\uDD4E': 'Wopf', '\uD835\uDD1A': 'Wfr', '\u0175': 'wcirc', '\u0174': 'Wcirc', '\uD835\uDD35': 'xfr', '\uD835\uDCCD': 'xscr', '\uD835\uDD69': 'xopf', '\uD835\uDD4F': 'Xopf', '\uD835\uDD1B': 'Xfr', '\uD835\uDCB3': 'Xscr', '\uD835\uDD36': 'yfr', '\uD835\uDCCE': 'yscr', '\uD835\uDD6A': 'yopf', '\uD835\uDCB4': 'Yscr', '\uD835\uDD1C': 'Yfr', '\uD835\uDD50': 'Yopf', '\xFD': 'yacute', '\xDD': 'Yacute', '\u0177': 'ycirc', '\u0176': 'Ycirc', '\xFF': 'yuml', '\u0178': 'Yuml', '\uD835\uDCCF': 'zscr', '\uD835\uDD37': 'zfr', '\uD835\uDD6B': 'zopf', '\u2128': 'Zfr', '\u2124': 'Zopf', '\uD835\uDCB5': 'Zscr', '\u017A': 'zacute', '\u0179': 'Zacute', '\u017E': 'zcaron', '\u017D': 'Zcaron', '\u017C': 'zdot', '\u017B': 'Zdot', '\u01B5': 'imped', '\xFE': 'thorn', '\xDE': 'THORN', '\u0149': 'napos', '\u03B1': 'alpha', '\u0391': 'Alpha', '\u03B2': 'beta', '\u0392': 'Beta', '\u03B3': 'gamma', '\u0393': 'Gamma', '\u03B4': 'delta', '\u0394': 'Delta', '\u03B5': 'epsi', '\u03F5': 'epsiv', '\u0395': 'Epsilon', '\u03DD': 'gammad', '\u03DC': 'Gammad', '\u03B6': 'zeta', '\u0396': 'Zeta', '\u03B7': 'eta', '\u0397': 'Eta', '\u03B8': 'theta', '\u03D1': 'thetav', '\u0398': 'Theta', '\u03B9': 'iota', '\u0399': 'Iota', '\u03BA': 'kappa', '\u03F0': 'kappav', '\u039A': 'Kappa', '\u03BB': 'lambda', '\u039B': 'Lambda', '\u03BC': 'mu', '\xB5': 'micro', '\u039C': 'Mu', '\u03BD': 'nu', '\u039D': 'Nu', '\u03BE': 'xi', '\u039E': 'Xi', '\u03BF': 'omicron', '\u039F': 'Omicron', '\u03C0': 'pi', '\u03D6': 'piv', '\u03A0': 'Pi', '\u03C1': 'rho', '\u03F1': 'rhov', '\u03A1': 'Rho', '\u03C3': 'sigma', '\u03A3': 'Sigma', '\u03C2': 'sigmaf', '\u03C4': 'tau', '\u03A4': 'Tau', '\u03C5': 'upsi', '\u03A5': 'Upsilon', '\u03D2': 'Upsi', '\u03C6': 'phi', '\u03D5': 'phiv', '\u03A6': 'Phi', '\u03C7': 'chi', '\u03A7': 'Chi', '\u03C8': 'psi', '\u03A8': 'Psi', '\u03C9': 'omega', '\u03A9': 'ohm', '\u0430': 'acy', '\u0410': 'Acy', '\u0431': 'bcy', '\u0411': 'Bcy', '\u0432': 'vcy', '\u0412': 'Vcy', '\u0433': 'gcy', '\u0413': 'Gcy', '\u0453': 'gjcy', '\u0403': 'GJcy', '\u0434': 'dcy', '\u0414': 'Dcy', '\u0452': 'djcy', '\u0402': 'DJcy', '\u0435': 'iecy', '\u0415': 'IEcy', '\u0451': 'iocy', '\u0401': 'IOcy', '\u0454': 'jukcy', '\u0404': 'Jukcy', '\u0436': 'zhcy', '\u0416': 'ZHcy', '\u0437': 'zcy', '\u0417': 'Zcy', '\u0455': 'dscy', '\u0405': 'DScy', '\u0438': 'icy', '\u0418': 'Icy', '\u0456': 'iukcy', '\u0406': 'Iukcy', '\u0457': 'yicy', '\u0407': 'YIcy', '\u0439': 'jcy', '\u0419': 'Jcy', '\u0458': 'jsercy', '\u0408': 'Jsercy', '\u043A': 'kcy', '\u041A': 'Kcy', '\u045C': 'kjcy', '\u040C': 'KJcy', '\u043B': 'lcy', '\u041B': 'Lcy', '\u0459': 'ljcy', '\u0409': 'LJcy', '\u043C': 'mcy', '\u041C': 'Mcy', '\u043D': 'ncy', '\u041D': 'Ncy', '\u045A': 'njcy', '\u040A': 'NJcy', '\u043E': 'ocy', '\u041E': 'Ocy', '\u043F': 'pcy', '\u041F': 'Pcy', '\u0440': 'rcy', '\u0420': 'Rcy', '\u0441': 'scy', '\u0421': 'Scy', '\u0442': 'tcy', '\u0422': 'Tcy', '\u045B': 'tshcy', '\u040B': 'TSHcy', '\u0443': 'ucy', '\u0423': 'Ucy', '\u045E': 'ubrcy', '\u040E': 'Ubrcy', '\u0444': 'fcy', '\u0424': 'Fcy', '\u0445': 'khcy', '\u0425': 'KHcy', '\u0446': 'tscy', '\u0426': 'TScy', '\u0447': 'chcy', '\u0427': 'CHcy', '\u045F': 'dzcy', '\u040F': 'DZcy', '\u0448': 'shcy', '\u0428': 'SHcy', '\u0449': 'shchcy', '\u0429': 'SHCHcy', '\u044A': 'hardcy', '\u042A': 'HARDcy', '\u044B': 'ycy', '\u042B': 'Ycy', '\u044C': 'softcy', '\u042C': 'SOFTcy', '\u044D': 'ecy', '\u042D': 'Ecy', '\u044E': 'yucy', '\u042E': 'YUcy', '\u044F': 'yacy', '\u042F': 'YAcy', '\u2135': 'aleph', '\u2136': 'beth', '\u2137': 'gimel', '\u2138': 'daleth' };