export class Iso6391LanguageCodeBox{
    private __Iso6391LanguageCodeBox__:undefined;

    private readonly _data:string;
    constructor(data:Iso6391LanguageCode,onValidationFail:()=>void){
        if(!AllIso6391LanguageCodes.includes(data)){
            onValidationFail();
            throw new Error(`Bad data: Not an iso6391 value: ${data}`);
        }
    }

    getData(){
        return this._data;
    }
}

export type Iso6391LanguageCode = typeof AllIso6391LanguageCodes[number];
export const AllIso6391LanguageCodes = [
    "aa",
    "af",
    "ak",
    "ab",
    "sq",
    "am",
    "ar",
    "an",
    "hy",
    "as",
    "av",
    "ae",
    "ay",
    "az",
    "bm",
    "ba",
    "eu",
    "be",
    "bn",
    "bi",
    "bs",
    "br",
    "bg",
    "my",
    "ca",
    "ch",
    "ce",
    "ny",
    "zh",
    "cu",
    "cv",
    "kw",
    "co",
    "cr",
    "hr",
    "cs",
    "da",
    "dv",
    "nl",
    "dz",
    "en",
    "eo",
    "et",
    "ee",
    "fo",
    "fj",
    "fi",
    "fr",
    "fy",
    "ff",
    "gd",
    "gl",
    "lg",
    "ka",
    "de",
    "el",
    "kl",
    "gn",
    "gu",
    "ht",
    "ha",
    "he",
    "hz",
    "hi",
    "ho",
    "hu",
    "is",
    "io",
    "ig",
    "id",
    "ia",
    "ie",
    "iu",
    "ik",
    "ga",
    "it",
    "ja",
    "jv",
    "kn",
    "kr",
    "ks",
    "kk",
    "km",
    "ki",
    "rw",
    "ky",
    "kv",
    "kg",
    "ko",
    "kj",
    "ku",
    "lo",
    "la",
    "lv",
    "li",
    "ln",
    "lt",
    "lu",
    "lb",
    "mk",
    "mg",
    "ms",
    "ml",
    "mt",
    "gv",
    "mi",
    "mr",
    "mh",
    "mn",
    "na",
    "nv",
    "nd",
    "nr",
    "ng",
    "ne",
    "no",
    "nb",
    "nn",
    "ii",
    "oc",
    "oj",
    "or",
    "om",
    "os",
    "pi",
    "ps",
    "fa",
    "pl",
    "pt",
    "pa",
    "qu",
    "ro",
    "rm",
    "rn",
    "ru",
    "se",
    "sm",
    "sg",
    "sa",
    "sc",
    "sr",
    "sn",
    "sd",
    "si",
    "sk",
    "sl",
    "so",
    "st",
    "es",
    "su",
    "sw",
    "ss",
    "sv",
    "tl",
    "ty",
    "tg",
    "ta",
    "tt",
    "te",
    "th",
    "bo",
    "ti",
    "to",
    "ts",
    "tn",
    "tr",
    "tk",
    "tw",
    "ug",
    "uk",
    "ur",
    "uz",
    "ve",
    "vi",
    "vo",
    "wa",
    "cy",
    "wo",
    "xh",
    "yi",
    "yo",
    "za",
    "zu"
] as const;
