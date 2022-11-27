import Star from "./Star";

export default function ReviewCard() {
  return (
    <section className="reviews__container">
      <Star />
      <h4 className="reviews__header">6,000+ Reviews</h4>

      <Star />
      <p className="reviews__text">
        "We've been using Osiris for the past 3 years and it has improved our
        effeciency by 40%! I definitely recommend purchasing BRAND for your
        storage needs."
      </p>
      <h6 className="reviews__author">-John Doe</h6>

      <Star />
      <p className="reviews__text">
        "Osiris is one of the best solutions for our storage needs. Simple and
        efficient."
      </p>
      <h6 className="reviews__author">-John Doe</h6>

      <Star />
      <p className="reviews__text">
        "Osiris is here to change the way online storage works and I'm all for
        it! 5 star product."
      </p>
      <h6 className="reviews__author">-John Doe</h6>

      <Star />
      <p className="reviews__text">
        "Sharing and storing our documents have never been more simple and
        easier at such a cheap cost!"
      </p>
      <h6 className="reviews__author">-John Doe</h6>
    </section>
  );
}
