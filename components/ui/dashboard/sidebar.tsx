"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Home, Calendar, Video, List, MessageSquare, FileText, Settings } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: FileText, label: 'Documents', href: '/dashboard/documents' },
  { icon: Calendar, label: 'Meeting Schedule', href: '/dashboard/schedule-meeting' },
  { icon: Video, label: 'Past Meetings', href: '/dashboard/past-meetings' },
//   { icon: List, label: 'Tasks', href: '/dashboard/tasks' },
  { icon: MessageSquare, label: 'Notification', href: '/dashboard/notification' },
  { icon: Settings, label: 'Settings', href: '/dashboard/setting' },
];

const Sidebar = ({ className = '' }) => {
  const pathname = usePathname();

  return (
    <div className={`w-64 bg-gray-800 text-white h-screen p-4 ${className}`}>
      <div className="flex items-center space-x-2 mb-8">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/100422918" alt="User avatar" />
          <AvatarFallback>SK</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold">Sonu Kumar</h2>
          <p className="text-sm text-gray-400">its.sonu832@gmail.com</p>
        </div>
      </div>
      <nav>
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} passHref>
            <Button
              variant={pathname === item.href ? 'secondary' : 'ghost'}
              className="w-full justify-start mb-2"
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;