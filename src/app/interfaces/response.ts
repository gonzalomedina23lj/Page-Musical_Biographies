import { Artist } from "./artist";

export interface Response {
    artists: Artist[];
    totalResults: string;
    Response: string;

}