import React from "react";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

const Details = () => (
  <div className="details">
    <div className="detail-imgs">
      <img
        src="../assets/hotel-1.jpg"
        alt="hotel 1"
        className="detail-imgs__img"
      />
      <img
        src="../assets/hotel-2.jpg"
        alt="hotel 1"
        className="detail-imgs__img"
      />
      <img
        src="../assets/hotel-3.jpg"
        alt="hotel 1"
        className="detail-imgs__img"
      />
    </div>

    <div className="detail-main">
      <h2 className="detail-main__title">Hotel las palmas</h2>
      <div className="detail-main__stars">
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSLine />
      </div>
      <span className="detail-main__location">Albufeira, Portugal</span>
      <div className="detail-main__votes">
        <h2 className="average">9.4</h2>
        <span className="count">234 Votes</span>
      </div>
    </div>

    <div className="detail-info">
      <div className="description">
        <p className="paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          inventore maxime possimus aliquid dolor, debitis quasi id similique
          quos esse repellendus consectetur quibusdam nesciunt molestiae eos
          repellat tenetur minus officiis!
        </p>
        <p className="paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          inventore maxime possimus aliquid dolor, debitis quasi id similique
          quos.
        </p>
        <ul className="list">
          <li className="list__item">Close to the beach</li>
          <li className="list__item">Breakfast included</li>
          <li className="list__item">Free airport shuttle</li>
          <li className="list__item">Free wifi in all rooms</li>
          <li className="list__item">Air conditioning and heat</li>
          <li className="list__item">Pets allowed</li>
          <li className="list__item">We speak all languages</li>
          <li className="list__item">Perfect for families</li>
        </ul>

        <div className="detail-recommend">
          <p className="detail-recommend__count">
            Peter and 3 other friends recommend this hotel.
          </p>
          <div className="detail-recommend__friends">
            <img
              src="./assets/user-1.jpg"
              alt="User"
              className="detail-recommend__img"
            />
            <img
              src="./assets/user-4.jpg"
              alt="User"
              className="detail-recommend__img"
            />
            <img
              src="./assets/user-3.jpg"
              alt="User"
              className="detail-recommend__img"
            />
            <img
              src="./assets/user-2.jpg"
              alt="User"
              className="detail-recommend__img"
            />
          </div>
        </div>
      </div>

      <div className="user-reviews">
        <figure className="review">
          <div className="blockquote review__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            delectus placeat accusantium autem commodi in possimus facilis
            fugiat repellat alias.
          </div>
          <figcaption className="review__user">
            <img
              src="./assets/user-5.jpg"
              alt="User 1"
              className="review__photo"
            />
            <div className="review__user-box">
              <p className="review__user-name">Peter Parker</p>
              <p className="review__user-date">Nov 21st 2017</p>
            </div>
            <div className="review__rating">7.6</div>
          </figcaption>
        </figure>

        <figure className="review">
          <div className="blockquote review__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            delectus placeat accusantium autem commodi in possimus facilis
            fugiat repellat alias.
          </div>
          <figcaption className="review__user">
            <img
              src="./assets/user-6.jpg"
              alt="User 2"
              className="review__photo"
            />
            <div className="review__user-box">
              <p className="review__user-name">Perla Tornez</p>
              <p className="review__user-date">Jun 1st 2017</p>
            </div>
            <div className="review__rating">9.4</div>
          </figcaption>
        </figure>
        <button className="btn-inline">
          Show all <span>&rarr;</span>
        </button>
      </div>
    </div>
  </div>
);

export default Details;
