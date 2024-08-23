import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const ScheduleMeeting = () => (
  <div className='p-8'>
    <h2 className="text-2xl font-bold mb-4">Schedule a Meeting</h2>
    <Card>
      <CardContent className="space-y-4 mt-4 text-gray-800">
        <Input placeholder="Meeting Title" />
        <Input type="datetime-local" />
        <Input placeholder="Participants (comma-separated emails)" />
        <Button className='bg-slate-200 text-gray-800'>Schedule Meeting</Button>
      </CardContent>
    </Card>
  </div>
);

export default ScheduleMeeting;
