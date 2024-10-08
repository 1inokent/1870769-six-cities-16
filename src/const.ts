enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum SortingOptionValue {
  Popular = 'popular',
  PriceLowToHigh = 'priceLowToHigh',
  PriceHighToLow = 'priceHighToLow',
  TopRated = 'topRated',
}

enum APIRoute {
  Offers = '/offers',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const SORTING_OPTIONS = [
  { id: 1, title: 'Popular', value: SortingOptionValue.Popular },
  {
    id: 2,
    title: 'Price: low to high',
    value: SortingOptionValue.PriceLowToHigh,
  },
  {
    id: 3,
    title: 'Price: high to low',
    value: SortingOptionValue.PriceHighToLow,
  },
  { id: 4, title: 'Top rated first', value: SortingOptionValue.TopRated },
] as const;

const AUTH_TOKEN_KEY = 'six-cities-token';

const TIMEOUT_SHOW_ERROR = 2000;

export {
  AppRoute,
  AuthorizationStatus,
  CITIES,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  SortingOptionValue,
  SORTING_OPTIONS,
  AUTH_TOKEN_KEY,
  APIRoute,
  TIMEOUT_SHOW_ERROR,
};
