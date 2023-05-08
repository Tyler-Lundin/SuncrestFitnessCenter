

const
  INDIVIDUAL = {
    name: 'Single',
    desc: 'Includes 1 Adult with a $30 starting fee. No contract. Cancel anytime.',
    bait: 'The Perfect plan for an individual looking to improve their mental and physical health!',
    benefits: [
      'Unlimited Access to the Gym',
      'Unlimited Access to Group Classes',
      'Unlimited Access to Personal Training',
      'Unlimited Access to the Sauna',
    ],
    maxNumMembers: 1,
    pricePerMember: 45,
    color: '#B2A4FF',
  },
  GENERAL_FAMILY = {
    name: 'General Family',
    desc: 'Includes 2 Adults & 1 Child (ages 12-18) or 1 Adult & 2 Children with a $60 starting fee. No contract. Cancel anytime.',
    bait: 'The Perfect plan for a family looking to improve their mental and physical health together!',
    benefits: [
      'Unlimited Access to the Gym',
      'Unlimited Access to Group Classes',
      'Unlimited Access to Personal Training',
      'Unlimited Access to the Sauna',
    ],
    maxNumMembers: 3,
    pricePerMember: 65,
    color: '#E97777',
  },
  ADDITIONAL_ADULT = {
    name: 'Additional Adult',
    desc: 'Add an additional adult to your General Family membership for $25 per month.',
    bait: 'Add an additional family member to your membership and save!',
    benefits: [
      'Unlimited Access to the Gym',
      'Unlimited Access to Group Classes',
      'Unlimited Access to Personal Training',
      'Unlimited Access to the Sauna',
    ],
    maxNumMembers: 1,
    pricePerMember: 25,
    color: '#9ED2C6',
  },
  SENIOR_SINGLE = {
    name: 'Senior Single',
    desc: 'Includes 1 Adult (age 60+) with a $30 starting fee. No contract. Cancel anytime.',
    bait: 'The Perfect plan for seniors looking to improve their mental and physical health!',
    benefits: [
      'Unlimited Access to the Gym',
      'Unlimited Access to Group Classes',
      'Unlimited Access to Personal Training',
      'Unlimited Access to the Sauna',
    ],
    maxNumMembers: 1,
    pricePerMember: 35,
    color: '#F2D388',
  },
  SENIOR_COUPLE = {
    name: 'Senior Couple',
    desc: 'Includes 2 Adults (age 60+) with a $60 starting fee. No contract. Cancel anytime.',
    bait: 'The Perfect plan for senior couples looking to improve their mental and physical health together!',
    benefits: [
      'Unlimited Access to the Gym',
      'Unlimited Access to Group Classes',
      'Unlimited Access to Personal Training',
      'Unlimited Access to the Sauna',
    ],
    maxNumMembers: 2,
    pricePerMember: 45,
    color: '#CDF0EA',
  },
  CLASSES_ONLY = {
    name: 'Classes Only',
    desc: 'Includes Unlimited Access to Group Classes with a $30 starting fee. No contract. Cancel anytime.',
    bait: 'The Perfect plan for those who prefer to attend our group classes!',
    benefits: [
      'Unlimited Access to Group Classes',
      'VOID',
      'VOID',
      'VOID',
    ],
    maxNumMembers: 1,
    pricePerMember: 35,
    color: '#E6BA95',
  },
  STUDENT_ONLY = {
    name: 'Student Membership',
    desc: 'Includes 1 Student (13-18) with a $30 starting fee. No contract. Cancel anytime.',
    bait: 'The Perfect plan for a student looking to improve their mental and physical health!',
    benefits: [
      'Unlimited Access to the Gym',
      'Unlimited Access to Group Classes',
      'Unlimited Access to Personal Training',
      'Unlimited Access to the Sauna',
    ],
    maxNumMembers: 1,
    pricePerMember: 35,
    color: '#B4CFB0',
  };
const MEMBERSHIPS = [
  INDIVIDUAL,
  GENERAL_FAMILY,
  ADDITIONAL_ADULT,
  SENIOR_SINGLE,
  SENIOR_COUPLE,
  CLASSES_ONLY,
  STUDENT_ONLY,
] as const;

export default MEMBERSHIPS;
export type IMembership = typeof MEMBERSHIPS[0]
