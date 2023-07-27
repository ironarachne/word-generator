'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.all = void 0;
const elementset_1 = __importDefault(require("./elementset"));
function all() {
    return [
        new elementset_1.default('affricates', 'a', ['ch', 'j']),
        new elementset_1.default('voiced dental plosive', 'b', ['d', 'dh']),
        new elementset_1.default('consonants', 'c', [
            'b',
            'c',
            'd',
            'f',
            'g',
            'h',
            'j',
            'k',
            'l',
            'm',
            'n',
            'p',
            'q',
            'r',
            's',
            't',
            'v',
            'w',
            'x',
            'y',
            'z',
        ]),
        new elementset_1.default('dentals', 'e', ['d', 'n', 't', 'l']),
        new elementset_1.default('fricatives', 'f', ['f', 'v']),
        new elementset_1.default('voiceless dental plosives', 'h', ['t', 'th']),
        new elementset_1.default('voiceless', 'i', ['h', 'f']),
        new elementset_1.default('velar plosives', 'k', ['c', 'k']),
        new elementset_1.default('liquids', 'l', ['l', 'r']),
        new elementset_1.default('close mid vowels', 'm', ['i', 'ö', 'eu', 'oe', 'e']),
        new elementset_1.default('nasals', 'n', ['m', 'n', 'ng']),
        new elementset_1.default('stops', 'o', ['t', 'd', 'p']),
        new elementset_1.default('plosives', 'p', ['g', 'k', 'p', 'b', 't', 'd', 'q']),
        new elementset_1.default('sibilants', 's', ['s', 'sh', 'z', 'zh']),
        new elementset_1.default('stridents', 't', ['f', 'v', 's', 'sh', 'z', 'zh']),
        new elementset_1.default('vowels', 'v', ['a', 'e', 'i', 'o', 'u']),
        new elementset_1.default('velars', 'w', ['w', 'wh', 'g']),
        new elementset_1.default('accented vowels', 'x', ['á', 'é', 'í', 'ó', 'ú']),
        new elementset_1.default('open vowels', 'y', ['e', 'ee', 'i', 'oo', 'y', 'ie']),
    ];
}
exports.all = all;
