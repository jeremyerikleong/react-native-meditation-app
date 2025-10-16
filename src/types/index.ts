export type Meditation = {
    id: number;
    title: string;
    duration: number;
    type: 'audio' | 'video';
    premium: boolean;
};