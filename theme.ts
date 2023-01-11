import { buildLegacyTheme } from 'sanity';

const props = {
  '--my-white': '#dfd7cb',
  '--my-black': '#0d1b2a',
  '--my-brand': '#372a22',
  '--my-blue': '#00CAE0',
  '--my-green': '#6EEB83',
  '--my-yellow': '#E2FF0A',
  '--my-orange': '#E8AA14',
  '--my-red': '#FF5714',
  '--gray': '#778da9',
  '--DarkBrown': '#574f49',
};

export const theme = buildLegacyTheme({
  // Base theme colors
  '--black': props['--DarkBrown'],
  '--white': props['--my-white'],
  '--gray': props['--my-black'],

  '--component-bg': props['--my-white'],
  '--component-text-color': props['--DarkBrown'],

  /* brand */
  '--brand-primary': props['--my-brand'],

  /* Default button */
  '--default-button-color': props['--DarkBrown'],
  '--default-button-primary-color': props['--DarkBrown'],
  '--default-button-success-color': props['--DarkBrown'],
  '--default-button-danger-color': props['--my-red'],
  '--default-button-warning-color': props['--my-yellow'],

  /* State */
  '--state-danger-color': props['--my-red'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-info-color': props['--my-blue'],

  /* Navbar */
  '--main-navigation-color': props['--my-brand'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-brand'],
});
