import videomp4 from "../assets/img/bg-video.mp4";
import videowebm from "../assets/img/bg-video.webm";

export default function Reviews(props) {
  return (
    <>
      <section className="reviews">
        <div className="bg__video">
          <video className="bg__video-content" playsInline autoPlay muted loop>
            <source src={videomp4} type="video/mp4" />
            <source src={videowebm} type="video/webm" />
            {props.error}
          </video>
        </div>

        <div className="reviews__content">
          <h2 className="reviews__header">{props.header}</h2>
          <p className="reviews__quote">{props.quote}</p>
          <hr></hr>
        </div>
      </section>
    </>
  );
}
