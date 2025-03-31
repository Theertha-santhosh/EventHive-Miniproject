// types/announcement.ts

export interface Announcement {
    id: number;
    heading?: string;
    title?: string;
    type?: string;
    category?: string;
    department?: string;
    expiringDate?: string;
    date?: string;
    expiringTime: string;
    organizedBy: string;
    description?: string;
    details?: string;
    registrationLink: string;
    extraDetails?: { label: string; value: string; icon: any }[];
    icon?: any;

}

export interface CreateAnnouncementForm {
    heading: string;
    type: string;
    organizedBy: string;
    expiringDate: string;
    expiringTime: string;
    description: string;
    registrationLink: string;
}