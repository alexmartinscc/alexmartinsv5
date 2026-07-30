type ImageSlotProps = {
  /** Caminho final do arquivo dentro de public/ (ex.: /hero-alex.webp) */
  path: string;
  /** Proporção do espaço reservado */
  ratio?: string;
  className?: string;
  label?: string;
};

/**
 * Espaço reservado para as imagens que serão adicionadas depois.
 * Todas as imagens ficarão na raiz de public/ (sem subpastas).
 */
export function ImageSlot({ path, ratio = "4 / 3", className = "", label }: ImageSlotProps) {
  return (
    <div className={`image-slot ${className}`} style={{ aspectRatio: ratio }}>
      <div className="space-y-1.5">
        <p className="font-display text-sm font-semibold text-primary/70">{label ?? "Imagem"}</p>
        <p className="font-mono text-[11px] opacity-60">{path}</p>
      </div>
    </div>
  );
}
