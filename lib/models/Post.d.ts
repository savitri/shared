import { DbModel, DbTable, SchemaType } from ".";
export interface IPost extends DbTable {
    blog_id: number;
    number?: number;
    author_id: number;
    slug: string;
    title: string;
    subtitle?: string;
    txt: string;
    excerpt?: string;
    script: "ro" | "dv" | "ar";
    series_id?: number;
    comments?: number[];
    tags?: number[];
    recommendations?: number[];
    created_at: string;
    status: "draft" | "scheduled" | "published" | "deleted";
}
export declare class Post extends DbModel<IPost> {
    static table: string;
    static getPostURL: (blogSlug: string, postSlug: string) => string;
    static schema: SchemaType;
    readonly slug: string;
}
