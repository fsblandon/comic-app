import { Comic } from './comic';
import { Story } from './story';

export interface Character {
    id: number;
    name: string;
    description: string;
    resourceURI: string;
    thumbnail: any;
    comics: Comic[];
    stories: Story[];
}