//вытаскиваем калории из summary -
export const getCalories = (summary: string): number  => {
    const match = summary.match(/<b>(\d+)\s*calories<\/b>/i);
    return parseInt(match[1], 10) ;
};