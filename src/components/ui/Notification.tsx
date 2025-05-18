import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { removeNotification } from '../../store/slices/uiSlice';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

const Notification: React.FC = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state: RootState) => state.ui.notifications);

  // Auto-remove notifications after 5 seconds
  useEffect(() => {
    if (notifications.length > 0) {
      const notificationId = notifications[0].id;
      const timer = setTimeout(() => {
        dispatch(removeNotification(notificationId));
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [notifications, dispatch]);

  if (notifications.length === 0) {
    return null;
  }

  const getIcon = (type: 'success' | 'error' | 'info') => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-500" />;
      default:
        return null;
    }
  };

  const getBackgroundColor = (type: 'success' | 'error' | 'info') => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'info':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`${getBackgroundColor(notification.type)} p-4 rounded-md shadow-md border mb-2 fade-in flex items-start`}
        >
          <div className="flex-shrink-0 mr-3">
            {getIcon(notification.type)}
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-800">{notification.message}</p>
          </div>
          <button
            className="ml-3 flex-shrink-0 text-gray-400 hover:text-gray-600"
            onClick={() => dispatch(removeNotification(notification.id))}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notification;