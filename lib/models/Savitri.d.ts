import { DbModel, DbTable, SchemaType } from ".";
export interface IEdition extends DbTable {
    title: string;
    desc?: string;
    year: number;
    toc: TOC;
}
export interface TOC {
    parts: PartTOC[];
}
export interface PartTOC {
    no: number;
    heading: string;
    books: BookTOC[];
}
export interface BookTOC {
    no: number;
    heading: string;
    title: string;
    cantos: CantoTOC[];
}
export interface CantoTOC {
    no: number;
    heading: string;
    title: string;
    sections: SectionTOC[];
}
export interface SectionTOC {
    no: number;
    heading: string;
    running_no: string;
}
export declare class Edition extends DbModel<IEdition> {
    static table: string;
    static getEditionsURL: (year?: number | undefined) => string;
    static schema: SchemaType;
}
export interface IPart extends DbTable {
    no: number;
    edition_id: number;
    heading: string;
}
export declare class Part extends DbModel<IPart> {
    static table: string;
    static schema: SchemaType;
}
export interface IBook extends DbTable {
    no: number;
    edition_id: number;
    part_id: number;
    heading: string;
    title: string;
}
export declare class Book extends DbModel<IBook> {
    static table: string;
    static schema: SchemaType;
}
export interface ICanto extends DbTable {
    no: number;
    book_id: number;
    heading: string;
    title: string;
    desc?: string;
}
export declare class Canto extends DbModel<ICanto> {
    static table: string;
    static schema: SchemaType;
}
export interface ISection extends DbTable {
    no: number;
    running_no: number;
    canto_id: number;
    heading: string;
    sentences: ISentence[];
}
export declare class Section extends DbModel<ISection> {
    static table: string;
    static getSectionsURL: (book: number, canto: number, section: number, year?: number | undefined) => string;
    static schema: SchemaType;
}
export interface ISentence extends DbTable {
    no: number;
    section_id: number;
    ref_id?: string;
    ref_ids?: string[];
    lines: string[];
}
export declare class Sentence extends DbModel<ISentence> {
    static table: string;
    static getSectionsURL: (book: number, canto: number, section: number, sentence: number, year?: number | undefined) => string;
    static schema: SchemaType;
}
