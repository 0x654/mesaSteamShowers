const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type RequestOptions<Payload> = Omit<RequestInit, "body" | "method"> & {
  method?: HttpMethod;
  payload?: Payload;
  cache?: RequestCache;
};

async function parseJson<Response>(response: Response): Promise<Response> {
  return response as unknown as Response;
}

async function handleResponse<Response>(res: Response): Promise<Response> {
  if (!("ok" in res) || !(res as Response & { ok: boolean }).ok) {
    const statusText = (res as Response & { statusText?: string }).statusText ?? "Request failed";
    throw new Error(statusText);
  }

  const contentType = (res as Response & { headers?: Headers }).headers?.get("content-type");
  if (contentType?.includes("application/json")) {
    return (res as Response & { json: () => Promise<Response> }).json();
  }

  return parseJson<Response>(res);
}

export async function apiFetch<Response, Payload = unknown>(
  endpoint: string,
  options: RequestOptions<Payload> = {},
): Promise<Response> {
  const { method = "GET", payload, headers, cache, ...rest } = options;

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": payload ? "application/json" : undefined,
      ...headers,
    },
    body: payload ? JSON.stringify(payload) : undefined,
    cache,
    ...rest,
  });

  return handleResponse<Response>(response as Response);
}

export const api = {
  listProducts: () => apiFetch("/products") as Promise<unknown>,
  getProduct: (handle: string) => apiFetch(`/products/${handle}`) as Promise<unknown>,
  listCollections: () => apiFetch("/collections") as Promise<unknown>,
  getCollection: (handle: string) => apiFetch(`/collections/${handle}`) as Promise<unknown>,
  createCart: () => apiFetch("/cart", { method: "POST" }) as Promise<unknown>,
  getCart: (id: string) => apiFetch(`/cart/${id}`) as Promise<unknown>,
  addToCart: (id: string, payload: unknown) => apiFetch(`/cart/${id}/lines`, { method: "POST", payload }),
  updateCartLine: (id: string, lineId: string, payload: unknown) =>
    apiFetch(`/cart/${id}/lines/${lineId}`, { method: "PATCH", payload }),
  removeCartLine: (id: string, lineId: string) =>
    apiFetch(`/cart/${id}/lines/${lineId}`, { method: "DELETE" }),
};
