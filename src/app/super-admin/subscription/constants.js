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
    features: ["Basic Support"],
  },
  {
    id: 2,
    name: "Standard Plan",
    type: "Monthly",
    price: 79,
    duration: 30,
    credits: 500,
    subscribers: 891,
    status: true,
    description: "Great for growing teams",
    features: ["15 Features"],
  },
  {
    id: 3,
    name: "Premium Plan",
    type: "Annual",
    price: 799,
    duration: 365,
    credits: 10000,
    subscribers: 156,
    status: true,
    description: "Best for enterprises",
    features: ["All Postman"],
  },
  {
    id: 4,
    name: "Advanced Plan",
    type: "Monthly",
    price: 149,
    duration: 30,
    credits: 2000,
    subscribers: 0,
    status: false,
    description: "Scale with confidence",
    features: ["20 Features"],
  },
];

export const BILLING_TYPES = ["Monthly", "Annual"];
export const STATUS_FILTERS = ["All", "Active", "Disabled"];
export const TYPE_FILTERS = ["All", "Monthly", "Annual"];
