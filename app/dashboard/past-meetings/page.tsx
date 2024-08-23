import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// MeetingCard Component
const MeetingCard = ({
  title,
  date,
  participants,
}: {
  title: string;
  date: string;
  participants: number;
}) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-sm">Participants: {participants}</p>
      <Button variant="outline" className="mt-2">
        View Details
      </Button>
    </CardContent>
  </Card>
);

// PastMeetings Component
const PastMeetings = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Past Meetings</h2>
    <MeetingCard
      title="Discussion"
      date="Yesterday, 3:00 PM"
      participants={7}
    />
    <MeetingCard title="Live Docs" date="Monday, 11:00 AM" participants={6} />
    <MeetingCard
      title="LiveMeet Update"
      date="Last Week, 2:00 PM"
      participants={4}
    />
  </div>
);

export default PastMeetings;
