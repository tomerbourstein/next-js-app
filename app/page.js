import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/1-alec-holland-hamptons-house-1661876383.jpg",
    address: "Marmorek 28, Tel-Aviv",
    description: "The first meetup at the old appartment",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://www.thespruce.com/thmb/ywHTET6XfU7pVy1KAMPfHS1QZZk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/living-room-decor-ideas-5442837-hero-8b6e540e13f9457a84fe9f9e26ea2e5c.jpg",
    address: "Marmorek 28, Tel-Aviv",
    description: "The Second",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/202209/traditional-living-room-ideas/title-traditional-living-room-design.jpg",
    address: "Marmorek 28, Tel-Aviv",
    description: "We Shall Meet Again!",
  },
];

const Home = () => {
  return <MeetupList meetups={DUMMY_MEETUP} />;
};

export default Home;
