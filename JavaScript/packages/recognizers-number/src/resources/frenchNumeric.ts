// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// ------------------------------------------------------------------------------

import { BaseNumbers } from "./baseNumbers";
export namespace FrenchNumeric {
    export const LangMarker = 'Fr';
    export const CompoundNumberLanguage = false;
    export const MultiDecimalSeparatorCulture = true;
    export const RoundNumberIntegerRegex = `(cent|mille|millions|million|milliard|milliards|billion|billions)`;
    export const ZeroToNineIntegerRegex = `(et un|un|une|deux|trois|quatre|cinq|six|sept|huit|neuf)`;
    export const TenToNineteenIntegerRegex = `((seize|quinze|quatorze|treize|douze|onze)|dix(\\Wneuf|\\Whuit|\\Wsept)?)`;
    export const TensNumberIntegerRegex = `(quatre\\Wvingt(s|\\Wdix)?|soixante\\Wdix|vingt|trente|quarante|cinquante|soixante|septante|octante|huitante|nonante)`;
    export const DigitsNumberRegex = `\\d|\\d{1,3}(\\.\\d{3})`;
    export const NegativeNumberTermsRegex = `^[.]`;
    export const NegativeNumberSignRegex = `^(${NegativeNumberTermsRegex}\\s+).*`;
    export const HundredsNumberIntegerRegex = `((${ZeroToNineIntegerRegex}(\\s+cent))|cent|((\\s+cent\\s)+${TensNumberIntegerRegex}))`;
    export const BelowHundredsRegex = `((${TenToNineteenIntegerRegex}|(${TensNumberIntegerRegex}([-\\s]+(${TenToNineteenIntegerRegex}|${ZeroToNineIntegerRegex}))?))|${ZeroToNineIntegerRegex})`;
    export const BelowThousandsRegex = `((${HundredsNumberIntegerRegex}(\\s+${BelowHundredsRegex})?|${BelowHundredsRegex}|${TenToNineteenIntegerRegex})|cent\\s+${TenToNineteenIntegerRegex})`;
    export const SupportThousandsRegex = `((${BelowThousandsRegex}|${BelowHundredsRegex})\\s+${RoundNumberIntegerRegex}(\\s+${RoundNumberIntegerRegex})?)`;
    export const SeparaIntRegex = `(${SupportThousandsRegex}(\\s+${SupportThousandsRegex})*(\\s+${BelowThousandsRegex})?|${BelowThousandsRegex})`;
    export const AllIntRegex = `(${SeparaIntRegex}|mille(\\s+${BelowThousandsRegex})?)`;
    export const NumbersWithPlaceHolder = (placeholder: string) => {
        return `(((?<!\\d+\\s*)-\\s*)|(?<=\\b))\\d+(?!([,\\.]\\d+[a-zA-Z]))(?=${placeholder})`;
    };
    export const NumbersWithSuffix = `(((?<=\\W|^)-\\s*)|(?<=\\b))\\d+\\s*${BaseNumbers.NumberMultiplierRegex}(?=\\b)`;
    export const RoundNumberIntegerRegexWithLocks = `(?<=\\b)(${DigitsNumberRegex})+\\s+${RoundNumberIntegerRegex}(?=\\b)`;
    export const NumbersWithDozenSuffix = `(((?<!\\d+\\s*)-\\s*)|(?<=\\b))\\d+\\s+douzaine(s)?(?=\\b)`;
    export const AllIntRegexWithLocks = `((?<=\\b)${AllIntRegex}(?=\\b))`;
    export const AllIntRegexWithDozenSuffixLocks = `(?<=\\b)(((demi\\s+)?\\s+douzaine)|(${AllIntRegex}\\s+douzaines?))(?=\\b)`;
    export const SimpleRoundOrdinalRegex = `(centi[eè]me|milli[eè]me|millioni[eè]me|milliardi[eè]me|billioni[eè]me)`;
    export const OneToNineOrdinalRegex = `(premier|premi[eè]re|deuxi[eè]me|second[e]|troisi[eè]me|tiers|tierce|quatri[eè]me|cinqui[eè]me|sixi[eè]me|septi[eè]me|huiti[eè]me|neuvi[eè]me)`;
    export const SpecialUnderHundredOrdinalRegex = `(onzi[eè]me|douzi[eè]me)`;
    export const TensOrdinalRegex = `(quatre-vingt-dixi[eè]me|quatre-vingti[eè]me|huitanti[eè]me|octanti[eè]me|soixante-dixi[eè]me|septanti[eè]me|soixanti[eè]me|cinquanti[eè]me|quaranti[eè]me|trenti[eè]me|vingti[eè]me)`;
    export const HundredOrdinalRegex = `(${AllIntRegex}(\\s+(centi[eè]me\\s)))`;
    export const UnderHundredOrdinalRegex = `(((${AllIntRegex}(\\W)?)?${OneToNineOrdinalRegex})|(${TensNumberIntegerRegex}(\\W)?)?${OneToNineOrdinalRegex}|${TensOrdinalRegex}|${SpecialUnderHundredOrdinalRegex})`;
    export const UnderThousandOrdinalRegex = `(((${HundredOrdinalRegex}(\\s)?)?${UnderHundredOrdinalRegex})|((${AllIntRegex}(\\W)?)?${SimpleRoundOrdinalRegex})|${HundredOrdinalRegex})`;
    export const OverThousandOrdinalRegex = `((${AllIntRegex})(i[eè]me))`;
    export const ComplexOrdinalRegex = `((${OverThousandOrdinalRegex}(\\s)?)?${UnderThousandOrdinalRegex}|${OverThousandOrdinalRegex}|${UnderHundredOrdinalRegex})`;
    export const SuffixOrdinalRegex = `((${AllIntRegex})(${SimpleRoundOrdinalRegex}))`;
    export const ComplexRoundOrdinalRegex = `(((${SuffixOrdinalRegex}(\\s)?)?${ComplexOrdinalRegex})|${SuffixOrdinalRegex})`;
    export const AllOrdinalRegex = `(${ComplexOrdinalRegex}|${SimpleRoundOrdinalRegex}|${ComplexRoundOrdinalRegex})`;
    export const PlaceHolderPureNumber = `\\b`;
    export const PlaceHolderDefault = `\\D|\\b`;
    export const OrdinalSuffixRegex = `(?<=\\b)((\\d*(1er|2e|2eme|3e|3eme|4e|4eme|5e|5eme|6e|6eme|7e|7eme|8e|8eme|9e|9eme|0e|0eme))|(11e|11eme|12e|12eme))(?=\\b)`;
    export const OrdinalFrenchRegex = `(?<=\\b)${AllOrdinalRegex}(?=\\b)`;
    export const FractionNotationWithSpacesRegex = `(((?<=\\W|^)-\\s*)|(?<=\\b))\\d+\\s+\\d+[/]\\d+(?=(\\b[^/]|$))`;
    export const FractionNotationRegex = `(((?<=\\W|^)-\\s*)|(?<=\\b))\\d+[/]\\d+(?=(\\b[^/]|$))`;
    export const FractionNounRegex = `(?<=\\b)(${AllIntRegex}\\s+((et)\\s+)?)?(${AllIntRegex})(\\s+((et)\\s)?)(((${AllOrdinalRegex})s?|(${SuffixOrdinalRegex})s?)|demis?|tiers?|quarts?)(?=\\b)`;
    export const FractionNounWithArticleRegex = `(?<=\\b)(${AllIntRegex}\\s+(et\\s+)?)?(un|une)(\\s+)((${AllOrdinalRegex})|(${SuffixOrdinalRegex})|(et\\s+)?demis?)(?=\\b)`;
    export const FractionPrepositionRegex = `(?<=\\b)(?<numerator>(${AllIntRegex})|((?<!\\.)\\d+))\\s+sur\\s+(?<denominator>(${AllIntRegex})|((\\d+)(?!\\.)))(?=\\b)`;
    export const AllPointRegex = `((\\s+${ZeroToNineIntegerRegex})+|(\\s+${SeparaIntRegex}))`;
    export const AllFloatRegex = `(${AllIntRegex}(\\s+(virgule|point))${AllPointRegex})`;
    export const DoubleDecimalPointRegex = (placeholder: string) => {
        return `(((?<!\\d+\\s*)-\\s*)|((?<=\\b)(?<!\\d+[,\\.])))\\d+[,\\.]\\d+(?!([,\\.]\\d+))(?=${placeholder})`;
    };
    export const DoubleWithoutIntegralRegex = (placeholder: string) => {
        return `(?<=\\s|^)(?<!(\\d+))[,\\.]\\d+(?!([,\\.]\\d+))(?=${placeholder})`;
    };
    export const DoubleWithMultiplierRegex = `(((?<!\\d+\\s*)-\\s*)|((?<=\\b)(?<!\\d+\\[,\\.])))\\d+[,\\.]\\d+\\s*${BaseNumbers.NumberMultiplierRegex}(?=\\b)`;
    export const DoubleWithRoundNumber = `(((?<!\\d+\\s*)-\\s*)|((?<=\\b)(?<!\\d+\\[,\\.])))\\d+[,\\.]\\d+\\s+${RoundNumberIntegerRegex}(?=\\b)`;
    export const DoubleAllFloatRegex = `((?<=\\b)${AllFloatRegex}(?=\\b))`;
    export const DoubleExponentialNotationRegex = `(((?<!\\d+\\s*)-\\s*)|((?<=\\b)(?<!\\d+[,\\.])))(\\d+([,\\.]\\d+)?)e([+-]*[1-9]\\d*)(?=\\b)`;
    export const DoubleCaretExponentialNotationRegex = `(((?<!\\d+\\s*)-\\s*)|((?<=\\b)(?<!\\d+[,\\.])))(\\d+([,\\.]\\d+)?)\\^([+-]*[1-9]\\d*)(?=\\b)`;
    export const NumberWithSuffixPercentage = `(?<!%)(${BaseNumbers.NumberReplaceToken})(\\s*)(%(?!${BaseNumbers.NumberReplaceToken})|(pourcentages|pourcents|pourcentage|pourcent)\\b)`;
    export const NumberWithPrefixPercentage = `((?<!${BaseNumbers.NumberReplaceToken})%|pourcent|pourcent des|pourcentage de)(\\s*)(${BaseNumbers.NumberReplaceToken})(?=\\s|$)`;
    export const DecimalSeparatorChar = ',';
    export const FractionMarkerToken = 'sur';
    export const NonDecimalSeparatorChar = '.';
    export const HalfADozenText = 'six';
    export const WordSeparatorToken = 'et';
    export const WrittenDecimalSeparatorTexts = ["virgule"];
    export const WrittenGroupSeparatorTexts = ["point", "points"];
    export const WrittenIntegerSeparatorTexts = ["et", "-"];
    export const WrittenFractionSeparatorTexts = ["et", "sur"];
    export const HalfADozenRegex = `(?<=\\b)demi\\s+douzaine`;
    export const DigitalNumberRegex = `((?<=\\b)(cent|mille|million|millions|milliard|milliards|billions|billion|douzaine(s)?)(?=\\b))|((?<=(\\d|\\b))${BaseNumbers.MultiplierLookupRegex}(?=\\b))`;
    export const AmbiguousFractionConnectorsRegex = `^[.]`;
    export const CardinalNumberMap: ReadonlyMap<string, number> = new Map<string, number>([["zéro", 0], ["zero", 0], ["un", 1], ["une", 1], ["deux", 2], ["trois", 3], ["quatre", 4], ["cinq", 5], ["six", 6], ["sept", 7], ["huit", 8], ["neuf", 9], ["dix", 10], ["onze", 11], ["douze", 12], ["treize", 13], ["quatorze", 14], ["quinze", 15], ["seize", 16], ["dix-sept", 17], ["dix-huit", 18], ["dix-neuf", 19], ["vingt", 20], ["trente", 30], ["quarante", 40], ["cinquante", 50], ["soixante", 60], ["soixante-dix", 70], ["septante", 70], ["quatre-vingts", 80], ["quatre-vingt", 80], ["quatre vingts", 80], ["quatre vingt", 80], ["quatre-vingt-dix", 90], ["quatre-vingt dix", 90], ["quatre vingt dix", 90], ["quatre-vingts-dix", 90], ["quatre-vingts-onze", 91], ["quatre-vingt-onze", 91], ["quatre-vingts-douze", 92], ["quatre-vingt-douze", 92], ["quatre-vingts-treize", 93], ["quatre-vingt-treize", 93], ["quatre-vingts-quatorze", 94], ["quatre-vingt-quatorze", 94], ["quatre-vingts-quinze", 95], ["quatre-vingt-quinze", 95], ["quatre-vingts-seize", 96], ["quatre-vingt-seize", 96], ["huitante", 80], ["octante", 80], ["nonante", 90], ["cent", 100], ["mille", 1000], ["un million", 1000000], ["million", 1000000], ["millions", 1000000], ["un milliard", 1000000000], ["milliard", 1000000000], ["milliards", 1000000000], ["un mille milliards", 1000000000000], ["un billion", 1000000000000]]);
    export const OrdinalNumberMap: ReadonlyMap<string, number> = new Map<string, number>([["premier", 1], ["première", 1], ["premiere", 1], ["deuxième", 2], ["deuxieme", 2], ["second", 2], ["seconde", 2], ["troisième", 3], ["demi", 2], ["tiers", 3], ["tierce", 3], ["quart", 4], ["quarts", 4], ["troisieme", 3], ["quatrième", 4], ["quatrieme", 4], ["cinquième", 5], ["cinquieme", 5], ["sixième", 6], ["sixieme", 6], ["septième", 7], ["septieme", 7], ["huitième", 8], ["huitieme", 8], ["neuvième", 9], ["neuvieme", 9], ["dixième", 10], ["dixieme", 10], ["onzième", 11], ["onzieme", 11], ["douzième", 12], ["douzieme", 12], ["treizième", 13], ["treizieme", 13], ["quatorzième", 14], ["quatorizieme", 14], ["quinzième", 15], ["quinzieme", 15], ["seizième", 16], ["seizieme", 16], ["dix-septième", 17], ["dix-septieme", 17], ["dix-huitième", 18], ["dix-huitieme", 18], ["dix-neuvième", 19], ["dix-neuvieme", 19], ["vingtième", 20], ["vingtieme", 20], ["trentième", 30], ["trentieme", 30], ["quarantième", 40], ["quarantieme", 40], ["cinquantième", 50], ["cinquantieme", 50], ["soixantième", 60], ["soixantieme", 60], ["soixante-dixième", 70], ["soixante-dixieme", 70], ["septantième", 70], ["septantieme", 70], ["quatre-vingtième", 80], ["quatre-vingtieme", 80], ["huitantième", 80], ["huitantieme", 80], ["octantième", 80], ["octantieme", 80], ["quatre-vingt-dixième", 90], ["quatre-vingt-dixieme", 90], ["nonantième", 90], ["nonantieme", 90], ["centième", 100], ["centieme", 100], ["millième", 1000], ["millieme", 1000], ["millionième", 1000000], ["millionieme", 1000000], ["milliardième", 1000000000], ["milliardieme", 1000000000], ["billionieme", 1000000000000], ["billionième", 1000000000000], ["trillionième", 1000000000000000000], ["trillionieme", 1000000000000000000]]);
    export const PrefixCardinalMap: ReadonlyMap<string, number> = new Map<string, number>([["deux", 2], ["trois", 3], ["quatre", 4], ["cinq", 5], ["six", 6], ["sept", 7], ["huit", 8], ["neuf", 9], ["dix", 10], ["onze", 11], ["douze", 12], ["treize", 13], ["quatorze", 14], ["quinze", 15], ["seize", 16], ["dix sept", 17], ["dix-sept", 17], ["dix-huit", 18], ["dix huit", 18], ["dix-neuf", 19], ["dix neuf", 19], ["vingt", 20], ["vingt-et-un", 21], ["vingt et un", 21], ["vingt-deux", 21], ["vingt deux", 22], ["vingt-trois", 23], ["vingt trois", 23], ["vingt-quatre", 24], ["vingt quatre", 24], ["vingt-cinq", 25], ["vingt cinq", 25], ["vingt-six", 26], ["vingt six", 26], ["vingt-sept", 27], ["vingt sept", 27], ["vingt-huit", 28], ["vingt huit", 28], ["vingt-neuf", 29], ["vingt neuf", 29], ["trente", 30], ["quarante", 40], ["cinquante", 50], ["soixante", 60], ["soixante-dix", 70], ["soixante dix", 70], ["septante", 70], ["quatre-vingt", 80], ["quatre vingt", 80], ["huitante", 80], ["octante", 80], ["nonante", 90], ["quatre vingt dix", 90], ["quatre-vingt-dix", 90], ["cent", 100], ["deux cent", 200], ["trois cents", 300], ["quatre cents", 400], ["cinq cent", 500], ["six cent", 600], ["sept cent", 700], ["huit cent", 800], ["neuf cent", 900]]);
    export const SuffixOrdinalMap: ReadonlyMap<string, number> = new Map<string, number>([["millième", 1000], ["million", 1000000], ["milliardième", 1000000000000]]);
    export const RoundNumberMap: ReadonlyMap<string, number> = new Map<string, number>([["cent", 100], ["mille", 1000], ["million", 1000000], ["millions", 1000000], ["milliard", 1000000000], ["milliards", 1000000000], ["billion", 1000000000000], ["billions", 1000000000000], ["centieme", 100], ["centième", 100], ["millieme", 1000], ["millième", 1000], ["millionième", 1000000], ["millionieme", 1000000], ["milliardième", 1000000000], ["milliardieme", 1000000000], ["billionième", 1000000000000], ["billionieme", 1000000000000], ["centiemes", 100], ["centièmes", 100], ["millièmes", 1000], ["milliemes", 1000], ["millionièmes", 1000000], ["millioniemes", 1000000], ["milliardièmes", 1000000000], ["milliardiemes", 1000000000], ["billionièmes", 1000000000000], ["billioniemes", 1000000000000], ["douzaine", 12], ["douzaines", 12], ["k", 1000], ["m", 1000000], ["g", 1000000000], ["b", 1000000000], ["t", 1000000000000]]);
    export const RelativeReferenceOffsetMap: ReadonlyMap<string, string> = new Map<string, string>([["", ""]]);
    export const RelativeReferenceRelativeToMap: ReadonlyMap<string, string> = new Map<string, string>([["", ""]]);
}
