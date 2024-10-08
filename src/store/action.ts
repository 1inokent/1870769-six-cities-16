import { createAction } from '@reduxjs/toolkit';
import { CityName, Offers } from '../types/offer-types/offer-list-types';
import { OfferPage } from '../types/offer-types/offer-page-types';
import { OfferComments } from '../types/offer-types/offer-comment-types';
import { AuthorizationStatus, SortingOptionValue } from '../const';
import { FullUserData } from '../types/user-data';

export const setCityName = createAction<CityName>('offer/setCityName');

export const setOffersDataLoadingStatus = createAction<boolean>(
  'offer/setOffersDataLoadingStatus'
);

export const loadOffers = createAction<Offers>('offer/loadOffers');

export const loadOfferPages = createAction<OfferPage>('offer/loadOfferPages');

export const loadNearOffers = createAction<Offers>('offer/loadNearOffers');

export const loadOfferComments = createAction<OfferComments>(
  'offer/loadOfferComments'
);

export const setSortingOption = createAction<SortingOptionValue>(
  'main/setSortingOption'
);

export const setFavoriteStatus = createAction<{
  offerId: string | undefined;
  isFavorite: boolean;
}>('offer/setFavoriteStatus');

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const getUserData = createAction<FullUserData>('user/getUserData');

export const setError = createAction<string | null>('setError');
