/**
 * Извлекает калории из строки.
 *
 * @param {string} summary - Строка, содержащая информацию о калориях.
 * @returns {number} Количество калорий
 */
export const getCalories = (summary: string): number  => {
    const match = summary.match(/<b>(\d+)\s*calories<\/b>/i);
    return match ? parseInt(match[1], 10) : 0;
};