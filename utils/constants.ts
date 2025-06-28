// Constantes de l'application

export const APP_NAME = "ZenFamille";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/connexion",
  REGISTER: "/inscription",
  SEARCH: "/recherche",
  PROFILE: "/profil",
  HOW_IT_WORKS: "/comment-ca-marche",
  PRICING: "/prix",
  BECOME_NANNY: "/nounous",
} as const;

export const USER_ROLES = {
  PARENT: "parent",
  NANNY: "nanny",
} as const;

export const MATCH_STATUS = {
  PENDING: "pending",
  ACCEPTED: "accepted",
  REJECTED: "rejected",
  CONTACTED: "contacted",
} as const;

export const URGENCY_OPTIONS = [
  { value: "asap", label: "Dès que possible", color: "red" },
  { value: "next_week", label: "La semaine prochaine", color: "orange" },
  { value: "next_month", label: "Le mois prochain", color: "yellow" },
  { value: "flexible", label: "Je suis flexible", color: "green" },
] as const;

export const DAYS_OF_WEEK = [
  { value: 1, label: "Lundi", short: "Lun" },
  { value: 2, label: "Mardi", short: "Mar" },
  { value: 3, label: "Mercredi", short: "Mer" },
  { value: 4, label: "Jeudi", short: "Jeu" },
  { value: 5, label: "Vendredi", short: "Ven" },
  { value: 6, label: "Samedi", short: "Sam" },
  { value: 0, label: "Dimanche", short: "Dim" },
] as const;

export const PRIORITIES = [
  "Expérience avec bébés",
  "Parle plusieurs langues",
  "Aide aux devoirs",
  "Activités créatives",
  "Transport des enfants",
  "Cuisine",
  "Ménage léger",
  "Garde en cas de maladie",
  "Horaires flexibles",
  "Non-fumeur",
] as const;
