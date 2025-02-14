/**
 * Преобразует время в минутах в часы и минуты.
 *
 * @param {number} Minute - Время в минутах, входные данные.
 * @returns {string} Строка, представляющая время
 *
 * Примеры использования:
 * - `convertMinute(90)` вернет `"1 ч 30 мин"`.
 * - `convertMinute(60)` вернет `"1 ч"`.
 * - `convertMinute(45)` вернет `"45 мин"`.
 */
export const convertMinute = (Minute: number):string => {
    const hours = Math.floor(Minute / 60);
    const minute = Minute % 60;
    if (hours > 0 && minute === 0) {
        return `${hours} ч`;
    } else if (hours > 0 && minute > 0) {
        return `${hours} ч ${minute} мин`;
    } else {
        return `${minute} мин`;
    }
}