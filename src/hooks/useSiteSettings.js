import { useQuery } from "@tanstack/react-query";
import { settingsApi } from "@/lib/api";

// Hardcoded fallback matches the site's original static copy, so the UI
// never breaks even if the API is briefly unreachable.
const DEFAULT_SETTINGS = {
  hospital_name: "Venus Hospital (Pvt) Ltd",
  founding_year: "2014",
  phone_primary: "+94 36 2222 096",
  phone_secondary: "+94 36 2222 064",
  email: "Venusprivatehospital@gmail.com",
  address: "55A Colombo Road, Avissawella, Sri Lanka",
  operating_hours: "Hospital: 6am-10pm | OPD: 8am-8pm",
  tagline: "Trusted Care, Compassionate Healing.",
};

// Shared across Header/Footer/TopBar/Contact via react-query's cache, so the
// settings are only fetched once per page load regardless of how many
// components use this hook.
export function useSiteSettings() {
  const { data, isLoading } = useQuery({
    queryKey: ["site-settings"],
    queryFn: settingsApi.get,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    settings: { ...DEFAULT_SETTINGS, ...data },
    isLoading,
  };
}
