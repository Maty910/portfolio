/**
 * Computes a human-readable duration between a start date and an end date
 * (or "Present" / "Presente" for the current moment).
 *
 * The function is pure: it does not depend on React hooks. It receives the
 * language and label set as parameters, making it easy to unit test in the
 * future when Vitest is added to this project.
 *
 * Edge cases:
 * - Same start/end month -> "1 month" (never "0 months")
 * - "Present" / "Presente" -> uses today's date
 * - Invalid month-year string -> falls back to "1 month" with a console.warn
 * - >= 12 months -> formatted in years (1 year, 2 years, ...)
 * - < 12 months -> formatted in months (1 month, 2 months, ...)
 */
import type { Translations } from "../i18n/types";

const MONTH_MAP: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

function parseMonthYear(input: string): Date | null {
  // Expected format: "Apr 2026" -> first of that month.
  const parts = input.trim().split(/\s+/);
  if (parts.length !== 2) return null;
  const [mon, yearStr] = parts;
  const monthIndex = MONTH_MAP[mon];
  const year = parseInt(yearStr, 10);
  if (monthIndex === undefined || Number.isNaN(year)) return null;
  return new Date(year, monthIndex, 1);
}

export type DurationLabels = Translations["experience"]["duration"];

export function computeDuration(
  startDate: string,
  endDate: string,
  lang: "en" | "es",
  labels: DurationLabels,
): string {
  const start = parseMonthYear(startDate);
  const end = endDate === "Present" || endDate === "Presente"
    ? new Date()
    : parseMonthYear(endDate);

  if (!start || !end || end < start) {
    console.warn(
      `[computeDuration] Invalid date range: start="${startDate}", end="${endDate}" (lang=${lang}). Falling back to "1 ${labels.month}".`,
    );
    return `1 ${labels.month}`;
  }

  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) + 1;

  if (totalMonths < 1) totalMonths = 1;

  if (totalMonths >= 12) {
    const years = Math.floor(totalMonths / 12);
    return years === 1
      ? `1 ${labels.year}`
      : `${years} ${labels.years}`;
  }

  return totalMonths === 1
    ? `1 ${labels.month}`
    : `${totalMonths} ${labels.months}`;
}
