import { CategoriesType } from '../../models';
export declare const useCategories: () => {
    getCategories: (options?: import("@apollo/react-hooks").QueryLazyOptions<Record<string, any>>) => void;
    categories: CategoriesType[];
    loading: boolean;
};
