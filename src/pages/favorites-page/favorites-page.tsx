import FavoritesList from '../../components/favorites/favorites-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Offer, Offers } from '../../types/offer-types/offer-list-types';
import { groupBy } from '../../utils';

type FavoritesTypes = {
  offers: Offers;
};

function FavoritesPage({offers}: FavoritesTypes): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const favoriteOffersByGroup: Record<string, Offers> = groupBy(favoriteOffers, (offer: Offer) => offer.city.name);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">

          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList favoriteOffers={favoriteOffersByGroup} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
