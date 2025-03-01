export const classNames = (
  className: string,
  mods: Record<string, boolean | string>,
  additional: string[],
): string => ([
  className,
  ...additional,
  ...Object.entries(mods)
  .filter((([_className, value]) => Boolean(value)))
  .map(([className]) => className)
].join(' '));