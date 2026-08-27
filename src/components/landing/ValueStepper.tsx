import { useEffect, useId, useMemo, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export type ScaleTier = { upTo: number; step: number };

/** Gera a lista de valores permitidos com incrementos progressivos. */
export function buildScale(min: number, max: number, tiers: ScaleTier[]): number[] {
  const values: number[] = [];
  let current = min;
  values.push(current);
  let guard = 0;
  while (current < max && guard < 5000) {
    guard += 1;
    const tier = tiers.find((t) => current < t.upTo) ?? tiers[tiers.length - 1];
    const next = Math.min(current + tier.step, max);
    if (next <= current) break;
    values.push(next);
    current = next;
  }
  return values;
}

function nearestIndex(scale: number[], value: number) {
  let best = 0;
  let bestDiff = Infinity;
  scale.forEach((v, i) => {
    const diff = Math.abs(v - value);
    if (diff < bestDiff) {
      bestDiff = diff;
      best = i;
    }
  });
  return best;
}

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

type ValueStepperProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  scale: number[];
  suffix?: string;
  describedBy?: string;
};

export function ValueStepper({ label, value, onChange, scale, suffix = "", describedBy }: ValueStepperProps) {
  const id = useId();
  const min = scale[0];
  const max = scale[scale.length - 1];
  const index = useMemo(() => nearestIndex(scale, value), [scale, value]);
  const [draft, setDraft] = useState<string | null>(null);

  useEffect(() => {
    setDraft(null);
  }, [value]);

  const commitDraft = () => {
    if (draft === null) return;
    const digits = draft.replace(/\D/g, "");
    if (digits === "") {
      setDraft(null);
      return;
    }
    const parsed = Math.min(Math.max(Number(digits), min), max);
    onChange(scale[nearestIndex(scale, parsed)]);
    setDraft(null);
  };

  const shift = (delta: number) => {
    const next = Math.min(Math.max(index + delta, 0), scale.length - 1);
    onChange(scale[next]);
  };

  return (
    <div className="rounded-xl border border-border bg-secondary/60 p-4">
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
      </label>

      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          onClick={() => shift(-1)}
          disabled={index === 0}
          aria-label={`Diminuir ${label.toLowerCase()}`}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted disabled:opacity-40"
        >
          <Minus className="h-4 w-4" aria-hidden />
        </button>

        <input
          id={id}
          inputMode="numeric"
          aria-describedby={describedBy}
          value={draft ?? `${brl.format(value)}${suffix}`}
          onChange={(event) => setDraft(event.target.value)}
          onFocus={() => setDraft(String(value))}
          onBlur={commitDraft}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              commitDraft();
              event.currentTarget.blur();
            }
          }}
          className={cn(
            "h-11 w-full min-w-0 rounded-lg border border-border bg-background px-3 text-center text-lg font-bold text-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
        />

        <button
          type="button"
          onClick={() => shift(1)}
          disabled={index === scale.length - 1}
          aria-label={`Aumentar ${label.toLowerCase()}`}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted disabled:opacity-40"
        >
          <Plus className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <Slider
        className="mt-5 touch-pan-y py-2"
        value={[index]}
        min={0}
        max={scale.length - 1}
        step={1}
        onValueChange={(next) => onChange(scale[next[0]])}
        aria-label={label}
        aria-valuetext={`${brl.format(value)}${suffix}`}
      />

      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
        <span>
          {brl.format(min)}
          {suffix}
        </span>
        <span>
          {brl.format(max)}
          {suffix}
        </span>
      </div>
    </div>
  );
}
