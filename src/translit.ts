/**
 * A function that transliterates Cyrillic text into Latin text using a predefined mapping of characters.
 *
 * @category Text
 * @param {string} text - The Cyrillic text to be transliterated.
 * @returns {string} The resulting Latin text.
 *
 *
 * @example
 * const text = translit("Реве та стогне Дніпр широкий")
 * console.log(text); // Example output: "Reve ta stohne Dnipro shyrokyi"
 */

const translit = (text: string): string => {
  const cyrillicToLatinMap: { [key: string]: string } = {
    Ё: 'YO',
    Й: 'I',
    Ц: 'TS',
    У: 'U',
    К: 'K',
    Е: 'E',
    Н: 'N',
    Г: 'G',
    Ш: 'SH',
    Щ: 'SCH',
    З: 'Z',
    Х: 'H',
    Ъ: "'",
    ё: 'yo',
    й: 'i',
    ц: 'ts',
    у: 'u',
    к: 'k',
    е: 'e',
    н: 'n',
    г: 'g',
    ш: 'sh',
    щ: 'sch',
    з: 'z',
    х: 'h',
    ъ: "'",
    Ф: 'F',
    Ы: 'I',
    В: 'V',
    А: 'А',
    П: 'P',
    Р: 'R',
    О: 'O',
    Л: 'L',
    Д: 'D',
    Ж: 'ZH',
    Э: 'E',
    ф: 'f',
    ы: 'i',
    в: 'v',
    а: 'a',
    п: 'p',
    р: 'r',
    о: 'o',
    л: 'l',
    д: 'd',
    ж: 'zh',
    э: 'e',
    Я: 'Ja',
    Ч: 'CH',
    С: 'S',
    М: 'M',
    И: 'I',
    Т: 'T',
    Ь: "'",
    Б: 'B',
    Ю: 'YU',
    я: 'ja',
    ч: 'ch',
    с: 's',
    м: 'm',
    и: 'i',
    т: 't',
    ь: "'",
    б: 'b',
    ю: 'yu',
    ї: 'i',
    і: 'i',
    є: 'e',
  };

  return text
    .split('')
    .map((char) => cyrillicToLatinMap[char] || char)
    .join('');
};

export default translit;
