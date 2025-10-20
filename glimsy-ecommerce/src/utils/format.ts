export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatDescription = (description: string): string => {
    return description.length > 100 ? description.slice(0, 97) + '...' : description;
};

export const formatWeight = (weight: number): string => {
    return `${weight}g`;
};