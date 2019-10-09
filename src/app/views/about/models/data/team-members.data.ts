import { SocialMedia } from "./../social-media.model";
import { TeamMember } from "./../team-member.model";

export const TEAM_MEMBERS_DATA = [
  new TeamMember({
    firstName: "Shred",
    middleName: "Sherk",
    lastName: "Ostrobuloous",
    photo: 'https://via.placeholder.com/50x50',
    occupation: "Programmer",
    description1: "No guts, no glory",
    description2:
      " If you want love, you have to go through your pain; If you want love, you have to learn how to change; If you want trust, you have to give some away",
    socialMedia: [
      new SocialMedia({
        url: "https://via.placeholder.com/300x300",
        iconClasses: "fab fa-youtube-square"
      }),
      new SocialMedia({
        url: "https://via.placeholder.com/300x300",
        iconClasses: "fab fa-linkedin"
      }),
      new SocialMedia({
        url: "https://via.placeholder.com/300x300",
        iconClasses: "fab fa-facebook-square"
      })
    ]
  }),
  new TeamMember({
    firstName: "She",
    middleName: "Shek",
    lastName: "Tsukuzu",
    photo: 'https://via.placeholder.com/50x50',
    occupation: "Programmer",
    description1: "No guts, no glory",
    description2:
      " If you want love, you have to go through your pain; If you want love, you have to learn how to change; If you want trust, you have to give some away",
    socialMedia: [
      new SocialMedia({
        url: "https://via.placeholder.com/300x300",
        iconClasses: "fab fa-youtube-square"
      }),
      new SocialMedia({
        url: "https://via.placeholder.com/300x300",
        iconClasses: "fab fa-linkedin"
      }),
      new SocialMedia({
        url: "https://via.placeholder.com/300x300",
        iconClasses: "fab fa-facebook-square"
      }),
      new SocialMedia({
        url: "https://via.placeholder.com/300x300",
        iconClasses: "fab fa-github-square"
      })
    ]
  })
];
