import { getPluralized } from "@utils/pluralized";

export const getResultMessage = (results, styles) => {
  const { wrong, success } = results;
  let resultText;

  if (success === 0) resultText = `<span class="${styles.subtitle}">Ты не ответил ни на один вопрос. Попробуй еще!</span>`;
  if (wrong === 0) resultText = `<span class="${styles.subtitle}">Ты&nbsp;ответил правильно на&nbsp;все&nbsp;вопросы. Так&nbsp;держать!</span>`;
  if (wrong !== 0 && success !== 0) resultText = `Ты&nbsp;ответил правильно на&nbsp;<span class="${styles.success}">${success}</span>&nbsp;${getPluralized(success, "question")} и&nbsp;сделал <span class="${styles.wrong}">${wrong}</span>&nbsp;${getPluralized(wrong, "fall")}.`;
  return resultText;
};
