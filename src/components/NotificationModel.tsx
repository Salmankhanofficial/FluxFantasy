import React, { useState } from 'react';
import Button from './Button';
import { GrShare } from 'react-icons/gr';
import Link from 'next/link';
import Image from './Image';
import { useRouter } from 'next/router';

interface dataarray {
  icon: string;
  title: string;
  name: string;
  department: string;
  date: string;
  crossicon: string;
}

interface NotificationModelProps {
  data: dataarray[];
}

const NotificationModel: React.FC<NotificationModelProps> = ({ data }) => {
  const [notifications, setNotifications] = useState(data);
  const [readStatus, setReadStatus] = useState<boolean[]>(
    Array(data.length).fill(false)
  );
  const [filterUnread, setFilterUnread] = useState<boolean>(false);

  const handleDelete = (index: number) => {
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  const handleReadToggle = (index: number) => {
    setReadStatus((prevStatus) => {
      const updatedStatus = [...prevStatus];
      updatedStatus[index] = true;
      return updatedStatus;
    });
  };

  const markAllAsRead = () => {
    setReadStatus(Array(data.length).fill(true));
  };

  const handleFilterToggle = (unread: boolean) => {
    setFilterUnread(unread);
  };

  const filteredNotifications = notifications.filter((item, index) => {
    if (filterUnread) {
      return !readStatus[index];
    } else {
      return true;
    }
  });

  return (
    <div className="flex justify-center items-center ">
      <div className="w-[95%] pb-4 ">
        <div className="text-[22px] flex justify-between items-center font-medium">
          Notification
          <Link href={'/employee/notification'} className="w-[18px] h-[18px]">
            <GrShare />
          </Link>
        </div>
        {notifications.length === 0 ? (
          <div className=" flex flex-col justify-center items-center">
            <Image
              src="/images/notification/emptyNotification.webp"
              alt={''}
              width={0}
              height={0}
            />
            <p>You have no notification from the last 30 days.</p>
          </div>
        ) : (
          <>
            <div className="mt-4 flex justify-between items-center gap-1 md:gap-2">
              <div className="flex md:font-medium text-xs md:text-sm">
                <Button
                  className={
                    'bg-[#EEEFF2] rounded-l-md border-2 text-xs py-1 px-2 md:py-1.5 md:px-4 border-[#CED0D3]' +
                    (!filterUnread ? ' bg-[#EEEFF2]' : '')
                  }
                  type={'button'}
                  onClick={() => handleFilterToggle(false)}
                >
                  All
                </Button>
                <Button
                  className={
                    'bg-[#F6F8FA] rounded-r-md border-2 text-xs px-2 md:px-4 border-[#E0E1E3]' +
                    (filterUnread ? ' bg-gray-300' : '')
                  }
                  type={'button'}
                  onClick={() => handleFilterToggle(true)}
                >
                  Unread
                </Button>
              </div>
              <div className="flex justify-end ">
                <p
                  className="text-[#0052CC] text-xs sm:text-sm font-semibold cursor-pointer"
                  onClick={markAllAsRead}
                >
                  Marks all as read
                </p>
              </div>
            </div>

            <div className="flex flex-col overflow-y-scroll h-[350px] justify-between gap-4 border-2 rounded-md w-full mt-5 border-[#D0D7DE]">
              {filteredNotifications.map(
                (item, index) =>
                  (!filterUnread || !readStatus[index]) && (
                    <div
                      className={`flex justify-between border-2 border-transparent hover:bg-[#F6F8FA] hover:border-[#D0D7DE] px-3 items-center cursor-pointer ${
                        readStatus[index] ? '' : 'font-bold'
                      }`}
                      key={index}
                      onClick={() => handleReadToggle(index)}
                    >
                      <div className="flex gap-4">
                        <div className="py-3">
                          <Image
                            src={item.icon}
                            className="md:w-10 w-10 h-8 md:h-10"
                            alt={'readicon'}
                            width={0}
                            height={0}
                          />
                        </div>
                        <div className="py-3">
                          <p className="text-[10px] xs:text-xs">{item.title}</p>
                          <div className="flex gap-1 sm:gap-3 text-[9px] xs:text-[11px] text-[#6D6D6D]">
                            <p>{item.name}</p>
                            <p>{item.department}</p>
                            <p>{item.date}</p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[9px] w-[9px] pr-5">
                        <p
                          className="text-end cursor-pointer"
                          onClick={() => handleDelete(index)}
                        >
                          {item.crossicon}
                        </p>
                      </div>
                    </div>
                  )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NotificationModel;
