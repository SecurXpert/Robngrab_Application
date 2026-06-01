// Subscription Management Constants

export const EMPTY_FORM = {
  id: null,
  name: "",
  description: "",
  price: "",
  duration: "",
  type: "Monthly",
  credits: "",
  status: true,
  features: [],
};

export const ALL_FEATURES = [
  "Unlimited job postings",
  "Advanced analytics",
  "Priority support",
  "Custom branding",
  "API access",
];

export const SAMPLE_PLANS = [
  {
    id: 1,
    name: "Basic Plan",
    type: "Monthly",
    price: 29,
    duration: 30,
    credits: 100,
    subscribers: 342,
    status: true,
    description: "Perfect for startups",
    features: ["5 features"],
  },
  {
    id: 2,
    name: "Standard Plan",
    type: "Monthly",
    price: 79,
    duration: 30,
    credits: 500,
    subscribers: 861,
    status: true,
    description: "Great for growing teams",
    features: ["12 features"],
  },
  {
    id: 3,
    name: "Premium Plan",
    type: "Annual",
    price: 899,
    duration: 365,
    credits: 10000,
    subscribers: 156,
    status: true,
    description: "Best for enterprises",
    features: ["25 features"],
  },
  {
    id: 4,
    name: "Advanced Plan",
    type: "Monthly",
    price: 19,
    duration: 30,
    credits: 50,
    subscribers: 0,
    status: false,
    description: "Scale with confidence",
    features: ["3 features"],
  },
];

export const BILLING_TYPES = ["Monthly", "Annual"];
export const STATUS_FILTERS = ["All", "Active", "Disabled"];
export const TYPE_FILTERS = ["All", "Monthly", "Annual"];
