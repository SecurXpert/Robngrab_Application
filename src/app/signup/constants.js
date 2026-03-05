// Signup Page Constants

export const SIGNUP_STAGES = ["Create", "Verify", "Secure", "Ready"];

export const INITIAL_FORM_DATA = {
  fullName: "",
  email: "", 
  password: "",
  confirmPassword: "",
  phone: "",
  currentRole: "",
  location: "",
  experienceLevel: "",
  goals: [],
  agreeToTerms: false,
  twoFAMethod: "",
  verificationCode: "",
  twoFACode: "",
};

export const EXPERIENCE_LEVELS = [
  { value: "entry", label: "Entry Level", description: "0-2 years" },
  { value: "mid", label: "Mid Level", description: "3-5 years" },
  { value: "senior", label: "Senior", description: "6-10 years" },
  { value: "lead", label: "Lead/Principal", description: "10+ years" },
];

export const GOALS = [
  {
    value: "activelyLooking",
    label: "Actively looking for a new role",
    description: "Get matched with relevant opportunities",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    value: "openToOpportunities",
    label: "Open to new opportunities",
    description: "Explore what's out there",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  },
  {
    value: "networking",
    label: "Growing my professional network",
    description: "Connect with industry professionals",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
  {
    value: "learning",
    label: "Learning and career development",
    description: "Enhance skills and grow professionally",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  }
];

export const TWO_FA_METHODS = [
  {
    value: "authenticator",
    label: "Authenticator App",
    description: "Use Google Authenticator, Authy, or similar apps for secure code generation",
    icon: "/assets/home/PhoneIcon.svg",
    recommended: true,
    bgColor: "bg-blue-600"
  },
  {
    value: "sms",
    label: "SMS Verification",
    description: "Receive security codes via text message to your phone",
    icon: "/assets/home/MessageIcon.svg",
    recommended: false,
    bgColor: "bg-gray-100"
  }
];
