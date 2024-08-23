"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, XCircle } from "lucide-react";

// NotificationCard Component
const NotificationCard = ({
  title,
  message,
  time,
  isRead,
  onMarkAsRead,
  onDismiss,
}: {
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  onMarkAsRead: () => void;
  onDismiss: () => void;
}) => (
  <Card className="mb-4 flex items-center justify-between">
    <CardHeader className="flex justify-between items-center">
      <CardTitle
        className={`text-lg flex items-center ${
          isRead ? "text-gray-400" : "font-semibold"
        }`}
      >
        {title}
      </CardTitle>
      <div className="flex items-center space-x-2">
        {!isRead && (
          <Button
            variant="link"
            onClick={onMarkAsRead}
            className="text-blue-500"
          >
            Mark as Read
          </Button>
        )}
        <XCircle onClick={onDismiss} className="text-red-500 cursor-pointer" />
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm">{message}</p>
      <p className="text-xs text-gray-500">{time}</p>
    </CardContent>
  </Card>
);

// NotificationSystem Component
const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Message",
      message: "You have received a new message from Sarah.",
      time: "2 hours ago",
      isRead: false,
    },
    {
      id: 2,
      title: "Meeting Reminder",
      message:
        "Your meeting with the design team is scheduled for 3:00 PM today.",
      time: "4 hours ago",
      isRead: false,
    },
    {
      id: 3,
      title: "Update Available",
      message: "A new update is available for your project.",
      time: "Yesterday",
      isRead: true,
    },
  ]);

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const dismissNotification = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Bell className="mr-2" /> Notifications
      </h2>
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            title={notification.title}
            message={notification.message}
            time={notification.time}
            isRead={notification.isRead}
            onMarkAsRead={() => markAsRead(notification.id)}
            onDismiss={() => dismissNotification(notification.id)}
          />
        ))
      ) : (
        <p className="text-gray-500">No notifications available.</p>
      )}
    </div>
  );
};

export default NotificationSystem;
