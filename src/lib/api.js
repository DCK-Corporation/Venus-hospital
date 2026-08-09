// Thin fetch wrapper for the self-hosted Express + MySQL backend.
// All admin (write) requests rely on the httpOnly session cookie set by
// POST /api/auth/login, so every call here uses credentials: "include".

async function request(path, options = {}) {
  const res = await fetch(`/api${path}`, {
    credentials: "include",
    headers: {
      ...(options.body && !(options.body instanceof FormData) ? { "Content-Type": "application/json" } : {}),
      ...options.headers,
    },
    ...options,
  });

  const isJson = res.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await res.json() : null;

  if (!res.ok) {
    throw new Error(data?.error || `Request failed with status ${res.status}`);
  }

  return data;
}

export const authApi = {
  login: (email, password) =>
    request("/auth/login", { method: "POST", body: JSON.stringify({ email, password }) }),
  logout: () => request("/auth/logout", { method: "POST" }),
  me: () => request("/auth/me"),
};

export const newsApi = {
  list: (limit) => request(`/news${limit ? `?limit=${limit}` : ""}`),
  get: (id) => request(`/news/${id}`),
  create: (data) => request("/news", { method: "POST", body: JSON.stringify(data) }),
  update: (id, data) => request(`/news/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  remove: (id) => request(`/news/${id}`, { method: "DELETE" }),
};

export const servicesApi = {
  list: () => request("/services"),
  create: (data) => request("/services", { method: "POST", body: JSON.stringify(data) }),
  update: (id, data) => request(`/services/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  remove: (id) => request(`/services/${id}`, { method: "DELETE" }),
};

export const settingsApi = {
  get: () => request("/settings"),
  update: (data) => request("/settings", { method: "PUT", body: JSON.stringify(data) }),
};

export const mediaApi = {
  list: () => request("/media"),
  upload: (file) => {
    const formData = new FormData();
    formData.append("file", file);
    return request("/media", { method: "POST", body: formData });
  },
  remove: (filename) => request(`/media/${encodeURIComponent(filename)}`, { method: "DELETE" }),
};

export const contactApi = {
  send: (data) => request("/contact", { method: "POST", body: JSON.stringify(data) }),
};
