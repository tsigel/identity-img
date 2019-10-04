export declare function config(options: Partial<IOptions>): void;
export declare function create(hash: string, options: Partial<IOptions>): string;
export interface IOptions {
    size: number;
    bgColor: string;
    mainColor: string;
    nanColor: string;
    rows: number;
    cells: number;
    randomColor: boolean;
    mainStep: number;
    nanStep: number;
    mainLen: number;
    nanLen: number;
    bgStep: number;
    bgLen: number;
}
