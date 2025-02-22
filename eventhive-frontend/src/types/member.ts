export interface CommunityMember {
    id:string;
    photo: string; // URL to the member's photo
    name: string;
    course: string;
    streamOfStudy: string;
    requestedOn?: string; // For pending requests
    joinedOn?: string;    // For member list
    role?: string;          // For member list
}