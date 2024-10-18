export const themeApplicator = (theme: Record<string, string>) => {
  const root = document.documentElement;

  Object.entries(theme).forEach(([variable, value]) => {
    root.style.setProperty(`--theme_${variable}`, value);
  });
};
