/** Envio real do formulário — chama o endpoint compartilhado /api/lead. */
export async function sendLead(payload: Record<string, unknown>): Promise<boolean> {
  try {
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) return false;
    const data = (await response.json()) as { ok?: boolean };
    return data.ok === true;
  } catch {
    return false;
  }
}

export const ERRO_ENVIO =
  "Não foi possível enviar seu projeto agora. Tente novamente ou fale comigo pelo WhatsApp.";
