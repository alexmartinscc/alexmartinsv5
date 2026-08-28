export type ProjetoTipo = "igreja" | "pessoal" | "ambos";

type Listener = (tipo: ProjetoTipo) => void;

const listeners = new Set<Listener>();

/** Pré-seleciona o tipo de projeto no formulário final da página /igrejas. */
export function selecionarProjeto(tipo: ProjetoTipo) {
  listeners.forEach((fn) => fn(tipo));
}

export function onSelecionarProjeto(fn: Listener) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
