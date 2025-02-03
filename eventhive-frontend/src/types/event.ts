export interface Event {
    id: number;
    image: string;
    name: string;
    startDate: string;
    time: string;
    type: 'Online' | 'Offline';
}