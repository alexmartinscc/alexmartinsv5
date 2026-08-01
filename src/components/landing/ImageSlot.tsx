type ImageSlotProps = {
  /** Caminho final do arquivo dentro de public/ (ex.: /hero-alex.webp) */
  path: string;
  /** Imagem real importada (opcional). Quando presente, substitui o placeholder. */
  src?: string;
  alt?: string;
  /** Proporção do espaço reservado */
  ratio?: string;
  className?: string;
  label?: string;
  priority?: boolean;
};

/**
 * Exibe a fotografia da seção. Sem imagem definida, mantém o espaço reservado.
 */
export function ImageSlot({
  path,
  src,
  alt,
  ratio = "4 / 3",
  className = "",
  label,
  priority = false,
}: ImageSlotProps) {
  if (src) {
    return (
      <figure
        className={`group relative overflow-hidden rounded-[calc(var(--radius)+20px)] border border-border/60 shadow-card ${className}`}
        style={{ aspectRatio: ratio }}
      >
        <img
          src={src}
          alt={alt ?? label ?? "Fotografia"}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-deep/25 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40"
        />
      </figure>
    );
  }

  return (
    <div className={`image-slot ${className}`} style={{ aspectRatio: ratio }}>
      <div className="space-y-1.5">
        <p className="font-display text-sm font-semibold text-primary/70">{label ?? "Imagem"}</p>
        <p className="font-mono text-[11px] opacity-60">{path}</p>
      </div>
    </div>
  );
}
