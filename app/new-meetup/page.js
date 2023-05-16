"use client";
// our-domain.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = ({ children }) => {
  const onAddMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
};

export default NewMeetupPage;
