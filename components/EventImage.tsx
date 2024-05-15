import { Event } from "@/utils/interface";
import { Image } from "@nextui-org/image";

interface Props {
  event: Event;
}

const EventImage = ({ event }: Props) => {
  return (
    <>
      <div className="mt-10 lg:p-10">
        <Image
          key={event._id}
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-auto"
        />
      </div>
    </>
  );
};

export default EventImage;
