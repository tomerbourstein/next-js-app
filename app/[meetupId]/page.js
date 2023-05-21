// our-domain.com/[meetupId]

import MeetupDetail from "@/components/meetups/MeetupDetail";
export default function MeetupDetailsPage() {
  return (
    <MeetupDetail
      img="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png"
      title="Test Meetup"
      address="Test Address"
      description="Test Description"
    />
  );
}
