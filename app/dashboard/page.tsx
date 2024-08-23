import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// MeetingCard Component
const MeetingCard = ({ title, date, participants }: { title: string; date: string; participants: number }) => (
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

// DocumentCard Component
const DocumentCard = ({ title, lastEdited }: { title: string; lastEdited: string }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-500">Last edited: {lastEdited}</p>
      <Button variant="outline" className="mt-2">
        Open Document
      </Button>
    </CardContent>
  </Card>
);

// DashboardHome Component
const Dashboard = () => (
  <div className='p-8'>
    <h2 className="text-2xl font-bold mb-4">Welcome, Sonu!</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Meetings</CardTitle>
        </CardHeader>
        <CardContent>
          <MeetingCard title="Live Docs Discussion" date="Today, 2:00 PM" participants={5} />
          <MeetingCard title="Live Meet testing" date="Tomorrow, 10:00 AM" participants={13} />
          <Button variant="link">View All <ChevronRight className="h-4 w-4" /></Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <DocumentCard title="First Docs" lastEdited="2 days ago" />
          <DocumentCard title="Second Docs" lastEdited="1 week ago" />
          <Button variant="link">View All <ChevronRight className="h-4 w-4" /></Button>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default Dashboard;
