// our-domain.com/[meetupId]

import MeetupDetail from "@/components/meetups/MeetupDetail";
export default function MeetupDetailsPage() {
  return (
    <MeetupDetail
      img="https://i.redd.it/w3kr4m2fi3111.png"
      title="Test Meetup"
      address="Test Address"
      description="Test Description"
    />
  );
}
