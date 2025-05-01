const messages = {
    question: { one: 'вопрос', few: 'вопроса', many: 'вопросов', other: 'вопроса' },
    fall: { one: 'ошибку', few: 'ошибки', many: 'ошибок', other: 'ошибки' },
};

export function getPluralized(count, word) {
    const rule = new Intl.PluralRules("ru-RU").select(count);
    return messages[word][rule];
}