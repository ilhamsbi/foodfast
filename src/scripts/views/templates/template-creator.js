/* eslint-disable prefer-template */
import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant_name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
      <div class="restaurant_place">
        <p> ${restaurant.city}</p>
      </div>
    </div>
  </div>
  `;

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3>Detail Restoran</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address} , Kota ${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Kategori</h4>
    <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
  </div>
  <div class="restaurant__description">
    <h3>Deskripsi Restoran</h3>
    <p>${restaurant.description}</p>
    <br>
    <h4>Makanan</h4>
    ${restaurant.menus.foods.map((food) => `<p>🍱 ${food.name}</p>`).join('')}
    <br>
    <h4>Minuman</h4>
    ${restaurant.menus.drinks.map((drink) => `<p>🍺 ${drink.name}</p>`).join('')}
  </div>

  <div class="restaurant__description">
  <h3>Review Pelanggan</h3>
  ${restaurant.customerReviews.map(
    ({ name, date, review }) => `
      <p>🎭 ${name}</p>
      <p>${date} : "${review}"</p>
  `,
  ).join('')}
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="Sukai Restoran ini" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="Batal Sukai Restoran ini" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

// eslint-disable-next-line max-len, object-curly-newline
export { createRestaurantDetailTemplate, createRestaurantItemTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
