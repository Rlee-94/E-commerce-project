import videomp4 from "../assets/img/bg-video.mp4";
import videowebm from "../assets/img/bg-video.webm";
import ReviewCard from "../components/ReviewCard/ReviewCard";

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

        <ReviewCard />
      </section>
    </>
  );
}
