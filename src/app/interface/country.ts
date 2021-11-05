import { Flags } from "./flags";
import { Name } from "./name";

export interface Country {
    'name' : Name;
    'capital' : string;
    'continents': string;
    'flags': Flags;
}