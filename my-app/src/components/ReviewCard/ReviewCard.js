import Star from "./Star";

export default function ReviewCard() {
  return (
    <section className="reviews__container">
      <Star />
      <h4 className="reviews__header">6,000+ Reviews</h4>

      <Star />
      <p className="reviews__text">
        "We've been using BRAND for the past 3 years and it has improved our
        effeciency by 40%! I definitely recommend purchasing BRAND for your
        storage needs."
      </p>
      <h6 className="reviews__author">-John Doe</h6>

      <Star />
      <p className="reviews__text">
        "BRAND is one of the best solutions for our storage needs. Simple and
        efficient."
      </p>
      <h6 className="reviews__author">-John Doe</h6>

      <Star />
      <p className="reviews__text">
        "BRAND is here to change the way online storage works and I'm all for
        it! 5 star product."
      </p>
      <h6 className="reviews__author">-John Doe</h6>

      <Star />
      <p className="reviews__text">
        "Brand has made sharing documents easy and simple at such a cheap cost!"
      </p>
      <h6 className="reviews__author">-John Doe</h6>
    </section>
  );
}
